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
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:36:54 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    "classic-app-server-54c566998d-hcjk6",
    "X-Request-Id",
    "6a0dd4c7bc0ff6a3-PDX",
    "X-Runtime",
    "0.175128",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4c7bc0ff6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1auIMmH1KXJeo6YfsgDYtvQoibXdKb8iSWlQVnD%2BzuuGwV4eaJKl0a7X8xanTjhHuh9pJqzEqBFn2B1y1E1RXUXOegOVxcAKOqX4o5yD4bzRxJWlOwakm0Ua89xIPxf8tESMGDpJyhh1MC4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4c7bc0ff6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:36:54 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-86jd4",
    "X-Request-Id",
    "6a0dd4cac8b8f6a3-PDX",
    "X-Runtime",
    "0.184036",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4cac8b8f6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6fgJhWxOD3HSV8AUR4WJ93Kc7ANQhjjezZXATbLeA3gOwpfUXcjZcspY7mq%2BHIqZ50R6004hnxM%2BmL9km5tYPPTRYKzycmQkwWdDBsY1zpWlRUUPkY%2BEItUiNDL0T9Vn24sY5UKjMYe8%2BlU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4cac8b8f6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:36:55 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    "classic-app-server-54c566998d-wk87r",
    "X-Request-Id",
    "6a0dd4ce3dcdf6a3-PDX",
    "X-Runtime",
    "0.176783",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4ce3dcdf6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7cdEuxATLWFrL%2FtbNctdQL89BfL5R5cCQBs2Sl6gC7daf3ZkH3K4drGFK7IXH2oRhS1NNuv5C5UYEmSQ%2BY9RfdHgPnbcLZSzWGc9oJuSNXh%2F0ANzJMkdV%2FptoYPf4nGF%2Btv95T6bSyirK0U%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4ce3dcdf6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:36:55 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "696",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-2bpq8",
    "X-Request-Id",
    "6a0dd4d13acaf6a3-PDX",
    "X-Runtime",
    "0.149152",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4d13acaf6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8skpB8p8dVcs1OnIUEPajnq8PDffHtBE2Y8Gprzp84%2F%2FWskJvjciaof5oFIwZr7Xzeg1khQ7aihEAy%2BojtowPQTF96cqeD0%2BmEb9rk1BFolFbzCl2CFIkjBDhAYS3W8LphhOexZfubcfOhc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4d13acaf6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902623324167,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902623324167.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-10-19T23:33:45Z",
          updated_at: "2021-10-19T23:33:47Z",
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
          tags: [
            "test_high_value",
            "test_spanish_speaking",
            "checkedbox",
            "test_recently_added",
          ],
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
      "Tue, 19 Oct 2021 23:36:56 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "695",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"cab9655d3ef153618d8d04a5e5123d63"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-677lx",
      "X-Request-Id",
      "6a0dd4d3ff13f6a3-GRU",
      "X-Runtime",
      "0.210858",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd4d3ff13f6a3-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qxtGFHLCak0lx8pE1ajL4c4Jbp1fbFLkMxvJED1C%2BOckh0v8p51THxBfastUkWpPN0q2kF5RbeQRcO2qEevSQZAD6U6FtpuEBd815%2FP7tHtMCkHj0XkWrAkpYdfLttMTgkh87XKz17qgAfw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd4d3ff13f6a3-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1902623324167.json", {})
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902623324167,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902623324167.json",
        name: "Anakin",
        email: null,
        created_at: "2021-10-19T23:33:45Z",
        updated_at: "2021-10-19T23:36:57Z",
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
        tags: [
          "test_high_value",
          "test_spanish_speaking",
          "checkedbox",
          "test_recently_added",
        ],
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
      "Tue, 19 Oct 2021 23:36:57 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "694",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"e94dffcae5c731965dd01e5d4e1aca51"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-78h2d",
      "X-Request-Id",
      "6a0dd4db7c91f6a3-PDX",
      "X-Runtime",
      "0.555721",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd4db7c91f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FK2XlNNGm0bBdac1LIIwI%2B7HVIMhxkt%2BQq51tkC5jkcX0nz4IHyJQ4L3v%2FhmxqhvO3d7ALHIH%2FSSI2x696dhvaSrlkX7SrxHBZuCrB%2Fx6pmhmbQTHsT9eqB32Fqci45m9Vxsjq3zOQqZj1U%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd4db7c91f6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:36:58 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "693",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-v88d6",
    "X-Request-Id",
    "6a0dd4e0ddbbf6a3-PDX",
    "X-Runtime",
    "0.181958",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4e0ddbbf6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=l036n6o3r73auNaBec4PjbkH5sZZiJHmeHox31ePRoy%2BSrSD00psZLcJFv7EoXqkpZRnMGycCjjn8wsr%2BosS%2BQhd10qvXeSw9Z0AlQfvpcK6YgwKexoOyb5tRoqxJL%2FRop2o4WkhROMo40A%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4e0ddbbf6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:36:58 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "692",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-8dz2q",
    "X-Request-Id",
    "6a0dd4e3eab9f6a3-PDX",
    "X-Runtime",
    "0.148467",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4e3eab9f6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=m2ZJRR5XE4YrLi1AjSKji8SVYiiMorJTFLg1smHQIPVFmMjiQzQa%2FaCavkHP9acqkywUG8BE8FbG2%2BkeZb8ozyhMl5QLCANBccBg0nS2fc5CRvycUaNMskiraxQ62yI5CeNCdheRu%2Br23Gw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4e3eab9f6a3-GRU",
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
    "Tue, 19 Oct 2021 23:36:59 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    "classic-app-server-54c566998d-2bpq8",
    "X-Request-Id",
    "6a0dd4e89b216b1e-PDX",
    "X-Runtime",
    "0.147597",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4e89b216b1e-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3NwGuANoZn6aW4hgDNvB4SDbmi3sseNp4B1O%2F%2Frh%2FayRA9Dp9HjJY52acyjPe3tcSUWnMyMk1FlL9GTvjl6QAJSiUpZres1rFiLLNXhTwZG00bGxj2R3y517%2FQEUorsj2ZtUQJ3WJSK6JpU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=1a1f213df7ab68479469242143656ed4770c882f-1634686619; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4e89b216b1e-GRU",
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
    "__cfruid=1a1f213df7ab68479469242143656ed4770c882f-1634686619"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:36:59 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "690",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-nclkg",
    "X-Request-Id",
    "6a0dd4eb88ab6b1e-PDX",
    "X-Runtime",
    "0.159217",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4eb88ab6b1e-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=POMxds2%2FACAAzBdP1dJf2Qw1b3qIypWD9jr9n1SkT7p%2B2z2UJRpn5EG2axsoDz9ZtuyCXSSBoaQjskV2uOAbNoVwuf4DKpkR2TnM%2BvdyIqCklZKiFzwKJgB5OErnoa8QAvsWpbY0gjXRiSQ%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4eb88ab6b1e-GRU",
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
    "__cfruid=1a1f213df7ab68479469242143656ed4770c882f-1634686619"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:37:00Z",
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
      "Tue, 19 Oct 2021 23:37:00 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1004",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "699",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"37a74eb73befd2391aef13f6ff58f906"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-66thv",
      "X-Request-Id",
      "6a0dd4ee6de46b1e-PDX",
      "X-Runtime",
      "0.377596",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd4ee6de46b1e-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TnvvqZzcWCMikyy7VuAZMaN37JYKfxusD%2ByQHUrIZz3GmF%2BR4tZvI3Mxg8HZnEdETconLP7c763Y05tu300RTCkYiwqyMn5NjHglGcJKGZ8NKuX0KycIJxVyH2bfha58A79jtuDKv2Vu1P0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd4ee6de46b1e-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:00Z",
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
      "Tue, 19 Oct 2021 23:37:01 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"0549676e20c76b41979a329353becb71"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-4btv6",
      "X-Request-Id",
      "6a0dd4f289d2f6a3-PDX",
      "X-Runtime",
      "0.231086",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd4f289d2f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j8INPxUsFI7tVji14qoVAp2Nt6AOvs5OiWCNKT97TgkIHc4xI66FIllqcxPMOU33GVPVGLTjMIQbyct1qwktrtZrrjpGUDY4Wa1T0Vij%2FXfQHjcyhwwExfOvJ%2BKtuGiYHlLI9kxBKwjTTNc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd4f289d2f6a3-GRU",
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
    "Tue, 19 Oct 2021 23:37:01 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    "classic-app-server-54c566998d-q6v2v",
    "X-Request-Id",
    "6a0dd4f7bcf451d8-PDX",
    "X-Runtime",
    "0.168603",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4f7bcf451d8-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u%2FUUAEelWzJrn99Ga%2FnNdFmrIkVMQU9AjpU9PqzJdDMJP1EWRer5CzEhUDuwOlCimpwGZxof57v7LiUw8GJYZaoaWdQOYNNKT5UplFqUKEgqKmugszNLYY1jBZED6AX80njfBq%2BWpgzcPPg%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=ce2b8c1ec3d1663731b7bf468cebaffa2db26960-1634686621; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4f7bcf451d8-GRU",
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
    "__cfruid=ce2b8c1ec3d1663731b7bf468cebaffa2db26960-1634686621"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:37:02 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "696",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-xdjb9",
    "X-Request-Id",
    "6a0dd4faca4a51d8-PDX",
    "X-Runtime",
    "0.166174",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd4faca4a51d8-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aeNKgY2VZaeu805k8%2FIEdu5DxyBNQsSHFAE5ChnFMAFreH1U78tC8SlfuwWY%2B4pxcG9w4rERiO1RpBJ1%2FPbKwm9ImFAPIDJXpBo%2BfEYXTwSImb%2BQXK5987L0B68nAosIegmAwHTg%2FE3FafY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd4faca4a51d8-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:00Z",
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
      "Tue, 19 Oct 2021 23:37:03 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "695",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0549676e20c76b41979a329353becb71"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-2zpsk",
      "X-Request-Id",
      "6a0dd4ffaa28f1d2-PDX",
      "X-Runtime",
      "0.206608",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd4ffaa28f1d2-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Bs76Rd0OlMV2LAYtaNeMokCZx022nfvGsg0qCyOedDaX6sY3SDpQweVaEgaTUrg%2F1Pr8kzObVWD5WN0qiDHcRynrWKeXjv%2F4aTfORNNs%2BkdsRz4acOEV7HuSQtxTD4%2FpIqotD6r%2FcJWXcuk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=ab632dc70e1a61997e6ebf5e1caaced5ec6c48f6-1634686623; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd4ffaa28f1d2-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=ab632dc70e1a61997e6ebf5e1caaced5ec6c48f6-1634686623"
  )
  .matchHeader("content-length", 209)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:37:03Z",
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
      "Tue, 19 Oct 2021 23:37:03 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "694",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f655bbae4e91203b5b480c9ed493f752"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-z6pjs",
      "X-Request-Id",
      "6a0dd502d826f1d2-PDX",
      "X-Runtime",
      "0.431895",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd502d826f1d2-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lXmMrradqjh8tWIDGBmLHqXik6v6XOwHjZeRoAK4ofXK5NhDkMJwFRAuMPILwJNkZqkiUWzBK10Sa7gu%2BIezCJxHcuGy44KG%2BxrM8vyHUHF5NkaYbjbnTw7nwzvCdc%2BOmor%2B59BtTM5XFw8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd502d826f1d2-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:03Z",
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
      "Tue, 19 Oct 2021 23:37:04 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "693",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ca9dbcb184b75c720dd23ccbd19d3a9b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-bxlql",
      "X-Request-Id",
      "6a0dd5077bc4f6a3-PDX",
      "X-Runtime",
      "0.213742",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd5077bc4f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dOIhQRHB1fY7NvD90cisQvTDqzp%2BIJ9itrGBK3SKgb7DOFDAWTmq2OOPJkZKGeTpxZB557fgNzfd4e5Zm55N6nvKauzCm6YiI%2Fqj0EFflphXUlcQll2hO951IUgpMZMXRqMLe8YtvA1m2cg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd5077bc4f6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:03Z",
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
      "Tue, 19 Oct 2021 23:37:05 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "692",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ca9dbcb184b75c720dd23ccbd19d3a9b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-p7894",
      "X-Request-Id",
      "6a0dd50c6c32f750-PDX",
      "X-Runtime",
      "0.212158",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd50c6c32f750-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qgem2SUjUXejd2UwzuwPwdgGNmMqmverItONeShXv3MlPgptAXRK6QWGbVJXTI6sOgmC1UaAj5oL11zM67tsfHhYETIAPpHHI1tTuPE47pmLos%2F%2B9V%2BRxForG0DlgQKu6xWZfomuFXKiU3M%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=4b7bbdf9d40347132bb47a2a02cf487525d0c3a8-1634686625; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd50c6c32f750-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:03Z",
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
      "Tue, 19 Oct 2021 23:37:05 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"ca9dbcb184b75c720dd23ccbd19d3a9b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-kjpw4",
      "X-Request-Id",
      "6a0dd50fa897f6a3-PDX",
      "X-Runtime",
      "0.207381",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd50fa897f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KvPPMIKfrHPN2nSr54f33vtyVwZnnsUBZ2nwGZ19ho3P1PYPndpecUAZEGlVsxDM1jTWCLA1BgFuS1KEBlvpjTiEoJr4Lbrde8QkPmpPIClYu7EmYpuWl%2FVuAeIRF4E06XZzgzBff%2B8AHGc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd50fa897f6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:03Z",
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
      "Tue, 19 Oct 2021 23:37:06 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ca9dbcb184b75c720dd23ccbd19d3a9b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-fcfpp",
      "X-Request-Id",
      "6a0dd51489f1cfdc-PDX",
      "X-Runtime",
      "0.194267",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd51489f1cfdc-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qSclAzw8x4pN1hDZ2yeoZVT7DSroiQB01LdgT9nfQGiYhVpgWX5En73Uw%2FzowfkK20Awvgoto608dWvZHmR4inBScoi9n9jtOFmmUj33n%2F%2BLSpoA%2F6TLtrQ4XAIt2zY9CBnHm2fYhIAHHzA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=2acce850a227da148f55c0bf69a3d7bc94b6ec1c-1634686626; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd51489f1cfdc-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=2acce850a227da148f55c0bf69a3d7bc94b6ec1c-1634686626"
  )
  .matchHeader("content-length", 231)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:37:06Z",
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
      "Tue, 19 Oct 2021 23:37:07 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"b9ecc77aafc17aa8ad4b1026cdb866e9"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-d9f7r",
      "X-Request-Id",
      "6a0dd517aed1cfdc-PDX",
      "X-Runtime",
      "0.463166",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd517aed1cfdc-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VkRubsjIE0Z3oA2ZOlPvuaPIiksEXGotBO1UOFopqsIe8ayisXJRE%2B%2BS12zS%2BLAh3lVsACzdnughzbAxgHiNFqmakg7xn9yZQDw7owJ1XPRbedZyh7hJHwTW2V5MSLFFZ%2Fo%2BbUAm3%2FtAFDY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd517aed1cfdc-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:07Z",
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
      "Tue, 19 Oct 2021 23:37:07 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"a688b5730ffef70c37a8fb0ba8bf25e2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-6mlfq",
      "X-Request-Id",
      "6a0dd51ccbfcf6a3-PDX",
      "X-Runtime",
      "0.214461",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd51ccbfcf6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LvtAdRvCProC1mOpCY%2FQVx6EpNMJrpdyaNa6FRyy%2FjjtBbtL9yCR2OaZJlCicpNBRoiIT9en8Kczydp9lOdKsuuGjmQKqovc0qGRIJoWEcQbTxKhMZ9hRYbPPi9%2Fclu5LWO9lfBfwP8wbII%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd51ccbfcf6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:07Z",
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
      "Tue, 19 Oct 2021 23:37:08 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"a688b5730ffef70c37a8fb0ba8bf25e2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-vjpz7",
      "X-Request-Id",
      "6a0dd5219d134d2f-PDX",
      "X-Runtime",
      "0.220831",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd5219d134d2f-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MeVnPL2z36Lb310%2Fhc3SADWHTb%2F86yyB9Bg0RdXPbp8Igw0NA%2FiKnr4Q63FlGJJudlB43zJwplH9NKwwF5%2FUZAoQVpIegAVX%2BCTtIH4uwSwATv5qPrhVCg3rXLYVVCjPY46RZfO6yaK%2BGBo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=9c575f9fbfc3a32533867e433b09883977a3c015-1634686628; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd5219d134d2f-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=9c575f9fbfc3a32533867e433b09883977a3c015-1634686628"
  )
  .matchHeader("content-length", 201)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:37:08Z",
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
      "Tue, 19 Oct 2021 23:37:09 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "686",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"b4dae359bb398698fde807ee4a3e5775"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-gt5w8",
      "X-Request-Id",
      "6a0dd524cbaa4d2f-PDX",
      "X-Runtime",
      "0.387707",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd524cbaa4d2f-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JpNcGgzYBmA6oWf2B%2FuH%2FqmLiNbJ9s3d3%2FOVuTvOJnLnjHgeQ1QKPjkguSVyG70IpERIS1FAAMqjT%2FAe91RqGo7SvPRP%2BEBmEEpelV8N6VmcW77E4LVLV%2FBnNtidVKASyi0xZkQkSXRo9T4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd524cbaa4d2f-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:09Z",
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
      "Tue, 19 Oct 2021 23:37:09 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"eacfe58a4968cd314ae214ad8000d5e6"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-86b7w",
      "X-Request-Id",
      "6a0dd529181df6a3-PDX",
      "X-Runtime",
      "0.202413",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd529181df6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FY9a4Mg3Sj5HDk5oAONNELGdvOuYT2Qxy%2BjXtiHQM0hunDhXlmvM41Gm7zd%2FiT8FaeqEmGmECD5Njn5c0LiKW2qPDESLJKW9lcAPDp2KGEKCFO1ZkeZTD9vlPMCpumSIIPXJdIUTw4kE6Jg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd529181df6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:09Z",
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
      "Tue, 19 Oct 2021 23:37:10 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"eacfe58a4968cd314ae214ad8000d5e6"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-2bhsw",
      "X-Request-Id",
      "6a0dd52ddca6f774-PDX",
      "X-Runtime",
      "0.216838",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd52ddca6f774-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PFUem9yevsfTqTMYY9Q%2FPbcN23lxp8LyQjxogrYeATGrWupu78zQkc8koIcK7mX9WMWTpmmo6nL2TrKcLj6v0WDgfn4XV%2F0MuiYmkD7N608097wvpmHe4RUcvHzpdURPFkKg90uQlfwegyk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=e09469236e5385d64107544cf05283140a910702-1634686630; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd52ddca6f774-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=e09469236e5385d64107544cf05283140a910702-1634686630"
  )
  .matchHeader("content-length", 135)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:37:10Z",
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
      "Tue, 19 Oct 2021 23:37:11 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "683",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d5fa52664b425d7fe3670011ff847851"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-l8wlr",
      "X-Request-Id",
      "6a0dd5314a0bf774-PDX",
      "X-Runtime",
      "0.386762",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd5314a0bf774-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wxYXT0G5BEL5o5YH5NZ5d6T6mVZw%2BFrNl5mHi2Zz3MzOFJHek5o%2B6IwDdP1q63kKzajf88%2Fszrf1WB0LN9MfS%2BwE5dnG10VCUGT8QASmYif7c7q8RstSUucd3%2BM9R9TG5B2mRutE3wvoyXI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd5314a0bf774-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:10Z",
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
      "Tue, 19 Oct 2021 23:38:11 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"bbefb1f6fd6c781ec7bd21514ef0f08f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-n88jn",
      "X-Request-Id",
      "6a0dd6aceb3af6a3-PDX",
      "X-Runtime",
      "0.213818",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6aceb3af6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RRXQcG6k89BOOe4buJRqLRL%2FIGxKh%2B7l4zGF%2FpPlXOjBNU25eakGM0UCd9KFSP1o2%2B0rU5kOp5V6WemmfSH9ASGuwrw7jz1kVR%2BzXFcOelxewZzYDAxjNcED44IMnPonyS47BTreAEMQNTg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6aceb3af6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:10Z",
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
      "Tue, 19 Oct 2021 23:38:12 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"bbefb1f6fd6c781ec7bd21514ef0f08f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-jm7gd",
      "X-Request-Id",
      "6a0dd6b1ea59f6db-PDX",
      "X-Runtime",
      "0.210955",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6b1ea59f6db-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BnNIMp%2B2NC7jo3P96six%2BNwkAJfPulmjKdE%2FHkLUFsVy6hIoe%2FmHi3iIzTCsPKQWzO9A6i2QKkuN5AMTqZ6rnt3zGNZSOrtYiKVuTd9AbyEQf3D3cACWac%2BrCtFJOK0CmAeVKSyWuZpQxPE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=f98cfec712cda27b375dfc342e2af6b1d2ae3e9b-1634686692; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6b1ea59f6db-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=f98cfec712cda27b375dfc342e2af6b1d2ae3e9b-1634686692"
  )
  .matchHeader("content-length", 111)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:38:13Z",
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
      "Tue, 19 Oct 2021 23:38:13 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "697",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"69dd257119a10ef6ef1f93c4c8726ff4"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-7j9wk",
      "X-Request-Id",
      "6a0dd6b57f96f6db-PDX",
      "X-Runtime",
      "0.332389",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6b57f96f6db-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tNrBo4ckcytI34XJtLY1so%2BHGc8PsWB%2Bs%2FBn87CNauH0bw9pYqDf7he0UP2YHmS0aLJPkDnrj9YtIAkyxN%2FJTnBNmdCDjSIwLXL%2FACQ3VraERv%2BCd3J7WEyirjwCEjreRPnSUO9YZO%2FtP2k%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6b57f96f6db-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:13Z",
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
      "Tue, 19 Oct 2021 23:38:13 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "696",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0929c17272cd69b86c3ee06ff12e3aea"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-k7thf",
      "X-Request-Id",
      "6a0dd6b99fd4f6a3-PDX",
      "X-Runtime",
      "0.202343",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6b99fd4f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sJDDd4IHwBTIraBdOC%2FbiONHV0G1oMOr%2BPEkXUef7v%2FYH2Eujox9g6zpo%2Bhb5oAxH0AOO%2BJw9G5C75xXS0Lx2c7%2FTTeBoDqJWLJT%2BJb20C%2FFnNDsFT23icILpACR0iQwNO2LPSm4K0qBe0o%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6b99fd4f6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:13Z",
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
      "Tue, 19 Oct 2021 23:38:14 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "695",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0929c17272cd69b86c3ee06ff12e3aea"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-nj2b9",
      "X-Request-Id",
      "6a0dd6bcdca3f6a3-PDX",
      "X-Runtime",
      "0.183556",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6bcdca3f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kl9YnoKaervJCz0N%2BJeoyyBPXkVFDQEaxRHU7WkWYEeqejiok2Aic8j2h41RzAvBzJJm804TwUv1keCjcpxeKweiuuBvYZxE%2FRLWeR1Op7SEdlm5m5a4fxzaWQyVWQd7NOw3RBdgevw7KLg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6bcdca3f6a3-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .matchHeader("content-length", 48)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:38:14Z",
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
      "Tue, 19 Oct 2021 23:38:14 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "694",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"1cd9aaf7d4c11d4779f074bcc29a7b9c"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-hjw6h",
      "X-Request-Id",
      "6a0dd6bff9b5f6a3-PDX",
      "X-Runtime",
      "0.297893",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6bff9b5f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZlK4xlUXT4N%2B%2B6o9yCGVa2IySAz03vBbH%2F3RNrAARKtzhHFZeT%2FRMOKmwYoxBPF73RZ81zA0nj%2BKLgH%2BTYjtqeGQj6dxy2B9zyXF0L64kDeKXAwtgcu5iJjbKkeg9wZXhVyYae6kaQY3cg0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6bff9b5f6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:14Z",
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
      "Tue, 19 Oct 2021 23:38:15 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "693",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"23148e46de5f1e3ce9dee073eff43f95"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-8rcpl",
      "X-Request-Id",
      "6a0dd6c58f116b15-PDX",
      "X-Runtime",
      "0.206609",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6c58f116b15-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0zAkVVderduwae%2FxEhkKQ4NMAEo19Rt0jaU2q09ZBOdchYr7G4MjAAgxKnkxB0WbZyfBA9BuDW6xE86jlr6%2Bm5%2F6G9HscZuqBs8EIo0pHpoGSEYgPcvdJpFgyTesh9xW1tfBd%2Fda0MGYxu4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=c23616f8a569eb6bb2a729cddce022e205905957-1634686695; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6c58f116b15-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=c23616f8a569eb6bb2a729cddce022e205905957-1634686695"
  )
  .matchHeader("content-length", 144)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:38:16Z",
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
      "Tue, 19 Oct 2021 23:38:16 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "692",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5b5e1b040bd9ad9dcc197ff26b905303"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-6bsgx",
      "X-Request-Id",
      "6a0dd6c8de276b15-PDX",
      "X-Runtime",
      "0.379677",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6c8de276b15-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=C%2ForDSawnpYXPCuQ6xrqEDGICxx5EUMZnWv9pQTxaaNd2%2BOZgZ0JnWDUqzlx97DabeDPZRnb6vxf3ZxvHyeGP%2BeCXpCJ%2BA9Fh0sVc98MZvsK0vgr0lz7Jr4NllOFTCS091Bw2MEw1njcgCE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6c8de276b15-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:16Z",
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
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
      "Tue, 19 Oct 2021 23:38:16 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"e984d77a7038ac5338032b34c36a3346"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-plnnf",
      "X-Request-Id",
      "6a0dd6cd2f82f6a3-PDX",
      "X-Runtime",
      "0.190999",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6cd2f82f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uhdatCcFwDJJ6R9uf1hz91lulCEAItrD1l2T15q7%2BkR8BR024hxJaDSZpJq2eg9F%2Fv8I6mnm9d9c90%2BElPGQJxsvQIvrNrzgPpvCgGGd%2FgEPlCUYb%2FqnKwPAkZGpOAUuC%2BdqE2PJF5a2gJA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6cd2f82f6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:16Z",
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
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
      "Tue, 19 Oct 2021 23:38:17 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"e984d77a7038ac5338032b34c36a3346"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-qv2w4",
      "X-Request-Id",
      "6a0dd6d239455205-PDX",
      "X-Runtime",
      "0.231474",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6d239455205-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1p5Tqq3avuul3VZDAlJX6VjLyydrWTr%2BmfE%2BP%2Ftc1PtSxZWVpBkCsNNMcb0yz2aLmeQvI5TKOhtuk5kTHdXPORvgVcCXgU1YoqTk%2BHtsYWdaXBN8IcvQ9PjsmXm0duY30g6Tsv1LUvxf6zI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=03db4caaecd7b4308564979d5d5f4bdad627b062-1634686697; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6d239455205-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=03db4caaecd7b4308564979d5d5f4bdad627b062-1634686697"
  )
  .matchHeader("content-length", 104)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:38:18Z",
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
      "Tue, 19 Oct 2021 23:38:18 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"8cdf7ae394a05c656f92eadaa952d13b"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-2nrbx",
      "X-Request-Id",
      "6a0dd6d59f2a5205-PDX",
      "X-Runtime",
      "0.330399",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6d59f2a5205-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K9taUMQjRwEuPJS2eNhG3%2FCJQck7Lk8LZpfzbWqrsuMa2A6qR0oz6SfQvhzFCokC20XRRU9LLFsfGyrGXsvHkrTm%2FT8tljPcgC3RYMCvvlyAnh5fGsOE5yaKM2dgsyQiIzMPNLgwdRhu9ao%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6d59f2a5205-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:18Z",
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
      "Tue, 19 Oct 2021 23:38:18 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"a640cd8567029746ce568ffbb2ff279f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-jf5z7",
      "X-Request-Id",
      "6a0dd6d9a9def6a3-PDX",
      "X-Runtime",
      "0.188615",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6d9a9def6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HwTuctOeeSjmfmwMwUD3cpHRy3OJozWxGo2PuhP1euneeFzWhDY0NgZdS4806j2YEtnDdpDNk3qYgSy3AFDgIbyZipvVS96iHDIBr%2BWgYywX9wmwasZSD%2Fcjmm%2FS91hVH7vlaNR%2Bo%2FR6fdQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6d9a9def6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:18Z",
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
      "Tue, 19 Oct 2021 23:38:19 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"a640cd8567029746ce568ffbb2ff279f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-5vvm9",
      "X-Request-Id",
      "6a0dd6de799b6afa-PDX",
      "X-Runtime",
      "0.198904",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6de799b6afa-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pbqHFYdjDwig4wPpXQJnXzZKPvQ3YEXIm5%2FYy2cWUCAo6aVSu%2FP%2Bfb0D07m%2BnzLpfJAr9ly4HWgkiTKIp42YGmrnPBm5H9mTEU12stWw25B4EfhWhEsWwjkZah%2FdXLJ%2BwY0pXQXDPxsIgVE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=346b0f6c55fd49821a64fd99c9fab55718786aaf-1634686699; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6de799b6afa-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020781452.json", {
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
    "__cfruid=346b0f6c55fd49821a64fd99c9fab55718786aaf-1634686699"
  )
  .matchHeader("content-length", 116)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:38:20Z",
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
      "Tue, 19 Oct 2021 23:38:21 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "686",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"387a63d7e24e0de83db00de85b1f96d3"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-2c5vx",
      "X-Request-Id",
      "6a0dd6e1afcd6afa-GRU",
      "X-Runtime",
      "0.458205",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6e1afcd6afa-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AioMAEMTfF7Oprnuteu0K%2BS2T%2FrFKo5KDOZ%2FYfZqaCKbjKmLu%2BWFzLYpn1dnLu1ZDGXOCUyZ3itlx3kDYnOnTPbQcDmESCcYsch49vKF9TrV4WME%2F16cNQ%2BayBA%2FSsuRh38214IkrsqcmcM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6e1afcd6afa-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421020781452/identities.json")
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452/identities/390625895392.json",
          id: 390625895392,
          user_id: 421020781452,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:37:00Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452/identities/390628145591.json",
          id: 390628145591,
          user_id: 421020781452,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-19T23:38:20Z",
          updated_at: "2021-10-19T23:38:20Z",
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
      "Tue, 19 Oct 2021 23:38:21 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"beecaa5a27a184822083c712715a7add"',
      "Last-Modified",
      "Tue, 19 Oct 2021 23:38:20 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-7l2zf",
      "X-Request-Id",
      "6a0dd6ec9c6e6aaa-PDX",
      "X-Runtime",
      "0.158381",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6ec9c6e6aaa-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9%2B57QFHXhCXw3PsHxjMf9f%2BIsJ0ZNgtZ0Moy2brPMRjrCHJGJQvLWMEvVvReE%2FtyzXMqeXmkBxLuUn2vBCFPs7yEj6g3hd6AscfmHRysSGZZ8psO3V48rvaYtTSrLA5LUK9tiX8Pqd6wacM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=d6851dd669596a8e1799b20184155751d4d5cb1f-1634686701; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6ec9c6e6aaa-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/421020781452/identities/390628145591/make_primary.json",
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
    "__cfruid=d6851dd669596a8e1799b20184155751d4d5cb1f-1634686701"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452/identities/390628145591.json",
          id: 390628145591,
          user_id: 421020781452,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-19T23:38:20Z",
          updated_at: "2021-10-19T23:38:22Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452/identities/390625895392.json",
          id: 390625895392,
          user_id: 421020781452,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:22Z",
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
      "Tue, 19 Oct 2021 23:38:22 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d14a7204cbc98bf52161546ed78a3d5f"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-hcjk6",
      "X-Request-Id",
      "6a0dd6ef8b766aaa-PDX",
      "X-Runtime",
      "0.431408",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6ef8b766aaa-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RSy1ruUypQEcdmezE8IUp8C5OyGzVygE3VXuLKl5wh2MD3fVlNUlQZMgpBdCMQ8me27Dlp4MfpbPUTwqqU%2BEcpaDDBtqPU2LrkoZ62bImnPRd3Nl4XtfFai3i%2F3CWF4hj87Qm8SzYRRBtZk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6ef8b766aaa-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:22Z",
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
      "Tue, 19 Oct 2021 23:38:23 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "683",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"def0ffa610a5173f85638c47ffc31f6f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-6ntdb",
      "X-Request-Id",
      "6a0dd6f4099ff6a3-PDX",
      "X-Runtime",
      "0.202060",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6f4099ff6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UiS1pB7xqwDD1uCJ3VbU5DHEhHeQ%2F15x8WtrSM9%2BXl97tr3zvm09ZPjkL78jAte4CL9L2O8hszbVlTmcGqC6egySQ7gD13waDcpseZjCebIM6ipVk8%2Fd90Zv4n%2BqSSwE1j%2FyLb8k5Yczaiw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6f4099ff6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .matchHeader("content-length", 217)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421194014311,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421194014311.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-19T23:38:23Z",
        updated_at: "2021-10-19T23:38:23Z",
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
        tags: ["test_high_value", "test_spanish_speaking", "checkedbox"],
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
      "Tue, 19 Oct 2021 23:38:23 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1050",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421194014311.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "682",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5f59c8255d4750617d526db9b6e6958b"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-wsh4x",
      "X-Request-Id",
      "6a0dd6f77f07f6a3-GRU",
      "X-Runtime",
      "0.413002",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd6f77f07f6a3-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IZFTRxIILPfUUGFQG6NwIMmTGRdWzppMmolJeOqN9%2F%2Bnv1giHTAc9MmP364yDFHRUUVicHqeZHe1azU3Exp9hU9sP437t7%2B45fcN71HRrs0Vi5ops2fMUvkfxpJBMwXmFmErDdWHzSTXLqc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd6f77f07f6a3-GRU",
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
    "Tue, 19 Oct 2021 23:38:24 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    "classic-app-server-54c566998d-cmsvw",
    "X-Request-Id",
    "6a0dd6fdafd2f6f8-PDX",
    "X-Runtime",
    "0.169382",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd6fdafd2f6f8-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XGmi0m42fRh9XtdB1HJQxYBHyA4gQ%2ByvylN4DXGEwCyBx6CwxImpNyEsfgahZJzSnu4J1FZgGPYxWaVonJCWaGqsqJNchoyaqOqoBT86Wj1zFU0PtH%2B1ocMGjHyxTng5DUpyXiElTQ1vpkk%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=7681395df7840610592ffe45cff80e0638473814-1634686704; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd6fdafd2f6f8-GRU",
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
    "__cfruid=7681395df7840610592ffe45cff80e0638473814-1634686704"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421194014311,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421194014311.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-10-19T23:38:23Z",
          updated_at: "2021-10-19T23:38:23Z",
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
          tags: ["test_high_value", "test_spanish_speaking", "checkedbox"],
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
      "Tue, 19 Oct 2021 23:38:25 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"6af310919189843816d71b540583600a"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-wsh4x",
      "X-Request-Id",
      "6a0dd700acf2f6f8-PDX",
      "X-Runtime",
      "0.209071",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd700acf2f6f8-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LmP9eWiaYy5xwxNBVv%2Brhq%2BXLGirjV3PMqulQ%2FRsTcJzzeONJdBkvzzle9uzX82hyrCQss6hwoUitaQEJ2k3XX3iv0hcOW8Rz5hqsBGTlF30wGinzlt8e1nIUUITus9%2BZk1UIoBW%2FuVBP%2Fg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd700acf2f6f8-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421194014311.json", {
    user: {
      verified: true,
      email: "skywalker@demo.com",
      name: "Anakin",
      external_id: "skywalker123",
      user_fields: { text_field: "change" },
      tags: [
        "checkedbox",
        "test_high_value",
        "test_recently_added",
        "test_spanish_speaking",
      ],
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
    "__cfruid=7681395df7840610592ffe45cff80e0638473814-1634686704"
  )
  .matchHeader("content-length", 224)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421194014311,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421194014311.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-19T23:38:23Z",
        updated_at: "2021-10-19T23:38:26Z",
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
        tags: [
          "test_high_value",
          "test_spanish_speaking",
          "checkedbox",
          "test_recently_added",
        ],
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
      "Tue, 19 Oct 2021 23:38:26 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3fb7cdd1c00237e58127f27de80812f8"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-hh9x9",
      "X-Request-Id",
      "6a0dd703da49f6f8-GRU",
      "X-Runtime",
      "0.322650",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd703da49f6f8-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jIS8TOmjoAKWzhix6zAAceo4MCqGoq%2BUIgFoi18mtQR0%2BH66nPNz1inihVi9l6sVao2p3VIyEIP52EV%2BRXReSCE4W4GLW6klZYtXg%2B1qEkikGZKJozgvKxRSSmc1fL%2FElFR0eK7l8lUZN%2FE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd703da49f6f8-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421194014311.json")
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .once()
  .reply(
    200,
    {
      user: {
        id: 421194014311,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421194014311.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-19T23:38:23Z",
        updated_at: "2021-10-19T23:38:26Z",
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
        tags: [
          "test_high_value",
          "test_spanish_speaking",
          "checkedbox",
          "test_recently_added",
        ],
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
      "Tue, 19 Oct 2021 23:38:26 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=5, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "678",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3fb7cdd1c00237e58127f27de80812f8"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-k7thf",
      "X-Request-Id",
      "6a0dd70bfe7ef6a3-PDX",
      "X-Runtime",
      "0.209140",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd70bfe7ef6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ybmG03I4GXg5N9CBkE3qMjAcAtCL290iOnJ28LX%2B40rZ49yNrPLxIMLtLi9j6isKnB9tD%2F643mPWor6PuMBhPkgqG22TrqwIDsW%2Fn35E2X9lH5Gh56YMAm6iet7%2BZluJyLskovOovIGWrxc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd70bfe7ef6a3-GRU",
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
    "Tue, 19 Oct 2021 23:38:27 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "677",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-9t5c2",
    "X-Request-Id",
    "6a0dd710aa236ad8-PDX",
    "X-Runtime",
    "0.143802",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd710aa236ad8-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NYRqPbeaU2H9KAruCKdlzYJEpszIDh93rVa6aA9mjj8f1nJjuZNRKuRmaJRqKu0QP2h15MDiJSSTqlpyfkvDnW60UiRNdZzkXxzn6i415No09VxIUpSmLUTiWFAha9Nf9tzcvj1ysJ78Xog%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=92afa3e1a53024fd0d5c4aaa701ca19fd9cdfdd3-1634686707; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd710aa236ad8-GRU",
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
    "__cfruid=92afa3e1a53024fd0d5c4aaa701ca19fd9cdfdd3-1634686707"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:28 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "676",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-7cf48",
    "X-Request-Id",
    "6a0dd7137f936ad8-PDX",
    "X-Runtime",
    "0.162545",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7137f936ad8-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cYbwd4B3HlsKa%2B0te58lWoehnqTQrF9ZDont5upV6b4knhfdTnMOaIJP%2BKkEQykQNViD7hK55X2BuD49NZkymKxNJ5MXPgXYg1cH0eLwu5n7Bj%2F0rK00PfQmJvmGSNs8e%2FaQFFyi3eVmKYg%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7137f936ad8-GRU",
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
    "__cfruid=92afa3e1a53024fd0d5c4aaa701ca19fd9cdfdd3-1634686707"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:28 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "675",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-tm8hg",
    "X-Request-Id",
    "6a0dd7165d246ad8-PDX",
    "X-Runtime",
    "0.179794",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7165d246ad8-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FcvQoX6Wd5n5%2FUY3eirmfIIvtUOvEdhPA7AewQ3Lrmi95wDywZ0D2n7k0zhAOk%2BJMP2RPznmvH5oE9UL37Jlsok39MRgpsDd3CoGVrodcKXDfOUKmuiYzUE9vXVLvGM%2BWSFoiIsPphfj3to%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7165d246ad8-GRU",
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
    "__cfruid=92afa3e1a53024fd0d5c4aaa701ca19fd9cdfdd3-1634686707"
  )
  .matchHeader("content-length", 115)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421020800132,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-19T23:38:29Z",
        updated_at: "2021-10-19T23:38:29Z",
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
      "Tue, 19 Oct 2021 23:38:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1007",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "674",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ed2142fce96b2558adf4b7b4417d6f8b"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-nfdxd",
      "X-Request-Id",
      "6a0dd7196b726ad8-GRU",
      "X-Runtime",
      "0.389705",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7196b726ad8-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2KE%2Fl3iTSitysQGH0ndt2y8wIac7tEQ%2BAiN%2BfN3lVLn8xCSO6DRWqggZiL45mfRsqI9t8PC%2Fwsvw%2FBVrD0YLyEytZtIVk65DNespO9kZX8mn453q3QerVtXss8UVrM4Ar%2B8sfJuD7DBw7eE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7196b726ad8-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020800132,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:29Z",
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
      "Tue, 19 Oct 2021 23:38:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"625c7a56c5642ebdd0a944762763fb58"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-wmg4c",
      "X-Request-Id",
      "6a0dd722096cf6a3-PDX",
      "X-Runtime",
      "0.204417",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd722096cf6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OhLJgYBlLxmekKth%2FyxuC3IZjNkWXv8%2B1zPOpmmQPuqt6QJf3jXIOwPRKoTC%2BbxLX5CXFQdSCekScZlW0BT2SSH90zEEyFcf8OQvGqB0tNjO1ZVbHf8X5rSD59wFfjt6Y%2BgoVjIYs7cIphg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd722096cf6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:22Z",
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
      "Tue, 19 Oct 2021 23:38:31 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"def0ffa610a5173f85638c47ffc31f6f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-g9fp6",
      "X-Request-Id",
      "6a0dd7253e49f6a3-GRU",
      "X-Runtime",
      "0.199207",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7253e49f6a3-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xJGcTC7%2B4VNFPfil5zGmbuC3KwP%2BaLwN9NdvVjkbJQwT5iqF73BTt9RkMhkqc6DTRNDoPUDdo%2FiwB%2FUNWT4GOqcVLJyUgL0z8ZHwrPYgWEU7Mh%2BNA1Vdf5SMVeV9Mf2KhFJj0N3YDRBVJnQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7253e49f6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020800132,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:29Z",
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
      "Tue, 19 Oct 2021 23:38:32 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "671",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"625c7a56c5642ebdd0a944762763fb58"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-d9f7r",
      "X-Request-Id",
      "6a0dd72ca99ff6a3-PDX",
      "X-Runtime",
      "0.214242",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd72ca99ff6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oNYSwefR0nnSdPHw2FMAEjp7DbkZVLD7IX%2Fs0uOCTpeQWUbQPtVuTj13gdC7jbDkJ23xRH%2B0TCOjwlWoo3Ljs%2B7dc76uuPflJhUh8QioX3P7k3%2BCjAR3iB3KFEgxSZDeFisliUSH7nKgyQ0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd72ca99ff6a3-GRU",
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
          id: 421020800132,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:29Z",
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
      "Tue, 19 Oct 2021 23:38:33 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
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
      'W/"625c7a56c5642ebdd0a944762763fb58"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-tm8hg",
      "X-Request-Id",
      "6a0dd731ac19f3b3-PDX",
      "X-Runtime",
      "0.210875",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd731ac19f3b3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3HA5HRLphiEYpQJJsn9X94nrMFFxHZ3bb1zc1IdFKY8jbfN%2Ff10HgBWbHiFD5lzH%2FTffJQMUTIxQnrUULVyo1R9%2FiBebY%2FYqsshtCVKVMrXIme1pEKrF1fv0Df8Xk7sNKUZ3G34B%2BxM9Ul4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=0fe3a806052be05d6df9589bd8b8aa8c91fb7b40-1634686713; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd731ac19f3b3-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020800132.json", {
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
    "__cfruid=0fe3a806052be05d6df9589bd8b8aa8c91fb7b40-1634686713"
  )
  .matchHeader("content-length", 100)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020800132,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-19T23:38:29Z",
        updated_at: "2021-10-19T23:38:33Z",
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
      "Tue, 19 Oct 2021 23:38:33 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "669",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"67d31e173555597c9c922962f69da319"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-v5sj9",
      "X-Request-Id",
      "6a0dd7351989f3b3-PDX",
      "X-Runtime",
      "0.322576",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7351989f3b3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3SmYA%2FxFpY9QS0eAgFDbXgU%2BQo0Jz86BJOnIQcwXxFfurKImHsnxhXLhNbM78GF0nOYnbfm8RLovV6wfQQFyLuX50%2B7WbUOQGKt4%2FzDboJNE9dJ2vedUJXF53jWvyp9tjuhywEs4xw%2BPrVk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7351989f3b3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:22Z",
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
      "Tue, 19 Oct 2021 23:38:34 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "668",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"def0ffa610a5173f85638c47ffc31f6f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-7qf7k",
      "X-Request-Id",
      "6a0dd7391deff6a3-GRU",
      "X-Runtime",
      "0.199951",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7391deff6a3-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yjD5nAeINfvtxKmM58Mrzdl04P3%2FSyPcgvdY%2FJ53CE1CBTEgNeLpHz43uo1OrQWyVuQoq8EJcbvRebV9M6kSUdwfccwQmiS5CJj4gubKp6Z%2BM5u8XLnlb6k3MiLZ7rHlTOm%2BdeGmJpEoj8I%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7391deff6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020800132,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:33Z",
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
      "Tue, 19 Oct 2021 23:38:34 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "667",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0138ecec55436930e16c9a5d8c2f3b72"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-z6ts5",
      "X-Request-Id",
      "6a0dd73c7b00f6a3-PDX",
      "X-Runtime",
      "0.207163",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd73c7b00f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c8xHMCJSYQoRUNqVIH8bftVI9NbjdO9ieqGhaJycghFIrvye1m9UNd5wRzzfTAJN9H6H1w2vGJK3jMP%2FN9nv8oJwXsxpWzYgmbtSpKKnLKkR5G4qigplhQeHoxzvTVAd6g8HvBrlU3zTdEo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd73c7b00f6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020800132,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:33Z",
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
      "Tue, 19 Oct 2021 23:38:35 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "666",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0138ecec55436930e16c9a5d8c2f3b72"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-qlz5z",
      "X-Request-Id",
      "6a0dd73fafb9f6a3-PDX",
      "X-Runtime",
      "0.184782",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd73fafb9f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RYtLyc7RU86CChJ6S5%2FDFF3xKQbTqqmPi0BoP6mafTajD8vdPlT6QzndzDnoMvTMTZdHskxBaqe%2BBiKCGwfnXyeSjQI%2Bitg5aNqvCtJMMWusA6Z0TeROR8%2FQYi2oZD%2FIFZ82J25f8qi9Uns%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd73fafb9f6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "665",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-xvrwb",
    "X-Request-Id",
    "6a0dd742ac94f6a3-PDX",
    "X-Runtime",
    "0.146618",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd742ac94f6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8hH1SiaA1f5iM9aQfHgSUryuHuzG8F3fkT4HzdXG%2BJY%2B%2B8WtXYNkwskCFXCprAu2spDTHW7dDi6PI7J31l3IJAg9m%2BftmEXWvX%2BOu765QXqF5RT0BY3V4LSnjPsfwu1QrVVkGO5Bg2%2FVFzA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd742ac94f6a3-GRU",
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
    "Tue, 19 Oct 2021 23:38:36 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "664",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-f98f4",
    "X-Request-Id",
    "6a0dd7471aae6b0e-GRU",
    "X-Runtime",
    "0.147074",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7471aae6b0e-GRU",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Kw1Yx5WylqHjzxnnHxuKgbrlw4poQhPIQX1b2%2BJJHpLciYz8oFXBygQrnOdnZ1bA01QSYvEPCBClgVCdk0Wsb4swV%2BcRsNnbePgrbL%2FUKuBV1FNZj0vCa8%2FPW2AimAQ4%2B%2Fa6Mx7zvS2%2Bxzw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=010c6e71bdbe7aeb97f12dbd31f90cae74f3d5ec-1634686716; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7471aae6b0e-GRU",
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
    "__cfruid=010c6e71bdbe7aeb97f12dbd31f90cae74f3d5ec-1634686716"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020800132,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:33Z",
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
      "Tue, 19 Oct 2021 23:38:36 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "663",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0138ecec55436930e16c9a5d8c2f3b72"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-vlpqg",
      "X-Request-Id",
      "6a0dd74a28136b0e-PDX",
      "X-Runtime",
      "0.200453",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd74a28136b0e-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=otHetERPQLVMrd3khLg5lP7m%2FsiRunWwTB22YgzBK%2BknVFUMmIhctRB5OTJa2OB1qrNitjDtTNRtsswZsUj7xj2Y8Z3zdQdjcotZcnaeLenKJF7%2F6EZ44wlhiO9Bz4VLGz6OvUNfCSrmk%2Fk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd74a28136b0e-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421020800132.json", {
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
    "__cfruid=010c6e71bdbe7aeb97f12dbd31f90cae74f3d5ec-1634686716"
  )
  .matchHeader("content-length", 105)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020800132,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-19T23:38:29Z",
        updated_at: "2021-10-19T23:38:37Z",
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
      "Tue, 19 Oct 2021 23:38:37 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "662",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d4525dbd5e3ae9c0914d92ebaf454fd3"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-q4ndp",
      "X-Request-Id",
      "6a0dd74d4d886b0e-PDX",
      "X-Runtime",
      "0.360299",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd74d4d886b0e-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y6%2BFEZIJ01EVPlmVFYZn9K3cj64owYLS8DqEcJKfKHz3MvSCfO7qu8UeMNXwzC9WLpyJlsC%2FusYZf1ClEg4HHsj%2BVG4b4fpSvZxu5NdJklTG2FSQNZgJiPnC4tLHe9hxV4aFAmz8L8moX6I%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd74d4d886b0e-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421020800132/identities.json")
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132/identities/390625913892.json",
          id: 390625913892,
          user_id: 421020800132,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:29Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132/identities/390625914592.json",
          id: 390625914592,
          user_id: 421020800132,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-19T23:38:37Z",
          updated_at: "2021-10-19T23:38:37Z",
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
      "Tue, 19 Oct 2021 23:38:38 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"9d2a74af79563a50e9d08b22ebddd3d3"',
      "Last-Modified",
      "Tue, 19 Oct 2021 23:38:37 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "661",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-nd6vc",
      "X-Request-Id",
      "6a0dd753181f6ad9-PDX",
      "X-Runtime",
      "0.171145",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd753181f6ad9-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sZaiyf6rjXd25S8%2BAWa0P9S7Qz9RZzI%2F7dtSHYCEAkbiuzjx9lA%2B1ooRKR60hc42rivvuQXKAurKXEwlO4px8QBpZOatw0K7DKla0qsPtv8n7dj2yvD7LIan%2FiEYy5dsKEgSrcfKgaKzsJA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=787a9b19906ada8dab2d739fd19339043f71e285-1634686718; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd753181f6ad9-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/421020800132/identities/390625914592/make_primary.json",
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
    "__cfruid=787a9b19906ada8dab2d739fd19339043f71e285-1634686718"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132/identities/390625914592.json",
          id: 390625914592,
          user_id: 421020800132,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-19T23:38:37Z",
          updated_at: "2021-10-19T23:38:38Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132/identities/390625913892.json",
          id: 390625913892,
          user_id: 421020800132,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:38Z",
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
      "Tue, 19 Oct 2021 23:38:38 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "660",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"8dcb2db0ce744a2b12e4c3e26beba6b3"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-rj7wp",
      "X-Request-Id",
      "6a0dd7560cfa6ad9-PDX",
      "X-Runtime",
      "0.355742",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7560cfa6ad9-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w2zGBLI1Fq8n2fqcGXP6CI4b0MW%2Bb1rvdBcRwk4p4FF6OlRCwHEj3pFdJT49o11qUsD7ZADKKRInjIhmTHhJQA1PRtTcJaq%2FIDk%2BzrqxWblxlmi6GYKbSUprwESQ4s0ZE1bFbeuDH57m%2BAI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7560cfa6ad9-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020800132,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:38Z",
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
      "Tue, 19 Oct 2021 23:38:39 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "659",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"021354ef8b13ef614729bc008aec0ea3"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-4btv6",
      "X-Request-Id",
      "6a0dd75a3bd6f6a3-PDX",
      "X-Runtime",
      "0.237907",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd75a3bd6f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=k0V5%2B2bXP%2F3WI%2FZE7%2FmzAt0u3oOq37ANlKW8Jh1PfyT2pUb4hhv7qyBlF6N8ZkqpeO6F5Y8aFGk4JDxvwibe%2BLOKyzqCQRRoLrAh8mBq0mFiQDMYrloQw02fWjeZAaN1hH%2F3daYABRZpQgg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd75a3bd6f6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:22Z",
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
      "Tue, 19 Oct 2021 23:38:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "658",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"def0ffa610a5173f85638c47ffc31f6f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-7j9wk",
      "X-Request-Id",
      "6a0dd75fce316af6-PDX",
      "X-Runtime",
      "0.217948",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd75fce316af6-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cgirxFM%2B8nJA73g3Ql8hcAg65ro1%2B6RAMJXMmrpRM88cyz4Bxd3g%2B5lXLW5wS9qIR%2FghCzOYJ3vDu326goLLVUuuFPPK%2BGJCIX6Y6faDoS%2F7gHXIOLd%2B70izzaAgjxFp7K6fKLAZF0hEJH4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=64519e205a10990af03b8a471ae2ca03fc8fb34d-1634686720; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd75fce316af6-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:22Z",
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
      "Tue, 19 Oct 2021 23:38:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "657",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"def0ffa610a5173f85638c47ffc31f6f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-djgrq",
      "X-Request-Id",
      "6a0dd763693df6a3-PDX",
      "X-Runtime",
      "0.188877",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd763693df6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0a%2BEyd6wUqxgS7QqdsHNIrWYSPOmo9Nw0xmuWhDMuwna6jODBPeP%2FdslQKBvC2S4RsSFutV990dAPw5uxYUrYW4dF%2FC2lIC6UmXSXyM3uPbpIfqwa1z%2Bu0I%2FHIdE6JB7l77AjRn88Rv7Q9k%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd763693df6a3-GRU",
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
          id: 421020781452,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-19T23:37:00Z",
          updated_at: "2021-10-19T23:38:22Z",
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
      "Tue, 19 Oct 2021 23:38:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "656",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"def0ffa610a5173f85638c47ffc31f6f"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-5bfr7",
      "X-Request-Id",
      "6a0dd7681d344d29-PDX",
      "X-Runtime",
      "0.205841",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7681d344d29-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GRH47cPgjyn3JKcpe%2BLmb%2FZUtY49e%2B%2FcIrCbtn3rYtBpZD9Z7AaifFefAE0SX%2B2iiGz8%2FTcI2Ns9JenJ4dtydXEpOZAdp9r%2F8t2%2BLlMU4Q%2F6f8EU03VICNTkrqrFB9yUd4qYKNDYt9qq23k%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=654e3d04497fae48d98ec9c7f0e300a49df2b879-1634686721; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7681d344d29-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421020781452.json", {})
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
    "__cfruid=654e3d04497fae48d98ec9c7f0e300a49df2b879-1634686721"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020781452,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020781452.json",
        name: "John Connor",
        email: null,
        created_at: "2021-10-19T23:37:00Z",
        updated_at: "2021-10-19T23:38:42Z",
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
      "Tue, 19 Oct 2021 23:38:42 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "655",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"1a3c6c4fffc769c781f5fa5ed7bed4da"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-hrfrr",
      "X-Request-Id",
      "6a0dd76b6c364d29-PDX",
      "X-Runtime",
      "0.491132",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd76b6c364d29-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=apR6D2NolxhP%2FjTUFZb0M0K6c63Ldse%2Fvc4OPFqQMbe9RtMKgRcsc19gkBm6kGCWGmboqrSXeFJT22HnuEiX6xoFM1FWhr%2Bum42l%2FlEUwj5S1fHYnL48MjhntKAXO%2Fwd47gaHp0a7OVjdIo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd76b6c364d29-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:42 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    "classic-app-server-54c566998d-q6v2v",
    "X-Request-Id",
    "6a0dd7704cf4f6a3-PDX",
    "X-Runtime",
    "0.160661",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7704cf4f6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=z2PZYzg06pqwau1GPlFq3yoKuz716gHXeKI2Op9NRJNuks3mEsLB4hez%2FtkqQd7sKpnuOsb1Z6c4sZEahvKYWpPMhnDXJIh4ySVyCEu7IulFEOAe%2FKqhZ385DrvX9c3NSjhIftN3bjp5Hsg%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7704cf4f6a3-GRU",
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
    "Tue, 19 Oct 2021 23:38:43 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    "classic-app-server-54c566998d-96cv4",
    "X-Request-Id",
    "6a0dd774d91af724-PDX",
    "X-Runtime",
    "0.162179",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd774d91af724-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HuajSGp22lhfysWacR7DLR4X9cXsKR3PYdnPbbsb8kL9ManhWQXLv4yMM3%2BW5OUpD1LBg7YkEaGNm07KBepY2tBsiopC77C29AI9m32JtaQ8sNMY%2FnvoA1%2BKLb7oEY6rgg02MqUTk7Of430%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=0620d430df43bf46118cde6649f49f43a8525171-1634686723; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd774d91af724-GRU",
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
    "__cfruid=0620d430df43bf46118cde6649f49f43a8525171-1634686723"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020800132,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-19T23:38:29Z",
          updated_at: "2021-10-19T23:38:38Z",
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
      "Tue, 19 Oct 2021 23:38:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "652",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"e8470e5605cdb7a7b3e7e0805101cee3"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-9wktv",
      "X-Request-Id",
      "6a0dd777fdf0f724-PDX",
      "X-Runtime",
      "0.194844",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd777fdf0f724-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GUSEOgtrHtJ2O%2Bj0OL3aZuW33geH1fByVfr6p7Jqxzf%2F6zLz9GZ6xdw4MJz477XnjVen5AV%2FsxBpeIIcSoIb%2BhoDHEWAWi7dxw%2Bx0UFfXeuWJ3%2FjB1qMgtIxyyGRLsthlgMMhUJH%2FRJQ5Ko%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd777fdf0f724-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421020800132.json", {})
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
    "__cfruid=0620d430df43bf46118cde6649f49f43a8525171-1634686723"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020800132,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020800132.json",
        name: "Bobby",
        email: null,
        created_at: "2021-10-19T23:38:29Z",
        updated_at: "2021-10-19T23:38:44Z",
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
      "Tue, 19 Oct 2021 23:38:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "651",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"92aeaadbaf49039daf30cd73d2e4121c"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-2c5vx",
      "X-Request-Id",
      "6a0dd77b0ae5f724-PDX",
      "X-Runtime",
      "0.449697",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd77b0ae5f724-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NVOfO1VPPjg5mGqDnO2JPAjxjr1TAILAAYKIsmqrL9BxhTSFSZIEtlIBlH2W4qtDXEvk5ER86uE3aHyMezBPSHRmOtYK9IAwLi%2Beg5fdSGyr2G8lfpQ6CNY36BjRPt3P2oYzt%2Frwy%2F3mQe0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd77b0ae5f724-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:45 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "650",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-k7thf",
    "X-Request-Id",
    "6a0dd77fad41f6a3-PDX",
    "X-Runtime",
    "0.149546",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd77fad41f6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tUJeFKstYzQYMal%2BPDJhQkpXogidBV37xVSlsl%2BEnLWF2%2Fqcvn2ZCkmC8TZxxALTl4ScSy1tf2mvvIaBqvGBA%2FqvZ4hYOZm%2B7%2FfgQewr1U84gcU2sFnaq2gjZKGxbwdrWNqiCQ2MT%2BBazBo%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd77fad41f6a3-GRU",
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
    "Tue, 19 Oct 2021 23:38:46 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
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
    "classic-app-server-54c566998d-9nthg",
    "X-Request-Id",
    "6a0dd78449386ae5-PDX",
    "X-Runtime",
    "0.158061",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd78449386ae5-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FVhUP%2FDo7e9GtGhFUlTwBiLX7Dy%2F5SsNHzG6NtGT64BHIqi736Ratcy%2FfvrsZkricdK74ehN4wLyJTQEko3xaoG%2Bm9JlXS2OsnlCGY00J00xMKgPXK5roHZsOh6MxO3Zrn%2BYVTc9xTEAYCo%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=848892b75c3bff7d7c5fd39939e8eb92cf1dff65-1634686726; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd78449386ae5-GRU",
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
    "__cfruid=848892b75c3bff7d7c5fd39939e8eb92cf1dff65-1634686726"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:46 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "648",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-jfb5m",
    "X-Request-Id",
    "6a0dd7872ed46ae5-PDX",
    "X-Runtime",
    "0.164577",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7872ed46ae5-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QcAHe8RFtAy9VwCQ0aQAU4ojXlNWmixo6aPxhGx1H4S6mseAECQf2Lxil%2BJXPM6%2FkCW%2BTp9fFvCOKv2SDwjFDHEsJxTrWlYXFgV2%2BsguVBlUEaY5XiB3cUrWVE6SKW8XK95KsI%2BTXefKMoQ%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7872ed46ae5-GRU",
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
    "__cfruid=848892b75c3bff7d7c5fd39939e8eb92cf1dff65-1634686726"
  )
  .matchHeader("content-length", 139)
  .once()
  .reply(
    201,
    {
      user: {
        id: 1902623372187,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902623372187.json",
        name: "Jill",
        email: "maybegrouparoo@demo.com",
        created_at: "2021-10-19T23:38:47Z",
        updated_at: "2021-10-19T23:38:47Z",
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
    },
    [
      "Date",
      "Tue, 19 Oct 2021 23:38:47 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1033",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/1902623372187.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "647",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0b912493790e796d710d1c8317152828"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-xmb7w",
      "X-Request-Id",
      "6a0dd78a3cfb6ae5-PDX",
      "X-Runtime",
      "0.505366",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd78a3cfb6ae5-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JlL2KRHuCxiFvO1n%2BOr01vWm0hGdk6ZetKepq%2B%2FPoQ0RGTbMw6YficptPYcGEy%2Fj0Vjt%2FvDUg4aNAyT2CtVNZ2dSZ9rSNQ23QbdPVGGa0%2FdI8aRjhhqjp9Myiv%2Fn47DB2xnGjQ7hHcrllxQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd78a3cfb6ae5-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902623372187,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902623372187.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-19T23:38:47Z",
          updated_at: "2021-10-19T23:38:47Z",
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
      "Tue, 19 Oct 2021 23:38:48 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "646",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5b2b398db05d8c00cb9ae7c35b4195cf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-dkhb4",
      "X-Request-Id",
      "6a0dd78f4d72f6a3-PDX",
      "X-Runtime",
      "0.207490",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd78f4d72f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Poy1KH7wD5XTPOBihNNMK98PjWq0OJTcR1MO7lUm9gmQzhct%2F9lu%2FKYsEQHrh5uLw8mJFdrXuIci%2F2oIpZj5jOGFvRYtXpGm46zdf%2FUipWzox5uZfoyAy7Lr%2B%2FysIix5AQXvPuS4OpyFpVI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd78f4d72f6a3-GRU",
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
    "Tue, 19 Oct 2021 23:38:48 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "645",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-f98f4",
    "X-Request-Id",
    "6a0dd7943bf76048-PDX",
    "X-Runtime",
    "0.151066",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7943bf76048-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2V2IDYgYkdt5R0j%2Bc4laYo%2BadH%2BkfAT6CAa64YSya9LG6souuF2AwCOO8PPqCNYp2mDSqXClYKnFGZdsJkvSBAeuHLXyCriA2qxiFNWQGt%2FB7vYy6wSP%2BwLHwCxnuxxGUZPDC22AANExKLw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=5c7b421b8d3e807056a909d8a3ce20844e0b30a8-1634686728; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7943bf76048-GRU",
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
    "__cfruid=5c7b421b8d3e807056a909d8a3ce20844e0b30a8-1634686728"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:49 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "644",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-q5jmm",
    "X-Request-Id",
    "6a0dd79729b16048-PDX",
    "X-Runtime",
    "0.168280",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd79729b16048-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NXWKHxNuJKStYbccyizDbLKuasN79%2FRRkRjy5MR8PfRa36u%2BQfrEqxeaLzQSG7TbC1DZwRfWEqBUCHtBIg66Rk1lg9xlwY8Tkp31lOw1%2FR3k9Od9YJaDaVkBO1mQ2M9RqYDKJISkSqC1UWE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd79729b16048-GRU",
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
    "__cfruid=5c7b421b8d3e807056a909d8a3ce20844e0b30a8-1634686728"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421020802072,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020802072.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-19T23:38:49Z",
        updated_at: "2021-10-19T23:38:49Z",
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
      "Tue, 19 Oct 2021 23:38:50 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1004",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421020802072.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "643",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5e36913ee410bf4c7039c54ce6c5a6c7"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-k7thf",
      "X-Request-Id",
      "6a0dd799ff526048-PDX",
      "X-Runtime",
      "0.376650",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd799ff526048-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dbkWTVolxybOKfBQGpySxsIdltgJbeCoVQMCGf6%2BjZEMmWSY6eHiDHFloPoEx1WLmv%2FDMqLCqthlJb%2BfkIwZC4k1E9m27VG8m7FsoHohMYRlJE%2FtKuyO%2BCdf7vm4hiVdD89JFH8eEB%2Fb0QE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd799ff526048-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421020802072,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020802072.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:38:49Z",
          updated_at: "2021-10-19T23:38:49Z",
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
      "Tue, 19 Oct 2021 23:38:50 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "642",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"2862d65ea3d8644fe676f2abc91eacf0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-7h848",
      "X-Request-Id",
      "6a0dd79efe9cf6a3-PDX",
      "X-Runtime",
      "0.203818",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd79efe9cf6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zlQinEI%2Bj4E%2B%2FxMHYg%2FffjSpsB61rXibh60Za%2BfzVyFoCyoc0Aj0wJ08n%2FL9IfwNDNC%2Fk4CA945pIHh9kf%2FK23sGcefhmmkrN3gIQEUExOImwMfg0%2Fv0NyG0bdWcswS3PzcR%2FDdMVPAzOrM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd79efe9cf6a3-GRU",
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
          id: 421020802072,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020802072.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-19T23:38:49Z",
          updated_at: "2021-10-19T23:38:49Z",
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
      "Tue, 19 Oct 2021 23:38:51 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "641",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"2862d65ea3d8644fe676f2abc91eacf0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-fx85m",
      "X-Request-Id",
      "6a0dd7a52b7df1f6-PDX",
      "X-Runtime",
      "0.197272",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7a52b7df1f6-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RR%2F%2Bsq7nqlbr0nSj6gd5wQrlct8xxnONzy9%2FGBWyy2dNL1Nb24bmOkKfJBX1%2BLO0RIow6Q1obcqhibtELI2cCHBfyHrtqY2z%2FTueZyw0dtslOfmV93nfHyG84hTheOpn0rwNtuQlcEotDUw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=6b3f2eabd81a2a3626a91113521aa92dcd4e0f1b-1634686731; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7a52b7df1f6-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421020802072.json", {})
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
    "__cfruid=6b3f2eabd81a2a3626a91113521aa92dcd4e0f1b-1634686731"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421020802072,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421020802072.json",
        name: "John Doe",
        email: null,
        created_at: "2021-10-19T23:38:49Z",
        updated_at: "2021-10-19T23:38:52Z",
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
      "Tue, 19 Oct 2021 23:38:52 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "640",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5e53c7e2446c670369b359d539ccbd57"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-fcfpp",
      "X-Request-Id",
      "6a0dd7a85923f1f6-PDX",
      "X-Runtime",
      "0.468752",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7a85923f1f6-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZCw98UBJNUUgmJSVl3Mlgyqhy4XFx8By%2FrEAsafck4IGm01q4d6ddKqQh3GgzybHPRUxtpyEpcBVy1gDJ3zhfogJh3jyaNh2q3JY6H%2BZ%2B5NXLXGVGmmgdZw%2FcM9sGEzGVwkZwU4ytreEU9M%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7a85923f1f6-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:52 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "639",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-dtxrj",
    "X-Request-Id",
    "6a0dd7ae3c86f6a3-PDX",
    "X-Runtime",
    "0.154339",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7ae3c86f6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pDhAIFYYWnNc3%2B%2Bvyy%2FUxYCruJ6dGKwE%2BegJCw3usCbJ8LKeSEUgAU7phNfaSMFfeMnU7IegWFZFI7kQrVa7UrSpJUyEB%2F1WSnmK3Cg5plnecXP5WzGTChTI17lHNJ7OM%2B1ZP47dYZuAWZs%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7ae3c86f6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902623372187,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902623372187.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-19T23:38:47Z",
          updated_at: "2021-10-19T23:38:47Z",
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
      "Tue, 19 Oct 2021 23:38:53 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "638",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5b2b398db05d8c00cb9ae7c35b4195cf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-dzwmh",
      "X-Request-Id",
      "6a0dd7b118d8f6a3-PDX",
      "X-Runtime",
      "0.207763",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7b118d8f6a3-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c98f2RJB8SJ1FyduKisR9b0cxYiH4W0gAUfW2f%2FHILWO8WiMRHMBkTL%2FuWXbwR7VERRJHA7D23liKncD%2BBeTUFd9cvhrLfSAp6AwBS8%2BfLbvZq%2B3K6fBFVqlg%2FxvyBxoD72oNgYlsdmuwBE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7b118d8f6a3-GRU",
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
    "Tue, 19 Oct 2021 23:38:54 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "637",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-v88d6",
    "X-Request-Id",
    "6a0dd7b5d838f67f-PDX",
    "X-Runtime",
    "0.165553",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7b5d838f67f-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ILr%2BmDMjH8mQgNYoDvOhI2d2Nzw6v1scDUGXi2VbBv1Z%2FvViGdhiRFyCLIEEA7A3XwB8I4isJKgKQiFg7PvX5r07PVrpqSZ%2BxM2d35kjtCzngPm6BDZGBB1WDsthDe4GPax%2Ft%2ByNWIHRIVk%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=ee699b748c6c5361c0317322c26f9a6eec3dcff1-1634686734; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7b5d838f67f-GRU",
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
    "__cfruid=ee699b748c6c5361c0317322c26f9a6eec3dcff1-1634686734"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902623372187,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902623372187.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-19T23:38:47Z",
          updated_at: "2021-10-19T23:38:47Z",
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
      "Tue, 19 Oct 2021 23:38:55 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=10, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "636",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5b2b398db05d8c00cb9ae7c35b4195cf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-hcjk6",
      "X-Request-Id",
      "6a0dd7b90d08f67f-GRU",
      "X-Runtime",
      "0.182252",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7b90d08f67f-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RAyxjORatykaaSAMWhdGtaisGs4vsfPm%2FJi%2Fk52uiXkeD5CoJjd9Ua%2FFQIFjUcY004tHXtb1xPGjAiJEBqK9A30N3nqtQlBkHbMh4P7OEn8ezQs%2BS%2BOX2rWYA%2B4xjRkrb44jRZPaf5Pf1kw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7b90d08f67f-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1902623372187.json", {})
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
    "__cfruid=ee699b748c6c5361c0317322c26f9a6eec3dcff1-1634686734"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902623372187,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902623372187.json",
        name: "Jill",
        email: null,
        created_at: "2021-10-19T23:38:47Z",
        updated_at: "2021-10-19T23:38:55Z",
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
      "Tue, 19 Oct 2021 23:38:56 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9997",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "635",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"675baa11c5a913ca01036693bade69cc"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54c566998d-x5m5n",
      "X-Request-Id",
      "6a0dd7c078fdf67f-PDX",
      "X-Runtime",
      "0.491154",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a0dd7c078fdf67f-PDX",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N52QYIV6ld0T3lyYcdm7Xttchw0pwdjhG3ahSscRKviAy9%2F5aHDIwpMVzoxtrO9fzOuPNfKqUeFFQuHF1GiMVWaZ4NLlCpG5yoT%2FzEY2ispQHfM6qrl7QZ7uCyN89Dh0pCnXDpsyzKHptow%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a0dd7c078fdf67f-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:56 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "634",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-5vvm9",
    "X-Request-Id",
    "6a0dd7c5682df6a3-PDX",
    "X-Runtime",
    "0.156273",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7c5682df6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TK8%2FyuzLG2i301AlP8nKy%2BSvBP%2BeYk0meM9L6SZDXr9raUN49H18h%2B6a1boVPKGfs41JDvZVwMUsH24oceAbk9MSel7lQfBOBZZUpbaOHWNNKHwhDOe2KG6G6UOxaamILx4lCvdU7rFsIT4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7c5682df6a3-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:57 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "633",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-7l2zf",
    "X-Request-Id",
    "6a0dd7c85c0df6a3-GRU",
    "X-Runtime",
    "0.164649",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7c85c0df6a3-GRU",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cWVyZyvknKAziyBFPUQu4EIelBkEMrQB3cyweYqJHu6xmY221FAAiYFcj%2F%2FSac8gJzF%2BjF8c%2BZ6X9X1oXTCoWOkhioVL7AnUemmsfxIKTQ6foGm4LEk%2BB%2B31LCMmt6SxIIO%2FTaCWg76%2FFC8%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7c85c0df6a3-GRU",
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
    "Tue, 19 Oct 2021 23:38:58 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "632",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-47764",
    "X-Request-Id",
    "6a0dd7d0bc714d29-PDX",
    "X-Runtime",
    "0.152059",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7d0bc714d29-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F%2Fq9ufZhe2D5IhwKLzSXN02UVgT545lKBTgXhmYyOxjeQrXpQNxP3RdPeA3XNKy90%2FK83FLj3Ri37jk0TDImtAdXrcbCb6gTQFa4Ndtm6UGIUVo%2FzP%2B2B9rN9NnidTTfUlC%2F2cFnLch4PnM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=e36a65e48cecda4830bfb7d230488a303b4b8401-1634686738; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7d0bc714d29-GRU",
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
    "__cfruid=e36a65e48cecda4830bfb7d230488a303b4b8401-1634686738"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:58 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "631",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-qfq55",
    "X-Request-Id",
    "6a0dd7d3aa874d29-PDX",
    "X-Runtime",
    "0.194550",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7d3aa874d29-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=duJLHH0T%2BnX1%2FnHNhmkbMpL1oc9JbvFT4UN%2BJbJjxTVit7FdMDjMS2q5npyOfBvh7PdLTQOFHEC2IEeOe%2BASkEE1HqdkS2EdlpzPOe1n4a0%2Ba1IZdlzlboXO5cOoX4BHYm9ZMypOYn7IrH4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7d3aa874d29-GRU",
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
    "__cfruid=ab1c23bf1687a584cedf834348664a98e6b84aed-1634686614"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Tue, 19 Oct 2021 23:38:59 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9997",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "630",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54c566998d-86jd4",
    "X-Request-Id",
    "6a0dd7d6c92af6a3-PDX",
    "X-Runtime",
    "0.148667",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a0dd7d6c92af6a3-PDX",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HYEvBX0ZQ2F17UE6tey6x%2BDbZh2dpRWSADzH1A6NDcveTsa4aYLZB3VTJK21lT526%2BCtbkD4kaYgU1HMN8DFaDQER4ohn1QAUdNtiW8dSUgm%2FjVMv%2B6hwpPewW2rG9gQ%2Beqvnh82tZnPzmY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a0dd7d6c92af6a3-GRU",
  ]);
