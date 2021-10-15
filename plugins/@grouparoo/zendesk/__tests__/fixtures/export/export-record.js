const nock = require("nock");

nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ query: "grouparoo%40demo.com" })
  .once()
<<<<<<< HEAD
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:14:27 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "699",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-8kdh6",
    "X-Request-Id",
    "6a16a111291e7104-SJC",
    "X-Runtime",
    "0.290867",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a111291e7104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AdeS45qemn2%2BwphSpIwggZ1tFSxtFHlXUhQ4xQwIcyRo6tVV%2BJ0yzSAWs14WvOr6560hK0e3Y8SWM79liQ01xwJBoi6qGc6ZvshbFgavNHB2ZRahQlAMYjVLdNYeG2eUxo6UXsR5l%2B21Vt4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a111291e7104-SJC",
  ]);
=======
  .reply(
    200,
    {
      users: [
        {
          id: 420908756412,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420908756412.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:33:33Z",
          updated_at: "2021-10-15T17:33:51Z",
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
      "Fri, 15 Oct 2021 17:36:10 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "699",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"a7144bc9fea0006ebb373d528d5313c1"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-4gjrf",
      "X-Request-Id",
      "69eacedbc9cc6abc-SJC",
      "X-Runtime",
      "0.215584",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacedbc9cc6abc-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eeJKIlQG2Tx8jQ0K1QIcswrwY6CJ0Tq4SZYT%2BcMJl%2FT1bIMa5u7AEkq5%2F1n4Cl2ZPTavjnYWMrrwNzuhN7UIfoBj0sAr9alqS28oRz9wd2BUFhRTBJqbKsK5uNq0%2Fb8Fp13llkJ32pdqKnE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69eacedbc9cc6abc-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/420908756412.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420908756412,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420908756412.json",
        name: "John Connor",
        email: null,
        created_at: "2021-10-15T17:33:33Z",
        updated_at: "2021-10-15T17:36:11Z",
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: false,
        external_id: null,
        tags: ["test_high_value"],
        alias: "",
        active: false,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
      "Fri, 15 Oct 2021 17:36:11 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "698",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"63c2837f221915b295e8088c430d4aba"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-2phd5",
      "X-Request-Id",
      "69eacedf1eba6abc-GRU",
      "X-Runtime",
      "0.531445",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacedf1eba6abc-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kt2SmWk74JfXQ4ILQTGiI6J0CYa4F99hlRKs3FyEX3Ir8AJzwNsx7CeAz0tDo5KpmOaWtV0Yw5Gwt%2BNQJMG1caD8QcDe1%2FJ%2FanUrL5EuGa%2FpYnjL4z5gYwOI55ZBcFZTAYCF3mHxHF9n%2Fbk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "69eacedf1eba6abc-GRU",
    ]
  );
>>>>>>> chore: improve error message collect.
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:14:28 GMT",
=======
    "Fri, 15 Oct 2021 17:36:11 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "698",
=======
    "697",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-p6wv9",
    "X-Request-Id",
    "6a16a113cc8d7104-SJC",
    "X-Runtime",
    "0.168797",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a113cc8d7104-SJC",
=======
    "classic-app-server-5d8f87bff-tl42j",
    "X-Request-Id",
    "69eacee84d0c6abc-SJC",
    "X-Runtime",
    "0.174436",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69eacee84d0c6abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JAujc8SNRGYNkM0UMQ%2FmtB%2FEzMT4nAqYiX4JZjKcRbvQRqJJqskddjDi69Jqj4UJ%2FIvky1yfH9RJtSatGb0mBBZGfNkBejvsrPXPtpxwQokBJZep4p9fKOfQQoPqFiCdHLfd4JrmZ6r5hbI%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KPTahIov7j6OgaekT%2FrBIJFOTbUDJJDI0qG917vegziKElXZaBGuOUbz7KxFIsKtr778ckNBxSpmicu5YpjJ%2B5m%2BQ0YH82Hz8gxzWy8ybQfMF3wgleiTmFc%2BmTzm6r2FctIcO0Eta7GJH%2BU%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a113cc8d7104-SJC",
=======
    "69eacee84d0c6abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:14:28 GMT",
=======
    "Fri, 15 Oct 2021 17:36:13 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "697",
=======
    "696",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-6rqt6",
    "X-Request-Id",
    "6a16a1155e4d7104-SJC",
    "X-Runtime",
    "0.189204",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a1155e4d7104-SJC",
=======
    "classic-app-server-5d8f87bff-lg66z",
    "X-Request-Id",
    "69eaceeb49846abc-GRU",
    "X-Runtime",
    "0.177226",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69eaceeb49846abc-GRU",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ycqGVbAE9ksJhTSjpfIj%2Bjde%2FxfK1f%2B958EhnVybPvnxbKjoFsZlKOb2cDIMdfunN0Yzelr%2F5eACQoLi%2ByohCMtJuZWk9PTLHgTuaFpseTsCg3jknjfi6jeAznJa7RaxPzbAfqWgNAEzc8g%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8W%2BhM%2FbBMpjQw9%2Fio0Libaox4sAt%2Be7q%2FifVLM4ujPvbGxz54KHZTP82%2BX1D8OSCyuBUkY9WekuiWNXXkBBGJMBbJGqmfXCiQGN9KiHgjI%2F%2BwPwaN4%2Br4baNUgAtDmUky2bjEwH6bt27uPg%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a1155e4d7104-SJC",
=======
    "69eaceeb49846abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:14:28 GMT",
=======
    "Fri, 15 Oct 2021 17:36:13 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "696",
=======
    "695",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-qdvvd",
    "X-Request-Id",
    "6a16a116f8777104-SJC",
    "X-Runtime",
    "0.186052",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a116f8777104-SJC",
=======
    "classic-app-server-5d8f87bff-pgwlb",
    "X-Request-Id",
    "69eacef2dd6c6abc-SJC",
    "X-Runtime",
    "0.173450",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69eacef2dd6c6abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g4L1oI6tFdBdh84TZ8%2FAJDWdQZyX9iWAl%2BXAEST5ZZjW3paGpo4Hr2%2FM3Jei5B0b6gRrJHC2V7p90A4Gp6aT0nbmax6G5k49PBbGpaU8Hy7h2%2FeAIa3qb%2FxVqV8bErQ9BtvvpsA5tPIdnkE%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ik6j%2FuFQeliKWursujuhQuNoA1FNNfTf6SN54NiXmqOr48XEkBb5slfCcE0oqMnanhiJOQnuO%2FR9WuN%2B2Mw4%2FnYBbb9iV33PxP0scXpf7Nw4OYDOpi9k38Qv8ARIiopq328O92L%2BQIN4zLk%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a116f8777104-SJC",
=======
    "69eacef2dd6c6abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:14:28 GMT",
=======
    "Fri, 15 Oct 2021 17:36:14 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "695",
=======
    "694",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-c29h9",
    "X-Request-Id",
    "6a16a1188a787104-SJC",
    "X-Runtime",
    "0.170077",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a1188a787104-SJC",
=======
    "classic-app-server-5d8f87bff-2grvz",
    "X-Request-Id",
    "69eacef5ba676abc-SJC",
    "X-Runtime",
    "0.168918",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69eacef5ba676abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cUtDb%2FK38zfK40cDMZjk1CY4SmNNtuHyP5Nn4sJOaDUEiNCmEeARy6NKEyxQQIu4cgkgiUm7rLU%2Fn21sQuuGoTlWtVF4pW6walGvohO8NAsa0fjozT1wdj9CloypSKQmkpYzxrBwOHSdycw%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r9%2FiU4cVYaW2T02X2A9CzWR6kjOEH7t9oxPI3zT1hNOr%2BZvCv9DfRpLY8SmjaPUXuWgxd%2FjRT2P%2B6l0CRMS777Opdl1Kr3lf%2F8unsY5CByjs9W4guYsW5TFwDTYs5c51%2FvR9gLNwIkyuRzA%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a1188a787104-SJC",
=======
    "69eacef5ba676abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:14:29 GMT",
=======
    "Fri, 15 Oct 2021 17:36:14 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "694",
=======
    "693",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-gq7vj",
    "X-Request-Id",
    "6a16a11a1cb07104-SJC",
    "X-Runtime",
    "0.155758",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a11a1cb07104-SJC",
=======
    "classic-app-server-5d8f87bff-rblr7",
    "X-Request-Id",
    "69eacef898056abc-SJC",
    "X-Runtime",
    "0.169567",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69eacef898056abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7Kk%2BnMphP95XbuSgxAZ9X7Kj%2BJl5YhTBoFfZr9XStrI9DQ4FSGA8KQbpGAVWnZKzAFAXUDuOBW9cOWmolbL2fmzB%2BCW2qkykBI2fuIcJousJqvaVYM2M9m7xaHC3nlc%2B5bZbk2oHLBtqeLA%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0SOshgy8rL0KsnrkBgXFenU5ACO9p8SxPTst4wQaNzRmwnRYE5ZoRDgPyv28N22uk2nOs9xGQEoO%2FO%2FvT%2BNcQdg6GFN1OdjpDT5u4iUSSgVRdGeBs97160U7snbwTnsI%2BJhNBFPZaOlfYQ8%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a11a1cb07104-SJC",
=======
    "69eacef898056abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:14:29 GMT",
=======
    "Fri, 15 Oct 2021 17:36:15 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "693",
=======
    "692",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-9p2j8",
    "X-Request-Id",
    "6a16a11bdf117104-SJC",
    "X-Runtime",
    "0.147275",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a11bdf117104-SJC",
=======
    "classic-app-server-5d8f87bff-6jptg",
    "X-Request-Id",
    "69eacefbbd426abc-GRU",
    "X-Runtime",
    "0.167454",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69eacefbbd426abc-GRU",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IEsrCZA9Abb%2FNx5TsqEaMLKRJkpj4zPdCqwLsGisDl3BLf5LsJ0uPzFN4GYjkAt1MO7LxSKE30aQ7CwYmlzH5PlBtHa0WAgfeuXbmjvfRAbd2yWCztChpFWfNO2KL0xiZ0kcpAR4jTwxf1A%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bdhMTGKgEeVq39wL7THef7wvmH7WKCleo1L25A2QgNRwkCOHz1fZeX8m3sEHX5kH2hqRHKx9G1%2F8xSX2iDB81%2F%2FRNx7uF05SuxO5gsErIuQ%2BFa48kfhaFTWm3YcBWKWoGK5%2F4DtM8alMOZ4%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a11bdf117104-SJC",
=======
    "69eacefbbd426abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:14:29 GMT",
=======
    "Fri, 15 Oct 2021 17:36:16 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "692",
=======
    "691",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-dlvxl",
    "X-Request-Id",
    "6a16a11dad7e70c1-SJC",
    "X-Runtime",
    "0.157556",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a11dad7e70c1-SJC",
=======
    "classic-app-server-5d8f87bff-pzs9f",
    "X-Request-Id",
    "69eacf048eb1d020-SJC",
    "X-Runtime",
    "0.191322",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69eacf048eb1d020-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=77KlYY69N7h5Z4SB5qGAZozejG2p9FMLdLN990%2Bi19dXOVROBrjdzygmwsOOs1W1lI7LOvuBvwBOuElpOa2XSKw99y37xmOawvhe0I8DhfWlh6HwdLGQSjsp9Q6hves665xP65C0BbisxUU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=920219a0938cf95891177e0402e764366cfbda1a-1634778869; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a11dad7e70c1-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y7mHoO7Jm2Uj3EzsAdvLHrN73%2BqVy8ia8JbQaKll36ySDhe%2FWIU0xYaSpZKiiFv0TtPV3YdGXBvzezoE%2B%2FK4QpHw%2FOivflFgbgVPjb56LZ8%2BR78K6jHB424tAAGtcY0u6fpSoURc881yvcw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=c4e509e64837e0852ed0b6bc7a1b6383ecb9bcb3-1634319376; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69eacf048eb1d020-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=920219a0938cf95891177e0402e764366cfbda1a-1634778869"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:14:29 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "691",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-k8blp",
    "X-Request-Id",
    "6a16a11f2f2270c1-SJC",
    "X-Runtime",
    "0.183842",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a11f2f2270c1-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n8NcaTZcwfM90ho2bZSntb%2B3gKszLYJw5Y0PHdPDOYJXH8YgAef00oTNu7z0XiiamKqyuKOR9Ndwx5ZfZQ2wX8fj40zcR5SsjOoz%2BQP9TpWHW3xfA28BGl%2BZ2uekJ8QcH94bclmJeJgWBO0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a11f2f2270c1-SJC",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/create_or_update.json", {
    user: {
      verified: true,
      name: "John Doe",
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      tags: [],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=920219a0938cf95891177e0402e764366cfbda1a-1634778869"
=======
    "__cfruid=c4e509e64837e0852ed0b6bc7a1b6383ecb9bcb3-1634319376"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:30Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:36:16Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: [],
        alias: null,
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:30 GMT",
=======
      "Fri, 15 Oct 2021 17:36:17 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1006",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
=======
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
>>>>>>> chore: improve error message collect.
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"0b8a627e942d637a986d3ef426bc26fb"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-ghppp",
      "X-Request-Id",
      "6a16a120e90470c1-SJC",
      "X-Runtime",
      "0.396095",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a120e90470c1-SJC",
=======
      'W/"5ffaae0c35d126f92c059a9b5d092578"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-sfc25",
      "X-Request-Id",
      "69eacf07cc01d020-SJC",
      "X-Runtime",
      "0.469238",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf07cc01d020-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aF5rf3UMzMcZQcdMctz8q25bXXEk4P64rdYag7GH1jFVjT7K2nIt4VBKvXXqJVN%2FGeCPmtTLdkoPkVJOfisJBlKar985U1ShD%2F2Ud1TQ7mwQcZVXjppPgKcWIGwp1qR5DsTTzoA%2B%2BczUQ08%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=32Uqo7n7PTgNSED%2FtRwLm%2FnnvkIBH8Dbj7rw2ooQ7iWfyii%2FBHtg8YaYsWK33zj6WKRkVIJwlP6di4%2F%2BM2b3bsE5O68hXWbAjPOFCn%2FRL6E2mOXwOeDaWyEla85XcHn2TxyEIVF5elWhP5s%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a120e90470c1-SJC",
=======
      "69eacf07cc01d020-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:30Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:17Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:30 GMT",
=======
      "Fri, 15 Oct 2021 17:36:17 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"a2bf16503b1cb70dd2e4db9686babe1b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-j46t8",
      "X-Request-Id",
      "6a16a123d9c47104-SJC",
      "X-Runtime",
      "0.202325",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a123d9c47104-SJC",
=======
      'W/"795c75489aeae164e7bf332c1591e25e"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-xkqkc",
      "X-Request-Id",
      "69eacf0cab2b6abc-SJC",
      "X-Runtime",
      "0.184541",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf0cab2b6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tNCS9b3kg%2FUOk5sV%2BCghYGS8NNYAX7Mw1X9xJugCWPFl7cCnZs9R4xxXes0B7rBeYHywiNl4ErqPNsW%2F5qJVeqe2z4qvEq%2BZwVW0AdI2z0mzjybxfLhpoyKajBrSxHjHb6MuE1ia%2FCF0hSQ%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=18qUdu%2BpBxVTFagL63TJ1EWc4O0F8JVJD46Ykw35wh9wqOpiP00cQXFd24JnMMT0lerzOFgHoSpmHSSV9XHUXtuLQapyPMVgAYa%2FqSZ16IFM3ody7%2FAw88NF9BooLtngpOk8GCJczf9HWho%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a123d9c47104-SJC",
=======
      "69eacf0cab2b6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "othergrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:14:30 GMT",
=======
    "Fri, 15 Oct 2021 17:36:18 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "688",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-m2jxj",
    "X-Request-Id",
    "6a16a1264cd0645c-SJC",
    "X-Runtime",
    "0.153665",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a1264cd0645c-SJC",
=======
    "classic-app-server-5d8f87bff-fsb4j",
    "X-Request-Id",
    "69eacf11c954f6bf-SJC",
    "X-Runtime",
    "0.169837",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69eacf11c954f6bf-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CM0DgjgTf2GACIceTQBn43ZPbP%2BTo1dtBSKr3soV4oBlohQ2aC8YXrq6NhCnaL%2B4gUZVlbIvneyJwIKLy2FpY0yDfXc4TqnSxJprlq9bcopevCt3YfuwNjBkkpHWPhF3JmXZ7O1vaxSYiAI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=0eeeae4bb5baa51a2ba5ef1d2e3ecab1c34aba41-1634778870; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a1264cd0645c-SJC",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=0eeeae4bb5baa51a2ba5ef1d2e3ecab1c34aba41-1634778870"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:14:31 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "687",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-wcj5p",
    "X-Request-Id",
    "6a16a127bf66645c-SJC",
    "X-Runtime",
    "0.158902",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a127bf66645c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Cbikt%2BTtjVDwMWsWl0Yt1PJuqwe1FcsYoR8zwE3Bq93y6A2XHnd7PVvwFGVDc4WDZjweir90uYP0zOUg1Lu5cZdXgxMiy56CNtlUei2yDdWb9d4F7syEE%2BNJs7fjpJEe%2BtWbMPbyxvgdjMo%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a127bf66645c-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q%2FeD6g6Txa2GBOlHRsjme9uG5kGpuBUag4XPzm3ReIYyjyrjvCyyJAY15JkmWb1%2Fu8dbBHsUMQAPF5Lsd9ZA0wgTIll050bUI9IpZYBXQREoN4v%2FewfjAQG24ZBP1CDjPPan%2FADhqCnvcPY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=d88cf497d45e63478b563f36a42d29f08b4211f9-1634319378; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69eacf11c954f6bf-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:30Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:17Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:31 GMT",
=======
      "Fri, 15 Oct 2021 17:36:19 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "686",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"a2bf16503b1cb70dd2e4db9686babe1b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-mcn8h",
      "X-Request-Id",
      "6a16a129ad3e711a-SJC",
      "X-Runtime",
      "0.192077",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a129ad3e711a-SJC",
=======
      "687",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"795c75489aeae164e7bf332c1591e25e"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-rblr7",
      "X-Request-Id",
      "69eacf171cca51ae-SJC",
      "X-Runtime",
      "0.244423",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf171cca51ae-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IlSPPTFzEWGWQZbGni5DloBiVwcIO1NTTEhOkmdnUO1ByRI%2Bnh2RxDG57LnkFah%2BB2PgDS%2BgephSx0eLlEPqzlr1HjN7Ckn4TiLYWCwab6b9ao5em5YkRTxHxQoIjml9wkWCVoEQ0MheEjs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=e96dc09d509531e504c33846b035ae5b11fc7c53-1634778871; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a129ad3e711a-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OLjB5nIjWrTzuYrOAeHQf4ygG4O9vnDyfowyxVjBR0tDhiIKOXhOm7aTqli4jt0koipiUIMu9dN9NLN8y2fOiKAG7n%2BqOzL%2BR285DFb6QmPVrCMtmspWMxoGMoyssxVc31sM9m%2BSdGQtNpI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=75051452955ab45d1f26b6446e4178438836eb41-1634319379; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69eacf171cca51ae-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      name: "John Doe",
      alias: "BL",
      user_fields: {
        text_field: "testing here",
        date_field: "2020-08-19T20:50:04.000Z",
      },
      tags: [],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=e96dc09d509531e504c33846b035ae5b11fc7c53-1634778871"
=======
    "__cfruid=75051452955ab45d1f26b6446e4178438836eb41-1634319379"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 209)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:31Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:36:20Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: [],
        alias: "BL",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: "2020-08-19T00:00:00+00:00",
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: "testing here",
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:31 GMT",
=======
      "Fri, 15 Oct 2021 17:36:20 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c3fb646c7f8601f1473061c3ecf5e5d3"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-65j6m",
      "X-Request-Id",
      "6a16a12b6f4d711a-SJC",
      "X-Runtime",
      "0.348276",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a12b6f4d711a-SJC",
=======
      "686",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"b8162cf65c11b50d0a3aa3dc35981265"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-ck2v4",
      "X-Request-Id",
      "69eacf1a8b9a51ae-SJC",
      "X-Runtime",
      "0.396242",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf1a8b9a51ae-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kjTwx7tpaKmfYGqhKJ7pEv0JioOHlRn%2BEEGpS%2FH3JNRr%2BDQ1tPbd9Y7fIMzyhavZNLskabzdX4aglwY0qc4XXOKpfhI8TZW5NDr7jma8fmTvaGGOYon5vXrWp3TS4HaWt%2FnBBGxpJCGC%2BZ0%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0l7nTIazO%2FNMe1zBzZG43qVZ3tmusqczSaa0oNrkh2fGRQZKZRf6EmsxId33SOigU%2BCCIBusIvvgVBe4WPqrt6YrjV545yzKjmJSglbGnvArXKIQTACMYZ9SYfTM0o81KL86b2oN%2BLtlhio%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a12b6f4d711a-SJC",
=======
      "69eacf1a8b9a51ae-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:31Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:20Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: "BL",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: "2020-08-19T00:00:00+00:00",
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: "testing here",
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:32 GMT",
=======
      "Fri, 15 Oct 2021 17:36:20 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"83ee14a16ed991cb3cc600c9d5752da0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-qmjhp",
      "X-Request-Id",
      "6a16a12e084f7104-SJC",
      "X-Runtime",
      "0.219778",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a12e084f7104-SJC",
=======
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"96f728d07c68a28f2b5bbac093fdf482"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-p567z",
      "X-Request-Id",
      "69eacf1f5bc96abc-SJC",
      "X-Runtime",
      "0.212826",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf1f5bc96abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QWkownh0aJV5korsbg6fnWjSOFFMsouFzNc%2BH59LML9MN8udzFc9x2vCkehbzOSJgpNanbzzx9Pnw54tR2fbmkse7DShwu3yTDzNp9VOc0LAasiq3CJoIOXeKSqE6hsYD%2BK%2FFTwUzBRYbDU%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hKoTLY5J8nZjpefhssnGkYas062wNpcinphDwU4gj5B0tzyjj%2BSjQ2jURoMH9HAXMTfNUOCgU9%2FZUgHndjjMOMa9usJ%2FB5nK0mO1o8wsOjEDWNVFtkpHs4%2FDeDkWdWF4bOKZ6mAPcj1sggk%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a12e084f7104-SJC",
=======
      "69eacf1f5bc96abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:31Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:20Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: "BL",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: "2020-08-19T00:00:00+00:00",
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: "testing here",
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:32 GMT",
=======
      "Fri, 15 Oct 2021 17:36:21 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "683",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"83ee14a16ed991cb3cc600c9d5752da0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-qmjhp",
      "X-Request-Id",
      "6a16a1307a451c97-SJC",
      "X-Runtime",
      "0.197869",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a1307a451c97-SJC",
=======
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"96f728d07c68a28f2b5bbac093fdf482"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-pgwlb",
      "X-Request-Id",
      "69eacf243c4af6a3-SJC",
      "X-Runtime",
      "0.218857",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf243c4af6a3-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E5gDPSFpgPenx%2B7aqCbDyPHWrJCW3nIIKYz4KnysNIgjn6yKsq%2FEh0ihpF6eCwgIJkXLIhjhP%2BWqi5748SgX0vwlQhES7vPPioFsDL2twrpd%2BIa29z9jZbzZ%2B3KuxaWzd1fBfDxpvQap6nc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=0329498512585b06a63625b78faac93ef187eac3-1634778872; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1307a451c97-SJC",
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P6nB53EUwTiICrGHCQQycCNwpg80Y52rCdZjMODZBJ8KmvgBTfF6V51ds26xnAJ9Q5elZgpmPtKTD%2Btqn9ZFY2F3z9nmbUwZDzjXzXWO6Y6jheGZCrKDxJICarVVDF%2FeHxeX00UkozTOMZU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=222da23bf2675df632b92501ee9e929faf5beb56-1634319381; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69eacf243c4af6a3-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:31Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:20Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: "BL",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: "2020-08-19T00:00:00+00:00",
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: "testing here",
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:32 GMT",
=======
      "Fri, 15 Oct 2021 17:36:22 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "682",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"83ee14a16ed991cb3cc600c9d5752da0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-6djtl",
      "X-Request-Id",
      "6a16a1324e497104-SJC",
      "X-Runtime",
      "0.208475",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a1324e497104-SJC",
=======
      "683",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"96f728d07c68a28f2b5bbac093fdf482"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-tjlfz",
      "X-Request-Id",
      "69eacf2779946abc-SJC",
      "X-Runtime",
      "0.253766",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf2779946abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d1sqwprqdMjWcAJq%2Fjug%2BgEObtEcZLeL6F9HcVdUIxA9Hih4mvDQTUhkxtzOYx4SI0%2F0F9TtVQGyx%2F%2Fj4pyxB6tDO38o3EcwPmTKP4Zm7lRA83c1cRLhCPJYJwmbXf38iFyBD7OjiTb0TZ8%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z7lMjYnhql3vHAwUeaCcc0Owxfbwo4k7h7oPbG7GdBoxWl%2FL7nWWqgQEYR%2BqswWAoNWD%2FFeg5iq3ONhGN5fg%2BWxMzsYEKRUJO7JvxXB6YfivUTfHQX3ZmXlVbFKu%2BAAss%2BIpmpdXgELF6W8%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a1324e497104-SJC",
=======
      "69eacf2779946abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:31Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:20Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: "BL",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: "2020-08-19T00:00:00+00:00",
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: "testing here",
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:33 GMT",
=======
      "Fri, 15 Oct 2021 17:36:23 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "681",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"83ee14a16ed991cb3cc600c9d5752da0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-zvn8h",
      "X-Request-Id",
      "6a16a1346eab6423-SJC",
      "X-Runtime",
      "0.224247",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a1346eab6423-SJC",
=======
      "682",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"96f728d07c68a28f2b5bbac093fdf482"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-t7tz5",
      "X-Request-Id",
      "69eacf2d0a17f677-SJC",
      "X-Runtime",
      "0.232415",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf2d0a17f677-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VO1WeyCy%2FUgW0xdO%2BxkQkVQw2Z0Vk6gy8wSeNqHTY7S3sMyBzwb69xAZc54HwMtoo3ZfWVlRDQmzXS%2BkD%2BZZQ6VVJ1RFqzk6EIRVaHci684X8C%2BOjHUONYgup9rFKqE2hxhaikwmNldFUR8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=64d4c15ffb67207391ab69ee9bbfa502a9472031-1634778873; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1346eab6423-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eeDNQgwxvSqnnCwqDVpD5%2BPxxAFupTsKduMWl4zq5YoLsrX5%2BPAzVl1AMgHxlN4afO8aRMdxEm6wYzqlSKmJEhLNwgnxpBea54xxt4%2FyMQbWkaWkc%2FuvORw6V%2FsZsQC%2BRUsLLEqMpY2SAts%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=f95c70b298919312ed72e037a2873c9c2c748293-1634319383; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69eacf2d0a17f677-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      name: "John Connor",
      alias: "JC",
      user_fields: {
        text_field: "other test",
        date_field: "2020-08-19T20:50:04.000Z",
        numeric_field: 3039,
      },
      tags: [],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=64d4c15ffb67207391ab69ee9bbfa502a9472031-1634778873"
=======
    "__cfruid=f95c70b298919312ed72e037a2873c9c2c748293-1634319383"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 231)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:33Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:36:23Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: [],
        alias: "JC",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: "2020-08-19T00:00:00+00:00",
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: 3039,
          regex_field: null,
          text_field: "other test",
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:33 GMT",
=======
      "Fri, 15 Oct 2021 17:36:23 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "680",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"4cbf97f6bf93d07a4515daae4da15acd"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-77d77",
      "X-Request-Id",
      "6a16a1365a2b6423-SJC",
      "X-Runtime",
      "0.383311",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a1365a2b6423-SJC",
=======
      "681",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ec86ea877d980ea5f2724652497137d8"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-g2rsr",
      "X-Request-Id",
      "69eacf306ff4f677-SJC",
      "X-Runtime",
      "0.471259",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf306ff4f677-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Bhh5sl9YVzkYlWDWZSNtt9%2BnihT5eOu7DhM2%2FSfIgSkKguUB%2BQghz0Qwm1XLlmtq33TqUkPJeApuTkP8eo7tAD9VtVuRWLJpdHwvlPxAsMOCDoRBIoYcp%2FDb2jUT3cqnqgBqiakRaIRuFLY%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hf2Od0jEBd5%2FMQx1ua5q9HS2fhQPNI5SbpH%2BNU450WtlXJ4uvUzvY8B1%2FIyG6vTK1LDmiEEvKj6r6UTXGDJaR8KFGvlSjQ5wWoQOfsolPKeX16JQ0IPYGMF%2Fpol8dZY0TRxH1z650kN%2BetA%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a1365a2b6423-SJC",
=======
      "69eacf306ff4f677-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:33Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:23Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: "JC",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: "2020-08-19T00:00:00+00:00",
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: 3039,
            regex_field: null,
            text_field: "other test",
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:34 GMT",
=======
      "Fri, 15 Oct 2021 17:36:24 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c92d379e80a1d532b18ae261ef15ee08"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-lcwxf",
      "X-Request-Id",
      "6a16a1394f2e7104-SJC",
      "X-Runtime",
      "0.219244",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a1394f2e7104-SJC",
=======
      "680",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"1622fee82f890cd1e94e345c3b0bf853"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-6hd6z",
      "X-Request-Id",
      "69eacf3528de6abc-SJC",
      "X-Runtime",
      "0.211918",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf3528de6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wz5f4hoqxjevUr82XUJmVT%2B6b7jG89WrklRJmxn%2FpQia0%2FsipK%2B3UU3SZ4OhCWId%2F2KE1wGqFwJPW7Z7yMtTIzTVts%2BqsdRyy6V5n0Wtze3AJkl7ZeFspIfzXwKcE1FO%2FIU1UpmpY7N2Qp4%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=srIPTDtkGJ08V2qOJdo2gXZcZMIlpVwaqv0cvlW3CIuWt9U93PKhVoCFnD8kPaspn2WPoAyhOhHs9VlGnkV8faMdX3fLKnQvgqinM0KKvT3hF7Zq5mXNspeDYRm%2BIGN1o8%2BkvLtMPhchoik%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a1394f2e7104-SJC",
=======
      "69eacf3528de6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:33Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:23Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: "JC",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: "2020-08-19T00:00:00+00:00",
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: 3039,
            regex_field: null,
            text_field: "other test",
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:34 GMT",
=======
      "Fri, 15 Oct 2021 17:36:25 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "678",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c92d379e80a1d532b18ae261ef15ee08"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-jcf42",
      "X-Request-Id",
      "6a16a13b9bc00231-SJC",
      "X-Runtime",
      "0.225343",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a13b9bc00231-SJC",
=======
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"1622fee82f890cd1e94e345c3b0bf853"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-xvzkj",
      "X-Request-Id",
      "69eacf3a5f626aeb-SJC",
      "X-Runtime",
      "0.225316",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf3a5f626aeb-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xkofkmWfmX9ru2kvBHEAmV9N2GMpPHMNuhACs1IPcfyuR3v7oX%2FWHRffuNkiQs9mjIMYHBnyu626njxmBbnHOMFsw%2FynHT4Dlse5Slg8d08yxvp9H20vRBVEeZXFHS7UgwNlFpUIBxm9svg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=9d853ee7262d90463e5f9df78e10be4ffd96cdb9-1634778874; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a13b9bc00231-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K1IHFUJCUJ6is3yO2%2BwO3BlRy9%2Fwy%2F%2Bb%2FYou%2FfFKdCsG6SpfckX%2FoNl118IoxssfQSntaZ4D9zYWc31aWpTgaxihPGVvobaqow683%2BHPOFlchUUnlG0Cn%2Fmpl3H%2FiDS4aEib7VGrEJpi3hY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=eec7f62a9fcd9a37b13f9f1f80fce2e709cd6e12-1634319385; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69eacf3a5f626aeb-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      name: "John Connor",
      alias: null,
      user_fields: { text_field: null, date_field: null, numeric_field: null },
      tags: [],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=9d853ee7262d90463e5f9df78e10be4ffd96cdb9-1634778874"
=======
    "__cfruid=eec7f62a9fcd9a37b13f9f1f80fce2e709cd6e12-1634319385"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 201)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:34Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:36:25Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: [],
        alias: "",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:34 GMT",
=======
      "Fri, 15 Oct 2021 17:36:25 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "677",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f8e7888ce6cbd07fac2911ecc0ddee31"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-sqd5l",
      "X-Request-Id",
      "6a16a13d7dee0231-SJC",
      "X-Runtime",
      "0.383848",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a13d7dee0231-SJC",
=======
      "678",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5cad1d5b6e4b1db594c29fe1a4043111"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-5rvxk",
      "X-Request-Id",
      "69eacf3d9d9e6aeb-SJC",
      "X-Runtime",
      "0.409132",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf3d9d9e6aeb-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8OR2kAzqYErtu%2FH9R4ba9lOUGn1DPlJQEz1VJdQe6ro9Dg%2Fq7eQqRNxdeErb32mOyS9ef%2FM%2BZdbEHJfrcJDZ9v14XTv8Y0zDR0ie3zm7m1nt0YPngRRJluAe4CvTTv6ceLH5xXsH5OU2mKo%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0TXY1AMr%2FGLNeYVwd9sV%2BnJF3x82qs1kXJPWJdmsGuQITGY0NEmYLytCWtwMkA7ySF7IkGPWQ%2FOSUgE96N3nbMAC3BquA1L%2Bf6VxYpKk5ruKaZXFDR%2FOLQD6NNOcm%2BXeAAo44Z16MIOB%2FYo%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a13d7dee0231-SJC",
=======
      "69eacf3d9d9e6aeb-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:34Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:25Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:35 GMT",
=======
      "Fri, 15 Oct 2021 17:36:26 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "676",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"617596eaa26e1527d293c00e49b518d6"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-66flq",
      "X-Request-Id",
      "6a16a14058867104-SJC",
      "X-Runtime",
      "0.198407",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a14058867104-SJC",
=======
      "677",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c5b0c2b4c58eff37d26989443efbff7a"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-p4z6g",
      "X-Request-Id",
      "69eacf420e486abc-SJC",
      "X-Runtime",
      "0.220038",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf420e486abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P%2Bf%2Fhzwnj4iOOxPkpYC9QCbPtwxr3y%2BwiFfPH8lNEOtpE9Ik%2BRpl4%2F4fZpUY4CnV0%2FMwEaabquGTxHK86TIJkuw5R%2FYw17503OeDKsmE3Ewci2adU313zmas1I5VJ%2FEWI1gK6UxsANK2hFk%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=szUfpG9wYsAKSyj7XMrOXYa%2Bc4ciqw7sEQ4zke7FzpTbTQFiZeYRUSVJZaO4z%2F3R18DZCXug0Yv7Xc9ruKauPMTHD%2FgrfUhZfUpFOzBy74RSqZwODsUE9qBZOFAIbP%2B5MBduuONLYE1U5UM%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a14058867104-SJC",
=======
      "69eacf420e486abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:34Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:25Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:35 GMT",
=======
      "Fri, 15 Oct 2021 17:36:27 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "675",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"617596eaa26e1527d293c00e49b518d6"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-mr6vx",
      "X-Request-Id",
      "6a16a1428c242584-SJC",
      "X-Runtime",
      "0.186319",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a1428c242584-SJC",
=======
      "676",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c5b0c2b4c58eff37d26989443efbff7a"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-7vjsq",
      "X-Request-Id",
      "69eacf47084cf3c7-GRU",
      "X-Runtime",
      "0.191609",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf47084cf3c7-GRU",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wTfr%2FxMUjDtO8%2BIclvz8ZY2KO2NbJptGKZQmPIJOuBy1XN3MBuDLCeBNGtEKJ%2BVfaMN0TW9FVHnAAPK8QGpCWdFcshzAC1f7sbwqLE43wiaIGiYMFp3ZO5Aaj88ho2BOm96zxCvbihGo%2FZY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=19012d817d5a1450115f382c0e1d1339195e999c-1634778875; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1428c242584-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ewS9sJ0kumWFOzWjX0AAmW10LWhm8cfQRb5oZtrfpujxzPrV0DNeSn%2Fpiir3u4e8pewQ6dmGArmrvA1kB3rCoKYX79XD0csgKOliSkgKhOhkEC0LeivKODaTH%2FIDDTUuZXkFqR%2FVpngy%2FPc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=839e9fc883bb04e5a4a48eee7fe2a97c4d539d40-1634319387; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69eacf47084cf3c7-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      tags: ["test_high_value", "test_spanish_speaking"],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=19012d817d5a1450115f382c0e1d1339195e999c-1634778875"
=======
    "__cfruid=839e9fc883bb04e5a4a48eee7fe2a97c4d539d40-1634319387"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 135)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:35Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:36:28Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: ["test_high_value", "test_spanish_speaking"],
        alias: "",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:35 GMT",
=======
      "Fri, 15 Oct 2021 17:36:29 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "674",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"a310012340fdaa830bffcb765b61a2ef"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-txfm6",
      "X-Request-Id",
      "6a16a1443e642584-SJC",
      "X-Runtime",
      "0.295235",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a1443e642584-SJC",
=======
      "675",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"44405a199711f9982a942d3430a28352"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-v8tt6",
      "X-Request-Id",
      "69eacf4ebb9ef3c7-GRU",
      "X-Runtime",
      "0.395110",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69eacf4ebb9ef3c7-GRU",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rYKTc4eMJOYxAgni2HQEmVdN%2F9WIv01GUVfpoaeNy7pVz%2BY465Ue6i3ExFOHgnPiBLMCg5dLYqAeAVBysItiGBddI33ZDJ4xXQ%2FkFoxE6hDm5%2FL6tO4Tm1HX8Rk1UiKLbDhE3rwC%2Bn8NOcw%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L1tBzQCNLhizk1tjhxUeDHD9P%2BGVdHs%2BhRPLjMXU6IgwZC30NlbKByU7qkWjE%2FdX7DyymirbXNw8dXOeGWB0K4T7S24LG2T1jfenx1mC9qB49%2FoT2ev7OWHfaO8CBuLcUzEuBmN3qBL%2FRfs%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a1443e642584-SJC",
=======
      "69eacf4ebb9ef3c7-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:35Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:28Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value", "test_spanish_speaking"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:36 GMT",
=======
      "Fri, 15 Oct 2021 17:37:29 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "673",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"77f7046b1567acc2d1a322f23ba11d30"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-p6wv9",
      "X-Request-Id",
      "6a16a14698db7104-SJC",
      "X-Runtime",
      "0.191268",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a14698db7104-SJC",
=======
      'W/"426661a02f6d99d31e211a783f994dfd"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-zbdxj",
      "X-Request-Id",
      "69ead0ce8d426abc-SJC",
      "X-Runtime",
      "0.210695",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0ce8d426abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A6q1sMectFDrG7ylEEIZIIBMG2JAUlpHNvU7pHdoj4FchLj%2BOKQPmU4Cats1Crgpw84z5Lz8ZoQlbjCEmpqY6us2lpK%2BSGPt1JhTLStXIj9vbJFEPmGJyuOgW26IPaLVAehURBUjUN3ZQpo%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aVNcqwOu6yChrQT1dN%2B7M0PZgiIJ9u8BikciifzgBo%2FermP7akmpXyyK05ugenkYdUrlDa0LWy0RP3mTA3XWXfeC4tem8oJ2lQK5zy5s5YdBs7QNR4CEwTrgCpJMFRtQ%2FabjUwPLgto47%2FI%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a14698db7104-SJC",
=======
      "69ead0ce8d426abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:35Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:36:28Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value", "test_spanish_speaking"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:36 GMT",
=======
      "Fri, 15 Oct 2021 17:37:30 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "672",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"77f7046b1567acc2d1a322f23ba11d30"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-866rk",
      "X-Request-Id",
      "6a16a148a8846453-SJC",
      "X-Runtime",
      "0.198628",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a148a8846453-SJC",
=======
      'W/"426661a02f6d99d31e211a783f994dfd"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-d658x",
      "X-Request-Id",
      "69ead0d36c524b2f-SJC",
      "X-Runtime",
      "0.227108",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0d36c524b2f-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n0wls6zirRdNh2qz1dqsa6%2BrWo2S91%2FATUuZjIoURmF8NdAe5PY55IHhcCclx4O04mSEmjy%2FtOrw14NFRAcBYqVujoWvK1BTqdXKVQl6nz%2FeNSwT57PW3h6580C8clEyd78jfnoXpo4srrA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=20c7c00442165f706066f3d069c7b4b2521a33a2-1634778876; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a148a8846453-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WxHeXpNKpn%2F0ICfj8SRLUs3KmF8ONhhE1TPpde6kv4Pd5T1uNB17y47XaUfzvaipU68rd0tzpwcvJu5z%2FEqomp%2FZ5Ntoqn7AqN%2Fc5TInLiKVv4VGz%2BE8HAdKQBj9ZCHl%2F%2FManH3zEx%2Bm4i0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=36c6245ace8639a55dea62632480469adfc334ef-1634319450; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead0d36c524b2f-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      tags: ["test_high_value"],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=20c7c00442165f706066f3d069c7b4b2521a33a2-1634778876"
=======
    "__cfruid=36c6245ace8639a55dea62632480469adfc334ef-1634319450"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 111)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:36Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:37:31Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: ["test_high_value"],
        alias: "",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:36 GMT",
=======
      "Fri, 15 Oct 2021 17:37:31 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "671",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"7d93ddb96a98752a4508f00f3c8689f7"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-wxlgn",
      "X-Request-Id",
      "6a16a14a7be86453-SJC",
      "X-Runtime",
      "0.283947",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a14a7be86453-SJC",
=======
      'W/"ec9ec2fa18bd5fb7495da5755edd0875"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-p8g8p",
      "X-Request-Id",
      "69ead0d6bb304b2f-SJC",
      "X-Runtime",
      "0.339393",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0d6bb304b2f-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=srTSrbLP7Up20Dl%2BPCskpWFQvBf4hoYLRBCw1PDlXTDcUzC2RO%2FrzMy%2F9DpzkG4U5XzDjGSmwQ7VDQnf%2FCVx04%2BoAoibR2d1Djc4%2FeFebcAHGS%2FDb2ZO3kfsnITh1SQaOzduUvul2wzNTtA%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r0n58PVnV7ZO0qng23T8pBsQ6zmmW5WpW4l3fq6T6T5rBdQz6m7L4QeD4h5juTopp%2BQszwO4U14CubXYwUPojkui9mbN0ZARediawkpbsy4SxnVkYf9rKx1F3e3VvRP235pnG6A6hxWA5sk%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a14a7be86453-SJC",
=======
      "69ead0d6bb304b2f-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:36Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:31Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:37 GMT",
=======
      "Fri, 15 Oct 2021 17:37:31 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "670",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"d6b57de8320fa086a74c8fd6fd64533f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-szl5f",
      "X-Request-Id",
      "6a16a14cb8c97104-SJC",
      "X-Runtime",
      "0.204260",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a14cb8c97104-SJC",
=======
      'W/"57e91986345288f077003d769bb436c5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-fh546",
      "X-Request-Id",
      "69ead0daa8b46abc-SJC",
      "X-Runtime",
      "0.215477",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0daa8b46abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kZmx9FVjiAvK5nH1rRdcFSd3qMwElItghs%2BFGLUpHdySxyYinrBCzpQBwS0BkFj7vXRXqmks8K6H5%2BcPjO3f9H%2BX2QOMOpULQFj5x%2F%2FG%2FrVGahqwRx8Tdf7WqcFtjYXjJtgoBq7my7Wc8KU%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lT2h5uzi6c%2Bspi0xJu%2FfbDKQWYYt1yD8zGoSfhPwF4xj9ZW5ARwgZC%2BHJXrHOHSQ5lZHhtW4VrZ%2FA65jT0VGYfi6tUDocX0m33yoGtdj4XmMYGdpiA2WrZakmXj271uPkMCH1Q3Oas6tNRk%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a14cb8c97104-SJC",
=======
      "69ead0daa8b46abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:36Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:31Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:14:37 GMT",
=======
      "Fri, 15 Oct 2021 17:37:32 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "669",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"d6b57de8320fa086a74c8fd6fd64533f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-fgss8",
      "X-Request-Id",
      "6a16a14e7b1f7104-SJC",
      "X-Runtime",
      "0.199941",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a14e7b1f7104-SJC",
=======
      'W/"57e91986345288f077003d769bb436c5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-pwlq4",
      "X-Request-Id",
      "69ead0de4de46abc-SJC",
      "X-Runtime",
      "0.214255",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0de4de46abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7%2B28pg%2FyYo0UboGsVreSg0xiAXZPbX2mBj6HnuYzA2vQWiPuwh4u6NmM7RRvcBP78wtWyai4aF0cI0UfrgNKcLm8CWcY34jRXw940u6MY7rWYh3uliGViHGw3qJaOlYDSVj%2F2gr4zBU8aUQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a14e7b1f7104-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
    user: { tags: ["test_high_value", "outsider"] },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .matchHeader("content-length", 48)
  .once()
  .reply(
    429,
    "You have exceeded the rate limit for updating a single unique user. user email:  id:  external_id: ",
    [
      "Date",
      "Thu, 21 Oct 2021 01:14:37 GMT",
      "Content-Type",
      "text/plain; charset=UTF-8",
      "Content-Length",
      "99",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Retry-After",
      "23",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "668",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "Cache-Control",
      "no-cache",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-cgr49",
      "X-Request-Id",
      "6a16a1502d377104-SJC",
      "X-Runtime",
      "0.163269",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a1502d377104-SJC",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iejKRRIpS%2FTKAHGF2eBWpw89V6Sa1ragLCuhf0NFqFuSGU2gOV84xBcsrqVtan588p%2BycIzf%2FAmD7zPvDt2fH3rd7%2Bq0O%2BXzVOD%2B8JuGYifcPob6b4g4A85%2B0c24cpfwvYN%2BNox0GjpwQrk%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a0xSAVsTnidxg56QBH4PJr6zaTUSzmFT44QlzdJi0sxs4MWQ4RDow3pw8%2BcaYeOa00vxi4fMWaz2J9qT58oSnVizEgfPPu%2BpglXj0U9LHQDoWyKopvUt9TgG%2FKCKOpblb3wi%2BaXgYGS1qKE%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a1502d377104-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      "69ead0de4de46abc-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: { tags: ["test_high_value", "outsider"] },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 48)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:38Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:37:32Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: ["test_high_value", "outsider"],
        alias: "",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:39 GMT",
=======
      "Fri, 15 Oct 2021 17:37:32 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "699",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"576f8d0c8be5882548653b92576d9d16"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-9kz6z",
      "X-Request-Id",
      "6a16a2ced9357104-SJC",
      "X-Runtime",
      "0.303584",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2ced9357104-SJC",
=======
      'W/"e1f77881a23bcf0fe152a93050090240"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-8z92h",
      "X-Request-Id",
      "69ead0e16a3d6abc-SJC",
      "X-Runtime",
      "0.374896",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0e16a3d6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AupQZ%2FHXUAEUFq0rHRwowkVwgcbieLrHXRIuzPrZf2Hv%2FSIG%2FVsvszbaSIaUL5rQMiGXsRdApmUSsWHn78yTf4%2BkzU%2BCuAgBDL47ETiQTGlzOLocoCULQpJxxrcMnuNyYU7eCNQh6VxXiY4%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eTNreMVPcW5eKX1NMV2n%2FUYd9yJD%2F6eJmlLmETyTHlZ%2Fen5cYdrukL05vozEk0W40LhTlx7NAmvZX8iq6n75HLwePiUx%2BvdUTg%2FSeu4ctVdDwyC1HrWasSSfWPakRyQxzbStOXciL6n0dZQ%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2ced9357104-SJC",
=======
      "69ead0e16a3d6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:38Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:32Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value", "outsider"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:39 GMT",
=======
      "Fri, 15 Oct 2021 17:37:33 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "698",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
<<<<<<< HEAD
      'W/"af9e766857c87c042ea22993fe832fcb"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-qmjhp",
      "X-Request-Id",
      "6a16a2d1ecf63b1b-SJC",
      "X-Runtime",
      "0.204367",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2d1ecf63b1b-SJC",
=======
      'W/"ac9c5068bc5d3e9e84905276c59a7145"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-4nz8z",
      "X-Request-Id",
      "69ead0e74aaef744-SJC",
      "X-Runtime",
      "0.274613",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0e74aaef744-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eloWZ4jZouAM5jMdvtkOSWymY%2BeDngKfzyqX%2BZPcFPHN7IcgqaVvklzgUygDZ5QreZOusshbUC4Ulns0P97UdqR3Hin3zeM2UaKTMgs2QmHgvs30DwpvnMY2I3ZYrfzq4WfGGSrYn5IaQ7o%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=2500c3f266af511c7fc3f6556c2c091eb9d36a4b-1634778939; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2d1ecf63b1b-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UKvO%2BYQN%2FhM3CORDlfDubTN7iU%2B%2FFuGhVJaUDsQiyOfeddeRQmdgBCb%2BlTujz%2BXVcVed9GZcBC%2FNBRsLgRgYegW1jNDqLrfrSr7fEm9NriRP97AfqNwh28A%2B3WjSyImb32NvVPmAyJXBS8U%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=7981bc566fac92142e97d76b1ea47f24e24f8072-1634319453; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead0e74aaef744-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      tags: ["outsider", "test_high_value", "test_recently_added"],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=2500c3f266af511c7fc3f6556c2c091eb9d36a4b-1634778939"
=======
    "__cfruid=7981bc566fac92142e97d76b1ea47f24e24f8072-1634319453"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 144)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:39Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:37:34Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: ["test_high_value", "outsider", "test_recently_added"],
        alias: "",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:39 GMT",
=======
      "Fri, 15 Oct 2021 17:37:34 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "697",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"676aa6e4446aedcac7b0064ce3f550a1"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-xrkpv",
      "X-Request-Id",
      "6a16a2d3cf873b1b-SJC",
      "X-Runtime",
      "0.384145",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2d3cf873b1b-SJC",
=======
      "692",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"24c8c3faa4c68ab8541bb4e0b38ce074"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-sfc25",
      "X-Request-Id",
      "69ead0eadfebf744-SJC",
      "X-Runtime",
      "0.426365",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0eadfebf744-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1X9ghlpM3KIvBcPhE6MlyXsB2YeTUBAMyIu0fMmAi9aw9GB%2FqDjLnhNZNyMPvrJE%2FisbmJZgCLWcbj1cEIazPdbi7PZsa6mVuL8YmNdeOh9MCC%2FKastjVO2SvRzBzWw4DJPMo0fJJbZOPpc%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8zWSAZgkDHqMqHufmrMAvLwMF54utiANrjvfJtWzQDl74juYQ94MD5Nr0dj9qWPcC0pr2RwIeT1R%2Bmxub4to5yLgBzkswTbdGVhz9znRfamlU%2F8oSwWTJ5ujMdLH4eSjYYjMcQH8jfi40pI%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2d3cf873b1b-SJC",
=======
      "69ead0eadfebf744-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:39Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:34Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value", "test_recently_added", "outsider"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:40 GMT",
=======
      "Fri, 15 Oct 2021 17:37:35 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "696",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ebfe1442a0d69c7069be290601a40998"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-7ghvx",
      "X-Request-Id",
      "6a16a2d6ebd07104-SJC",
      "X-Runtime",
      "0.212657",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2d6ebd07104-SJC",
=======
      "691",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"92ed86ccbf597d81bdbbe55a74ec655f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-csr5r",
      "X-Request-Id",
      "69ead0ef683f6abc-SJC",
      "X-Runtime",
      "0.210831",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0ef683f6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sdvv%2BSN8tfqQIjFiH4Ozb%2FsnaDmxBFctJFwuvHDRgwYWIIQ9wZTN5n1QodVGUP8X%2Fln4qKMbojv4ssnAEv2G4WVYU%2Bc9l8VBNL93d5aONgxJpRqbo3p3aHl5VowB3hy2yt65tB%2FdcTBaY1w%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sMyxxtyxUqqW40pzdyGuhtS1XkepNufI79b1%2BQhEYjRYqDf5%2B6dvYGAbhTmeNluJl0bbP3OglgAKd6H5guwxlYNNyJuabMn2klc%2FcFbCTlJ07jLbNYLA8il00pFP40GAaq0G7QivO506RL8%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2d6ebd07104-SJC",
=======
      "69ead0ef683f6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:39Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:34Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value", "test_recently_added", "outsider"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:40 GMT",
=======
      "Fri, 15 Oct 2021 17:37:35 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "695",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ebfe1442a0d69c7069be290601a40998"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-7xgfb",
      "X-Request-Id",
      "6a16a2d91e5f6432-SJC",
      "X-Runtime",
      "0.202332",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2d91e5f6432-SJC",
=======
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"92ed86ccbf597d81bdbbe55a74ec655f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-c5mv9",
      "X-Request-Id",
      "69ead0f43b5e6aae-SJC",
      "X-Runtime",
      "0.212884",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0f43b5e6aae-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FfzBJAVNStp0VYjZI1daPhp8py8VFAAgwHZPpHW%2FXgjhAhrchfE2sZghloZsn2S3htmWYPFzbLmOzpDISQu9EGPwJSgbEwdfWB31aNIo1C5xYHxxBZQeFqGsW3FDVzdUcZi4hAz4axghJd4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=c700ffcd1880bb1b1261d233bb86f999d10cdb96-1634778940; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2d91e5f6432-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UG4WB0C7HwOdMAnzucipoeFGSrJL%2BfSsakI7tbZ0aiq1Ca7WKgsTCrhegOH0JPaUAeZM7PmpORDm2aOIuCD8GDebXeRsHSzYlqPPyscHQOlFcAoBD%2B%2FwEiiA0OQ0yCCSF08myFAIBh6Uep4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=58403b0e79f2248ea11ba086dbe5bb284647c167-1634319455; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead0f43b5e6aae-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      tags: ["outsider"],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=c700ffcd1880bb1b1261d233bb86f999d10cdb96-1634778940"
=======
    "__cfruid=58403b0e79f2248ea11ba086dbe5bb284647c167-1634319455"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 104)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:40Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:37:36Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: ["outsider"],
        alias: "",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:41 GMT",
=======
      "Fri, 15 Oct 2021 17:37:36 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "694",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9cfbe4dbd26e567beacd714e142cf262"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-hsq77",
      "X-Request-Id",
      "6a16a2dae9ea6432-SJC",
      "X-Runtime",
      "0.345826",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2dae9ea6432-SJC",
=======
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5009d8d26e6950e36720d281c8f3709b"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-9hwpl",
      "X-Request-Id",
      "69ead0f798a46aae-SJC",
      "X-Runtime",
      "0.385226",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0f798a46aae-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IOlISRCzgdWI%2FQ3ji5ybrZaMZuZqMxZjOGqfuHi%2Fw%2FI1wqB1UlTaJ42rMqUtj4kX0nRczlh2CwbXsKzSnh8wtRrSLvDJrF4XqVElO4g50voh07Zq01HVEsUPtC%2FctFBKoZFSQJ%2Bw%2F8FnTNE%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jomhWP%2FozOGHfRd7X4W%2BcCQzXvwv4xFyliEIG%2F6zbuISD9Tb48Lv48zQLcGQnWEaIgq3ckuAubGbpiygBX5AA7ei6VZDDCsF9NEsrXm0qAh93D5mVmS%2FSACiuoTbtjZZ%2FAp7MciguS5tJfg%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2dae9ea6432-SJC",
=======
      "69ead0f798a46aae-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:40Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:36Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["outsider"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:41 GMT",
=======
      "Fri, 15 Oct 2021 17:37:37 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "693",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ea2663b02db4f64b9c2847008caec507"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-g6xr8",
      "X-Request-Id",
      "6a16a2dddd0f7104-SJC",
      "X-Runtime",
      "0.200508",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2dddd0f7104-SJC",
=======
      "688",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ac873ce6571d5cac0bd6eae95eb2168a"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-pm6s4",
      "X-Request-Id",
      "69ead0fbed436abc-SJC",
      "X-Runtime",
      "0.214444",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead0fbed436abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LYjej7%2FYSkDROZn1INnAdc9JAdnW0qrAVBiLslCO69bM2jOACql4sqDnUPJYz32%2FFo7bnyVYIB5kYIacbYW6VE%2Fvrr9WDpEcK76eJ5%2Fh6pb8R1yFbGsT%2FFgTO5PyxjAugAkXs8rfY0i3Vh4%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=in459ozgnWU7q5aINcJHfUSpHusZ2bOPlbGgHaLzfs4E%2BC%2FLYQMMZUwGHTaVQp23mQaTe0I0zZRp0hqxTMtVPMHUqycetL1MhigtPq2tRTEvIYdYXCEIox4BjmHUqRlk0gqTAFTpsxqQD08%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2dddd0f7104-SJC",
=======
      "69ead0fbed436abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:40Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:36Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["outsider"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:41 GMT",
=======
      "Fri, 15 Oct 2021 17:37:37 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "692",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ea2663b02db4f64b9c2847008caec507"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-tlfcm",
      "X-Request-Id",
      "6a16a2e01e2f0262-SJC",
      "X-Runtime",
      "0.194326",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2e01e2f0262-SJC",
=======
      "687",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ac873ce6571d5cac0bd6eae95eb2168a"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-5b7vn",
      "X-Request-Id",
      "69ead100cd966b1b-SJC",
      "X-Runtime",
      "0.202256",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead100cd966b1b-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3Lflc6EaTJQfhESiQt4D2QkBtADTHBO49fQl0FYtHcP9Y4ryPNuqBtNBuaRNMSRlH8tuj91%2BNU0VDAjqeH%2BR%2B5GF7OPv%2BHwCxBM5XCjWYfrETu%2B5WkX8Vy9dQMTjpXLsziRf451yqSBe9LE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=1533d7bb958e578629a1ce173aab67db9e151fd6-1634778941; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2e01e2f0262-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653125947.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q5%2Bw6CgI9R4vB2xfSnUzn0erEzK%2Fp4EyVBZPUvsTwrY9aAg5cWlV2FDO%2B1FZ0RNlj6u4kEeWuSYuxkdL8F5EncA1Bmmbu7%2BjoUdPZi2XD3eWH36XXTH3NRt%2BqidwOB3HtSvybxWbyAJI10Y%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=10f4c6dff21a7f0a058494f89a5aad4fc3078665-1634319457; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead100cd966b1b-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079850351.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "othergrouparoo@demo.com",
      external_id: "grouparoo123",
      tags: ["test_high_value"],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=1533d7bb958e578629a1ce173aab67db9e151fd6-1634778941"
=======
    "__cfruid=10f4c6dff21a7f0a058494f89a5aad4fc3078665-1634319457"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 116)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:42Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:37:38Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: ["test_high_value"],
        alias: "",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:42 GMT",
=======
      "Fri, 15 Oct 2021 17:37:38 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "691",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6378ea5394127180f6ff74478ad8af70"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-csbm8",
      "X-Request-Id",
      "6a16a2e1d8500262-SJC",
      "X-Runtime",
      "0.334774",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2e1d8500262-SJC",
=======
      "686",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"22f6af58cb3b9cb3947b188d915f7f35"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-sfc25",
      "X-Request-Id",
      "69ead103faa56b1b-SJC",
      "X-Runtime",
      "0.456580",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead103faa56b1b-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q0RBTbmGPcB0mAeU4OJqio37SLAVXKxBeqd1X6AWTJzNYZsDGp7y%2FM2TTFrC2ILmRlM5Km5s5Jw82F1b4F6kZp6o%2FWJy6AzGWj1TI%2FXIALi6QXIditCduzDFAVWjeaYh6HPrUAMTTxXa95E%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ykmYCkKGagffir%2F25nP8oCzEQAOse8lLxZ7WWiiDge2RFA3eVclFZcZscCoEPtz0jX8E%2FclZXKH48jynti4EAy%2BEutHPzlzvHtZhO2CsKBi9JEEtiwd0CXHz092y1v6fvgfl2iQpEU1ejEI%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2e1d8500262-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/1902653125947/identities.json")
=======
      "69ead103faa56b1b-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421079850351/identities.json")
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .once()
  .reply(
    200,
    {
      identities: [
        {
<<<<<<< HEAD
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947/identities/1901501313207.json",
          id: 1901501313207,
          user_id: 1902653125947,
=======
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351/identities/390568576911.json",
          id: 390568576911,
          user_id: 421079850351,
>>>>>>> chore: improve error message collect.
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: true,
<<<<<<< HEAD
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:30Z",
=======
          created_at: "2021-10-15T17:36:17Z",
          updated_at: "2021-10-15T17:36:17Z",
>>>>>>> chore: improve error message collect.
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
<<<<<<< HEAD
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947/identities/390643969431.json",
          id: 390643969431,
          user_id: 1902653125947,
=======
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351/identities/390565897772.json",
          id: 390565897772,
          user_id: 421079850351,
>>>>>>> chore: improve error message collect.
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: false,
<<<<<<< HEAD
          created_at: "2021-10-21T01:15:42Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          created_at: "2021-10-15T17:37:38Z",
          updated_at: "2021-10-15T17:37:38Z",
>>>>>>> chore: improve error message collect.
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
      ],
      next_page: null,
      previous_page: null,
      count: 2,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:42 GMT",
=======
      "Fri, 15 Oct 2021 17:37:39 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"31f472cab7256c42292781c7f8f6f3ea"',
      "Last-Modified",
      "Thu, 21 Oct 2021 01:15:42 GMT",
=======
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"53adaae1c9df1366e0526d8872a66dcd"',
      "Last-Modified",
      "Fri, 15 Oct 2021 17:37:38 GMT",
>>>>>>> chore: improve error message collect.
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-7xgfb",
      "X-Request-Id",
      "6a16a2e5481eed83-SJC",
      "X-Runtime",
      "0.163040",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2e5481eed83-SJC",
=======
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-rlh57",
      "X-Request-Id",
      "69ead10a5feef63f-SJC",
      "X-Runtime",
      "0.172820",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead10a5feef63f-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TvbefEt0kvTqoah336fHvh%2BJB13Q%2FSaEODo1V2ND4p6ACvGj8AiN8MRy8hbqYQBlducotgOzkwlEBjof%2BBI5BpgVl8yyP%2F4u%2BMO5GHRBM8Ee6LXMYpsfl9uNCMQI00oVkvfzmsEmekyIiBA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=9579b797db7e43cb14596b2de72a53b8d849d38f-1634778942; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2e5481eed83-SJC",
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3Ub7aR3l8y2QxTOWsXMzIs9gPfu7%2FaXDMWu%2FooqxyY%2BtaQn0e3k0Fk8O105R5IeutEL3X4xZY5%2FeIEIyPR%2FFmwbV9X5TZ0lxiw7bLWBLc0RtNvQ%2FhPLPQ%2BRAXK2fhCRuRk0I7RQJrcRBHJA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=3ca4880fb64f9bb4b54e5b8e26e8aec315c32145-1634319459; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead10a5feef63f-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
<<<<<<< HEAD
    "/api/v2/users/1902653125947/identities/390643969431/make_primary.json",
=======
    "/api/v2/users/421079850351/identities/390565897772/make_primary.json",
>>>>>>> chore: improve error message collect.
    {}
  )
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=9579b797db7e43cb14596b2de72a53b8d849d38f-1634778942"
=======
    "__cfruid=3ca4880fb64f9bb4b54e5b8e26e8aec315c32145-1634319459"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
<<<<<<< HEAD
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947/identities/390643969431.json",
          id: 390643969431,
          user_id: 1902653125947,
=======
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351/identities/390565897772.json",
          id: 390565897772,
          user_id: 421079850351,
>>>>>>> chore: improve error message collect.
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: true,
<<<<<<< HEAD
          created_at: "2021-10-21T01:15:42Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          created_at: "2021-10-15T17:37:38Z",
          updated_at: "2021-10-15T17:37:39Z",
>>>>>>> chore: improve error message collect.
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
<<<<<<< HEAD
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947/identities/1901501313207.json",
          id: 1901501313207,
          user_id: 1902653125947,
=======
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351/identities/390568576911.json",
          id: 390568576911,
          user_id: 421079850351,
>>>>>>> chore: improve error message collect.
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: false,
<<<<<<< HEAD
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          created_at: "2021-10-15T17:36:17Z",
          updated_at: "2021-10-15T17:37:39Z",
>>>>>>> chore: improve error message collect.
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
      ],
      next_page: null,
      previous_page: null,
      count: 2,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:43 GMT",
=======
      "Fri, 15 Oct 2021 17:37:40 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"656408a744675250085a0ac524756ff0"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-cbjvb",
      "X-Request-Id",
      "6a16a2e6f9d0ed83-SJC",
      "X-Runtime",
      "0.394972",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2e6f9d0ed83-SJC",
=======
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6edffb6ada25fb631c6208567b649dda"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-fxscj",
      "X-Request-Id",
      "69ead10dae68f63f-SJC",
      "X-Runtime",
      "0.399126",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead10dae68f63f-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7NVrpESMGCQBf9gN9wx4Dz%2Bv3zQf1s46S6cpQQlmarCLKbsGQdi%2BpD5IoyZ1irbQTJ5vFLykuWMeW7I9tijQs1eGZVKgekmghLEo%2FY7dTfM%2FDD5Ps7sTg%2FJqBraj0xtQ%2BlOuzsNGQhyMoNo%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RzkqQbeQasaxUmLW%2FGMwHH7O7oIFr%2FOiqoVUUA7zyK2Do70ioHGaFxW3daVgkV2rVGc9uw1tHENPza3jYT7eGJjVI11ByRxR7gEH1U5T98bD2c5ET0xMGw3FGW4LCoS%2BYjNvB4wUAgS0H%2Fc%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2e6f9d0ed83-SJC",
=======
      "69ead10dae68f63f-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:39Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:43 GMT",
=======
      "Fri, 15 Oct 2021 17:37:40 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "688",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f588060b04b5aff844503329fcc3b923"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-zvn8h",
      "X-Request-Id",
      "6a16a2e9fd587104-SJC",
      "X-Runtime",
      "0.208953",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2e9fd587104-SJC",
=======
      "683",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"efa1659ea563982fe7f830bdb88e68db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-znldn",
      "X-Request-Id",
      "69ead1120b5b6abc-SJC",
      "X-Runtime",
      "0.220887",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1120b5b6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jl6LWplVVR%2BElKTqr2%2FmKJMRhw%2FHxeJpwsObQ4zS58m0yvNfLLe2lLqYG0EUxMYJLHzZdsWlF6WQQTLmb12fwZrGy%2BDoGDY0EFzIRmsu72GDqGkfODnA80Px44B1BtVpgMv9i8EsSe6NY3I%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dL80GffJVYa6IXKNr4cPsCYYQhXwwoux3sAgD0Rp5FKDEGZpgbLNsFGjYe16bFhADgKcul%2B8g3hLXo7pMaqx8Nmez09vnnL86wGCStXYkFRbzzaEVOMElGzaCQt1WTj9qk4cEynWbeX8lb0%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2e9fd587104-SJC",
=======
      "69ead1120b5b6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .post("/api/v2/users.json", {
    user: {
      verified: true,
      name: "Anakin",
      alias: "MU",
      email: "skywalker@demo.com",
      user_fields: {
        text_field: "my text",
        numeric_field: 3039,
        checkbox_field: true,
      },
      tags: ["existing", "here"],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 193)
  .once()
  .reply(
    201,
    {
      user: {
<<<<<<< HEAD
        id: 1902653141247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-21T01:15:43Z",
        updated_at: "2021-10-21T01:15:43Z",
=======
        id: 421079868491,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079868491.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-15T17:37:41Z",
        updated_at: "2021-10-15T17:37:40Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: null,
        tags: ["existing", "here", "checkedbox"],
        alias: "MU",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: true,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: 3039,
          regex_field: null,
          text_field: "my text",
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:43 GMT",
=======
      "Fri, 15 Oct 2021 17:37:41 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1028",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "687",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ef1e653a27712dd94110b965a2e380bf"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-sxqsq",
      "X-Request-Id",
      "6a16a2ebcfb27104-SJC",
      "X-Runtime",
      "0.441077",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2ebcfb27104-SJC",
=======
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421079868491.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "682",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"fc546d7690e85076c906020d9c9655db"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-k87gq",
      "X-Request-Id",
      "69ead11548026abc-SJC",
      "X-Runtime",
      "0.424366",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead11548026abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HDkdFIAjuxBwLB%2FkDLS9%2Frf31KGJeFTqdDE%2BtMm1gllg4FxW1nRb4fZ4NaWk4XE9r3Vl27EBTlDFvyAaIQjAwYCqKJKnK7D7rXr58IvaojiRWD261xn15vgp4GRmocITEmE64c3JjssiMMU%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aTJn7EvJtDLegiP70%2FWn%2B650E5XybqvXC1hhhvSPQebtqKrIED9gY5RNbBxo9%2BTJ%2Fge95%2Fr7i%2Bm%2FkkdGlsXkLZCVCuUXp0iw7RbmL9dIppuAAzj%2B5UpLps5MhRG8G8WJ6twWTWcOWJ9QDPY%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2ebcfb27104-SJC",
=======
      "69ead11548026abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "skywalker123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:44 GMT",
=======
    "Fri, 15 Oct 2021 17:37:42 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "686",
=======
    "681",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-7mz8r",
    "X-Request-Id",
    "6a16a2ef69ac7127-SJC",
    "X-Runtime",
    "0.165235",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a2ef69ac7127-SJC",
=======
    "classic-app-server-5d8f87bff-gr6q6",
    "X-Request-Id",
    "69ead11b6a7af750-GRU",
    "X-Runtime",
    "0.163978",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead11b6a7af750-GRU",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9wf04yio4I9RehO%2BPHl41RfhVcDHSmdxbNzGX%2BoIGC%2FyqB2QX87sdNeoayJ5Lnw9n8pqg86IjjpRT8MHGw%2Fgc7djGtQzrBBneksKqWMla%2BybuyLtk6LrosmQOrbso2nqbq2RuGYxmlRJpT4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=709de53655528f56ef98d34f826925266cc36a85-1634778944; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a2ef69ac7127-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qouchViQQdnarZNookj2EI7QYY4CqXf1uOoUWbMTCZZf6sX6l88i82hFMHjdF6rXigkyE3IPg1vtQYbP067DWvXfdpkK37iCVPbM6w7ie1UYjnYFcs4N2fNNQsiSpcqf2gYBX2l4RzMpyh8%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=f7913239eb8a9363fab5d65298362cb848915264-1634319462; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69ead11b6a7af750-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=709de53655528f56ef98d34f826925266cc36a85-1634778944"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653141247,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-10-21T01:15:43Z",
          updated_at: "2021-10-21T01:15:43Z",
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: null,
          tags: ["existing", "here", "checkedbox"],
          alias: "MU",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: true,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: 3039,
            regex_field: null,
            text_field: "my text",
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
      "Thu, 21 Oct 2021 01:15:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f7081ec060698381f3a22e9e52aab760"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-gdwcw",
      "X-Request-Id",
      "6a16a2f0fb887127-SJC",
      "X-Runtime",
      "0.209580",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2f0fb887127-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kvfG1MZFPEnShBiVjTBY9U2f2x1PI2YW8ua6cmygzwmj3OFlbkQkQ4RjcmNJvOcypuh89ABKB3bnnjNJo4m6phwtHC4pmHlKXlCmWqwFV1A0HoFcRciCifpRv05qGwcEYvEmbgw%2FlqNHmFE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2f0fb887127-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653141247.json", {
    user: {
      verified: true,
      email: "skywalker@demo.com",
      name: "Anakin",
      external_id: "skywalker123",
      user_fields: { text_field: "change" },
      tags: ["checkedbox", "existing", "here", "test_recently_added"],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=709de53655528f56ef98d34f826925266cc36a85-1634778944"
=======
    "__cfruid=f7913239eb8a9363fab5d65298362cb848915264-1634319462"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 200)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653141247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-21T01:15:43Z",
        updated_at: "2021-10-21T01:15:44Z",
=======
        id: 421079868491,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079868491.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-15T17:37:41Z",
        updated_at: "2021-10-15T17:37:43Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "skywalker123",
        tags: ["existing", "here", "checkedbox", "test_recently_added"],
        alias: "MU",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: true,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: 3039,
          regex_field: null,
          text_field: "change",
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:44 GMT",
=======
      "Fri, 15 Oct 2021 17:37:43 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0f126c0310a4c32138d0a368c852a513"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-n6mvs",
      "X-Request-Id",
      "6a16a2f2dd9e7127-SJC",
      "X-Runtime",
      "0.413140",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2f2dd9e7127-SJC",
=======
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421079868491.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "680",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"69f92929a7c3e77e1155b530d0d5295e"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-gkrpx",
      "X-Request-Id",
      "69ead122ac44f750-SJC",
      "X-Runtime",
      "0.389076",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead122ac44f750-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JzAyPk8PUg7B8OuYn9Ic0DbCJ6aMJRvEAt%2BDqjsbGItk90ag%2BgpYXacLSBCoM6phkG1IYdwMrnOdxU%2Fprnm1UUBJeVDZHTIUpeKNduNGbQJxL%2BqLMhhiBBstcKZ2iBQ5ESaPWXVyBgfg5mI%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d9nCYy9u%2FO3B3GiP7zRvzbW1S5rWorYagxgtAzbQvRs7hoTL71X5sHYQ5b51oBnPQss0V8PnMpjoQN8dXGCDlBezUgYFDcdCCeO9PL9QYspo0lGkDhsOWdR%2FVIIhuo%2FnnbwDmxGi6dL%2BkXE%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2f2dd9e7127-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/1902653141247.json")
=======
      "69ead122ac44f750-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421079868491.json")
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653141247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-21T01:15:43Z",
        updated_at: "2021-10-21T01:15:44Z",
=======
        id: 421079868491,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079868491.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-15T17:37:41Z",
        updated_at: "2021-10-15T17:37:43Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "skywalker123",
        tags: ["existing", "here", "checkedbox", "test_recently_added"],
        alias: "MU",
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: true,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: 3039,
          regex_field: null,
          text_field: "change",
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:45 GMT",
=======
      "Fri, 15 Oct 2021 17:37:43 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=5, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "683",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0f126c0310a4c32138d0a368c852a513"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-rn2fs",
      "X-Request-Id",
      "6a16a2f65edb7104-SJC",
      "X-Runtime",
      "0.182471",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2f65edb7104-SJC",
=======
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"69f92929a7c3e77e1155b530d0d5295e"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-4lq4t",
      "X-Request-Id",
      "69ead126fada6abc-SJC",
      "X-Runtime",
      "0.211847",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead126fada6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6T07a6u9JJfD2lQpUpTcfXeD7U%2BOQFGen1dX9dYojm3RVMwE%2FQ%2BkPkQpWEqfAxkr74TNZNebEE0ryTJuKHp9GREsF4i%2FU7HpQigMPa%2FRB6w8c43Nm2v%2F4j924%2Bz1HFCx6j1ueYSoqETO%2FUw%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U90z8rhM0sJZok6kYDiUabENgUiefONGW3sLUAIynz7eysrAnEMiKjaZa6YtymB6WUW1xbrJxAPZ4oEALiAoUsdz6RNu5PKvGZIWRcqPi9HyPOc%2BQ6j6PsrQ%2BSNk1E2EpJJBMwVrD41LNlo%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2f65edb7104-SJC",
=======
      "69ead126fada6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:45 GMT",
=======
    "Fri, 15 Oct 2021 17:37:44 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "682",
=======
    "678",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-pn4xp",
    "X-Request-Id",
    "6a16a2f85b846432-SJC",
    "X-Runtime",
    "0.170245",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a2f85b846432-SJC",
=======
    "classic-app-server-5d8f87bff-sgrgp",
    "X-Request-Id",
    "69ead12be8404b28-SJC",
    "X-Runtime",
    "0.152837",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead12be8404b28-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qNdTpDwUco8EVyWW5jTo2On02OHnBVOEO0H38k1X7ghrXzfCSSVPhCYgFMw8Bnkxn%2FJf805PRiN7BUOV1mO%2BO2E%2BQ%2BDOB1qRDWDNrCtOsUPlYiNviplH%2BNrB3yb3IMtoICmlVT4BrWT3Hls%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=1dc60522eb29726aaf138748cf698dff264bff53-1634778945; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a2f85b846432-SJC",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=1dc60522eb29726aaf138748cf698dff264bff53-1634778945"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:45 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "681",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-7mz8r",
    "X-Request-Id",
    "6a16a2f9ee2e6432-SJC",
    "X-Runtime",
    "0.188723",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a2f9ee2e6432-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h3VtKcvuXwW1nNd1etaFED22EP57P93qo%2BM0BUe5TDfTyJctX9XEjS2URZYnZt%2Fmw1fovCHnyMFaRF90p5ouRoNMLxUU5b%2FMhFZAMSxKAhFxLUu5o827g6nX%2BdKe8GKxcEBO6PtGSKHpIz8%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a2f9ee2e6432-SJC",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=1dc60522eb29726aaf138748cf698dff264bff53-1634778945"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:46 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "680",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-xfqkv",
    "X-Request-Id",
    "6a16a2fb99b36432-SJC",
    "X-Runtime",
    "0.166809",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a2fb99b36432-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=61aQpX9AYoNGBT8RajozqNjwT4GxwSgIl8jgryw4OADEu7bOfx3IvMAEas7q6w%2F03FKJQKBvK1O%2FNd39A8iS3rDoxh4eSxQ%2BXvEyJeU8qNGPmiQUoTO5eYDpYPJJaFRhSBdONTDAvfiw%2FjI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a2fb99b36432-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1Q%2FZJvu7uC5QxaMmyUVuOu32F0tdAtrQuazeXZUL4ZJFl9QQbntMSC%2BsPQVl%2BIUK4UpaSey7e%2BLyBQbSHpIifKSZ19Hznwva0CGxR%2FzADDus5qx50%2FKR96iWiGlmu%2B2zX7YPZb1Y93EjFrM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=4df01edfa8ea4cccd117a630bd22ec732428d023-1634319464; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69ead12be8404b28-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/create_or_update.json", {
    user: {
      verified: true,
      email: "notgrouparoo@demo.com",
      name: "Bobby",
      external_id: "notgrouparoo123",
      tags: [],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=1dc60522eb29726aaf138748cf698dff264bff53-1634778945"
=======
    "__cfruid=4df01edfa8ea4cccd117a630bd22ec732428d023-1634319464"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 115)
  .once()
  .reply(
    201,
    {
      user: {
<<<<<<< HEAD
        id: 1902653141627,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-21T01:15:46Z",
        updated_at: "2021-10-21T01:15:46Z",
=======
        id: 421079869371,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-15T17:37:45Z",
        updated_at: "2021-10-15T17:37:45Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "notgrouparoo123",
        tags: [],
        alias: null,
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:46 GMT",
=======
      "Fri, 15 Oct 2021 17:37:45 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1007",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3c82dec20b9b8f00cede33c56cf3fa98"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-vdsxh",
      "X-Request-Id",
      "6a16a2fd1c626432-SJC",
      "X-Runtime",
      "0.404773",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a2fd1c626432-SJC",
=======
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "677",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"12a8155c56269c8043e50480a1b162bc"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-fxscj",
      "X-Request-Id",
      "69ead12ebe094b28-SJC",
      "X-Runtime",
      "0.483190",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead12ebe094b28-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7fxgxsfprvIvyPdRyeWnzQwKaY7LTAbrY0sy303YxppK7aAV%2F26ZI4MOmmFTVF5UkV938JyAgl4po%2B9FBPGAkm2ruJnFBnmcy%2B4j6VDxgO0CJhBtbPz%2Fmk79uTi%2Bs2BDFIO1SPPxqt7hyQ4%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OT8LROnjoDAzm50m4nEK047EVEuet3QL0aARzpUh5NbWtqXoSEys4yUNq54DynQ%2BOSl8MIPvsFJWiEEtmdcJ5eMZFdiVjwq1UsvxlzKksoIz9pKA6BPHGuyKYjMOLoko%2BaHMLisKFI6OW9o%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a2fd1c626432-SJC",
=======
      "69ead12ebe094b28-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:46Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:45Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "notgrouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:46 GMT",
=======
      "Fri, 15 Oct 2021 17:37:45 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "678",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3b263ffbb2d9d5e8514877a00da1b222"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-c29h9",
      "X-Request-Id",
      "6a16a3001c197104-SJC",
      "X-Runtime",
      "0.217380",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a3001c197104-SJC",
=======
      "676",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6b45be00fb3404fa9fe5460cbcce3d13"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-fxscj",
      "X-Request-Id",
      "69ead133a85c6abc-SJC",
      "X-Runtime",
      "0.204319",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead133a85c6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oVRFD71s6UB3v8t8aG0YKYUi0TQ9dDIk0dGVhyk3dkO1CMkG3cGvf6f8dM3qTIdAfY77G9EJZLPuCHpkpWY8InZGiRXaByXnIHd%2F66UPgDh%2Ftjg54NrJ9PeaQQaoxOJ3xAGTl94LFx012Rg%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7GCNq2Q7oTyJo9XV7PHzmDSmnHBjeVhTD2UUEArQMvndw9U1RT%2BJ8MJNCFm10yJr8aUM8%2F2EgCFTPzBDv9gWhBvmeggSMONgh0bmpToTvrwT1fqSGhzAgGd0cZqLJOgMsi0KN8Q1sBz9dB8%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a3001c197104-SJC",
=======
      "69ead133a85c6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:39Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:47 GMT",
=======
      "Fri, 15 Oct 2021 17:37:46 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "677",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f588060b04b5aff844503329fcc3b923"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-vt5th",
      "X-Request-Id",
      "6a16a301fe987104-SJC",
      "X-Runtime",
      "0.193065",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a301fe987104-SJC",
=======
      "675",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"efa1659ea563982fe7f830bdb88e68db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-sksrd",
      "X-Request-Id",
      "69ead136cd236abc-SJC",
      "X-Runtime",
      "0.232759",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead136cd236abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GLtN75%2FBstF4CbaLXqyCZDi8c5oW3xLqrhGLT9%2B%2Bk819kkb6mSJXY5wM8x9KfYC4JTsOZnDazwX4r%2FnOkM0iuIDt9YOfc%2B8LEW%2Bum6xOgBeDtJFfhiDqD%2FwD8WgzNZyi1u6T0OD2USDpO%2FM%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ap5WAsqTV%2FoOT02ikZDpOL13nXBqYHpZ4Zr27PbKRuQNc%2FGmH1Uje30Y8kbgvzA6jKJSAqJ6Mcq0B%2Fdj4hO5jW22LWUNxcHZ6LM3KeWFGqSs4sfVB%2BcGXnbqoxDdvEoi%2B2uIGocU%2ByChceA%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a301fe987104-SJC",
=======
      "69ead136cd236abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:46Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:45Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "notgrouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:47 GMT",
=======
      "Fri, 15 Oct 2021 17:37:47 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "676",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3b263ffbb2d9d5e8514877a00da1b222"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-hpgmc",
      "X-Request-Id",
      "6a16a30398937104-SJC",
      "X-Runtime",
      "0.199566",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a30398937104-SJC",
=======
      "674",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6b45be00fb3404fa9fe5460cbcce3d13"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-txlmv",
      "X-Request-Id",
      "69ead13a1a0a6abc-SJC",
      "X-Runtime",
      "0.234932",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead13a1a0a6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e0%2FNEfewzLmI3a%2BT8hY71B7yYTaItavbA%2BJMzEt9p0HkrO2YGwlWOzPVDiDM%2B%2FygQ9u2%2FkmZiSSEIVisAR2g36weXLHKZBrOSmCKnbob4ujroRculz2XiHSidqgIB9Jh39fxKcA9C3v%2B6eE%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tzl6AcCOulbiunOrdZ7Ud%2BL4jWGMt8KGzsGHa5wCk3b6KukLUE0l7VXwPBmzCCP6xfiN3fjfs5uxpLGhKVmJhLRaTjFH7OgDYTRCOJqBDTfkX%2BLdVzPrn7r5GOe0vhTWBtFhGZ7IlBdZS9Y%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a30398937104-SJC",
=======
      "69ead13a1a0a6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:46Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:45Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "notgrouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:47 GMT",
=======
      "Fri, 15 Oct 2021 17:37:47 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "675",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3b263ffbb2d9d5e8514877a00da1b222"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-szl5f",
      "X-Request-Id",
      "6a16a305ab0eed6f-SJC",
      "X-Runtime",
      "0.199361",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a305ab0eed6f-SJC",
=======
      "673",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6b45be00fb3404fa9fe5460cbcce3d13"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-t7tz5",
      "X-Request-Id",
      "69ead13f1c1a51ed-SJC",
      "X-Runtime",
      "0.216670",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead13f1c1a51ed-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wJ8a1IOJTcYyLXJFfd26lIPWbouN3EsYihIlvNzAiv3dDZiXP0BhPztR2PC7Y7UohJgcGsJ8vI8G9Gx%2BDVwHCsbTeVQoJOTUEH9V9llmn%2BU63OBqMnXZvy2UcRNxecqyj7sNugXJCdKEu0w%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=5afd250157f7871217af4d3224a5de0f7624767a-1634778947; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a305ab0eed6f-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653141627.json", {
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5ku4%2B2Nzi6I8cyuT6q%2FGPyP524reDO3emBatis0u%2FcaFKvH4bwH3z7QKdqk3JhXmsRhVcdX0is%2F8ORGo4l7rDgM9cfFEKmGm8bRQwHgyqS1AMMQkWI3yaImOn8Ej3GImnqA3wbwD5jIp6w4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=055f3377c7803f6b9294be72abdd8056d8d425e1-1634319467; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead13f1c1a51ed-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079869371.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "notgrouparoo@demo.com",
      external_id: "notgrouparoo123",
      tags: [],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=5afd250157f7871217af4d3224a5de0f7624767a-1634778947"
=======
    "__cfruid=055f3377c7803f6b9294be72abdd8056d8d425e1-1634319467"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 100)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653141627,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-21T01:15:46Z",
        updated_at: "2021-10-21T01:15:48Z",
=======
        id: 421079869371,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-15T17:37:45Z",
        updated_at: "2021-10-15T17:37:48Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "notgrouparoo123",
        tags: [],
        alias: null,
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:48 GMT",
=======
      "Fri, 15 Oct 2021 17:37:48 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "674",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f7279fae55482c60d48f740745885e66"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-5vptj",
      "X-Request-Id",
      "6a16a3077d0aed6f-SJC",
      "X-Runtime",
      "0.383387",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a3077d0aed6f-SJC",
=======
      "672",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c5a41c1682e28a7bef8f2d42caf95059"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-z2mj9",
      "X-Request-Id",
      "69ead1425a4451ed-SJC",
      "X-Runtime",
      "0.321689",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1425a4451ed-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5AEIEZP40O13lIZ7Vk3K2%2BXndujpDclGYqBrp5ulOElrB7O2dO1AZRrvSsXt607mOn2V76Tfpi5wlRz%2FgnLqei6%2FfNGGHqqSXMI%2F8N0uz3UGgV%2BcJg4fHUKaYW2YA8UMDQXVXKP%2FGIbTnTc%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6LPxyhQyJd7yLSE7IxZD159QNf8YuOtI%2FvxJVixne%2FVOwE6O8Exnw49TrBH6gM%2FrD3vjB6eZ3PP6TsKqoQxnPq0kxERibTppKVRnp4aQ1VAwS%2BeDAkvH%2B4d1nSUHjv8JxuJXhq14PRr9h%2BU%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a3077d0aed6f-SJC",
=======
      "69ead1425a4451ed-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:39Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:48 GMT",
=======
      "Fri, 15 Oct 2021 17:37:49 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "673",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f588060b04b5aff844503329fcc3b923"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-5l7gd",
      "X-Request-Id",
      "6a16a30a5a847104-SJC",
      "X-Runtime",
      "0.215920",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a30a5a847104-SJC",
=======
      "671",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"efa1659ea563982fe7f830bdb88e68db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-4bfcv",
      "X-Request-Id",
      "69ead146490c6abc-SJC",
      "X-Runtime",
      "0.232733",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead146490c6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4aiCRBwfmfMFq1AICGa8nWPq7u3APqNODiZnm2ACLtsjjBT6UuInuLMQcDlAl%2FZE1j25C6ptBK6mZ6DtvKRYYJDnCuEGmQ9qqPmvkl%2FcEFUFibrrFzcWjz67s6dD1cCeGRzZlfl4u4YJKVM%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BSkMxnZizXg5JqaRWWOCK17iEis55Uhk1YwQilZKHQuu79NqKTSmbR%2F4semDdWMDwvqsesQzbBsS5vDlhBrdiuwpXyIi%2Bx1qsGOa2bP4hw%2FCUntoGB48TXYUAeFxGulkPJCpUp6B2xj1u8I%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a30a5a847104-SJC",
=======
      "69ead146490c6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:48Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:48Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "notgrouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:48 GMT",
=======
      "Fri, 15 Oct 2021 17:37:49 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "672",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"194ee19762667ce93f7d959c8910b5d0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-77d77",
      "X-Request-Id",
      "6a16a30c2ce37104-SJC",
      "X-Runtime",
      "0.213358",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a30c2ce37104-SJC",
=======
      "670",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0ded289d1190feb57f0d9d1b2363567f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-w8cnh",
      "X-Request-Id",
      "69ead14aaf966abc-SJC",
      "X-Runtime",
      "0.190484",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead14aaf966abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zvwvkYhuCl3tcjNcpmOLO5NYAijM3LAXIqMHa4x43OkLYL14HlWqoEL1NqEPFIl4gPg8gLUyy0ho7NMpcw68FQN%2FIM5iy1ItxlQi%2FUvT6Taex1d8oiV40YWkBNN8JQovH8ZE4ZSkNx3yIJs%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NwU3ZUqoPUxtklPwewXAntXo%2B90jNv5qI2ULR%2BLRnXbYCzN5p5%2B%2FQI3F95YMVWx7cpflMSwMKSg%2B6ab1RSV2%2FN0Uh7J%2Fyh4ZVYQd%2FDb9U3lH9ja5pgzjmHct9phLicUsEVdMwxCexaHYrbA%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a30c2ce37104-SJC",
=======
      "69ead14aaf966abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:48Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:48Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "notgrouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:49 GMT",
=======
      "Fri, 15 Oct 2021 17:37:50 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "671",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"194ee19762667ce93f7d959c8910b5d0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-lrxvz",
      "X-Request-Id",
      "6a16a30dffd47104-SJC",
      "X-Runtime",
      "0.175467",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a30dffd47104-SJC",
=======
      "669",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0ded289d1190feb57f0d9d1b2363567f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-xrcc4",
      "X-Request-Id",
      "69ead14dacab6abc-GRU",
      "X-Runtime",
      "0.223952",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead14dacab6abc-GRU",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R1RxhIkBcXu3QsXPS1JrBdBKG32uHKQ9kxpCb95xPLcElgksk%2BLjbCdHhF1POCNXGUN3Rrpm%2BxrFg3SsOy8RVZNz%2BX37Z1FmJvcnEgf1uHz50y66ho3RdUvw%2F5i8XOsMoGzrwbbWS5Kp20E%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=I1f8VvWg%2BrYnwoT6VuaE%2Bw0%2BY2Lz7vEDwjexRb%2BMkNj8VyNEDJhFO3bz1BB%2FerS0HtIYW57uRXtv3lS%2F4xPIqkBoRbYv7pVG8Lo%2F7kj3HKsZEQZnwTSzo%2FNgrpoYUplsrr56I5ZjudsNkSM%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a30dffd47104-SJC",
=======
      "69ead14dacab6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:49 GMT",
=======
    "Fri, 15 Oct 2021 17:37:50 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "670",
=======
    "668",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-77cqv",
    "X-Request-Id",
    "6a16a30f7a637104-SJC",
    "X-Runtime",
    "0.171485",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a30f7a637104-SJC",
=======
    "classic-app-server-5d8f87bff-sz7rf",
    "X-Request-Id",
    "69ead1510a436abc-SJC",
    "X-Runtime",
    "0.149704",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1510a436abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ijvezuz1mYvlKNDuH9St3si8xQQ7uto9cTS4Y%2FIk5jJScOsnffDj%2FZ8YwCsnub0okKHCZW%2FSmZugD3%2FHOqWJx7lRlg9MYiUdUDQsoUJb6V6nN4PaJyykE7S6acXduP0oDK%2Bzjy439Lte2%2FE%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fuK7tZ34MQwDq47D%2BPFph2uxMgVKwEfASbJFGZCbTGVwaS%2B1%2FEj%2FbfqbmmtqZXD4RSWlY6UK7oWVzXW7R8GyEcKHRA%2FKb2g6k0xSPrdLs2h7aI8pkaL3U1MDvfposRva4%2BNirFjWfIji00c%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a30f7a637104-SJC",
=======
    "69ead1510a436abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:49 GMT",
=======
    "Fri, 15 Oct 2021 17:37:52 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "669",
=======
    "667",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-lcwxf",
    "X-Request-Id",
    "6a16a3116dcc70ab-SJC",
    "X-Runtime",
    "0.169988",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a3116dcc70ab-SJC",
=======
    "classic-app-server-5d8f87bff-d5pj9",
    "X-Request-Id",
    "69ead155798af74c-GRU",
    "X-Runtime",
    "0.194186",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead155798af74c-GRU",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QvbOvH8%2FweZfNjjU5xLNA4VGP2yeXoftoNGgs1%2F%2BdU%2FfEZC%2BPeTwbeh82zI%2Fd4u1cfMVdsVUD6Yabm2gKmzWwUx1A6pwiksJhHVPkYqcSf9GWRif8ydlCwuQaYDf5JVqjx%2FeYGbkv93ANdw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=38ad34cf8bae7d9aa7695cd686eb65de6c30e228-1634778949; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a3116dcc70ab-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2By6L%2Bet0On5D%2FiWftYrecBLySP9pH239Qz3jZLiNf9S0zgY5xsqudDgZYFUK5WG1e7F%2BPlWGukHDMyv3%2FLE6tFN7BGGX4j0fN52Puh1xN%2BzKraTVL9F%2FpxgBUCLYdb4jqF79%2F80JaM2Hv6o%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=f96baf866c643ffc1e929987983e3df056163df3-1634319472; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69ead155798af74c-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=38ad34cf8bae7d9aa7695cd686eb65de6c30e228-1634778949"
=======
    "__cfruid=f96baf866c643ffc1e929987983e3df056163df3-1634319472"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:48Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:48Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "notgrouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:49 GMT",
=======
      "Fri, 15 Oct 2021 17:37:53 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "668",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"194ee19762667ce93f7d959c8910b5d0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-5j8fr",
      "X-Request-Id",
      "6a16a312effe70ab-SJC",
      "X-Runtime",
      "0.195808",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a312effe70ab-SJC",
=======
      "666",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0ded289d1190feb57f0d9d1b2363567f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-9hzk4",
      "X-Request-Id",
      "69ead15ccb66f74c-GRU",
      "X-Runtime",
      "0.232121",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead15ccb66f74c-GRU",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XWBmnY%2FU%2B4jVPdBOjhGBVeoMadh41sjnzmZjzeYYmOzqIS26GJqf%2BNREehY7jmiRX6YgEtrwEJbi6dOk8KATriaQmAKMXA83TEzhYV2vhcqVUoy390V1bAEyUkuO42%2BounJNRStm2B%2FvFHs%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1U3J4Hqhr9S%2Bf0dsg7Y5n1KYYU2jl8FZTaITkbc9mti072EF%2BZ1vg5baMHkAyfY140NybS2lBHWLtmcVEiQVN%2F12%2BuuIIcMe%2BUyXLfJWtIZBLLMyrfeHgJMt1TXcMff4iwVr3l%2BXkJlC%2Bm8%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a312effe70ab-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653141627.json", {
=======
      "69ead15ccb66f74c-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079869371.json", {
>>>>>>> chore: improve error message collect.
    user: {
      verified: true,
      email: "almostgrouparoo@demo.com",
      external_id: "maybegrouparoo123",
      tags: [],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=38ad34cf8bae7d9aa7695cd686eb65de6c30e228-1634778949"
=======
    "__cfruid=f96baf866c643ffc1e929987983e3df056163df3-1634319472"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 105)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653141627,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-21T01:15:46Z",
        updated_at: "2021-10-21T01:15:50Z",
=======
        id: 421079869371,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-15T17:37:45Z",
        updated_at: "2021-10-15T17:37:53Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "maybegrouparoo123",
        tags: [],
        alias: null,
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:50 GMT",
=======
      "Fri, 15 Oct 2021 17:37:53 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "667",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"2d8ac8a7c10a6b82d85e201a7da28759"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-n6mvs",
      "X-Request-Id",
      "6a16a3149a5e70ab-SJC",
      "X-Runtime",
      "0.406758",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a3149a5e70ab-SJC",
=======
      "665",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d389bb12586545c9b6bafa0923ac74c1"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-jrj78",
      "X-Request-Id",
      "69ead163cc17f74c-SJC",
      "X-Runtime",
      "0.391896",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead163cc17f74c-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K9YreOBFDRPmRhAiITV9%2FbUpsiVbxF2KdKPhqhWNFYQ%2FMkWxPaRD8JMsCuQhcBvUhJNAu45OO9GCfYRAvHzbBCx4qJafYmt%2BLyCmK1q2natZMfTjcXLgPktqBIEfwMpJJNYbRGOnZrvZb%2FA%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vo%2FU1B1Mw9jk7yGgcYdq0LzdSoGjzxOC4umkboE1kmqkBN8D3R8ijkQFiBuSb9XDXSNZnB%2FfgVIoov38WWgNgBPmCanX%2FUtC7B%2F2NPRdyjM6FZQ15IoYdQ%2FjhrVGDY%2FG0UH8%2FU68kBJNldI%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a3149a5e70ab-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/1902653141627/identities.json")
=======
      "69ead163cc17f74c-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421079869371/identities.json")
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .once()
  .reply(
    200,
    {
      identities: [
        {
<<<<<<< HEAD
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627/identities/1901501323527.json",
          id: 1901501323527,
          user_id: 1902653141627,
=======
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/390568602091.json",
          id: 390568602091,
          user_id: 421079869371,
>>>>>>> chore: improve error message collect.
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: true,
<<<<<<< HEAD
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:46Z",
=======
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:45Z",
>>>>>>> chore: improve error message collect.
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
<<<<<<< HEAD
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627/identities/1901501323847.json",
          id: 1901501323847,
          user_id: 1902653141627,
=======
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/390565900592.json",
          id: 390565900592,
          user_id: 421079869371,
>>>>>>> chore: improve error message collect.
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: false,
<<<<<<< HEAD
          created_at: "2021-10-21T01:15:50Z",
          updated_at: "2021-10-21T01:15:50Z",
=======
          created_at: "2021-10-15T17:37:53Z",
          updated_at: "2021-10-15T17:37:53Z",
>>>>>>> chore: improve error message collect.
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
      ],
      next_page: null,
      previous_page: null,
      count: 2,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:50 GMT",
=======
      "Fri, 15 Oct 2021 17:37:55 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"814588a418b69f439903927a87801195"',
      "Last-Modified",
      "Thu, 21 Oct 2021 01:15:50 GMT",
=======
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"6df57aef0f90dc08167c7cc0bdca7c76"',
      "Last-Modified",
      "Fri, 15 Oct 2021 17:37:53 GMT",
>>>>>>> chore: improve error message collect.
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "666",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-7s8xk",
      "X-Request-Id",
      "6a16a3180eab7094-SJC",
      "X-Runtime",
      "0.172458",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a3180eab7094-SJC",
=======
      "664",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-2glvp",
      "X-Request-Id",
      "69ead169cb2a4b28-GRU",
      "X-Runtime",
      "0.178097",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead169cb2a4b28-GRU",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8jGfS40McbpzNpypf%2FdzQuAUe1%2Fl%2F7ulbkGJR0cpNE%2Fm7HbF0XGXUjkXj806aNpFw5vBryBi8DUH71bW8jMHwO5rTXIAKIXE9olE%2BC5YIAdddIpH7NOVCocc9zKcd5DrosbgY3oBYn%2FkrII%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=966030eac2d0ceebb49981c45635acca3a206656-1634778950; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a3180eab7094-SJC",
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7088vjzxowUH9AvQiTftSwdge0IxoFvsnXmXIJeyK%2FxpQVuB10PWQIB%2FV7%2BphirFh2H%2Fs1eCBl6epk2FssdwcFwhdm5jsEQB%2FAodEW9gCXIVVEOfmXro1s%2F%2B7Kram1tSZOWlAMtWmQ7r7n8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=fdbc69fc62ff17920bb99814d9ef808d865a9d77-1634319475; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead169cb2a4b28-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
<<<<<<< HEAD
    "/api/v2/users/1902653141627/identities/1901501323847/make_primary.json",
=======
    "/api/v2/users/421079869371/identities/390565900592/make_primary.json",
>>>>>>> chore: improve error message collect.
    {}
  )
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=966030eac2d0ceebb49981c45635acca3a206656-1634778950"
=======
    "__cfruid=fdbc69fc62ff17920bb99814d9ef808d865a9d77-1634319475"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
<<<<<<< HEAD
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627/identities/1901501323847.json",
          id: 1901501323847,
          user_id: 1902653141627,
=======
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/390565900592.json",
          id: 390565900592,
          user_id: 421079869371,
>>>>>>> chore: improve error message collect.
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: true,
<<<<<<< HEAD
          created_at: "2021-10-21T01:15:50Z",
          updated_at: "2021-10-21T01:15:50Z",
=======
          created_at: "2021-10-15T17:37:53Z",
          updated_at: "2021-10-15T17:37:55Z",
>>>>>>> chore: improve error message collect.
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
<<<<<<< HEAD
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627/identities/1901501323527.json",
          id: 1901501323527,
          user_id: 1902653141627,
=======
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/390568602091.json",
          id: 390568602091,
          user_id: 421079869371,
>>>>>>> chore: improve error message collect.
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
<<<<<<< HEAD
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:50Z",
=======
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:55Z",
>>>>>>> chore: improve error message collect.
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
      ],
      next_page: null,
      previous_page: null,
      count: 2,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:51 GMT",
=======
      "Fri, 15 Oct 2021 17:37:56 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "665",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3971a4042d6825a85579d9675593931e"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-vdk67",
      "X-Request-Id",
      "6a16a319c8d47094-SJC",
      "X-Runtime",
      "0.362702",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a319c8d47094-SJC",
=======
      "663",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"fa622ceee410f26601b453d4c7ba60cf"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-5jsgq",
      "X-Request-Id",
      "69ead170c8874b28-SJC",
      "X-Runtime",
      "0.465813",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead170c8874b28-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wqvhs5zFYRBdi2BtDb1N3yRFZq0DZ4kfTT6KFo91tHodxYUX3SpA2yeKolPgqQdlSrAZFZ6dPhzuANExFjdUQ%2FdrfxDpeNyAXwRxCKKHBE7WWsAndtBYNzoaoIO8aLNcThA9u49R0weXVLc%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yQsPGZIUdxUvZydvHC0mvDwjTVN%2F2oXh0AKABRQSb1iPob%2FBWCK6JDx8ZZjChB0%2FhwRcZudxi%2FBh9dl3eCMAqkYyqPrf5Bzz29ArZ%2BCkSufdDis4m6qT5caEYeRTkHDBKgQo6DTnUcWrfgk%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a319c8d47094-SJC",
=======
      "69ead170c8874b28-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:51Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:55Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "maybegrouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:51 GMT",
=======
      "Fri, 15 Oct 2021 17:37:56 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "664",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"1567b0bee590c07f289d076c96c48fef"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-wcj5p",
      "X-Request-Id",
      "6a16a31c7e047104-SJC",
      "X-Runtime",
      "0.189316",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a31c7e047104-SJC",
=======
      "662",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3f21d0042add3521a211dd715257fbb5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-pndmd",
      "X-Request-Id",
      "69ead1759f0a6abc-SJC",
      "X-Runtime",
      "0.212100",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1759f0a6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hyhzNYk3Pk9JKgXcFkpiMV4MkZNFhoGZoZ4uQeRG1Eiz70Lc%2BMNfZmSoPd76htQpArFCaQJGLKTMCS3zoITke7AQDJhNSrIKQoZMs43rugHy8HbMClDZJi9BSUDGbQb5aRQwt04J1dJwqWM%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=62HpWsJGUt9GYqXSPJB7UHnMwVT%2FHitgwLnMkgXhvvynBCjKcTq2aENRVV0o0GUye7o49B69%2FGWyoOrlPD96cSdtYBY9MdwsD1mp1Sr3LUhWiaxHoVV575JWWFupkhJ0hprYG3%2Fxfay6U40%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a31c7e047104-SJC",
=======
      "69ead1759f0a6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:39Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:51 GMT",
=======
      "Fri, 15 Oct 2021 17:37:58 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "663",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f588060b04b5aff844503329fcc3b923"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-qx9wm",
      "X-Request-Id",
      "6a16a31ea8fb6458-SJC",
      "X-Runtime",
      "0.220761",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a31ea8fb6458-SJC",
=======
      "661",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"efa1659ea563982fe7f830bdb88e68db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-htd8n",
      "X-Request-Id",
      "69ead17a7ea2f6ec-GRU",
      "X-Runtime",
      "0.264011",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead17a7ea2f6ec-GRU",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xf4BVb%2FzgpfFvJsP7cSwJz5I1tcjyCw%2FP0VBY1yB%2BRX0NfJCoPaHA9DaZew9xgr778cM2oBb7HBohsYLSgjZ%2BJLf0jcrb44Ux0Z%2BkkcmO%2FDuAUtoAs0ykq7KWiGOivdT4UmS%2FV%2Fb4dn2%2BFc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=3314665992bc1b7431497ed1a53898ed2b0ed25d-1634778951; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a31ea8fb6458-SJC",
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=m5NZ4csd%2Bz6eXdLwmr%2FcJx4DuqT2btm7mLnSIprtBonsi%2FbTtHMh0ZMWK4fbU92%2FZiiuMi%2B7ELAPt0tpkcog%2F3vtvo3sXLLVDLFmTMBYPzOppbb0dweCSQY1jGJGIZXSmud2j6fm3wg%2F6sk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=13a1590070674fe39d25c1666ad72d6908e9f25c-1634319478; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead17a7ea2f6ec-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:39Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:52 GMT",
=======
      "Fri, 15 Oct 2021 17:37:58 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "662",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f588060b04b5aff844503329fcc3b923"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-j46t8",
      "X-Request-Id",
      "6a16a3209bba7104-SJC",
      "X-Runtime",
      "0.193951",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a3209bba7104-SJC",
=======
      "660",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"efa1659ea563982fe7f830bdb88e68db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-45dx7",
      "X-Request-Id",
      "69ead1823c0f6abc-GRU",
      "X-Runtime",
      "0.224911",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1823c0f6abc-GRU",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZV1dfHedvHrMdAq8v9SvrGDTcBC%2Bh%2BdswGccVGkl5WWu7wdgkYQCENE%2BTskWJiqmUEIGq09GUWlce6REZOa1WBoLLnT8QPS0PUOp%2BnNlPV%2ByasMN2n8rmd5X28FLIBch19LvvTZPTWrsRRw%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HhM7eB2K68MeO8YfX7iVouQrlGJI5td4Q7lh%2Fr8%2FGjoXE8fmsHhqvdOC3qI%2Fm%2FV5M8ognIGc5NGQDuAgs84INTfg4TF%2BEHARavz2qXh2izGLh%2FoqazVPbG4DCAiWzE%2Fo2mLaFrnxFtQAyyo%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a3209bba7104-SJC",
=======
      "69ead1823c0f6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
=======
          id: 421079850351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-15T17:36:16Z",
          updated_at: "2021-10-15T17:37:39Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: ["test_high_value"],
          alias: "",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:52 GMT",
=======
      "Fri, 15 Oct 2021 17:37:59 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "661",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f588060b04b5aff844503329fcc3b923"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-fs7rm",
      "X-Request-Id",
      "6a16a322beee6428-SJC",
      "X-Runtime",
      "0.207845",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a322beee6428-SJC",
=======
      "659",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"efa1659ea563982fe7f830bdb88e68db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-r6x5l",
      "X-Request-Id",
      "69ead187aafed048-SJC",
      "X-Runtime",
      "0.208968",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead187aafed048-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=C3tBjV8BOJjd%2BT7rS6%2Bg2W0v5rhcIf0NJaQ3v8Fm7PVnCbfFqjCpo6NVuXBEYD9siQUZEeaykUSWe5WCHZvmSJeuvl4ix3yOWwTCqDG69C34dC4VNauZvi2fzlt3J8YqnuWzJ1VtMSoDzuw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=c91e4703e8caac371f8175ad3a0d748130560634-1634778952; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a322beee6428-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1902653125947.json", {})
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ygi%2FNNdQRppKC%2FXYGutT2qWiPioZeKOIBabM9EnzhKnh%2BPqS7e41ZFwT4nzwCcbfEMaFo%2B1X5A1jkU604s2bQy7ZPMV6Z2KMo2p7wsdP2JAXdnJ3hrNSj2GNB%2Bb%2BoaiOBfsJFYQFTx4iFZI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=4c74af7ff338286d0d0c193bfff1d9d396d0e284-1634319479; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead187aafed048-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421079850351.json", {})
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=c91e4703e8caac371f8175ad3a0d748130560634-1634778952"
=======
    "__cfruid=4c74af7ff338286d0d0c193bfff1d9d396d0e284-1634319479"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: null,
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:52Z",
=======
        id: 421079850351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079850351.json",
        name: "John Connor",
        email: null,
        created_at: "2021-10-15T17:36:16Z",
        updated_at: "2021-10-15T17:37:59Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: false,
        external_id: null,
        tags: ["test_high_value"],
        alias: "",
        active: false,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:52 GMT",
=======
      "Fri, 15 Oct 2021 17:38:00 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "660",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d5b7a6a2b79c753123011ecf9dd35040"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-p6wv9",
      "X-Request-Id",
      "6a16a324896b6428-SJC",
      "X-Runtime",
      "0.468411",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a324896b6428-SJC",
=======
      "700",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c7355f4dd2224963e1a3cfc59f57f6d0"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-4vbfm",
      "X-Request-Id",
      "69ead18acf7ed048-SJC",
      "X-Runtime",
      "0.506590",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead18acf7ed048-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PGfqJt2%2FtK6fSulmEvNUujOUtNdftRSdU76JGurSiLe145f0MK566FCevAzzGBAm4NhYoqrorUoNi0U41TavtJsVI9nothooMXte5M1tVZ7%2Bdfsj%2BTeDr%2FIVS519C2GEd0RDE52RGe90vaY%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w8%2BOWYgrzAsCwGAzfylABOhegV1ESxUUESiI%2FwY2tiCYqEnzQ1Suad4oxf3LtudvTdDFu1z%2BsGfczBl2QNUGla7Dg%2Buyzr93DBokP%2FDNjpYwKegXITHXzWKvRCZD9C9o3EJcbIg88hLkGYs%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a324896b6428-SJC",
=======
      "69ead18acf7ed048-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:53 GMT",
=======
    "Fri, 15 Oct 2021 17:38:00 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "659",
=======
    "699",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-p8gfx",
    "X-Request-Id",
    "6a16a3280efa7104-SJC",
    "X-Runtime",
    "0.160786",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a3280efa7104-SJC",
=======
    "classic-app-server-5d8f87bff-jbxrp",
    "X-Request-Id",
    "69ead18fc9d66abc-SJC",
    "X-Runtime",
    "0.185441",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead18fc9d66abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZiZcPk9ukm%2FB8i8HgepCKcoVBk4%2BygHl0sjb8YTF%2Bh7a0X%2FASJOkUJhflJorVDk25s06Jt%2FKSGp%2BLfWF0sW74Uiq0hV2lCHkK08pGDdPnjl8WYW%2B5sW6j%2Bm%2BMHyWoeHw3woVkvk3hxqPGio%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YmB5denojjWG9vcbDFFEKBEvO1DZGACnCSmr8nZj90tiMUUhk%2F8nE9GZ8Ihzi3FN3xltI8ywCwxB0XJwKTuiSY9eoxHe5Mqjunskc8RtM6cuJxj50yYarfo6Do51KgDn0UVWWKd3yrnXQNA%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a3280efa7104-SJC",
=======
    "69ead18fc9d66abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:53 GMT",
=======
    "Fri, 15 Oct 2021 17:38:01 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "658",
=======
    "698",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-hn6vs",
    "X-Request-Id",
    "6a16a329e8d63b22-SJC",
    "X-Runtime",
    "0.153465",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a329e8d63b22-SJC",
=======
    "classic-app-server-5d8f87bff-g9bkp",
    "X-Request-Id",
    "69ead1947f126af4-SJC",
    "X-Runtime",
    "0.181480",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1947f126af4-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vbPKJddYiEC3JEU9JvZ8FJrfzik%2BHytuKgq8ODwzQVecPP9U45U9hBsADc1AAlgc8DuwU8e4FaIKt1%2FKiMTaxAovdu5ZVdSrDQGpEjdAsMGMObJaW3AroXWE33pBpvMWwTsnW32wNXzPAOM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=7387913690241bfda0df9396b8adc0fa0175e71e-1634778953; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a329e8d63b22-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FBrXS71tAY54Msgu9UGMi3PuGgAmXH0SQn2XsU9WcBskfeahtggajbDAefyuLmHw5CNv90QOjXst0wsN73AYR1yCuXpJ9rUOV2LD4wYi4rsgBia272RpQdyqRKMfBsOQgGAmdO24i%2BaOQtQ%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=7c888e4308beaffac15c17d76feb2280b4075b32-1634319481; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69ead1947f126af4-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=7387913690241bfda0df9396b8adc0fa0175e71e-1634778953"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Fri, 15 Oct 2021 17:38:01 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9958",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "697",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-5d8f87bff-crvbf",
    "X-Request-Id",
    "69ead1977efc6abc-SJC",
    "X-Runtime",
    "0.188230",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1977efc6abc-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p0Gf0hvalsPS3GvOesONkYzELAxRlBHYyHO0upYrIEV4BJCC0twMGx3OmEzBMCI8nrcNHQYFERg%2B27VWr6NJr99WqvmTIjmCVI5Ky2czuE%2FfDGm7gs2hi93QFp%2B5o%2FTrmm3Sz%2B2p93RwqeE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "69ead1977efc6abc-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:51Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:55Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "maybegrouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:53 GMT",
=======
      "Fri, 15 Oct 2021 17:38:02 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "657",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3a4092a3ec7823c23f6040efd974899e"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-6djtl",
      "X-Request-Id",
      "6a16a32b7ac93b22-SJC",
      "X-Runtime",
      "0.171015",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a32b7ac93b22-SJC",
=======
      "696",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3f21d0042add3521a211dd715257fbb5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-fxscj",
      "X-Request-Id",
      "69ead19c18edd04c-SJC",
      "X-Runtime",
      "0.205559",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead19c18edd04c-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oQLp6GVFGd3iFeq8E2MUFbeOtFc7b1qthfD6Z6aNnakHjW9fv00UrWQpAzgnXM53%2B%2B8yfvxPU%2Fm1UsV6zPIFRi81JFxgpICi5JmkdGgNRZYgLDQaL1j3ESEzCsaMHjq4i%2BC6cArVaEoDCOo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a32b7ac93b22-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1902653141627.json", {})
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DtJSdVAIlFUYt%2BPdPiqWZU5eRyqUJkCfeS1Vg24az6A9PUz%2BFJLTLYXL%2F3LrxCqYXuhBaeKrnlQdBmEnOmKDc3t8r0CYroTSZXM54pr4WfUaAxAJViMDh6gTASjoognhsY10QRFudqLdZGU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=b3fc945ee0fe95af674ae10e41aaa12a1722f551-1634319482; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead19c18edd04c-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421079869371.json", {
    user: {
      verified: true,
      email: "maybegrouparoo@demo.com",
      external_id: "maybegrouparoo123",
      name: "Jill",
      tags: ["test_recently_added"],
    },
  })
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=7387913690241bfda0df9396b8adc0fa0175e71e-1634778953"
=======
    "__cfruid=b3fc945ee0fe95af674ae10e41aaa12a1722f551-1634319482"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653141627,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
        name: "Bobby",
        email: null,
        created_at: "2021-10-21T01:15:46Z",
        updated_at: "2021-10-21T01:15:54Z",
=======
        id: 421079869371,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
        name: "Jill",
        email: "almostgrouparoo@demo.com",
        created_at: "2021-10-15T17:37:45Z",
        updated_at: "2021-10-15T17:38:03Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: false,
        external_id: null,
        tags: [],
        alias: null,
        active: false,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:54 GMT",
=======
      "Fri, 15 Oct 2021 17:38:03 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "656",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"b5709bc40564f67697e5d850ba09a315"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-g6xr8",
      "X-Request-Id",
      "6a16a32d0cb73b22-SJC",
      "X-Runtime",
      "0.399966",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a32d0cb73b22-SJC",
=======
      "695",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"a4fcfb0722ed80ffe121250d03b0d993"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-4gjrf",
      "X-Request-Id",
      "69ead19f4ce8d04c-SJC",
      "X-Runtime",
      "0.411877",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead19f4ce8d04c-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=74DbYGlj8IShGydto42%2BeDZfyQa65XmlneVw1QlSeNRVFM9PFJYkMjnx425LMqK%2BEHxu9bDjI8hLPPmx7fHccBQUPnCSmn1ghk2u8MONp9SGxZUnT29CpGi3LGg6aS9AtbAjyWxcDNeOc7s%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s5xJJDqp8F93ljCTg9JBIVKJZ6NK9dAqSjNuitDCiAC3Jv0bggxk2MhqnpMqaCEBMJFsT4UkLNYi8ZDQFeFL9pp9upIt7zrzZ83hPVahdDWTnc%2BFTHr9GOBImjRL1wOFXL5tVcWZ97r9Co0%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a32d0cb73b22-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
=======
      "69ead19f4ce8d04c-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421079869371/identities.json")
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
<<<<<<< HEAD
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:54 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "655",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-pjfmg",
    "X-Request-Id",
    "6a16a32ffafa7104-SJC",
    "X-Runtime",
    "0.180990",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a32ffafa7104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Spjht3haDrnmlfPrPZA4RKJqv2dDyCBe5SH0U9zl0cOMZr%2F%2F1kJa%2FXxua85S7xkoBIGTOVgV88WWrpXEufPnKyM814KOYJdRQm3ttrkZljjeOttBUrRylc3gISIi6cNtcRD27AmV%2FaLhkdA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a32ffafa7104-SJC",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:54 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "654",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-6ftbt",
    "X-Request-Id",
    "6a16a3320cc470fa-SJC",
    "X-Runtime",
    "0.152919",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a3320cc470fa-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6ljcWSLAPhZ6bBhSO3rXGZLGa5hJqm5BITQBb4L5H%2FUOM2Hcvyd1ltBxmxRxOOSmC2CozV87%2F0OyVG4CdxkIl1vkvTK330MlB%2B7vO1GTG0g6VxkfKrI7VfI5qwvTeFEYMz6BWUKa4JhuGO4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=ba493742794cebdf8eeb71b16e77e7ee3bbdee7a-1634778954; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a3320cc470fa-SJC",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=ba493742794cebdf8eeb71b16e77e7ee3bbdee7a-1634778954"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:55 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "653",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-fgss8",
    "X-Request-Id",
    "6a16a3337ef770fa-SJC",
    "X-Runtime",
    "0.170532",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a3337ef770fa-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CScZI07JXlwuk7lAdPHjoCK%2FsDo0ZqFx%2BsNhil3c2ECGSqMYhJJ4txKAtUQVnRADkpU%2BjWSbT1CqjTcwUF2A2Bw1ZCywC47bDvhx5csamGAitOG%2ByqDrGTBWBv%2BXhlxQmLvPOJtmflgnA9k%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a3337ef770fa-SJC",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/create_or_update.json", {
    user: {
      verified: true,
      email: "maybegrouparoo@demo.com",
      external_id: "maybegrouparoo123",
      name: "Jill",
      tags: ["test_recently_added"],
    },
  })
=======
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/390565900592.json",
          id: 390565900592,
          user_id: 421079869371,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-15T17:37:53Z",
          updated_at: "2021-10-15T17:37:55Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/390568602091.json",
          id: 390568602091,
          user_id: 421079869371,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:55Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/1901426272547.json",
          id: 1901426272547,
          user_id: 421079869371,
          type: "email",
          value: "maybegrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-15T17:38:03Z",
          updated_at: "2021-10-15T17:38:03Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
      ],
      next_page: null,
      previous_page: null,
      count: 3,
    },
    [
      "Date",
      "Fri, 15 Oct 2021 17:38:04 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"2497ef3bd9e6e1e492f5c071caec906f"',
      "Last-Modified",
      "Fri, 15 Oct 2021 17:38:03 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "694",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-xfkzs",
      "X-Request-Id",
      "69ead1a57d14f207-SJC",
      "X-Runtime",
      "0.185849",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1a57d14f207-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cZ65cly4SRi62dNZNbe0aNPRD%2FqxYLGljDDkT37h2tK019OkW7vSoORjuKY5daQjtx9zAQhXfmXW1Ho8A6G3ROzgrXcVVpIAqpWJyS%2Bn8IhagvRP5iuImCjEeaPqcIko1wEq8UEXmh3eLK4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=22207cf75015c6dfdce64cb40829c820b389728c-1634319484; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead1a57d14f207-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/421079869371/identities/1901426272547/make_primary.json",
    {}
  )
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=ba493742794cebdf8eeb71b16e77e7ee3bbdee7a-1634778954"
=======
    "__cfruid=22207cf75015c6dfdce64cb40829c820b389728c-1634319484"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 139)
  .once()
  .reply(
    201,
    {
<<<<<<< HEAD
      user: {
        id: 421223243951,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223243951.json",
        name: "Jill",
        email: "maybegrouparoo@demo.com",
        created_at: "2021-10-21T01:15:55Z",
        updated_at: "2021-10-21T01:15:55Z",
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "maybegrouparoo123",
        tags: ["test_recently_added"],
        alias: null,
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
=======
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/1901426272547.json",
          id: 1901426272547,
          user_id: 421079869371,
          type: "email",
          value: "maybegrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-15T17:38:03Z",
          updated_at: "2021-10-15T17:38:05Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/390565900592.json",
          id: 390565900592,
          user_id: 421079869371,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-15T17:37:53Z",
          updated_at: "2021-10-15T17:38:05Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371/identities/390568602091.json",
          id: 390568602091,
          user_id: 421079869371,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:37:55Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
>>>>>>> chore: improve error message collect.
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:55 GMT",
=======
      "Fri, 15 Oct 2021 17:38:05 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1031",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421223243951.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "652",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"b3bdeaff2084bdcc2d207adda257bd09"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-6h9ct",
      "X-Request-Id",
      "6a16a33508e070fa-SJC",
      "X-Runtime",
      "0.351703",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a33508e070fa-SJC",
=======
      "693",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d32b5cee8d93908b351df4448aadf8ec"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-fzrt9",
      "X-Request-Id",
      "69ead1a89ad9f207-GRU",
      "X-Runtime",
      "0.487283",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1a89ad9f207-GRU",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Eb%2FsEHu3ZTJvKZFwytDlnKuXKMuw92juYNj5xppSVMHbtuu4xg%2B%2F5HoOWfwGLufHMNR0bi2IJouJFSktMxnsaqStl6f5CGG%2FA6TcZ%2BjmxLN8z27A2ncXfIEwcCmQee6UrRSVcjkgAPGO7so%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1RGA97iRaVsFCMySERCS0C2Gr6Vqr63chJ3wF0Q61kjpxchmMCGQlF8VykBerR0pCyTiHz0sOO0mpmZfcfRbogKxKk%2BsvnfmHVY8gxWY6hNtpbzj5XDMubwh3IglYo5TsSYpvb5cCgN08Fg%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a33508e070fa-SJC",
=======
      "69ead1a89ad9f207-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 421223243951,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223243951.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-21T01:15:55Z",
          updated_at: "2021-10-21T01:15:55Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:38:05Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "maybegrouparoo123",
          tags: ["test_recently_added"],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:55 GMT",
=======
      "Fri, 15 Oct 2021 17:38:06 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "651",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"20473f511a88112bf63de1e04f97890c"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-6rqt6",
      "X-Request-Id",
      "6a16a337be437104-SJC",
      "X-Runtime",
      "0.205597",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a337be437104-SJC",
=======
      "692",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"beebbcf80ee87e4d28447585edfb7d76"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-2grvz",
      "X-Request-Id",
      "69ead1b1fa3c6abc-SJC",
      "X-Runtime",
      "0.265538",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1b1fa3c6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4S4ybNjp1wV20pHw7gDC5Cu%2BJ9cqaW3r5V31ddTVtVP2axMJDSzc7KoJFx5z8RTiVQs20IEguYFfvOw4lkkf8bjHt%2BPWMaYRXkpde4jMPquF2DOn2mQRO6PG6P5QnFzIhzZXmAxc7%2FVLsBM%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p96MBL0iqhWXJhaJzUGSa6RGzOp8fljck0R1aE%2Fz6Rq3mpk4GSGaksAyxi65615TR%2B2BUQeNVDwD0L%2FGjOU%2BQN4jI4jxWFyeJ%2Ff6Y0KyqmPiKaiD7GxeI3WQgmGHmRT6hIGjfBrMCgZysUs%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a337be437104-SJC",
=======
      "69ead1b1fa3c6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:56 GMT",
=======
    "Fri, 15 Oct 2021 17:38:06 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "650",
=======
    "691",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-bbbxw",
    "X-Request-Id",
    "6a16a339e834ed63-SJC",
    "X-Runtime",
    "0.154916",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a339e834ed63-SJC",
=======
    "classic-app-server-5d8f87bff-j8gfp",
    "X-Request-Id",
    "69ead1b72af1f734-SJC",
    "X-Runtime",
    "0.163726",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1b72af1f734-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FbnVSMfJzylwLq9s3oT%2FCcmdGinF%2Fs3gsr%2BW9A3DdcVHutCQwq9uDHT8xUgEW4SSWM9CZ1l32smjdDGkrUhXzTQEH5yi18UdscLz%2FdGJdsb5Oo3CGNge2p%2FA5aJcwDF0kfRyLlr%2BOhXXl3Y%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=bc39c5137a61c3e0e87f49a2e2d3a291586d6a65-1634778956; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a339e834ed63-SJC",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=bc39c5137a61c3e0e87f49a2e2d3a291586d6a65-1634778956"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:56 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "649",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-mzck6",
    "X-Request-Id",
    "6a16a33bb9eced63-SJC",
    "X-Runtime",
    "0.186714",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a33bb9eced63-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y4UHN80ppK%2BWJo5QESOkPt%2FisjbCLKEKLv1sk8NBoc%2B9T1jrEUsthAGKXJIYB%2BeQ4vaZvV39oEmGzcVNyJtCIoMLZaAtId8%2BPGbf6OpYc%2Fekk3%2BTs8a2IxilCWwwTfgEpKs9hMzdot7qMRQ%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a33bb9eced63-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qaJfpCiy5wyaV6tXrYCT9SWlTE40eQ4GVHxqnq58N4oEcDr5zBaW8%2BXtRL544Gqt1koQBYZ7FlgcW4SOLY7L9uIZVTgA59VPhDhdS946Mlt5joWtznUYwRfONWLKIpXbcop%2FkuLAsgJFogs%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=32a20ed70fbcc1df0e8f2f00d448583f48511886-1634319486; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69ead1b72af1f734-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/create_or_update.json", {
    user: {
      verified: true,
      name: "John Doe",
      email: "grouparoo@demo.com",
      external_id: "grouparoo123",
      tags: [],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=bc39c5137a61c3e0e87f49a2e2d3a291586d6a65-1634778956"
=======
    "__cfruid=32a20ed70fbcc1df0e8f2f00d448583f48511886-1634319486"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
<<<<<<< HEAD
        id: 421223244351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:15:56Z",
        updated_at: "2021-10-21T01:15:56Z",
=======
        id: 1902509179907,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902509179907.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-15T17:38:07Z",
        updated_at: "2021-10-15T17:38:07Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: true,
        external_id: "grouparoo123",
        tags: [],
        alias: null,
        active: true,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:56 GMT",
=======
      "Fri, 15 Oct 2021 17:38:07 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1006",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "648",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6c76d1701e9a2b97ccc0d06f27d40247"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-7ghvx",
      "X-Request-Id",
      "6a16a33d6b87ed63-SJC",
      "X-Runtime",
      "0.427271",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a33d6b87ed63-SJC",
=======
      "v9958",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/1902509179907.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"fcc7df1c60b4503d3772444381ae7939"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-htd8n",
      "X-Request-Id",
      "69ead1ba2f5ff734-SJC",
      "X-Runtime",
      "0.475816",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1ba2f5ff734-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fD9wSi86jkz9sfKuIWntgs4x%2BrWuLhQ5VJ24hDqXCcn0kcinCAgKW1NncaIwsA3PP75%2FU%2Fjy2rTu%2B3jnjGenvmodzma3oNUqgF%2BbGY01ExwifwsOUN1mzgX7U2ryVuUqR%2FBvBmX4Zdwbejw%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SdzwCgBPbXx0SUkWv1Huzf7%2Bo6hNqLF1O%2BaeodY821MgqIwUaJK4j3cRRwoRCxu2ULzYwQrjy2FsMGE5po%2FKSvL9qYAeBxC85lxSe6iIWMppdoinbtPFkHc%2BjZxbmet76tcBNmORm6kyGqw%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a33d6b87ed63-SJC",
=======
      "69ead1ba2f5ff734-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 421223244351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:15:56Z",
          updated_at: "2021-10-21T01:15:56Z",
=======
          id: 1902509179907,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902509179907.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:38:07Z",
          updated_at: "2021-10-15T17:38:07Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:57 GMT",
=======
      "Fri, 15 Oct 2021 17:38:08 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "647",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9cb313d89886741c2bd25b7c1b3f916c"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-8fx55",
      "X-Request-Id",
      "6a16a3407d6f7104-SJC",
      "X-Runtime",
      "0.229259",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a3407d6f7104-SJC",
=======
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f48d8a70f8a669bcc20380115d04fbcf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-rd24n",
      "X-Request-Id",
      "69ead1bf0f596abc-SJC",
      "X-Runtime",
      "0.225829",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1bf0f596abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oJfLaLcuyqC%2F9qC72vzrwrsZV3Sq3z2GV87OXYoS0hCXmpJEuomdJPDPxYA%2FFN0o58EQACn2FaOphMChGDmabQgDWymPydK%2FV06g%2Fa%2FO0wfUl4pf8j7affxx2Yj14pSuSBVUBh9yan8%2BVVU%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TVfXYj0Sy2RPrSAtpZao6Rr8vt9DotalzsXVb0qn0mQYkN2iq0SvzWOvDTzFuP%2B%2BjDo%2B8UeyaHChxcwnOZmqhwbqZ%2FhpIZYTTqKIUFY7Jt1sSLmTcAYLBZsHwmi4jzUiCwB%2FlUwXYfv%2FHxY%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a3407d6f7104-SJC",
=======
      "69ead1bf0f596abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 421223244351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:15:56Z",
          updated_at: "2021-10-21T01:15:56Z",
=======
          id: 1902509179907,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902509179907.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-15T17:38:07Z",
          updated_at: "2021-10-15T17:38:07Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "grouparoo123",
          tags: [],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:57 GMT",
=======
      "Fri, 15 Oct 2021 17:38:09 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "646",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9cb313d89886741c2bd25b7c1b3f916c"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-7248v",
      "X-Request-Id",
      "6a16a342d8ce645f-SJC",
      "X-Runtime",
      "0.195127",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a342d8ce645f-SJC",
=======
      "688",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f48d8a70f8a669bcc20380115d04fbcf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-wshqx",
      "X-Request-Id",
      "69ead1c3e898f744-SJC",
      "X-Runtime",
      "0.195208",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1c3e898f744-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jmN3HasX91kjGKfHdd95XJrLkbnXi%2Fo%2BiYly9qbthw%2F%2FnFgJhmtIlFPnvNCgQo6qnGwnDYekRzTcKi%2BnSGvkUtmBz6dHGUEGRoqbO74qfrV%2FIJ6d9WGYtdvGEs2IYNoeWKRzO910alyz%2BZw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=150d089e91ddc78199482c6eb4e7e7f10ade863e-1634778957; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a342d8ce645f-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421223244351.json", {})
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OMYf75SKbEWf%2FplIcIkWm1m9V84QzzvWKVovZCFcRdwqW0W29p5X702wIhyC1X4quXxr366ssDZ%2BA9AUzwi5QMoiSg%2BirM1ZUUKKYq%2FG0bWCZirBgolBxvpXEXKYdGMibBDT%2Bgpq72aZg7U%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=54224b3620ba6d4ff7c562d2cdb81fdd5a388b5f-1634319489; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "69ead1c3e898f744-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1902509179907.json", {})
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=150d089e91ddc78199482c6eb4e7e7f10ade863e-1634778957"
=======
    "__cfruid=54224b3620ba6d4ff7c562d2cdb81fdd5a388b5f-1634319489"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 421223244351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
        name: "John Doe",
        email: null,
        created_at: "2021-10-21T01:15:56Z",
        updated_at: "2021-10-21T01:15:57Z",
=======
        id: 1902509179907,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902509179907.json",
        name: "John Doe",
        email: null,
        created_at: "2021-10-15T17:38:07Z",
        updated_at: "2021-10-15T17:38:09Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: false,
        external_id: null,
        tags: [],
        alias: null,
        active: false,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:58 GMT",
=======
      "Fri, 15 Oct 2021 17:38:09 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "645",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"b8ddeacca42b5ab9718797f742c6da89"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-5vptj",
      "X-Request-Id",
      "6a16a3449c29645f-SJC",
      "X-Runtime",
      "0.457648",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a3449c29645f-SJC",
=======
      "687",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"2d83b121b5bca3168a7ed58f935a36a5"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-fr8v7",
      "X-Request-Id",
      "69ead1c73db6f744-SJC",
      "X-Runtime",
      "0.492265",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1c73db6f744-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pm1zCOcWf3mYifX1I%2F2Ip8ymcSem%2FEc7aeU1U7khZfnVRRyRbGB4nDMjjcogOw%2FhylMEqogSDAxbozpfzbpXm9tWaFnQcSNVOUXfLCaIMvcmNfs8SStlDI7BPEgsVI%2BYStorE%2BtZdr%2FAzUo%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j8il%2BjkdT21k%2FwoqCUC3gRw8AvGev2tMa8%2BO6y6afkxyryyue1yrfko3ANZwHdm%2BXKX%2FGm9jmhHVwFU7MmgAwHxE%2F0vCCiyEDXPzS7rBFsV9p4FKWyaWnGRIPFSArGIiCTNyuB8aKDBxW7U%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a3449c29645f-SJC",
=======
      "69ead1c73db6f744-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:58 GMT",
=======
    "Fri, 15 Oct 2021 17:38:10 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "644",
=======
    "686",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-hsq77",
    "X-Request-Id",
    "6a16a347ef357104-SJC",
    "X-Runtime",
    "0.147773",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a347ef357104-SJC",
=======
    "classic-app-server-5d8f87bff-z2w2t",
    "X-Request-Id",
    "69ead1cc2e3b6abc-SJC",
    "X-Runtime",
    "0.172032",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1cc2e3b6abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L3rfWWhUigiZcLaavXWxeMvWAoBGvCoxDDXC4fq0Qoa1h7NI6ZTihhRclAR%2B9Bq5thBFZGBuiRDdr%2FfLdvnRHT7yUZBIaiW7ynRUDOLgMavHxUPcZeRf03l6iPSPzQSGKtGPwUimPsudnYY%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zPIutNllLIZ888SNMA3NnCBuXeAsM8gkHA6czGAZQkw5GtMks8nrc%2BAONl5eUXvEoFyjv2LNbhCF%2FEbs8dTgkTFc%2BmnrYz%2BFGS0rcWLNuzZn8j3e9cPARP7W8t69Xj5j6VNauf4DK1%2FGEOI%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a347ef357104-SJC",
=======
    "69ead1cc2e3b6abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 421223243951,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223243951.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-21T01:15:55Z",
          updated_at: "2021-10-21T01:15:55Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:38:05Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "maybegrouparoo123",
          tags: ["test_recently_added"],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:58 GMT",
=======
      "Fri, 15 Oct 2021 17:38:10 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "643",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"20473f511a88112bf63de1e04f97890c"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-pw2qr",
      "X-Request-Id",
      "6a16a34949047104-SJC",
      "X-Runtime",
      "0.227909",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a34949047104-SJC",
=======
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"beebbcf80ee87e4d28447585edfb7d76"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-8jf98",
      "X-Request-Id",
      "69ead1cf3b8f6abc-SJC",
      "X-Runtime",
      "0.216986",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1cf3b8f6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OVEsOGhCnD1X9r%2FoOqOP8BwmeqO8rieO4Pkj8YRKttezqLwNM4gBLZtUYgppCgULuJwmHn2mGPAqBYUxx6s7WwCJMIFD35rzXM1Pb5d0y30VRRYjZVA2Zgc%2FkSOKtRAVS0itr2IIWM4TWdc%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iz3Ba%2Fmv%2FeuyjlFwjDoh7ojTwUCUf3qbSf%2BHy4wDYJ0TwcxK7PKvRezqOLTTWqIqqYzqbt3dD%2BpnVOdFiE04XSBod0TAfYn2DjAAazSkpSjo7CGn2%2BAY9pWgzaVnH3GqwRc2d%2BFwxHKRocc%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a34949047104-SJC",
=======
      "69ead1cf3b8f6abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:58 GMT",
=======
    "Fri, 15 Oct 2021 17:38:11 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "642",
=======
    "684",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-8vzct",
    "X-Request-Id",
    "6a16a34b9b01711a-SJC",
    "X-Runtime",
    "0.151475",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a34b9b01711a-SJC",
=======
    "classic-app-server-5d8f87bff-92fhx",
    "X-Request-Id",
    "69ead1d41c2a4d3c-SJC",
    "X-Runtime",
    "0.168545",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1d41c2a4d3c-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3pXS8INWx9QEjwg0lzRdRycRgJubFD3xfBvI0Dcg%2Bp8Auwr%2BCXrYxlbTc8UYy3FerUJSLXxhELfP%2FT2aUXzPodwcV6W37m%2FbNXtKDkBNrMUTBtkJAWQL0Wa8VOmoPf9bFLc5wYWfzMPQ%2BCc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=524b186d68f8ebb25a9b8d31f477833c736d9355-1634778958; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a34b9b01711a-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gDDS%2FqXuBwpBRhAY3QLA8bzRuSzAvw5%2B1fjTADSE3py6u0VFlYG5pqZOY29%2FECCoy6hETbrZ7xsv5JZnGS1J8leQn1Gil%2FbfiBOeANZzNJN8%2BGh2Jt0TuxbVA%2F7m4YbT%2BFjGa32CkoOeZ1M%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=e01de346326247db1d0d54989a898a97a3b44f5e-1634319491; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69ead1d41c2a4d3c-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=524b186d68f8ebb25a9b8d31f477833c736d9355-1634778958"
=======
    "__cfruid=e01de346326247db1d0d54989a898a97a3b44f5e-1634319491"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 421223243951,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223243951.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-21T01:15:55Z",
          updated_at: "2021-10-21T01:15:55Z",
=======
          id: 421079869371,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-15T17:37:45Z",
          updated_at: "2021-10-15T17:38:05Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "maybegrouparoo123",
          tags: ["test_recently_added"],
          alias: null,
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: false,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: null,
            regex_field: null,
            text_field: null,
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:59 GMT",
=======
      "Fri, 15 Oct 2021 17:38:12 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "641",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"20473f511a88112bf63de1e04f97890c"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-8cmr7",
      "X-Request-Id",
      "6a16a34cfd03711a-SJC",
      "X-Runtime",
      "0.213137",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a34cfd03711a-SJC",
=======
      "683",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"beebbcf80ee87e4d28447585edfb7d76"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-qlrfv",
      "X-Request-Id",
      "69ead1d6f9524d3c-SJC",
      "X-Runtime",
      "0.217610",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1d6f9524d3c-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FI6caRqJVZV%2FeIQH63KDPSSFpsQGWuBByfaGIWPrsdzASlxrS4M6EV%2BbQ9Sq5CUB3SJInCM77zGsTypKKk8d2%2BrcOpk%2Blu6MSA2cVRBQeTvdXeANkLagDhrsF7n4uog6PKavZBZ0x%2BBB5Fk%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hn3CfHMEPOPYCfl6Qlg%2FGPLrkh7GedYoQ6Hg%2FI%2BX7PVxTZt33Sm200%2BawjNocQ9RYXE17k7AAMBGA8RhFLS%2BBP3YParLfYY1ERoQQKAP8Vp1C%2FubE5JUw3lg%2BTB9DVsjKiQAJZKc4ePgYwk%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a34cfd03711a-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421223243951.json", {})
=======
      "69ead1d6f9524d3c-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421079869371.json", {})
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=524b186d68f8ebb25a9b8d31f477833c736d9355-1634778958"
=======
    "__cfruid=e01de346326247db1d0d54989a898a97a3b44f5e-1634319491"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 421223243951,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223243951.json",
        name: "Jill",
        email: null,
        created_at: "2021-10-21T01:15:55Z",
        updated_at: "2021-10-21T01:15:59Z",
=======
        id: 421079869371,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079869371.json",
        name: "Jill",
        email: null,
        created_at: "2021-10-15T17:37:45Z",
        updated_at: "2021-10-15T17:38:12Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: false,
        external_id: null,
        tags: ["test_recently_added"],
        alias: null,
        active: false,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: false,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: null,
          regex_field: null,
          text_field: null,
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:15:59 GMT",
=======
      "Fri, 15 Oct 2021 17:38:12 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "640",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ce461f2aa34d52c28b6f8c42ac50923d"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-p6wv9",
      "X-Request-Id",
      "6a16a34f0f60711a-SJC",
      "X-Runtime",
      "0.463222",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a34f0f60711a-SJC",
=======
      "682",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"81f3c0143d7b9c7288aafa5d1c1f2813"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-gjq67",
      "X-Request-Id",
      "69ead1da3f504d3c-SJC",
      "X-Runtime",
      "0.492667",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1da3f504d3c-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7crk8sfBGoRLnui7EARHdTs1Oacbh1CoW0%2B6%2BePA3MxDVVPRJQIVRJ8yiXTh1TQRDA4slNBvVVZXqUHW63a%2BGKKjNXMZQ5d8riTqhPUaOwbCYrc7JNOkwIihemRUWkgqd3TBEUoWHc%2FB3zY%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OUSIKkYukkFhFT5tC0CkYRYm5p6TLhKNoeGfcd4txoIRg1%2B%2BG7pU7Y4sLYaVVIpAi%2BcpxM8PqePWNyYH0nNba94CsbsVSvwfOcX%2Fisx%2FG4v4%2F5AefKdFUbvl0hKv%2F28eaB6Rf5quGDGbAEs%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a34f0f60711a-SJC",
=======
      "69ead1da3f504d3c-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:15:59 GMT",
=======
    "Fri, 15 Oct 2021 17:38:13 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "639",
=======
    "681",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-kjrl7",
    "X-Request-Id",
    "6a16a3525ce07104-SJC",
    "X-Runtime",
    "0.154847",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a3525ce07104-SJC",
=======
    "classic-app-server-5d8f87bff-sksrd",
    "X-Request-Id",
    "69ead1df1e036abc-SJC",
    "X-Runtime",
    "0.163531",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1df1e036abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qk6qZ%2FO7pfsAobvKVkNemnFLVnwZoJCNwx0kmrG86vC6f1vOWKdRM%2F6%2FRw%2B4UVvHSAUpIYsVcc9rfhGww24fk71l4X6Fvl1tGtKXpKl6iBkdYjKpEg7RvPcnQo8gnZZp%2B%2FaCUE0vC7Fwqhk%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h%2F16FKOUGJ6nenGn2SVJFa7Ervx0VzJe2RC%2F1zbZHVzPcToE0oWvMpt4PvZFQ6gGW6Gl6XUrY%2BAkLRAk52lVTRPZVNmKjBJn0GsbiSuXoBRXLcKSMoNPUVYdikqAVQkiJsBqfGQ9ImaNiO0%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a3525ce07104-SJC",
=======
    "69ead1df1e036abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:16:00 GMT",
=======
    "Fri, 15 Oct 2021 17:38:13 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "699",
=======
    "680",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-nck7q",
    "X-Request-Id",
    "6a16a353cee87104-SJC",
    "X-Runtime",
    "0.162527",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a353cee87104-SJC",
=======
    "classic-app-server-5d8f87bff-5jsgq",
    "X-Request-Id",
    "69ead1e20abc6abc-SJC",
    "X-Runtime",
    "0.160333",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1e20abc6abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HvVhaCIgGcrtjln2WWkKH6YRTeXPpgYNiSPwbii8Wjbz0JIh27jvwjSgNxMEyC%2FWFofDz2%2F4KE3ap6oDRBS0auuM9hrtSAPyRIYllwSIXIFRkcbPxsa0%2BYPsE87PPaf1PdNfSICEqPKYU4o%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aChQ0UYvkc1OSO%2B%2Fdyc73MabSgAhRo33Kpz0NEVgELcmYAu%2BeOrsFeQINZgIwl1aYdEnoPyVzXG6Xa48HutKkxxp4lOihZCOdb1IC1sfvR7Rl5h5ca8Ty4VkLpLVyeF2P4rLnSlwIcc%2FH%2Fs%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a353cee87104-SJC",
=======
    "69ead1e20abc6abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:16:00 GMT",
=======
    "Fri, 15 Oct 2021 17:38:14 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "698",
=======
    "679",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-vqdwx",
    "X-Request-Id",
    "6a16a355ae700280-SJC",
    "X-Runtime",
    "0.151513",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a355ae700280-SJC",
=======
    "classic-app-server-5d8f87bff-9hwpl",
    "X-Request-Id",
    "69ead1e698d24b2e-SJC",
    "X-Runtime",
    "0.179379",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1e698d24b2e-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tXmR91fhgnDAB6QokcE%2Bd4dxBAGwC3xHTDU39OGMAxJVMFt%2FaAWLomi8myrChNUzg%2BpDcvQpBBe0FkIrcUGBNF%2F4rOkREZLDQYOt9B00Vgx4ao4BDWvwucrUPxlQ60j77EvrMZozhHfEJs4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=dae65d364bd5117dc6c2d135798584a639132ba4-1634778960; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a355ae700280-SJC",
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1ziF1xw%2BXo8bvWbpnegCK%2B6q71mnZG9SUyfkXJBRdhY17OSoyiW4yR4XWu22uekQcUSr7Zxbu0Kn7jwTmYV8PhrasItc7cJK6Wb%2FN2fOHtJMXZHlBTMmCS47CcK%2BeJxxUj1UiCfRtTlXbXk%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=cf9b27a9c68a1b7d10b171a6c3723deff291979c-1634319494; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "69ead1e698d24b2e-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=dae65d364bd5117dc6c2d135798584a639132ba4-1634778960"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:16:00 GMT",
=======
    "Fri, 15 Oct 2021 17:38:15 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "697",
=======
    "678",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-ntsdj",
    "X-Request-Id",
    "6a16a35738960280-SJC",
    "X-Runtime",
    "0.184639",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35738960280-SJC",
=======
    "classic-app-server-5d8f87bff-fjtht",
    "X-Request-Id",
    "69ead1e98e3e6abc-SJC",
    "X-Runtime",
    "0.209362",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1e98e3e6abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zmdjL779VyVwAxZqD5HOcJCiGzwDxCq1sHxtfWgZp2PnuHFI3oDBotN%2BPjNXD%2BO13yQquYbNovQJthcaqdgmsKm1t59O9%2FkAVL8vhkGAR20UcxcNiOlmNv3P%2FlvrK1as6%2FBW8E9GN8BQP0c%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=b%2BREQPICC4w8BOer6ohS7E3%2FTl8u9y%2FJJEegi1KtqbPxXQXisJXH7qM8QCMEBT0OaOfIvI8Q65t9gQtSL%2FusmgFHdMlW34gSK%2FIr51LIYrPMrF9Bk9ktUR9MOvzS0FXtNpxIF3YqsJUNNTs%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a35738960280-SJC",
=======
    "69ead1e98e3e6abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:16:01 GMT",
=======
    "Fri, 15 Oct 2021 17:38:15 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "696",
=======
    "677",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-pn4xp",
    "X-Request-Id",
    "6a16a358ed797104-SJC",
    "X-Runtime",
    "0.184619",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a358ed797104-SJC",
=======
    "classic-app-server-5d8f87bff-wjxhn",
    "X-Request-Id",
    "69ead1ecaac46abc-SJC",
    "X-Runtime",
    "0.173480",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1ecaac46abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L5gQcQU7U3230bFnX%2FVoIQZlbVod5i3JeMihCmkUBdt3%2B65rsNop3%2FujHO3C0%2FP4V4seZU4%2BRwGvnyX5CQ4EN%2F7t08xhnko8QE9R30JldarsnF%2FUjcX01Ir%2BS%2BwXVptEhCqWG89hvPzmwYo%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X7qDJ5ot2LS1q%2BIFodXoxlM07a1GfqfU3mKkX1XfyyrLMZGkYxgzUQCyYCZqJHtMcRyXnPasz8bXWrVBJxorpbRO8mIhIuji63Cwx0VHlbHGT0AifJYJtATrgTicBfBOZm8ACPfjwnF1KaU%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a358ed797104-SJC",
=======
    "69ead1ecaac46abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:16:01 GMT",
=======
    "Fri, 15 Oct 2021 17:38:15 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "695",
=======
    "676",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-5zjlw",
    "X-Request-Id",
    "6a16a35a8fa77104-SJC",
    "X-Runtime",
    "0.156784",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35a8fa77104-SJC",
=======
    "classic-app-server-5d8f87bff-2phd5",
    "X-Request-Id",
    "69ead1ef8f6d6abc-SJC",
    "X-Runtime",
    "0.152100",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1ef8f6d6abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0j4X75MeSMk5s89z2ww2UAXHqSxKstvkmlQXBFtcyD0jB%2BStIVDhhX1q5sZZIfdrC1QqlbykL8K3LRuudQsbIVBehzKKgFaRk1XhtHA6gcbFv66T30KQnX9imJOKnN9V07AFncRZCU%2Fb2DU%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lERPYpozQk9DKv05T4cWTexngtAC7b0yWItBOUvFaMYVssroFWLy08dxx4bqw1JXaUtDTSEg9hm3GwlGX1BBgtspA%2BEP4ElVbF2Jd03FSWSXQA4bnZQ%2BDSYu5i%2BZnCN0ea%2B0Sdsu9Nb3nPw%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a35a8fa77104-SJC",
=======
    "69ead1ef8f6d6abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:16:01 GMT",
=======
    "Fri, 15 Oct 2021 17:38:16 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "694",
=======
    "675",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-96n4t",
    "X-Request-Id",
    "6a16a35bd9bc7104-SJC",
    "X-Runtime",
    "0.174576",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35bd9bc7104-SJC",
=======
    "classic-app-server-5d8f87bff-fjtht",
    "X-Request-Id",
    "69ead1f25bbd6abc-SJC",
    "X-Runtime",
    "0.200821",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1f25bbd6abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S%2FBFLtTSGdYVbxnsnXn0Tf25H2Rac3hR%2B6V4CrILkjCTK8krBAD7kAFVMhcOJazkiis0YG9HNdyC5h%2FHKIVbtBDdcsldXa5AWkM6ANTmFUhEXpz379ZKeF%2FPxj%2BC7%2FHlAmnkQqVj%2FCj0Y3o%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5reXM1al38DCOqx8DnhfSOcyAozWeGNGaoZEBAVZetIBvOW%2FAP1Lw9C%2BMiLu%2F7fZ2TNGlZWBKJ0poNQRmCLXK88fUAcbteV7m7kLos3%2B4io%2FtfrzLlJJhniiU0dNhgQajJo8TI2UAeH4mzA%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a35bd9bc7104-SJC",
=======
    "69ead1f25bbd6abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:16:01 GMT",
=======
    "Fri, 15 Oct 2021 17:38:16 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "693",
=======
    "674",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-jfrds",
    "X-Request-Id",
    "6a16a35d6c527104-SJC",
    "X-Runtime",
    "0.186631",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35d6c527104-SJC",
=======
    "classic-app-server-5d8f87bff-jqspj",
    "X-Request-Id",
    "69ead1f578716abc-SJC",
    "X-Runtime",
    "0.195506",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1f578716abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5N6xEfjQn%2FRr1Msv7VtNPdPBcWEPD5bGO6wzIjJTXsdkNnuj7Zh3ZsIwmyhdsM0S3%2BxNM4qBcfVjL4HT8%2FFcmRRxSQUYE6F%2BdcMth8hIKNW87tivaCXtTPb%2F3PEab5YZfNmVMvWD5z7lF44%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CHsea%2F4%2BpE461E%2FoVlNx4F49mIewMCyb1A3%2FELvNmn%2FGBJLcTzinhJ5BCSA51zYxxj%2FTqRDhmgykjT%2FwCzbFuzgz%2B%2BwUmMCw%2F%2FZv0185E67zYX1GhoSBXiZutMD7qsno%2BJ1NrWyp6a7Vkh4%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a35d6c527104-SJC",
=======
    "69ead1f578716abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
<<<<<<< HEAD
    "Thu, 21 Oct 2021 01:16:02 GMT",
=======
    "Fri, 15 Oct 2021 17:38:17 GMT",
>>>>>>> chore: improve error message collect.
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
<<<<<<< HEAD
    "v10025",
=======
    "v9958",
>>>>>>> chore: improve error message collect.
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
<<<<<<< HEAD
    "692",
=======
    "673",
>>>>>>> chore: improve error message collect.
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
<<<<<<< HEAD
    "classic-app-server-549d6d8566-fl9qk",
    "X-Request-Id",
    "6a16a35efeb17104-SJC",
    "X-Runtime",
    "0.170556",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35efeb17104-SJC",
=======
    "classic-app-server-5d8f87bff-csr5r",
    "X-Request-Id",
    "69ead1f87ce36abc-SJC",
    "X-Runtime",
    "0.189121",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "69ead1f87ce36abc-SJC",
>>>>>>> chore: improve error message collect.
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
<<<<<<< HEAD
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5a4n4cidPTuo4xdVtcsWofFmk32I2Jgew9SMwMLGnGJlqiUF1quGoHdz3qax6heE5UcPUXMCJZ0tk2RRhDFg9xJtu8MC%2BLv7lidwi9%2FHFRGXGe1chJ6iPVmkeTlN0uVe4rDVtGsl6FX1Zn4%3D"}],"group":"cf-nel","max_age":604800}',
=======
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c96YfOtD4OPrk7iB%2Beq8FidyNp8CkoaPAX0UM3gImQa3XyqYRX7YncCO7cgasmIF8cJnlSlqq1PHwpu7coNoGS4szukI80TlGNQEzJ0hrrvryX32B3fibFj6l7pi1ANOq56xfB1Tt%2BmBPB0%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
<<<<<<< HEAD
    "6a16a35efeb17104-SJC",
=======
    "69ead1f87ce36abc-GRU",
>>>>>>> chore: improve error message collect.
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
<<<<<<< HEAD
          id: 1902653141247,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-10-21T01:15:43Z",
          updated_at: "2021-10-21T01:15:44Z",
=======
          id: 421079868491,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079868491.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-10-15T17:37:41Z",
          updated_at: "2021-10-15T17:37:43Z",
>>>>>>> chore: improve error message collect.
          time_zone: "Arizona",
          iana_time_zone: "America/Phoenix",
          phone: null,
          shared_phone_number: null,
          photo: null,
          locale_id: 1,
          locale: "en-US",
          organization_id: null,
          role: "end-user",
          verified: true,
          external_id: "skywalker123",
          tags: ["existing", "here", "checkedbox", "test_recently_added"],
          alias: "MU",
          active: true,
          shared: false,
          shared_agent: false,
          last_login_at: null,
          two_factor_auth_enabled: false,
          signature: null,
          details: null,
          notes: null,
          role_type: null,
          custom_role_id: null,
          moderator: false,
          ticket_restriction: "requested",
          only_private_comments: false,
          restricted_agent: true,
          suspended: false,
          default_group_id: null,
          report_csv: false,
          user_fields: {
            checkbox_field: true,
            date_field: null,
            decimal_field: null,
            dropdown_field: null,
            multiline_field: null,
            numeric_field: 3039,
            regex_field: null,
            text_field: "change",
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:16:02 GMT",
=======
      "Fri, 15 Oct 2021 17:38:17 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "691",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"560a5e1be44b4a4c750ffe8d98fa3f8b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-khxq9",
      "X-Request-Id",
      "6a16a360d9767104-SJC",
      "X-Runtime",
      "0.198633",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a360d9767104-SJC",
=======
      "672",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5bece09d0186db9215d1bab9418a2af5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-h89s5",
      "X-Request-Id",
      "69ead1fb698b6abc-SJC",
      "X-Runtime",
      "0.200665",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1fb698b6abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MjbNF1CQM3fgljQeqVODaTOQtFjBJ%2B%2BBBPgiRYJKrHjITGORjoZQm4VQifM1%2BjrPDJbot%2BOoJWzzry1O4Vw%2Bg4AQ363dBvVYSJwVNWfiTAZJO0nmgGbfT8yBPW5yqCgmax6DFtgilh2xFqA%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EkJxEb6u6BlE1PNoWh4AMyHK1sWcItBmZqpMDR%2BZX0qUsIQRmghOophRCJzVW%2FZHaOv2765wiR3g5jZFnAaK2pXKp9qz23j7PCMpPRSezYIavFTDtBdbjCKJcy96%2Bpj64aYHIXuFG48c2Ko%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a360d9767104-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1902653141247.json", {})
=======
      "69ead1fb698b6abc-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421079868491.json", {})
>>>>>>> chore: improve error message collect.
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
<<<<<<< HEAD
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
=======
    "__cfruid=6513b7b18ad260d45e3a66ea09b8f01615d6b4b1-1634319370"
>>>>>>> chore: improve error message collect.
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
<<<<<<< HEAD
        id: 1902653141247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
        name: "Anakin",
        email: null,
        created_at: "2021-10-21T01:15:43Z",
        updated_at: "2021-10-21T01:16:02Z",
=======
        id: 421079868491,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421079868491.json",
        name: "Anakin",
        email: null,
        created_at: "2021-10-15T17:37:41Z",
        updated_at: "2021-10-15T17:38:18Z",
>>>>>>> chore: improve error message collect.
        time_zone: "Arizona",
        iana_time_zone: "America/Phoenix",
        phone: null,
        shared_phone_number: null,
        photo: null,
        locale_id: 1,
        locale: "en-US",
        organization_id: null,
        role: "end-user",
        verified: false,
        external_id: null,
        tags: ["existing", "here", "checkedbox", "test_recently_added"],
        alias: "MU",
        active: false,
        shared: false,
        shared_agent: false,
        last_login_at: null,
        two_factor_auth_enabled: false,
        signature: null,
        details: null,
        notes: null,
        role_type: null,
        custom_role_id: null,
        moderator: false,
        ticket_restriction: "requested",
        only_private_comments: false,
        restricted_agent: true,
        suspended: false,
        default_group_id: null,
        report_csv: false,
        user_fields: {
          checkbox_field: true,
          date_field: null,
          decimal_field: null,
          dropdown_field: null,
          multiline_field: null,
          numeric_field: 3039,
          regex_field: null,
          text_field: "change",
        },
      },
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 21 Oct 2021 01:16:02 GMT",
=======
      "Fri, 15 Oct 2021 17:38:18 GMT",
>>>>>>> chore: improve error message collect.
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
<<<<<<< HEAD
      "v10025",
=======
      "v9958",
>>>>>>> chore: improve error message collect.
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
<<<<<<< HEAD
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c0a240a5244f276b3068b8aada9434aa"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-549d6d8566-gpz8l",
      "X-Request-Id",
      "6a16a362abf57104-SJC",
      "X-Runtime",
      "0.516995",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16a362abf57104-SJC",
=======
      "671",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9ddfe4ca1eaa869639a5416a057566b8"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-5d8f87bff-4vbfm",
      "X-Request-Id",
      "69ead1fe7eb96abc-SJC",
      "X-Runtime",
      "0.483639",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "69ead1fe7eb96abc-SJC",
>>>>>>> chore: improve error message collect.
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
<<<<<<< HEAD
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lE5DE8Itabjsr8rvpqxSIfYadJzoUyo2YZnK8iGroLGzkoRCe8RzbdOZT%2FsZrH%2Bt3tuREOxjDCU%2BHlx4vv2Mdj5KF9Yma6bQIQKYCrz8Gokxe2ltRBhDSHn5YBZrUvJpqPZ636W3nPqhloA%3D"}],"group":"cf-nel","max_age":604800}',
=======
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S7KwlI%2Bwwx1T5PjLJ9H1xcv9XViBBGkPtben7lfc67crUl1Tg4bjexqfFwxZT1S2ASt6EiVk44MpAcuOR%2FB4G4VeIkHt%2FNTOAkVT5kRKfQTAfDByCwhJ3bpI9IZlib1iw3IMeIz1TaUJjmk%3D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: improve error message collect.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
<<<<<<< HEAD
      "6a16a362abf57104-SJC",
=======
      "69ead1fe7eb96abc-GRU",
>>>>>>> chore: improve error message collect.
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:16:03 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10025",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "689",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-9kz6z",
    "X-Request-Id",
    "6a16a36649017104-SJC",
    "X-Runtime",
    "0.172605",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a36649017104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rbeH0qkeB5ala0%2FL6nTVmv4QSEMP%2BJTIUjGv7U%2B%2FhM77jMKiOMLWrZk3p04%2BWxDFqrPytlPaMv0ovNt29wQPKE%2B6%2ByclDXdVM0ANWUJ%2F1i%2FES39%2Bosteo7DyZIOVARjKefu2YVed94rsUpo%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a36649017104-SJC",
  ]);
