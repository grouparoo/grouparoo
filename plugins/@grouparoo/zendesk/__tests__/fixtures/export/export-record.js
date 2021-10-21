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
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:14:28 GMT",
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
    "698",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-p6wv9",
    "X-Request-Id",
    "6a16a113cc8d7104-SJC",
    "X-Runtime",
    "0.168797",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a113cc8d7104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JAujc8SNRGYNkM0UMQ%2FmtB%2FEzMT4nAqYiX4JZjKcRbvQRqJJqskddjDi69Jqj4UJ%2FIvky1yfH9RJtSatGb0mBBZGfNkBejvsrPXPtpxwQokBJZep4p9fKOfQQoPqFiCdHLfd4JrmZ6r5hbI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a113cc8d7104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:14:28 GMT",
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
    "697",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-6rqt6",
    "X-Request-Id",
    "6a16a1155e4d7104-SJC",
    "X-Runtime",
    "0.189204",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a1155e4d7104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ycqGVbAE9ksJhTSjpfIj%2Bjde%2FxfK1f%2B958EhnVybPvnxbKjoFsZlKOb2cDIMdfunN0Yzelr%2F5eACQoLi%2ByohCMtJuZWk9PTLHgTuaFpseTsCg3jknjfi6jeAznJa7RaxPzbAfqWgNAEzc8g%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a1155e4d7104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:14:28 GMT",
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
    "696",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-qdvvd",
    "X-Request-Id",
    "6a16a116f8777104-SJC",
    "X-Runtime",
    "0.186052",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a116f8777104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g4L1oI6tFdBdh84TZ8%2FAJDWdQZyX9iWAl%2BXAEST5ZZjW3paGpo4Hr2%2FM3Jei5B0b6gRrJHC2V7p90A4Gp6aT0nbmax6G5k49PBbGpaU8Hy7h2%2FeAIa3qb%2FxVqV8bErQ9BtvvpsA5tPIdnkE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a116f8777104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:14:28 GMT",
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
    "695",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-c29h9",
    "X-Request-Id",
    "6a16a1188a787104-SJC",
    "X-Runtime",
    "0.170077",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a1188a787104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cUtDb%2FK38zfK40cDMZjk1CY4SmNNtuHyP5Nn4sJOaDUEiNCmEeARy6NKEyxQQIu4cgkgiUm7rLU%2Fn21sQuuGoTlWtVF4pW6walGvohO8NAsa0fjozT1wdj9CloypSKQmkpYzxrBwOHSdycw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a1188a787104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
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
    "694",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-gq7vj",
    "X-Request-Id",
    "6a16a11a1cb07104-SJC",
    "X-Runtime",
    "0.155758",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a11a1cb07104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7Kk%2BnMphP95XbuSgxAZ9X7Kj%2BJl5YhTBoFfZr9XStrI9DQ4FSGA8KQbpGAVWnZKzAFAXUDuOBW9cOWmolbL2fmzB%2BCW2qkykBI2fuIcJousJqvaVYM2M9m7xaHC3nlc%2B5bZbk2oHLBtqeLA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a11a1cb07104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ external_id: "grouparoo123" })
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
    "693",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-9p2j8",
    "X-Request-Id",
    "6a16a11bdf117104-SJC",
    "X-Runtime",
    "0.147275",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a11bdf117104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IEsrCZA9Abb%2FNx5TsqEaMLKRJkpj4zPdCqwLsGisDl3BLf5LsJ0uPzFN4GYjkAt1MO7LxSKE30aQ7CwYmlzH5PlBtHa0WAgfeuXbmjvfRAbd2yWCztChpFWfNO2KL0xiZ0kcpAR4jTwxf1A%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a11bdf117104-SJC",
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
    "692",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-dlvxl",
    "X-Request-Id",
    "6a16a11dad7e70c1-SJC",
    "X-Runtime",
    "0.157556",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a11dad7e70c1-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=77KlYY69N7h5Z4SB5qGAZozejG2p9FMLdLN990%2Bi19dXOVROBrjdzygmwsOOs1W1lI7LOvuBvwBOuElpOa2XSKw99y37xmOawvhe0I8DhfWlh6HwdLGQSjsp9Q6hves665xP65C0BbisxUU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=920219a0938cf95891177e0402e764366cfbda1a-1634778869; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a11dad7e70c1-SJC",
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
    "__cfruid=920219a0938cf95891177e0402e764366cfbda1a-1634778869"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:30Z",
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
      "Thu, 21 Oct 2021 01:14:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1006",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aF5rf3UMzMcZQcdMctz8q25bXXEk4P64rdYag7GH1jFVjT7K2nIt4VBKvXXqJVN%2FGeCPmtTLdkoPkVJOfisJBlKar985U1ShD%2F2Ud1TQ7mwQcZVXjppPgKcWIGwp1qR5DsTTzoA%2B%2BczUQ08%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a120e90470c1-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:30Z",
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
      "Thu, 21 Oct 2021 01:14:30 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tNCS9b3kg%2FUOk5sV%2BCghYGS8NNYAX7Mw1X9xJugCWPFl7cCnZs9R4xxXes0B7rBeYHywiNl4ErqPNsW%2F5qJVeqe2z4qvEq%2BZwVW0AdI2z0mzjybxfLhpoyKajBrSxHjHb6MuE1ia%2FCF0hSQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a123d9c47104-SJC",
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
    "Thu, 21 Oct 2021 01:14:30 GMT",
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
    "688",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-m2jxj",
    "X-Request-Id",
    "6a16a1264cd0645c-SJC",
    "X-Runtime",
    "0.153665",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a1264cd0645c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:30Z",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=e96dc09d509531e504c33846b035ae5b11fc7c53-1634778871"
  )
  .matchHeader("content-length", 209)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:31Z",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kjTwx7tpaKmfYGqhKJ7pEv0JioOHlRn%2BEEGpS%2FH3JNRr%2BDQ1tPbd9Y7fIMzyhavZNLskabzdX4aglwY0qc4XXOKpfhI8TZW5NDr7jma8fmTvaGGOYon5vXrWp3TS4HaWt%2FnBBGxpJCGC%2BZ0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a12b6f4d711a-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:31Z",
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
      "Thu, 21 Oct 2021 01:14:32 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QWkownh0aJV5korsbg6fnWjSOFFMsouFzNc%2BH59LML9MN8udzFc9x2vCkehbzOSJgpNanbzzx9Pnw54tR2fbmkse7DShwu3yTDzNp9VOc0LAasiq3CJoIOXeKSqE6hsYD%2BK%2FFTwUzBRYbDU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a12e084f7104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:31Z",
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
      "Thu, 21 Oct 2021 01:14:32 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E5gDPSFpgPenx%2B7aqCbDyPHWrJCW3nIIKYz4KnysNIgjn6yKsq%2FEh0ihpF6eCwgIJkXLIhjhP%2BWqi5748SgX0vwlQhES7vPPioFsDL2twrpd%2BIa29z9jZbzZ%2B3KuxaWzd1fBfDxpvQap6nc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=0329498512585b06a63625b78faac93ef187eac3-1634778872; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1307a451c97-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:31Z",
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
      "Thu, 21 Oct 2021 01:14:32 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d1sqwprqdMjWcAJq%2Fjug%2BgEObtEcZLeL6F9HcVdUIxA9Hih4mvDQTUhkxtzOYx4SI0%2F0F9TtVQGyx%2F%2Fj4pyxB6tDO38o3EcwPmTKP4Zm7lRA83c1cRLhCPJYJwmbXf38iFyBD7OjiTb0TZ8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1324e497104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:31Z",
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
      "Thu, 21 Oct 2021 01:14:33 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=64d4c15ffb67207391ab69ee9bbfa502a9472031-1634778873"
  )
  .matchHeader("content-length", 231)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:33Z",
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
      "Thu, 21 Oct 2021 01:14:33 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Bhh5sl9YVzkYlWDWZSNtt9%2BnihT5eOu7DhM2%2FSfIgSkKguUB%2BQghz0Qwm1XLlmtq33TqUkPJeApuTkP8eo7tAD9VtVuRWLJpdHwvlPxAsMOCDoRBIoYcp%2FDb2jUT3cqnqgBqiakRaIRuFLY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1365a2b6423-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:33Z",
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
      "Thu, 21 Oct 2021 01:14:34 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wz5f4hoqxjevUr82XUJmVT%2B6b7jG89WrklRJmxn%2FpQia0%2FsipK%2B3UU3SZ4OhCWId%2F2KE1wGqFwJPW7Z7yMtTIzTVts%2BqsdRyy6V5n0Wtze3AJkl7ZeFspIfzXwKcE1FO%2FIU1UpmpY7N2Qp4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1394f2e7104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:33Z",
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
      "Thu, 21 Oct 2021 01:14:34 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=9d853ee7262d90463e5f9df78e10be4ffd96cdb9-1634778874"
  )
  .matchHeader("content-length", 201)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:34Z",
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
      "Thu, 21 Oct 2021 01:14:34 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8OR2kAzqYErtu%2FH9R4ba9lOUGn1DPlJQEz1VJdQe6ro9Dg%2Fq7eQqRNxdeErb32mOyS9ef%2FM%2BZdbEHJfrcJDZ9v14XTv8Y0zDR0ie3zm7m1nt0YPngRRJluAe4CvTTv6ceLH5xXsH5OU2mKo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a13d7dee0231-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:34Z",
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
      "Thu, 21 Oct 2021 01:14:35 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P%2Bf%2Fhzwnj4iOOxPkpYC9QCbPtwxr3y%2BwiFfPH8lNEOtpE9Ik%2BRpl4%2F4fZpUY4CnV0%2FMwEaabquGTxHK86TIJkuw5R%2FYw17503OeDKsmE3Ewci2adU313zmas1I5VJ%2FEWI1gK6UxsANK2hFk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a14058867104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:34Z",
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
      "Thu, 21 Oct 2021 01:14:35 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=19012d817d5a1450115f382c0e1d1339195e999c-1634778875"
  )
  .matchHeader("content-length", 135)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:35Z",
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
      "Thu, 21 Oct 2021 01:14:35 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rYKTc4eMJOYxAgni2HQEmVdN%2F9WIv01GUVfpoaeNy7pVz%2BY465Ue6i3ExFOHgnPiBLMCg5dLYqAeAVBysItiGBddI33ZDJ4xXQ%2FkFoxE6hDm5%2FL6tO4Tm1HX8Rk1UiKLbDhE3rwC%2Bn8NOcw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1443e642584-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:35Z",
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
      "Thu, 21 Oct 2021 01:14:36 GMT",
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
      "673",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A6q1sMectFDrG7ylEEIZIIBMG2JAUlpHNvU7pHdoj4FchLj%2BOKQPmU4Cats1Crgpw84z5Lz8ZoQlbjCEmpqY6us2lpK%2BSGPt1JhTLStXIj9vbJFEPmGJyuOgW26IPaLVAehURBUjUN3ZQpo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a14698db7104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:35Z",
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
      "Thu, 21 Oct 2021 01:14:36 GMT",
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
      "672",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=20c7c00442165f706066f3d069c7b4b2521a33a2-1634778876"
  )
  .matchHeader("content-length", 111)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:14:36Z",
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
      "Thu, 21 Oct 2021 01:14:36 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "671",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=srTSrbLP7Up20Dl%2BPCskpWFQvBf4hoYLRBCw1PDlXTDcUzC2RO%2FrzMy%2F9DpzkG4U5XzDjGSmwQ7VDQnf%2FCVx04%2BoAoibR2d1Djc4%2FeFebcAHGS%2FDb2ZO3kfsnITh1SQaOzduUvul2wzNTtA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a14a7be86453-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:36Z",
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
      "Thu, 21 Oct 2021 01:14:37 GMT",
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
      "670",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kZmx9FVjiAvK5nH1rRdcFSd3qMwElItghs%2BFGLUpHdySxyYinrBCzpQBwS0BkFj7vXRXqmks8K6H5%2BcPjO3f9H%2BX2QOMOpULQFj5x%2F%2FG%2FrVGahqwRx8Tdf7WqcFtjYXjJtgoBq7my7Wc8KU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a14cb8c97104-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:36Z",
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
      "Thu, 21 Oct 2021 01:14:37 GMT",
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
      "669",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a1502d377104-SJC",
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
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:38Z",
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
      "Thu, 21 Oct 2021 01:15:39 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "699",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AupQZ%2FHXUAEUFq0rHRwowkVwgcbieLrHXRIuzPrZf2Hv%2FSIG%2FVsvszbaSIaUL5rQMiGXsRdApmUSsWHn78yTf4%2BkzU%2BCuAgBDL47ETiQTGlzOLocoCULQpJxxrcMnuNyYU7eCNQh6VxXiY4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2ced9357104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:38Z",
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
      "Thu, 21 Oct 2021 01:15:39 GMT",
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
      "698",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=2500c3f266af511c7fc3f6556c2c091eb9d36a4b-1634778939"
  )
  .matchHeader("content-length", 144)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:39Z",
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
      "Thu, 21 Oct 2021 01:15:39 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1X9ghlpM3KIvBcPhE6MlyXsB2YeTUBAMyIu0fMmAi9aw9GB%2FqDjLnhNZNyMPvrJE%2FisbmJZgCLWcbj1cEIazPdbi7PZsa6mVuL8YmNdeOh9MCC%2FKastjVO2SvRzBzWw4DJPMo0fJJbZOPpc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2d3cf873b1b-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:39Z",
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
      "Thu, 21 Oct 2021 01:15:40 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sdvv%2BSN8tfqQIjFiH4Ozb%2FsnaDmxBFctJFwuvHDRgwYWIIQ9wZTN5n1QodVGUP8X%2Fln4qKMbojv4ssnAEv2G4WVYU%2Bc9l8VBNL93d5aONgxJpRqbo3p3aHl5VowB3hy2yt65tB%2FdcTBaY1w%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2d6ebd07104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:39Z",
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
      "Thu, 21 Oct 2021 01:15:40 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=c700ffcd1880bb1b1261d233bb86f999d10cdb96-1634778940"
  )
  .matchHeader("content-length", 104)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:40Z",
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
      "Thu, 21 Oct 2021 01:15:41 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IOlISRCzgdWI%2FQ3ji5ybrZaMZuZqMxZjOGqfuHi%2Fw%2FI1wqB1UlTaJ42rMqUtj4kX0nRczlh2CwbXsKzSnh8wtRrSLvDJrF4XqVElO4g50voh07Zq01HVEsUPtC%2FctFBKoZFSQJ%2Bw%2F8FnTNE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2dae9ea6432-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:40Z",
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
      "Thu, 21 Oct 2021 01:15:41 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LYjej7%2FYSkDROZn1INnAdc9JAdnW0qrAVBiLslCO69bM2jOACql4sqDnUPJYz32%2FFo7bnyVYIB5kYIacbYW6VE%2Fvrr9WDpEcK76eJ5%2Fh6pb8R1yFbGsT%2FFgTO5PyxjAugAkXs8rfY0i3Vh4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2dddd0f7104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:40Z",
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
      "Thu, 21 Oct 2021 01:15:41 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=1533d7bb958e578629a1ce173aab67db9e151fd6-1634778941"
  )
  .matchHeader("content-length", 116)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:42 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q0RBTbmGPcB0mAeU4OJqio37SLAVXKxBeqd1X6AWTJzNYZsDGp7y%2FM2TTFrC2ILmRlM5Km5s5Jw82F1b4F6kZp6o%2FWJy6AzGWj1TI%2FXIALi6QXIditCduzDFAVWjeaYh6HPrUAMTTxXa95E%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2e1d8500262-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/1902653125947/identities.json")
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947/identities/1901501313207.json",
          id: 1901501313207,
          user_id: 1902653125947,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:14:30Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947/identities/390643969431.json",
          id: 390643969431,
          user_id: 1902653125947,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-21T01:15:42Z",
          updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:42 GMT",
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
      "ETag",
      'W/"31f472cab7256c42292781c7f8f6f3ea"',
      "Last-Modified",
      "Thu, 21 Oct 2021 01:15:42 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TvbefEt0kvTqoah336fHvh%2BJB13Q%2FSaEODo1V2ND4p6ACvGj8AiN8MRy8hbqYQBlducotgOzkwlEBjof%2BBI5BpgVl8yyP%2F4u%2BMO5GHRBM8Ee6LXMYpsfl9uNCMQI00oVkvfzmsEmekyIiBA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=9579b797db7e43cb14596b2de72a53b8d849d38f-1634778942; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2e5481eed83-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/1902653125947/identities/390643969431/make_primary.json",
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
    "__cfruid=9579b797db7e43cb14596b2de72a53b8d849d38f-1634778942"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947/identities/390643969431.json",
          id: 390643969431,
          user_id: 1902653125947,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-21T01:15:42Z",
          updated_at: "2021-10-21T01:15:42Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947/identities/1901501313207.json",
          id: 1901501313207,
          user_id: 1902653125947,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:43 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7NVrpESMGCQBf9gN9wx4Dz%2Bv3zQf1s46S6cpQQlmarCLKbsGQdi%2BpD5IoyZ1irbQTJ5vFLykuWMeW7I9tijQs1eGZVKgekmghLEo%2FY7dTfM%2FDD5Ps7sTg%2FJqBraj0xtQ%2BlOuzsNGQhyMoNo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2e6f9d0ed83-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:43 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jl6LWplVVR%2BElKTqr2%2FmKJMRhw%2FHxeJpwsObQ4zS58m0yvNfLLe2lLqYG0EUxMYJLHzZdsWlF6WQQTLmb12fwZrGy%2BDoGDY0EFzIRmsu72GDqGkfODnA80Px44B1BtVpgMv9i8EsSe6NY3I%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2e9fd587104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .matchHeader("content-length", 193)
  .once()
  .reply(
    201,
    {
      user: {
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
    },
    [
      "Date",
      "Thu, 21 Oct 2021 01:15:43 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1028",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HDkdFIAjuxBwLB%2FkDLS9%2Frf31KGJeFTqdDE%2BtMm1gllg4FxW1nRb4fZ4NaWk4XE9r3Vl27EBTlDFvyAaIQjAwYCqKJKnK7D7rXr58IvaojiRWD261xn15vgp4GRmocITEmE64c3JjssiMMU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2ebcfb27104-SJC",
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
    "686",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-7mz8r",
    "X-Request-Id",
    "6a16a2ef69ac7127-SJC",
    "X-Runtime",
    "0.165235",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a2ef69ac7127-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9wf04yio4I9RehO%2BPHl41RfhVcDHSmdxbNzGX%2BoIGC%2FyqB2QX87sdNeoayJ5Lnw9n8pqg86IjjpRT8MHGw%2Fgc7djGtQzrBBneksKqWMla%2BybuyLtk6LrosmQOrbso2nqbq2RuGYxmlRJpT4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=709de53655528f56ef98d34f826925266cc36a85-1634778944; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a2ef69ac7127-SJC",
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
    "__cfruid=709de53655528f56ef98d34f826925266cc36a85-1634778944"
  )
  .matchHeader("content-length", 200)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653141247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-21T01:15:43Z",
        updated_at: "2021-10-21T01:15:44Z",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JzAyPk8PUg7B8OuYn9Ic0DbCJ6aMJRvEAt%2BDqjsbGItk90ag%2BgpYXacLSBCoM6phkG1IYdwMrnOdxU%2Fprnm1UUBJeVDZHTIUpeKNduNGbQJxL%2BqLMhhiBBstcKZ2iBQ5ESaPWXVyBgfg5mI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2f2dd9e7127-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/1902653141247.json")
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
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653141247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-21T01:15:43Z",
        updated_at: "2021-10-21T01:15:44Z",
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
      "max-age=5, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6T07a6u9JJfD2lQpUpTcfXeD7U%2BOQFGen1dX9dYojm3RVMwE%2FQ%2BkPkQpWEqfAxkr74TNZNebEE0ryTJuKHp9GREsF4i%2FU7HpQigMPa%2FRB6w8c43Nm2v%2F4j924%2Bz1HFCx6j1ueYSoqETO%2FUw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2f65edb7104-SJC",
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
    "682",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-pn4xp",
    "X-Request-Id",
    "6a16a2f85b846432-SJC",
    "X-Runtime",
    "0.170245",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a2f85b846432-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
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
    "__cfruid=1dc60522eb29726aaf138748cf698dff264bff53-1634778945"
  )
  .matchHeader("content-length", 115)
  .once()
  .reply(
    201,
    {
      user: {
        id: 1902653141627,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-21T01:15:46Z",
        updated_at: "2021-10-21T01:15:46Z",
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
      "Thu, 21 Oct 2021 01:15:46 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1009",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7fxgxsfprvIvyPdRyeWnzQwKaY7LTAbrY0sy303YxppK7aAV%2F26ZI4MOmmFTVF5UkV938JyAgl4po%2B9FBPGAkm2ruJnFBnmcy%2B4j6VDxgO0CJhBtbPz%2Fmk79uTi%2Bs2BDFIO1SPPxqt7hyQ4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a2fd1c626432-SJC",
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
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:46Z",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oVRFD71s6UB3v8t8aG0YKYUi0TQ9dDIk0dGVhyk3dkO1CMkG3cGvf6f8dM3qTIdAfY77G9EJZLPuCHpkpWY8InZGiRXaByXnIHd%2F66UPgDh%2Ftjg54NrJ9PeaQQaoxOJ3xAGTl94LFx012Rg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a3001c197104-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:47 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GLtN75%2FBstF4CbaLXqyCZDi8c5oW3xLqrhGLT9%2B%2Bk819kkb6mSJXY5wM8x9KfYC4JTsOZnDazwX4r%2FnOkM0iuIDt9YOfc%2B8LEW%2Bum6xOgBeDtJFfhiDqD%2FwD8WgzNZyi1u6T0OD2USDpO%2FM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a301fe987104-SJC",
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
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:46Z",
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
      "Thu, 21 Oct 2021 01:15:47 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e0%2FNEfewzLmI3a%2BT8hY71B7yYTaItavbA%2BJMzEt9p0HkrO2YGwlWOzPVDiDM%2B%2FygQ9u2%2FkmZiSSEIVisAR2g36weXLHKZBrOSmCKnbob4ujroRculz2XiHSidqgIB9Jh39fxKcA9C3v%2B6eE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a30398937104-SJC",
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
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:46Z",
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
      "Thu, 21 Oct 2021 01:15:47 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=5afd250157f7871217af4d3224a5de0f7624767a-1634778947"
  )
  .matchHeader("content-length", 100)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653141627,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-21T01:15:46Z",
        updated_at: "2021-10-21T01:15:48Z",
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
      "Thu, 21 Oct 2021 01:15:48 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5AEIEZP40O13lIZ7Vk3K2%2BXndujpDclGYqBrp5ulOElrB7O2dO1AZRrvSsXt607mOn2V76Tfpi5wlRz%2FgnLqei6%2FfNGGHqqSXMI%2F8N0uz3UGgV%2BcJg4fHUKaYW2YA8UMDQXVXKP%2FGIbTnTc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a3077d0aed6f-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:48 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4aiCRBwfmfMFq1AICGa8nWPq7u3APqNODiZnm2ACLtsjjBT6UuInuLMQcDlAl%2FZE1j25C6ptBK6mZ6DtvKRYYJDnCuEGmQ9qqPmvkl%2FcEFUFibrrFzcWjz67s6dD1cCeGRzZlfl4u4YJKVM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a30a5a847104-SJC",
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
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:48Z",
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
      "Thu, 21 Oct 2021 01:15:48 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zvwvkYhuCl3tcjNcpmOLO5NYAijM3LAXIqMHa4x43OkLYL14HlWqoEL1NqEPFIl4gPg8gLUyy0ho7NMpcw68FQN%2FIM5iy1ItxlQi%2FUvT6Taex1d8oiV40YWkBNN8JQovH8ZE4ZSkNx3yIJs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a30c2ce37104-SJC",
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
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:48Z",
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
      "Thu, 21 Oct 2021 01:15:49 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R1RxhIkBcXu3QsXPS1JrBdBKG32uHKQ9kxpCb95xPLcElgksk%2BLjbCdHhF1POCNXGUN3Rrpm%2BxrFg3SsOy8RVZNz%2BX37Z1FmJvcnEgf1uHz50y66ho3RdUvw%2F5i8XOsMoGzrwbbWS5Kp20E%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a30dffd47104-SJC",
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
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:49 GMT",
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
    "670",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-77cqv",
    "X-Request-Id",
    "6a16a30f7a637104-SJC",
    "X-Runtime",
    "0.171485",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a30f7a637104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ijvezuz1mYvlKNDuH9St3si8xQQ7uto9cTS4Y%2FIk5jJScOsnffDj%2FZ8YwCsnub0okKHCZW%2FSmZugD3%2FHOqWJx7lRlg9MYiUdUDQsoUJb6V6nN4PaJyykE7S6acXduP0oDK%2Bzjy439Lte2%2FE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a30f7a637104-SJC",
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
    "Thu, 21 Oct 2021 01:15:49 GMT",
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
    "669",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-lcwxf",
    "X-Request-Id",
    "6a16a3116dcc70ab-SJC",
    "X-Runtime",
    "0.169988",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a3116dcc70ab-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QvbOvH8%2FweZfNjjU5xLNA4VGP2yeXoftoNGgs1%2F%2BdU%2FfEZC%2BPeTwbeh82zI%2Fd4u1cfMVdsVUD6Yabm2gKmzWwUx1A6pwiksJhHVPkYqcSf9GWRif8ydlCwuQaYDf5JVqjx%2FeYGbkv93ANdw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=38ad34cf8bae7d9aa7695cd686eb65de6c30e228-1634778949; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a3116dcc70ab-SJC",
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
    "__cfruid=38ad34cf8bae7d9aa7695cd686eb65de6c30e228-1634778949"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:48Z",
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
      "Thu, 21 Oct 2021 01:15:49 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XWBmnY%2FU%2B4jVPdBOjhGBVeoMadh41sjnzmZjzeYYmOzqIS26GJqf%2BNREehY7jmiRX6YgEtrwEJbi6dOk8KATriaQmAKMXA83TEzhYV2vhcqVUoy390V1bAEyUkuO42%2BounJNRStm2B%2FvFHs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a312effe70ab-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1902653141627.json", {
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
    "__cfruid=38ad34cf8bae7d9aa7695cd686eb65de6c30e228-1634778949"
  )
  .matchHeader("content-length", 105)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653141627,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-21T01:15:46Z",
        updated_at: "2021-10-21T01:15:50Z",
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
      "Thu, 21 Oct 2021 01:15:50 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K9YreOBFDRPmRhAiITV9%2FbUpsiVbxF2KdKPhqhWNFYQ%2FMkWxPaRD8JMsCuQhcBvUhJNAu45OO9GCfYRAvHzbBCx4qJafYmt%2BLyCmK1q2natZMfTjcXLgPktqBIEfwMpJJNYbRGOnZrvZb%2FA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a3149a5e70ab-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/1902653141627/identities.json")
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627/identities/1901501323527.json",
          id: 1901501323527,
          user_id: 1902653141627,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:46Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627/identities/1901501323847.json",
          id: 1901501323847,
          user_id: 1902653141627,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-21T01:15:50Z",
          updated_at: "2021-10-21T01:15:50Z",
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
      "Thu, 21 Oct 2021 01:15:50 GMT",
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
      "ETag",
      'W/"814588a418b69f439903927a87801195"',
      "Last-Modified",
      "Thu, 21 Oct 2021 01:15:50 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8jGfS40McbpzNpypf%2FdzQuAUe1%2Fl%2F7ulbkGJR0cpNE%2Fm7HbF0XGXUjkXj806aNpFw5vBryBi8DUH71bW8jMHwO5rTXIAKIXE9olE%2BC5YIAdddIpH7NOVCocc9zKcd5DrosbgY3oBYn%2FkrII%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=966030eac2d0ceebb49981c45635acca3a206656-1634778950; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a3180eab7094-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/1902653141627/identities/1901501323847/make_primary.json",
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
    "__cfruid=966030eac2d0ceebb49981c45635acca3a206656-1634778950"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627/identities/1901501323847.json",
          id: 1901501323847,
          user_id: 1902653141627,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-21T01:15:50Z",
          updated_at: "2021-10-21T01:15:50Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627/identities/1901501323527.json",
          id: 1901501323527,
          user_id: 1902653141627,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:50Z",
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
      "Thu, 21 Oct 2021 01:15:51 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wqvhs5zFYRBdi2BtDb1N3yRFZq0DZ4kfTT6KFo91tHodxYUX3SpA2yeKolPgqQdlSrAZFZ6dPhzuANExFjdUQ%2FdrfxDpeNyAXwRxCKKHBE7WWsAndtBYNzoaoIO8aLNcThA9u49R0weXVLc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a319c8d47094-SJC",
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
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:51Z",
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
      "Thu, 21 Oct 2021 01:15:51 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hyhzNYk3Pk9JKgXcFkpiMV4MkZNFhoGZoZ4uQeRG1Eiz70Lc%2BMNfZmSoPd76htQpArFCaQJGLKTMCS3zoITke7AQDJhNSrIKQoZMs43rugHy8HbMClDZJi9BSUDGbQb5aRQwt04J1dJwqWM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a31c7e047104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:51 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xf4BVb%2FzgpfFvJsP7cSwJz5I1tcjyCw%2FP0VBY1yB%2BRX0NfJCoPaHA9DaZew9xgr778cM2oBb7HBohsYLSgjZ%2BJLf0jcrb44Ux0Z%2BkkcmO%2FDuAUtoAs0ykq7KWiGOivdT4UmS%2FV%2Fb4dn2%2BFc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=3314665992bc1b7431497ed1a53898ed2b0ed25d-1634778951; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a31ea8fb6458-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:52 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZV1dfHedvHrMdAq8v9SvrGDTcBC%2Bh%2BdswGccVGkl5WWu7wdgkYQCENE%2BTskWJiqmUEIGq09GUWlce6REZOa1WBoLLnT8QPS0PUOp%2BnNlPV%2ByasMN2n8rmd5X28FLIBch19LvvTZPTWrsRRw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a3209bba7104-SJC",
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
          id: 1902653125947,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-21T01:14:30Z",
          updated_at: "2021-10-21T01:15:42Z",
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
      "Thu, 21 Oct 2021 01:15:52 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=c91e4703e8caac371f8175ad3a0d748130560634-1634778952"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653125947,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653125947.json",
        name: "John Connor",
        email: null,
        created_at: "2021-10-21T01:14:30Z",
        updated_at: "2021-10-21T01:15:52Z",
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
      "Thu, 21 Oct 2021 01:15:52 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PGfqJt2%2FtK6fSulmEvNUujOUtNdftRSdU76JGurSiLe145f0MK566FCevAzzGBAm4NhYoqrorUoNi0U41TavtJsVI9nothooMXte5M1tVZ7%2Bdfsj%2BTeDr%2FIVS519C2GEd0RDE52RGe90vaY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a324896b6428-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:53 GMT",
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
    "659",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-p8gfx",
    "X-Request-Id",
    "6a16a3280efa7104-SJC",
    "X-Runtime",
    "0.160786",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a3280efa7104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZiZcPk9ukm%2FB8i8HgepCKcoVBk4%2BygHl0sjb8YTF%2Bh7a0X%2FASJOkUJhflJorVDk25s06Jt%2FKSGp%2BLfWF0sW74Uiq0hV2lCHkK08pGDdPnjl8WYW%2B5sW6j%2Bm%2BMHyWoeHw3woVkvk3hxqPGio%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a3280efa7104-SJC",
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
    "Thu, 21 Oct 2021 01:15:53 GMT",
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
    "658",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-hn6vs",
    "X-Request-Id",
    "6a16a329e8d63b22-SJC",
    "X-Runtime",
    "0.153465",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a329e8d63b22-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vbPKJddYiEC3JEU9JvZ8FJrfzik%2BHytuKgq8ODwzQVecPP9U45U9hBsADc1AAlgc8DuwU8e4FaIKt1%2FKiMTaxAovdu5ZVdSrDQGpEjdAsMGMObJaW3AroXWE33pBpvMWwTsnW32wNXzPAOM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=7387913690241bfda0df9396b8adc0fa0175e71e-1634778953; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a329e8d63b22-SJC",
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
    "__cfruid=7387913690241bfda0df9396b8adc0fa0175e71e-1634778953"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1902653141627,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-21T01:15:46Z",
          updated_at: "2021-10-21T01:15:51Z",
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
      "Thu, 21 Oct 2021 01:15:53 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=7387913690241bfda0df9396b8adc0fa0175e71e-1634778953"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653141627,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141627.json",
        name: "Bobby",
        email: null,
        created_at: "2021-10-21T01:15:46Z",
        updated_at: "2021-10-21T01:15:54Z",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=74DbYGlj8IShGydto42%2BeDZfyQa65XmlneVw1QlSeNRVFM9PFJYkMjnx425LMqK%2BEHxu9bDjI8hLPPmx7fHccBQUPnCSmn1ghk2u8MONp9SGxZUnT29CpGi3LGg6aS9AtbAjyWxcDNeOc7s%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a32d0cb73b22-SJC",
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
  .query({ external_id: "notgrouparoo123" })
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
  .matchHeader("content-length", 139)
  .once()
  .reply(
    201,
    {
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
        },
      },
    },
    [
      "Date",
      "Thu, 21 Oct 2021 01:15:55 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1031",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10025",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421223243951.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Eb%2FsEHu3ZTJvKZFwytDlnKuXKMuw92juYNj5xppSVMHbtuu4xg%2B%2F5HoOWfwGLufHMNR0bi2IJouJFSktMxnsaqStl6f5CGG%2FA6TcZ%2BjmxLN8z27A2ncXfIEwcCmQee6UrRSVcjkgAPGO7so%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a33508e070fa-SJC",
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
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
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
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4S4ybNjp1wV20pHw7gDC5Cu%2BJ9cqaW3r5V31ddTVtVP2axMJDSzc7KoJFx5z8RTiVQs20IEguYFfvOw4lkkf8bjHt%2BPWMaYRXkpde4jMPquF2DOn2mQRO6PG6P5QnFzIhzZXmAxc7%2FVLsBM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a337be437104-SJC",
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
    "650",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-bbbxw",
    "X-Request-Id",
    "6a16a339e834ed63-SJC",
    "X-Runtime",
    "0.154916",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a339e834ed63-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
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
    "__cfruid=bc39c5137a61c3e0e87f49a2e2d3a291586d6a65-1634778956"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421223244351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-21T01:15:56Z",
        updated_at: "2021-10-21T01:15:56Z",
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
      "Thu, 21 Oct 2021 01:15:56 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1004",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fD9wSi86jkz9sfKuIWntgs4x%2BrWuLhQ5VJ24hDqXCcn0kcinCAgKW1NncaIwsA3PP75%2FU%2Fjy2rTu%2B3jnjGenvmodzma3oNUqgF%2BbGY01ExwifwsOUN1mzgX7U2ryVuUqR%2FBvBmX4Zdwbejw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a33d6b87ed63-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421223244351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:15:56Z",
          updated_at: "2021-10-21T01:15:56Z",
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
      "Thu, 21 Oct 2021 01:15:57 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oJfLaLcuyqC%2F9qC72vzrwrsZV3Sq3z2GV87OXYoS0hCXmpJEuomdJPDPxYA%2FFN0o58EQACn2FaOphMChGDmabQgDWymPydK%2FV06g%2Fa%2FO0wfUl4pf8j7affxx2Yj14pSuSBVUBh9yan8%2BVVU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a3407d6f7104-SJC",
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
          id: 421223244351,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-21T01:15:56Z",
          updated_at: "2021-10-21T01:15:56Z",
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
      "Thu, 21 Oct 2021 01:15:57 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
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
    "__cfruid=150d089e91ddc78199482c6eb4e7e7f10ade863e-1634778957"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421223244351,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223244351.json",
        name: "John Doe",
        email: null,
        created_at: "2021-10-21T01:15:56Z",
        updated_at: "2021-10-21T01:15:57Z",
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
      "Thu, 21 Oct 2021 01:15:58 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pm1zCOcWf3mYifX1I%2F2Ip8ymcSem%2FEc7aeU1U7khZfnVRRyRbGB4nDMjjcogOw%2FhylMEqogSDAxbozpfzbpXm9tWaFnQcSNVOUXfLCaIMvcmNfs8SStlDI7BPEgsVI%2BYStorE%2BtZdr%2FAzUo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a3449c29645f-SJC",
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
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:58 GMT",
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
    "644",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-hsq77",
    "X-Request-Id",
    "6a16a347ef357104-SJC",
    "X-Runtime",
    "0.147773",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a347ef357104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L3rfWWhUigiZcLaavXWxeMvWAoBGvCoxDDXC4fq0Qoa1h7NI6ZTihhRclAR%2B9Bq5thBFZGBuiRDdr%2FfLdvnRHT7yUZBIaiW7ynRUDOLgMavHxUPcZeRf03l6iPSPzQSGKtGPwUimPsudnYY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a347ef357104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
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
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
      "Thu, 21 Oct 2021 01:15:58 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OVEsOGhCnD1X9r%2FoOqOP8BwmeqO8rieO4Pkj8YRKttezqLwNM4gBLZtUYgppCgULuJwmHn2mGPAqBYUxx6s7WwCJMIFD35rzXM1Pb5d0y30VRRYjZVA2Zgc%2FkSOKtRAVS0itr2IIWM4TWdc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a34949047104-SJC",
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
    "Thu, 21 Oct 2021 01:15:58 GMT",
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
    "642",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-8vzct",
    "X-Request-Id",
    "6a16a34b9b01711a-SJC",
    "X-Runtime",
    "0.151475",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a34b9b01711a-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3pXS8INWx9QEjwg0lzRdRycRgJubFD3xfBvI0Dcg%2Bp8Auwr%2BCXrYxlbTc8UYy3FerUJSLXxhELfP%2FT2aUXzPodwcV6W37m%2FbNXtKDkBNrMUTBtkJAWQL0Wa8VOmoPf9bFLc5wYWfzMPQ%2BCc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=524b186d68f8ebb25a9b8d31f477833c736d9355-1634778958; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a34b9b01711a-SJC",
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
    "__cfruid=524b186d68f8ebb25a9b8d31f477833c736d9355-1634778958"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
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
          },
        },
      ],
      next_page: null,
      previous_page: null,
      count: 1,
    },
    [
      "Date",
      "Thu, 21 Oct 2021 01:15:59 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FI6caRqJVZV%2FeIQH63KDPSSFpsQGWuBByfaGIWPrsdzASlxrS4M6EV%2BbQ9Sq5CUB3SJInCM77zGsTypKKk8d2%2BrcOpk%2Blu6MSA2cVRBQeTvdXeANkLagDhrsF7n4uog6PKavZBZ0x%2BBB5Fk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a34cfd03711a-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421223243951.json", {})
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
    "__cfruid=524b186d68f8ebb25a9b8d31f477833c736d9355-1634778958"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421223243951,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421223243951.json",
        name: "Jill",
        email: null,
        created_at: "2021-10-21T01:15:55Z",
        updated_at: "2021-10-21T01:15:59Z",
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
      "Thu, 21 Oct 2021 01:15:59 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7crk8sfBGoRLnui7EARHdTs1Oacbh1CoW0%2B6%2BePA3MxDVVPRJQIVRJ8yiXTh1TQRDA4slNBvVVZXqUHW63a%2BGKKjNXMZQ5d8riTqhPUaOwbCYrc7JNOkwIihemRUWkgqd3TBEUoWHc%2FB3zY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a34f0f60711a-SJC",
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
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:15:59 GMT",
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
    "639",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-kjrl7",
    "X-Request-Id",
    "6a16a3525ce07104-SJC",
    "X-Runtime",
    "0.154847",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a3525ce07104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qk6qZ%2FO7pfsAobvKVkNemnFLVnwZoJCNwx0kmrG86vC6f1vOWKdRM%2F6%2FRw%2B4UVvHSAUpIYsVcc9rfhGww24fk71l4X6Fvl1tGtKXpKl6iBkdYjKpEg7RvPcnQo8gnZZp%2B%2FaCUE0vC7Fwqhk%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a3525ce07104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:16:00 GMT",
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
    "classic-app-server-549d6d8566-nck7q",
    "X-Request-Id",
    "6a16a353cee87104-SJC",
    "X-Runtime",
    "0.162527",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a353cee87104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HvVhaCIgGcrtjln2WWkKH6YRTeXPpgYNiSPwbii8Wjbz0JIh27jvwjSgNxMEyC%2FWFofDz2%2F4KE3ap6oDRBS0auuM9hrtSAPyRIYllwSIXIFRkcbPxsa0%2BYPsE87PPaf1PdNfSICEqPKYU4o%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a353cee87104-SJC",
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
    "Thu, 21 Oct 2021 01:16:00 GMT",
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
    "698",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-vqdwx",
    "X-Request-Id",
    "6a16a355ae700280-SJC",
    "X-Runtime",
    "0.151513",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a355ae700280-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tXmR91fhgnDAB6QokcE%2Bd4dxBAGwC3xHTDU39OGMAxJVMFt%2FaAWLomi8myrChNUzg%2BpDcvQpBBe0FkIrcUGBNF%2F4rOkREZLDQYOt9B00Vgx4ao4BDWvwucrUPxlQ60j77EvrMZozhHfEJs4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=dae65d364bd5117dc6c2d135798584a639132ba4-1634778960; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a355ae700280-SJC",
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
    "__cfruid=dae65d364bd5117dc6c2d135798584a639132ba4-1634778960"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:16:00 GMT",
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
    "697",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-ntsdj",
    "X-Request-Id",
    "6a16a35738960280-SJC",
    "X-Runtime",
    "0.184639",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35738960280-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zmdjL779VyVwAxZqD5HOcJCiGzwDxCq1sHxtfWgZp2PnuHFI3oDBotN%2BPjNXD%2BO13yQquYbNovQJthcaqdgmsKm1t59O9%2FkAVL8vhkGAR20UcxcNiOlmNv3P%2FlvrK1as6%2FBW8E9GN8BQP0c%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a35738960280-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:16:01 GMT",
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
    "696",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-pn4xp",
    "X-Request-Id",
    "6a16a358ed797104-SJC",
    "X-Runtime",
    "0.184619",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a358ed797104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L5gQcQU7U3230bFnX%2FVoIQZlbVod5i3JeMihCmkUBdt3%2B65rsNop3%2FujHO3C0%2FP4V4seZU4%2BRwGvnyX5CQ4EN%2F7t08xhnko8QE9R30JldarsnF%2FUjcX01Ir%2BS%2BwXVptEhCqWG89hvPzmwYo%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a358ed797104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:16:01 GMT",
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
    "695",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-5zjlw",
    "X-Request-Id",
    "6a16a35a8fa77104-SJC",
    "X-Runtime",
    "0.156784",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35a8fa77104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0j4X75MeSMk5s89z2ww2UAXHqSxKstvkmlQXBFtcyD0jB%2BStIVDhhX1q5sZZIfdrC1QqlbykL8K3LRuudQsbIVBehzKKgFaRk1XhtHA6gcbFv66T30KQnX9imJOKnN9V07AFncRZCU%2Fb2DU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a35a8fa77104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:16:01 GMT",
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
    "694",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-96n4t",
    "X-Request-Id",
    "6a16a35bd9bc7104-SJC",
    "X-Runtime",
    "0.174576",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35bd9bc7104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S%2FBFLtTSGdYVbxnsnXn0Tf25H2Rac3hR%2B6V4CrILkjCTK8krBAD7kAFVMhcOJazkiis0YG9HNdyC5h%2FHKIVbtBDdcsldXa5AWkM6ANTmFUhEXpz379ZKeF%2FPxj%2BC7%2FHlAmnkQqVj%2FCj0Y3o%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a35bd9bc7104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:16:01 GMT",
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
    "693",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-jfrds",
    "X-Request-Id",
    "6a16a35d6c527104-SJC",
    "X-Runtime",
    "0.186631",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35d6c527104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5N6xEfjQn%2FRr1Msv7VtNPdPBcWEPD5bGO6wzIjJTXsdkNnuj7Zh3ZsIwmyhdsM0S3%2BxNM4qBcfVjL4HT8%2FFcmRRxSQUYE6F%2BdcMth8hIKNW87tivaCXtTPb%2F3PEab5YZfNmVMvWD5z7lF44%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a35d6c527104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Thu, 21 Oct 2021 01:16:02 GMT",
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
    "692",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-549d6d8566-fl9qk",
    "X-Request-Id",
    "6a16a35efeb17104-SJC",
    "X-Runtime",
    "0.170556",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16a35efeb17104-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5a4n4cidPTuo4xdVtcsWofFmk32I2Jgew9SMwMLGnGJlqiUF1quGoHdz3qax6heE5UcPUXMCJZ0tk2RRhDFg9xJtu8MC%2BLv7lidwi9%2FHFRGXGe1chJ6iPVmkeTlN0uVe4rDVtGsl6FX1Zn4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16a35efeb17104-SJC",
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
    "__cfruid=b19b28b29203cac78f650af8ca43fa414927085a-1634778867"
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
          updated_at: "2021-10-21T01:15:44Z",
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
      "Thu, 21 Oct 2021 01:16:02 GMT",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MjbNF1CQM3fgljQeqVODaTOQtFjBJ%2B%2BBBPgiRYJKrHjITGORjoZQm4VQifM1%2BjrPDJbot%2BOoJWzzry1O4Vw%2Bg4AQ363dBvVYSJwVNWfiTAZJO0nmgGbfT8yBPW5yqCgmax6DFtgilh2xFqA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a360d9767104-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1902653141247.json", {})
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
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1902653141247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1902653141247.json",
        name: "Anakin",
        email: null,
        created_at: "2021-10-21T01:15:43Z",
        updated_at: "2021-10-21T01:16:02Z",
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
      "Thu, 21 Oct 2021 01:16:02 GMT",
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
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
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
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lE5DE8Itabjsr8rvpqxSIfYadJzoUyo2YZnK8iGroLGzkoRCe8RzbdOZT%2FsZrH%2Bt3tuREOxjDCU%2BHlx4vv2Mdj5KF9Yma6bQIQKYCrz8Gokxe2ltRBhDSHn5YBZrUvJpqPZ636W3nPqhloA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16a362abf57104-SJC",
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
