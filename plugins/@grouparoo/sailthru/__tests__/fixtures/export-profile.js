const nock = require("nock");

nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .once()
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:34 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:34 GMT",
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
      "1586737560",
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
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:34 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:34 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:35 GMT",
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
      "1586737560",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Evan%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:35 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Evan" },
      lists: null,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:35 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:36 GMT",
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
      "1586737560",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:36 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: null,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:36 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:37 GMT",
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
      "1586737560",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3Anull%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:37 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      vars: { first_name: null },
      lists: null,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:37 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:38 GMT",
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
      "1586737560",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A1%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:38 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: {
        "Test Group 1": "Sun, 12 Apr 2020 17:25:38 -0700",
        "Test Group 2": "Sun, 12 Apr 2020 17:25:38 -0700",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:38 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:39 GMT",
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
      "1586737560",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A0%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:39 GMT",
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
      "1586737560",
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
    json:
      "%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Sun, 12 Apr 2020 17:25:38 -0700" },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:39 GMT",
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
      "35987",
      "X-Rate-Limit-Reset",
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e93b17e5183767fd1379d4a",
        cookie:
          "bd8a505c68cac2d4a6cb1ddf67473a9e5e93b17e5183767fd1379d4a5e1ec5f52bf89223982e844f66a3132a",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:40 GMT",
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
      "35986",
      "X-Rate-Limit-Reset",
      "1586737560",
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
    json:
      "%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .reply(200, { ok: true }, [
    "Date",
    "Mon, 13 Apr 2020 00:25:40 GMT",
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
    "1586737560",
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
    json:
      "%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with sid: 5e93b17e5183767fd1379d4a",
    },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:40 GMT",
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
      "35985",
      "X-Rate-Limit-Reset",
      "1586737560",
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
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Mon, 13 Apr 2020 00:25:40 GMT",
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
      "35984",
      "X-Rate-Limit-Reset",
      "1586737560",
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
    json:
      "%7B%22id%22%3A%225e93b17e5183767fd1379d4a%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .reply(200, { ok: true }, [
    "Date",
    "Mon, 13 Apr 2020 00:25:41 GMT",
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
    "1586737560",
    "Content-Length",
    "11",
    "Connection",
    "close",
    "Content-Type",
    "application/json",
  ]);
