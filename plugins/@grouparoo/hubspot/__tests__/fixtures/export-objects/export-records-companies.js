const nock = require("nock");

nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "7220374393",
          properties: {
            createdate: "2021-11-03T16:12:11.622Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:13:17.714Z",
            hs_object_id: "7220374393",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-03T16:12:11.622Z",
          updatedAt: "2021-11-03T16:13:17.714Z",
          archived: false,
        },
        {
          id: "7220417832",
          properties: {
            createdate: "2021-11-03T16:12:44.458Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:13:17.714Z",
            hs_object_id: "7220417832",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:12:44.458Z",
          updatedAt: "2021-11-03T16:13:17.714Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:55:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722179f372755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b1af2cf1-e154-4116-b123-93b642f108d7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249618",
      "X-Trace",
      "2BE91877D24A8D19BEA52AAB9B7D39F23AEBBE6767000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uU3CtKs7VUvlqijwmFj3rcgc5BWHU6jQtfGxfojKQMQ94eBAxu9pDa%2Bl4ZCTIvXxeUb5vA%2BatD5q9NBZglr4wePq%2BJIdoLjNrrIjOGr7PnLW%2BWaM4x%2F5yDQKOwiaaf0k"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [{ id: "7220374393" }, { id: "7220417832" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Wed, 03 Nov 2021 16:55:58 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a872219bbcccf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6909769e-1107-49c8-9554-3118df43de71",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249617",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "99",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2B1EFFF3DBDD0803441D49B9F869C43E97DF354E2F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oE0saSVQ6DmE79GqYWL%2F0ztmb8T5snJrHzJVM6WEc28tsO%2BL%2F7monxw2mqTnKdXrYXOW20zk6OgDketx77JWImezUf4lEpEhEBGwZW4Aejs9K98JkZc7uPULV6CUcfly"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 2, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:55:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87221c3a42275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "73c7470c-1a5b-40d2-98ee-c644a5a7452d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249616",
    "X-Trace",
    "2BD2A7F6AACE101DDB6BB7B44B7B9F6CF8D754E9F4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s0TMALZVI7oeJ0Mn%2BVtKGXjZgZvx9w4InsMsVmvgIJdTs%2Fn2Q4l57oN4M4rwAxYhs%2Fwv25RxLtx9luapIEWo6se8tnTO8U7yBzFlkfnAuFS0LoWmRPGE0ISTpbwueiTx"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:55:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87221fdc47e092-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3a502042-565d-4618-971c-9f1cf4122057",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249615",
    "X-Trace",
    "2BC4A78142FA3C5703D8FED668F89565A10540C2B0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eB%2BKx1Zwa4knXw%2B7pe56rQI8Euy7fsw%2B62q6njxnRkDVau8TbOd%2B%2FREaAK3PPZjBZbHfX3cOfsxnjZLWpb6SkAMgkzFp3YxI8xq%2FIVNRkeb5IM7RfIjSl6fIOiFgEkxH"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:55:59 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8722216bb62745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "cdd059e7-b7d7-4bfe-91d7-c62fcb3b83a5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249614",
    "X-Trace",
    "2BD09497F487EE9D016F73E6A0769581B48894A035000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p0eF%2FZqqZ6Y47oGSNcQIWMRU7EnNsDgw4K%2FaLhvtWWvtPwA%2FcDsNfUNs%2BCoUuXHGq5i%2BdR%2FhMwBrKACifZaRUE0%2B4LqaHI%2FlYgx9qDdR7%2FfxAilgMW%2B7L%2FHaPD8t21Xg"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:55:59 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8722234930275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bc1936c7-0983-408e-9535-b15b17025ec7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249613",
    "X-Trace",
    "2B16ECBCAF12BCC7B31F81F3759752054634CD5F9E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N6Fws4tDL6Akjr92Z3US7qClWB9I6a9bKHMG5dTxZIgrJEmKGGQrCl%2BeCBjwN9BJGdU9O0JmtYPKIyI9tOmmJBPpKRuIV9EiWB0sUUmeodHceA9YH4L8O4L%2BMKnj3%2BLh"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:55:59 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8722250ce1274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "247e0c25-21a2-4903-a7bf-059a7a24f4b6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249612",
    "X-Trace",
    "2BE654289DE403A4057132D0F19A284F43CC0EA16F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RhNpwK9xjodInRuUoO47Y1DRwjPfgsFmv7TMb8f%2FB9J0Yw9PnRIku%2FKz4kBOZ1Tn%2Fiagjt5r%2FXkY%2BWJdvtiqcC2HX%2BW0QCYNC8h%2BqNHSq6lZKe%2B9JoO6oBnqE2Bhx94G"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:56:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8722273f182737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f06208a3-8a60-4bad-af18-b0b3b3407cf3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249611",
    "X-Trace",
    "2BECB6FE46D21EAC7D875B9C42251DAFBD0BAADB12000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rkzNi1ClFZGIbmfbLUzFYcWoBijOFPfDpqRULtNkTV8ivcKkFuQkPe3MOnEIIhMg73pwNY9Tgq%2BH9V9lzmk%2Fqy0nicqSJQg2qBm6z%2BLyAdbAuzn6wm9pS9EE8I2uLQM2"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/create", {
    inputs: [{ properties: { domain: "grouparoo.demo.com", name: "John" } }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:56:00.364Z",
            hs_object_id: "7220641840",
            name: "John",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:00.364Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:56:00.364Z",
      completedAt: "2021-11-03T16:56:00.452Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872229995ee078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c3f8093c-9943-4059-9f44-ef192d65c0be",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249610",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "98",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2B56129CF6E0687DFDB85E37826E8B0522F9FDE94E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mc1gqqATU8xkN1Ax7WT2X7esh71GuWa3wTHbIeuVNMc4f7dYbWMv27W41geZI0ypE7AIoKPM%2FWBNet3EmiXrPDh59PCHjHBrstd7gqtSIbI1XjqN1YwjpWrsN0WqED8G"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:56:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87222bbaab2755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5f495385-0108-4efa-be25-7eeda14dabfe",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249609",
    "X-Trace",
    "2BBD30288A6A772D231B631EA33511AF55EF339138000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7nhMVH5aOwcnpV5d8u7wnIzNVSGNzfTrd9uD0scKf6sdQPUvV6b6ml%2Fp8gcSPNggx1Fy20kb08IRV168LCY7wr1wSyxKr3AW8BJlQNEvQq2O2z5cfOrMKvuNcAbFWYPI"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:56:11.264Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:11.264Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722e95bfe275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f4c10ad3-a35e-457c-a4a4-cae535f70e8f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249608",
      "X-Trace",
      "2B200E24FBE58BDCE7BE5FF6BEDC21D5B0F1B19D0E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=40JXthkAJvu2d3XPVdeY5a2qpAy031bCZBd42%2BBJRnIgtAL9mjbQkvzWaJLSLM%2BcMkCgxbzFMQwVAzlop5Vl%2F6UHGnMADuLr%2Fbh9s3PZ8tYw1923wtUyPkQ5gourEbSi"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:56:11.264Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:11.264Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722eac8e1cf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d81824e5-38cf-49fd-b37f-ea5754489322",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249607",
      "X-Trace",
      "2B2F4F90082A37663B647CB7E76E0CCA1864A23410000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U26UI195oD2r%2FjUBz%2BlMA6JFTMNF%2BkyVMBK63En1z%2ByQabqfk1my2Et49muiaaTaIypeQLsAxa%2BK6ZhmwVfpI1Zj3aGyT%2FDfim48MSCXQqsisRtQSI0ESwCNBk4AQVUZ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:56:11.264Z",
            hs_object_id: "7220641840",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:11.264Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722ec8be3e092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4ede4621-c727-4432-a7dd-bad7551ed88c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249606",
      "X-Trace",
      "2BA3979100AB7F3A79E2997E8C681BFFC14B7B28B3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ExvOTn9aiJbnpKk5DIYXjQxD6e8vtvpMJePCucUrMrQEWYrvlOnKAd3Cm7wxWDgNW%2Fs0Qf1CMxsCI8bxBELB9MM0RrTzLmnL8%2Bfu%2FM5hlou9Vds5XIBfqnJ9grfBg5W%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:56:11.264Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:11.264Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722ee98022745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bd5af122-f4c7-4d0b-9237-5392078c72c9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249605",
      "X-Trace",
      "2BA4F3AF0E6CC4B45EF98B034CB0302C896E393695000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GT%2Fwt0Zf4n9BgBS6DFkKtGNIW9zKSNtPmvVSYwKmZFq6WnLGPfvWbB%2BsioZCHpYsD16FHRxkATonHhzu0%2BKIxANs68HgpXvpyHfchAV9hbjr%2BAaAExMwwpTNE%2BZSoslR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:56:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8722f01b38cf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "feb387f4-5307-4790-8f02-fbebf8cf6c45",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249604",
    "X-Trace",
    "2B62041B2117E95D00217EBA73F352CCD7B5EB3168000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=k8hUAJfjoH7IlPOPxZv2DhyIiJelZ8l6vw4uvQZvANR21pigoJyDhxsErexfhkJIp9B2J2NuLpqL0Is5%2FPhhjgVAib5rydPockGbs6WT1FUAAf6dbQbINABmDxmxWI6q"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:56:11.264Z",
            hs_object_id: "7220641840",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:11.264Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722f18ed8cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ce78ed65-dd7f-48ba-988d-c22b90e8d488",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249603",
      "X-Trace",
      "2BF42F8D3FCE074E7AA8E9ED26F08772BC9DAAE272000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BbipZGyrKHlObZd3WQKIwAq02by4FQaHvwuSijFJlgTJ5dqG2Q1SAtqx%2F2n4JWLXnV75CRLwnqGGANNbx0axPHAxekuE3xQcKSjyFHogn7dGobfvKssFZj1t2aG%2BCYDS"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7220641840",
        properties: {
          domain: "grouparoo.demo.com",
          name: "John",
          website: "www.doe.com",
          facebookfans: "3039",
        },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2021-11-03T16:56:32.616Z",
            hs_object_id: "7220641840",
            name: "John",
            website: "www.doe.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:32.616Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:56:32.610Z",
      completedAt: "2021-11-03T16:56:32.688Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722f32cdecf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d61d7b34-c33f-479b-9cde-c77cc35940b5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249602",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "99",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2BFFCC06F651BACD56D3056AFC37427CA6FCFA3B30000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QB4PJlD3zIGga8lp3138oEZWnTSO5On39N6tG0qDEeOitfbf%2B5QM7jtB7BnG0jC7v9hsWromxx4gt7TcrgWVfg4RHwQert1Ay5rZ7pDgr5m5QVsBt4mRrHp7soEeWe0G"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/create", {
    inputs: [{ properties: { domain: "grouparoo2.demo.com", name: "Pete" } }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:56:32.926Z",
            hs_object_id: "7220616540",
            name: "Pete",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:56:32.926Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:56:32.925Z",
      completedAt: "2021-11-03T16:56:32.978Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722f4ff85e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "219ff488-a4f3-41c7-8eab-41be8c6b7a9d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249601",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "98",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2B5ED716B2CAB4BB891813AD6FE11A96BE47787272000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WXAsHLhXPdMO%2B%2FllSzlqYHeWtSifFAT4VmGSQhe8mTroyClfQQ6wygdLVFowoQtIAisfj5vuZPDh1g9DdlvnHr7YeNYnGKOxT%2BUV28SyGmKOG8Nse951U26W8%2BAqXDI7"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2021-11-03T16:56:32.616Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:32.616Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:56:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8722f6daf62743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "05a24c1e-2ca3-491d-9ff7-1ac0b9ec1e4a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249600",
      "X-Trace",
      "2B46DAF20DA2836C6563D9F839CE6C30BC4C185BFF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7fDqkhxTXm4OBqCWRqKAJTik2Y4jz4J9VI5UhqwA32fOGQ4ZkVOFuO%2F1mRq103UANnHW4Tc6S3KHO7bAUXcLXeHMrPnnwa5%2FDUKwSG3TVGlaWNmljNF0S52gkrNNs7zR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2021-11-03T16:56:32.616Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:32.616Z",
          archived: false,
        },
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:56:40.464Z",
            hs_object_id: "7220616540",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:56:40.464Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723b42ed12746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4e7fd960-5b13-49ac-8732-05868632a4f3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249599",
      "X-Trace",
      "2B0841B2ABFF79DC7C59CA5A99E429F9FB8D70E229000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hzdrnLAhXux3wGY53xANrMK1Mb%2F6GCY6CVp6bB64GhEnMfLkkKsYFZeQuoQUZ%2BKhj9BVLGqf8apMjrS5flDFRCS4xAfUtedrnlaJnbnJU%2BsrcgbgcdLwygvOJbPLkiyd"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2021-11-03T16:56:32.616Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:32.616Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723b5cd1d2749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e5634fea-63e2-4312-9fde-346a24216f03",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249598",
      "X-Trace",
      "2BD2FF3F835F07D7E66E76D669217B5B0D1590CBC2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6vppaL%2F1OOo1FO0wdN7oVP66%2BGTJgTfrVHP1ER8p0d0JPEWovSFTXhMh40Rnp0Ouvwr1qGSMSd0%2BGw%2FqnyXQUw5JERnOIUxWyWJWdzR6gugnwhW9EE3xMu0HBHzd3j7o"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:56:40.464Z",
            hs_object_id: "7220616540",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:56:40.464Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723b7afafcf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7ff32cdc-2255-4935-baee-b76de9859f1e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249597",
      "X-Trace",
      "2B9D1DE105BF25D32B5C94FE2BD5445191AA6F6694000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mC9R4kuwyoXaa2eaSOO2uva%2BRPZEYwfDGQhu08KSO1kjS%2BNH7DZ3Zx6QRe%2F4YqyP5NpT%2FnRqbIP2wZbP6plsJNSPXWU2gS3c3ueEBCLtraJllPExFnEkCUX9LbB0WOWm"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:56:32.616Z",
            hs_object_id: "7220641840",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:56:32.616Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723b96bdc274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cfbc18c6-47d5-4ddc-bc58-5f1cf04592c5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249596",
      "X-Trace",
      "2BEA75481982419036B13ABE81AAB0C91B7F901B9C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p9uMAZO9KGtykg6sSZW6Mw9amDdi%2BB9FYbweX7UyZqw0vI0RrlcvkeJrJnflYG8PL0gamSP%2FuH8TZS%2BtEkbVaIVPXBDfcvbcMxAxEjXicaUwmBwOxm4apkm5YkNzTqVV"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7220641840",
        properties: {
          domain: "grouparoo.demo.com",
          name: "John",
          website: "",
          facebookfans: "",
        },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:04.904Z",
            hs_object_id: "7220641840",
            name: "John",
            website: "",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:04.904Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:57:04.895Z",
      completedAt: "2021-11-03T16:57:04.950Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723bcdb7a275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c3e9a6e6-be3f-4b8a-9f30-63870c3342e5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249595",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "99",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2BCFF3B00AF753FEC2206FC86F4777BF0977B36233000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WRailYycL2b7EUEQvs5rsAvTCzvJoUi%2FdxA%2BBWHJwmNE943000dNmDxkTiHIW0EEhuDVldQRejFx1Wtiesrk362K%2FPGTv5Y08SAd4W9IvNbNmLEWmTjJc3JFUuaCghaq"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:04.904Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:04.904Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723be989dcf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bd32b440-00c9-4b21-a677-15bd6456aa2e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249594",
      "X-Trace",
      "2BADE448555CE9107B69D44F175C0EFB105487C2F9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wiPStHUMlYxwm%2F%2BfxzXoUSfbHEWQsiGSf2lXriWpfmQqhJMadB4G3YTlx8r62RMmLexEr4b7dnfWTy4Mh9Hst1EcBqHc7gheXr1Ux5JXjhA4qcMRRWGs3WrEMOlhegCA"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:04.904Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:04.904Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723c01a392745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "900494ab-77c2-41d6-9dfe-f73910f6699c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249593",
      "X-Trace",
      "2B9B9380665808F9845BD50431609846077D0F4093000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VylXsGWUgrvB3w1wIHsUR9uu4xIhC0CPvfpZxdKOyV%2BK5%2F%2BdFCJYYs5T9JWhh1i0RTuDyG3QhO907iQqlfXV7nadAZ8Lsmm9Z3kChZCYUKbLKUHvLyBT3CPcgBcsbg%2Bm"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:57:04.904Z",
            hs_object_id: "7220641840",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:04.904Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723c19d252745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c466afc9-5ff2-41eb-b111-5d10f1594efd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249592",
      "X-Trace",
      "2BDAD94E8ADAB2BF1446C5AAF52C883674F9C3C2DB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VXwKw06DOra8iCrWBy4IVq8%2FgjCKQa9QuhU%2F669RYW5lNl6Uy2DkJ6tQfCJ0L%2B99Rm0Q0ye9qFaaSN1loLGqOtfZf0%2Bl%2FzD9XZsvkto9qrh2r%2Fx1FZJ5YaLT5yo%2FuRBD"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:56:40.464Z",
            hs_object_id: "7220616540",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:56:40.464Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723c31fae2743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d2b6c22a-fe6b-41f3-b78d-6c8ae968ac6b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249591",
      "X-Trace",
      "2B420736FC6EFB37DC9C2C45AB933B3C91415EFDD2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B%2BMzJrPFFlHoUV3ONsM8Cva9DAPql3mvrzY9r8VoUc1z24GzuVrlFK5XmfTRU6mzIdjK0D6Wgpc9p1Ji3WKoYAn6zfg9%2BefAVU5GP10Vamv%2B7d65J5YEVOYDFvRYKnLZ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7220641840",
        properties: {
          domain: "notgrouparoo.demo.com",
          name: "John",
          website: "www.test.com",
        },
      },
      {
        id: "7220616540",
        properties: { domain: "grouparoo2.demo.com", name: "Evan" },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220616540",
            name: "Evan",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220641840",
            name: "John",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:57:06.422Z",
      completedAt: "2021-11-03T16:57:06.477Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723c66b92e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "354ee50d-6922-460d-b0ed-21576deec07c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249590",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "98",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2B1AA38EDFBD4E92AABAC92384D666977E4D759FE7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ToT28mFgjWce%2Fczfo6jL8rU16NB4Z0X1h5v3CMY2Apbg3J8m7wrFxW4tXbbqV4%2Flk%2Ba3H4TJbG5IoPHV1pAyIlT8CbFIwypABRSnDBOZTzYSGelpxydtn%2Fi7%2Fe23NH7d"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:07 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723c828a0cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4fcae8fe-bbfe-4124-b71c-1daf6ca2b658",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249589",
      "X-Trace",
      "2B2465D7BD5D37BD9185C3F94983421B42D01D61C7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1dDoavs6QyrHsRkfLPg%2BI4BuhdzYldrEMXTpfCHq864MjE2G0Ca%2F5MwcNEUaw1xETtvvgAM414lpFnWL4AcZfCSb3uZt4zI1eqlN%2FIvLN0CifSD4YRsD8PnxrGR%2F%2BGQU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:57:07 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8723cb999c2745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "27ee13b3-3646-4103-b4da-5c180b4bc053",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249588",
    "X-Trace",
    "2B86D7A2435F8F3CC8FCF86EABA01F336BAE6C276D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ngkIAk9wAQjzGgbbEC5Wme0bKMTq3IvPsuUj9Wg310m2wXLGCAvm1rHhy6Ada8SakmKPILdXNTiAh9L7cK74qEiTyQEw9ZWygHn2U01iW6IajfQSxnNfl7O4nmpRSbZf"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220616540",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:07 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8723cd1d002745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e28a7805-a6ab-4d11-840c-f01a6b0478af",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249587",
      "X-Trace",
      "2BAA16A36269B77CBA8005CEABA4D778D7BF4F7996000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cvmQMJrFC7DbD5hXoMwfGVIWMH4yL2HBy16JbVBbZxOCOPN16zDV9R5nsNx917TyTSbSaPbXuhUE1jSmn9YltxZE9QmBgtB1CwC5Q1U82hSfGOo0ddwdyFPA10QvL1j9"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:57:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87248a5e63274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6e869bef-6e06-4720-83b1-f3a5a5dcd9f2",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249586",
    "X-Trace",
    "2B9ACB34D3BBD5B422A8B5F4F5C0F1FCDAD599DB96000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FsVgBggsqovoHpe6LwNM2XBY4ynwQKCbai8tsy8fKYViSX3l%2BbvlyIM1btXruyQJ1nLpRMsZx5b%2B6E7cg7klF5ydVAh9M1BzUpxoCn1j8vzVVp7enJA9sMfOUT4FsX7C"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87248bdd21e078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3d06eee4-ecc4-4758-9359-1bf8f857acb3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249585",
      "X-Trace",
      "2B1209095D4BE4707EEEBCE067DD02A3CF3ABC0AFB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DMPWEceWyT%2FyLxAZw%2Fnv5e4eL25egJLFYXaQ5XvIb2G9yxt8qBJPOy6H1RPHdDUpFkBEBYZ14cibSgCsI5S%2BYKP1pLj5Es1yzvLqkyP9hq%2BV7mf%2BQRLVtwRRHV68F8AV"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220616540",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87248d8a2dcf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dd824edb-90dc-4dc4-987c-004e5ab7ac74",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249584",
      "X-Trace",
      "2B6ACC362270F0790844F34835BC28DD474720D8D6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dD8efHa5VJoaZmMYiU79r4G%2FFgn6E1H19E0zcHy9FBqxXohIlsdd7TJvviBA56lsYa8DQulzHatqpThfkj0LFay2hXOZdDcW06z9kPTU9mSA4Q8APbrDN9wTHAjOrmmE"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220616540",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87248f5cdc273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "819f254a-b505-41d2-8b96-40f04ea24cca",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249583",
      "X-Trace",
      "2B65B33EFC238ED141E5187B88243D6D43BCFECBD6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q%2BZzHFrLnXe6vgyfJ5Qjh6TnvrBKScubfljms%2FAXNHIfpsZsipS2PnNV8wcVAtIBZc1kZr%2FVSSZkxpBDVzb0Z1qJX3JgkoRPC%2FinLRGTEDbsuDmDbeIj%2Bu7DbaMWA16u"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220641840",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8724914f60cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "04ef047f-306e-43f7-9e50-12bad65bd613",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249582",
      "X-Trace",
      "2B8F5AB2077066DB1A5315DDAC7B03FC9C1589BC54000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BJPkyoejLOk9Y8GoT0qm4TPnP%2FCf64tLa4ecVR%2BXs43hJhnbvnWOCxDo4FHe45w68%2FPocfc4cK0sEBiXQfA2LsvqmUwGAXO2nStE9DxOH3DHTSW75q%2FmPD%2FKON%2Fn1eN6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8724932f46275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0b8aada5-615f-4c2c-9144-7aa368441363",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249581",
      "X-Trace",
      "2B004F7413F7F4FE67EF4D4E48283ABF1383892F6F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UwK7I3pbLKMALDwoFngtS0ooU3SY9jLIXNzbWMgAN2G%2BwUm7eCnPslSHbzLAzGsKDRju3frqXy9mxc3rvWKTAO5SoE2qt3%2BkeUYNNET%2BPW3EInciyCJK2ViPDcTo6Pe4"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220641840",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8724958dc2e078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e249980d-328b-4a85-ae3e-7f925ce926fd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249580",
      "X-Trace",
      "2BA166EEB2E0AA8D6BBC40408998559437DF9549AE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5u%2BjjZUrXgwprO0VzcsUWwhUocUtejvRIaQOoIC2UIjwDH8s87noNoxW4a%2FqCZfA7jVCjVe730Tri0u8vfmLPBQV5ty0sxwK2Lnepp3pgUiRncZBpbgzd4EN1rMFK9de"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220616540",
          properties: {
            createdate: "2021-11-03T16:56:32.926Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:57:06.430Z",
            hs_object_id: "7220616540",
          },
          createdAt: "2021-11-03T16:56:32.926Z",
          updatedAt: "2021-11-03T16:57:06.430Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872496ee732743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e7877bf6-49dc-43c9-8ae2-a48f5aafd106",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249579",
      "X-Trace",
      "2BBE5EBE95B4F351D72BEB6A3E6D6B2FA26A5587E8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vfREql3WZVUkrEAMHQFtfZZdhcHXUqmRSU35dfElHq5NSB6S3Q7V5K6PZEtNtUOTI3QfTQretOFdh5Jyfgfb57hWU35izXvDkcbOvieUaIHzHDagrRViD27Bjfdp2wRU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [{ id: "7220616540" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Wed, 03 Nov 2021 16:57:40 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8724986ceae074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f08f9731-fbab-44fe-8ece-422934d9c28f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249578",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "99",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2BA1DECF190A96215D35C1FC3E7198B78263AAF3CD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kVEMZ1%2BJp6xJV%2FvkoXpgfDIm%2FKXbwdfeHOMrMRIgSUJLon70RpoK4rtmjQUHNZDevoaZ2zHsP7F039heKoxkzkhyiKBn6Mhqw8j4yyUFSUFiDmGIb2d2cL63J1m6OkOY"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7220641840",
        properties: {
          domain: "grouparoo.demo.com",
          name: "John",
          website: "www.test.com",
          twitterhandle: "back",
        },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:57:40.583Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:40.583Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:57:40.578Z",
      completedAt: "2021-11-03T16:57:40.629Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87249a58d8274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9498dc32-055a-4cd7-b3c8-b2b88ea566a4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249577",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "98",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2BA4DE3357FD5C7B32F1DBA9C5F2BD86E23FFA7A37000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RE%2FhCM5J4qPjHDamwVYn1a88CDFWnzRp8TSbO5ZfbVZwc4OlMgmjHGWmYwKGg8UJi4chJNeMaEw%2FLRIVA%2F93o4wYYxV0573Lf%2F%2FaQsVfPj8CuOK3%2BAM7ZZW8qEhnqsgn"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:40.583Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:40.583Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:57:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87249daaa52745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "880b0040-41b4-4cfd-aca1-1821a775c4da",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249576",
      "X-Trace",
      "2B34FCC59944B2516D73261C5AB98E94C6869916FE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Yek91jKX%2BSV1XtUdWx5G1glSa3WusPQQ5fAwsIhWkaxqEJkKPVXM1lAHnT2K5AAWahm0N8wz6euiNJBxHXS1GeDvkkbS3wJgi1tPZo2dlmVspwo1S5c2YmzhglGx5jLq"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:57:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87249f884de074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b0d319f2-c871-45c7-a78a-dd8e15558947",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249575",
    "X-Trace",
    "2B64F92AC7875EBF6DDF1A859D62455EE0E57CA108000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QOw2BMEg%2BcqeTXDSBwkcDwXrNCrjxb7gMkmERs7Klazipj2%2Bg6HeCLi16dPobI2ArjtteUGk0%2FbqLoAl6NBHyOaP1vlZWo0VWSoAyaGKrg7U%2F259APLdv7%2BhX1uQyYxF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:57:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8724a13d3dcf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fa1577a0-e189-471e-a32e-536254827f17",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249574",
    "X-Trace",
    "2B56AC8A092FDEA675DF855F25CA049BDD2094A6BB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5nCLE7FE6mmCZGYGVMvZBZzUXDO0fqRLv%2BbpIEB8IEf8KFu2kYi0GG6NgrpYjEZdx8sIlaCnus%2BOdh3Zz%2Fn677NGN6N9%2BB%2BqLO65RiVxavEz6ehCVVHEOmLOR38DePgw"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:58:12 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872560faca2737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "952c8374-f084-4611-a8f7-f764e6ba1ebf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249573",
    "X-Trace",
    "2B5C9E6D47CC15718251DD908DE4A65D3B53F9C7F9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oWSedGil4m5si5oWIJpr6RtUGDSD11S%2FLcMYlY3BaYUz9kC9e5tF5WRZQPscCDoUuwYJjmvfZAOnTRzNyuVwIdv8p4pR1mMiVxS0kNQbKioM6cLSEZvsztAONdnCLcVD"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:40.583Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:40.583Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872562ed892745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "800a6b7f-56a4-49ab-8cd2-f629e43abf5d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249572",
      "X-Trace",
      "2BDED1B016D7AA34A7DC1902603463DFD4B18C9F48000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BJq5eeVWm8D%2B7iZw1MwrDS7%2B9S%2BGwO883rpf4Z5umLgRb5R4SCET0X7ET2jWL50XrJh6mwFCu0h8RE3xB56VviJBPouUGPjk1REPleifmnsiC%2BNCUxX8SNmsqw0QP9q%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:58:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8725664b49274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b53e947c-71e1-4412-9758-923f325da7d0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249571",
    "X-Trace",
    "2BC37DFC0DE1678CD1AD63C713AA0F6B46A62D5FF3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QFhUpPxQ8kjEL4a3c0X0uAx%2FZmqFN%2BHUNJ68UMByNhg7E6pAulcf2Iuvs%2FMut1C2KRZJoZIOFPqCfFpDQgjt8djxvkMXZn68S9aMLk2M%2BkeNjnoWvmlUFeOzRGUS7V1g"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:58:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872567babb2737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f2b569a4-fb74-476d-99e7-d9ebf5116280",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249570",
    "X-Trace",
    "2BF490BE81EC1BCC515FAA88CDF1947AE1FB9D7E77000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JFHBt7tgY4VvAelMe2g59qJ9UYFeAXQlVB9SijpS1Se2Q3gm4PjjlhOeRbU3TrAv3n%2FMyKLLngPqCNAgYCqEJ%2F6sKG%2FM%2Bn5Dw%2FaQ0gMg8ZYLVrkPDBzCOqn67%2Fphigzc"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:57:40.583Z",
            hs_object_id: "7220641840",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:40.583Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872569382fe07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4922d8dd-57f6-4db7-bdb6-453b4ce3f7ab",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249569",
      "X-Trace",
      "2B88DE9E557FF7B71CA5BE55342ACE4D1A6A80010D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gqRIdEZtP7rts9rwI5mYUi5Rl0okN2KbAE2o9OCSXoAtOBMA%2FjEj4AKimlKWXTo%2BlVHfTpqn%2FjfjBdP4KApMBXAZbsh1JfPLab%2FTAIJsr40vEBq%2FOIjhiACBcKzWpuky"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:58:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87256afa36e092-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ed05a7d3-8b11-4329-a092-b30f09e3d299",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249568",
    "X-Trace",
    "2BA020154F032BD7E38259C30331052C342A15290A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Uutv86n4okUJMDNedMWUDVTkURDdqeuJDMDNmIdMHGZaTgbyw%2B55CjjvbyuG2xtrcMdxEligHtLEn1CBAPe5eDgp1GqyVVVkUBm97acL4rdw8%2Bsutx3U6xcwgHtLh7E7"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:58:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87256c6b3d2743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0c651a65-fcf3-46ca-8da6-17271d814cf8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249567",
    "X-Trace",
    "2B3E7A1EDBC5155F5265F234F44EEEDC9B2B5B1033000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p3FOTHwCDW%2BR1QQQFD9W6jEKdnHxfmvLOFe%2BViwqb6eLGzyqgCcuZjP4T0jrKK8VAAZ4IDZ7e1mdUhXEanNIFD6W3z6LV6nDmrFObxzNzWInxcZTZdBb%2FIWqTNVZBLkH"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/create", {
    inputs: [
      {
        properties: {
          domain: "grouparoo2.demo.com",
          name: "Evan",
          twitterhandle: "text is also here",
          facebookfans: "5",
        },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2021-11-03T16:58:14.248Z",
            hs_object_id: "7220504964",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:14.248Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:58:14.240Z",
      completedAt: "2021-11-03T16:58:14.330Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87256e5984cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fd1781ad-fde3-4eab-b053-04b36421a822",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249566",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "99",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2B771997C5433C45BBCAEB2B0CE025213EC92BC097000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AAtP1hV9%2FWgd46bwhRThe6Zo%2Fw7FkwpWIXus3MxyYk6tSR6oWdsfda7ZQU0pAeyOLEDNkDL1tlGcmUZyD%2FfzWr5shd9bSA0YHgpBoPoX2YBsPD4q4RjQqWgBic9qtKFd"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:58:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872570498f2745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4d3e0985-9362-48e7-be41-b3bba8ce9602",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249565",
    "X-Trace",
    "2BA3BB82C001FBEF18A0710F062DE8FCBB7EC74CEF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=obCGvD9XTonRxJDrdwcBUyGbylpHTT85bKNhHgtWc1BJ30np2DbcWqGK2Rc3vUgNaO7a95Fef1o0eURlf4J5ZT0bzNrph4h%2BN%2BEK7XtpFwgoklrAFc4jkn6MZ8dI0lOL"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2021-11-03T16:58:15.301Z",
            hs_object_id: "7220504964",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:15.301Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87262d586d274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "42122edd-78de-42cc-8bd7-e48cb5a456eb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249564",
      "X-Trace",
      "2B0424D6E40D7B810430E1DAE33A138E76F0D8A77E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CzL2wfTIV363gTDz5OdXErWceWVvQt7Ga%2BCnuF6KJWY4i16tz0Ywq9cg6l7T3%2B1hucmjng1hVIpALam7C9hcgfBbPPqf14HxsZomOUwoOfDBrHBHxuRVcYYMi8z7Q68B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2021-11-03T16:58:15.301Z",
            hs_object_id: "7220504964",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:15.301Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87262f081a2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "aebc723a-0627-468c-889a-fe7e7364f122",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249563",
      "X-Trace",
      "2B2585D7ECF5DE0AAEB95CE74F0EFE07C2BEAC320D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Iqa8Rw%2FydnhQkHxFsOZ52EAVt5raiIjL8GsxnIWrFghT5pPDViFgv%2FCkU9gy%2BUPC6pXwJgYYAAmTKeQ0dOwOqAiNJ1N3vBKSm3kKPz%2B8jjShKNT1Avmu5CRL3quCs5IT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:58:15.301Z",
            hs_object_id: "7220504964",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:15.301Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8726324dc5cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7a71ce3d-67a4-49ce-a8c0-0fdd51626066",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249562",
      "X-Trace",
      "2B2ECC53774A59A71E7AFCFEBAC3FD867B93001DC3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pU9q%2BQf06nIUFsgUQCL9NOTC83SuXc62A7VJN8vYB60M%2BTxzPWJoUjQtO%2FhZprOMdxSndO6Y9vHv0EhHjVgwHonzIHqWA%2FmPF%2BY6asDFyS%2FOvWcpJdliHqoKNXuajGJf"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7220504964",
        properties: {
          domain: "grouparoo2.demo.com",
          name: "Maria",
          twitterhandle: "",
          facebookfans: "",
        },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:45.868Z",
            hs_object_id: "7220504964",
            name: "Maria",
            twitterhandle: "",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:45.868Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:58:45.862Z",
      completedAt: "2021-11-03T16:58:45.911Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872633aa15e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e36fc468-4667-48e9-932b-b584867895ce",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249561",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "99",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2B32B37547F1A2F7E9CB715BAA90EEC47F379CAF60000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=opfjwHU6wdgZAUNaANUlJUXiKKBnoPMDH6JcBdudN9uUFBfM2WzLkcfnVtvov%2Bkz2KdPYFIxqf88xNnaWX6%2F0TzF%2Fbm2O0winOJ6M3jQioQB3c7jTbml2AtKdwJL9uGM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:45.868Z",
            hs_object_id: "7220504964",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:45.868Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872635ae1d275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e93c0482-270a-484a-b48c-5d51008797ec",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249560",
      "X-Trace",
      "2B4C0621B1F85C26CA0F5CED1591F996DD678B7510000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5mdlnR3m8jbmuDvcOqECYjOOUiIdxLm9r%2FgkmNN8TxqZmnvl1AY8VCuIg6htrHBhjtyEMQN0cSPG2MXoGZheH8bQBN1WSOp%2Bu%2Bxyag9mndtJltUUFvUdnJdHLibOoSil"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:45.868Z",
            hs_object_id: "7220504964",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:45.868Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872638da652745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "53426ca5-9286-4219-b972-20d00a72b36c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249559",
      "X-Trace",
      "2B703ED8992BF0E5C6E95120D5C3C4824C4F847AE4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jWTIwpBVsA5w35YurX2KRgVw5s%2BEITUdNvJ4Jf%2BaNYk1lCUmySKIbPBSY9ottIleI9GWbCJGUlGL8n1rm23lDcvv7D3qEJODVYIoPOR5KeaR5eBTtnX18SXWM1t76hHJ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:45.868Z",
            hs_object_id: "7220504964",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:45.868Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87263b1f1de078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ba4b41aa-7cd0-424f-9407-5deb1b4a189c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249558",
      "X-Trace",
      "2B342A25CC8F31ABC5B194FBAA27E92C89B674AB2B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w6Gq%2Frfgtlc47070vk5xxngJYM8vYMkS07eMe2AB5OIngu3bKTMEy7HV7jGvuZs%2FLksAfrjtDN1vNAx0MoC%2FKXu0UtnjFbT2raziXSBktyvNAxRMvPFJV1OEoqlREJcG"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:58:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87263caba8e08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c1a30b69-79e8-4ebb-8577-407f6e89c7d4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249557",
    "X-Trace",
    "2B620E93ABA9DE112543ECACCE81F90B2176FAB86F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JcHh5whRQVeyfce1%2BP5uC4jKWst5ayUApcYVPSVEZUxT3CnFJ9lZl7WH1Lo7hHD%2B9eZ142Awr2aZZBcz4PGaTC5Gcv48MKYAlgaJkE%2FeaBPSgiK0lvY0UbHdv6dIlWPs"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:57:40.583Z",
            hs_object_id: "7220641840",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:57:40.583Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87263dffc7275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5ead2787-0d93-409b-a58d-cd1500b3712c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249556",
      "X-Trace",
      "2B16921604896D774D5802CC9D9128FF4446BDB47A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KIBoebyUxOjk5FoanDDkL3beXfnw4Y82pXvHjF2XzOtT%2BbXIcyL4%2B0WXCHB2npDl6cnMSYDh5gaN6EkG36bsO5YxDshaPb%2B%2BYEerz87MhsxRjj30rLOKq%2BrFmLL0OR55"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7220641840",
        properties: {
          domain: "grouparoo.demo.com",
          name: "Sam",
          website: "www.test.com",
        },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:58:47.712Z",
            hs_object_id: "7220641840",
            name: "Sam",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:58:47.712Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:58:47.705Z",
      completedAt: "2021-11-03T16:58:47.754Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87263f58ba275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c23a9db2-b68b-4eb4-8cc9-c864d9ead8cc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249555",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "98",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2B142870CC7F7026D7A1D13E2CED7B8525320963FF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=snxCAtnSmj%2BS%2FSofYqG9gS1TfBW98UfzbNc3g5mhcIUTyEUhskx6WooNTzikytLN72zQTCyTCKLnl2tW2XVBK04MPtdD524Kl0hP6Wfv5pqwiVLPfKlvf8pZsrNNMfG%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/create", {
    inputs: [
      {
        properties: {
          domain: "grouparoo3.demo.com",
          name: "Liz",
          twitterhandle: "some text",
        },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220606073",
          properties: {
            createdate: "2021-11-03T16:58:47.989Z",
            domain: "grouparoo3.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:58:47.989Z",
            hs_object_id: "7220606073",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2021-11-03T16:58:47.989Z",
          updatedAt: "2021-11-03T16:58:47.989Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:58:47.971Z",
      completedAt: "2021-11-03T16:58:48.066Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8726412a202743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b2bd5f86-c28a-4cbe-92c0-aa9b0f9441ec",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249554",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "97",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2B6C97461E2B5515D47625D031260A94E5F13A7F50000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vJdQJH2Q0p2ZuJkQ9vykxbFBYbElnyo5L4v1%2B6bCVUsg%2BpsAVL8Oh1vh%2B0he7OGFmcQbzIUGpgmZlSG8BqVhPaz4QADb6oqlfIFRzTySP83ElmloV3162M95XyC0bo%2FS"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:47.712Z",
            hs_object_id: "7220641840",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:58:47.712Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8726432e86e08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ac892291-2ff3-4f22-b247-5106621060f9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249553",
      "X-Trace",
      "2BBCF87183851E6466636E9B1BF7D06A229E5024B4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RrN2KQ1%2FInBPW0zvDhiGZXb2JI7LGds0CLHZmSb8Z8ICdJv%2BnlVkzHnqc1i6ZZQQNyDbsrFyXAWUCtXAI6Odhb5o%2FhInCaAnVvadQHkMPUvASjPEEDMEyeRrRqs7KU%2FT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:45.868Z",
            hs_object_id: "7220504964",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:58:45.868Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:58:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872644ba78274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0a028d35-8e80-4c85-900b-b59a59fab4a2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249552",
      "X-Trace",
      "2B4CFE65E5F6AFCE3D84197F7A144D32A19F5E384E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IG8XypESdBzBydaB5ooHgtUTJqfgSnr2Iz%2B%2FOmHKLbmqHUK8N%2F%2BcHvPrUGa%2F1izg4HW9aoQ55cdY31hr14RkyfiCG05M53auPhE%2BfcRYEUqBe%2BpBEwQxzsJ0iKdNsvoH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:58:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872648ab24cf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ef4962bf-1c95-4b3d-9603-d035936a03cd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249551",
    "X-Trace",
    "2B4C007413F6C54CFCD5E13ADAFB92EBA73446AD9F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eYenpZLAr8O0w16G%2F98nAyhT6CU4nx%2FPyjVBXpw4DBAJskbMKiy4%2FCurt1SOTshA2n5Z%2FJ25pCiOE7bn%2Bg9pGeD031ef44o%2Bxy9INpZsMtdS6vg9JNniF%2BlLvBJg6ic8"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:47.712Z",
            hs_object_id: "7220641840",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:58:47.712Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872705a979cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a85941b2-41fb-430f-8d87-e50b49c570cb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249550",
      "X-Trace",
      "2BF83A3B6D156E9183334306A6B9C320CEB9D16502000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ME4DiwwGBbLEP%2BSNCcWF4lhHCLg3kDShVOdmf1zDvdMoj2hY71TMrAA2omgNRZhd81klB4Uv99p0ccGCN5ciRKIe5v9%2B5ylsfP8tb6IkL%2B%2FQ2hUFfU5LDWiQDZZYQRv1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:59:19.187Z",
            hs_object_id: "7220504964",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:59:19.187Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87270778502743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "106eaaa3-1ad8-4d94-8bec-a5e8c1401b1b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249549",
      "X-Trace",
      "2B5367327FA7B1715815AF855EF404E1357F498C26000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SLUfyHDqavcN7yHMM16%2FDp1QqMSZ7uo2b1PbBt3KQ9MPUxXO9J389KjuaXRQXgcibTBAvsfssQL%2Fv6P4KSS2PES61bfF5lDWR58sRJxSF5uKHGY4tKJHAuncPT4lixSR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220606073",
          properties: {
            createdate: "2021-11-03T16:58:47.989Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:58:53.371Z",
            hs_object_id: "7220606073",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2021-11-03T16:58:47.989Z",
          updatedAt: "2021-11-03T16:58:53.371Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8727092ad3cf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b91e964a-69a0-4997-b88f-0919735a34f4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249548",
      "X-Trace",
      "2BFC3D4553FE9D304E2CC3D48F3589B7C5B38A3E7F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kTF59WXqEw1t%2BwhDcKK359Z%2FFOBwQnJlH1uS%2B0axBB0XGnJvGnSr6ACtR%2FRRCb8cehVP0fguwDGtSe9qBC%2F5HK7Awj2nVgOO3iN8exdW5dPuMn6BjBH%2F50uIdBRR5vF0"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:47.712Z",
            hs_object_id: "7220641840",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:58:47.712Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87270ab9ac275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bfffe176-9e1b-4cad-8e1a-966879dc3d36",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249547",
      "X-Trace",
      "2B0DE6CD090B7D20D22326104EE1D8B403C84B59D0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SfneCeXINR0RjAftklmH5KxuIPhWr8f4ABHpXRRCLIVncg1BGDLOHn2lD%2Fh2qWgRG8ItIBOpHFbNn2x0aMWvXRiGHHG5GZLD6ekNmHYKL2Dg3eLAP8swQYloXfDbGcJP"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:59:19.187Z",
            hs_object_id: "7220504964",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:59:19.187Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87270dfdfe2745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cd94dff3-d895-429c-9baf-41df840d8bc4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249546",
      "X-Trace",
      "2BDBC886E9D492D5A8269454B2647C0654173DE5F1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=glvLxD2WcQapTXL1LAnPdELWDt63IDQ4PHysbBsUZAe9Em0W0kCm22IR6GhO%2Bcf77VeglUxHU163jgPp4xOib3%2Bq6o5qt2oUGPlcoxi4eCNvTA%2Fw9X5lWLw%2FIr3OaJx9"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7220606073",
          properties: {
            createdate: "2021-11-03T16:58:47.989Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:58:53.371Z",
            hs_object_id: "7220606073",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2021-11-03T16:58:47.989Z",
          updatedAt: "2021-11-03T16:58:53.371Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87270fff77cf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9abd3144-22e1-4edc-a497-a536a33387d1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249545",
      "X-Trace",
      "2B3299796F4084DF47292BA1B11689BB0FD6B5F31D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=erGN5AIvMdrVhfvpRPUjRv5EyWEF%2BavtvzZeMjII%2FQ8UmKMr8tP1L%2F1ksiZBYUZsUa06PJ0SvTVZ0gSQkW9ZOR%2FQX7Sar6dYJbvL3y%2F6qNMfUCxHoGLquhAUvNU6xiN8"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user0.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user1.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user2.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user3.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user4.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872711cee32746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e4e8a35c-d1c0-4b61-a1d2-3da15f993e20",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249544",
    "X-Trace",
    "2BA80640D16C78216CEE77717B0061B6A90C258DB8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZLbIkAi31Fy1jtr70xiIqrPDRCeowJACUc6Z3YF0QLqM5u3bAop%2FWTWNCZgRgdhwfP5YDbew77quXBwcGQCzYshB9CpobyTf0%2F8AoCdFenia%2B1qYhZY3AExeCP64WTiL"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user5.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user6.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user7.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user8.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user9.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87271529a8274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fa9312c8-5eda-4f24-ac8e-7c4dcd3c899d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249543",
    "X-Trace",
    "2B19FFE67562F5D86234E547DC9CC7206C0B04B14E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y8JLanQQBO76Hj%2F4PDXV7PYKBfUVebi20Jl4EiloZHj3yla0DwKpqyMYWTMrg%2BC7ZpBM1Gm2FlmQnX%2F8pwkkZAyUdGSBqAIcdbC6aiStUb57Cn84T7un4DqpfFGtjRpE"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user10.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user11.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user12.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user13.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user14.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872716b91d275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4ade94f4-b809-4bad-9f9e-f0acb494be9a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249542",
    "X-Trace",
    "2B4DC38D7F6BA055EC82CE9B386E9EF9300E4BA19D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S%2BKM0XFyO1DURNS3SUWAr1whPC%2BZO0wnXJviuKR3ocG16RbNclH%2B25FbuPLn8IfuD0yi%2FBkNnWkMANHGupeOpgQpn3PayFUs86k7zo82r1%2BNM440qB7lX9apgHGj547a"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user15.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user16.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user17.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user18.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user19.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8727189d952746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7d727689-2b41-454f-bb4d-39cc596b5da8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249541",
    "X-Trace",
    "2BB8E2499E8876780A22F9A82FAA6D9D51271888BB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WBuxCO07qQy6YZWv3DLGLD0D1VkI5DVD%2BPNknRnpzW3aqE2CYOOeiKxpREm9wGOYXjhSBa3xxfXTtZkkrkbjJ01xOyEkQyQmzCajJ1n2MKZmMlAEEgzJBkaydgkSONlj"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user20.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user21.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user22.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user23.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user24.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87271a9c99274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9bf18536-17fe-4022-97eb-215b2c1f088c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249540",
    "X-Trace",
    "2BE120F16ADB9ACC314F7E3134CD4190EEFF202A55000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N6wxBnwZai3wuZpT%2Bs8hibEAjbrPu8BQrqXQRv7JWi%2BVbhTdBApM6SuIi05lXGIpinZ91vjNRw9HMokkXl1nBhl4%2FE27oNF3a04awZt7l%2Bt1Y7tCoYXqunbEv1JbP9Bs"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user25.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user26.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user27.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user28.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user29.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:23 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87271c39f4e074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "daf3b795-bb36-4119-bdc3-48e4cef5eb3f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249539",
    "X-Trace",
    "2B28E9715BC5694B217AAAD57441191DA35E0EADE7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3zhNoDeruEo%2FZtFvP%2BHapQPbfZ5WZEULlhddoPgLZFFZSsGWViwnaf4Zhhg%2FOCmt8nbAIdb9Wzlrxoh4gwdSnMFE7H5QH7LzA8pv0da3LjEZub4%2Bhx%2FvESyMqrejZJuX"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user30.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user31.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user32.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user33.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user34.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:23 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87271ddaace078-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a046eb47-1693-474f-b2f8-d99c06388862",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249538",
    "X-Trace",
    "2B397E20E589C66253EDB566E66838FF855D4414E3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XM5R4ul6LVedTkpwvuruXg8cvMCPmxLf%2BK1LIudLwi9PRaKyZKYus4bgdqjOYI%2FEuvbeFQbfVI7URwd9KRBFTywvVRVoKlUmb61UuyRbYEC3%2Bcec45YGjoM10S%2FatLnL"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user35.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user36.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user37.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user38.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user39.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:23 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87271f7f012755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d0cb2baf-4a9d-41a6-9379-99ee78f88ae5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249537",
    "X-Trace",
    "2BAE722588FC0C1E70BB10EB2209D2876704D8A28F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Pf7eOf14RkuMzqgcXOJNLxCL7GqZVS6UpFgDwsAO59nJ7oFd4XL4njmOuB7N1ejdijQKWYmUhlht0dXWp6qLMCPpJ70TOjp08aqvTlBEI2myvCCdPEMGc5twcoxfAoIV"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user40.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user41.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user42.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user43.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user44.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:24 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8727214f902745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2aa7e9d4-9a62-4e7e-91af-87e038774421",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249536",
    "X-Trace",
    "2B3A809F2792993999A80C8E60F4C20A1C989BF9DD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NuvyRA5i11pyNrvZ2OtUcrEt3qiz8H8udpyXd2Nd0usNja9Pn%2BMylpszZizG1W5wxutgzBpzAohWhAy88cm2UxDO3%2F1URICM0oNWIlNr4YUs3eddaklbWoPB3MjXVDWB"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user45.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user46.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user47.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user48.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user49.demo.com" },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:24 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872724cf0ee074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5f49db6a-ffcb-4106-ab98-8a73a1faad17",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249535",
    "X-Trace",
    "2B5B2BC9E5AC3172E1A049DE261B1C909E75F9B517000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QvBEYlLWyho0o4kEuDGafIngECYJ%2FxHMD6qAdzi%2BN6jPN36fhs%2FPxjczlZ0ZSdhS6GliBJ5pWf6kMmGAz3RGRN3nl82drtx0orkVVnI5%2B5Milb7AU5%2FdplUnSM2WchNE"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/create", {
    inputs: [
      {
        properties: {
          domain: "user0.demo.com",
          name: "Fist Name 0",
          website: "www.0.com",
        },
      },
      {
        properties: {
          domain: "user1.demo.com",
          name: "Fist Name 1",
          website: "www.1.com",
        },
      },
      {
        properties: {
          domain: "user2.demo.com",
          name: "Fist Name 2",
          website: "www.2.com",
        },
      },
      {
        properties: {
          domain: "user3.demo.com",
          name: "Fist Name 3",
          website: "www.3.com",
        },
      },
      {
        properties: {
          domain: "user4.demo.com",
          name: "Fist Name 4",
          website: "www.4.com",
        },
      },
      {
        properties: {
          domain: "user5.demo.com",
          name: "Fist Name 5",
          website: "www.5.com",
        },
      },
      {
        properties: {
          domain: "user6.demo.com",
          name: "Fist Name 6",
          website: "www.6.com",
        },
      },
      {
        properties: {
          domain: "user7.demo.com",
          name: "Fist Name 7",
          website: "www.7.com",
        },
      },
      {
        properties: {
          domain: "user8.demo.com",
          name: "Fist Name 8",
          website: "www.8.com",
        },
      },
      {
        properties: {
          domain: "user9.demo.com",
          name: "Fist Name 9",
          website: "www.9.com",
        },
      },
      {
        properties: {
          domain: "user10.demo.com",
          name: "Fist Name 10",
          website: "www.10.com",
        },
      },
      {
        properties: {
          domain: "user11.demo.com",
          name: "Fist Name 11",
          website: "www.11.com",
        },
      },
      {
        properties: {
          domain: "user12.demo.com",
          name: "Fist Name 12",
          website: "www.12.com",
        },
      },
      {
        properties: {
          domain: "user13.demo.com",
          name: "Fist Name 13",
          website: "www.13.com",
        },
      },
      {
        properties: {
          domain: "user14.demo.com",
          name: "Fist Name 14",
          website: "www.14.com",
        },
      },
      {
        properties: {
          domain: "user15.demo.com",
          name: "Fist Name 15",
          website: "www.15.com",
        },
      },
      {
        properties: {
          domain: "user16.demo.com",
          name: "Fist Name 16",
          website: "www.16.com",
        },
      },
      {
        properties: {
          domain: "user17.demo.com",
          name: "Fist Name 17",
          website: "www.17.com",
        },
      },
      {
        properties: {
          domain: "user18.demo.com",
          name: "Fist Name 18",
          website: "www.18.com",
        },
      },
      {
        properties: {
          domain: "user19.demo.com",
          name: "Fist Name 19",
          website: "www.19.com",
        },
      },
      {
        properties: {
          domain: "user20.demo.com",
          name: "Fist Name 20",
          website: "www.20.com",
        },
      },
      {
        properties: {
          domain: "user21.demo.com",
          name: "Fist Name 21",
          website: "www.21.com",
        },
      },
      {
        properties: {
          domain: "user22.demo.com",
          name: "Fist Name 22",
          website: "www.22.com",
        },
      },
      {
        properties: {
          domain: "user23.demo.com",
          name: "Fist Name 23",
          website: "www.23.com",
        },
      },
      {
        properties: {
          domain: "user24.demo.com",
          name: "Fist Name 24",
          website: "www.24.com",
        },
      },
      {
        properties: {
          domain: "user25.demo.com",
          name: "Fist Name 25",
          website: "www.25.com",
        },
      },
      {
        properties: {
          domain: "user26.demo.com",
          name: "Fist Name 26",
          website: "www.26.com",
        },
      },
      {
        properties: {
          domain: "user27.demo.com",
          name: "Fist Name 27",
          website: "www.27.com",
        },
      },
      {
        properties: {
          domain: "user28.demo.com",
          name: "Fist Name 28",
          website: "www.28.com",
        },
      },
      {
        properties: {
          domain: "user29.demo.com",
          name: "Fist Name 29",
          website: "www.29.com",
        },
      },
      {
        properties: {
          domain: "user30.demo.com",
          name: "Fist Name 30",
          website: "www.30.com",
        },
      },
      {
        properties: {
          domain: "user31.demo.com",
          name: "Fist Name 31",
          website: "www.31.com",
        },
      },
      {
        properties: {
          domain: "user32.demo.com",
          name: "Fist Name 32",
          website: "www.32.com",
        },
      },
      {
        properties: {
          domain: "user33.demo.com",
          name: "Fist Name 33",
          website: "www.33.com",
        },
      },
      {
        properties: {
          domain: "user34.demo.com",
          name: "Fist Name 34",
          website: "www.34.com",
        },
      },
      {
        properties: {
          domain: "user35.demo.com",
          name: "Fist Name 35",
          website: "www.35.com",
        },
      },
      {
        properties: {
          domain: "user36.demo.com",
          name: "Fist Name 36",
          website: "www.36.com",
        },
      },
      {
        properties: {
          domain: "user37.demo.com",
          name: "Fist Name 37",
          website: "www.37.com",
        },
      },
      {
        properties: {
          domain: "user38.demo.com",
          name: "Fist Name 38",
          website: "www.38.com",
        },
      },
      {
        properties: {
          domain: "user39.demo.com",
          name: "Fist Name 39",
          website: "www.39.com",
        },
      },
      {
        properties: {
          domain: "user40.demo.com",
          name: "Fist Name 40",
          website: "www.40.com",
        },
      },
      {
        properties: {
          domain: "user41.demo.com",
          name: "Fist Name 41",
          website: "www.41.com",
        },
      },
      {
        properties: {
          domain: "user42.demo.com",
          name: "Fist Name 42",
          website: "www.42.com",
        },
      },
      {
        properties: {
          domain: "user43.demo.com",
          name: "Fist Name 43",
          website: "www.43.com",
        },
      },
      {
        properties: {
          domain: "user44.demo.com",
          name: "Fist Name 44",
          website: "www.44.com",
        },
      },
      {
        properties: {
          domain: "user45.demo.com",
          name: "Fist Name 45",
          website: "www.45.com",
        },
      },
      {
        properties: {
          domain: "user46.demo.com",
          name: "Fist Name 46",
          website: "www.46.com",
        },
      },
      {
        properties: {
          domain: "user47.demo.com",
          name: "Fist Name 47",
          website: "www.47.com",
        },
      },
      {
        properties: {
          domain: "user48.demo.com",
          name: "Fist Name 48",
          website: "www.48.com",
        },
      },
      {
        properties: {
          domain: "user49.demo.com",
          name: "Fist Name 49",
          website: "www.49.com",
        },
      },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7220577119",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user23.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577119",
            name: "Fist Name 23",
            website: "www.23.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577088",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user48.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577088",
            name: "Fist Name 48",
            website: "www.48.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577090",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user21.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577090",
            name: "Fist Name 21",
            website: "www.21.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577102",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user41.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.637Z",
            hs_object_id: "7220577102",
            name: "Fist Name 41",
            website: "www.41.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:24.637Z",
          archived: false,
        },
        {
          id: "7220577105",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user16.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577105",
            name: "Fist Name 16",
            website: "www.16.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577103",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user49.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577103",
            name: "Fist Name 49",
            website: "www.49.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577092",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user44.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577092",
            name: "Fist Name 44",
            website: "www.44.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577106",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user3.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577106",
            name: "Fist Name 3",
            website: "www.3.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577086",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user17.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577086",
            name: "Fist Name 17",
            website: "www.17.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577077",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user46.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577077",
            name: "Fist Name 46",
            website: "www.46.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577095",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user20.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577095",
            name: "Fist Name 20",
            website: "www.20.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577121",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user39.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577121",
            name: "Fist Name 39",
            website: "www.39.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577085",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user36.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577085",
            name: "Fist Name 36",
            website: "www.36.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577091",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user29.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577091",
            name: "Fist Name 29",
            website: "www.29.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577089",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user8.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577089",
            name: "Fist Name 8",
            website: "www.8.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577087",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user33.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577087",
            name: "Fist Name 33",
            website: "www.33.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577107",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user24.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577107",
            name: "Fist Name 24",
            website: "www.24.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577082",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user45.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577082",
            name: "Fist Name 45",
            website: "www.45.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577108",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user5.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577108",
            name: "Fist Name 5",
            website: "www.5.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577120",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user27.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577120",
            name: "Fist Name 27",
            website: "www.27.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577115",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user10.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.637Z",
            hs_object_id: "7220577115",
            name: "Fist Name 10",
            website: "www.10.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:24.637Z",
          archived: false,
        },
        {
          id: "7220577098",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user4.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577098",
            name: "Fist Name 4",
            website: "www.4.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577118",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user15.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577118",
            name: "Fist Name 15",
            website: "www.15.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577113",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user42.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577113",
            name: "Fist Name 42",
            website: "www.42.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577094",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user18.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577094",
            name: "Fist Name 18",
            website: "www.18.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577112",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user2.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577112",
            name: "Fist Name 2",
            website: "www.2.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577110",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user26.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577110",
            name: "Fist Name 26",
            website: "www.26.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577093",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user32.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577093",
            name: "Fist Name 32",
            website: "www.32.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577080",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user40.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577080",
            name: "Fist Name 40",
            website: "www.40.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577111",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user0.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.637Z",
            hs_object_id: "7220577111",
            name: "Fist Name 0",
            website: "www.0.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:24.637Z",
          archived: false,
        },
        {
          id: "7220577078",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user1.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577078",
            name: "Fist Name 1",
            website: "www.1.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577074",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user22.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577074",
            name: "Fist Name 22",
            website: "www.22.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577114",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user35.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577114",
            name: "Fist Name 35",
            website: "www.35.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577099",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user13.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577099",
            name: "Fist Name 13",
            website: "www.13.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577084",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user38.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577084",
            name: "Fist Name 38",
            website: "www.38.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577079",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user7.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577079",
            name: "Fist Name 7",
            website: "www.7.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577097",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user12.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.637Z",
            hs_object_id: "7220577097",
            name: "Fist Name 12",
            website: "www.12.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:24.637Z",
          archived: false,
        },
        {
          id: "7220577117",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user19.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.637Z",
            hs_object_id: "7220577117",
            name: "Fist Name 19",
            website: "www.19.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:24.637Z",
          archived: false,
        },
        {
          id: "7220577083",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user31.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577083",
            name: "Fist Name 31",
            website: "www.31.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577123",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user30.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577123",
            name: "Fist Name 30",
            website: "www.30.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577101",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user34.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577101",
            name: "Fist Name 34",
            website: "www.34.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577122",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user11.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577122",
            name: "Fist Name 11",
            website: "www.11.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577104",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user14.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.637Z",
            hs_object_id: "7220577104",
            name: "Fist Name 14",
            website: "www.14.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:24.637Z",
          archived: false,
        },
        {
          id: "7220577096",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user9.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577096",
            name: "Fist Name 9",
            website: "www.9.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577109",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user43.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577109",
            name: "Fist Name 43",
            website: "www.43.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577076",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user37.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577076",
            name: "Fist Name 37",
            website: "www.37.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577075",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user28.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577075",
            name: "Fist Name 28",
            website: "www.28.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577081",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user47.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577081",
            name: "Fist Name 47",
            website: "www.47.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577116",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user6.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577116",
            name: "Fist Name 6",
            website: "www.6.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577100",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user25.demo.com",
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577100",
            name: "Fist Name 25",
            website: "www.25.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-03T16:59:24.636Z",
      completedAt: "2021-11-03T16:59:24.779Z",
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8727264b59e08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a1f5a8f0-26f3-48e9-986a-e91f980aa49a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249534",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "99",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
      "2BB4B958158B60CE1E0516065AA7469B1DD1CD3668000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AMpF%2BdMU%2BjA4gwjwPime5Mm76vc6GlIYnbtfJAbUZjzsZ7hnX%2F6MkmVl3%2FlqM6uoP29MYzMv%2F%2BpJbk7loGYBAEaB4OecUVVvXjwAoiDqyhj8wVxMLC5%2BmJT4FnPwCB8D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user0.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user1.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user2.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user3.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user4.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:25 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872728af30e08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "55405431-f611-4a0f-a885-8db54a7841ef",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249533",
    "X-Trace",
    "2BAA2C548FDB11502B5DF8A1F8376AD288A1D0BB50000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7DZtuSllZ1U77w0YKp70oqxQBc0K2EZelb9xsAnhMkZxnqy97v%2FTa78%2BynT5k89ztv05b9WmM%2Fi3oQ1TBgHfl5XlK9cuojRIu3xejPmUR%2Be%2FPjohlCOT%2B2c71AZNr1MP"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user5.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user6.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user7.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user8.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user9.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:25 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87272a59a02745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "274d309f-3927-49f1-ba1d-7983e77e45c3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249532",
    "X-Trace",
    "2B958A6EC3C79EF00FCB9586FEC82DAF0E90DC7B77000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0BNH5dYUPRJjwPDWymRJyBScNeuwgYAoab32Wz7iuhyH%2BNqqx2juqXjde%2FTgk%2FLMYFbxhiC2dGnxGQ6%2BMUvlRQJ4rjmjiEGZ82zNnqbLYlbWqFCMrimF6ewze%2FDi1osH"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user10.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user11.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user12.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user13.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user14.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:25 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87272bef772743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1564c71a-6bfb-4631-b5d1-14d5d00cfd5d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249531",
    "X-Trace",
    "2B1A20A42EEAD2B1CFE9D50EB5BFC13E95CF871E23000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=klWExOo%2B2DG4KW4Xa%2BjyqolN8qhA4eqVAEuUa6G5zx%2BAANxal3Yqh7ThgxUwR4lloigYL9VjJcFlI3FnWV%2BVmp1QbOAZXna8C%2FY8vU1JJSWHRZPEVM8o8ITdhej%2BdYdd"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user15.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user16.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user17.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user18.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user19.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:25 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87272d98cde084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f8b2437a-2d8e-4533-87d6-811d36bf7541",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249530",
    "X-Trace",
    "2B2022C0865D3EEC08EBED1A65DF3299C5DC2B017D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9ClYjDqkOBEmMSpRJDEb3GdsHtu8d3wG5EYpvIruv7E%2FSvp5o8dkYjlqaJyZjXog9AfajgMoFUV4cHrw3thiPP53xyFz14Ain2GF7u9YEwpi4n5ZJryCPBkH3OR%2B498b"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user20.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user21.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user22.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user23.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user24.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a87272f5f942743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "59c54306-e0d8-4c49-b883-4603b84556d5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249529",
    "X-Trace",
    "2B4FC61B728F70761CEF46FEFD6F80E866A957E755000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fuzhq86Lk1LyNn%2BIMMAMHZojGWi8NjQw7o2TlfWfHtbzGLB%2Fut4L2RMfx6%2FsiUF30xOxeFP3oIwRjX%2BU3q3dhbfsT1n6L%2FB10pPED9ERjaiA9FBRc%2ByUKVWIHOQJkSKF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user25.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user26.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user27.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user28.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user29.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872730fb222743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e9294639-029c-4396-a2a0-5c77f38a2962",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249528",
    "X-Trace",
    "2B10A2E697258612ACD5239E5AEAF6A7ECF406FA33000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N8UB1M3hLm5cUvhRdbqdF7wFuCu1L0ViP8TXwT4%2FvXPNYF%2FZTe5QpYBbr4qqkxvqV8LEdzDt3QKxFFLNqNtjfiJqA63AvdJpwONfzR4jhAPLshGwHsqHaM9fixPCaRQl"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user30.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user31.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user32.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user33.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user34.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8727332cf0e074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7a38097d-5209-40b0-a316-736927f7e521",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249527",
    "X-Trace",
    "2BB6ABB8969591A9BD36820C020EC56483D177D6B0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ByOgHNaW9iETFH5UrGbg44SX1a0GZmm5I6R2BpqbV%2BShxrejKESPpV38yPX3rV2Ibnhu6K3MMEpC2e289Rc8SboYX8UkIOPwvdkCPv%2Bw8%2F9SM5DvOK7wH1wCvtmmfnBV"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user35.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user36.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user37.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user38.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user39.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 16:59:27 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872734ee7a2749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b969be8b-539b-4f7b-9525-161da819ffab",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249526",
    "X-Trace",
    "2B14739FD3B5A71FFDC8F80EEDFE1552BF43EC3709000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nvwlUNeKI6bAAErvchNn9wq3MW0xc98FHbUZY0Twg9TNP5SnyKRryOZAIt4FCPFk%2Bk5a5WpGFnEbKUubjRCRwbhnvioF%2Bo2QP3OUsIur4qdDVRpbCEGxxwSQE2o7WFh7"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user40.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user41.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user42.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user43.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user44.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 3,
      results: [
        {
          id: "7220577092",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577092",
            name: "Fist Name 44",
            twitterhandle: null,
            website: "www.44.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577109",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577109",
            name: "Fist Name 43",
            twitterhandle: null,
            website: "www.43.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577102",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:24.637Z",
            hs_object_id: "7220577102",
            name: "Fist Name 41",
            twitterhandle: null,
            website: "www.41.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:24.637Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87273678ea275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "281972ec-35c7-4ff8-b19b-1714243aea22",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249525",
      "X-Trace",
      "2B815463917A3405A2D882690F9BB2554C270CE2E7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZCTUNsEcnQRNjHHFqVfwhGAv8g75Em7il4EtOADtAhkCbokPV4ZMo0Zer8js2xR9uVF5vZr04vmggMiqIWlTK5sR50XoGpqYPW8gMVnm8bFwJ26GoMVFbXpYrRAEONS1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user45.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user46.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user47.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user48.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user49.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 4,
      results: [
        {
          id: "7220577081",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:24.636Z",
            hs_object_id: "7220577081",
            name: "Fist Name 47",
            twitterhandle: null,
            website: "www.47.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:24.636Z",
          archived: false,
        },
        {
          id: "7220577082",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:25.224Z",
            hs_object_id: "7220577082",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:25.224Z",
          archived: false,
        },
        {
          id: "7220577088",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:27.461Z",
            hs_object_id: "7220577088",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:27.461Z",
          archived: false,
        },
        {
          id: "7220577103",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:25.850Z",
            hs_object_id: "7220577103",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:25.850Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8727382902e08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0ede2956-0bbb-4bdd-9084-282d4e769424",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249524",
      "X-Trace",
      "2B75FC87F1D9D7DE85CD03FE45B5FB02202DB9E136000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6NnsqXRRY74v4b3XuiizrZ56o%2BPdvgN5N2RmDXzyBoCF%2BHJxqJvwT9VGMqRJ%2BNGsG%2FOWoTBcUqOw7JcunCSEz8FG8%2FwnJjhEolhA9AcNFzbNQxx6Cg8o24mYj6MVNmvM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user0.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user1.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user2.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user3.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user4.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577078",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:31.811Z",
            hs_object_id: "7220577078",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:31.811Z",
          archived: false,
        },
        {
          id: "7220577098",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:40.664Z",
            hs_object_id: "7220577098",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:40.664Z",
          archived: false,
        },
        {
          id: "7220577106",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.536Z",
            hs_object_id: "7220577106",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.536Z",
          archived: false,
        },
        {
          id: "7220577112",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.796Z",
            hs_object_id: "7220577112",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.796Z",
          archived: false,
        },
        {
          id: "7220577111",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:39.500Z",
            hs_object_id: "7220577111",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:39.500Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8727f5fe2dcf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "518e99da-13ab-4aab-aa3d-c5aa193e1acc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249523",
      "X-Trace",
      "2BC060C26B9B30F4E9C0A82D498BECA3C287A7191D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gaqQR2XnIo8WDoTbuGAoIe%2FqAEB6XgcNPjB8TuIursnDvxElf9mbjbb%2BQz%2FpZsRchvivZJ3vaZ8ggnX940TgAk6mt3aW3iJ6MJ9W0vdOKtirrxeK36O%2BtEZOqxv3siMp"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user5.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user6.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user7.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user8.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user9.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577079",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.800Z",
            hs_object_id: "7220577079",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.800Z",
          archived: false,
        },
        {
          id: "7220577089",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:42.759Z",
            hs_object_id: "7220577089",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:42.759Z",
          archived: false,
        },
        {
          id: "7220577096",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:40.659Z",
            hs_object_id: "7220577096",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:40.659Z",
          archived: false,
        },
        {
          id: "7220577108",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.948Z",
            hs_object_id: "7220577108",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.948Z",
          archived: false,
        },
        {
          id: "7220577116",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.887Z",
            hs_object_id: "7220577116",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.887Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8727f7aaab273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6d7d453a-7738-4598-86bf-9ca41bed5b36",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249522",
      "X-Trace",
      "2B91A030B62BB1EFD71B6DD312CDF76A3A76D1CFCE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F7wPxDB3E%2FI15zp7oxKROG3GY1uhZATuC4H61r%2ByvKIptUs6RegqWxrj9ndifY5rswFDU%2B0e4IDywdlXAYfUatYRBLkIT71c9mACvX4h4sGlz4uqJZuA0aQKUJRwSxfT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user10.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user11.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user12.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user13.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user14.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577099",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:43.969Z",
            hs_object_id: "7220577099",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:43.969Z",
          archived: false,
        },
        {
          id: "7220577122",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:38.856Z",
            hs_object_id: "7220577122",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:38.856Z",
          archived: false,
        },
        {
          id: "7220577097",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:46.486Z",
            hs_object_id: "7220577097",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:46.486Z",
          archived: false,
        },
        {
          id: "7220577104",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.911Z",
            hs_object_id: "7220577104",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:45.911Z",
          archived: false,
        },
        {
          id: "7220577115",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.059Z",
            hs_object_id: "7220577115",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:29.059Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8727f94d2fe074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bc388529-4b2a-4ceb-a79f-79aa427fd677",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249521",
      "X-Trace",
      "2B9E925A38931E4833A5DDDB2316E0CFE0CA8E6517000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3X4iqL716rCe%2Bp%2FmF2T%2BsBT0iAxE%2BUGiNnUbU6yP3ukhm7pdj6o1T4o3hsZQ8RcVxwOA3by0jtzye%2BHkPbMVvxSRYHZcBZ%2FTM9nUkdJMC5fr5wZ1HaRVM8HMpt%2BLdP8Q"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user15.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user16.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user17.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user18.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user19.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577086",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.294Z",
            hs_object_id: "7220577086",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.294Z",
          archived: false,
        },
        {
          id: "7220577094",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:36.390Z",
            hs_object_id: "7220577094",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:36.390Z",
          archived: false,
        },
        {
          id: "7220577105",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:41.042Z",
            hs_object_id: "7220577105",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:41.042Z",
          archived: false,
        },
        {
          id: "7220577118",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:34.272Z",
            hs_object_id: "7220577118",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:34.272Z",
          archived: false,
        },
        {
          id: "7220577117",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:43.411Z",
            hs_object_id: "7220577117",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:43.411Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8727fd187e2745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c2b7eb06-9df9-4a88-a753-7669cec50b31",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249520",
      "X-Trace",
      "2B873DF1F5E875CC8433EF3A6863C3ECC58616A8B7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=k8DZuDFA8qaYWI02RwvCBO03wkwf%2Fi5Kkl8LG9z9nJDPdCcX%2FokJ8EPByDtMk86w0FaFgKPZNau6A%2B79ws53ienqwkGU003JsaKcONKF64qcdZSmatqGsH1stu8Dg03G"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user20.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user21.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user22.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user23.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user24.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577074",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.911Z",
            hs_object_id: "7220577074",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.911Z",
          archived: false,
        },
        {
          id: "7220577090",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.317Z",
            hs_object_id: "7220577090",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:29.317Z",
          archived: false,
        },
        {
          id: "7220577095",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:39.172Z",
            hs_object_id: "7220577095",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:39.172Z",
          archived: false,
        },
        {
          id: "7220577107",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:43.484Z",
            hs_object_id: "7220577107",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:43.484Z",
          archived: false,
        },
        {
          id: "7220577119",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:40.662Z",
            hs_object_id: "7220577119",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:40.662Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8727fec8d7e084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0e1246db-c874-4b85-8e6b-cd726a71c4bf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249519",
      "X-Trace",
      "2B3C8ABC1088E786209AA3AB9FB12A38BB50789A49000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pkre%2FLQzw8TVQEyyQldP6jfAoKlBJVgk3fEFuAEeYkF0fNelenQdEQcGHu1jWO5OWIvb%2BAbM87zOHNZc0OPjffmWsJbdHLq825ZJ%2FFM%2Fx6Qvby3J8grAiQkJNFoH2DD%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user25.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user26.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user27.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user28.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user29.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577075",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.227Z",
            hs_object_id: "7220577075",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.227Z",
          archived: false,
        },
        {
          id: "7220577091",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:40.067Z",
            hs_object_id: "7220577091",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:40.067Z",
          archived: false,
        },
        {
          id: "7220577100",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:35.457Z",
            hs_object_id: "7220577100",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:35.457Z",
          archived: false,
        },
        {
          id: "7220577110",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:34.277Z",
            hs_object_id: "7220577110",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:34.277Z",
          archived: false,
        },
        {
          id: "7220577120",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:33.037Z",
            hs_object_id: "7220577120",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:33.037Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 16:59:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8728007faccf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "693f1571-5b25-4c58-9446-50dc9f732f51",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249518",
      "X-Trace",
      "2B2FDE553E04CB1FBAD0486C797B8EE15BF4431999000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Mlabzv52G8yZZtXGu7JwbYrawyvQjNykRbxlXEmPujtkd4otWSwnEpHGelmDmjE1iMs0cJQ7K5DXCWKi9lGkLaZDOAVss1MUU2ijFG6D4mR6dHNJIwiyG36BubPS6KbH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user30.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user31.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user32.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user33.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user34.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577083",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:35.976Z",
            hs_object_id: "7220577083",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:35.976Z",
          archived: false,
        },
        {
          id: "7220577087",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:30.315Z",
            hs_object_id: "7220577087",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:30.315Z",
          archived: false,
        },
        {
          id: "7220577093",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:41.039Z",
            hs_object_id: "7220577093",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:41.039Z",
          archived: false,
        },
        {
          id: "7220577101",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.782Z",
            hs_object_id: "7220577101",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:29.782Z",
          archived: false,
        },
        {
          id: "7220577123",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:25.504Z",
            hs_object_id: "7220577123",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:25.504Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872802bdd8e08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fcf278f8-08e6-4ebf-844c-65a328aa8356",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249517",
      "X-Trace",
      "2BE82A2DBA24F96A988A3FECD46222A79DC4E40DC0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=frFNEbt1ARNXsQQT5RlwCiCm66F%2BzQMdJ%2BLYW6iN5M%2B1a9DLZjhKRr9rwKFtQE9lrmO9u4uh8SRS37R49Uw5rYxCWp8OzF280EkatTRWrdBcOki0yRO1v6VgBO5QOrqT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user35.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user36.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user37.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user38.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user39.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577076",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:43.265Z",
            hs_object_id: "7220577076",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:43.265Z",
          archived: false,
        },
        {
          id: "7220577084",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.499Z",
            hs_object_id: "7220577084",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.499Z",
          archived: false,
        },
        {
          id: "7220577085",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:41.488Z",
            hs_object_id: "7220577085",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:41.488Z",
          archived: false,
        },
        {
          id: "7220577114",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.293Z",
            hs_object_id: "7220577114",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.293Z",
          archived: false,
        },
        {
          id: "7220577121",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.292Z",
            hs_object_id: "7220577121",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8728066827274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "08faf438-79c2-453f-afbd-a30e744fe5e5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249516",
      "X-Trace",
      "2B4F20EEBA48FD93B1811A1EF4BE6A9E99CF81FFF5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Hf3FKu9dxAL6CUpw9%2BBIg1RupjGBjgP246rUJWJXI5J04KFlVY1Pdn%2FP8aSi7yslvnHHJYjSjOdni0zDxmDodsl2VsBTTVQbBM2aA0fgu%2Bf1elGhZ1hbyTQWsBOGSGB%2F"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user40.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user41.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user42.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user43.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user44.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577080",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.998Z",
            hs_object_id: "7220577080",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:29.998Z",
          archived: false,
        },
        {
          id: "7220577092",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.314Z",
            hs_object_id: "7220577092",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:29.314Z",
          archived: false,
        },
        {
          id: "7220577109",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:25.763Z",
            hs_object_id: "7220577109",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:25.763Z",
          archived: false,
        },
        {
          id: "7220577113",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:39.497Z",
            hs_object_id: "7220577113",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:39.497Z",
          archived: false,
        },
        {
          id: "7220577102",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:39.384Z",
            hs_object_id: "7220577102",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:39.384Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8728089ee7e092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "274321b5-1237-4e10-9505-882491392121",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249515",
      "X-Trace",
      "2B8E2867E689B40BDD35C17B7A464A9118936F69D8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pnnZSfvP%2B6n2kbqD5ioXo%2Bc9XOHePYeHeafbpG1aGf8ygh2hnI7IFkJln1X7M%2BQxTeN5gJzsx7Jn70WI1QR95EXtMNQWm%2BPl4Cl1GJr8akbVyE92kVL5%2FwJDAa%2BpvXbP"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user45.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user46.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user47.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user48.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user49.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577077",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.887Z",
            hs_object_id: "7220577077",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.887Z",
          archived: false,
        },
        {
          id: "7220577081",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:38.873Z",
            hs_object_id: "7220577081",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:38.873Z",
          archived: false,
        },
        {
          id: "7220577082",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:36.665Z",
            hs_object_id: "7220577082",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:36.665Z",
          archived: false,
        },
        {
          id: "7220577088",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:35.974Z",
            hs_object_id: "7220577088",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:35.974Z",
          archived: false,
        },
        {
          id: "7220577103",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.481Z",
            hs_object_id: "7220577103",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.481Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87280a9aefe07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cb3cb421-168d-4bfa-95e2-b43a2fe64216",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249514",
      "X-Trace",
      "2B8E98F9B9B6EEB28F2BD427A4B52FA1C80220333A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OffdlVtdYVhFEjlw9gVqMEIxKUpS2YTSE3N8EjX6n8b36DzcF%2BWW6DNJLlYj9ER6pN%2FysMASKvgvzU14VZrlbzjxNs5IDKWXEKl48%2B%2BtVnX6YoWMZX5cR9XXWSLHPOr1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user0.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user1.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user2.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user3.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user4.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577078",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:31.811Z",
            hs_object_id: "7220577078",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:31.811Z",
          archived: false,
        },
        {
          id: "7220577098",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:40.664Z",
            hs_object_id: "7220577098",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:40.664Z",
          archived: false,
        },
        {
          id: "7220577106",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.536Z",
            hs_object_id: "7220577106",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.536Z",
          archived: false,
        },
        {
          id: "7220577112",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.796Z",
            hs_object_id: "7220577112",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.796Z",
          archived: false,
        },
        {
          id: "7220577111",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:39.500Z",
            hs_object_id: "7220577111",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:39.500Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87280d49f22745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "04244430-a815-469d-947a-a2a97bddc32e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249513",
      "X-Trace",
      "2BB15F3EE8B57133405B4E563863ED932276C68112000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fQU9IV6wZDrTW30P0O9AjeMBjWulLjbRRVJ7eRC3KDL6XQLKNwXE1QnjfuwDSB8X%2Fwp2xQmGR40ahHJWrr9bZ8mqHobKyFKzNcJj8fUWiBzawDXAS2YNNL7i08XPC1jM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user5.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user6.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user7.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user8.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user9.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577079",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.800Z",
            hs_object_id: "7220577079",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.800Z",
          archived: false,
        },
        {
          id: "7220577089",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:42.759Z",
            hs_object_id: "7220577089",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:42.759Z",
          archived: false,
        },
        {
          id: "7220577096",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:40.659Z",
            hs_object_id: "7220577096",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:40.659Z",
          archived: false,
        },
        {
          id: "7220577108",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.948Z",
            hs_object_id: "7220577108",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.948Z",
          archived: false,
        },
        {
          id: "7220577116",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.887Z",
            hs_object_id: "7220577116",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.887Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87280fa867275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ce8e00e1-3511-4cf6-825a-ac8d6b196661",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249512",
      "X-Trace",
      "2BE8CC9BAD621CE1C624375AF62A4FAC4A937D1167000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X28gHLcGdXAU82%2F2sWh%2BGGX19QMJRGtDBBEo2dZx2TJU%2Fm9rehXvffK0DBtZpglKbnq8EUiSZ1hocfS47ND6IcSiZiSiUniNJN9nj7n%2BbD2gOsV7Ne0xT2S8luMngYDY"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user10.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user11.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user12.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user13.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user14.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577099",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:43.969Z",
            hs_object_id: "7220577099",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:43.969Z",
          archived: false,
        },
        {
          id: "7220577122",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:38.856Z",
            hs_object_id: "7220577122",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:38.856Z",
          archived: false,
        },
        {
          id: "7220577097",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:46.486Z",
            hs_object_id: "7220577097",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:46.486Z",
          archived: false,
        },
        {
          id: "7220577104",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.911Z",
            hs_object_id: "7220577104",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:45.911Z",
          archived: false,
        },
        {
          id: "7220577115",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.059Z",
            hs_object_id: "7220577115",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:29.059Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8728125ccfe074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "567a5d4d-6d12-4e5c-9f0b-b96bb5abab5c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249511",
      "X-Trace",
      "2BC227FF11CA1A752F1D87BF8AC0B6F246D2DEF40A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L24SOKzHztdafejZDY3POxoQ0Zm9Etu4jcFweSMxgv5%2BqIZXhBVN40iikr1px7TncOcnqa8BMMcL4emsHEZ2Qh3542bZwRS0FjdxeeaB9QRTsOzVRf7%2Bmgp%2FTaHy2o41"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user15.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user16.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user17.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user18.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user19.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577086",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.294Z",
            hs_object_id: "7220577086",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.294Z",
          archived: false,
        },
        {
          id: "7220577094",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:36.390Z",
            hs_object_id: "7220577094",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:36.390Z",
          archived: false,
        },
        {
          id: "7220577105",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:41.042Z",
            hs_object_id: "7220577105",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:41.042Z",
          archived: false,
        },
        {
          id: "7220577118",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:34.272Z",
            hs_object_id: "7220577118",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:34.272Z",
          archived: false,
        },
        {
          id: "7220577117",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:43.411Z",
            hs_object_id: "7220577117",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:43.411Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8728149bbb2743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c5c28627-1868-4ec5-8ad3-5d2b46ecb458",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249510",
      "X-Trace",
      "2B8A84771C1CDD8F07744CD72265082B93EFB3CFD1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4zTP8jAd7eEQ4tYns79uOKA6VT3M9Zp3PFfBganOMGB7uSXIRQCtl086Pb3SbegTntXjkGeEQ%2BXfTGpACGzCbbVuQjWrFqsOgVu8vk3X5davQwRmkOwI8TWm0PvHKoxn"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user20.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user21.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user22.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user23.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user24.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577074",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.911Z",
            hs_object_id: "7220577074",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.911Z",
          archived: false,
        },
        {
          id: "7220577090",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.317Z",
            hs_object_id: "7220577090",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:29.317Z",
          archived: false,
        },
        {
          id: "7220577095",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:39.172Z",
            hs_object_id: "7220577095",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:39.172Z",
          archived: false,
        },
        {
          id: "7220577107",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:43.484Z",
            hs_object_id: "7220577107",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:43.484Z",
          archived: false,
        },
        {
          id: "7220577119",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:40.662Z",
            hs_object_id: "7220577119",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:40.662Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87281749b8273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6d936b6b-a77d-4edb-846d-50810af0796a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249509",
      "X-Trace",
      "2B287B87B5387560A1ADD6D344D6E9A7A1B44E71C0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OwGi4miuLrIvg6yoFpcmD%2FfuZ%2Bieis%2Bf2%2FGXVHl7cBZyA%2FyXj69mHWMhKbcDNd2%2F02SVoaLPufamolUcJ%2Fvrwo%2FF4bbsKtowesaoITu1R85h8xxWO4MW07wXa8Ror45r"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user25.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user26.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user27.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user28.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user29.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577075",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.227Z",
            hs_object_id: "7220577075",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.227Z",
          archived: false,
        },
        {
          id: "7220577091",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:40.067Z",
            hs_object_id: "7220577091",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:40.067Z",
          archived: false,
        },
        {
          id: "7220577100",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:35.457Z",
            hs_object_id: "7220577100",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:35.457Z",
          archived: false,
        },
        {
          id: "7220577110",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:34.277Z",
            hs_object_id: "7220577110",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:34.277Z",
          archived: false,
        },
        {
          id: "7220577120",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:33.037Z",
            hs_object_id: "7220577120",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:33.037Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87281a0faf274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2d6cd830-8474-4adc-b003-53ef0a46f595",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249508",
      "X-Trace",
      "2B344199BE12506A248DEA1C0DC7E6618B88D8373C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rhUQSYCHL6syB55aU3bVKQYStZHrWbHzCRaQ4j8E1k5Ebazn73XtARXLjDa6hnsvtMPC7v7bdCJofplh0QYpwsxZrWqd0wpoYryK2jCt%2BC3mAZ4e9qGI%2Bz5alHMJKPpT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user30.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user31.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user32.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user33.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user34.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577083",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:35.976Z",
            hs_object_id: "7220577083",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:35.976Z",
          archived: false,
        },
        {
          id: "7220577087",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:30.315Z",
            hs_object_id: "7220577087",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:30.315Z",
          archived: false,
        },
        {
          id: "7220577093",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:41.039Z",
            hs_object_id: "7220577093",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:41.039Z",
          archived: false,
        },
        {
          id: "7220577101",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.782Z",
            hs_object_id: "7220577101",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:29.782Z",
          archived: false,
        },
        {
          id: "7220577123",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:25.504Z",
            hs_object_id: "7220577123",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:25.504Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87281bcfbc2746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cc4e5821-743d-49c2-8fa9-717ca427fe24",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249507",
      "X-Trace",
      "2B4CA9BBD877BDBA0CD29EE390B9B47D12A8C57675000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OZf9XILKgkXIFD0pMPfxW2t%2BnrBYpHMJ4breCurotG4vGF2Hp%2FKN6fk85XnWxjeET8GhQRfFvQMSVGLX%2B3MKsGD5s3Ns15qnndnNbDxM8uz%2FCgv0tz2EggQEpXhSnQgv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user35.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user36.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user37.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user38.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user39.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577076",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:43.265Z",
            hs_object_id: "7220577076",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:43.265Z",
          archived: false,
        },
        {
          id: "7220577084",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.499Z",
            hs_object_id: "7220577084",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.499Z",
          archived: false,
        },
        {
          id: "7220577085",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:41.488Z",
            hs_object_id: "7220577085",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:41.488Z",
          archived: false,
        },
        {
          id: "7220577114",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.293Z",
            hs_object_id: "7220577114",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.293Z",
          archived: false,
        },
        {
          id: "7220577121",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.292Z",
            hs_object_id: "7220577121",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87281d8b30cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b114963c-9e52-4f21-b045-1d1c8985b973",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249506",
      "X-Trace",
      "2BA8179D061CE2F851B41AE23797CE4EF57DF35983000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6WfUobGaEd13efg%2BwjSpFsAKs2whQtXrGeWWiFqAZja8q5uzDehO0sDMV5o2GyfMm0g04Pb%2FwpIYW7Bka%2BYr0xaFZ4Vb4qwATJjf%2F%2FOWRYIRl5ZPY6ELcTDj2J29kzV%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user40.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user41.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user42.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user43.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user44.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577080",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.998Z",
            hs_object_id: "7220577080",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:29.998Z",
          archived: false,
        },
        {
          id: "7220577092",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:29.314Z",
            hs_object_id: "7220577092",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:29.314Z",
          archived: false,
        },
        {
          id: "7220577109",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:25.763Z",
            hs_object_id: "7220577109",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:25.763Z",
          archived: false,
        },
        {
          id: "7220577113",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:39.497Z",
            hs_object_id: "7220577113",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:39.497Z",
          archived: false,
        },
        {
          id: "7220577102",
          properties: {
            createdate: "2021-11-03T16:59:24.637Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:39.384Z",
            hs_object_id: "7220577102",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2021-11-03T16:59:24.637Z",
          updatedAt: "2021-11-03T16:59:39.384Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87281f7e9de07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d8a67404-d911-492d-bb62-dab4a28b9c57",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249505",
      "X-Trace",
      "2B7824736131894DBEB9D323A24A8F1271161A0749000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hR0nYfkA1FICOkzoKUJGLi35w8MKP3GX2c%2BVsU%2B16f6Jpjp1cFvhV5Ks4iJaNbA9p8BIC%2BWwNj%2FxkEK8jKgEsygcz80f%2BEz%2BcNtACQJoCzwR5HnX1p5FSC4dFi3TDyPt"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user45.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user46.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user47.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user48.demo.com" },
        ],
      },
      {
        filters: [
          { propertyName: "domain", operator: "EQ", value: "user49.demo.com" },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7220577077",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:37.887Z",
            hs_object_id: "7220577077",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:37.887Z",
          archived: false,
        },
        {
          id: "7220577081",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:38.873Z",
            hs_object_id: "7220577081",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:38.873Z",
          archived: false,
        },
        {
          id: "7220577082",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:36.665Z",
            hs_object_id: "7220577082",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:36.665Z",
          archived: false,
        },
        {
          id: "7220577088",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:35.974Z",
            hs_object_id: "7220577088",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:35.974Z",
          archived: false,
        },
        {
          id: "7220577103",
          properties: {
            createdate: "2021-11-03T16:59:24.636Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:59:45.481Z",
            hs_object_id: "7220577103",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2021-11-03T16:59:24.636Z",
          updatedAt: "2021-11-03T16:59:45.481Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a872821dd032749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d33964b7-2b4a-4a13-901e-8e0820d9eb1f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249504",
      "X-Trace",
      "2BE5B03AF43190523340E946949751A6AD4B43418F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Bt3LWb6t1WVS6KcC2gz%2FNX2TBq5wBv7hnB%2FNEUAw5xH9mmgSLWMYmGvnHDY3udRwQhg9wnsiGulnadFRftDc7MyY0en0LRv0d7AMeqQh6tgNkGDiXDuqeHETUhpuGbBE"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7220577078" },
      { id: "7220577098" },
      { id: "7220577106" },
      { id: "7220577112" },
      { id: "7220577111" },
      { id: "7220577079" },
      { id: "7220577089" },
      { id: "7220577096" },
      { id: "7220577108" },
      { id: "7220577116" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Wed, 03 Nov 2021 17:00:05 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8728239a7a275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2918b9e2-6d08-4143-b464-870abadc5c26",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249503",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "99",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2B1F203376B06167A2692309FB124B2DC38E9CD443000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=62ZjOKZTI2mDIxMrVGGVzzNpDj0lbGGvNysNeKonP7KgCDxJLJkkGXyQPuilyX3twjGSkfRXL2NNqg3aRQkWQXEZSd2U8s7ZioDdGqYFgORrn2TogQ1RRGjn0mTPzane"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7220577099" },
      { id: "7220577122" },
      { id: "7220577097" },
      { id: "7220577104" },
      { id: "7220577115" },
      { id: "7220577086" },
      { id: "7220577094" },
      { id: "7220577105" },
      { id: "7220577118" },
      { id: "7220577117" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Wed, 03 Nov 2021 17:00:05 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a872825dbdccf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3747d60f-1ab4-4d76-bd1a-2f3c2a663f5a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249502",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "98",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2BF9B47D1E022CEF21EE0CFF1E09C6ACD9954A6FFF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=biXt%2BUtZlFkeGWI%2BNhn8K6yIMnUa9i7t20PY83XgtYeSuZxG6kafw8b%2BfwXGkjnMtNoRMH3WyykdAfUL3%2Bob8bTVRPmKoQx%2FOZWthHAJbFqDNAyVOuGEfbze2apDJpLS"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7220577074" },
      { id: "7220577090" },
      { id: "7220577095" },
      { id: "7220577107" },
      { id: "7220577119" },
      { id: "7220577075" },
      { id: "7220577091" },
      { id: "7220577100" },
      { id: "7220577110" },
      { id: "7220577120" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Wed, 03 Nov 2021 17:00:05 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a872827bcad273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "85d4ec7f-b0b3-4a02-b04a-f404333c08b3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249501",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "97",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2B3E9845AE1B6B96435E4A0501B62EE2CC201FB8E1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vIsvyk%2BLLOD59FY%2FklwnEAd98f1JeqaYib1hd8X3BJmPsDNMhYa0k4QEukoNfl85nJqxjTvK4WZ43r%2B6%2B2vK8PrTKb2dSIJrBYVWWhDKbE0r5qr9IDOnq6iK6z3tPgYN"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7220577083" },
      { id: "7220577087" },
      { id: "7220577093" },
      { id: "7220577101" },
      { id: "7220577123" },
      { id: "7220577076" },
      { id: "7220577084" },
      { id: "7220577085" },
      { id: "7220577114" },
      { id: "7220577121" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Wed, 03 Nov 2021 17:00:06 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a872829c8dfe07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2499f771-cd31-402d-a050-591d9c3be720",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249500",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "96",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2BF9355329D0D525298E2F0177E2DDF01F4B925D3B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XSbqqAkGpnaAKYj%2FxmBfZgybcPpyCtldUwD91OZNerFfcj9KJq1kvykHKE%2Fe%2BqX8j9cPtwZwdIIOpwfArm69TObVafI5mKKA%2FYKfi9US428QzpwjEFH7SOzycEotaifq"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7220577080" },
      { id: "7220577092" },
      { id: "7220577109" },
      { id: "7220577113" },
      { id: "7220577102" },
      { id: "7220577077" },
      { id: "7220577081" },
      { id: "7220577082" },
      { id: "7220577088" },
      { id: "7220577103" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Wed, 03 Nov 2021 17:00:06 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a87282c4dffcf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e552980f-8be1-4a90-9660-eb3fe06af527",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249499",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "95",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2B69B8FBA71DCEBDAD15DED34C2A369F1FCA0680A8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0%2B4BtRWOwi7zs3goEHa89ImZiGjxTUoKv0US7SRXZfNh2gtkR9eJnoOMebwF5Ff6oibj2zBFxkyeIR9ctewl21EkF7uxllzAWgDd16H4kwao27qajcNx6WJw0gDkFokn"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: [
      "name",
      "website",
      "twitterhandle",
      "facebookfans",
      "date_field",
      "domain",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 3,
      results: [
        {
          id: "7220641840",
          properties: {
            createdate: "2021-11-03T16:56:00.364Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:58:47.712Z",
            hs_object_id: "7220641840",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-03T16:56:00.364Z",
          updatedAt: "2021-11-03T16:58:47.712Z",
          archived: false,
        },
        {
          id: "7220504964",
          properties: {
            createdate: "2021-11-03T16:58:14.248Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-03T16:59:19.187Z",
            hs_object_id: "7220504964",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-03T16:58:14.248Z",
          updatedAt: "2021-11-03T16:59:19.187Z",
          archived: false,
        },
        {
          id: "7220606073",
          properties: {
            createdate: "2021-11-03T16:58:47.989Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-03T16:58:53.371Z",
            hs_object_id: "7220606073",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2021-11-03T16:58:47.989Z",
          updatedAt: "2021-11-03T16:58:53.371Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Wed, 03 Nov 2021 17:00:07 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a87282e4886275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bedf67ba-090c-4bf5-b465-875fe8ed6e1b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249498",
      "X-Trace",
      "2BD872C9FC7179D1E3B1D8E467C585209027313144000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HDpVe%2FpTR2dtEIs4Z1OtsHbWXF%2FghzX7uIgSejmRPacZdCZCa5DlboeRpNxaruXXGC6y7wLoXb5M5tTOf%2BHJkI0ScbGjdltqpeu752lramg24a5OA6exszYYur9M00sI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [{ id: "7220641840" }, { id: "7220504964" }, { id: "7220606073" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Wed, 03 Nov 2021 17:00:07 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8728305e882745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "280131a7-54a3-406b-a92d-65a03c9ae187",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249497",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "94",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2B25499A05D3019D87C086517AF6667F6DD320F847000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bObCcpHPUXjzrliSrTQ%2BeWSlfDdWb4WMuWBfZJwiLYpN35YDaapeLbAYER5FdXDvLtnqO6%2BacAx2HcM6u1DhZwFdlCob2xpADSXHwrym3FJCyOwpSQu0sIQUqTi6EF0B"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo2.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "grouparoo3.demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "domain",
            operator: "EQ",
            value: "notgrouparoo.demo.com",
          },
        ],
      },
    ],
    properties: ["domain"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Wed, 03 Nov 2021 17:00:07 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a872832aa352743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1a5e0ba3-b659-47a8-9d8a-81259915015b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249496",
    "X-Trace",
    "2BA57108812AA26F868CAB13C583A3F03EA89669BA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PjxV9bZkqCNJS1YJcsBYtensS6KKuJ3eYKfUJqavMsUhgYpgez%2BY58cfNFyrLKRGF%2BnabdRcK5FP%2FA%2BM7SA%2Fq%2BfT2R35p%2Fyib0uDrGTU17zXPmTK%2BbknIIt6F1wChB%2Bj"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
