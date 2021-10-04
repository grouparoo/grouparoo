const nock = require("nock");

nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:49 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218420",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:49 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218420",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22sandro%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: sandro@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:49 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218420",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:46:50 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218420",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:50 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218420",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:50 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218420",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "184",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22ultraBrand%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:46:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "179",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%22609c8b99a972c075de427b34%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22ultraBrand%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Sandro%22%2C%22phone_number%22%3A%22%2B558399999999%22%2C%22ltv%22%3A3039%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
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
      "Sat, 02 Oct 2021 23:46:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "189",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22ultraBrand%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:46:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "179",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22609c8b99a972c075de427b34%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:46:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "265",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:53 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Evan%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:53 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "184",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: "Evan" },
      lists: null,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:53 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "216",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: "Evan" },
      lists: null,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "216",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "184",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: "Brian" },
      lists: null,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "217",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3Anull%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "184",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: null },
      lists: null,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "214",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
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
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 1" }, [
    "Date",
    "Sat, 02 Oct 2021 23:46:57 GMT",
    "Content-Type",
    "application/json",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
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
    "1633218420",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%201%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 1" }, [
    "Date",
    "Sat, 02 Oct 2021 23:46:57 GMT",
    "Content-Type",
    "application/json",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
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
    "1633218420",
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
      list_id: "6158ef7176629e767419c7ec",
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:57 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "77",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
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
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 2" }, [
    "Date",
    "Sat, 02 Oct 2021 23:46:58 GMT",
    "Content-Type",
    "application/json",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
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
    "1633218420",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%202%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 2" }, [
    "Date",
    "Sat, 02 Oct 2021 23:46:58 GMT",
    "Content-Type",
    "application/json",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
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
    "1633218420",
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
      list_id: "6158ef72ec260502d872dec2",
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:58 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "77",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A1%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "184",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: "Brian" },
      lists: {
        "Test Group 1": "Sat, 02 Oct 2021 16:46:59 -0700",
        "Test Group 2": "Sat, 02 Oct 2021 16:46:59 -0700",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "312",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:46:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218420",
      "Vary",
      "Accept-Encoding",
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
      list_id: "6158ef7176629e767419c7ec",
      list: "Test Group 1",
      create_time: "Sat, 02 Oct 2021 16:46:57 -0700",
      send_time: null,
      count: 1,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "167",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A0%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Brian%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "184",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Sat, 02 Oct 2021 16:46:59 -0700" },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "263",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:01 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:02 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Sat, 02 Oct 2021 16:46:59 -0700" },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "263",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:03 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22caio%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb284dd336240c193e940c60692979a04724e",
        email: "caio@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "183",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb284dd336240c193e940c60692979a04724e",
        email: "caio@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "173",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb284dd336240c193e940c60692979a04724e",
        email: "caio@mailinator.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Sat, 02 Oct 2021 16:46:59 -0700" },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "262",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:04 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:05 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:05 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:05 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:05 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
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
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "187",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "177",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef7a21039f3f40030af3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
      vars: { first_name: "Brand" },
      lists: null,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "220",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "177",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
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
      list_id: "6158ef7176629e767419c7ec",
      list: "Test Group 1",
      create_time: "Sat, 02 Oct 2021 16:46:57 -0700",
      send_time: null,
      count: 1,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "167",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
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
      list_id: "6158ef72ec260502d872dec2",
      list: "Test Group 2",
      create_time: "Sat, 02 Oct 2021 16:46:58 -0700",
      send_time: null,
      count: 0,
      type: "normal",
      primary: false,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "167",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
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
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 3" }, [
    "Date",
    "Sat, 02 Oct 2021 23:47:08 GMT",
    "Content-Type",
    "application/json",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
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
    "1633218480",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/list")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22list%22%3A%22Test%20Group%203%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(404, { error: 15, errormsg: "Unknown list: Test Group 3" }, [
    "Date",
    "Sat, 02 Oct 2021 23:47:08 GMT",
    "Content-Type",
    "application/json",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
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
    "1633218480",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/list",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22list%22%3A%22Test%20Group%203%22%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      list: "Test Group 3",
      type: "natural",
      list_id: "6158ef7dbba7f85a89391742",
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "77",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%226158ef7a21039f3f40030af3%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brandnew%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%22Test%20Group%201%22%3A1%2C%22Test%20Group%202%22%3A1%2C%22Test%20Group%203%22%3A1%7D%2C%22vars%22%3A%7B%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "187",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb284dd336240c193e940c60692979a04724e",
        email: "caio@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "173",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb284dd336240c193e940c60692979a04724e",
        email: "caio@mailinator.com",
      },
      vars: { first_name: "Brian" },
      lists: { "Test Group 1": "Sat, 02 Oct 2021 16:46:59 -0700" },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "262",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "177",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef7a21039f3f40030af3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
      vars: { first_name: "Brand" },
      lists: {
        "Test Group 1": "Sat, 02 Oct 2021 16:47:09 -0700",
        "Test Group 2": "Sat, 02 Oct 2021 16:47:09 -0700",
        "Test Group 3": "Sat, 02 Oct 2021 16:47:09 -0700",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "364",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:11 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb284dd336240c193e940c60692979a04724e",
        email: "caio@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "173",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .post(
    "/user",
    "api_key=29831a903632490eb5e1722df107f06ac&format=json&json=%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22keys%22%3A%7B%22email%22%3A%22brian%40mailinator.com%22%7D%2C%22keysconflict%22%3A%22merge%22%2C%22lists%22%3A%7B%7D%2C%22vars%22%3A%7B%22first_name%22%3A%22Caio%22%7D%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D&sig=NOCK"
  )
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      ok: true,
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "184",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: "Caio" },
      lists: { "Test Group 1": "Sat, 02 Oct 2021 16:46:59 -0700" },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "262",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:13 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
      vars: { first_name: "Caio" },
      lists: { "Test Group 1": "Sat, 02 Oct 2021 16:46:59 -0700" },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:14 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "262",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef6bfffac466a80fb284",
        cookie:
          "de929633424a17426102655e039c19746158ef6bfffac466a80fb2847bea9992f39ab4ef4552f4756249f429",
        email: "brian@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:14 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "174",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .delete("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef6bfffac466a80fb284%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(200, { ok: true }, [
    "Date",
    "Sat, 02 Oct 2021 23:47:14 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "11",
    "Connection",
    "close",
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
    "1633218480",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:15 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .delete("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    404,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:15 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:15 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "177",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef7a21039f3f40030af3%22%2C%22key%22%3A%22sid%22%2C%22fields%22%3A%7B%22keys%22%3A1%2C%22vars%22%3A1%2C%22lists%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
      vars: { first_name: "Brand" },
      lists: {
        "Test Group 1": "Sat, 02 Oct 2021 16:47:09 -0700",
        "Test Group 2": "Sat, 02 Oct 2021 16:47:09 -0700",
        "Test Group 3": "Sat, 02 Oct 2021 16:47:09 -0700",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "364",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:16 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:16 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    200,
    {
      keys: {
        sid: "6158ef7a21039f3f40030af3",
        cookie:
          "d5aeb67196e5f143c3a87db16ce81eb86158ef7a21039f3f40030af38496f339cf893e1129d22ea8e9018020",
        email: "brandnew@mailinator.com",
      },
    },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "177",
      "Connection",
      "close",
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
      "1633218480",
      "Vary",
      "Accept-Encoding",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .delete("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%226158ef7a21039f3f40030af3%22%2C%22key%22%3A%22sid%22%7D",
    sig: "NOCK",
  })
  .once()
  .reply(200, { ok: true }, [
    "Date",
    "Sat, 02 Oct 2021 23:47:17 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "11",
    "Connection",
    "close",
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
    "1633218480",
  ]);
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:17 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:18 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .delete("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%7D",
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
      "Sat, 02 Oct 2021 23:47:18 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22nonexistent%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:18 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:19 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brian%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: brian@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:19 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22caio%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: caio@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:19 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22sandro%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
    sig: "NOCK",
  })
  .once()
  .reply(
    400,
    { error: 99, errormsg: "User not found with email: sandro@mailinator.com" },
    [
      "Date",
      "Sat, 02 Oct 2021 23:47:19 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
nock("https://api.sailthru.com:443", { encodedQueryParams: true })
  .get("/user")
  .query({
    api_key: "29831a903632490eb5e1722df107f06ac",
    format: "json",
    json: "%7B%22id%22%3A%22brandnew%40mailinator.com%22%2C%22key%22%3A%22email%22%2C%22fields%22%3A%7B%22keys%22%3A1%7D%7D",
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
      "Sat, 02 Oct 2021 23:47:20 GMT",
      "Content-Type",
      "application/json",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
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
      "1633218480",
    ]
  );
