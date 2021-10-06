const nock = require("nock");

nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:21 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-sd9wt",
    "X-Request-Id",
    "699f3e6be9ebd014-SEA",
    "X-Runtime",
    "0.175744",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e6be9ebd014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=42R5byKeIE2djRMPInOPy0p3PGy2Zq0dfuZ4BNINeALYnfSkAxPxi2e0%2BOv3YpCXDbAj9UvT%2FA7hb59PxENx2IxI6t513n32hhSl8qFRxQ%2FpJMtB06EDX%2BSR35jfF7ocz4Plhq%2FhJ3qtiRM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e6be9ebd014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:22 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-g565m",
    "X-Request-Id",
    "699f3e6f9eaad014-SEA",
    "X-Runtime",
    "0.172041",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e6f9eaad014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MjhlV6lUAJJZcTNe9Qf8LLSwjJplxSHHrHLF6n8F9zlOMfR7FhDNzg735H86N1%2Fw0qgVWPc8FgjnPRCfZaez%2Fbcu%2Fia5XE7HJYSU0m5rZXNW4MpIs3rVPafNSaLDfGgN06chDUPwr1uNsiw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e6f9eaad014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:22 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-n46d7",
    "X-Request-Id",
    "699f3e728aacd014-SEA",
    "X-Runtime",
    "0.162946",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e728aacd014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nyuu99EEDQKohLOSX2d%2F5BJaP9mO4xgirJr%2BbyGK8O5MxWHx2RfSeccfFrn7o1oQFKHWMaYJSL%2F6X3lbTy8g3HcRgGGOBk360UsdKxOq4aewP%2Bo%2Fz1E1QY8Kv7fmK4iCCRrFv6DfVVLnFrA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e728aacd014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:24 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-tpr7r",
    "X-Request-Id",
    "699f3e75ef83d014-GRU",
    "X-Runtime",
    "0.183980",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e75ef83d014-GRU",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7jqIS0ILf0dbO51ATkllQBIAv57TvGCfCdVOILgckM5Wz2zuY9nqcJ3VRr7GrPL5gp0t9LM7L9A0jtkR8oCZ1GV71eGGEkZCqbVsfa5W5ErfR%2BSrqKtmgLAaa8Gl3AUFyj9bB7TuEQ3y5uU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e75ef83d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:24 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-lwl9n",
    "X-Request-Id",
    "699f3e7da964d014-SEA",
    "X-Runtime",
    "0.197526",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e7da964d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6LqCt7KVZ4XE8ar51sEuD06DxGu3wGa2zOaMpxRf31TeoqkHqRJ%2B71z8Z4B37Az2JJ5%2FfM8F05JlcYAdkHyU50CJtBc8FEl0bYnzgZ315wJHRagXos1gWdoyamDEQBPCuzcFR1MfLzYrhig%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e7da964d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:25 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-2g65l",
    "X-Request-Id",
    "699f3e811dccd014-SEA",
    "X-Runtime",
    "0.183546",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e811dccd014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V2VrG89SnIZmD15YzWdlx0vTmAdPptg37Sp5r3KFiGW5QdfC07fpaEgjnvyfbTuERpL9WSK8lA5I2eCiFu7tEViL%2Fcdbhe2JJfayBE0R%2F3IGxL9w7vaLOVHrUl2IAFiB7Wbb%2BwBvL7R%2FRog%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e811dccd014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:25 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-t22xk",
    "X-Request-Id",
    "699f3e8419d3d014-SEA",
    "X-Runtime",
    "0.168250",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e8419d3d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XWefGdodUId4n1JmBY1M%2Fq9tlckQKtbWsV3CW1D9fn3MR9kgFXliOY%2FyjsAjYlcVrfgikZA9lNjTRXPO6kl7tntEt11odo%2B35HP60jX5guVg%2FP0X%2Fu%2Fka9%2FLirw1c8riHGwSoFh9VteLTsE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e8419d3d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:26 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-mgbnj",
    "X-Request-Id",
    "699f3e88b92ff6fc-SEA",
    "X-Runtime",
    "0.173755",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e88b92ff6fc-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sGBShKbzoHFRFzL2X0PmXlB3ZXvg847aji5y%2BHqit3XkCPnIgCsGJdxxb220ZajF5fHRr9ZFwbZvDx%2ByZZHphg03tJPSvlpxFr%2BmaqVFPE0ztfC3DtClyZbbWpVVBCuRQPvkynMdS1bJeWM%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=dffcfe937e88fbf2207cdd68b588230ff622cc1c-1633527026; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e88b92ff6fc-GRU",
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=dffcfe937e88fbf2207cdd68b588230ff622cc1c-1633527026"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:30:26Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:27 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1004",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "691",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5dc7d7e90714d60cc4c4dbc03903cb2e"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-4mztf",
      "X-Request-Id",
      "699f3e8bbdc8f6fc-SEA",
      "X-Runtime",
      "0.433605",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3e8bbdc8f6fc-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GuEXkeduUtVRAltzFumuOWyurTAHiCTNUWj0rv3DUSQf5y95NWrOe9PJRGfIMkv%2BNJlK2GBMmSUEBJKbvIXyT7%2FZ%2BTJTvfoigYc3YnxZ7vLtd18mg8%2BHa%2FEpQ%2BORoyJhcIhMbuFH6lFKiUI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3e8bbdc8f6fc-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:27Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:27 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"7ef66d0a3ee9cbfccaebf292c9036a02"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-fdzxp",
      "X-Request-Id",
      "699f3e90cb67d014-SEA",
      "X-Runtime",
      "0.190608",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3e90cb67d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gcMx93C9T2TmJgjYUuBZW6hDJIWTt3BuR0DMdrZpMGTK1CK%2FtMP%2F6Oh4HHsidvl3RNZ%2BDZEOpYVayjbtHya%2FsP2lRAm9S6KtlDMPZRDkuhIj2EGyeLn96ObA96Ft76Q4H5CENOvkuiz9%2B8U%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3e90cb67d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "othergrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:30:28 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-zv9ff",
    "X-Request-Id",
    "699f3e967b60d014-SEA",
    "X-Runtime",
    "0.167091",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f3e967b60d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=467WJvlrldVAMzyL6LEtTWE8MOf%2BCuy6pVN5IwiwoBtgRRi2aTJqWW%2B4e7LhRX7ytuCw02Ftw9CGYCItZ1kFO1Bp0NXK9k%2B2S7xmgZxJ927IfGFk%2FldOCQKvFx6enUpCm8s4F6wOEqBmc%2BI%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=1e545d03484ae9ef7a08dcfdeb1656eb5e035fc5-1633527028; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f3e967b60d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:27Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:29 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"7ef66d0a3ee9cbfccaebf292c9036a02"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-bmtlh",
      "X-Request-Id",
      "699f3e9b2ef7eede-SEA",
      "X-Runtime",
      "0.224365",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3e9b2ef7eede-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0DrqjvodOR5yoMPwu9IW2xwpsmY4VBeBftoIDRaPCUzM%2FbG0DA4ldg4iku%2BW0tB4yqagcKkJj7ejGS0N3tzaOJOq8lqI%2FIYVL94VhN4NwY%2F4bzcN%2BW%2B5njU8t74JIT9kdWMaFYcMltiXN9c%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=c7a96191a5e61ca63c966aa309e2a5f339e377d1-1633527029; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3e9b2ef7eede-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=c7a96191a5e61ca63c966aa309e2a5f339e377d1-1633527029"
  )
  .matchHeader("content-length", 209)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:30:29Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "687",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"52503e3bf724c358d3a6d226eb7e22e3"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-4mztf",
      "X-Request-Id",
      "699f3e9e6b06eede-SEA",
      "X-Runtime",
      "0.428786",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3e9e6b06eede-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=M6twzeC6jYdIRJwwcRr%2Fphh8SsVTWbB8pRxDE3ehqos2UVXNeemBflZHEd6sEcMpht51r1BrdbD4s%2BL3eC5LPb4rywlUjaieCIMVtH1zPKaR0rxwtsx02cxra65UucP7gIcdfNphRrEr6xY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3e9e6b06eede-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:30Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:30 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"a967f45da930f3fb771743d0d938399d"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-d4fc8",
      "X-Request-Id",
      "699f3ea2eb92d014-SEA",
      "X-Runtime",
      "0.216438",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3ea2eb92d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rryPSsXZQvoaXYDiU3%2F%2FgP1uE%2F8%2BvjDwbCxyDnGeGaIpAYShHxbEMSsOT5gwFYLwGsCtL7OPigbF%2FMkLpe5tPaDI3HyGdmbzS1WG2BjmfRDwn56WGIMqaWSzFplhbfR1tvzVnD%2B3nnTHuBU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3ea2eb92d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:30Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:31 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"a967f45da930f3fb771743d0d938399d"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-5cxdp",
      "X-Request-Id",
      "699f3ea85c1c4cf1-SEA",
      "X-Runtime",
      "0.194977",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3ea85c1c4cf1-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hwJI4sbI%2FBbK9dkp8jlGxpLpQuS862XaNZeFL3EQtTUOm%2Beniy%2BAAM7mb%2FVSg%2FE2tTJDTmR%2FsEXk5U7BTDMrHj%2BcQxYqerxAFr%2FNc8v13o9ZdKdU2fdKP8bBI%2BY2TpmPobel3jBPNiHjtMs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=5c69b8ca8ab02d4c620e26d83fbafe7ee9c02e1a-1633527031; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3ea85c1c4cf1-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:30Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:32 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"a967f45da930f3fb771743d0d938399d"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-c8d9k",
      "X-Request-Id",
      "699f3eac0f3ad014-SEA",
      "X-Runtime",
      "0.229521",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3eac0f3ad014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rTvy1CWeUO8z1jdZAOMGJpjRvLtvZT%2BfER5aL%2BYslESS6OPLJbmiOMNd4Zh%2BYtc7802rIE15Ig1ulRiBKJeO9Fsu6zNqUMRue7Yqp%2FI4Y5JQ9Sa5r5bpj4slqLRKufpoX8p%2BnBW3FL5jW1Q%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3eac0f3ad014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:30Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:32 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"a967f45da930f3fb771743d0d938399d"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-7c9gj",
      "X-Request-Id",
      "699f3eb0f925f61b-SEA",
      "X-Runtime",
      "0.225362",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3eb0f925f61b-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7yNPxnjv4PgxtGXRea2MlegXrE98T4eleus66Zvs20u%2BB2TE5TXxON3VjW5MpBDTQbZOyPsJYxnfd8qKtjMtdinmrf1uhryPigCSq23YPLbYlRJ8k7NgPlB8g%2Bi2Kh1i%2Be2O9SAJONPqgz0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=076ea300d6ff0e6f6ca2892404e464baa9079b8d-1633527032; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3eb0f925f61b-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=076ea300d6ff0e6f6ca2892404e464baa9079b8d-1633527032"
  )
  .matchHeader("content-length", 231)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:30:33Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:33 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "682",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6606e704c63e08fb11322134b2e83c89"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-tv8wq",
      "X-Request-Id",
      "699f3eb43d59f61b-SEA",
      "X-Runtime",
      "0.515513",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3eb43d59f61b-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TsRzaapqvqVMnbzkBXbzsHUAPPBMJP2iZ1D71Tl0s3Q6NmHkBYL%2FwnfXo9OaYa%2FAAvfizSJ5JS%2B4vmr7fkEWqRx3ra0PdBt23oqqR03weeqqatBQ%2FbkObCZR5ZpPRsPPOnwly3MEZ8VaaiI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3eb43d59f61b-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:33Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:34 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"ee9891d3a79f5126b8d7d0014f96ce0e"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-zj9h8",
      "X-Request-Id",
      "699f3eb9e9b9d014-SEA",
      "X-Runtime",
      "0.211580",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3eb9e9b9d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3kNpsxGQuk9boXD7w8E6wC9C%2FYZAdsxYipHw5O3US3AwpOUbR7hP7YzP1HUxMFWQPUrEgzV%2BntHbIeUspoCR7yEgbbeYE%2BwbOcWfIELxvAzH2udAsSDILxtIz5PkSpMCKSOwjYhKr7On4Vs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3eb9e9b9d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:33Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:35 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"ee9891d3a79f5126b8d7d0014f96ce0e"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-k5l7p",
      "X-Request-Id",
      "699f3ebf5f25d044-SEA",
      "X-Runtime",
      "0.252599",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3ebf5f25d044-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0kYy7AMLnpU2TWm%2BeoQe4WWRB6L3Z9x%2FRPnZwNg8LptgX3G8WlD%2FYhSstyn%2BputdL%2FwjgLkBXpkkDmFQPM42IDJuQHQhZcySxkMYzIjVfoxq5expiECXi7v4ZfKMh%2F7wj8qJOayg8ymLS5I%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=9dd48ab66812d511dd01aed4665d740e5e8c4c88-1633527035; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3ebf5f25d044-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=9dd48ab66812d511dd01aed4665d740e5e8c4c88-1633527035"
  )
  .matchHeader("content-length", 201)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:30:35Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:35 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"d624eeb215eb0683fd659081d602e0ed"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-29qbk",
      "X-Request-Id",
      "699f3ec2cb78d044-SEA",
      "X-Runtime",
      "0.428945",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3ec2cb78d044-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aG9pE6npmBcEtpKs9VoXVhpkqPT%2Fps63B7kwxcyn1glfW3nvbd8XBPjMHkte6ZUODMs5WasRBVqss5hkjgKNPIB96NjO8l4J6A77qzJevbk4CrHvk9gDIAFEV%2F7YBF6Cao0qMsv5aD6RKoM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3ec2cb78d044-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:35Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:36 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"897d37d5ee5a76575dd34e3100079d08"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-nrv4x",
      "X-Request-Id",
      "699f3ec76b12d014-SEA",
      "X-Runtime",
      "0.198343",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3ec76b12d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vh%2FqKgBJRG5rkVXzsexRi6RN5L2JNZefDejXRfDMl%2BmBtD1hmnNZ3L9Nhx57p3mNDjx0NNaXj1CGeEp%2F%2F0l5wVCfSx7Z3DcrpUo9OIEAK0dXcgOsUKiRaj7JZzs7ZaT0G5XRj8n9EBN%2BMkw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3ec76b12d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:35Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:37 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"897d37d5ee5a76575dd34e3100079d08"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-2h2p2",
      "X-Request-Id",
      "699f3ecc1e556aea-GRU",
      "X-Runtime",
      "0.211743",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3ecc1e556aea-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lQknJXr7859cdcttLHO3gx8vFuppyyH5hbuEkiB9H%2FrevfifPKPfPsHU%2FGLR8LNa7Eo3lTIfDobPrcgRCVlZEs8eJFB88u2r6MLcbo1mvJ5ewjlTVI5Rq%2FjG%2Fz1Jd16ZDKTCODQOk2aamgg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=5aebd7b8623dfd37676202ba994511ff0de3cba0-1633527037; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3ecc1e556aea-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=5aebd7b8623dfd37676202ba994511ff0de3cba0-1633527037"
  )
  .matchHeader("content-length", 135)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:30:38Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:30:38 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "676",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"daff0b170c0b6f0c16e6937e39f1cebf"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-nv9nd",
      "X-Request-Id",
      "699f3ed3db656aea-SEA",
      "X-Runtime",
      "0.355126",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f3ed3db656aea-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KuYDOUTb7EzY2ZPX38I2SXoz8YTQhizmPg%2Fm%2FkTT99zN03t%2FyPDkCwKOzb9o4w1YqX3bzBuKfBVeL1%2Fo%2F5j0yS9Lc3cApcYSkfpN%2BqTOClZpBFFvgO2XMLpFpmZRkahG4rfVZZxoFsXuiT8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f3ed3db656aea-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:38Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:39 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"87e397128e2da8463480a42c94db1396"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-2g65l",
      "X-Request-Id",
      "699f404efc67d014-GRU",
      "X-Runtime",
      "0.219989",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f404efc67d014-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wTk%2BtPyvG1nTEn9a6ESpqPBp3z8ujsK%2FjcLxKjZ4QSqvEIsBaXeq8z5teyq5df2YRxDtBrak1mwK6so4yJ7hpdU7HWon5zHm1t54rQM0dBzRBa15iwTCZc9pyeuQ4B%2FkZEaGEiJj8bpmAaw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f404efc67d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:38Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"87e397128e2da8463480a42c94db1396"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-xfv2b",
      "X-Request-Id",
      "699f40541951cff0-SEA",
      "X-Runtime",
      "0.254063",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40541951cff0-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2FgRaTBUbu%2BdTxSvmowND%2FUd45%2Fu%2FVPGn%2FSFNfobmvJok%2BcWe1QJo3mlwk0ftYBEpDZ3AlKCp9FDzRss4AbtQW9H3oZbIeSOGV8jf%2FjwUoxxUedVI9A6oKh2XiuT0rxoiH1y%2B%2F%2FTglCahFA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=22a2f401d0dc287c95b72670ce292eb4545c4bac-1633527100; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40541951cff0-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=22a2f401d0dc287c95b72670ce292eb4545c4bac-1633527100"
  )
  .matchHeader("content-length", 111)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:31:40Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:40 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "697",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"3c799aa6087c0ef00efb4309f7ef7a65"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-ftkk7",
      "X-Request-Id",
      "699f40579d37cff0-SEA",
      "X-Runtime",
      "0.433502",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40579d37cff0-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=15JKCNuK42nVCoKajQFg%2BC65eFRamY8FGr1ouiADFIjFZsP0T0BAEJDlu9BQwCXowQAEF9p5pur4wPfbbBs%2BhW4Tap0MYXgdFtcrH1X7qNQSoKCPcmgdIGUmxcaAv2gvom8MnkQROk045VA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40579d37cff0-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:40Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"c6bed31fbf5b0a9bc16989a61048a460"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-kgqmp",
      "X-Request-Id",
      "699f405c2d68d014-SEA",
      "X-Runtime",
      "0.259636",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f405c2d68d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YzfEcDb2tanMSZlNr58NDyUQKZe0bGm2ZNGcjkqLOHV%2FuhvKrrxhJI%2BR9uMuyEm9IPQGgWENgaCqAySO0yazcws%2BKoSlDHA2FntxZE3dm5aNZnxWa5v2vx3mJpkVb8CmLoc2lf3KN3Aum2Y%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f405c2d68d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:40Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:41 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"c6bed31fbf5b0a9bc16989a61048a460"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-8ps2n",
      "X-Request-Id",
      "699f40604c29d014-SEA",
      "X-Runtime",
      "0.225370",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40604c29d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wUm%2B1ng6WPS6rbC6NBNofEuPxxFMsV4xOO85J1cgCDAnJG4Xv%2F47kPUCW7eVBm0H8ilt%2BL0xfW6sCqfIBcoc3r2GCbgwQw6iCOSTXzwpVUbKlcSkW6rwAzFNKG0wHU78XXxRCzlRXovhFAY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40604c29d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
    user: { tags: ["test_high_value", "outsider"] },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .matchHeader("content-length", 48)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:31:42Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:42 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "694",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"aa158d0670b21203e92963ae57e4db28"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-w7pf4",
      "X-Request-Id",
      "699f40638857d014-SEA",
      "X-Runtime",
      "0.282080",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40638857d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JVFZd3477189k4hPoKEYRX4N%2F5L9XR6qPB%2B0vX1EgX24l0Fo%2Fqg5lLBOUjei7J2UXjfYNMJHM0p2nHyNc%2BlAfxI5aSEiiQLhqf1SzGSVDWReTGjfj%2BtzaoX6GUypJ355ESvdR0p2nIw5wBY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40638857d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:42Z",
          time_zone: "Arizona",
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
          tags: ["outsider", "test_high_value"],
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
      "Wed, 06 Oct 2021 13:31:43 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"d230254ea3bf8a1be9887405fea1b823"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-f7ngf",
      "X-Request-Id",
      "699f406959806aab-SEA",
      "X-Runtime",
      "0.230492",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f406959806aab-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5xjL9kz5GXUx9igGY7ZDPiRMcyQ2t6ZqtlIOYR90ZeQ9Mbju2Rumts1F7IXzYPIKgrbtW0gZ3NLU9wTxSCp2E9qe81viHqwtrrk39%2BFWvSdXw235p1IdpvtkuWf%2Fl84BbO1Xq0zbfBfc62I%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=3790481195ec5837a1d3089f2678fd310cb982c2-1633527103; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f406959806aab-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=3790481195ec5837a1d3089f2678fd310cb982c2-1633527103"
  )
  .matchHeader("content-length", 144)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:31:43Z",
        time_zone: "Arizona",
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
        tags: ["outsider", "test_high_value", "test_recently_added"],
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
      "Wed, 06 Oct 2021 13:31:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "692",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"43e388340fc632b9a041c5d018ce3008"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-z2fwx",
      "X-Request-Id",
      "699f406cce9d6aab-SEA",
      "X-Runtime",
      "0.416597",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f406cce9d6aab-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cKzRgVQB%2FUV2VZ6HjR1vy%2BTvBrXZZ6ls59TyEFYkiLVBr7Bz7WVwCsJqZpk5zSMJsnya4NilpVLJ7CGhZ40wWZlXdYcfYiIYu8bk9vXt0kQJQh0YNMjxNv61nbp7uG1Vofv8HZqitv95Dq8%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f406cce9d6aab-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:43Z",
          time_zone: "Arizona",
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
          tags: ["outsider", "test_recently_added", "test_high_value"],
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
      "Wed, 06 Oct 2021 13:31:44 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"3ac4827134f4417aec6c07edb256019d"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-4kvmg",
      "X-Request-Id",
      "699f4071499ad014-SEA",
      "X-Runtime",
      "0.194139",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f4071499ad014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EWxeoadtF44iiP7Rik9Ni1%2Bs7%2F%2BhUAQN5fbgsxtOedeRHSG8CbNnPhDrOQiFLVOiztihyD4qbEInzjuk%2F4J5PVfznvf926Uv8lCrA%2Bj85w47q6e58qsELyg1cCOWeuNO2ps17IQKnI2U1zI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f4071499ad014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:43Z",
          time_zone: "Arizona",
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
          tags: ["outsider", "test_recently_added", "test_high_value"],
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
      "Wed, 06 Oct 2021 13:31:45 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"3ac4827134f4417aec6c07edb256019d"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-bvbdh",
      "X-Request-Id",
      "699f40760ec66aea-SEA",
      "X-Runtime",
      "0.206319",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40760ec66aea-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CL8hT5sAtXgz8PgGduQ08zxYskwl9b3RoM0B3bzlzcf0OGlidGeuomahtNBRFhZaWj21Mb%2FkKyPgP3tk94GBwUzZVvXZFuKFHtWLgV%2F%2B2acGeQxzpeK6kkLRnGxG9LdlMK%2BseQ498h2Occw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=22e47a9b6eb6c39b23967be39a9f4d6d31ca3698-1633527105; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40760ec66aea-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=22e47a9b6eb6c39b23967be39a9f4d6d31ca3698-1633527105"
  )
  .matchHeader("content-length", 104)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:31:45Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:46 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "689",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"cee5f79eb900dd3132a5e3189a781d71"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-ftkk7",
      "X-Request-Id",
      "699f40793b676aea-SEA",
      "X-Runtime",
      "0.362622",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40793b676aea-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BMXjTKI9I0ZMVm207hqIi3zZiESzAQUOYVoNI%2FX6mA8RjZJYG5vTsod%2B7OTi7oq79UCIwdK6nLd5Q2BaRK0d3l9MIErM8JPrMJ2rJGzPOdj%2BlxzQbw8f18LoRXsPLW9Nc3%2FR8Z3UhYOFPs0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40793b676aea-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:45Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:46 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"a83584384dba84422a711272850bd768"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-px99j",
      "X-Request-Id",
      "699f407d8a8dd014-SEA",
      "X-Runtime",
      "0.217632",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f407d8a8dd014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5ddUxS%2B8UiJT5RsQ0%2BySgJNVXB2Als%2FQggKt4YuWvg7BNFPszNvCwmiiiIxkBQS8P0qnlCsM6jPW7VO%2FrBUXPw5Se51%2FnTDL6CSNVAzdoh%2FctMMLQpnaI%2FmNS37FLweGJiBti2RhUtz5aiU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f407d8a8dd014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:45Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:47 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"a83584384dba84422a711272850bd768"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-pjsd5",
      "X-Request-Id",
      "699f40828e606055-SEA",
      "X-Runtime",
      "0.228145",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40828e606055-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QMJPR7QAxoF3QeDUZKeuhzU6nPtxQZtXKLR6P7jkgW2iVX8Pi6k3I4LY59%2BSA6y5gfZJp1szrAOkELqsfcH4WEcHokJrukrU9YdTaqV7vWqZfT7O1s7gWkY%2BPx%2FgSmIWAylKuTR4IcGAxQo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=85044f06f1a708a3ae01d6111615913d4eb64299-1633527107; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40828e606055-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420637634492.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=85044f06f1a708a3ae01d6111615913d4eb64299-1633527107"
  )
  .matchHeader("content-length", 116)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:31:47Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:48 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "686",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"1849fb51d2b9cb33db271e5f3c5b0b1b"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-tz9fq",
      "X-Request-Id",
      "699f4085cbe96055-SEA",
      "X-Runtime",
      "0.413578",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f4085cbe96055-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8ywHyssnZ6M34hrCDTmKD5RIb6s8po6RWExppaA30L%2FY40hJNSghWSM5RZZMivHKjCIjgsk9fuPzZQPRFH191m1Aa46Eiwa%2FmOevgo3kgJAgs1B4mqs5Of8q3vZTlkqMBZlil%2BRZ58eZtBA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f4085cbe96055-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/420637634492/identities.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492/identities/390424794252.json",
          id: 390424794252,
          user_id: 420637634492,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:30:26Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492/identities/390424810052.json",
          id: 390424810052,
          user_id: 420637634492,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-06T13:31:47Z",
          updated_at: "2021-10-06T13:31:47Z",
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
      "Wed, 06 Oct 2021 13:31:48 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"bf503914a6e998c65adac64f141bdf74"',
      "Last-Modified",
      "Wed, 06 Oct 2021 13:31:47 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-pn2dn",
      "X-Request-Id",
      "699f408bcb1df62b-SEA",
      "X-Runtime",
      "0.181796",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f408bcb1df62b-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bi55xElKvMyTt%2FpsQoeL6TZrPDUc6OaeFEBVLE2mWYsJupGu0jX8C3KZC27XecKexPE5Wsjz84wPmuc%2FKmK1%2FASfNkbu8yBRmZS7w%2F1Ot5NYJV%2FKIISr%2FInEmJa6DBKKjfnz5aODAlBfhBQ%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=ed35d90e97984075b3a1d10a80dd4747e3709649-1633527108; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f408bcb1df62b-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/420637634492/identities/390424810052/make_primary.json",
    {}
  )
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=ed35d90e97984075b3a1d10a80dd4747e3709649-1633527108"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492/identities/390424810052.json",
          id: 390424810052,
          user_id: 420637634492,
          type: "email",
          value: "othergrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-06T13:31:47Z",
          updated_at: "2021-10-06T13:31:49Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492/identities/390424794252.json",
          id: 390424794252,
          user_id: 420637634492,
          type: "email",
          value: "grouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:49Z",
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
      "Wed, 06 Oct 2021 13:31:49 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"1073faeec60e4df5eb20094311a51636"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-srkmt",
      "X-Request-Id",
      "699f408ecedff62b-SEA",
      "X-Runtime",
      "0.413358",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f408ecedff62b-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tKkLx0xXNf%2F9xnRaRjIhfE1%2FVxwx%2BA2NVVjs%2FuZX1H2WUiDBRziKSrGlgbDnoMKB3xyKu5M%2FCPEiIbFYdNvW%2FvtIjkPOMTvPIXRqauaufmZQ0CI55aQafPshKAJHkyMbhcBzbj0mJqdC3Nw%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f408ecedff62b-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:49Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:50 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"680d98bf420b9ad18576b7b4abcb48ce"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-7fk8r",
      "X-Request-Id",
      "699f40931ea4d014-SEA",
      "X-Runtime",
      "0.212229",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40931ea4d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bLfHrzaDxBqCjxdfvkbkreOr98ICXxgnsAMkIUvWX4tJQT8%2F9QyTxIvsPsWfD1o3VREJ6sU6yAncyPvnwGMMysaJgZztAOZp6U67N5lItYgREAaXWylwGNDy0udC%2FwTe%2BdawihQpJeqLC1g%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40931ea4d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .post("/api/v2/users.json", {
    user: {
      verified: true,
      name: "Anakin",
      alias: "MU",
      email: "skywalker@demo.com",
      user_fields: { text_field: "my text", checkbox_field: true },
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .matchHeader("content-length", 145)
  .once()
  .reply(
    201,
    {
      user: {
        id: 420808761531,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808761531.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-06T13:31:50Z",
        updated_at: "2021-10-06T13:31:50Z",
        time_zone: "Arizona",
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
        tags: ["checkedbox"],
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
          numeric_field: null,
          regex_field: null,
          text_field: "my text",
        },
      },
    },
    [
      "Date",
      "Wed, 06 Oct 2021 13:31:50 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1008",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/420808761531.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "682",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"f6ab161be3f30b0f03f7f2b54b047956"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-62l8t",
      "X-Request-Id",
      "699f40964a97d014-SEA",
      "X-Runtime",
      "0.571035",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40964a97d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V4Bt%2BfAnfQklXDa0RNVRNZonG%2FYJ9qd9HPEly60%2FKuEg1H5EomRS5fCgUi5TIR1LBYE8ye%2BbuWSN13dBeSGOXd8BaNHyA%2Bjzr%2BZnnVO2fA6QrnYYPlAbRdVjnpsEiuLPMpIkifqN9Os2Y0M%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40964a97d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "skywalker123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:31:51 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-l8vlt",
    "X-Request-Id",
    "699f409d4d004ceb-SEA",
    "X-Runtime",
    "0.181169",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f409d4d004ceb-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vcjj%2FAD8UeUNbDLaZsQENv%2Ff4sY0hmpdGGIMgahBvW3QUFnu9w%2FlApVCuA%2FJ4Uj0ruml9vxh0oi1NGs51f83VVOBLjrrR%2FKrnYlIfbNDZ%2Fs0eT4n%2BX2GTQ1xONzgW11zviOkR8DL%2BFfV6TU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=46dc270fe5cd380977ecd9b8f1cc50d884b213b6-1633527111; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f409d4d004ceb-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/create_or_update.json", {
    user: {
      verified: true,
      email: "skywalker@demo.com",
      name: "Anakin",
      external_id: "skywalker123",
      user_fields: { text_field: "change" },
      tags: ["test_recently_added"],
    },
  })
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=46dc270fe5cd380977ecd9b8f1cc50d884b213b6-1633527111"
  )
  .matchHeader("content-length", 169)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420808761531,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808761531.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-06T13:31:50Z",
        updated_at: "2021-10-06T13:31:52Z",
        time_zone: "Arizona",
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
        tags: ["test_recently_added"],
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
          numeric_field: null,
          regex_field: null,
          text_field: "change",
        },
      },
    },
    [
      "Date",
      "Wed, 06 Oct 2021 13:31:52 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/420808761531.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "680",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"2e4584280d9249930a9789219abfc4f7"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-6q89h",
      "X-Request-Id",
      "699f40a0db944ceb-SEA",
      "X-Runtime",
      "0.377464",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40a0db944ceb-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R%2Fy7DGSyIDCJqDi5vQwlKNSUcfIWBFpaIYmiF2R37bIoxS%2Fxmy7BfrTeGoCclebrjbcWWIy4lYfZORYYPac2hVodhUcpP9uIJ8x%2B5pVpsd9rD43LGz5Itux90xYg6PQ7oUUsQoAoEukeHRY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40a0db944ceb-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/420808761531.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .once()
  .reply(
    200,
    {
      user: {
        id: 420808761531,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808761531.json",
        name: "Anakin",
        email: "skywalker@demo.com",
        created_at: "2021-10-06T13:31:50Z",
        updated_at: "2021-10-06T13:31:52Z",
        time_zone: "Arizona",
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
        tags: ["test_recently_added"],
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
          numeric_field: null,
          regex_field: null,
          text_field: "change",
        },
      },
    },
    [
      "Date",
      "Wed, 06 Oct 2021 13:31:52 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Cache-Control",
      "max-age=5, private",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "679",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"2e4584280d9249930a9789219abfc4f7"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-nzvkz",
      "X-Request-Id",
      "699f40a51d1bd014-SEA",
      "X-Runtime",
      "0.231128",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40a51d1bd014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vAy1erWPWpZC9TGHw%2BV9auzYC7g2whb3PO5JXoP9xX77G6azeaI0o%2FPUrTMgObagj4krmgQa4fxGRq%2BokrWHnrpZ2irqHUTWArRSE8Pc2EXlk5Qr3yhbGDUK%2BLV%2FtgbqVkx98oQWC2LmxSU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40a51d1bd014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:31:53 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-86b99669db-fl8qr",
    "X-Request-Id",
    "699f40a9fce8f6cf-SEA",
    "X-Runtime",
    "0.159849",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f40a9fce8f6cf-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SpEW8%2Bf75FkKwBWjV4ScDqPHxxkDxC495%2BUOCn%2BImbSntJ%2B%2FD7DtkiBk2ZdjZ5q66xFFR5C9pyqHFCL1oTXOwPsrUxUVBjvKlkm7MfF8KbGs0ciI4QT6Gmkh%2FI92IfyASYepDPAgYG%2B219s%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=1395b6cfa5c5d6d23119f7458631443edcfaa0e1-1633527113; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f40a9fce8f6cf-GRU",
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=1395b6cfa5c5d6d23119f7458631443edcfaa0e1-1633527113"
  )
  .matchHeader("content-length", 115)
  .once()
  .reply(
    201,
    {
      user: {
        id: 420808762091,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-06T13:31:54Z",
        updated_at: "2021-10-06T13:31:54Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:54 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1007",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "677",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"115721022a92355079399c019296bc8c"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-v9sns",
      "X-Request-Id",
      "699f40acd884f6cf-SEA",
      "X-Runtime",
      "0.468097",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40acd884f6cf-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=efDepCP3ufGcrnTaTkj1iFk7vKOvjn5i65ezGCJVomhNHEuQ3fSwwb3AOjQ%2BqHY4S4TDU1wc22yD1d4%2FktMY2p79H%2Bx10%2B9tvVHFpgMoaW%2Buzy2azUl1Ssrn%2FpECoNPh%2BASZkz3n8ozPFxo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40acd884f6cf-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:31:54Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:54 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"f3ba7f14738b73e53ea2932482f40eca"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-jtjjj",
      "X-Request-Id",
      "699f40b1acb6d014-SEA",
      "X-Runtime",
      "0.230522",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40b1acb6d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FYGEx5nETWyJrlrtYBxqo42QyvNtxR9YW48glYiasnaynpRPoIDQTTRgo3U79981EFEOyd3Ly44yisSp%2FCxg06PfNqYbjc9Czi%2F1wuJs%2FbRqfzyjQPkQfNUQozNWwmESsmKYb0xZ4sEKCA4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40b1acb6d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:49Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:55 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"680d98bf420b9ad18576b7b4abcb48ce"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-tv8wq",
      "X-Request-Id",
      "699f40b508e7d014-SEA",
      "X-Runtime",
      "0.228915",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40b508e7d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5wSL6uv00%2FdUysKkKJ3s0P4je8O6MQcWu5EehDKcABJWK%2FpMoyICb00DEbwOhJdEwLMGdNIJD9dcL4bgG50qLSeHs2ujnRSIf1IuXr0yVnmZaZf4uDsmMhsDkzqGlZiFtd2lrf1JdpOHNxM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40b508e7d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:31:54Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:56 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"f3ba7f14738b73e53ea2932482f40eca"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-nkp7d",
      "X-Request-Id",
      "699f40b84d09d014-SEA",
      "X-Runtime",
      "0.232614",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40b84d09d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=B8Q8r7PxlMhJ4xqSfpg863l43y%2F6A9CTrlEYAwBk%2B6xLsyXHhYT6padY12FDsFZ9Cqu9ST1K6A2lIqhmnzBSCkabPaQOSn3o1LNTlYsw8IvXYTXgjAAJOartpPh8hQptUtob0XBjnLKFoDc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40b84d09d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:31:54Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:56 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"f3ba7f14738b73e53ea2932482f40eca"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-kxlrj",
      "X-Request-Id",
      "699f40bd3a92f704-SEA",
      "X-Runtime",
      "0.213183",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40bd3a92f704-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qOUlKkifyidI9aebc%2FwEPdnVOAG%2BQIMLUEdvTogmZn0lav0%2BmAMFi9oLbL4bazMFn372n%2FapxdYMqFTxE4zQ8SdJwhZAAFO04v9Qdfn%2BUGw64323NcphncShKSY10V00O5HLcdYbubTWA4g%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=2aa7e9b0842ddfa0abb2cbcec1a31e7b1e559b11-1633527116; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40bd3a92f704-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420808762091.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=2aa7e9b0842ddfa0abb2cbcec1a31e7b1e559b11-1633527116"
  )
  .matchHeader("content-length", 100)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420808762091,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-06T13:31:54Z",
        updated_at: "2021-10-06T13:31:57Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:57 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "672",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"9a3f1917e357622a44d41f5fcfc2ad7d"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-x5x27",
      "X-Request-Id",
      "699f40c06e4df704-SEA",
      "X-Runtime",
      "0.366249",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40c06e4df704-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T7YeXxkfU0IqwkASY3QcA55wIyK7GAijFLMVi%2BOJdQg6pr%2FX43QLE65uOqSqsD791ZhZpvwtPS1Ofq3vkM5J3zbYdpXnXjubb7PYXlwEjgDVT%2F%2BV5uVhaqsDMQYOBkQ8i%2BMxI%2BOAqtl45Go%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40c06e4df704-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:49Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:58 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"680d98bf420b9ad18576b7b4abcb48ce"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-x9f7h",
      "X-Request-Id",
      "699f40c51f4dd014-SEA",
      "X-Runtime",
      "0.222971",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40c51f4dd014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BQ1Jzm3K2UTjFVRHG8gaABHbRzB46VbAhMHUhyRVtyjuKeJqRQGUfyHmhe6I2%2FhJvtZbrzznbhs%2BuJ1hoghG1yp39Fy2NQ12j%2BBowPyy9H2BqyLx0Hon1JNSzh7YcZQRpsxT2HTFWEBHT%2FU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40c51f4dd014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:31:57Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:58 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"31f70d63af0a55a692a2db7bdf2fce80"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-2g77b",
      "X-Request-Id",
      "699f40c85c47d014-SEA",
      "X-Runtime",
      "0.250073",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40c85c47d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Lo8xC23c498YV9qRHwKjXBXZcfNXTX2HEyOu9ZUNdMYtPHUAQStvNJhUTbecPx3FAfksvmyIJb%2BD7jjHIgnVLGcs6%2BYUXCbMKIa8BrMoDWU4QNQr5%2FRHJIe21hl9IFfhHECBhd9X9coV5nU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40c85c47d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:31:57Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:31:59 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"31f70d63af0a55a692a2db7bdf2fce80"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-86gsw",
      "X-Request-Id",
      "699f40cbb86cd014-SEA",
      "X-Runtime",
      "0.189876",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40cbb86cd014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y9k%2FdTR6qw8%2FeUU5mxwlUPB8kY7aFWJ%2BlZbRQh6Vo5qlYyFz8K0uH3p19UhvAdU3bmc28Pb4dQljbqpVH5%2FdDsmkipGLjZzzGNjSrHcZQbJUtSWuN4ls9IKyE3a5TKcq1lcOnMj4D%2FMtGZ4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40cbb86cd014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:31:59 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-nv9nd",
    "X-Request-Id",
    "699f40cecbf6d014-SEA",
    "X-Runtime",
    "0.169040",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f40cecbf6d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aEc9KDufdZDSMFrqZDrBJarabLpKFN03BehHRvru9h8Jv0b%2BhwRGgvL5VM5cRit4TK04f%2F1bSLwTxR1d%2FpPTX2P3%2BGXf5hFqTEMJOtMpzCIf%2BtOQULiDWz3v0NNGNhB8HQTk4dy6dg9bX6c%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f40cecbf6d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:00 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-fvplb",
    "X-Request-Id",
    "699f40d36e04f1ee-SEA",
    "X-Runtime",
    "0.163399",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f40d36e04f1ee-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Jc%2Bc%2BY7ldQ4ii%2BGi8zYcyPKDgxk8UTub5rtRMXNR1ENCrxLqkLX5cgtmEovAXHGDkPpsjc2w3ebZEsFEeJzi77XAGCwKCdzrr%2BG0NZB%2Fj6luQkhegykZu8MVliSKJ5xPrpyIZOQ0q6Znxrw%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=239510f5baf0652d31f4b8af482b74fb4114b31a-1633527120; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f40d36e04f1ee-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=239510f5baf0652d31f4b8af482b74fb4114b31a-1633527120"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Bobby",
          email: "notgrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:31:57Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:00 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"31f70d63af0a55a692a2db7bdf2fce80"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-s898v",
      "X-Request-Id",
      "699f40d65acbf1ee-SEA",
      "X-Runtime",
      "0.268880",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40d65acbf1ee-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=i4nM5RCVNIFUrUPyiLU%2Br%2B6sgWP18EKtF%2BPOC2SYjyQqY4kJwfod2NZ2h6evwMhpBK155wYzG9nYD30MT8Fg0eH4L6f9QnVSX1cnNO3VsR8vAqtwlS8Xv5LBsm9t0PpQ1uB9SNgceZy5WtM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40d65acbf1ee-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420808762091.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=239510f5baf0652d31f4b8af482b74fb4114b31a-1633527120"
  )
  .matchHeader("content-length", 105)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420808762091,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
        name: "Bobby",
        email: "notgrouparoo@demo.com",
        created_at: "2021-10-06T13:31:54Z",
        updated_at: "2021-10-06T13:32:02Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:02 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "697",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"058fd9e181ebb1b67af8763fe3a360a5"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-2dbwv",
      "X-Request-Id",
      "699f40d9f817f1ee-GRU",
      "X-Runtime",
      "0.381512",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40d9f817f1ee-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r1GAgzI3kJ2kcpDWTc9FwUf3upn25QCHwPlbEH9dldyO3p4f09ekR0FTEkGSbXOyLMVRwiycLkkaonyT2iJzzdF21X83JI4KG2J8uSmN7qMvCHfz62d2dEFYrQxkWiJoeJvlZONi7EP3AUo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40d9f817f1ee-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/420808762091/identities.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421621051.json",
          id: 390421621051,
          user_id: 420808762091,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:31:54Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421622491.json",
          id: 390421622491,
          user_id: 420808762091,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-06T13:32:01Z",
          updated_at: "2021-10-06T13:32:01Z",
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
      "Wed, 06 Oct 2021 13:32:03 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"836d8d531b0a250881f7fcd4ba5db1ef"',
      "Last-Modified",
      "Wed, 06 Oct 2021 13:32:02 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "696",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-942dx",
      "X-Request-Id",
      "699f40e45e964b2e-GRU",
      "X-Runtime",
      "0.189787",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40e45e964b2e-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DmEJr1D7npG6w2iS8hfMEfvH5ZXVh1IcMRKQwzdx%2Fnw%2Fh0rULccN%2FyONKC2Nh8MKgfhuP6TP6qBDKL9TrjbD0HMNPY2G%2BwxrJEmxEr48JqW3av0jWkuvkZbfuroXxwe0RatCZfxGf4Adkk0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=6c1de211e5f3a4750cfbae8de73d369888503f73-1633527123; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40e45e964b2e-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/420808762091/identities/390421622491/make_primary.json",
    {}
  )
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=6c1de211e5f3a4750cfbae8de73d369888503f73-1633527123"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421622491.json",
          id: 390421622491,
          user_id: 420808762091,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-06T13:32:01Z",
          updated_at: "2021-10-06T13:32:04Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421621051.json",
          id: 390421621051,
          user_id: 420808762091,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:32:04Z",
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
      "Wed, 06 Oct 2021 13:32:05 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "695",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"2bb3c62eff2c9bf8c9126187e4f7d5f4"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-fdzxp",
      "X-Request-Id",
      "699f40eb8a9c4b2e-GRU",
      "X-Runtime",
      "0.404207",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40eb8a9c4b2e-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LPXoiy3I6DduVHRkCriZgPq2xBW1Rf8hTMQhNIkXs9I43prpEX0vzOHdgGveW3GRwiC41eWXNCc%2BazdwbKbZjkrOa3ud3hhBZ4CbNYiO37ZQV7TdXHIhpVyLwXSeTTua162YLSyaUt%2FK3GM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40eb8a9c4b2e-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:32:04Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:05 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"5e4cd2be965f8916f1b36b3d33b77195"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-tx84p",
      "X-Request-Id",
      "699f40f3ca6bd014-SEA",
      "X-Runtime",
      "0.191292",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40f3ca6bd014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z1yxfyOhNXtFGfaxjk%2Bo46Yx8X7UarWzQArEC%2F6bcbD2AwhTGnkhrfrm%2FN66ypvTzFrlYUmjNT2FE8Cn2rB6EsVAOx7Fi%2FQpsDTENU8VGqGlKQ1JWHFhCE9SSNDpo5EiumYN%2BhFdf8MCYbs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40f3ca6bd014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:49Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:06 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"680d98bf420b9ad18576b7b4abcb48ce"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-xx825",
      "X-Request-Id",
      "699f40f89bf351d2-SEA",
      "X-Runtime",
      "0.224850",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40f89bf351d2-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=039JKRVzYFJGjDDp1VROPl8vJMuqVoBojhpn5GR67etZRa5XXEjM3TgyWG6vJHrlbTP8jbnWcQr92%2FxjQoKYiKsC%2FJZ0UUQLlTHbqrTp6bKR5zfcjjq%2BA2KHl%2Bp%2BVsDNUTmTxtMcBHN9Mdg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=ea8d0f2731484819d79ed0fd5e4e67efed6cb526-1633527126; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40f89bf351d2-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:49Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:06 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"680d98bf420b9ad18576b7b4abcb48ce"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-mwfgk",
      "X-Request-Id",
      "699f40fbfca4d014-SEA",
      "X-Runtime",
      "0.189127",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f40fbfca4d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lqDuekW%2ByNvxPYfsfVNce3xrq5evvJJGT8p303GK4oOZChmF%2BSQ0OP4L4hILRvoQqcMXWVGklL%2F3cAGwqbDFYPlnWxZCFupCr1F285aeTp7o5wZY40jp3lAn%2FKGeoWbPjrV8BUP4Pj9bZK0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f40fbfca4d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420637634492,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
          name: "John Connor",
          email: "othergrouparoo@demo.com",
          created_at: "2021-10-06T13:30:26Z",
          updated_at: "2021-10-06T13:31:49Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:07 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"680d98bf420b9ad18576b7b4abcb48ce"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-kxlrj",
      "X-Request-Id",
      "699f4100cc1cf5db-SEA",
      "X-Runtime",
      "0.196017",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f4100cc1cf5db-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xNtiPU1S9XAZWrvf3IChMKBaAD3N1fbbwWCkKLs5Lfb%2BfgaHOi6W5x0lPdCyLnVoYKQSTeJNE7CC3K%2BNYbIKARlEzuqOGRnuC3IIpUApT8fq86ZxxGxuZu0HzIZYErX9DE8Vyvwu1Qu5sWg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=fbe1517146b80de99af502c85e99a9840acaa68e-1633527127; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f4100cc1cf5db-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/420637634492.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=fbe1517146b80de99af502c85e99a9840acaa68e-1633527127"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420637634492,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420637634492.json",
        name: "John Connor",
        email: null,
        created_at: "2021-10-06T13:30:26Z",
        updated_at: "2021-10-06T13:32:08Z",
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
      "Wed, 06 Oct 2021 13:32:08 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "690",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"17907628aff172c1c4ac2de7a63e0d3e"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-t95wq",
      "X-Request-Id",
      "699f4103f8bdf5db-SEA",
      "X-Runtime",
      "0.478686",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f4103f8bdf5db-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2CPKsQB1OrDHlTnXWJHZr8X0KTnQSv7lA0qd4F54fcWzbRG%2BM9pUIpNim70rvzX36GNErJkiyWJXqNXDDUa6GL3LJk4T0R9JHCP1466GzSCBgfg0YVT9gxXGgUBPIOqPItZBjYAOub6H%2Fnc%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f4103f8bdf5db-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:08 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-pcnvp",
    "X-Request-Id",
    "699f4108cc89d014-SEA",
    "X-Runtime",
    "0.173627",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f4108cc89d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Xd26VVvBtsgaT6onbU%2F0q3RlfHcNOIpfVVjEElhAf1ksLEES9sXaefLvndwgp3kQDqRZfjh%2BroXsbHO306Uqh%2BTpRE9uKN0mJUcitwPXDIg2qWKN2v93JSQ9tuUMu9Gx5AFUEDYAyQ6BFq4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f4108cc89d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:09 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-qtd22",
    "X-Request-Id",
    "699f410d786651d8-SEA",
    "X-Runtime",
    "0.171277",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f410d786651d8-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AHjtpjhiid6Cj84vEng8Wzw0yrQSl2VrV7FBezXfyvhe7Ab%2BeHD%2F%2FgCKrMXPi04Fdb%2Fxi%2BTLfwNYyIfzNhQyYG7wrmcubR4K1%2BF4ZwdB8UaPHlDNoKm7c%2BQI0KcnadeGsUF0kroNo0AxRrA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=e0b86c28f0e4cbc5ba2984efa0fe75c924bd626a-1633527129; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f410d786651d8-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "notgrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:10 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-9dsgc",
    "X-Request-Id",
    "699f41106e9dd014-SEA",
    "X-Runtime",
    "0.155961",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f41106e9dd014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oqd1bHzxNHEuQE35e%2BD9BrOKPnoEC7Ow2QT1iwuXRRQbWYVI3Mu18zyE7smj0uAYefmu2p9UWHRZxj5PmE587FrErKABpPW0rwb7wBB8qVfuoI5s4t3Es1mqr1uPWb%2B%2F5zHQKqTitknZNj0%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f41106e9dd014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Bobby",
          email: "almostgrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:32:04Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:11 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"5e4cd2be965f8916f1b36b3d33b77195"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-kxb29",
      "X-Request-Id",
      "699f4114fc086b0c-GRU",
      "X-Runtime",
      "0.201543",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f4114fc086b0c-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=itjq4i7xDSgM3wmAlgnpxRAeFrCAIuocAVp3IKDc%2FdIk66sIhWCZQtkHVlr1H58EAYoUUMSVfie5VJJnFRLe0WhMewbbvqdvm4GeTaapuXP9r38BdUE7aB%2FPXdcgfbZYdAV7Eeb67FoW%2FCI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=fe7432521de29ef12cd800fc0195b02e660b1641-1633527131; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f4114fc086b0c-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/420808762091.json", {
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=fe7432521de29ef12cd800fc0195b02e660b1641-1633527131"
  )
  .matchHeader("content-length", 139)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420808762091,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
        name: "Jill",
        email: "almostgrouparoo@demo.com",
        created_at: "2021-10-06T13:31:54Z",
        updated_at: "2021-10-06T13:32:12Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:12 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "685",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"aa1717beb92389da03525f2c6a3193ac"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-xgrd7",
      "X-Request-Id",
      "699f411c48f76b0c-SEA",
      "X-Runtime",
      "0.407666",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f411c48f76b0c-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0kJqndg2OQFLAWRSsRDWy5bwBe%2BWFY9FzBkwmjOjuhOA5nj%2B4kwGOlujjb77FFJHt0%2BSb4wOqVQTic75QJUKaTx3WpYD6WUL3PAhZtVlJA0lkJQ5NGxmHLevLP5%2Buu0gXKNOIm%2B6yAm38bg%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f411c48f76b0c-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/420808762091/identities.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421622491.json",
          id: 390421622491,
          user_id: 420808762091,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-06T13:32:01Z",
          updated_at: "2021-10-06T13:32:04Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421621051.json",
          id: 390421621051,
          user_id: 420808762091,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:32:04Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421624511.json",
          id: 390421624511,
          user_id: 420808762091,
          type: "email",
          value: "maybegrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-06T13:32:11Z",
          updated_at: "2021-10-06T13:32:11Z",
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
      "Wed, 06 Oct 2021 13:32:12 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "ETag",
      'W/"c664f2d18cea5536483bf9f47f595716"',
      "Last-Modified",
      "Wed, 06 Oct 2021 13:32:12 GMT",
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "684",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-wl29b",
      "X-Request-Id",
      "699f41229cd6f6d3-SEA",
      "X-Runtime",
      "0.165736",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f41229cd6f6d3-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7U2dllkdTx5ChFgTRkq64r8Wo6H44VP4aKl1lBQCzUcg5lVUBoQAxpoEneZiOdcADMYEkDRg1jPX0SDIyhGVJxAHX8EcFzy8b3KceKDm9EYt%2B6lfaNVTDXGPnWUBoL6k7Hj2AVpniOjpsUk%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=a8f711fdd33b4c97a81796aa47b80bb63a8fcca0-1633527132; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f41229cd6f6d3-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .put(
    "/api/v2/users/420808762091/identities/390421624511/make_primary.json",
    {}
  )
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=a8f711fdd33b4c97a81796aa47b80bb63a8fcca0-1633527132"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      identities: [
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421624511.json",
          id: 390421624511,
          user_id: 420808762091,
          type: "email",
          value: "maybegrouparoo@demo.com",
          verified: true,
          primary: true,
          created_at: "2021-10-06T13:32:11Z",
          updated_at: "2021-10-06T13:32:13Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421622491.json",
          id: 390421622491,
          user_id: 420808762091,
          type: "email",
          value: "almostgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-06T13:32:01Z",
          updated_at: "2021-10-06T13:32:13Z",
          undeliverable_count: 0,
          deliverable_state: "deliverable",
        },
        {
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091/identities/390421621051.json",
          id: 390421621051,
          user_id: 420808762091,
          type: "email",
          value: "notgrouparoo@demo.com",
          verified: true,
          primary: false,
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:32:04Z",
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
      "Wed, 06 Oct 2021 13:32:13 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "683",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"139d50da09d056551554eb52a1371175"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-kqcjp",
      "X-Request-Id",
      "699f41257ff6f6d3-SEA",
      "X-Runtime",
      "0.465353",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f41257ff6f6d3-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T%2FCHYu6FTnavHL3Z1J23nHVrDJ4sAGU4vo28qc6vttgGvEAN7S%2BwbAv9ICfK4WL2QP6SUrSuriQEy7rNebig2B6I4NizglmqcAi8JGNNlB7SFnnF785u3I800nIVWEqXw8XX8W5QWC4t%2Fc4%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f41257ff6f6d3-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:32:13Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:14 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"6bdf04478501280b501cb3a2353ee7bf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-zj9h8",
      "X-Request-Id",
      "699f412a6a01d014-SEA",
      "X-Runtime",
      "0.192786",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f412a6a01d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xKaCajt1nDc0D1oXYJoF9VsizUehPDEYOlpWXPOxb9vwuLZdzzqRKfzTNhKUSHLQrHfzH4mJD4FIS%2Fg%2F7PbPZOFdB%2BErWFAJ364wUMJ9mrlURsW9EhZGIFe%2F42eSl53NJyyuhy%2FSBGaqpa0%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f412a6a01d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:14 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-2dbwv",
    "X-Request-Id",
    "699f412f1c1af67b-SEA",
    "X-Runtime",
    "0.181705",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f412f1c1af67b-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XQWidjNYTB4ufkbEAgE9HUTCeS3pxi000wIiv7%2FcaAUP1lwiA34wTnu04jLXlxxFdANMjjBUb4tzFiMacO9y8u8YMdqoLCMX9iyO6Tn9wS0RxhobSdE7tRY3dLss8n%2BL4btzHnlsh4Ql7KU%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=e8d1c60661454a219001d7c855872b02a1076c1d-1633527134; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f412f1c1af67b-GRU",
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
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=e8d1c60661454a219001d7c855872b02a1076c1d-1633527134"
  )
  .matchHeader("content-length", 112)
  .once()
  .reply(
    201,
    {
      user: {
        id: 420808766111,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808766111.json",
        name: "John Doe",
        email: "grouparoo@demo.com",
        created_at: "2021-10-06T13:32:15Z",
        updated_at: "2021-10-06T13:32:15Z",
        time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:15 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Content-Length",
      "1004",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Location",
      "https://d3v-grouparoo.zendesk.com/api/v2/users/420808766111.json",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "680",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"5d4c72483b53d085162b47eb07d30016"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-j64kg",
      "X-Request-Id",
      "699f41320fccf67b-SEA",
      "X-Runtime",
      "0.487479",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f41320fccf67b-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MUmzZjrjyjn10w96LQGDCpuhbCnczZ1pW8sIliCB8rgAKm7pq4lmHQ6yRkbYib%2BttmpXG7PuTtFTXA3D5%2F5u%2BAp7O%2BtIrtMHVkMN%2FISLshyuDkLR6dR5n2THVQlk7CAKFcnrzOGMbZBJ7Po%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f41320fccf67b-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808766111,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808766111.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:32:15Z",
          updated_at: "2021-10-06T13:32:15Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:16 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"365958d670e50db22edfa8f3764408a4"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-xx825",
      "X-Request-Id",
      "699f4136ebbbd014-SEA",
      "X-Runtime",
      "0.199027",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f4136ebbbd014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Mr8Y31upQy1m9zKso3zQE%2BTqJeCQgt9OgSkwcL2r84g5m5GuaSvSmmgbLbYMie1pPnTQEmCAkkP%2FRXZgJJyt65w2oXfPzGGum%2FhaxCCOUiogWU7Ce3JNHyH%2FW1%2BkFigviBtC5GPmGYq4dQI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f4136ebbbd014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
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
          id: 420808766111,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808766111.json",
          name: "John Doe",
          email: "grouparoo@demo.com",
          created_at: "2021-10-06T13:32:15Z",
          updated_at: "2021-10-06T13:32:15Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:17 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"365958d670e50db22edfa8f3764408a4"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-2h2p2",
      "X-Request-Id",
      "699f413bae466b08-SEA",
      "X-Runtime",
      "0.218319",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f413bae466b08-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3TdGvGoMr3caKguwgi2a%2BPpwa356oYS3zY9qVQTeJlSTWzM0Z2%2FJkTJUXAMILlz7Eo8PqQrBwtIX9DtBIfAzicx0KxPZGysi%2B6v64u%2BrgTkYJV5YAslLpU9ndgWpbmgEyWlb%2BJmy9%2Bg3sUI%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Set-Cookie",
      "__cfruid=ac11974d2c3be37bb925c0dc5b71699c4ca6afe8-1633527137; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f413bae466b08-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/420808766111.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=ac11974d2c3be37bb925c0dc5b71699c4ca6afe8-1633527137"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420808766111,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808766111.json",
        name: "John Doe",
        email: null,
        created_at: "2021-10-06T13:32:15Z",
        updated_at: "2021-10-06T13:32:17Z",
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
      "Wed, 06 Oct 2021 13:32:17 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "677",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"6a1e9c90b4f977c962099e5a58853868"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-bmtlh",
      "X-Request-Id",
      "699f413efb496b08-SEA",
      "X-Runtime",
      "0.577778",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f413efb496b08-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3Fp2bz7tv9%2BBDFLpy8UISk%2FzWTc3RMQJIp%2BZQR1rLqc%2FIYJ97FJznq%2BVFHg%2BGvfO00P1va%2Fh11lswhPTu6uMWlQjpuzFQFFqcwdnxByAlimXsElYbA%2FQKFsxcXDO51dMPyJa%2Bu1i%2FanuDqs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f413efb496b08-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "grouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:18 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-lgszp",
    "X-Request-Id",
    "699f41447eedd014-SEA",
    "X-Runtime",
    "0.141368",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f41447eedd014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VFPpiYE0rQPt391Xg21%2BE9eMfvvdbkUXXSsyBTa25xdGMuXaDV1gfYgPhj5YVaLAcj8VEkotLRateNcOF2iclJuewBDX0oQ81Im7lQgodXxhl1%2F8IDJgcu3aT%2BkHh3utW9HYa2MROijH86w%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f41447eedd014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:32:13Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:18 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"6bdf04478501280b501cb3a2353ee7bf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-b97v6",
      "X-Request-Id",
      "699f41472ad4d014-SEA",
      "X-Runtime",
      "0.175966",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f41472ad4d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Lqajg1%2FTTgm7L2Jvxhz80ULG3Pwo1bfOIhs6KEEQgkw2YQCnEP5mUhPx9kwj3AihEIvAUIF%2BZ9J2uM%2Byp9Q%2BFMJaJ3d5H%2FrR7TxPQEN3iPSksvOJgiRbovG1NPeAd4CHk0Ija3YtqJheUMU%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f41472ad4d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:19 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-9mtbt",
    "X-Request-Id",
    "699f414ba8606030-SEA",
    "X-Runtime",
    "0.159351",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f414ba8606030-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NO5Mpj0KajC65zAGOgtHsBLZ8DiSJksCDMIeCI2HaJY%2BF7cY4xHT7iDkAGEr5l6BBAj4zRq1iXMnL5yrhAnF3aQXZ33zHBmuoLZXLQhD62gt8CZo39WJnJWcF5L1KGbzXPeOf0XgKJ29aEg%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=773e9ef73e50d1833a6bb39df09c4dc225fb5b05-1633527139; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f414ba8606030-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=773e9ef73e50d1833a6bb39df09c4dc225fb5b05-1633527139"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808762091,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
          name: "Jill",
          email: "maybegrouparoo@demo.com",
          created_at: "2021-10-06T13:31:54Z",
          updated_at: "2021-10-06T13:32:13Z",
          time_zone: "Arizona",
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
      "Wed, 06 Oct 2021 13:32:20 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"6bdf04478501280b501cb3a2353ee7bf"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-9pvf9",
      "X-Request-Id",
      "699f414e8cac6030-SEA",
      "X-Runtime",
      "0.189903",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f414e8cac6030-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hW6RkbP9xb212jTZbYp7TO2WBFRWM0zzrp%2BCJOsoji4shFs7cwi5cr%2BkEL2V69likadYtBiJZaJS70Zsg1kCUajVFQRKlfBBpL0zbvdc%2FWNolEQgDq%2FvtoqoBXWx%2BQDaXffy6LEpr6qLcZM%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f414e8cac6030-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/420808762091.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=773e9ef73e50d1833a6bb39df09c4dc225fb5b05-1633527139"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420808762091,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808762091.json",
        name: "Jill",
        email: null,
        created_at: "2021-10-06T13:31:54Z",
        updated_at: "2021-10-06T13:32:20Z",
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
      "Wed, 06 Oct 2021 13:32:20 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "672",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"456861c11192724cbe0ce7a2fb868821"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-sc7lp",
      "X-Request-Id",
      "699f4151a9706030-SEA",
      "X-Runtime",
      "0.510418",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f4151a9706030-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PzSNQ8lFEtSlpyPs74gggEokBYdh0M99uORNMCad8s362m7ml380OyMhxY6wG%2BHchCQEdX299eEkKWUP03UwAPEtBAozRYpcQmDoGhLdCf77oLHeUh%2BGFF6FDGXpQjibVmF%2Ff4cuwmySWMs%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f4151a9706030-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "maybegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:21 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    'W/"0d9fec644c8d2302fdce202e8be00f94"',
    "X-Zendesk-Origin-Server",
    "classic-app-server-86b99669db-hbl7n",
    "X-Request-Id",
    "699f4156afc7d014-SEA",
    "X-Runtime",
    "0.162820",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f4156afc7d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AP4lmVueVxgDqYJ%2FVSBoWtvv55ppPQsvSZZdpgyWQum3GokRLTzXOE%2B%2FwhQaeBUWjozF4lEpaJVdZNtlSXQL0wT84cIPEgZ5TlYBmjwnZIozwTOIkflkdl%2Bz6J7gDds56HKqkvQ7iyD1CcE%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f4156afc7d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:21 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-gz8j8",
    "X-Request-Id",
    "699f41599c15d014-SEA",
    "X-Runtime",
    "0.163930",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f41599c15d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JJhd1MXJWN4uvvfy2uz6zkDsAgHv8iE7JiGYtjxmufBDpNQQYmdfxCEm8nN3MF3JkmdwG5RcSVH3mEfoU%2BNNq0YcdLAYaw31PLdqqELIyGzoo5p5aoFGiN9c8NWGgZED4J87fMiFAuw24R4%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f41599c15d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:22 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-l8vlt",
    "X-Request-Id",
    "699f415e0d4d6055-SEA",
    "X-Runtime",
    "0.177431",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f415e0d4d6055-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eSlnwrfIKMrVx6PM2B6CjGy5cOzaBSNy%2F49nkXgORVYenifiqeXUtBgt%2F9hGJARU3x0bLRx2eUlLZE6V%2FLpcfn52h5Qibd15VGcDtmMUEnb3p14qZSqIY8r9LuWQiIsNjZX6zHkxECDqa20%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Set-Cookie",
    "__cfruid=f1a640bb0353109a4dd9e8884e76a98972c046de-1633527142; path=/; domain=.d3v-grouparoo.zendesk.com; HttpOnly; Secure; SameSite=None",
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f415e0d4d6055-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ external_id: "fakegrouparoo123" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:22 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-z8xf5",
    "X-Request-Id",
    "699f41610de2d014-SEA",
    "X-Runtime",
    "0.172014",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f41610de2d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vvCXBniGOTT1lJJvS3uuV660GN6hhipwMDVL53%2FeeSsTG%2BtwREJ52%2BqFiq7YyuFuRPzWg8NVw4RehLbJksyQsI7Urg6mksWWg7FGHcjPf8MT1hCZ%2BMZcyA8eU4gaHZCy0HqMxH9IuXmElSo%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f41610de2d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "grouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:23 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-pcnvp",
    "X-Request-Id",
    "699f4163f9cfd014-SEA",
    "X-Runtime",
    "0.195128",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f4163f9cfd014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EPD0vnA6royd%2FuPnFrYNQ3Or9MLy6c4ZQdxLHhaDl041CT11f8pLS7xxw1QS9DBwAqkgUavQf07RDG%2FzojQXR50WsooeavmIP%2Bd9S%2F6FCDuiPGRwV4EL2iGSidHl1H%2BZV1auXCj2PiPgr54%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f4163f9cfd014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "othergrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:23 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-pn2dn",
    "X-Request-Id",
    "699f41671e3fd014-SEA",
    "X-Runtime",
    "0.189697",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f41671e3fd014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HoS7dzJyhoZc2vLQOjaP6meQ1stmjxOEjZwxJOkTY8sJhGu%2FNw5bsFQEMrBeblhkk4lpVqMPz6vMd4c6kbWy0gl3CQyvXJuXvnvlmhP6k%2B05%2FNIkviTY0VpoNDqHkaXil%2BPxfV6FxUBz%2FwA%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f41671e3fd014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "notgrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:24 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-4mztf",
    "X-Request-Id",
    "699f416a19ded014-SEA",
    "X-Runtime",
    "0.195720",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f416a19ded014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mWDOOzy9mWPTAfUQOjY%2BO2TDgMHYiNhjJgGglfXIOnCNORFpXEFMmzaaM2pld6X8Uwk9lz3JdgdZFouvAcHIO1j41q4hqqlrIemeGAj12pFF%2BPdXaaslhyELqMV5P6xJUxy4715rc%2BfiG9U%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f416a19ded014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "maybegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:24 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-ftm92",
    "X-Request-Id",
    "699f416d3d63d014-GRU",
    "X-Runtime",
    "0.178724",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f416d3d63d014-GRU",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UzbeDlxCbnNaF0AAijb0qKwKztEJrr8muKg10FWeQ7xICXSG%2BBZIU7iC%2BipiJtNhpJfl9EXW9kPX3S6Fy9H5%2B2kp6BEwWX6uCRc9ZKhX5pevG1YydeTG7Cjjr607EZlLKnt3Nt1sAZ9XQPY%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f416d3d63d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "fakegrouparoo%40demo.com" })
  .once()
  .reply(200, { users: [], next_page: null, previous_page: null, count: 0 }, [
    "Date",
    "Wed, 06 Oct 2021 13:32:25 GMT",
    "Content-Type",
    "application/json; charset=UTF-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "keep-alive",
    "X-Zendesk-API-Version",
    "v2",
    "X-Zendesk-Application-Version",
    "v9875",
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
    "classic-app-server-86b99669db-ts5kx",
    "X-Request-Id",
    "699f417048f9d014-SEA",
    "X-Runtime",
    "0.195331",
    "X-Zendesk-Zorg",
    "yes",
    "X-Request-ID",
    "699f417048f9d014-SEA",
    "X-Content-Type-Options",
    "nosniff",
    "CF-Cache-Status",
    "DYNAMIC",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=scgPYBqG4xn9wOebKYVtovbZa4ISFVbc6MhVv43UP1way5LSldDKQHqID65sNi7RzjpXNnizh5kC7j%2B0mWj%2FT%2Bzt7qQH%2FWdMJVhZX1TymnP8qqteRN4SH4YU68fLyQM%2FVOPcYXzCi18tdXo%3D"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "CF-RAY",
    "699f417048f9d014-GRU",
  ]);
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .get("/api/v2/users/search.json")
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .query({ query: "skywalker%40demo.com" })
  .once()
  .reply(
    200,
    {
      users: [
        {
          id: 420808761531,
          url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808761531.json",
          name: "Anakin",
          email: "skywalker@demo.com",
          created_at: "2021-10-06T13:31:50Z",
          updated_at: "2021-10-06T13:31:52Z",
          time_zone: "Arizona",
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
          tags: ["test_recently_added"],
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
            numeric_field: null,
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
      "Wed, 06 Oct 2021 13:32:26 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
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
      'W/"cd80cd4907e83503d13380bfb10492a2"',
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-b6htk",
      "X-Request-Id",
      "699f41734c42d014-GRU",
      "X-Runtime",
      "0.231756",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f41734c42d014-GRU",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QMTfjzj%2FTKpexhmCcr3bk47pezio%2FxrQ0%2Fh9SFKvIjVavK4lNQLnQ01iDFEIQCuGdRJDETsmvXAS5qgu918NFvVkKBQu0DH5xAH30JWef75lHDAj8rej0oGfBEn%2BXzea6Foe%2FxJYyumRTEY%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f41734c42d014-GRU",
    ]
  );
nock("https://d3v-grouparoo.zendesk.com:443", { encodedQueryParams: true })
  .delete("/api/v2/users/420808761531.json", {})
  .matchHeader("content-type", "application/json")
  .matchHeader("accept", "application/json")
  .matchHeader(
    "authorization",
    "Basic ZGV2QGdyb3VwYXJvby5jb20vdG9rZW46OHFNNzdXd2cyT3VJQ0ZZSlNwbzU0UmdIb2hvbHZNa2t4VUF4VzMwYw=="
  )
  .matchHeader("x-zendesk-marketplace-name", "Grouparoo")
  .matchHeader("x-zendesk-marketplace-organization-id", 5084)
  .matchHeader("x-zendesk-marketplace-app-id", 577390)
  .matchHeader("host", "d3v-grouparoo.zendesk.com")
  .matchHeader(
    "cookie",
    "__cfruid=491d5894980ec8511d4f59bdbfcd9b585613d3d9-1633527021"
  )
  .matchHeader("content-length", 2)
  .once()
  .reply(
    200,
    {
      user: {
        id: 420808761531,
        url: "https://d3v-grouparoo.zendesk.com/api/v2/users/420808761531.json",
        name: "Anakin",
        email: null,
        created_at: "2021-10-06T13:31:50Z",
        updated_at: "2021-10-06T13:32:27Z",
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
          numeric_field: null,
          regex_field: null,
          text_field: "change",
        },
      },
    },
    [
      "Date",
      "Wed, 06 Oct 2021 13:32:27 GMT",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "keep-alive",
      "X-Zendesk-API-Version",
      "v2",
      "X-Zendesk-Application-Version",
      "v9875",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit",
      "700",
      "X-Rate-Limit-Remaining",
      "661",
      "Strict-Transport-Security",
      "max-age=31536000;",
      "ETag",
      'W/"10c71a0750c97cbd0f033d82b9bc4237"',
      "Cache-Control",
      "max-age=0, private, must-revalidate",
      "X-Zendesk-Origin-Server",
      "classic-app-server-86b99669db-22rkc",
      "X-Request-Id",
      "699f417a3d08d014-SEA",
      "X-Runtime",
      "0.526818",
      "X-Zendesk-Zorg",
      "yes",
      "X-Request-ID",
      "699f417a3d08d014-SEA",
      "X-Content-Type-Options",
      "nosniff",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QqLTiJ0SzhcxschGsMgFZ5jjni74G%2BRYdQ1l%2FplwEbJL%2FcusZuEjNmdxEq2eS7%2B%2By3Kd09hLamECD5YUNfHMYGPEQdEGuO2w4Ni6LqIw%2FJhyMowuWyYHdXSela5CgGIeImSM%2FUM2a21Bvfo%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "699f417a3d08d014-GRU",
    ]
  );
