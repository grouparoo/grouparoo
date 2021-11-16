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
    "Mon, 15 Nov 2021 23:20:04 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-pz2mf",
    "X-Request-Id",
    "6aec353dcb8351d7-SEA",
    "X-Runtime",
    "0.204101",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec353dcb8351d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rzjVgYSCrBeYYRn784NJj7tpL%2F8GP49vrkSnWRRUWDyGfwNfQSMta4o%2FxQA0KSKhg5aAOCZ6uxkU120m%2FAJVVvKI1Pg6UyGyDRhvHK3aydDpb3HAeubCWXQ%2FvkAsXjcyQNoD3kqc%2FYZKWY4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec353dcb8351d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:20:04 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-2tdjk",
    "X-Request-Id",
    "6aec35435a4e51d7-SEA",
    "X-Runtime",
    "0.156935",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec35435a4e51d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RiOlc%2B3%2FWw%2BCvzsN2fd6XzdXhFJve6XUtugwcMkPbUTH3c29%2FlseET5qTYMxOPZrcV28L4ZZ9oaaWRnhF%2BJCxpjJiD1a0gQyBqSQz16GMU9F9YFxnyB79DDVTkbmw80f2l0sfdCsekS4NuU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec35435a4e51d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:20:05 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-pqkmz",
    "X-Request-Id",
    "6aec35472f4151d7-SEA",
    "X-Runtime",
    "0.166942",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec35472f4151d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4uM05jbBBjEjOGdoPb%2FphmoBCMyr%2Fsz2ec7hjcfUHMhVvvj%2FOCBFgwilNN%2B3oL2b3VYXqjUKqq0j5ayiWT4Hn37e0KfX0ts35AKkVLyYEBSe%2B8MfjzVqXsnwTLKQwj1cTC0SaJRj4OC1dyc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec35472f4151d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:20:06 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-4dtjw",
    "X-Request-Id",
    "6aec354bcdf151d7-GRU",
    "X-Runtime",
    "0.189424",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec354bcdf151d7-GRU",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gC10cUSvqZAhS9ctV07UuFBsMCeX2kdjyTkr7F6r8p6UIJ7W8pVJRaCshj5nPzFTTPLE4q1l7fcwnJPoOXe6sIe24w93Z5YghhqlltXPnugpjQYBUhOZQa0OR1Upns4JwO7wwCV%2FVlA3tdM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec354bcdf151d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:20:07 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-62vjj",
    "X-Request-Id",
    "6aec355328fe51d7-SEA",
    "X-Runtime",
    "0.168634",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec355328fe51d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bHysgzrDJUdkwW1hz%2F56bBsVOOD4BJMALUP%2BDNrzqerwaoiip5ftqBegXBohuOXlksbo7Slw9q1y8TzFHAv8OIN1uw32cgxfjOiz9mLgiTebpyWHyG10Z9Xpvy7sbK21cHKANKMQV83ohQ0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec355328fe51d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:20:08 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-mx99t",
    "X-Request-Id",
    "6aec3556f83751d7-SEA",
    "X-Runtime",
    "0.163753",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec3556f83751d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wywlriN5%2Bjy2iKOurdFBkzqxiEVnUCQO4rA%2FtFc6TsAocKE0RJDAD02pDLyQxtdJOnkOhH67mSPZgju4memquXVpIwHTjUKP6FxbT5hg%2BOChQjSIZIA9Q4tJgBFWCcM0iO1E7UW6e46OSzs%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec3556f83751d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:20:08 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-5qgfv",
    "X-Request-Id",
    "6aec355ba82451d7-SEA",
    "X-Runtime",
    "0.160310",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec355ba82451d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9otn0KW%2BRafzm1Yf7AXDkyQ1jhjGLkCNby29VE%2F2y4xZr4in6NecqEwn2xF8a2%2BtlqHKEn9ha6SGX%2FAWmMTDbopTAGzheCIwvp2wOGKNup6Nl8bOfwyi6elhgPuIU%2BbXdi%2B5Y4bFm%2FvWfIg%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec355ba82451d7-GRU",
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
    "Mon, 15 Nov 2021 23:20:10 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-lffq5",
    "X-Request-Id",
    "6aec35624cf47986-GRU",
    "X-Runtime",
    "0.148766",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec35624cf47986-GRU",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TsLGtdRxj8qhvDN1MFyygLCz63RYGhM%2B%2B4GwqnJ7neQdKvpwGJILkwigyrdSb0qPa%2FjnW%2Fx0ZIIFdUHB7RQVFIP5vTkoxRcivC31i9cigQMMAkwAeMXLehC2BUuOpJWLbAiyiAt39YSE09M%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=6208d30b98139c78e9ec05c88e14ea0c33e9dafe-1637018410; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec35624cf47986-GRU",
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
    "__cfruid=6208d30b98139c78e9ec05c88e14ea0c33e9dafe-1637018410"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:20:11 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-xl88g",
    "X-Request-Id",
    "6aec35696c917986-SEA",
    "X-Runtime",
    "0.176612",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec35696c917986-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h0eDU3YB4itrkiAxh%2BPkaC4n5L6Y0oexuAZR38L6NhoqONkMAid0S%2F8dZAE%2BmMLdq33nCEq5Fc0XuFejibfdQB0jxccXbrjRNWdZYPPxy41KsJQCnJ%2BgbDdm7IciPdOWSpBs5Wyn0qUuW%2Fs%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec35696c917986-GRU",
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
    "__cfruid=6208d30b98139c78e9ec05c88e14ea0c33e9dafe-1637018410"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:20:11Z",
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
      "Mon, 15 Nov 2021 23:20:12 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1004",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"a707e39fdc581965b0d6232c98a5effe"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-7tpxk",
      "X-Request-Id",
      "6aec356e1da87986-SEA",
      "X-Runtime",
      "0.458872",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec356e1da87986-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3UW6cCBfkhRllvKr1jIljI6ST9GG8PMwBZJw60OyOR01Uh3o%2F%2BsKWIwNhO8lZ0Vj7hIw3zPejR1hHGnvmnnOPOwBQvYSm5haZa2WDtq%2BAEzjZ6YkcYVhY%2FPZPZ0ptPthrSRuIBk1tYoCAW8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec356e1da87986-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:11Z",
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
      "Mon, 15 Nov 2021 23:20:12 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"4b7d894588da0af5b29e61a1cd58b402"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-2tn26",
      "X-Request-Id",
      "6aec35743e4c51d7-SEA",
      "X-Runtime",
      "0.203946",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35743e4c51d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UxJl7Jmi36Pj1bQ5dwzRTy3eLOPNBd7CQW1V%2Fg%2Bb3dsI8GkCcoiGqAVFPihFfmy5s2LFp3tUiObyr21XoOSMXz9t%2F7UCGwK8jeL2nMV9TMJRpGQu3Rb%2Btq9pws2v7hB%2FOfXc0X6fQp1jgBw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35743e4c51d7-GRU",
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
    "Mon, 15 Nov 2021 23:20:13 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-msrb6",
    "X-Request-Id",
    "6aec357a998bf1de-SEA",
    "X-Runtime",
    "0.155069",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec357a998bf1de-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ie%2FLz%2BRirNLlhXHYDPSI9BTIgRmLycuLDEvRa2eAC8h69OXCgd3J%2BG2r6dfGqHl8EjtrbtnzVfvkVSADNkj5smET0KGIAI9u9BGssjgPMCH3J0kZQwy9V9p99oZaVJsLsHK9RSMriFn64Pc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=5b221ba5c1562d609a444dd2d92bd14c901073fc-1637018413; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec357a998bf1de-GRU",
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
    "__cfruid=5b221ba5c1562d609a444dd2d92bd14c901073fc-1637018413"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:20:14 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-2m8rf",
    "X-Request-Id",
    "6aec357f1f0bf1de-SEA",
    "X-Runtime",
    "0.168329",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec357f1f0bf1de-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=flgoSWSdkkV52qpl%2FaJLac1FeolzyBZz7e%2BquJbNXLmVGk0VQbk1HD0JNP2KP1oLDDObp1aTCeug3w6rI2IzK7I6leXGmQfVrcwhqtYyJIyQuUWfY%2FBG9i9yj8U1Gxbf%2FzUxlFj5JE%2BNf%2F0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec357f1f0bf1de-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:11Z",
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
      "Mon, 15 Nov 2021 23:20:15 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"4b7d894588da0af5b29e61a1cd58b402"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-zxdzx",
      "X-Request-Id",
      "6aec35854ba46abd-SEA",
      "X-Runtime",
      "0.199714",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35854ba46abd-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x3FyBLfivGcjcUTgag3dSucyiMtD2N6luJYwCIVZGrJImvdU107ekQ3OOrU%2FVXT4k%2FsFXeP8HkoKNJh3MWY0YQsIiO4maVMlJ8bSxPf%2FDlkXmqnugyb6Jo2hofDCoMetWUTLRo9qJoyvbq0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=2719c1c1afba44c0d15747f4da63fd699e9208cc-1637018415; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35854ba46abd-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=2719c1c1afba44c0d15747f4da63fd699e9208cc-1637018415"
  )
  .matchHeader("content-length", 209)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:20:16Z",
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
      "Mon, 15 Nov 2021 23:20:16 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9834c39c7abe08e778cab640bd7ff54e"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-tc4bs",
      "X-Request-Id",
      "6aec3589eabe6abd-SEA",
      "X-Runtime",
      "0.424880",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec3589eabe6abd-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=el19Ogm1X1aLKnHDcJ%2BNE%2BWmbx1fZtfCL9xiE0OzaOh8osMd4HKJd4EfpRMv7wZlfhLR5lywKtSHO1O421sVbnYMKcjmVIKi3rlqz0RuZ8nUHpyWQU4ffAvWgBPB9LCbuyofQ34Gd%2Bd94fo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec3589eabe6abd-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:16Z",
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
      "Mon, 15 Nov 2021 23:20:17 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"5a427ca8fea1c2b6c29360e174899ffa"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-k9vjj",
      "X-Request-Id",
      "6aec35901a3051d7-SEA",
      "X-Runtime",
      "0.212103",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35901a3051d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tZqIf%2B3rus7TDQ44j%2BN08bLnmsjMguPmpoiHqEsbEZ5NkzEwU3W6lzGWGvkc%2BfsvMRDku0oxccJaVT5COx%2BpKIytMhmhXrO3ZhCvHqbZhYWnekxgsXoRRDPdFvjHDTNqMrCjwVJyNKiDJxc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35901a3051d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:16Z",
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
      "Mon, 15 Nov 2021 23:20:18 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"5a427ca8fea1c2b6c29360e174899ffa"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-2m8rf",
      "X-Request-Id",
      "6aec35966e086b0c-SEA",
      "X-Runtime",
      "0.193074",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35966e086b0c-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5eX0YbxQ95lbN7umk%2FF49Jm2Pj1wUiGgShIb2a60xKX1pR3ftKtAIOZ91CVku9YcWiFw1w0kSN5DrdvzIE5BkWjjnu4T9MkvFFzCAccO9TNveJ2c41Xw42dafG6C%2FnUldNnwuYbDxPDbxGE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=609b4f6fa58f18c26d2e407d4969af97c6338234-1637018418; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35966e086b0c-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:16Z",
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
      "Mon, 15 Nov 2021 23:20:19 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"5a427ca8fea1c2b6c29360e174899ffa"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-hc57z",
      "X-Request-Id",
      "6aec359b2b7a51d7-SEA",
      "X-Runtime",
      "0.191118",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec359b2b7a51d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V7cI%2FqvMVjbPBHSszfOGpWDFpkZPeBlKPdIbcK0IvSWembn3bYPje22uqqZHdThaac6zrjYNLR2drnuFoea4LPOuGoUdz1Pezl%2BK5tbXpjQi1we%2Br%2Bdv63tprYltl%2FYvzbdhYFbDFGXuhoo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec359b2b7a51d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:16Z",
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
      "Mon, 15 Nov 2021 23:20:20 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"5a427ca8fea1c2b6c29360e174899ffa"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-6wwzp",
      "X-Request-Id",
      "6aec35a1a9fa6aeb-SEA",
      "X-Runtime",
      "0.251612",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35a1a9fa6aeb-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JEkK0Ajnt0wARn2BSO5yuv9yFmlfkR754qkg2PH0SefTwGv6HXEcST6KggPShKzHtQDfotLqHdvhJ%2FQ5ckmgJ8piTqt397Wq9HpSh1C2aauiAWGP9Oqlw1KyBsoVPFCRwdV4koYtaz44j%2B4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=e27032c9dbe3b9cc0bc7439f24ad39bb51741959-1637018420; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35a1a9fa6aeb-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=e27032c9dbe3b9cc0bc7439f24ad39bb51741959-1637018420"
  )
  .matchHeader("content-length", 231)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:20:21Z",
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
      "Mon, 15 Nov 2021 23:20:21 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "680",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"46e877eab5e597f8a57db692573643fc"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-znm6p",
      "X-Request-Id",
      "6aec35aa1e1c6aeb-SEA",
      "X-Runtime",
      "0.448593",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35aa1e1c6aeb-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u9Zqf%2FEtHg9ASojbWVTq3NYrV9VYOHXh21XHJ3LxDP%2B03A0zZQEmrrqB0JOiOEWteVPpjjPNQVewGBFxQMvkyV35oqPnLQtZ8mkY%2FK0pVrbCWLWomfzFQl%2FyiIrZV6WiSY1G8kcmiTROFy4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35aa1e1c6aeb-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:21Z",
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
      "Mon, 15 Nov 2021 23:20:22 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"0333013571ebb1e759baf5e9b6deacd9"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-bm4sb",
      "X-Request-Id",
      "6aec35b04d6251d7-GRU",
      "X-Runtime",
      "0.209415",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35b04d6251d7-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yUe7DbouTZb2o3RhuBW2I5XSgWPCGsC5J3AudeCypKClMm80xgZcx%2B%2F2qnomVasKk3ngajnnt%2FHroyWP8yncJiJH9yJJt5KLFXOWHZ1Gdv0YKSr8P%2Bi%2BHaYSf5xmSkHPDGGoh6gNgq3PIdo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35b04d6251d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:21Z",
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
      "Mon, 15 Nov 2021 23:20:23 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"0333013571ebb1e759baf5e9b6deacd9"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-5jlhw",
      "X-Request-Id",
      "6aec35b9bc76f6e8-SEA",
      "X-Runtime",
      "0.190034",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35b9bc76f6e8-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5yGac3bYndaQsj65KYUd%2BC4oyrSqZVARWm4k%2FGcLEoFzLSQ%2B%2BshQUfrFmRAYAqYKrgjayDLu063cWXrbtbTEzouWzRJLjGaME1mh6dGKEoIoSOjqiEwo6L29zlZKAnEuZxo91ZYbod06wWY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=7c2075eeae83c4fdf01e9defd70d0d7fe4240e76-1637018423; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35b9bc76f6e8-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=7c2075eeae83c4fdf01e9defd70d0d7fe4240e76-1637018423"
  )
  .matchHeader("content-length", 201)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:20:24Z",
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
      "Mon, 15 Nov 2021 23:20:25 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "677",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"53362fde1986f27e80ac410aa30d520a"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-8xr8n",
      "X-Request-Id",
      "6aec35be6a2df6e8-SEA",
      "X-Runtime",
      "0.481914",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35be6a2df6e8-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6ZDGfzOJY%2BJpi03TT%2Fl74lXyPoqznEl1L%2FNbtjuzngOieXAFxqCf7FIMejz4ZvBbcl5SR7KA4p0y4vKdHbcDE4QPMp0wIf2513FjAo0m1xTH%2F7D3qqIqzu%2FHLT%2BvNPG6J7y9GOFqi3ZlrCw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35be6a2df6e8-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:24Z",
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
      "Mon, 15 Nov 2021 23:20:25 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"10079b269ed6930cacc90bb2025d449a"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-g56cj",
      "X-Request-Id",
      "6aec35c54d7751d7-SEA",
      "X-Runtime",
      "0.189810",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35c54d7751d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=stuzrs8UPwwPOTT6F6jU8zZYfTv64ZAhrUJl3t5KKCI1TYLLrH3Bd0DxkKIZj9wOLiHaKJk6YLdhcmwApxE9x%2Flshbt%2BQgbzjvT7FoW9Pfm97EZxaowX7GomB%2BlVpU649iSsFem1y5BFSaQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35c54d7751d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:24Z",
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
      "Mon, 15 Nov 2021 23:20:26 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"10079b269ed6930cacc90bb2025d449a"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-z9ldd",
      "X-Request-Id",
      "6aec35cbbe056ad8-SEA",
      "X-Runtime",
      "0.287394",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35cbbe056ad8-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YjT66fLExOHLf3YvBflsngOaaLujgiVIPLMoG56ek1cgNAaQk6zCMy%2Bzzdz11qqWxqPALI1Pm7JaA13FhhaA%2B1xCyknXzCZaHzNVZlWjCEfrCPNtJSWpYDFGCJDI4ZAWZwurPnqvHADR4NY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=39647b21d1814992426d035cd860bd0598bd0552-1637018426; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35cbbe056ad8-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=39647b21d1814992426d035cd860bd0598bd0552-1637018426"
  )
  .matchHeader("content-length", 135)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:20:27Z",
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
      "Mon, 15 Nov 2021 23:20:28 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "674",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d1f0d243c6d3dc198f1c040ad7ad9d2e"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-2tdjk",
      "X-Request-Id",
      "6aec35d0fda86ad8-SEA",
      "X-Runtime",
      "0.341080",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35d0fda86ad8-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7ds01xoHaNR3fTTqzTe3yycNaQtKaAPQyv6dOcWlCMe4XdyDQ1xdl7vj9bafOJSmMcfwop2tmzjeeA8x8Z6WJ7ki9SzNkIey1vt6eMRbCM5CM9uBowQXgc%2B9AiUeTmlAYLH10lur8A0502E%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35d0fda86ad8-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:27Z",
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
      "Mon, 15 Nov 2021 23:20:28 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"a28ea86fec70560a03bd01344904fb2b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-g56cj",
      "X-Request-Id",
      "6aec35d90ab051d7-SEA",
      "X-Runtime",
      "0.202744",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35d90ab051d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4mvFp9dvjcxMnCpyz1320ydjJA5Xqc9tlEea40RFRxowHJ7mLu4s41zMUMSJcCd8P%2BZxmk9b%2F7PUMTA8vBs%2F%2F3kWlUf2tTvEK5l1GvRnOmfKP0KLiCN8VNrFE4iPPOYuV84Dv%2FcF7SwyVkY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35d90ab051d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:27Z",
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
      "Mon, 15 Nov 2021 23:20:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"a28ea86fec70560a03bd01344904fb2b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-2gm64",
      "X-Request-Id",
      "6aec35df0c4aeee2-SEA",
      "X-Runtime",
      "0.203822",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35df0c4aeee2-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H%2BgTnoJi7A8ghJ0XYW6PPUOiEkMpvPwYtl5h8ASuTOOYngXcHMXcmzKVv25VM93KyvdaOQNac9UMfxPv2mtXuGrJaL0T5YdwJXpWzGM5PvoN2uyEWtPD%2FliaGWSGgJdtxrly3%2F7E7jNBrb0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=969d8ae5f05a99c265aa37c7adefc18345c6ce23-1637018430; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35df0c4aeee2-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=969d8ae5f05a99c265aa37c7adefc18345c6ce23-1637018430"
  )
  .matchHeader("content-length", 111)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:20:30Z",
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
      "Mon, 15 Nov 2021 23:20:31 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "671",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"28e75ae15e21fb88d92d83c77ccce51a"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-6q4xz",
      "X-Request-Id",
      "6aec35e65d66eee2-SEA",
      "X-Runtime",
      "0.378485",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35e65d66eee2-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZbnmYPrE3exoIvGfLNqejBxyCKPk1u3aYlOQUyNEXiQCC%2BJCt2t9oRyK1sq8VBUIURSzX6RuA9wLUMpe4xwU57qY6%2BPHwVpbaPTSgbSUrutqVudfSEyQckxmYZ%2FXIPIC%2BMoPHg5TEgbojLg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35e65d66eee2-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:30Z",
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
      "Mon, 15 Nov 2021 23:20:32 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"8685e0a04761bf3dd05360cacc8980f7"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-dqcpt",
      "X-Request-Id",
      "6aec35ec988751d7-SEA",
      "X-Runtime",
      "0.221187",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35ec988751d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xwptHmnBdVkRkZpGY6bQeT0i9UyYfXUpiXn%2FXQda%2FFjn0%2BXDRS4go9QkjpAEKtevubfgN67jM6uxAqnY9uCs3u803xHHXxGFZcde1ryU6%2B8sTOHDUJni2eZTQI3p58PySxbS1KkSqw017Qg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35ec988751d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:30Z",
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
      "Mon, 15 Nov 2021 23:20:32 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"8685e0a04761bf3dd05360cacc8980f7"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-q6dbs",
      "X-Request-Id",
      "6aec35f17fe351d7-SEA",
      "X-Runtime",
      "0.205166",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35f17fe351d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zCt97QhyTfbHjjjYPnxH2xI2w9Ybo%2BnUWOSK586Lr9QRZFkb2hmDqvUcWJlgRNcTr5ghYP8Ruw0XkeuW1SJXSHcahAgkaJBFFp4sLidZKyM1zK5JbXx5h5br0N355dGqf3vmASifyGQorm0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35f17fe351d7-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .matchHeader("content-length", 48)
  .once()
  .reply(
    429,
    "You have exceeded the rate limit for updating a single unique user. user email:  id:  external_id: ",
    [
      "Date",
      "Mon, 15 Nov 2021 23:20:33 GMT",
      "Content-Type",
      "text/plain; charset=UTF-8",
      "Content-Length",
      "99",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Retry-After",
      "27",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "668",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "Cache-Control",
      "no-cache",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-5qjmw",
      "X-Request-Id",
      "6aec35f5ce4d51d7-SEA",
      "X-Runtime",
      "0.155449",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec35f5ce4d51d7-SEA",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oZj25o%2FShpfj3fomAVAAOnwSkMC90ZxBu98CUDteQUMMdiKfW0iyMWvMz6ytTPOIIkrsWoUcg36KuU3qVL2pMVlyXqA1V2ouezpwn%2BxoaBWN1l4S3JIwbHTgf2NLbKvaZI2pCrGX7wqYeC8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec35f5ce4d51d7-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .matchHeader("content-length", 48)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:21:34Z",
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
      "Mon, 15 Nov 2021 23:21:35 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "699",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"8dc9d575cc8881f652868f168e11ad43"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-7p58b",
      "X-Request-Id",
      "6aec37771d1d51d7-GRU",
      "X-Runtime",
      "0.285177",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37771d1d51d7-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OO4hJx2IdStSXQWaDi1EN6zpQWsTOSfCFX1WN1rslwqUqppYEtdg80JNLJLpeaQanzD85llMUFUVI7fzKWciJvQcTP2uy2uX3h24G9j3XeHfgM5FcyhyYcKwGjiBInLcNAK9zSU3NOJc4NA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37771d1d51d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:34Z",
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
      "Mon, 15 Nov 2021 23:21:35 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"904df9c52ae84e224e95c0b7feacaf9e"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-h5dpn",
      "X-Request-Id",
      "6aec377c8f6951f2-SEA",
      "X-Runtime",
      "0.201956",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec377c8f6951f2-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d%2F2hlp66QiZOFdvJ6AtNLAvJg1n3SyAl3ycV7KRlq52JxSXC1M7RGfXV0j5dYNhGHu2mTmFRxWvJgji2GC6MbQ9Zev6ch13JN8Ehcp3wX6FId5HLL7aPXZ3ZRzo2jhvXgwuah3hg%2FbUrdx4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=7bfaba6f74ac199c8b34fde798614338b11a48c0-1637018495; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec377c8f6951f2-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=7bfaba6f74ac199c8b34fde798614338b11a48c0-1637018495"
  )
  .matchHeader("content-length", 144)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:21:36Z",
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
      "Mon, 15 Nov 2021 23:21:36 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "697",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6f9547ede1cc3e5ed135f19c99134be1"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-2tn26",
      "X-Request-Id",
      "6aec37807d3b51f2-SEA",
      "X-Runtime",
      "0.404671",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37807d3b51f2-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dmX%2Fl4oER30HzAx0pVNPr%2F7354Wszx9N1DBakzeK2DXTstCXRaiWBE1GQkraaHfmsOAjaDzGzM7R%2BuYWlFyN5uDHCsKIixGHvCiqXI6z6ZIkaoip2K3IO5XdQRlWqarNpvfFsrb4bDoj7l4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37807d3b51f2-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:36Z",
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
      "Mon, 15 Nov 2021 23:21:37 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"7f55965d531383d94f0f07c43a7a1ed6"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-6vmp9",
      "X-Request-Id",
      "6aec37867d5451d7-SEA",
      "X-Runtime",
      "0.186795",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37867d5451d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tXN9o73Lcq9WwrTBfAGLJ1Od9BP21gamFCDS7X1JGvXxsKo2ceN9kXcWZWwoRBdr6QE7J1CirLGE%2FppYzVIJvLxM0o4DMosOdTKg1TTe1upZ12v2GsFKpj7ikYKhDlVPz%2FAapRk3InQbJeQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37867d5451d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:36Z",
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
      "Mon, 15 Nov 2021 23:21:38 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"7f55965d531383d94f0f07c43a7a1ed6"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-m2pd7",
      "X-Request-Id",
      "6aec378c8ef8f764-SEA",
      "X-Runtime",
      "0.184999",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec378c8ef8f764-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2fi%2By7eu8phjIi6IZz%2FGDU67qBsFLHLeEBBYfdvFxnShbHpimgLSp%2FsNwvi%2BpTr6cMqgV0YU9kqjFZuF16AwRr0WpbcFLdY%2B4sMnR40OQTc1CbEJCMS89U%2FY0V0YkZeayR1DhJoDeVeyxs4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=0fd4807f15ff603ef58415fe1d79a60adb5c32ad-1637018498; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec378c8ef8f764-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=0fd4807f15ff603ef58415fe1d79a60adb5c32ad-1637018498"
  )
  .matchHeader("content-length", 104)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:21:38Z",
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
      "Mon, 15 Nov 2021 23:21:39 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "694",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"e03edf0c158aafea5edcf667e44b2d2a"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-mm9kz",
      "X-Request-Id",
      "6aec37908bc4f764-SEA",
      "X-Runtime",
      "0.327431",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37908bc4f764-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ztu7E6py6OAvf5SO6d0d3kvOcINMYFbnFNP%2Fag%2FEE8TFl%2Bb8Z%2BoLs%2BUhX8%2F9jrVNR15fw36zVGYbx%2BJ8ZCSXLTMrqwJ8ILALD0ySmGelef2naT0QTEw4KgVC0x5qzSWKQj6B1VMrH95BHmA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37908bc4f764-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:38Z",
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
      "Mon, 15 Nov 2021 23:21:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"180ae5cec8ff5e104cd8c8e08e4ee127"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-g4nfd",
      "X-Request-Id",
      "6aec3795fd9c51d7-SEA",
      "X-Runtime",
      "0.200114",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec3795fd9c51d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Lr27dHL6sAmf0OcGrkqiRWbx0Ib%2FFKYNitJb4mfNB7tEkvl47sdjHHa%2Fi7Yff4%2F9%2Fw2rbEa8B7fr%2BUqc25o0npnHSZXBoA5cYpRGq0852c%2BPko%2BCgHBjeifdkb%2BgsARMykkp44t2Z1JEYqI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec3795fd9c51d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:38Z",
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
      "Mon, 15 Nov 2021 23:21:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"180ae5cec8ff5e104cd8c8e08e4ee127"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-8bqlf",
      "X-Request-Id",
      "6aec379baef579c3-SEA",
      "X-Runtime",
      "0.194294",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec379baef579c3-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S0ZM5LsRW60HXW%2BSCNrGnIJIO8ZjWbBMr54PiYKIE8KY6VrRdOHtjGp1bYdbv0s0u%2B3S21SJ%2F7r8PY2cAyMR8F6aKMu%2BrPIoiyk6sjhnIZ2ixqvYzZ6wLZQFRoEj7UHluP12ZiTOH1CYJ4Q%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=05229bb05e3179654f9d942793e78db194bb18b1-1637018501; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec379baef579c3-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421941820731.json", {
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
    "__cfruid=05229bb05e3179654f9d942793e78db194bb18b1-1637018501"
  )
  .matchHeader("content-length", 116)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:21:41Z",
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
      "Mon, 15 Nov 2021 23:21:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "691",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"fde86b5fba589ba42a3f898ac336a90c"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-msz8g",
      "X-Request-Id",
      "6aec37a06f8579c3-SEA",
      "X-Runtime",
      "0.349367",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37a06f8579c3-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ESqfOvuqXwPB4c9qHznT9QzuqwBk3lbfUWv4gbxvSMf9Rt3PWKkHL4ufmwqXIzdVZVnL5HLd3zXoj%2B53SYjk3EIua3Xe6bECIrebxtBZpF8aPFzFb8OTD4ghJ9uiaJucSqSlJf9ZZN0acYE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37a06f8579c3-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421941820731/identities.json")
  .matchHeader("content-type", "application/json")
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731/identities/390986545211.json",
          id: 390986545211,
          user_id: 421941820731,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:20:11Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731/identities/390981158372.json",
          id: 390981158372,
          user_id: 421941820731,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-11-15T23:21:41Z",
          updated_at: "2021-11-15T23:21:41Z",
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
      "Mon, 15 Nov 2021 23:21:42 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"42f914e02be7832e889817c3b79312c4"',
      "Last-Modified",
      "Mon, 15 Nov 2021 23:21:41 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-xfsdq",
      "X-Request-Id",
      "6aec37a77e0b79c9-SEA",
      "X-Runtime",
      "0.157408",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37a77e0b79c9-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zB28ChGze0H3mBkJkgPYIPN3e5F2%2FMSfwmuafb9aSjtIRtKdEcOvNbXPTD11i%2BDdHHhzD9m5z7Hef5BR5TbqdKVe4Z4164lEc1cXEC8BCdEnxxKRv0DJTC%2BVaqxrh05ekyQtVVxM9RN%2Fnxc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=e132bacc41c8d021525e6bd3b7bef449e7c8a755-1637018502; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37a77e0b79c9-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/421941820731/identities/390981158372/make_primary.json",
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
    "__cfruid=e132bacc41c8d021525e6bd3b7bef449e7c8a755-1637018502"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731/identities/390981158372.json",
          id: 390981158372,
          user_id: 421941820731,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-11-15T23:21:41Z",
          updated_at: "2021-11-15T23:21:43Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731/identities/390986545211.json",
          id: 390986545211,
          user_id: 421941820731,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:43Z",
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
      "Mon, 15 Nov 2021 23:21:43 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"55a7874cb9481dcd4659de1f7fbdd477"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-ck7zx",
      "X-Request-Id",
      "6aec37ac0e9e79c9-SEA",
      "X-Runtime",
      "0.500518",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37ac0e9e79c9-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gPT%2BO9%2Fm9i8czZOrb%2BR2LrVtHOOqj839NwO%2Bkh5I5H8Azt%2FMP305aR7nAhrJ3WA4yqphJbwKQvjwGpOfJiTwqLkSji2QmQqUDWwpo1ZP7BwA2zlPodzU%2B7txO2uFkJJyRkXPFzP02658Upo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37ac0e9e79c9-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:43Z",
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
      "Mon, 15 Nov 2021 23:21:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"1b5d5221a1b78ea312c9330dc1e5e146"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-t6x4p",
      "X-Request-Id",
      "6aec37b1ced451d7-SEA",
      "X-Runtime",
      "0.165265",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37b1ced451d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D%2BTkry3wTvNYjDrZmG58VHSH37VbPhlNtc6imCUpw%2B%2BJ1D2Fd9esbrXcO1F2fCEMVxkoEJycnk9%2B8hPpVrgDfQ2uRojp%2FkMVqEsqNnDGVbjIBWwZOL1YFNWP%2Bo2TX9N4fW8EH1b2FE1W35I%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37b1ced451d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .matchHeader("content-length", 193)
  .once()
  .reply(
    201,
    {
      user: {
        id: 1903375554467,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375554467.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-11-15T23:21:44Z",
        updated_at: "2021-11-15T23:21:44Z",
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
      "Mon, 15 Nov 2021 23:21:45 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1028",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375554467.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "687",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"2302d1854989aabb96f27eda779c2de7"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-2tn26",
      "X-Request-Id",
      "6aec37b53c5651d7-SEA",
      "X-Runtime",
      "0.509896",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37b53c5651d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jo49GxU%2B35I2YF%2FmK1zXb1b%2B1JLQoRO43qNtONky6AgIWPUDZVvCuto9TYPCKFwC0pOw14ZUqtU3t%2FHUZYT9NEACecv1yrnY735929MCA24IrIL8td4PxFjeLqeR1F6pP7%2Fgp9ekl6KRQxY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37b53c5651d7-GRU",
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
    "Mon, 15 Nov 2021 23:21:46 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-2sklx",
    "X-Request-Id",
    "6aec37bd6885f6e8-SEA",
    "X-Runtime",
    "0.142303",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec37bd6885f6e8-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B0Q8RhZT%2F4zXfwrMZzly%2BBLWRyuPPdr4zvOYmRQFMdSBxjIr31aEwZSUXH7%2BPSPKe2oh2OldsiH2tT8KkvcYI4bKukrkvOVYAHk7R5gpzVFSbR9ybdV81lu43Xtj8QFUfamXwlK%2Bxx7oloE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=e0ebdc0609742c47c7c4211c713445912115174b-1637018506; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec37bd6885f6e8-GRU",
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
    "__cfruid=e0ebdc0609742c47c7c4211c713445912115174b-1637018506"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1903375554467,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375554467.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-11-15T23:21:44Z",
          updated_at: "2021-11-15T23:21:45Z",
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
      "Mon, 15 Nov 2021 23:21:47 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"bf38da5e493053f981204e795b255905"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-9ptf5",
      "X-Request-Id",
      "6aec37c1bd3cf6e8-SEA",
      "X-Runtime",
      "0.229669",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37c1bd3cf6e8-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FEmtqH8zV0xRGsVxiHV2AvBQzzMWENUE7TaO34424tX7AOQkFz0Nji5tPcTHrEY4lb7Qeomnnpepd8qYsd8%2BVET3%2BKHMRgq1n7u94BuMNNlSsAX%2F3PmpxY8RdnF%2FCdUYP%2FyIClMkzcfXWjM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37c1bd3cf6e8-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/1903375554467.json", {
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
    "__cfruid=e0ebdc0609742c47c7c4211c713445912115174b-1637018506"
  )
  .matchHeader("content-length", 200)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1903375554467,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375554467.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-11-15T23:21:44Z",
        updated_at: "2021-11-15T23:21:47Z",
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
      "Mon, 15 Nov 2021 23:21:48 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"789d44d72000a7f8349bb8292d2a61d8"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-6wwzp",
      "X-Request-Id",
      "6aec37c619cdf6e8-SEA",
      "X-Runtime",
      "0.398496",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37c619cdf6e8-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RWIfvymF1wsiDMOFJ%2BMq%2Blnf%2B6Zex%2Blsde9XSOeW33fZ0P3EMEl6re8rEklz0UB5T46%2F%2BrlpwyiiOaC0hHr6MT0HtqV1MjdyQ1%2BF4GTlqmK2Cy9LBzVq4JOCbkRyW%2FoihWqFetpSRVhxYzs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37c619cdf6e8-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/1903375554467.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .once()
  .reply(
    200,
    {
      user: {
        id: 1903375554467,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375554467.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-11-15T23:21:44Z",
        updated_at: "2021-11-15T23:21:47Z",
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
        tags: ["test_recently_added", "existing", "here", "checkedbox"],
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
      "Mon, 15 Nov 2021 23:21:48 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"9b72e5c96b4e6b6af4586a2f660497a6"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-jm29g",
      "X-Request-Id",
      "6aec37cc0cce51d7-SEA",
      "X-Runtime",
      "0.196908",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37cc0cce51d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BNsG%2FXcK1CG%2BdDWIDlrMiwuMSARCn1nINqEB1VOqgjkmDIugfnwv2%2B2NYL5KKjh7dma5X6x76yyWIV5jGqY4TyGi16%2Bygi3Zq6L0g45B3NPhY%2BtDh%2F2L9Ffe1a%2BwICIxus3dhTgDmZu%2FPwE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37cc0cce51d7-GRU",
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
    "Mon, 15 Nov 2021 23:21:49 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-7tqft",
    "X-Request-Id",
    "6aec37d2db7c4d48-SEA",
    "X-Runtime",
    "0.147623",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec37d2db7c4d48-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2cB4HSZ%2F79osKM8qfqmGihxcOvq7ebm%2BRZhGH%2FImNOw%2FjwJpvak4XIn5fym6WK03wPWZMxGOMXt7T9JB3o2ib28hOTmxM5ClJRbD4Z1niKmq9byEd24aXAOGdnrv20k9Gwf5ZQSKdluOuqM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=ec3b0ee8cec65db3bc3466efb5900a1f14c0a1a9-1637018509; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec37d2db7c4d48-GRU",
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
    "__cfruid=ec3b0ee8cec65db3bc3466efb5900a1f14c0a1a9-1637018509"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:21:50 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-nll92",
    "X-Request-Id",
    "6aec37d76a2c4d48-SEA",
    "X-Runtime",
    "0.184200",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec37d76a2c4d48-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kN9hHsE50GeTLVVcDTBd4eZsW9jVKnMC6k%2BGUTDo6i35VO%2FH6lBtQIS19LQyzIvUtr7NyqzRO2cdAJRoBfIRVq%2BVHmTSg9rym3jZ7nFPo%2FR1HfyMWQ%2BYG8Ne6kgyUIiiAoM1FGOwK74wGFM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec37d76a2c4d48-GRU",
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
    "__cfruid=ec3b0ee8cec65db3bc3466efb5900a1f14c0a1a9-1637018509"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:21:51 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-kwnxf",
    "X-Request-Id",
    "6aec37dc0a854d48-GRU",
    "X-Runtime",
    "0.157945",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec37dc0a854d48-GRU",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UfcDRmf%2Bb1CNIVWW01KZaSI%2Fg1%2BDukAcSSjivoZ%2F1gp7nES1ejiLuBl2cVW2af7DrtLNhUHa0POI6Qq%2FaCk4WBxql%2BZgJIBXMWvkJrS1TrorvLi16m4iAwoizIYfRmzYjL8vj85GOdR%2BxzU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec37dc0a854d48-GRU",
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
    "__cfruid=ec3b0ee8cec65db3bc3466efb5900a1f14c0a1a9-1637018509"
  )
  .matchHeader("content-length", 115)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421758455292,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-11-15T23:21:52Z",
        updated_at: "2021-11-15T23:21:52Z",
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
      "Mon, 15 Nov 2021 23:21:52 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1007",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ec517f77471ef6c3985c9bce9e10dc9c"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-vsdk5",
      "X-Request-Id",
      "6aec37e2cd354d48-SEA",
      "X-Runtime",
      "0.407369",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37e2cd354d48-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UW68y7hZeOUeeY5BfqRaXDPriP3iQM794MVKmMOJipDjV56SwrunXnfwlCFvYBL1iN4ByaBZk9DVlHdvh9LXQpsdgf6ZIjfYp7NhW1v8ORPPhvvZjh%2FKKtDr0Nl44%2BS6aUKk0escurdG06Y%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37e2cd354d48-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758455292,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:21:52Z",
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
      "Mon, 15 Nov 2021 23:21:53 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"517e6656ce107b3beea7423c0eee52db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-7tpxk",
      "X-Request-Id",
      "6aec37e8ebcf51d7-SEA",
      "X-Runtime",
      "0.242525",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37e8ebcf51d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=b6lOTGsEi71SR6q9c6xEXw3T98pRSkfXzrPhYaJwKjgPcjhNAxZUBVrwSQkA0OoWbmSKfX9Ue6o5tG%2F1PpIsRlCO%2FNqgC863ZNWvDIA%2BuR5Jk8TxF%2FdoVWzKoa76v7hubxSsQPh3pPozufA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37e8ebcf51d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:43Z",
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
      "Mon, 15 Nov 2021 23:21:54 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"1b5d5221a1b78ea312c9330dc1e5e146"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-mzgf7",
      "X-Request-Id",
      "6aec37ed3a4a51d7-SEA",
      "X-Runtime",
      "0.197541",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37ed3a4a51d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eUh%2BjwuXXnR6%2B0JDN4RReys6Bp05xcKGH6oaa0xFoFcfORAOmgLJpL1IcxFyg8CpTk4XEmJpDGxZlC0P2%2FNnYOl1VWgaf8kZgfRe6fsgeryAAZRR6Vo4Ynd%2Fv2NNCq4FViwT7VWdEuZfPeA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37ed3a4a51d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758455292,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:21:52Z",
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
      "Mon, 15 Nov 2021 23:21:54 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"517e6656ce107b3beea7423c0eee52db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-4xpsv",
      "X-Request-Id",
      "6aec37f11fea51d7-GRU",
      "X-Runtime",
      "0.205873",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37f11fea51d7-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OoL6r9S9gTb4FzKzrOQcERPVn8UR9CsQbHhMaO8jRcWJBbJMuX6Ac1thUo2gz3NhmR1NsgA8h%2FJ6y%2ByjvmYol6Z3ijUReoj%2FYm%2FqklG8lv2cCML79dw3vlQSDpBs8rxeo7Zo%2FoSmcLO16UE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37f11fea51d7-GRU",
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
          id: 421758455292,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:21:52Z",
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
      "Mon, 15 Nov 2021 23:21:55 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"517e6656ce107b3beea7423c0eee52db"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-5jlhw",
      "X-Request-Id",
      "6aec37f618d34b29-SEA",
      "X-Runtime",
      "0.170760",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37f618d34b29-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=z%2BonnAEZc2g2z0OGeMAECxeFIhm8FpQCb%2BnDpo2TNPvSVhkNtq0ZWsqHq80Bm3IRuTfkiFQ3ki6BEmOjZ9UBuauGVZ6ezWIJ8kqfUP%2Bk60YnXuLTCukK8JOajJWTLovJUZ3leA0lGzdyc6g%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=3f82434b845c8a84a249d2006684bd49585c80d3-1637018515; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37f618d34b29-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421758455292.json", {
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
    "__cfruid=3f82434b845c8a84a249d2006684bd49585c80d3-1637018515"
  )
  .matchHeader("content-length", 100)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421758455292,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-11-15T23:21:52Z",
        updated_at: "2021-11-15T23:21:56Z",
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
      "Mon, 15 Nov 2021 23:21:56 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "674",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"42ebb5f8d98fe17615e638aa75880e96"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-xspr7",
      "X-Request-Id",
      "6aec37fa8f8c4b29-GRU",
      "X-Runtime",
      "0.413511",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec37fa8f8c4b29-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jfKNz%2Fw0kEBGr4lVEK1tW8QtMkM12sKFoj%2BeAgT769LFtYqdNPp%2FUJ1zMhd1%2BD6Gv3Ro2mLKYX3kGmhndhY%2Fd2LgTRfvHzh4OZqEBHEcMgzNjfUPU4iyPA2WFrCQGxtHY41%2BmGJzs85fsCA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec37fa8f8c4b29-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:43Z",
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
      "Mon, 15 Nov 2021 23:21:57 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"1b5d5221a1b78ea312c9330dc1e5e146"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-5688h",
      "X-Request-Id",
      "6aec38032af351d7-SEA",
      "X-Runtime",
      "0.210110",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec38032af351d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PvqFATCt5Dth87NVS8b7k48s31ya1m4Nx6MqJ7SZP8xuDHQBunbhnoXoV36inBxyAL3PYkwD5uN5gO3RlMZ1Ki8TZyCI%2FfslL7TrTCYXVMPrhwcQwGWGRK9k2XQ6hOLjlwdXNgDjxHAQAgk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec38032af351d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758455292,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:21:56Z",
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
      "Mon, 15 Nov 2021 23:21:58 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"733fa72e5d478510df418e16c0f4237b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-rqqkl",
      "X-Request-Id",
      "6aec3806e92951d7-SEA",
      "X-Runtime",
      "0.215283",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec3806e92951d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wcngGx2%2BI6sgYIppXZD%2Bqk1XMp%2FAKg4wUoJu00WN6hiaOLJWwvj7hGWoTt0KrjG6EiQpGW7W1sb4FS9JSKG%2F1VM0yvzmlXskeRNshMZPktkWQAkHRjsg0LwhNNw6P5Ykl7wvq9x3odO8qSI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec3806e92951d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758455292,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:21:56Z",
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
      "Mon, 15 Nov 2021 23:21:59 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"733fa72e5d478510df418e16c0f4237b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-l88k8",
      "X-Request-Id",
      "6aec380be80551d7-SEA",
      "X-Runtime",
      "0.185679",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec380be80551d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1UGNB%2FrWxWefFtDKyXCrxg46MppngVXWtESSnkleazz%2FsxUXj4qVae26q%2B3mwWcTaPyjKYRuoE4fajp1JARvBKVDCKa2JzZj7hT%2BQ77B5o4BcZibqd6qxH6wtkS2z3IMgDqvXsdTLRStfO0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec380be80551d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:21:59 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-j98hz",
    "X-Request-Id",
    "6aec3810af3351d7-SEA",
    "X-Runtime",
    "0.172095",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec3810af3351d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=v8BWUQ54yrz%2FWqjBgVCHecDp8wot%2FIpAjwGzDe0Xbntge3KH%2Bg60S%2Fn7s7W3n53hsbw6npcu%2BTSyISJWZOgQqT1qWrJc7tD%2BV6uN4gXT9MbxRFKQJ4Z9mFy7uA2IWaszsrtuvUea08SmLy0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec3810af3351d7-GRU",
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
    "Mon, 15 Nov 2021 23:22:00 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-kc7jr",
    "X-Request-Id",
    "6aec38162a397984-SEA",
    "X-Runtime",
    "0.134604",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38162a397984-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cYcitj93rbwRpiM0RMV02mWOKOVIlvi9BxqL0N%2B8hj7UFz0TVwOPHtDYYHc2IZPIm0XXDYzzPnF4J44QsZmagJrIeIB4fKfocJiBa3OHDUBjQgdP1X60RObznVnHvrD6RPbLMeBFAjHzh%2Fs%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=527c081ee5137e3f056b297da594297a869c25c9-1637018520; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38162a397984-GRU",
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
    "__cfruid=527c081ee5137e3f056b297da594297a869c25c9-1637018520"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758455292,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:21:56Z",
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
      "Mon, 15 Nov 2021 23:22:01 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"733fa72e5d478510df418e16c0f4237b"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-z9ldd",
      "X-Request-Id",
      "6aec381acaf27984-SEA",
      "X-Runtime",
      "0.210461",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec381acaf27984-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8qI6GpGZCVoLroOQOX0CujDkIuwr43oFPtGeiFOkQu8ebM5ZqERm5XYbGx88Rc7nwcu5Jx%2FrzrUHB9Mmcn%2BQFmkXnP86Q2hG09szK9NS0awVAM2PoWRcby%2FcdXtqz29B9pTbzVBgvA9iS8M%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec381acaf27984-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/421758455292.json", {
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
    "__cfruid=527c081ee5137e3f056b297da594297a869c25c9-1637018520"
  )
  .matchHeader("content-length", 105)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421758455292,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-11-15T23:21:52Z",
        updated_at: "2021-11-15T23:22:02Z",
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
      "Mon, 15 Nov 2021 23:22:02 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "697",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9f2c8331bea058d3e4109320d4b2d943"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-4d7m7",
      "X-Request-Id",
      "6aec381fcc137984-GRU",
      "X-Runtime",
      "0.416524",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec381fcc137984-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V4LfOvqogzDws5E3hkwHsALUUYt5VL1k7QvcIPE54xXxKpLO2euTEt1hIoA4DExWs4VBGMELeAR4y19w6zh%2F9s1eMh1gxizzMNtezI68AA%2FnLGt2DFR%2BuwG5fKarpyW60jCJYu2WzDtByL8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec381fcc137984-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/421758455292/identities.json")
  .matchHeader("content-type", "application/json")
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292/identities/390981160332.json",
          id: 390981160332,
          user_id: 421758455292,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:21:52Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292/identities/390986566751.json",
          id: 390986566751,
          user_id: 421758455292,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-11-15T23:22:02Z",
          updated_at: "2021-11-15T23:22:02Z",
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
      "Mon, 15 Nov 2021 23:22:03 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"37bbcc3fd97387b69b5a044cdce5ab0d"',
      "Last-Modified",
      "Mon, 15 Nov 2021 23:22:02 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "696",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-8sxwh",
      "X-Request-Id",
      "6aec3829ff70f718-SEA",
      "X-Runtime",
      "0.173896",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec3829ff70f718-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aPO%2F%2B%2B0iSxiB%2F3o6uFDiYbHFrvyN%2F2Lb%2B1p1gn0IVPRpZkjf8%2BeCofss3%2FHfrLrUuf8%2F%2FH%2BZIG%2BHp6bS9ITt6pTbtVazemPs4dRmxjc1G3euOIySmBJhkYJh6KhPXFrjPYlCssIek5iCkRI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=ca9629ade1d468343787b543ee212e34502e3dee-1637018523; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec3829ff70f718-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/421758455292/identities/390986566751/make_primary.json",
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
    "__cfruid=ca9629ade1d468343787b543ee212e34502e3dee-1637018523"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292/identities/390986566751.json",
          id: 390986566751,
          user_id: 421758455292,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-11-15T23:22:02Z",
          updated_at: "2021-11-15T23:22:04Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292/identities/390981160332.json",
          id: 390981160332,
          user_id: 421758455292,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:22:04Z",
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
      "Mon, 15 Nov 2021 23:22:04 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "695",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"72aeb4fb584963353515522a447529c9"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-z4hpn",
      "X-Request-Id",
      "6aec382eec54f718-SEA",
      "X-Runtime",
      "0.342425",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec382eec54f718-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ccy1oZNffzgaEreQX3rLEZV0ltW%2BT1VhEuHq8J9vxrwXsTmCBi5FBPXYARKV4qbKQLA9aNPyfNodQOmREXdCD9QrRXvEPk%2ByEuZmINEx4pPnrBWlmySFRSbRBVddQ02mU9UEqsjPV80t40U%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec382eec54f718-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758455292,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:22:04Z",
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
      "Mon, 15 Nov 2021 23:22:05 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"59a43778bed9fe5ae305c47efbf2fd4e"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-jm29g",
      "X-Request-Id",
      "6aec3834a92651d7-SEA",
      "X-Runtime",
      "0.204164",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec3834a92651d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eKKzNpaDR2L8TrKp%2FWAjKR8a4hw8fwq120jc3B2%2BBSxW0KQg5cvIc3K6KTqx0QcnZjozg87L4o0EK7mmiU%2F1kmu6iBXuoCLMCgdWqUoWaCDjf3HmmfqIxMsBaiOtOuyCbAJC8PiAC8CM6Uk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec3834a92651d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:43Z",
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
      "Mon, 15 Nov 2021 23:22:06 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"1b5d5221a1b78ea312c9330dc1e5e146"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-9g275",
      "X-Request-Id",
      "6aec383b3f0b7990-SEA",
      "X-Runtime",
      "0.204113",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec383b3f0b7990-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0zKRtxIIhelbPFMCjv9HJ4Yajqp352ZA5IwCpkfFOL%2FAKSG404DYipJ8AUVK1uFniWdA2PjGtbBNXvAXX%2FiPDlDd31g0wxnYk44YhuEybKmGuFqsPKV33%2FSb0vmHPmg19MG%2F0N2Df%2BcouTM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=0561d2490131cbe62a9081cdc65fba247fedb531-1637018526; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec383b3f0b7990-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:43Z",
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
      "Mon, 15 Nov 2021 23:22:07 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"1b5d5221a1b78ea312c9330dc1e5e146"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-sv254",
      "X-Request-Id",
      "6aec383f38a751d7-SEA",
      "X-Runtime",
      "0.191317",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec383f38a751d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nkc%2FwXw6QvqJHv58mjKGmzlBCsA9lWw7iAbesJRB8NLgx3rLPXupGnSokyFYzq3OzF4xT79JBHnJ5RnnS6JIpp%2BOnnpmrv6khILskUqRI6VQxUEO3%2B5dX2UVDdsXhVxribz6iy7Bh5ngu58%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec383f38a751d7-GRU",
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
          id: 421941820731,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-11-15T23:20:11Z",
          updated_at: "2021-11-15T23:21:43Z",
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
      "Mon, 15 Nov 2021 23:22:08 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"1b5d5221a1b78ea312c9330dc1e5e146"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-txwvw",
      "X-Request-Id",
      "6aec38459b1cf730-SEA",
      "X-Runtime",
      "0.195425",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec38459b1cf730-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mnPBlAYlo9ttnprfCeQNWA2HOdpaMxIUkGFcCS5n46b%2Fe7PRhBPNYxgKsYdTOFG3DwT94YrauPFNRUL3JaoHAYFNyd24ehYLg3f6GaT7%2Fy3zZAn4vqCBMczlTXmT1dSG6i5eZYHkWKU5pP0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=28e5624da81da6faf8943a463cc7edfe2db5fddb-1637018528; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec38459b1cf730-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421941820731.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=28e5624da81da6faf8943a463cc7edfe2db5fddb-1637018528"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421941820731,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421941820731.json",
        name: "John Connor",
        email: null,
        created_at: "2021-11-15T23:20:11Z",
        updated_at: "2021-11-15T23:22:08Z",
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
      "Mon, 15 Nov 2021 23:22:09 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ba4ac73593a1e04a4ee3ab4f528f23ce"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-tzckv",
      "X-Request-Id",
      "6aec38494f60f730-SEA",
      "X-Runtime",
      "0.533287",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec38494f60f730-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZhHUPBE%2FTsaEk9f8iCLqIq6Dyrhw4zRU43s%2FQyL0cqIiaFO3PAXuYme4OBBnJpsGVTKga6swrrbj7vCyWlJQMT%2B6hPzLPOqr0KuYeWEwANhwcKl4ujQ5Qr5uFgjNVBW56cJfNiz%2BCOwLu7o%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec38494f60f730-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:09 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-6m8m6",
    "X-Request-Id",
    "6aec3850496651d7-SEA",
    "X-Runtime",
    "0.159159",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec3850496651d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AYXaf%2FKPGhDF81BLkzh%2BMKrs9WX617HDj3YFXxzpJkOtwD%2BHCaVD70cL5Pbs4%2BIDB2el3eU%2BZtyYgpgvf05ioZNOM73cVlhNhRycLGPk6zqvUXLnQZahhETcIhFzsFN0RXhGaI69585jwpI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec3850496651d7-GRU",
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
    "Mon, 15 Nov 2021 23:22:10 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-sfgvk",
    "X-Request-Id",
    "6aec3855ca2979b1-SEA",
    "X-Runtime",
    "0.168420",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec3855ca2979b1-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2e8ADvvpbmD4EWshm%2F8RqWJNMN4ev6SclNeirvdBJO7uP6KiqXZw2YcYzQrLUoSXYwQ2LM5olPPccryD7iHDSv3aCh8SklzCgWiTrfPzW1SrOqeP53gvK1JTwzITMCg9WA49Lx4ejjpR8R4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=292de43699abf26931501c219fc686e19f776980-1637018530; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec3855ca2979b1-GRU",
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
    "__cfruid=292de43699abf26931501c219fc686e19f776980-1637018530"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758455292,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-11-15T23:21:52Z",
          updated_at: "2021-11-15T23:22:04Z",
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
      "Mon, 15 Nov 2021 23:22:11 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"35552e35c40be9af6f2773ab702b2c11"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-hpsp7",
      "X-Request-Id",
      "6aec385a8ad179b1-SEA",
      "X-Runtime",
      "0.232335",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec385a8ad179b1-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F%2BLSi4AfmVyZfz47Hz7T1IMGYW%2BYYl6dLXz5j%2B2hH8ja%2FGTdnmXrkcYdc6jUgOmsrOq3VJsdLsJYdlGRr8I1LkOJmI1LKm%2BTcVTT2vyZykBDG8MupUp4jY9oyB003Y4xpMVXR53NE0Zlc6w%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec385a8ad179b1-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421758455292.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=292de43699abf26931501c219fc686e19f776980-1637018530"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421758455292,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758455292.json",
        name: "Bobby",
        email: null,
        created_at: "2021-11-15T23:21:52Z",
        updated_at: "2021-11-15T23:22:12Z",
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
      "Mon, 15 Nov 2021 23:22:12 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "686",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"ef7c8eebdf6f87f89a93235fba2d9393"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-mx99t",
      "X-Request-Id",
      "6aec385eca5b79b1-SEA",
      "X-Runtime",
      "0.437257",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec385eca5b79b1-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0OE%2BDh9iT3y87LE80H7smeoTg0q%2FFxt8TWCkDluzHNFiYHu5YYyKf4dRcraCAojOYjd7StwFAnu4M%2BN%2BOkJNqpkMtgeiahrFhG2oFpHSBoNQNLVRAwWme1%2Bkq7Dhd9YVKq9LZGHlAOvR%2B6o%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec385eca5b79b1-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:13 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-j98hz",
    "X-Request-Id",
    "6aec38647d8651d7-SEA",
    "X-Runtime",
    "0.170028",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38647d8651d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cFyO9r7hsddZxq3RPVKvC%2B7jkiOuKzpd83HFRs4k7ADGqIrq4Ni550DeLI8ZroS6dzv25kGVs4cWF79V55S%2FsKfIFmuM1X3%2FnFREMmmQvJkR%2FTcCk5p5InWvy%2FY2DcbKqVNqgv3Dp1ZJgJw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38647d8651d7-GRU",
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
    "Mon, 15 Nov 2021 23:22:13 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-l88k8",
    "X-Request-Id",
    "6aec3869cb96f3ab-SEA",
    "X-Runtime",
    "0.158356",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec3869cb96f3ab-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bLGpkRfSuFVTPsmhfkdbmAPXt8tPSMn8ccKncvp%2BJukUSx3S2vtiREpxrU1FKBn3jE1FdPA45TvRU6TpohOmH7%2Bx7JLRBixLc0%2FLvSsSP1hv4sBLzg%2BOZJ3QWobtHkuoozPk%2BU6d3fS2%2BtY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=66cfada886acfe19d7c31167692be48266ca8c2f-1637018533; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec3869cb96f3ab-GRU",
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
    "__cfruid=66cfada886acfe19d7c31167692be48266ca8c2f-1637018533"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:14 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-t4mst",
    "X-Request-Id",
    "6aec386d8833f3ab-SEA",
    "X-Runtime",
    "0.164274",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec386d8833f3ab-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w3NK%2FiM4CmBFyWedWqTecWgHP0hH6I2PL2hlyShB1Uyf4pKk1SIW9yHEdt6pHOc1fB3SK%2BD2h8SyYdnOpVq%2BrNk8o3X7n8ljda%2FZ0cXCNYFFRogZU9p5alXRui3G5SOv00yQTLZaVdPkn%2BI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec386d8833f3ab-GRU",
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
    "__cfruid=66cfada886acfe19d7c31167692be48266ca8c2f-1637018533"
  )
  .matchHeader("content-length", 139)
  .once()
  .reply(
    201,
    {
      user: {
        id: 421758464752,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758464752.json",
        name: "Jill",
        email: "maybegrouparoo@demo.com",
        created_at: "2021-11-15T23:22:14Z",
        updated_at: "2021-11-15T23:22:14Z",
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
      "Mon, 15 Nov 2021 23:22:15 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1031",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/421758464752.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "682",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"479000c671c0ae3312f42965bbe134ba"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-ckdln",
      "X-Request-Id",
      "6aec38713d1ff3ab-SEA",
      "X-Runtime",
      "0.414661",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec38713d1ff3ab-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hr2DT6VxHL8CJ5z682p2BcsEWyTjY1dnH98Qfr%2BhzTCQhmvU3y5jH80Tsjp2lWkXVqliEPckfpcXinX%2FcRZ34Nlfja8s5rjUMXQjuJKBNry7nk8TNdh0qkOOg2D2XFtVyJG71uTWhbhewJ8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec38713d1ff3ab-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758464752,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758464752.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-11-15T23:22:14Z",
          updated_at: "2021-11-15T23:22:15Z",
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
      "Mon, 15 Nov 2021 23:22:16 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"fa0d23d9ff72afe73921419c2e87d1d2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-4px2c",
      "X-Request-Id",
      "6aec3877392951d7-SEA",
      "X-Runtime",
      "0.191545",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec3877392951d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=or8COIOJ%2F6%2B3ja2mEbxtOze0VX4Js60vqtJG1PrKQ8GrkzOR8wIZrLXHT0rxRt3CUejS5sZZ2%2F1vv1RF8aa2tp9QPYNbzxmnojajmcW5RWVULm2sdnFv%2BfmINpRYOn3vj6CL14wLENb0lfc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec3877392951d7-GRU",
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
    "Mon, 15 Nov 2021 23:22:17 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-8jc5c",
    "X-Request-Id",
    "6aec387deaa17968-SEA",
    "X-Runtime",
    "0.157133",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec387deaa17968-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0svJuDTgJG3%2FT8sDbx6XTl%2Fch90%2F3Oj3G75fNxkjNPqXHkBVZBm3ywCODRmwy5Qug7QPQVLLXHbsnakMNKk4NtpWkh0ZWQwXzDXWkcg28hNsv7fy80Gf%2BIHGaJ1KPkXMdQ828docQUNewT4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=ec8fe93037bc2e2a8b9b63add33b6651849b7991-1637018537; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec387deaa17968-GRU",
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
    "__cfruid=ec8fe93037bc2e2a8b9b63add33b6651849b7991-1637018537"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:17 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-p5dzn",
    "X-Request-Id",
    "6aec3882acfd7968-SEA",
    "X-Runtime",
    "0.167206",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec3882acfd7968-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Cll2iyMwVRNCgEnN6nCBK1EKiX8Z8GZGNn0Xl%2F7PSGorHezhlwBUeo65K5zgLWWxKk5Vlhw9Fqc5U7FrOGD8W7cyWG2RD1kGlwUadqYrwsdcc%2FT%2FVX4iyi1Yvrn6rpEzwKw9Ee4sc43%2FyNs%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec3882acfd7968-GRU",
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
    "__cfruid=ec8fe93037bc2e2a8b9b63add33b6651849b7991-1637018537"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 1903375573247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375573247.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-11-15T23:22:18Z",
        updated_at: "2021-11-15T23:22:18Z",
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
      "Mon, 15 Nov 2021 23:22:19 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1006",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375573247.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "678",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"dfb85e4d7489a167a65e9a6489528acd"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-x6fp2",
      "X-Request-Id",
      "6aec3886bc997968-SEA",
      "X-Runtime",
      "0.416163",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec3886bc997968-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MbSXQN8T3mpQGJ1OLvBB2IA29uBhVkkwh%2B%2F1hsDcONBoZnAds4GHi6lv0CNOYRMVL6g92Q6jz6FGtSxYjpJG2Wjj85iBE4ZrCxS5bU9aRhHgigZuVQsEQrhCvjT5HobhlQiTwkES8pL8SYg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec3886bc997968-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1903375573247,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375573247.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:22:18Z",
          updated_at: "2021-11-15T23:22:18Z",
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
      "Mon, 15 Nov 2021 23:22:20 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"0664d0b32c99e1d6519ca453d694da1d"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-5qgfv",
      "X-Request-Id",
      "6aec388f7df951d7-SEA",
      "X-Runtime",
      "0.197227",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec388f7df951d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mReZNmPZf3fQWJY9siT5sbi3McKNqzfWC7qCiYIv%2FaH2EKLCHonW09eBA%2BbyqJ%2FOJckm%2BDlklQWVmDis4VMkkdV3KmxN2XUAqxeyFuFHKchTcBaHxydcvTlOU9iilY%2BnwHOCzQ%2BSdARp7TM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec388f7df951d7-GRU",
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
          id: 1903375573247,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375573247.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-11-15T23:22:18Z",
          updated_at: "2021-11-15T23:22:18Z",
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
      "Mon, 15 Nov 2021 23:22:21 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"0664d0b32c99e1d6519ca453d694da1d"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-ckdln",
      "X-Request-Id",
      "6aec389558d06ade-SEA",
      "X-Runtime",
      "0.184469",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec389558d06ade-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gemSsswlGXs6RqgNTfjd2urTus5ruCqoS4rsy4IX3IoXr4DFQDlrULXY1TxjHf3KaZPg%2BESf4uR34IxQNg9Qb7K6GhQD2PNCkUc7UyUyRhKSlDLE3PRJaUvfm5z6X%2FEvbhRHI19f6DpaXX4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=0b2edd5d7b741d7c6230892b88e0200649587571-1637018541; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec389558d06ade-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1903375573247.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=0b2edd5d7b741d7c6230892b88e0200649587571-1637018541"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1903375573247,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375573247.json",
        name: "John Doe",
        email: null,
        created_at: "2021-11-15T23:22:18Z",
        updated_at: "2021-11-15T23:22:21Z",
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
      "Mon, 15 Nov 2021 23:22:22 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "675",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"133d6cd5f2f3de4e1ea2779c3965fd4a"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-b86rg",
      "X-Request-Id",
      "6aec389a2eca6ade-SEA",
      "X-Runtime",
      "0.532541",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec389a2eca6ade-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BlOoCY6dmU3%2Bm8r%2BW%2BL2HXW5FzNsReTkDFs8GoNMl8IYeOcdNfJjuTo0xTOR5jCGshm43NXNubv%2FJWjuGZG59jkW1Fq%2FnNhBd%2Fwx0AKOYmGhVOPPZ%2BM6Ik1IeoVWKncHHTxyT%2BBwUXR3zbc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec389a2eca6ade-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:22 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "674",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-7xqrg",
    "X-Request-Id",
    "6aec38a1194151d7-SEA",
    "X-Runtime",
    "0.159130",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38a1194151d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=G82a3syEnp2VOKwuObMXrcgcgWt%2F4XXoVEvMxMkNWekHbiIyzWhJZFa2VJUYrp1UKGLvlTEss%2Fc%2FWEzixhR9sTTI6f9XD88%2Fn0hivswO3SFrHyiULvDAu0J0bkkN2sBtbUEM6LpXgVSztY8%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38a1194151d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758464752,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758464752.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-11-15T23:22:14Z",
          updated_at: "2021-11-15T23:22:15Z",
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
      "Mon, 15 Nov 2021 23:22:24 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"fa0d23d9ff72afe73921419c2e87d1d2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-2pvnn",
      "X-Request-Id",
      "6aec38a5aff951d7-SEA",
      "X-Runtime",
      "0.229624",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec38a5aff951d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1ZbtQTizNeldhnSXXl6%2FhPGdgB1eU3AJbIqBly7UgEC8xZIDBtRYBLp25ifZKb4WJgED0BXt87giMH0%2FOPN7lkAsM7uUbrYrJRnYQx1lLIMGQ55uNSJYfgiuF%2BlheZJm5gLlGMbvSR2%2BZAs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec38a5aff951d7-GRU",
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
    "Mon, 15 Nov 2021 23:22:25 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-8xr8n",
    "X-Request-Id",
    "6aec38aedabf6afd-SEA",
    "X-Runtime",
    "0.168840",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38aedabf6afd-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ySZG3c2WhAEDOn37ooVIDE77mi71o6fBOwtnSO%2BkO59At6P4ygcL83hrG29%2BMjvb0FavbUmWfRUzuiiA8z64nIHCows8wcMZPdUkTID8nVoaTBxi7XEOLwrXMYYAG8%2BY15AYS%2BNyLRMt9RA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=45168ad1a72e2852c5151a522b44985fa98ec7a2-1637018545; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38aedabf6afd-GRU",
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
    "__cfruid=45168ad1a72e2852c5151a522b44985fa98ec7a2-1637018545"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 421758464752,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758464752.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-11-15T23:22:14Z",
          updated_at: "2021-11-15T23:22:15Z",
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
      "Mon, 15 Nov 2021 23:22:26 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"fa0d23d9ff72afe73921419c2e87d1d2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-lxg85",
      "X-Request-Id",
      "6aec38b2eff96afd-GRU",
      "X-Runtime",
      "0.207855",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec38b2eff96afd-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=weBenXnVrYjSpYLu1hvdJx9i5x2s8i8du14fI1ctFzdkbE%2FA0ir6HDG4JozifSJ8EsHczsO0yzoUqU41FwBwwSdOLEVyBwgyOkIFNfmcNSIJ5HpBXAIhwrwLfrjTZvjRQp855GZSURM%2BUsM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec38b2eff96afd-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/421758464752.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=45168ad1a72e2852c5151a522b44985fa98ec7a2-1637018545"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 421758464752,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/421758464752.json",
        name: "Jill",
        email: null,
        created_at: "2021-11-15T23:22:14Z",
        updated_at: "2021-11-15T23:22:27Z",
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
      "Mon, 15 Nov 2021 23:22:27 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "670",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9f5a94cf3eb7429ab2886886ed79c4ab"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-9hltn",
      "X-Request-Id",
      "6aec38ba08ca6afd-GRU",
      "X-Runtime",
      "0.521122",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec38ba08ca6afd-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EQ7Gd%2FZ92QQeAHUeHNdkvXTEh6dQaePWdaUuIMuoYZVYtzR4msBZ6Z1qM0rR7T9RiNxeI67auz3x51yRI2Q4qlslKVPKpUfwe%2BXQQKkn9se%2F5TDXeqclV92i8hGHtNmOdCU3icuqPHwZq8Q%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec38ba08ca6afd-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:28 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-t4mst",
    "X-Request-Id",
    "6aec38c38eb251d7-SEA",
    "X-Runtime",
    "0.150100",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38c38eb251d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QvlwasYb%2BMkldXIayb%2BypwVO19sZmRGAjEGLaoW6xrz8kfcRh3NxNavPCgfQiDZBEV9snlYxoJ%2FkRBeH5c7kyT5FvVfKh%2FAvQk5L2JYf%2FpW7ZDUWwZ2SGuwT6NgE8uaMu6FP4BS74eZ0UO4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38c38eb251d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:29 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-5qgfv",
    "X-Request-Id",
    "6aec38c80e9d51d7-SEA",
    "X-Runtime",
    "0.160581",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38c80e9d51d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HKyhUnMl8up3s9y%2FLVBccv4Ge7VYB4H4eKxb4u5Qchj%2Bzusn0dkEJ1ursN430Vf2udEi83lyH89xSyu17ikoiF6SpKIy9mf1D0tXUeWy2D%2B%2Fon%2FoLC4m%2Bpad5dg2d7iJOqLaSBrUgDv86D4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38c80e9d51d7-GRU",
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
    "Mon, 15 Nov 2021 23:22:30 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-sfk2m",
    "X-Request-Id",
    "6aec38cdaa0f7993-SEA",
    "X-Runtime",
    "0.176573",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38cdaa0f7993-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IhmaJOyuKfO1ky6m8HRoeTcFby5NW50Y%2FIhx3f1zO4TZw6HBMGptDgLQu7qAYRC%2FQytQN0RU79sWHgEYR6MVXhwM9RQXsoSvjKIG9E5%2BJhV1TNvSmdsZlIbUO3LA9A28kmaTeTzx3k4PXQ4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=6dc45c3cda0425e0ec0efb1ee1c6305ea1244b86-1637018550; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38cdaa0f7993-GRU",
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
    "__cfruid=6dc45c3cda0425e0ec0efb1ee1c6305ea1244b86-1637018550"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:30 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-c5dzs",
    "X-Request-Id",
    "6aec38d24acf7993-SEA",
    "X-Runtime",
    "0.159321",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38d24acf7993-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IqLpZS4ok0a%2F6dOnHQHq8pDNBDx1URIT%2FT1qxhb7gPo7Y1VvNK1Dr%2Bdd%2BiO75L4JYPW7Duu%2FKdndzrXEKB474QumRS9CnnAIJXsdQDrBCKEm6UiDPAgr17baVNknsAnA5QIWkHKCdqg4uQM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38d24acf7993-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:31 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-62vjj",
    "X-Request-Id",
    "6aec38d6cc4751d7-SEA",
    "X-Runtime",
    "0.171480",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38d6cc4751d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y18FSz626e9ZAVeGnYmQ39r0ilG2uG98Qm21wkOhkIALG5bcTBRko4ae5b2m91cD4Ei%2BDkTS%2Ff%2FA7a%2FC%2BavDTUl6vu338uKiLioaatTTWPzCBtWwStADufwtZpsP%2FL2jtC%2BGTICEDibdhW8%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38d6cc4751d7-GRU",
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
  .query({ external_id: "badmail" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:32 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-mzgf7",
    "X-Request-Id",
    "6aec38dc08d76030-SEA",
    "X-Runtime",
    "0.157841",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38dc08d76030-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Zx77YIWdvwzUv8VyNf789o2BWJaJDHsDsesKNJYORbB1hwjlTwN6Zn3i31sa2pEQ%2BM1DHcoWoDX5Muf2lctGX3CqvtnxY2E0mYSD1QWAsfDNYXJ%2BE%2BlR%2FewBhEGy0woiH3uSCzc0fj%2BRUaM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=a884c9d4606861346631e9618fe9141fe70564ee-1637018552; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38dc08d76030-GRU",
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
    "__cfruid=a884c9d4606861346631e9618fe9141fe70564ee-1637018552"
  )
  .query({ query: "badmail" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:33 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-5np5b",
    "X-Request-Id",
    "6aec38df9df46030-SEA",
    "X-Runtime",
    "0.275827",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38df9df46030-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E2y4DkH4R3MUKI4TOw%2BXhMKchnTDLe%2BaB%2FIUw7sx72WUcPqK2KM4xNzqlc%2FTb%2FjOn8hX3L4JNs3iUCg9s1F%2BVJfWS%2BY%2FQLDLkBzbz9Z%2BIu8GcOl5eLeDB0%2Fb1LhHWDIQGqGPyaHibcoXx7E%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38df9df46030-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/create_or_update.json", {
    user: {
      verified: true,
      email: "badmail",
      name: "William Bad",
      external_id: "badmail",
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
    "__cfruid=a884c9d4606861346631e9618fe9141fe70564ee-1637018552"
  )
  .matchHeader("content-length", 99)
  .once()
  .reply(
    422,
    {
      error: "RecordInvalid",
      description: "Record validation errors",
      details: {
        email: [{ description: "Email: badmail is not properly formatted" }],
      },
    },
    [
      "Date",
      "Mon, 15 Nov 2021 23:22:33 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "147",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "662",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "Cache-Control",
      "no-cache",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-8h9xp",
      "X-Request-Id",
      "6aec38e4bd6b6030-SEA",
      "X-Runtime",
      "0.236719",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec38e4bd6b6030-SEA",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oB572O5E88DqQljFTC8Q0U52IfTbNgGCr3wRMk%2B1wr2tAwWkl3%2B7wmDTp6id0Wn1S9SrGtHb4r7a3bFF%2ByTbS7VUiIymH4LugrgzHc1StUY4mEXsUDzo%2FHNGQGkqhFkCZU%2BgnU4JIUhZpyc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec38e4bd6b6030-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "badmail" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:34 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-rcql4",
    "X-Request-Id",
    "6aec38e9e9e551d7-SEA",
    "X-Runtime",
    "0.267113",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38e9e9e551d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GGjaaBEK%2BfG409C0SKVxECegeKt9AON%2B5YlBoZg2uLPXg0OXlyOM%2BLQGGfmeGeVCI%2FItEQjGxQS41bhEveNxtNnRwF%2Bu2I2eoYAHqCt8UaV1G39y%2FM3Zd4jM883lSAxPEMNdBECZOiGhogc%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38e9e9e551d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
    "X-Frame-Options",
    "SAMEORIGIN",
    "Cache-Control",
    "max-age=10, private",
    "X-Rate-Limit",
    "700",
    "X-Rate-Limit-Remaining",
    "660",
    "Strict-Transport-Security",
    "max-age=31536000;",
    "ETag",
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-cbxlj",
    "X-Request-Id",
    "6aec38ee485751d7-SEA",
    "X-Runtime",
    "0.164560",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38ee485751d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6Km%2BSzkejx0%2BaxpgYi4zQSdjMkjYxeOXLsPFd6HbXwB2iY6WfCLXxqd7xSXN0iniOj%2BhLVX1APH8nbLXSuYftY2XVGObtbdM6wktK%2Fsf02yG%2BAnpi7VT5TUcH9QM6ZxUfQcl0rVSXCkV2TY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38ee485751d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:35 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-p5dzn",
    "X-Request-Id",
    "6aec38f2d89551d7-SEA",
    "X-Runtime",
    "0.182951",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38f2d89551d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D4%2B1f2r4LCBsr5rcB%2B0H%2B%2Br%2BqWdTTpVbAhNAXbfMuc3q2j3LEvkkIk5izJVDUCiOmYaryPtME4TO4zUIYaTNO1ubDK1sLaS1H9Mq72dUl5nV95NQq%2F0v4YbM1MCWvTGgMHGia9vGoQ3YdtM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38f2d89551d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:36 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-k6769",
    "X-Request-Id",
    "6aec38f6be7251d7-GRU",
    "X-Runtime",
    "0.148111",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38f6be7251d7-GRU",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R05MNbUjJyk9To7R%2BEeV7cJwuJhCwVvnSJ3r672DzCUvWmOItzlQB%2FQk%2FvLG%2BsaT%2FFy3SQg%2FOLIoAkZVpx2ElOlr26oo5frJuHUX0rehEkpeyIeYTYtwNTbpYIqbzAu38ED6YB1rl6%2BOMvY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38f6be7251d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:37 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-54899c78c4-9g275",
    "X-Request-Id",
    "6aec38fd483451d7-SEA",
    "X-Runtime",
    "0.173428",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec38fd483451d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5NCKeBl4A0IWXtNmI0MQoxWgSMvMa3r4KT%2FWeKmKj3RftjhJuGjrv5%2F9MV9DlvibYI3G%2BN3DVMH6XUKb2t3Wp02KYAMQkEggdFKF%2BuW8Dj7keSV9y4GWoU75%2FuBNWNKi4bip0p38pp7ALkE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec38fd483451d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 1903375554467,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375554467.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-11-15T23:21:44Z",
          updated_at: "2021-11-15T23:21:47Z",
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
          tags: ["test_recently_added", "existing", "here", "checkedbox"],
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
      "Mon, 15 Nov 2021 23:22:38 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
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
      'W/"d1ec93f37b0f20bf71566d19cb6d5ebf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-rcql4",
      "X-Request-Id",
      "6aec3900edcd51d7-SEA",
      "X-Runtime",
      "0.183919",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec3900edcd51d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DbRilJBrzyl8%2B0t7ziHodAxKZvUv24v54q8d9Wvbx0NLF9oy%2FAH0pvX0Xp%2FL4%2BkUKt1c541gyi2X4GgmqyopzGbO8RE9gRucoBO0qKSfdW7zpkVssshU4jPUy9xpJMA5I42XR24ESuQba%2FU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec3900edcd51d7-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/1903375554467.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZXhhbXBsZS51c2VyQGdyb3VwYXJvby5jb20vdG9rZW46VGRSclYxZm9CTm9RMXRKUlVoQnNhN3dKQThoT05CSHdWMXJPODdDYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 1903375554467,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/1903375554467.json",
        name: "Anakin",
        email: null,
        created_at: "2021-11-15T23:21:44Z",
        updated_at: "2021-11-15T23:22:38Z",
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
        tags: ["test_recently_added", "existing", "here", "checkedbox"],
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
      "Mon, 15 Nov 2021 23:22:38 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v10359",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "655",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"e7fce8f7589270a65d740505fd906729"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-54899c78c4-bfl9k",
      "X-Request-Id",
      "6aec39049b6651d7-SEA",
      "X-Runtime",
      "0.452793",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "6aec39049b6651d7-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DoPdgBTUoYcjeHtLeM5ZXyMzUMcpHVzGXGdqAlHu4gISeX4l%2FnECBdFt3kCVWTAv8yWi31GViB2JKGRb1C9YOAhBnuaqPByLlV3H1Jj5tBoH4j4lla0x%2BLXxMtftF1QFPHrKZ1ymYgP2vog%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6aec39049b6651d7-GRU",
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
    "__cfruid=a0bdb1b7333260fbba83a841fc8ae85f86d4e3e4-1637018404"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Mon, 15 Nov 2021 23:22:39 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v10359",
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
    "classic-app-server-54899c78c4-j5966",
    "X-Request-Id",
    "6aec390a0b8051d7-SEA",
    "X-Runtime",
    "0.164150",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "6aec390a0b8051d7-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wDJHeScdFi3qPpl2TZufmXJVFefvhL2Mwn7xgKU9Zte6%2BUgPNL2bRwQswcaB76j22tVMWfwtmZkR%2BZEqEdeKz9ceZAZzp%2Fps3hjbslyYLrmhtIwgqh0FgL%2BM19tm5ZIcRUSbldND%2FxobGTE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "6aec390a0b8051d7-GRU",
  ]);
