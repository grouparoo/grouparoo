const nock = require("nock");

nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:14:46 GMT",
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
      "35967",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:14:46 GMT",
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
      "35966",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22sandro%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: sandro@mailinator.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:14:46 GMT",
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
      "35965",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: brandnew@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:47 GMT",
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
      "35964",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:14:47 GMT",
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
      "35963",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:14:48 GMT",
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
      "35962",
      "X-Rate-Limit-Reset",
      "1620872100",
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
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:48 GMT",
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
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:48 GMT",
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
      "35961",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22ultraBrand%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: ultrabrand@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:49 GMT",
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
      "35960",
      "X-Rate-Limit-Reset",
      "1620872100",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22ultraBrand%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22keys%22%3A%7B%22email%22%3A%22ultraBrand%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Sandro%22%2C%22phone_number%22%3A%22%2B558399999999%22%2C%22ltv%22%3A3039%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b99a972c075de427b34",
        cookie:
          "2a5e60cfe58a375d328ff4f8300a4c4d609c8b99a972c075de427b347f77c3aeafaadd94c99be3e1741924dc",
        email: "ultrabrand@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:49 GMT",
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
      "1620872100",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "189",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22ultraBrand%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b99a972c075de427b34",
        cookie:
          "2a5e60cfe58a375d328ff4f8300a4c4d609c8b99a972c075de427b347f77c3aeafaadd94c99be3e1741924dc",
        email: "ultrabrand@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:50 GMT",
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
      "35959",
      "X-Rate-Limit-Reset",
      "1620872100",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "179",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b99a972c075de427b34%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b99a972c075de427b34",
        cookie:
          "2a5e60cfe58a375d328ff4f8300a4c4d609c8b99a972c075de427b347f77c3aeafaadd94c99be3e1741924dc",
        email: "ultrabrand@mailinator.com",
      },
      vars: { first_name: "Sandro", ltv: 3039, phone_number: "+558399999999" },
      lists: null,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:50 GMT",
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
      "35958",
      "X-Rate-Limit-Reset",
      "1620872100",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "265",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:50 GMT",
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
      "35957",
      "X-Rate-Limit-Reset",
      "1620872100",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Evan%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:51 GMT",
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
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Evan" },
      lists: null,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:51 GMT",
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
      "35956",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:52 GMT",
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
      "35955",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Evan" },
      lists: null,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:52 GMT",
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
      "35954",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:52 GMT",
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
      "35953",
      "X-Rate-Limit-Reset",
      "1620872100",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:53 GMT",
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
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: null,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:53 GMT",
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
      "35952",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:54 GMT",
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
      "35951",
      "X-Rate-Limit-Reset",
      "1620872100",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3Anull%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:54 GMT",
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
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      vars: { first_name: null },
      lists: null,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:55 GMT",
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
      "35950",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:55 GMT",
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
      "35949",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%201%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      list_id: "609c66f7547d83170459f419",
      list: "Test Group 1",
      create_time: "Wed, 12 May 2021 16:38:31 -0700",
      send_time: null,
      count: 27,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:55 GMT",
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
      "1620872100",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "168",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%202%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      list_id: "609c66f9c2e7ce7ec4041f65",
      list: "Test Group 2",
      create_time: "Wed, 12 May 2021 16:38:33 -0700",
      send_time: null,
      count: 10,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:56 GMT",
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
      "1620872100",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "168",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A1%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:56 GMT",
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
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: {
        "Test Group 1": "Wed, 12 May 2021 19:14:56 -0700",
        "Test Group 2": "Wed, 12 May 2021 19:14:56 -0700",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:57 GMT",
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
      "35948",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:57 GMT",
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
      "35947",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%201%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      list_id: "609c66f7547d83170459f419",
      list: "Test Group 1",
      create_time: "Wed, 12 May 2021 16:38:31 -0700",
      send_time: null,
      count: 28,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:57 GMT",
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
      "1620872100",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "168",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A0%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:58 GMT",
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
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Wed, 12 May 2021 19:14:56 -0700" },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:58 GMT",
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
      "35946",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:14:59 GMT",
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
      "35945",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:14:59 GMT",
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
      "35944",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:14:59 GMT",
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
      "35943",
      "X-Rate-Limit-Reset",
      "1620872100",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:00 GMT",
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
      "35942",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Wed, 12 May 2021 19:14:56 -0700" },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:00 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:01 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:01 GMT",
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
      "1620872160",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22caio%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a763607c885545262dfb85c1781177d3d92",
        email: "caio@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:01 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "183",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a763607c885545262dfb85c1781177d3d92",
        email: "caio@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:02 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "173",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a763607c885545262dfb85c1781177d3d92",
        email: "caio@mailinator.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Wed, 12 May 2021 19:14:56 -0700" },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:02 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "262",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:03 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: brandnew@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:03 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: nonexistent@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:03 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: brandnew@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:04 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: nonexistent@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:04 GMT",
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
      "1620872160",
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
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22keys%22%3A%7B%22email%22%3A%22brandnew%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brand%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:05 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "187",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:05 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "177",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8ba9238e70689729d723%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
      vars: { first_name: "Brand" },
      lists: null,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:06 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "220",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:06 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "177",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%201%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      list_id: "609c66f7547d83170459f419",
      list: "Test Group 1",
      create_time: "Wed, 12 May 2021 16:38:31 -0700",
      send_time: null,
      count: 28,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:06 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "168",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%202%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      list_id: "609c66f9c2e7ce7ec4041f65",
      list: "Test Group 2",
      create_time: "Wed, 12 May 2021 16:38:33 -0700",
      send_time: null,
      count: 10,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:07 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "168",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%203%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      list_id: "609c7504e0ab890ca716c4e7",
      list: "Test Group 3",
      create_time: "Wed, 12 May 2021 17:38:28 -0700",
      send_time: null,
      count: 10,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:07 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "168",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8ba9238e70689729d723%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brandnew%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A1%2C%22Test%20Group%203%22%3A1%7D%2C%22vars%22%3A%7B%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:07 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "187",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a763607c885545262dfb85c1781177d3d92",
        email: "caio@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:08 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "173",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a763607c885545262dfb85c1781177d3d92",
        email: "caio@mailinator.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Wed, 12 May 2021 19:14:56 -0700" },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:08 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "262",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:09 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "177",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8ba9238e70689729d723%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
      vars: { first_name: "Brand" },
      lists: {
        "Test Group 1": "Wed, 12 May 2021 19:15:07 -0700",
        "Test Group 2": "Wed, 12 May 2021 19:15:07 -0700",
        "Test Group 3": "Wed, 12 May 2021 19:15:07 -0700",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:09 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "364",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:10 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a763607c885545262dfb85c1781177d3d92",
        email: "caio@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:10 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "173",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40bleonard.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Caio%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      ok: true,
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:10 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:11 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
      vars: { first_name: "Caio" },
      lists: { "Test Group 1": "Wed, 12 May 2021 19:14:56 -0700" },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:11 GMT",
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
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "260",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:12 GMT",
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
      "35978",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8b983c204b6e3d148a76",
        cookie:
          "199b30719fefc9bcb13016d51f0a6532609c8b983c204b6e3d148a767b67736e0b881db56de4cd24b5baba16",
        email: "brian@bleonard.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:12 GMT",
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
      "35977",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8b983c204b6e3d148a76%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(200, { ok: true }, [
    "Date",
    "Thu, 13 May 2021 02:15:12 GMT",
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
    "1620872160",
    "Content-Length",
    "11",
    "Connection",
    "close",
    "Content-Type",
    "application/json",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:13 GMT",
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
      "35976",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    404,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:13 GMT",
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
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:14 GMT",
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
      "35975",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:14 GMT",
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
      "35974",
      "X-Rate-Limit-Reset",
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "177",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8ba9238e70689729d723%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
      vars: { first_name: "Brand" },
      lists: {
        "Test Group 1": "Wed, 12 May 2021 19:15:07 -0700",
        "Test Group 2": "Wed, 12 May 2021 19:15:07 -0700",
        "Test Group 3": "Wed, 12 May 2021 19:15:07 -0700",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:14 GMT",
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
      "35973",
      "X-Rate-Limit-Reset",
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "364",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: nonexistent@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:15 GMT",
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
      "35972",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: nonexistent@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:15 GMT",
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
      "35971",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "609c8ba9238e70689729d723",
        cookie:
          "b818c7c7cb9fb3519c134f2e85d078e4609c8ba9238e70689729d7237de1735dfadcb8eb1b120fde4b0d0e23",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:15 GMT",
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
      "35970",
      "X-Rate-Limit-Reset",
      "1620872160",
      "Vary",
      "Accept-Encoding",
      "Content-Length",
      "177",
      "Connection",
      "close",
      "Content-Type",
      "application/json",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .delete("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22609c8ba9238e70689729d723%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(200, { ok: true }, [
    "Date",
    "Thu, 13 May 2021 02:15:16 GMT",
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
    "1620872160",
    "Content-Length",
    "11",
    "Connection",
    "close",
    "Content-Type",
    "application/json",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: nonexistent@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:16 GMT",
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
      "35969",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: brandnew@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:17 GMT",
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
      "35968",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    404,
    {
      error: 99,
      errormsg: "User not found with email: nonexistent@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:17 GMT",
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
      "4796",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: nonexistent@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:17 GMT",
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
      "35967",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: brandnew@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:18 GMT",
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
      "35966",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brian%40bleonard.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@bleonard.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:18 GMT",
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
      "35965",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:19 GMT",
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
      "35964",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22sandro%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: sandro@mailinator.com" },
    [
      "Date",
      "Thu, 13 May 2021 02:15:19 GMT",
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
      "35963",
      "X-Rate-Limit-Reset",
      "1620872160",
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
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json:
      "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    {
      error: 99,
      errormsg: "User not found with email: brandnew@mailinator.com",
    },
    [
      "Date",
      "Thu, 13 May 2021 02:15:19 GMT",
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
      "35962",
      "X-Rate-Limit-Reset",
      "1620872160",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
      "Content-Type",
      "application/json",
    ]
  );
