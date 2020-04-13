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
      "Mon, 13 Apr 2020 18:23:56 GMT",
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
      "35983",
      "X-Rate-Limit-Reset",
      "1586802240",
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
      "Mon, 13 Apr 2020 18:23:57 GMT",
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
      "35982",
      "X-Rate-Limit-Reset",
      "1586802240",
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
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:23:57 GMT",
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
      "1586802240",
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
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:23:57 GMT",
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
      "35981",
      "X-Rate-Limit-Reset",
      "1586802240",
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
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:23:58 GMT",
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
      "35980",
      "X-Rate-Limit-Reset",
      "1586802240",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Evan%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:23:58 GMT",
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
      "1586802240",
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
      "%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Evan" },
      lists: null,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:23:59 GMT",
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
      "35979",
      "X-Rate-Limit-Reset",
      "1586802240",
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
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:23:59 GMT",
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
      "1586802240",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:00 GMT",
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
      "1586802300",
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
      "%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: null,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:00 GMT",
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
      "1586802300",
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
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:01 GMT",
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
      "1586802300",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3Anull%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:01 GMT",
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
      "1586802300",
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
      "%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      vars: { first_name: null },
      lists: null,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:01 GMT",
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
      "1586802300",
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
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:02 GMT",
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
      "1586802300",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A1%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:02 GMT",
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
      "1586802300",
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
      "%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: {
        "Test Group 1": "Mon, 13 Apr 2020 11:24:02 -0700",
        "Test Group 2": "Mon, 13 Apr 2020 11:24:02 -0700",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:02 GMT",
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
      "1586802300",
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
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:02 GMT",
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
      "1586802300",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A0%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:03 GMT",
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
      "1586802300",
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
      "%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    200,
    {
      keys: {
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Mon, 13 Apr 2020 11:24:02 -0700" },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:03 GMT",
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
      "1586802300",
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
        sid: "5e94ae3d308b452df1607448",
        cookie:
          "0b609c7cebeaab512c6d7ed874b132a35e94ae3d308b452df1607448ea20cb342068f84a13f8fbe4595da967",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:04 GMT",
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
      "1586802300",
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
      "%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .reply(200, { ok: true }, [
    "Date",
    "Mon, 13 Apr 2020 18:24:04 GMT",
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
    "1586802300",
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
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:04 GMT",
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
      "1586802300",
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
      "%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with sid: 5e94ae3d308b452df1607448",
    },
    [
      "Date",
      "Mon, 13 Apr 2020 18:24:04 GMT",
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
      "1586802300",
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
      "%7B%22id%22%3A%225e94ae3d308b452df1607448%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .reply(200, { ok: true }, [
    "Date",
    "Mon, 13 Apr 2020 18:24:05 GMT",
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
    "1586802300",
    "Content-Length",
    "11",
    "Connection",
    "close",
    "Content-Type",
    "application/json",
  ]);
