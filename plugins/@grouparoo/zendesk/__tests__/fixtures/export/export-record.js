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
    "Wed, 20 Oct 2021 23:41:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-zgbb8",
    "X-Request-Id",
    "6a161903fc8d3b1c-SJC",
    "X-Runtime",
    "0.169186",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161903fc8d3b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XiGtPLKif2hwVhcm%2Bamhg%2FB5AESw4pYZ0k5Hb8RpY1D%2BoJb8X4FzJuFsGF%2BjwVb8bd4Q%2FaUliNfDSLIQdrZEBGIy7mX5nVYWJrzVe5DClqub4fhAukw1guMVoaiEr4dj0tBSCS7taoszd9w%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161903fc8d3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:41:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-pbtx2",
    "X-Request-Id",
    "6a161905feb03b1c-SJC",
    "X-Runtime",
    "0.176604",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161905feb03b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cxaBG1j9osBzZlPpIwjpyQV7SFuD73qerCUXNFyMOo5gP1HY8vlEAUJTNCjlopgqSEFSssVSNxkTG7W%2F3%2FvxeGPNjpx4%2BAVxTJNwMdcvwHN4CQ6FJIq4nbsouWz%2Fms6V7Qv1MvZohVxufQ0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161905feb03b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:41:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-8znpp",
    "X-Request-Id",
    "6a161907a8573b1c-SJC",
    "X-Runtime",
    "0.170055",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161907a8573b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fLH8NcU49kW9vyZLnz9kfLgZCWsOLwjIJQFIHLpXYw8jNgtKdPx6s8aPqbRkOgxCBgZgRJz6Ydg46qgeC5zSf0FEaN2WkM7N%2FESFzNPogp%2B4PZeeOtGvFDlqGJef6RRwhOX4cwrI6fuBg3k%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161907a8573b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:41:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-67kgc",
    "X-Request-Id",
    "6a1619092a123b1c-SJC",
    "X-Runtime",
    "0.173527",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a1619092a123b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gs%2FMw6n%2BZbQDzjNKIXtRz7QzZdboJyKgRXqkAlGaak6nAUQlEG48y9X01kR0Ase3gqFClLYHM1lVGLV3uTiU547VZFpscomtynkk5h0MjEW5KMJzN9zk%2BOsd4u4mk1%2B10KDHKqk4jvQKrdQ%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a1619092a123b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:41:36 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-zksgs",
    "X-Request-Id",
    "6a16190abbab3b1c-SJC",
    "X-Runtime",
    "0.168662",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16190abbab3b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=M%2BNinMRCWtP6lKVAPosqUKQx5vMIXL3Jv9Vb2HRoZquKEPh5p21yXLMwF0cEFoICoL35HhcuSDlGEATMI%2BhV6dyiibqyBANqHdiMk4gANBIwnSPDHloiyLhVbSNMmp7hPtqFeaqdwbZFtoc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16190abbab3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:41:36 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-cg725",
    "X-Request-Id",
    "6a16190c2cf23b1c-SJC",
    "X-Runtime",
    "0.163515",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16190c2cf23b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MTYKO2PTw%2F1w3Nv0Gbqr066uxpSUHFflD7hPTs%2FfwIbQDKjrMf2tJUx69Ed9vsfKYAHXDtCWF6FkwMD3P0uJZ2C0E5n%2B30yz94j5soyf8W2oaVJSoL4K1XxNBKfznM5K2h7Mmlvw4wrLxsA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16190c2cf23b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:41:36 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-rzr2d",
    "X-Request-Id",
    "6a16190d9e933b1c-SJC",
    "X-Runtime",
    "0.191145",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16190d9e933b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=62f5q%2BZhaCGOKCYrFO%2B8NAIJHmSimbzIetkAhPadGTwge68bLEpeIVHDXZRr70V%2BnabW3lNzjtNsf2mVpic%2BecshO%2Bow%2Bbx1OVdgHtPmjtP6KgcgEdGbhCVjNJYMQU2UIIzhMLulyZLyWGc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16190d9e933b1c-SJC",
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
    "Wed, 20 Oct 2021 23:41:36 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-xmbhv",
    "X-Request-Id",
    "6a16190fdd3c70e2-SJC",
    "X-Runtime",
    "0.154721",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16190fdd3c70e2-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ShML%2BGofTI1iAk277Hp%2FWHOyuFxE9ScuR56E5HqMei7vM2Z%2Bi7pziZiCYEZ75czpD3AYAaSQcJ%2FQyA8i66HWAHBw1M5h6VLvxgQ6rvUYP3LNC%2BQw%2BYaIbv7aRtgmmT7C7sPsL69hIcl1ceA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=4f462b9b2f45eb8c05980ad0672b123b134f085b-1634773296; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16190fdd3c70e2-SJC",
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
    "__cfruid=4f462b9b2f45eb8c05980ad0672b123b134f085b-1634773296"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:41:37 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-fmvsq",
    "X-Request-Id",
    "6a1619114f0470e2-SJC",
    "X-Runtime",
    "0.183819",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a1619114f0470e2-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9Kci4l71E6u5zD6NuY5%2FI9xEIl%2FYOUU3fEdNbqIISGhboWyzjdSbsq3QME7qk%2F08DTYVj%2BoDh17B8G1UWGrkDn7fdXqKPi18SY5DXwldtMQ4ZjwUYEqTot639V9NJslxkB3ocsm1IesxDP8%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a1619114f0470e2-SJC",
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
    "__cfruid=4f462b9b2f45eb8c05980ad0672b123b134f085b-1634773296"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:41:37Z",
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
      "Wed, 20 Oct 2021 23:41:37 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1004",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"81666a3804e90cf22a84a926c4f587b6"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-wm6vp",
      "X-Request-Id",
      "6a161912e8cd70e2-SJC",
      "X-Runtime",
      "0.429236",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161912e8cd70e2-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YFn5EUQ0deh1kKl93M%2BU1cxDVPCWdQT9l%2FE293aUiZnXsBYMSbuUMZO0QupUfgdPDitK1Lt1MMmp%2B5%2By57SlumEnvb%2BYNL%2BOP%2Ff3T2IIEg0PoIrJsjcP2uKndDlK%2BLihzPiX04s3dt%2BcGnI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161912e8cd70e2-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:37Z",
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
      "Wed, 20 Oct 2021 23:41:37 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"602ce6e2f900bb6a34e723a06b03d570"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-25rsj",
      "X-Request-Id",
      "6a161915fff43b1c-SJC",
      "X-Runtime",
      "0.182007",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161915fff43b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=G3BkxI17VGt6NZquq0QO1dzXQ9nbtRurJQ0p3SGqiGeBQrJcdbiZy96H6d1MuJJNqx3uEwzJI%2BW8bXhr7kBaeKDNb2eaGcb2f%2F%2Ffbx69TFKBE1rfoqNcJZ6qsBSgEZVKkmT8QyNFrQvy3K0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161915fff43b1c-SJC",
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
    "Wed, 20 Oct 2021 23:41:38 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-jrf6w",
    "X-Request-Id",
    "6a1619188c4a709d-SJC",
    "X-Runtime",
    "0.159301",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a1619188c4a709d-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qjt%2F4UV2bVTU%2FrH2WhsQoTZ2MDKeeaHerOMXKM5DR563UYG2qWKMIKclDD3o9rZd6hnF5sIVX8MNfxmkJMVstkKVMvnkbGl9wtrWwUFHoTlnsZzPBlULS4FzVIpKhi3lSQ167Vb4mZgEQhc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=cb6020885d8c83b6e8941fc431c83a5b70738cc7-1634773298; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a1619188c4a709d-SJC",
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
    "__cfruid=cb6020885d8c83b6e8941fc431c83a5b70738cc7-1634773298"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:41:38 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-ms6dm",
    "X-Request-Id",
    "6a16191a7e19709d-SJC",
    "X-Runtime",
    "0.172056",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a16191a7e19709d-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0bUGVBh55x6vNAGku7v9FaweQXg17vhKoEyuO6wgrTyvva8h2Q5p8fh3xSoj3QMXT2NdlVAR%2Bf7opXwBrpuYauSGy4NNNxPmilW1oIGpmVVVePFKkBOh7u2KMJ7RFPWikIQQANECfPt7VpE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a16191a7e19709d-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:37Z",
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
      "Wed, 20 Oct 2021 23:41:38 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"602ce6e2f900bb6a34e723a06b03d570"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-vmnd9",
      "X-Request-Id",
      "6a16191c6f65ed13-SJC",
      "X-Runtime",
      "0.217452",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16191c6f65ed13-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u4RD00NNIkvFhWDIWsmFHo%2BWzcVsJOusjcjATkCnxKtm5NFuNWLQL87rGO%2Bzb4BpXeYOWoyFWhMUOfZ1vhbseO7XXGUYDK3%2F8uNJnBb7Uav6yHmdZNJQwBOVsgBSpETv3Yx1jLQk6YkbZCU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=cb6020885d8c83b6e8941fc431c83a5b70738cc7-1634773298; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16191c6f65ed13-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=cb6020885d8c83b6e8941fc431c83a5b70738cc7-1634773298"
  )
  .matchHeader("content-length", 209)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:41:39Z",
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
      "Wed, 20 Oct 2021 23:41:39 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"dd7716377c0a229cd6e6b8ad219f112d"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-qbgbz",
      "X-Request-Id",
      "6a16191e4908ed13-SJC",
      "X-Runtime",
      "0.430646",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16191e4908ed13-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BTUjLaak%2BQyLOQGlPT5uL%2FliJkR3whvLp0h%2BWJJmeA67DfyWJcwMfFwVpPGcMajsCN4ReWNcENNpSV5moyZcoGtXvItowmNrBnyGTOezVQh2On77FmuHxryardbv3aWYi9D%2FVUZ60Uhz1Ks%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16191e4908ed13-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:39Z",
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
      "Wed, 20 Oct 2021 23:41:39 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"6e957f20979823f4f824a88aae912eaf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-6wmgp",
      "X-Request-Id",
      "6a1619217e773b1c-SJC",
      "X-Runtime",
      "0.231987",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a1619217e773b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uRTnPBklxhP4r37Q7LlToHoNzKd6jCrQ3zW639%2BqH3328k6EdSeDBdDuWxotd6w2Q6E%2FeQHUw8DKostShsZK9rPRKj3I%2BlPo4JoKbdL4ulJRcnoFCCHO7wTDHMHlZp9%2BDCVglXT6c%2FCzoIA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a1619217e773b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:39Z",
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
      "Wed, 20 Oct 2021 23:41:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"6e957f20979823f4f824a88aae912eaf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-6fngx",
      "X-Request-Id",
      "6a1619244b396440-SJC",
      "X-Runtime",
      "0.196363",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a1619244b396440-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xIj8nPtpUc2%2BZGdNO3G4Dkt2gthTEo8irDMzicB5Y%2BIK9WM2KXg6WGciKuB%2BmlyKR45IYzqoAyrTKasFC1wZT3r5w3s2nVThMnwaImH76VghaMVzJoM5CDmeIy8BWnCzfGA44doObELW28c%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=871d6579acbf6950ec77b719845c3157ed022855-1634773300; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a1619244b396440-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:39Z",
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
      "Wed, 20 Oct 2021 23:41:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"6e957f20979823f4f824a88aae912eaf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-zksgs",
      "X-Request-Id",
      "6a161925fb5b3b1c-SJC",
      "X-Runtime",
      "0.217468",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161925fb5b3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1%2FWRVhiui9QcPXDxMDIzbyO%2BW%2F3LusegHOw1oOK4%2FeZCv1Ca5mYoAOJ412qmSQuWoC2d90N9w%2BhRPUdsSE8ohpRZeFKYCMxj9zxu6tMXvDWH1ywv07HOE%2BTIknkfvq737cXwqlC3paBnnho%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161925fb5b3b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:39Z",
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
      "Wed, 20 Oct 2021 23:41:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"6e957f20979823f4f824a88aae912eaf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-vbvmn",
      "X-Request-Id",
      "6a1619281d006426-SJC",
      "X-Runtime",
      "0.191577",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a1619281d006426-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c%2BUQmUpWhEdtophYl6AU6Im8wvvMmW1jbDSDaTmGQLSHORyJvOn%2Bl3uBag0E9GLFppilcxeoX2y16bBZNIyF7%2Bw3UEGv%2FgihwawL1gBEr7HF8q%2FRzNTCkQoUqrptYcWsjcIrd%2FGpvIxU2wE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=871d6579acbf6950ec77b719845c3157ed022855-1634773300; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a1619281d006426-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=871d6579acbf6950ec77b719845c3157ed022855-1634773300"
  )
  .matchHeader("content-length", 231)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:41:41Z",
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
      "Wed, 20 Oct 2021 23:41:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "680",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"c429a1a1b339bc36d276f7be38bd895d"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-8rwqj",
      "X-Request-Id",
      "6a161929d8526426-SJC",
      "X-Runtime",
      "0.381906",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161929d8526426-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vupEWL6Ix4p%2FiDwsplOjWwdtNazpVkkrCs5zLTRV4zc8PxxdRa7%2FMVitpPv3EH6jCu7l6wJoOToMaYjDkrwX196Hup0Z5W8ZBMeYv4kLIuBBpUPIhpmLzYK2dRE%2F5ABqvN70EP3iaCNAA6Y%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161929d8526426-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:41Z",
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
      "Wed, 20 Oct 2021 23:41:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"19e20dd2d03896e550464a5c38ceb4a5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-dkrbt",
      "X-Request-Id",
      "6a16192caa8e3b1c-SJC",
      "X-Runtime",
      "0.215570",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16192caa8e3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F3qGfhFh1BStawArrRcpV8lEqCqsr5NlnlLaQ4Z2qZOtNT%2BtVq1NmVIVaMxY%2B5KALmsb6tpgP0ZGzJznfkHCLsGgEX12M9c608lDVNPOWyy%2FqRpwofAp9AdoUGQs9M6NaNaPJVcSKebHS70%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16192caa8e3b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:41Z",
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
      "Wed, 20 Oct 2021 23:41:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"19e20dd2d03896e550464a5c38ceb4a5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-c66z9",
      "X-Request-Id",
      "6a16192eefc57120-SJC",
      "X-Runtime",
      "0.208810",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16192eefc57120-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QYvKKo8C%2BGWY8Fyu4Qgskj09Z8q%2B2fvSqzYkCoSe%2FfKXM647P8xF5a7kGTaISsSS6wyaRg5%2BJO0Yhksdn19v40fOKpIH7w7mgpqfc8pAnikjGYejUJDcDvqdK9LVgAISyJKJhexieyPHX28%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=efb4bd30724da9909f16bc8fd6bfcc09ad242408-1634773301; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16192eefc57120-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=efb4bd30724da9909f16bc8fd6bfcc09ad242408-1634773301"
  )
  .matchHeader("content-length", 201)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:41:42Z",
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
      "Wed, 20 Oct 2021 23:41:42 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "677",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"1c1c5f9c9c68b824e641b09b8db41352"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-hkhcn",
      "X-Request-Id",
      "6a161930c9f57120-SJC",
      "X-Runtime",
      "0.372505",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161930c9f57120-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uwtRG8YnXkqMuyehM61INh5FGJoqIVKqEkpmkLg5Iw%2F368e3YZ3%2BkfgDxHELc%2F46mhkSVmZDE5ilAMrGh%2Bksyseyub%2FOlb5sXUflqj3ZLADH4cDlPQjlJmHlf5x%2Fc1bGpY0y6Q9qZvECzIc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161930c9f57120-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:42Z",
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
      "Wed, 20 Oct 2021 23:41:42 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"95aea56aff088e84b13b275b9c1b7d18"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-nd4pt",
      "X-Request-Id",
      "6a1619339a213b1c-SJC",
      "X-Runtime",
      "0.186792",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a1619339a213b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K2C1yoHP0sWoAdIyWF2yWe%2FOLxjqjqNobJIrzxUxb62Ee3kRBESJD7H5Kh6wa76g%2FC2Fy6Yyc%2Be8P8A0SqpsFDMMLzeRMpp8kStZj8H24782KndGDv5s%2FwHQiIg68zUh%2Fbk3FhJWrItXadw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a1619339a213b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:42Z",
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
      "Wed, 20 Oct 2021 23:41:42 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"95aea56aff088e84b13b275b9c1b7d18"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-cfkgz",
      "X-Request-Id",
      "6a161935cbfced37-SJC",
      "X-Runtime",
      "0.218428",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161935cbfced37-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QRmThv33oLWkFaPbNd7poOy2Zd1OBdQOLfZNHDis%2FtjUgPTP2po5cYrVju9zIYAi0YCrQRFxx0YDP5NVrCuocPfcQ0IhBoMNXOwt9CzoBf5TjAEZHR1K0O24qtVv0qv8rGPfQxlp93cp858%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=323f8fac833c54ec1a14a79654bd21eda5113c9f-1634773302; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161935cbfced37-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=323f8fac833c54ec1a14a79654bd21eda5113c9f-1634773302"
  )
  .matchHeader("content-length", 135)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:41:43Z",
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
      "Wed, 20 Oct 2021 23:41:43 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "674",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5d316de11cbd44422db2911efcacdd2e"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-bpflc",
      "X-Request-Id",
      "6a1619379d65ed37-SJC",
      "X-Runtime",
      "0.378478",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a1619379d65ed37-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XVdmtnCBqws4HtT2LgyGjrkniTAn3maCgJCbeZeaOTuhuawvikc0%2FPsf8LbBQ4DXb%2Foq29FvR6o3ibhyTyVNgf%2FzknOQ%2B4woyTJLAI%2FWIvXEAZGuJ%2F5G3Evnv2Q6lvE3oS8RuEjdZahH4qA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a1619379d65ed37-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:43Z",
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
      "Wed, 20 Oct 2021 23:41:43 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"1f9017d2f7acfea70149805511d6a4b2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-fs8f6",
      "X-Request-Id",
      "6a16193a793d3b1c-SJC",
      "X-Runtime",
      "0.205575",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16193a793d3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BdrT%2B5CdNxxkvFyNwapOZkxhI8OvanqTwsCRF6anZtVN5ZmJuPMW19vAu5uKFd9vAeFaf2aNXueX4yHd6dC5mnZjOaHcVSW3xkypqfjL2UjgiioG63NXfVHcylyuZ5gfUQQHeNAr8UWhMAg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16193a793d3b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:43Z",
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
      "Wed, 20 Oct 2021 23:41:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"1f9017d2f7acfea70149805511d6a4b2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-8skms",
      "X-Request-Id",
      "6a16193ca92270e8-SJC",
      "X-Runtime",
      "0.186119",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16193ca92270e8-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=m1WniwIy%2FT4V35VJQ2E47zqqpWgBaf%2FiltZc1t7BiI%2BcUGoHAieifUgsNQwQ9hppt5%2FGd%2FJ%2ByC8wAyNw3W7xtknVkvEY7tuwDuAiQn4jDmRwBxqw1EYaH93uzbSz4dPr89Qkx42zVKZd1ik%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=74d0c087074d2e0f74c793788f4aa3011b233ed5-1634773304; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16193ca92270e8-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=74d0c087074d2e0f74c793788f4aa3011b233ed5-1634773304"
  )
  .matchHeader("content-length", 111)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:41:44Z",
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
      "Wed, 20 Oct 2021 23:41:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "671",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f4b584189f1ccc1e6d91efa6b367338f"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-v9kds",
      "X-Request-Id",
      "6a16193e5b1370e8-SJC",
      "X-Runtime",
      "0.361370",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a16193e5b1370e8-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BJyKSOK1pTQUJ3VBC71r5W0DDPYilg2B32I49zMYbvvpNb91f5YmX4vfIcvj6Hx%2BECr532%2BEFbZYnfXIJVztOvjq5wJSK1N1agGiIeYVdMVWj%2BXC8ztH%2BTYXozRLMmAK49PN%2B26jv2lxRyM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a16193e5b1370e8-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:44Z",
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
      "Wed, 20 Oct 2021 23:41:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"dc781f00de75918c8c8613f778baaaad"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-9prkg",
      "X-Request-Id",
      "6a161941186f3b1c-SJC",
      "X-Runtime",
      "0.198778",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161941186f3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VNri6UwaHCgp35MVE3L0IswcZ2xZhIONel9TDXGRUv0nDI8zOv7ITNnQHDMtvqbbDvxOjtywxJ2cLippU7Py4heVlPpw7tFI%2BzgU925L4ZXSEhPBMMb6fQSjIiR7q5iFLDAEhTHFKTAZxBY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161941186f3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:44Z",
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
      "Wed, 20 Oct 2021 23:41:45 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"dc781f00de75918c8c8613f778baaaad"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-9shj9",
      "X-Request-Id",
      "6a161942c9fa3b1c-SJC",
      "X-Runtime",
      "0.214103",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161942c9fa3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W8Dog88fIYFiFgy0ZKFcDgLeRlOHVunRRDZYcr2v0Uo7HidQTzUk5XwR2769w8ySGQ7fJQbVre%2B%2FoVc3EXz0ReeIKm%2B5iv%2F7K47saPvBXZ48z64XEEuDX5jghitgrrOdO31jYBl5tiTVXnE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161942c9fa3b1c-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .matchHeader("content-length", 48)
  .once()
  .reply(
    429,
    "You have exceeded the rate limit for updating a single unique user. user email:  id:  external_id: ",
    [
      "Date",
      "Wed, 20 Oct 2021 23:41:45 GMT",
      "Content-Type",
      "text/plain; charset=UTF-8",
      "Content-Length",
      "99",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Retry-After",
      "15",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "668",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "Cache-Control",
      "no-cache",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-j2l2t",
      "X-Request-Id",
      "6a1619449be43b1c-SJC",
      "X-Runtime",
      "0.178646",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a1619449be43b1c-SJC",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lwWjMDNDQPufpM5VgUKvCSwo%2BHZFUHvvCDoFDW7M2Rb0eBYyOmWmqSCUsGx30IaMOBUQdOPs7IwuoqDWG65Xm00uD9eu%2BIs0e7kdcqbOtrCF18Ifp7mp7%2FWDLy0Z4BkpH4BsVxMRudJV%2Fws%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a1619449be43b1c-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .matchHeader("content-length", 48)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:42:20Z",
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
      "Wed, 20 Oct 2021 23:42:20 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "699",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"98cb65dc62bb4d43bd0ea867770b0b5f"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-6b46j",
      "X-Request-Id",
      "6a161a20e89c3b1c-SJC",
      "X-Runtime",
      "0.370460",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a20e89c3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=st4%2BZTZtEwzx45udsexUGsezhKmnxTNylNt3hOUXJfeo3dLOU1WnG1YIPzLgWB3Y%2BDSee7lzrnGEMUK%2B5ob%2BUAjT%2F%2B2B4SFCnRs7V7HjPfXvZzCNMh3fApZ%2Ff30OSLlUGve%2FgrBjuUMtZLM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a20e89c3b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:20Z",
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
      "Wed, 20 Oct 2021 23:42:21 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"86ce576a33fdfed062cec15950101637"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-qv9hd",
      "X-Request-Id",
      "6a161a243fb41fc5-SJC",
      "X-Runtime",
      "0.218434",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a243fb41fc5-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oKIQCDQAZD46bWIPPNiZhrJYGVRbk39Nka4P%2F68HYCsd7meRLkBVVFeSCpuezJYWz65SeYoq2lE%2FQVL5yskOuv6ZW%2FydLLtSUIZhRgcPc%2BO1Vf0fd%2B%2BtbfqJLDu3h5oOEMargyLbJdaOmtM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=ad801abb16c012d2822decf384c77e99958acd8d-1634773341; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a243fb41fc5-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=ad801abb16c012d2822decf384c77e99958acd8d-1634773341"
  )
  .matchHeader("content-length", 144)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:42:21Z",
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
      "Wed, 20 Oct 2021 23:42:21 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "697",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"134754f7881d9a225e53c30524bdb22b"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-992nl",
      "X-Request-Id",
      "6a161a262aa51fc5-SJC",
      "X-Runtime",
      "0.396135",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a262aa51fc5-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aH0EEjFMijhLy8bnt%2FxhDn01QyOy15yv%2FD5kI8Wyabi1NlhH3JD8C6gNzQ98qrcF6wVknKDwvOzCfNgyxG79HJMAq5m1dZjSPgxWg98tSFQiaSDdTuFMYME5FBe6hxMFPeD3v7iwrO%2BSvLk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a262aa51fc5-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:21Z",
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
          tags: ["test_recently_added", "test_high_value", "outsider"],
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
      "Wed, 20 Oct 2021 23:42:21 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"31bbd6371f6adb89a63883403847c2c5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-lgnrf",
      "X-Request-Id",
      "6a161a2929db3b1c-SJC",
      "X-Runtime",
      "0.241416",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a2929db3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=giZetmOyO8EIcZCRNU6Q8FVIOxg3AQecnB4bMoT2Q5Beo9VXdNmgoVVw2vMtzDejCokT4a%2B%2FjfgJUukufAwYPRTg9Q%2FsQzNpy8VIGbgL9410eN%2BYn4rQUOKFrf8B8Aljuh%2FIQ4cYfkh5Kqs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a2929db3b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:21Z",
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
          tags: ["test_recently_added", "test_high_value", "outsider"],
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
      "Wed, 20 Oct 2021 23:42:22 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"31bbd6371f6adb89a63883403847c2c5"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-4rpdd",
      "X-Request-Id",
      "6a161a2c186b7126-SJC",
      "X-Runtime",
      "0.220183",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a2c186b7126-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3dcw8%2F6Sry7ZMbx7vRt6MsJp6fx62ZDgtpmkxONXqKhOj9EXnViOeTcdtX4Oi2rVRl6fEhQTprAW3d12%2FVyhhBIs%2B3IhMrGcs1cPN4kdQv9sAElQv4PzulgRnyCMdHOTT0AtJxmv%2BU7a1%2Bg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=aaf803b74651355cec468a059a6c4b240693b120-1634773342; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a2c186b7126-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=aaf803b74651355cec468a059a6c4b240693b120-1634773342"
  )
  .matchHeader("content-length", 104)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:42:22Z",
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
      "Wed, 20 Oct 2021 23:42:22 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "694",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"e46e17452e0f9299b2a0dc8576f9c601"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-b98cm",
      "X-Request-Id",
      "6a161a2dfb087126-SJC",
      "X-Runtime",
      "0.307575",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a2dfb087126-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=caOuzM%2BFxyBJIpqG4%2BygJZulkiAnt4NWG3gt1lS4SAzimQRUkMyxhoYkO2vGmfmT6G2wz5K2JFZHmFJ1qvNfhGrUSg3sbXbJ1uP5JYy5WwcWCEI0QdQrRqDAeGqo2WYOX7KdTOdO8m3PqFA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a2dfb087126-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:22Z",
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
      "Wed, 20 Oct 2021 23:42:23 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"96c0539ec1bc83f8ffa7ad6e4fc639be"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-fhrjm",
      "X-Request-Id",
      "6a161a306a993b1c-SJC",
      "X-Runtime",
      "0.207373",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a306a993b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RfSytiv4nCbUCQYnjrNjF7lbRjWgiqjRQsqCdKcM%2B35oeaEexquyd1RI6CxLTW%2F%2Fv8n6z5aqeNqOuJqO21RSSIRET96ZT%2F746GFDgtuXfetOBFeFTZx0JWxjCtKiFkC9ADU4atJ6XuFNnjM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a306a993b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:22Z",
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
      "Wed, 20 Oct 2021 23:42:23 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"96c0539ec1bc83f8ffa7ad6e4fc639be"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-qhbl5",
      "X-Request-Id",
      "6a161a32ba3e0293-SJC",
      "X-Runtime",
      "0.217604",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a32ba3e0293-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4G6Kcz5734iSqoa99d1CRxHk7l2eI1fCUxRyg5YK0NVgLYW8jUG45d062CvF5KD%2B%2BPjLB02SgvfdL17usSyLJGi9KBnVioP%2F0UU2eLmOnmV52F7%2Fq1o0rD5PjkyUrMA2oOtcTHiqONC6aYs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=9627bd18e746931f8c88085106752b986df031ac-1634773343; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a32ba3e0293-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421047662332.json", {
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
    "__cfruid=9627bd18e746931f8c88085106752b986df031ac-1634773343"
  )
  .matchHeader("content-length", 116)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:42:23Z",
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
      "Wed, 20 Oct 2021 23:42:23 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "691",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"b111f22cc834f1e00d1062fbca4faf5a"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-jrf6w",
      "X-Request-Id",
      "6a161a349c590293-SJC",
      "X-Runtime",
      "0.398149",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a349c590293-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=76FcggYe6rNhXqHgbwjzDpeAcMchCTr3DW5Q8OX1c1%2F16NJbukKIp2gz%2FCPRSqiLeSvAQt0JN8IBzLPN4DaIklIhCzmzTwJggO69g%2BZysTNry%2FR2%2F9wWte6j%2BBujfYt2nvicGX77KaV2gtI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a349c590293-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421047662332/identities.json")
  .matchHeader("content-type", "application/json")
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332/identities/390640500732.json",
          id: 390640500732,
          user_id: 421047662332,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:41:37Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332/identities/390640507212.json",
          id: 390640507212,
          user_id: 421047662332,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-20T23:42:23Z",
          updated_at: "2021-10-20T23:42:23Z",
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
      "Wed, 20 Oct 2021 23:42:24 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"7e002c3a7083a0b57c21ac5dccbee92a"',
      "Last-Modified",
      "Wed, 20 Oct 2021 23:42:23 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-tkrm5",
      "X-Request-Id",
      "6a161a386c740fcb-SJC",
      "X-Runtime",
      "0.187370",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a386c740fcb-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vvRSSvGDu6t32HUuDsxN0xUf5lpdgKUaYjFeotNj7oJXLcNscsw20kbLXUa2tzqiXeDTuvu9mGmlsVjva1EfiuweZ4msudk4A5XVDUOLz8NYEstX9JWdJJzjSwFuknP%2B7kOBzF9BOWMkJ7U%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=1e70cea43da981bf17e9b0f76a9cbf2ae46a930f-1634773344; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a386c740fcb-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/421047662332/identities/390640507212/make_primary.json",
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
    "__cfruid=1e70cea43da981bf17e9b0f76a9cbf2ae46a930f-1634773344"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332/identities/390640507212.json",
          id: 390640507212,
          user_id: 421047662332,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-20T23:42:23Z",
          updated_at: "2021-10-20T23:42:24Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332/identities/390640500732.json",
          id: 390640500732,
          user_id: 421047662332,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:24Z",
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
      "Wed, 20 Oct 2021 23:42:24 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"a993c64391112e3c8f4ed66a08385d14"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-ls9fn",
      "X-Request-Id",
      "6a161a3a1e510fcb-SJC",
      "X-Runtime",
      "0.456073",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a3a1e510fcb-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=box%2ByGi5P%2FRtytgM9BYQ5uSMnDmm%2Fud25GdBg%2F2bdosQgGJ1KBPzUbwfhOPafXn9d1WvDVH3Hxwl9rcItxRbBPAbUo5iESdw%2BfsD%2FlvAOFhkE8P7NVyuvDJhJwLv4Tl16LKDRASlm38QIKc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a3a1e510fcb-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:24Z",
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
      "Wed, 20 Oct 2021 23:42:25 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"a1fa214e35b84581d5bac4862e7a89a1"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-ztrsq",
      "X-Request-Id",
      "6a161a3d69c13b1c-SJC",
      "X-Runtime",
      "0.228183",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a3d69c13b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x12tzsK1AOX8nvLWg9YKyivQ8hHh%2FhHm8ZICWy2m0ru29%2F8ygcZ7f11hM4P2ChGFpGmDVF0EXpX4N8G5BvEbLSDEKVwUq8n%2FgaB5qfiovnWta3axIeawdoM%2BKHr0yKXOnywop7R%2F3nPBGSY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a3d69c13b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .matchHeader("content-length", 217)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421222209471,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209471.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-20T23:42:25Z",
        updated_at: "2021-10-20T23:42:25Z",
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
      "Wed, 20 Oct 2021 23:42:26 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1050",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209471.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "687",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"eee81b4885b7f7be447a0244b378b845"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-2vrhj",
      "X-Request-Id",
      "6a161a3f6c5d3b1c-SJC",
      "X-Runtime",
      "0.747353",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a3f6c5d3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6MHf%2BrYlF1gVv2i%2F58epYqYwyp2H8oMPlqilry7dOg6tJBxmVR9lMkjJg%2Ba5EBSXxlVmawMDZWdQuYWqaKwDHHIZxi0b6jGxzOv8UaS1uyEjuY0n0oEsrIG6cSy%2Btgqw0WyFyw%2BUmzaNp3c%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a3f6c5d3b1c-SJC",
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
    "Wed, 20 Oct 2021 23:42:26 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-fs8f6",
    "X-Request-Id",
    "6a161a453a953b4c-SJC",
    "X-Runtime",
    "0.174682",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a453a953b4c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z3AXm6zs3CpRpCeK8YGUQ7DNnH0CcUCGqIJ8K5UVpyMdpnkrrU6OlxYnPpr3%2FVhKxqlpE5WC5KmKfjOHGjc2o%2BRLXUcZgzp1YCiRjNXW1Ph6SZ9kGQjrCDQXxvJd2U9Gw8AExjHwv6D%2BSRg%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=0b75eb97aeb7fc941da9f8c1f625105fdcb61656-1634773346; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a453a953b4c-SJC",
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
    "__cfruid=0b75eb97aeb7fc941da9f8c1f625105fdcb61656-1634773346"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209471,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209471.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-10-20T23:42:25Z",
          updated_at: "2021-10-20T23:42:25Z",
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
      "Wed, 20 Oct 2021 23:42:26 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"8e58cc996d2353501cb92e6989ee12c3"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-9prkg",
      "X-Request-Id",
      "6a161a46dc3a3b4c-SJC",
      "X-Runtime",
      "0.198477",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a46dc3a3b4c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qorSoYt9O%2BANDyZI6OuXDM6YWqNxspbTcnH37SuVtVB4xbPjrMEafGflkhqPM9PI3TjP2dVHpz5Tzm4%2B1DTc%2BAMtH3vU1M%2FaN88tuYDVQ%2BQYFsq4NJtWxGEse%2FtymVK6j0igqJyVFwzkYpI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a46dc3a3b4c-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421222209471.json", {
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
    "__cfruid=0b75eb97aeb7fc941da9f8c1f625105fdcb61656-1634773346"
  )
  .matchHeader("content-length", 224)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421222209471,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209471.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-20T23:42:25Z",
        updated_at: "2021-10-20T23:42:26Z",
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
      "Wed, 20 Oct 2021 23:42:27 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"771c451a78e35030574b10ecec356a34"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-mlp4f",
      "X-Request-Id",
      "6a161a48af643b4c-SJC",
      "X-Runtime",
      "0.389581",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a48af643b4c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EC%2F4n1Ti0k8ZJQIJQ6KSZmmIo7doJR%2Boy0yvH%2B1rF%2BWEQkwGZjcnpp8uxUYk7a0uwZjLxQv9Crvjd1ZRw6JoOVrHKGPhvPP4PVQWEhQKZltclEaqPBZ7L33uCPxjRhbWjOGL%2BvdWku6Ruo0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a48af643b4c-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421222209471.json")
  .matchHeader("content-type", "application/json")
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .once()
  .reply(
    200,
    {
      user: {
        id: 421222209471,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209471.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-20T23:42:25Z",
        updated_at: "2021-10-20T23:42:26Z",
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
      "Wed, 20 Oct 2021 23:42:27 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"771c451a78e35030574b10ecec356a34"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-p7pmq",
      "X-Request-Id",
      "6a161a4b8c003b1c-SJC",
      "X-Runtime",
      "0.177593",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a4b8c003b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H1fp8%2F%2FFgof3XY9%2BYvLoejuZSzQprB4lStQ%2FYeAS4dwVC5ybvtphCbceLcm0ZEFYdkiV4ofZ1LHCfTCnHQHxT%2Bnv7EbBoCJzCmz9oNpqjFehWLfGF6HzaqYKW%2F%2FqalDgk42vYznFkDcbRpk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a4b8c003b1c-SJC",
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
    "Wed, 20 Oct 2021 23:42:27 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-x7qgj",
    "X-Request-Id",
    "6a161a4d9b566459-SJC",
    "X-Runtime",
    "0.156866",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a4d9b566459-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Fu3zKnWrFkLbJLnAXDcGX4uNDSyg5cbw7ma1RIHTRZY%2FyLTTNbOsN03vf8y6jMGURVkRB2ZzkJsnYjSA53m1EAEb27LgHXzX%2B5%2FkAjdfpSdSqwpPAkREh8T2e5y%2F5wbe71dMuyd%2FS00V3AE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=4ec1a5da3a015ed25f4beea810c775ecfe2fe37b-1634773347; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a4d9b566459-SJC",
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
    "__cfruid=4ec1a5da3a015ed25f4beea810c775ecfe2fe37b-1634773347"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:27 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-8f24f",
    "X-Request-Id",
    "6a161a4f1da46459-SJC",
    "X-Runtime",
    "0.147461",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a4f1da46459-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kp%2Bmi%2FpIflqGVaPnhYAA2vDju8FvJSSSrEoiX%2Fs0cUFbHbeEnLbmejaF4jLFQcqhOzgq1lVTtnUur5ZOBAUSC9fJgC4ZZwVZsGM1qQFWJVZS9HNUf3jmqE3RxqHmGYBFaNo8Y4ywmcmR%2BE8%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a4f1da46459-SJC",
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
    "__cfruid=4ec1a5da3a015ed25f4beea810c775ecfe2fe37b-1634773347"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:28 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-n6mtv",
    "X-Request-Id",
    "6a161a50682a6459-SJC",
    "X-Runtime",
    "0.168845",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a50682a6459-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FyCxJg7NXqH1Kfu%2Ff7qekCncBaHqQpjQqvQ5EfxqU2PDv7twjOcGZ0DeZjcMRMUphdqJESr9CJB%2BOhoK6PSwk1BL%2FgHYCTLoX879P9IVg%2F5wCMnscjuOsxWsLELw3NGtp6PQmF7fondaT5o%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a50682a6459-SJC",
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
    "__cfruid=4ec1a5da3a015ed25f4beea810c775ecfe2fe37b-1634773347"
  )
  .matchHeader("content-length", 115)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421222209691,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-20T23:42:28Z",
        updated_at: "2021-10-20T23:42:28Z",
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
      "Wed, 20 Oct 2021 23:42:28 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1007",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"644758d07284360a5eeb5211914e840b"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-r5pfz",
      "X-Request-Id",
      "6a161a51eab16459-SJC",
      "X-Runtime",
      "0.395587",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a51eab16459-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=t3SP%2BZ0RxfutqXLajIOOhOs%2BPPLNgvCzXrYF0X0E9W4y073yuxcmukozCK35UPwNXTxuUS%2FJyMeDAtthusGMGZBf%2F8c%2BK2kWHh%2Fwk7gkGFaXAwNkg5ssbvYnVEPf98cLQY2NGqJHqEf2coo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a51eab16459-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209691,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:28Z",
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
      "Wed, 20 Oct 2021 23:42:28 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"8c2b9d0f3225e7f88d3db76bd864bce2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-jpqkq",
      "X-Request-Id",
      "6a161a54cf4e3b1c-SJC",
      "X-Runtime",
      "0.164698",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a54cf4e3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CEwS7x58q27l5O32p1Wtv0wgL7LGQhpL433U7lI3089YeZAElHLsX%2FXeZpGJeceMgeDqY7bz1WDpfDjtDxANAzTdM2Rafs7TzYnGe8kuhSe0GWhzGKE05z9Z%2BrsbqSPLPFKTR3q7TbT1Y8c%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a54cf4e3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:24Z",
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
      "Wed, 20 Oct 2021 23:42:29 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"a1fa214e35b84581d5bac4862e7a89a1"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-t4mh2",
      "X-Request-Id",
      "6a161a5658fb3b1c-SJC",
      "X-Runtime",
      "0.201799",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a5658fb3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xxm6rHdTc6sg4AE6ced8dbMSpLf%2Fed12aXqJo0rmI8QSzd%2BzdW3NjnY0Od9MvMY%2FCCh1Mm2tGCNgKGPPfMQ8Xx5GooeifxtlQEV%2BT4DGfcubNd01SzqMtwVdGF71EvADMD%2FvumQsgavk%2Bj0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a5658fb3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209691,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:28Z",
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
      "Wed, 20 Oct 2021 23:42:29 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"8c2b9d0f3225e7f88d3db76bd864bce2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-s5g5q",
      "X-Request-Id",
      "6a161a580adf3b1c-SJC",
      "X-Runtime",
      "0.198932",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a580adf3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lTSMR4Xpxs%2BwHDsADdT0JidS1F6bKkHUVQSEhFLODN3B3Py0ClI38w76GYHfbKJff2rPl1eoEbzSyT%2FdpmllGdefdVVVw0B2N2VXSvflmlUB0CuqM0lGKE2di75MyqIgTLv3hcu3oJ3bR3Y%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a580adf3b1c-SJC",
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
          id: 421222209691,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:28Z",
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
      "Wed, 20 Oct 2021 23:42:29 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"8c2b9d0f3225e7f88d3db76bd864bce2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-jt8d4",
      "X-Request-Id",
      "6a161a5a1d5e707b-SJC",
      "X-Runtime",
      "0.190081",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a5a1d5e707b-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FgrzdRfyN10wSB3vxYNqE%2FCK8f0DJiyTaxwSPHMYeSTYGi3oEmn5A6CX%2F0Fw3n5BRAj4zCiIPT2TQLll7prtqxIpQlCmsX%2FwAz%2BAVI4cwZt8cShlU%2BnjFvZwvzmpzm8q2AEz82lgU5Dt9%2Bw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=226dbfa9cf11c6374a7473376de4b7ab7dc85eb6-1634773349; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a5a1d5e707b-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421222209691.json", {
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
    "__cfruid=226dbfa9cf11c6374a7473376de4b7ab7dc85eb6-1634773349"
  )
  .matchHeader("content-length", 100)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421222209691,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-20T23:42:28Z",
        updated_at: "2021-10-20T23:42:29Z",
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
      "Wed, 20 Oct 2021 23:42:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "674",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6460cafeb801c317bd9892c053735d14"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-fmvsq",
      "X-Request-Id",
      "6a161a5bcf59707b-SJC",
      "X-Runtime",
      "0.355509",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a5bcf59707b-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H7OVFGA3yv7YiE5%2FY6l50EI%2F1mrXN%2BJfMk1ETsNTtPNjikkhLvebwW3ZctvmbEcQ9dsR4qPw1H786h%2BFgD%2FlxFapFRRflFXBeYUzp0yvJqveV7T4ri05qqjjEDXRWIuPYVUBG8Mx3PkEjd4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a5bcf59707b-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:24Z",
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
      "Wed, 20 Oct 2021 23:42:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"a1fa214e35b84581d5bac4862e7a89a1"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-ztrsq",
      "X-Request-Id",
      "6a161a5e7a2f3b1c-SJC",
      "X-Runtime",
      "0.224347",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a5e7a2f3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jhckOu1ubpgBpUV5cUlQvJcxCgBR0z6OeasQkd4HLf63xkTd95G1jnFLsI8obu%2BIUppe4IsZJfzelb2aVSSYf%2Bswiy5EOsG1T%2Fdq7xt0VhNYBluM8IwxcfszklI0QnvlEb3bYnenStOpQIE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a5e7a2f3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209691,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:29Z",
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
      "Wed, 20 Oct 2021 23:42:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"c6dbbee6dc3e048473fdc6549363b0f0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-qqfxl",
      "X-Request-Id",
      "6a161a606c863b1c-SJC",
      "X-Runtime",
      "0.225366",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a606c863b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bBDrWgmZGj0Ah2SZ9caiTekENWYxZUqfcA3hySy4oty8GBYJ6ssmCVZBXFwpAvb3ZZ9tt3GIuHrPZabRLZWxAaAZ8rX0GippdBC%2BSFA6%2FkZjSA%2FCJI6oTX69oziyW8VvmupKNfdiP5CEAzI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a606c863b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209691,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:29Z",
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
      "Wed, 20 Oct 2021 23:42:31 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"c6dbbee6dc3e048473fdc6549363b0f0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-kxfch",
      "X-Request-Id",
      "6a161a624eb63b1c-SJC",
      "X-Runtime",
      "0.204719",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a624eb63b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u0Qelcld%2FgQz0JOUcZV%2BMTYxpCL0vI6weN%2BEBFZDud2dOf3cyawOZqbPTe2J4VlNvqb5fSZ3MuSHPH1d83KynJeSqfGO1cKEFSgjq8c1ZfBJmQVOzqEc9ElGtnvWdw7G2KMvF1al8CAc6Ag%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a624eb63b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:31 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-fxzwv",
    "X-Request-Id",
    "6a161a63f8e73b1c-SJC",
    "X-Runtime",
    "0.176474",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a63f8e73b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ohunwW%2BHn3vibLeUQJNKSKfXeeaTZp5hKbS2ZswEJ3v1bJNAVEiJ2Cwtc%2F6%2BKBaaYptGtkLJcdJ4NvIlaXM0m3jNkCDue00j1nNj6XtnkPvKbjFLZIb%2FWqAr9FIEkBXZEqCg%2Ftox%2BoHKZBw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a63f8e73b1c-SJC",
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
    "Wed, 20 Oct 2021 23:42:31 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-btgvr",
    "X-Request-Id",
    "6a161a65ee027115-SJC",
    "X-Runtime",
    "0.165412",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a65ee027115-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JwOpUH%2FvRWT3UWECFi1RAAtPP0Y3jt3JV8SE5YE4lIS%2FGgaLZ6Hz0rFu%2BgYpN4NqoglyxyZIgLYIzvTsHIDTXzvI0z5WAoai6YGXHbueSftjeJLZsma%2F9y7aV6Tedo7EK9d5SNkRvMXoO2g%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=b5b9f938207960321d804ffea2897a4560a8824e-1634773351; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a65ee027115-SJC",
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
    "__cfruid=b5b9f938207960321d804ffea2897a4560a8824e-1634773351"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209691,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:29Z",
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
      "Wed, 20 Oct 2021 23:42:31 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"c6dbbee6dc3e048473fdc6549363b0f0"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-hsr8t",
      "X-Request-Id",
      "6a161a67f8697115-SJC",
      "X-Runtime",
      "0.180729",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a67f8697115-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FE%2BsISMSawbVzqVrfK1bukz6mzgRBuwakctdVjzP6d9HILdUcyFpP%2FIZmq%2FbQb7JBKLJ18T1RypMcneRvzZQFYHWVyK9mwfcMkFnvVqwyZhgQxZREgeIAgTaspnQ9BvIE1tDxRM%2BiNaZKR0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a67f8697115-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421222209691.json", {
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
    "__cfruid=b5b9f938207960321d804ffea2897a4560a8824e-1634773351"
  )
  .matchHeader("content-length", 105)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421222209691,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-20T23:42:28Z",
        updated_at: "2021-10-20T23:42:32Z",
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
      "Wed, 20 Oct 2021 23:42:32 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "667",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9d11e2dd0641108b6df56fbd15d19764"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-tr9lt",
      "X-Request-Id",
      "6a161a699aad7115-SJC",
      "X-Runtime",
      "0.374162",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a699aad7115-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IFhlojvcVTqsJFtojT87K%2BzSCl3KE1F%2B9V4ERPS5aEzYjAgUABXkCi2EK1Xb84g2yS4%2FtERZfB8yrMBpt%2BJw3yYc7n%2B2RowFhcasLtlK9Tu1PV0%2FquC%2FVFvVRwCEyExW1QAFVcq8TOJsds8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a699aad7115-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421222209691/identities.json")
  .matchHeader("content-type", "application/json")
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691/identities/390642946751.json",
          id: 390642946751,
          user_id: 421222209691,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:28Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691/identities/390642947351.json",
          id: 390642947351,
          user_id: 421222209691,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-20T23:42:32Z",
          updated_at: "2021-10-20T23:42:32Z",
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
      "Wed, 20 Oct 2021 23:42:32 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"4f38866a603f55b0898d51665b965aa3"',
      "Last-Modified",
      "Wed, 20 Oct 2021 23:42:32 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "666",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-q98kk",
      "X-Request-Id",
      "6a161a6d0dfb7127-SJC",
      "X-Runtime",
      "0.172457",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a6d0dfb7127-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3r%2BFlcwgUeE%2Fe4baXk16QDGB3oH%2FZE3PpzDmrB%2BOiEATMJ8qJhEBY6L%2FI0sqCydKKbguJOyFONcUMx2WwKUcjkChuftD2Y0jB6LMmX5K%2BJutH4C%2FPRMh9wB%2FbH072Y6faU%2FWXWzpIzyqAGc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=0bf8178a4add4b7a0ffe48b0861c0035308d5a41-1634773352; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a6d0dfb7127-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/421222209691/identities/390642947351/make_primary.json",
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
    "__cfruid=0bf8178a4add4b7a0ffe48b0861c0035308d5a41-1634773352"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691/identities/390642947351.json",
          id: 390642947351,
          user_id: 421222209691,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-20T23:42:32Z",
          updated_at: "2021-10-20T23:42:33Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691/identities/390642946751.json",
          id: 390642946751,
          user_id: 421222209691,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:32Z",
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
      "Wed, 20 Oct 2021 23:42:33 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "665",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d255d357f43ca8dd007c6118c9dc50b7"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-jt8d4",
      "X-Request-Id",
      "6a161a6e9fa47127-SJC",
      "X-Runtime",
      "0.435550",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a6e9fa47127-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MOgaWHbhdSiseVknmJKjatAhlTOmpNkCcubx8QRMLuqbZ5WXX%2Fz351l8kBSX0zsQgu4DPEVMUl6Sj3grQBDv7zVgaYTXQYDVsadMYfxEViAK3PHRtkCkzJz7TV6AikF%2FvUDyCm5hAuEGaiY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a6e9fa47127-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209691,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:33Z",
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
      "Wed, 20 Oct 2021 23:42:33 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"1d77a1b0a132eecbd514b913515efc91"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-8znpp",
      "X-Request-Id",
      "6a161a71dad43b1c-SJC",
      "X-Runtime",
      "0.197725",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a71dad43b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sTljHl5FyVU%2BADztY6fa%2BT1roP4vQ1UzkddxDWWOKSyI5EbTIOLWd%2B5RY2z1wKTsnOEPx0xSuRrTEZYTBx54KBabvaRHTA%2B4hSB2RKHMvmNn2nDPNCGpyGfFlKz%2Fx%2BHUEHuBtZaHNqQv0OY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a71dad43b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:24Z",
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
      "Wed, 20 Oct 2021 23:42:33 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"a1fa214e35b84581d5bac4862e7a89a1"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-rsd5w",
      "X-Request-Id",
      "6a161a740dc97112-SJC",
      "X-Runtime",
      "0.216215",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a740dc97112-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ayw0kIFNshyu5ezlXvjVuvBsniq4WUzg%2F0kNsLUPNUbWJOzn8s7RKFLoX2WiNdUznsTfgTIKcyejF08WsKmB%2B1wd8dxOmV%2FaL4FQBJYIeyteWOhuar7U3vBUMg6bMkSeXWn1peZ%2BQ9dQy4c%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=bd12ad37998866e35c74c90ac60e9a969012e82e-1634773353; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a740dc97112-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:24Z",
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
      "Wed, 20 Oct 2021 23:42:34 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"a1fa214e35b84581d5bac4862e7a89a1"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-n2vsd",
      "X-Request-Id",
      "6a161a75efcc3b1c-SJC",
      "X-Runtime",
      "0.208143",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a75efcc3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=M7ZJEEYAo7zuRk17jOLEBc74k9%2FwK1HqtU8cSSuwpHIcnTORm8QRSFFHOiJZRNTAvmHRBB%2FbT9jATwY61MQuWdmUnNueJpUtCXR%2FOt%2F862mH1baj4iXVJFKFBFHiRuZ48v2cWg%2ForQZoLzQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a75efcc3b1c-SJC",
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
          id: 421047662332,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-20T23:41:37Z",
          updated_at: "2021-10-20T23:42:24Z",
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
      "Wed, 20 Oct 2021 23:42:34 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"a1fa214e35b84581d5bac4862e7a89a1"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-2vrhj",
      "X-Request-Id",
      "6a161a782dcb70ee-SJC",
      "X-Runtime",
      "0.183011",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a782dcb70ee-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aeyH8SUCxvRA3PfvMBLe5YJ01qCtSs4JNfsPJv76Goye4mx4d6%2F8r4MhcnTDxc6G7wbd46rzgSFyW95EnDXhNG6G0Ja8PSwAMuVfJrpZ3YFtcAPiPrc4I929oIRRge9klxVi7u0zoNL9cyw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=d7e0535e42e9ebc32fd92c81466e3dbca47769c1-1634773354; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a782dcb70ee-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421047662332.json", {})
  .matchHeader("content-type", "application/json")
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
    "__cfruid=d7e0535e42e9ebc32fd92c81466e3dbca47769c1-1634773354"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047662332,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047662332.json",
        name: "John Connor",
        email: null,
        created_at: "2021-10-20T23:41:37Z",
        updated_at: "2021-10-20T23:42:34Z",
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
      "Wed, 20 Oct 2021 23:42:35 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "660",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9d9bff79463a95346898c5e763c998a4"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-p5dh2",
      "X-Request-Id",
      "6a161a79cfdf70ee-SJC",
      "X-Runtime",
      "0.522958",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a79cfdf70ee-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h1OWufsuOnpD2rpIb8QJmUaYo1xXJqH1tlXJD%2B7bGRr9VKZzVrh%2BJNf%2Bawdzy2KaUSKi4t%2BSo%2BnkYVICWUMoaVuo98btcq%2BnIguD%2FyLme9lZ2bRyy5LfE3JkrN%2B4IUBKmKEetiO%2F7Jj9fBE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a79cfdf70ee-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-rsd5w",
    "X-Request-Id",
    "6a161a7d88b13b1c-SJC",
    "X-Runtime",
    "0.155882",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a7d88b13b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hM162q9BfrMr9rQuJmJ9Mel%2BGhaz1G1YriRsk54fYvaPyOZeciyjoHaDYO2z99un0ojxuBZIhPCV9FxIqXLi7LBpFcdIchkT7Yt%2B1vVZDncm0J5bxMAga8XxWdZw95fXTfUNAX%2FE0u3i5Fc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a7d88b13b1c-SJC",
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
    "Wed, 20 Oct 2021 23:42:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-k8zd9",
    "X-Request-Id",
    "6a161a7f68eb7075-SJC",
    "X-Runtime",
    "0.149876",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a7f68eb7075-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cgjSHCYEt2Y4OURTgjZOHZKqwvTrHObMObJLR40HVc90U4t7lutjIIRLuIK37Mz%2BldnpGx2WK6KLOmKZ3i2YT61%2FYjuFF0wSsYQx%2FC3vqYzC0%2Fowd1TUGdchw%2F3NQ1ZJkWyuNErvzqFWsgI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=2f810f05271f58e99d0ffc33c772144454577a8c-1634773355; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a7f68eb7075-SJC",
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
    "__cfruid=2f810f05271f58e99d0ffc33c772144454577a8c-1634773355"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209691,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-20T23:42:28Z",
          updated_at: "2021-10-20T23:42:33Z",
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
      "Wed, 20 Oct 2021 23:42:35 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"f407527bbdfac7cfb4f7d7411356f9e1"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-5jh65",
      "X-Request-Id",
      "6a161a80dac97075-SJC",
      "X-Runtime",
      "0.206204",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a80dac97075-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4MN7MXi8LOK6q%2BPA84GlIS8Dp1J6kvlsBbZasjwPpnuZGM3%2FT63bd5jjblE%2FheTb5WnhLOGTGzNLxiHg6hl%2BeB10zNoSuPJpVNW08Dm9t5GHHlGuMjkmEeJH2QG9zLHb1R8czjCQ%2FMYTfFg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a80dac97075-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421222209691.json", {})
  .matchHeader("content-type", "application/json")
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
    "__cfruid=2f810f05271f58e99d0ffc33c772144454577a8c-1634773355"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421222209691,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209691.json",
        name: "Bobby",
        email: null,
        created_at: "2021-10-20T23:42:28Z",
        updated_at: "2021-10-20T23:42:36Z",
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
      "Wed, 20 Oct 2021 23:42:36 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "656",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"0f335b12e9bbc02043b0600d39ffe849"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-p5k4d",
      "X-Request-Id",
      "6a161a829d4f7075-SJC",
      "X-Runtime",
      "0.568473",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a829d4f7075-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=64t0dFlkJ5PLeJyVVsUMazU0ECg3kugpnkQDMtvw%2BSyhZXvr7oaSaphHgRLx47sHvij25LpbhH5Q69DVh%2B5htCxSrrljp24IbIMmsBs74J5qJi8x%2FVHYGAdJr0%2B4dNJK%2Fh7mRhoK7KSlIvM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a829d4f7075-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:36 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-qx2jt",
    "X-Request-Id",
    "6a161a8699833b1c-SJC",
    "X-Runtime",
    "0.153514",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a8699833b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5WzhNS3cgXxSaw9dXmlj3y5%2FXQb%2BUevTvOXs%2BmbJQj%2FwdDyrOaYvSIN%2BxQbp4yxczuwCwzKPfojKhUd5fbZnz5kwMMGNknWw4OX73XSb9gXpJ46Hra48PfZfzow21%2BtbvTzdBZ%2FO%2F2dXh%2FE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a8699833b1c-SJC",
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
    "Wed, 20 Oct 2021 23:42:37 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-9vgpp",
    "X-Request-Id",
    "6a161a88ad4f2572-SJC",
    "X-Runtime",
    "0.157363",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a88ad4f2572-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p0nBQhGeARsc2a3adU3I5ZxQpwIvF4YHtbRHP2JhpzmSW90FF3dnuSEBiuSjQMTG%2Fuo3oGDyNhig6hVJmt2%2BUg8uAY3SmKsbxYR9jyNGnKbGScU5UwXozFPxyjo%2BX9hYU8nGfSx3syh9pMc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=3bc8d35a4cef3f3230ee769ef57fc6bbe003a3be-1634773357; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a88ad4f2572-SJC",
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
    "__cfruid=3bc8d35a4cef3f3230ee769ef57fc6bbe003a3be-1634773357"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:37 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-l92pk",
    "X-Request-Id",
    "6a161a8a2f382572-SJC",
    "X-Runtime",
    "0.172110",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a8a2f382572-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MCcxDc1vOHJjVwVe4OvfeN4%2FjSjuhL%2B9z8E0Lp9sqTRQnhbBGA0e7KXY5GJI16MBsl0ZWEtMs3bgSqoMj8JRkj3Q2p9PeF1HNRmYT%2BjEVe9PRICkpWfJH3uhK6BxzOcgDgbxNj1NDZ0dXPI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a8a2f382572-SJC",
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
    "__cfruid=3bc8d35a4cef3f3230ee769ef57fc6bbe003a3be-1634773357"
  )
  .matchHeader("content-length", 139)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421222210871,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222210871.json",
        name: "Jill",
        email: "maybegrouparoo@demo.com",
        created_at: "2021-10-20T23:42:37Z",
        updated_at: "2021-10-20T23:42:37Z",
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
      "Wed, 20 Oct 2021 23:42:37 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1031",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421222210871.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "652",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"31f07a80b8458c4e5d147177b9c9391c"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-dgpdf",
      "X-Request-Id",
      "6a161a8bb9502572-SJC",
      "X-Runtime",
      "0.457826",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a8bb9502572-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KMO0mV3xm7%2FDlzCvkCaiqx%2BGzsX%2FxbSPZXHm7KGC9dH1XBZA1ckAUKSTZfzgDYJOk5MOcIwRgUbmbHpN8qhVXL%2F3DBscEv%2F7CPeMf1w1HQ11GYnUeWSwHCW8oZfrpllb%2FwyKl2Yhn6VcgGk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a8bb9502572-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222210871,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222210871.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-20T23:42:37Z",
          updated_at: "2021-10-20T23:42:37Z",
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
      "Wed, 20 Oct 2021 23:42:38 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"16d89aa181040f0167535349dbf97b58"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-ltdmf",
      "X-Request-Id",
      "6a161a8efa7a3b1c-SJC",
      "X-Runtime",
      "0.200124",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a8efa7a3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8e3IYI4ix%2FCROIePOsfEke7okgzpvSJob1icgCcAQJ9CeYWcXcFf4rT2qawkgkNbjPgoMORhOzQH%2F59TdybVhAFAfjHQLDYl7JwpdYbO0lah0FDQSdSuZV4%2BjDDPa%2FHVniFmLlkrusI0JOA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a8efa7a3b1c-SJC",
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
    "Wed, 20 Oct 2021 23:42:38 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-cl2j2",
    "X-Request-Id",
    "6a161a912935645e-SJC",
    "X-Runtime",
    "0.154588",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a912935645e-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fe%2BXyFcQbQ0pxhuFIdAU0iVnsDK%2F9qGsP4NnzkcpqFvf7vmT1XPbDFJkuHb7Y5mHcqgvP1G7pKu5w77N9oMxjKi%2FHUFmHihNC%2FK4ULZV0WiCkTQ7US%2BCrElYloGg9J8pjIQ%2FtKs5RC%2BllcY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=efe5dd4a20cefd71cde90636d6f03697692db813-1634773358; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a912935645e-SJC",
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
    "__cfruid=efe5dd4a20cefd71cde90636d6f03697692db813-1634773358"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:38 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-pbtx2",
    "X-Request-Id",
    "6a161a92ab05645e-SJC",
    "X-Runtime",
    "0.171136",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a92ab05645e-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Mr0nK%2BVVqE%2BmviGMR3ZEMlBDAN1Wfltk35Lbq3WinP8VJw8VqNvA9%2BQwlOzIIaS6nvQ5RUtvBr%2BGwfCipshjUX6zW0iUxhy2MfqsLeDIgIDq7r6ZWXIZQu18xkvIzaGQpaxSyr1wqRkcdg0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a92ab05645e-SJC",
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
    "__cfruid=efe5dd4a20cefd71cde90636d6f03697692db813-1634773358"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421047669592,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047669592.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-20T23:42:38Z",
        updated_at: "2021-10-20T23:42:38Z",
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
      "Wed, 20 Oct 2021 23:42:39 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1004",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421047669592.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "648",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"a38ee19f0d38d51a9daee016a0b883ec"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-pbtx2",
      "X-Request-Id",
      "6a161a943d57645e-SJC",
      "X-Runtime",
      "0.447706",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a943d57645e-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BPfSiTR%2BNGtY1fDAp%2BgIJgXHYkvj3nDVsOSQjYv5lLV2OtilvJNy%2BRZBznVikf6aKO5YT8wzpD4NNn7X%2BAPSZB6Ec%2FsJjia%2Fuo5Z8fLveVOTUNKrSW0VzYw9G11IfW8KaObTXWO%2BgZt7ZBw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a943d57645e-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421047669592,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047669592.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:42:38Z",
          updated_at: "2021-10-20T23:42:39Z",
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
      "Wed, 20 Oct 2021 23:42:39 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"a068d346d65111b9ee83d43c4e4e5fb9"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-hz9n9",
      "X-Request-Id",
      "6a161a976c7b3b1c-SJC",
      "X-Runtime",
      "0.175686",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a976c7b3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cWqaMDAnHe2fIb95AU7W4e5UlY5ddqXxIwH1yk%2FAiuLxB6G2om2vaD3rtSjidR7ZegSk%2FPa4s1YBtFRF1AlbxjLBVOsQ62belaFB2Oi0l62mPJw%2FXqjEMET3TT%2B%2FY45%2FpQH9AhiP3I2Bvww%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a976c7b3b1c-SJC",
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
          id: 421047669592,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047669592.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-20T23:42:38Z",
          updated_at: "2021-10-20T23:42:39Z",
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
      "Wed, 20 Oct 2021 23:42:39 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"a068d346d65111b9ee83d43c4e4e5fb9"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-fbrv5",
      "X-Request-Id",
      "6a161a997f44707b-SJC",
      "X-Runtime",
      "0.235321",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a997f44707b-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bxD6%2BfoAGt2Uve43tx9R9o4LEM9rMWE7KyKJk0E76O7hqDpvpVaTf3NyJ5TA4nmsxrMoiAfwXpXQAfyK%2BXl%2Fnwl3NRZHkkmqc9M9LvvliqXIpDaEDAxrXxrh6159fN1U6irTxXapmeQm2wc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=d48735b40bdcf170c2d4415c162f1a79fac701f1-1634773359; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a997f44707b-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421047669592.json", {})
  .matchHeader("content-type", "application/json")
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
    "__cfruid=d48735b40bdcf170c2d4415c162f1a79fac701f1-1634773359"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421047669592,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421047669592.json",
        name: "John Doe",
        email: null,
        created_at: "2021-10-20T23:42:38Z",
        updated_at: "2021-10-20T23:42:40Z",
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
      "Wed, 20 Oct 2021 23:42:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "645",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"49d64066efe6cec665198564429dae82"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-dgpdf",
      "X-Request-Id",
      "6a161a9b5a30707b-SJC",
      "X-Runtime",
      "0.527681",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161a9b5a30707b-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZwLIt3uyDTs4i9M1Y%2BXFVFFj9OAQ1HADCs2%2Bcc6Odn4PM%2BCHGGEP5S34bojaN24Lujhp4d2a%2FcHUnepuwLckDU31EqOagt%2Fsvo%2BxwE978YCKP9qnNNjTEg1MCVn2R6mJ0GFGR0p04yY6pho%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161a9b5a30707b-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:40 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-d8p4x",
    "X-Request-Id",
    "6a161a9f3d3d3b1c-SJC",
    "X-Runtime",
    "0.154920",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161a9f3d3d3b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Kh4eBryJx3w0Trx5q8bQ6PSpMcxUlgcA7LuoWwb61phfNcxj6jughDh%2BEQdgJYjkrHSo2TOB03KETX1pB3lZ60QWS1iNRoAc6pLuihH%2BAOEg45R1bRctxQI%2FyyuvTvESxN01nnDkcE89Q9E%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161a9f3d3d3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222210871,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222210871.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-20T23:42:37Z",
          updated_at: "2021-10-20T23:42:37Z",
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
      "Wed, 20 Oct 2021 23:42:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"16d89aa181040f0167535349dbf97b58"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-vbvmn",
      "X-Request-Id",
      "6a161aa0aed83b1c-SJC",
      "X-Runtime",
      "0.198122",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161aa0aed83b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LPWZDtjHyMAfVWLtysY43jPmA1idHNbJ2%2FHEJ%2FkDP9WkcvAoFfoMCzJOsmt4pIsh59orc%2B4zXJ4U7HkyH5CZBayt43kXLC%2BRt9mFQspYGLiyJ7L34CDPwUfY4dgc%2BmqRq5TF2Ow88AMPNj8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161aa0aed83b1c-SJC",
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
    "Wed, 20 Oct 2021 23:42:41 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-vlvvt",
    "X-Request-Id",
    "6a161aa2cbb9252d-SJC",
    "X-Runtime",
    "0.175078",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161aa2cbb9252d-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=l5jtnfoS4m1BxxhxtUDcMNBguN3vKh4rff83cymGKfi%2F6d%2BpuWKHlrBXwbq%2F6pabLYAXuZH8ZmN5OD8899tjUmEqvb7peXRY1MqDOOP0sm3J08TEFVhYO%2FCiSepd%2BUIKoiCZ6zKld5n%2FhM0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=a72026fdae9a39c4687fd6a1e331af8efe3e6a5c-1634773361; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161aa2cbb9252d-SJC",
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
    "__cfruid=a72026fdae9a39c4687fd6a1e331af8efe3e6a5c-1634773361"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222210871,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222210871.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-20T23:42:37Z",
          updated_at: "2021-10-20T23:42:37Z",
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
      "Wed, 20 Oct 2021 23:42:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"16d89aa181040f0167535349dbf97b58"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-l4bvc",
      "X-Request-Id",
      "6a161aa45d9a252d-SJC",
      "X-Runtime",
      "0.240380",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161aa45d9a252d-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iIO6KoAOqymNpeZSQTes34A8Z7uHgshXJyXcmdENCqyoQS%2BOanq0Qy%2B6JF7UqBAwFPSiMj0tVKFugLJvWFLPDXrHHmuw7bASWWOgLxnkLuQv5LpnICXJhXbccNUKHnOqHZ4iKIlQc4xARDA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161aa45d9a252d-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421222210871.json", {})
  .matchHeader("content-type", "application/json")
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
    "__cfruid=a72026fdae9a39c4687fd6a1e331af8efe3e6a5c-1634773361"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421222210871,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222210871.json",
        name: "Jill",
        email: null,
        created_at: "2021-10-20T23:42:37Z",
        updated_at: "2021-10-20T23:42:41Z",
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
      "Wed, 20 Oct 2021 23:42:42 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "640",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"33ad915410a0ec131ea8cd7118961413"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-ssj8z",
      "X-Request-Id",
      "6a161aa6582d252d-SJC",
      "X-Runtime",
      "0.454311",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161aa6582d252d-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lfsoAG9QN7qeQrbF3r2W4H68ErNUR6edvOMv%2Fb32CaI96dA9rTHEy8BroaKfjVg1rGNTkvvdWMrHY1Ai0WX1CxcH4gmNXmVZorYLFcZQ%2BZrclkpYrlSQqOkwuANxmdofrhXzt8GpFRllYcQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161aa6582d252d-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:42 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-25rsj",
    "X-Request-Id",
    "6a161aa9992e3b1c-SJC",
    "X-Runtime",
    "0.166869",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161aa9992e3b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=C0lil%2BtBPrNETU1F1ySXBW2Nhfof6eG%2FIEcbTIYzHlHG%2BqhqLtSgQHjQZtYO1V0fsKrKBNgX917DceoWyd5pxhSsbXbvgjLX6NRqhU2fgjsz9PyXVOrBB8Y0CDcbnb79lopoxtxaTIieUb4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161aa9992e3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:42 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-846d896966-hsh8j",
    "X-Request-Id",
    "6a161aab2b203b1c-SJC",
    "X-Runtime",
    "0.155655",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161aab2b203b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NYBTzTMGCH7u%2BLXZ5bSFHRPtulYaMwrFh6%2FiyNM2QKQY2a49PlJ9XowmLmOX8aVGaC7rxkI4gCYFGHEmAWS4FGdFWQZexlGKyzbstdHrtnI%2BRAYELOEOtLvVEWaMoFi3ssAREq5O1eIjHr0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161aab2b203b1c-SJC",
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
    "Wed, 20 Oct 2021 23:42:42 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-fs8f6",
    "X-Request-Id",
    "6a161aad1b810fb3-SJC",
    "X-Runtime",
    "0.154253",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161aad1b810fb3-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Sewex5Ler%2FkYbJw6NQV5tzMTomBJ9n1uNRBucGOwHpflHEdv6j%2B0l5fd2ewcjRr3ef%2BQqYjJJdSIutqQVjZiIXRHOXzXISqgepx8EEcAKtJVqoL9v36cgN%2BKd9yO5MT%2F2hoi0VildKKC8G4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=05eaf3f166396817b57822762c1b2fb0963741a3-1634773362; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161aad1b810fb3-SJC",
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
    "__cfruid=05eaf3f166396817b57822762c1b2fb0963741a3-1634773362"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:43 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-846d896966-658bb",
    "X-Request-Id",
    "6a161aae8d270fb3-SJC",
    "X-Runtime",
    "0.186679",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161aae8d270fb3-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Pg454t2ZjniXo8N731bP69LQCIcPBbUHgjf0swhq5NK96M6%2Bfyfsz36lGK8HFNnuPofBH8ARqioyPZ3BnFNx7cgVmmFhRs0z8LCs6WQGbtGHCeYchYCXLvUkYwVQT1n7JXdIsyiFIp87keI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161aae8d270fb3-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:43 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "635",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-846d896966-67kgc",
    "X-Request-Id",
    "6a161ab038d53b1c-SJC",
    "X-Runtime",
    "0.155085",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161ab038d53b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KfjdZBedc1xLL%2FmzGPaBKDSloMNiLNkZC%2FvPlAgeBa%2FsVlHT3fepWhnDgkHbWRtIi%2F%2Fi2jXOyZjC1KhEV%2Fs%2BXXfEGc1aeifZxwvhgzYPWG75yQAnehSEutYjOVle204hvSFjLcBARuSFpwk%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161ab038d53b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:43 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-l4bvc",
    "X-Request-Id",
    "6a161ab1aaa33b1c-SJC",
    "X-Runtime",
    "0.170921",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161ab1aaa33b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w8DyQBesfoshNZzjMcf%2FU5Vmy6mAQ2sLX4sn5iQ%2FM%2BKfrzittmgqZoxzcNciUrtv3EobkhMK1BsbtQIMD%2FG6Tdt7FPpOz%2B0QSZSRKtSYZGk%2FtkB0ZFhEneFv00O%2BbHBtiQsWuYubC%2BRIzQs%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161ab1aaa33b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:43 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-5jh65",
    "X-Request-Id",
    "6a161ab32c783b1c-SJC",
    "X-Runtime",
    "0.184069",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161ab32c783b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2g0q9u%2BZRe8BWetW6GXKJ%2FFIlL4Gjg2mTYeWG8R%2BqwBu8pNJle7NCSzwtUocNUdhykU58d2WAvu3OU2bYocMjSz4wgOfmRZ0nQmZUFvpN%2BUdq9f8jiuAFU2X9bY1%2BZfo62q2vBWgznRqWHw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161ab32c783b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:44 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-mbw4m",
    "X-Request-Id",
    "6a161ab4be843b1c-SJC",
    "X-Runtime",
    "0.162779",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161ab4be843b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D5Oh3miBkqTJOM1lpt%2FaU5liRvBN%2F%2BuiaGELOvQBkcPacfHgkW1cBipAsIGy6AOFt5o6Y6euchHPfAxSNTRp9Zx2KSecC5PUMn8OjH0uzgArZtzgRYU%2FtfUUmcNQ%2FWDhjZtI5vYRsjYEJ5w%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161ab4be843b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:44 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
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
    "classic-app-server-846d896966-fsp7k",
    "X-Request-Id",
    "6a161ab628d33b1c-SJC",
    "X-Runtime",
    "0.168821",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161ab628d33b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NWZoZHZiJPqdxcOSOEYJEPRqiTrbzjE7VA0uwRXiEZWx%2B5f66aSABgPlWpNQKd1A%2FPNUVykKDzpS8ctPxDJ0FchFjyzexsOLgqmOvKKBpw1je%2BbRoXi3k%2FS%2Bay9OY7L8tzAbySCebXD0QyE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161ab628d33b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421222209471,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209471.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-10-20T23:42:25Z",
          updated_at: "2021-10-20T23:42:26Z",
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
      "Wed, 20 Oct 2021 23:42:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
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
      'W/"66fa26601714bd9949c79eeae2497235"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-trz5f",
      "X-Request-Id",
      "6a161ab7aa873b1c-SJC",
      "X-Runtime",
      "0.207440",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161ab7aa873b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WT5OqCdNDKusWdlNhNegDWL6ebqgjfkXkrO4xR2M8wy46zE%2FpP6UOcnc14y6kuYYFjQeC5wKkoKZWpNUknP%2B8Ctu0R1mTM85QCMC1r6QKX3LFautAFXvhC1RjGqytB76qmnUNscK%2FR3gpYk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161ab7aa873b1c-SJC",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421222209471.json", {})
  .matchHeader("content-type", "application/json")
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421222209471,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421222209471.json",
        name: "Anakin",
        email: null,
        created_at: "2021-10-20T23:42:25Z",
        updated_at: "2021-10-20T23:42:45Z",
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
      "Wed, 20 Oct 2021 23:42:45 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10011",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "629",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"646fb130dab3cfa3f14da593f4f368bd"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-846d896966-ltdmf",
      "X-Request-Id",
      "6a161ab96cae3b1c-SJC",
      "X-Runtime",
      "0.548468",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6a161ab96cae3b1c-SJC",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n7RJwCnvtADGK%2FUZy%2F6ItqBfte6Nd2hyos%2BbXLe%2BD5AZzqwaHlocTfE93FUFviz3uf0RM3PcLVdnNMjcS56v0h0Y7kKYaM7MF0OUkMRksbp6s2jNkn0k3MlLbik18o4vkHppbjFwz3cQEoc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6a161ab96cae3b1c-SJC",
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
    "__cfruid=b0413fd6e88786ff76c00b42239ff73f58f90626-1634773294"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 20 Oct 2021 23:42:45 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10011",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "628",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-846d896966-c6gdj",
    "X-Request-Id",
    "6a161abd5bef3b1c-SJC",
    "X-Runtime",
    "0.169712",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6a161abd5bef3b1c-SJC",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8UU9cHfpC%2FvzbcC7KjihVFF2d%2Fdb9%2B22HjAputDPvnXvuliYXE3Xl7MMZlLjlAavbh4nLEHn2cnRKiIMCTvM%2BCQ121X287jxj0pOBmEY97sH4boZeA27oTEq0oJWh%2Bgx%2Fc60glPMQi8LGSM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6a161abd5bef3b1c-SJC",
  ]);
