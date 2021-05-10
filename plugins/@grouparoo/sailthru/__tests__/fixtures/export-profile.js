const nock = require("nock");

nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:49 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35999",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:50 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35998",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:51 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35999",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "182",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:51 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35997",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "172",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:51 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35996",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "172",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Evan%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:52 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35998",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "182",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Evan" },
      lists: null,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:52 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35995",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "214",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:52 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35994",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "172",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:53 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35997",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "182",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: null,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:53 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35993",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "215",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:53 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35992",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "172",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3Anull%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:53 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35996",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "182",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      vars: { first_name: null },
      lists: null,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:54 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35991",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "212",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:54 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35990",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "172",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%201%22%7D",
    sig: "NOCK",
  })
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 1" }, [
    "Date",
    "Thu, 16 Apr 2020 21:57:55 GMT",
    "Server",
    "Sailthru",
    "X-Content-Type-Options",
    "nosniff",
    "X-XSS-Protection",
    "1; mode=block",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Rate-Limit-Limit",
    "36000",
    "X-Rate-Limit-Remaining",
    "35999",
    "X-Rate-Limit-Reset",
    "1587074280",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
    "Content-Type",
    "application/json",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%201%22%7D",
    sig: "NOCK",
  })
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 1" }, [
    "Date",
    "Thu, 16 Apr 2020 21:57:55 GMT",
    "Server",
    "Sailthru",
    "X-Content-Type-Options",
    "nosniff",
    "X-XSS-Protection",
    "1; mode=block",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Rate-Limit-Limit",
    "36000",
    "X-Rate-Limit-Remaining",
    "35998",
    "X-Rate-Limit-Reset",
    "1587074280",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
    "Content-Type",
    "application/json",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/list",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22list%22%3A%22Test%20Group%201%22%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      list: "Test Group 1",
      type: "natural",
      list_id: "5e98d4e3a4768b553b47202a",
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:55 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "4800",
      "X-Rate-Limit-Remaining",
      "4799",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "77",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%202%22%7D",
    sig: "NOCK",
  })
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 2" }, [
    "Date",
    "Thu, 16 Apr 2020 21:57:56 GMT",
    "Server",
    "Sailthru",
    "X-Content-Type-Options",
    "nosniff",
    "X-XSS-Protection",
    "1; mode=block",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Rate-Limit-Limit",
    "36000",
    "X-Rate-Limit-Remaining",
    "35997",
    "X-Rate-Limit-Reset",
    "1587074280",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
    "Content-Type",
    "application/json",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%202%22%7D",
    sig: "NOCK",
  })
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 2" }, [
    "Date",
    "Thu, 16 Apr 2020 21:57:57 GMT",
    "Server",
    "Sailthru",
    "X-Content-Type-Options",
    "nosniff",
    "X-XSS-Protection",
    "1; mode=block",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Rate-Limit-Limit",
    "36000",
    "X-Rate-Limit-Remaining",
    "35996",
    "X-Rate-Limit-Reset",
    "1587074280",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
    "Content-Type",
    "application/json",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/list",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22list%22%3A%22Test%20Group%202%22%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      list: "Test Group 2",
      type: "natural",
      list_id: "5e98d4e538f5396d4b2a2c00",
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:57 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "4800",
      "X-Rate-Limit-Remaining",
      "4798",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "77",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A1%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:57 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35995",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "182",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: {
        "Test Group 1": "Thu, 16 Apr 2020 14:57:57 -0700",
        "Test Group 2": "Thu, 16 Apr 2020 14:57:57 -0700",
      },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:58 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35989",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "310",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:58 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35988",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "172",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%201%22%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      list_id: "5e98d4e3a4768b553b47202a",
      list: "Test Group 1",
      create_time: "Thu, 16 Apr 2020 14:57:55 -0700",
      send_time: null,
      count: 1,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:58 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35995",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "167",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A0%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:58 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35994",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "182",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Thu, 16 Apr 2020 14:57:57 -0700" },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:59 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35999",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "261",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e98d4dfdb4f0f46bf07c5d3",
        cookie:
          "4d758b8be4d5575dff4006c9317a3c535e98d4dfdb4f0f46bf07c5d3e0af1f67eba3115c529ffdb2b0d168ae",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:57:59 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35998",
      "X-Rate-Limit-Reset",
      "1587074280",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "172",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .delete("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .reply(200, { ok: true }, [
    "Date",
    "Thu, 16 Apr 2020 21:58:00 GMT",
    "Server",
    "Sailthru",
    "X-Content-Type-Options",
    "nosniff",
    "X-XSS-Protection",
    "1; mode=block",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Rate-Limit-Limit",
    "4800",
    "X-Rate-Limit-Remaining",
    "4799",
    "X-Rate-Limit-Reset",
    "1587074340",
    "Content-Length",
    "11",
    "Connection",
    "close",
    "Content-Type",
    "application/json",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 16 Apr 2020 21:58:01 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35999",
      "X-Rate-Limit-Reset",
      "1587074340",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .delete("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%7D",
    sig: "NOCK",
  })
  .reply(
    404,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 16 Apr 2020 21:58:01 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "4800",
      "X-Rate-Limit-Remaining",
      "4798",
      "X-Rate-Limit-Reset",
      "1587074340",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 16 Apr 2020 21:58:02 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35998",
      "X-Rate-Limit-Reset",
      "1587074340",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with sid: 5e98d4dfdb4f0f46bf07c5d3",
    },
    [
      "Date",
      "Thu, 16 Apr 2020 21:58:02 GMT",
      "Server",
      "Sailthru",
      "X-Content-Type-Options",
      "nosniff",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Rate-Limit-Limit",
      "36000",
      "X-Rate-Limit-Remaining",
      "35997",
      "X-Rate-Limit-Reset",
      "1587074340",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .delete("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%225e98d4dfdb4f0f46bf07c5d3%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .reply(200, { ok: true }, [
    "Date",
    "Thu, 16 Apr 2020 21:58:02 GMT",
    "Server",
    "Sailthru",
    "X-Content-Type-Options",
    "nosniff",
    "X-XSS-Protection",
    "1; mode=block",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Rate-Limit-Limit",
    "4800",
    "X-Rate-Limit-Remaining",
    "4797",
    "X-Rate-Limit-Reset",
    "1587074340",
    "Content-Length",
    "11",
    "Connection",
    "close",
    "Content-Type",
    "application/json",
  ]);
