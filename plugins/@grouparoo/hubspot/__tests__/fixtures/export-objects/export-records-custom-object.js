const nock = require("nock");

nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:06 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58814a9a2f274f-FOR",
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
    "533bf1e9-0e0a-4edf-bda7-214b97aa08dc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249858",
    "X-Trace",
    "2BC4F58B0CA9359F09A6DDB2609C6700F122F53514000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dDpENEaoUbYBAELVOXhH2Gz92xHDZdpjqaoF2NvjjS3KqWZTtQeGwLUvNh36N35MZXT%2F%2B1lA9GInRzVjnWF8wjA3uLqBrLSaJC6dIhM6v0c5pBXucYKsirFJPkOvz89h"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:06 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58814cf9e42745-FOR",
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
    "0ccf7247-12fa-4150-be2c-75166849d971",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249857",
    "X-Trace",
    "2B5A5AE7EF7025980110EB3E3CCD9AAC6BCDE6E6B4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LD502crs6MNM%2Bw8YWnhKR4qDuXEDD%2BYYCTHcaCummD8n5W7ZSq0T7zSVovXni64oOAAh%2FQ1bR9nasu3geKzYcWhejJlpKWkW1dLCeX0ZHqi5FYIOcmPehwdCAbNnXV6g"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:06 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58814efe64e074-FOR",
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
    "9995d858-00da-42b9-89ef-33c92c8d156c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249856",
    "X-Trace",
    "2B36A6964364F161A0E6996DB10574FF7F29B7764C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PDCGB2OFtDX3Qa8We%2B7c5RXL9gvPuc%2FGpKzfjakEnoKuZ48hwteDhMLjE%2FHX%2FOpeAXolklvK9fUuvlFiAzZ%2FRnd%2BPAcAlDJkIZDzftRrqgTVlxpg6Jxvig9gr42lnQEl"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:07 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a588150b9752746-FOR",
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
    "405fd9d1-7d35-43c2-b1e8-0795b55d4797",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249855",
    "X-Trace",
    "2B297E95E06A2AFDB8E24E092726993BE060FB3BD8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4mMj5kOeQCaq6cT6iIjbaKw6T8MRYNxoJMNi8WQKOBFhw0YLfAx3R80YNYILp%2Fvwt7Kr0C8lrWJ%2FcO19U1yEbzpskR9w%2FG24uxE5DQcE8pH0TPMYho1Gpl%2F8D69IM8fK"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:07 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5881528e82e092-FOR",
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
    "76888b07-9978-4f55-b644-bf9a367291f6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249854",
    "X-Trace",
    "2BED4C82E913A202666718525FBC5DC1236FCEA475000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cCCH7fozJky7mVKlCIQ4dYY6h7NhfR09PMGBSkTZQXOkYZjfOlJWq9sjOflg8jDKjfMwIYlg%2BkowVpH1GeENiRYROmJPKXMSVfKgBTRQjjh8%2FrtM1Sdj9MKGpHLjFZse"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:07 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5881541adce078-FOR",
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
    "67655ab7-3d33-4890-a08f-2c5d9719a509",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249853",
    "X-Trace",
    "2B4B10AF1CE4BDFEE0E65CFA095BECB4368C4D1A4D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hiwF1ntoSp7ANMemBHD7n%2B7rY%2BOv8VXLVwivrYiwjODJyDF841UeKujGqlKKKuNu96nZrkdvupx4eT6IB0CxdDTIDhv2%2FdOUgObMsfZTW5EWbEoFvN6O%2BeWN6P1VBs5v"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:08 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5881562a46274f-FOR",
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
    "a97f9e05-14b2-44fc-a7ba-69c4afe25247",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249852",
    "X-Trace",
    "2B33713F92F618E1953F9086EEF7D4322BB7808AFB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NrRNYmBC1ipX7E%2F5txNUXg0Hu4Ml0y7NvjUUj87%2BA4e%2FfpHSIcdjAthHzmAS852G79m76Sy4KMLXeC8I5RaU7TWpDOEZovScFrtmBz91REByQ1oJJ7HsHetX3Fwm3%2BYB"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/create", {
    inputs: [
      {
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "John",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:08.240Z",
            hs_object_id: "457956457",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:08.240Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:07:08.240Z",
      completedAt: "2021-10-29T01:07:08.304Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588157fdd7cf9e-FOR",
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
      "71841bc1-dfbd-41e2-9328-310d520df04e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249851",
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
      "2B5B53F65F75A0151070D2C7363218A0542472AB3F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c7qt0QBR0H7NzhMmrOCQGMKIYojSrNv5Dm0No6XVYiZYOhetGsB1rgTrIt7GGxd3CwuvJGxgEMpxgdHRHsenoUks2vJKc76vHJUxriAJyqScsCoYFFWQvj5KPEv%2FvHj8"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:08 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a588159afe92743-FOR",
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
    "8b4a7068-a7c7-4541-b6e9-63639d9c9b8b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249850",
    "X-Trace",
    "2B6F75D3D6EE7EA566B3E44ED0B9823683E49B1592000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=crOXxoWdiEkljpkyyn%2FoP9e1U6GNtAl7R6s5%2FHSXPjiLDF9Vfbg3VbE7B7TXxwI3%2BdVjVJT8kZi8Yp%2BTYrfxlHJfvA9%2BlJedb%2BlDmcAIyLN1KnbPFwcarluX3IXpIfZr"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:08.240Z",
            hs_object_id: "457956457",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:08.240Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588216cb292737-FOR",
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
      "9a7e0318-fe2f-41cf-ad00-885e7e8881b0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249849",
      "X-Trace",
      "2B7B41663A57B183D1DF1D2DB7EFD2FF95A79A6352000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EfBFrEGwnRSH5KaPNfPsgU79515csho1I%2F6W7jw1VTCC9DTxDPINbgxDoE81gdRi4Jyc8uBSX%2BgNh%2BjkyGU0Zyb7LtKIUC%2B2l%2B46b69B10jBpUzY%2FfURJLyq%2FsHYOMvF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:08.240Z",
            hs_object_id: "457956457",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:08.240Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882187ba62755-FOR",
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
      "2ce5dc6c-6786-40d7-a70d-2010743a66b3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249848",
      "X-Trace",
      "2BB445844120670B2B51F152F71B1EB0619BEA750E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Yxi7bni0Mw6n9UujHNH5E978MjLcmVrHW%2BnNb1SEvE3rXfAlFodOvdfhpLX6K4ihxPnedmdXwDPqP0533gKCljs3mBU752lbQtjlfYPFI0Umen%2FoDFPSWz9t8%2Bri0UGb"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457956457",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:08.240Z",
            hs_object_id: "457956457",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:08.240Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58821a1c7ee07c-FOR",
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
      "dd91cd56-122f-434a-93c9-692fc2362bb3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249847",
      "X-Trace",
      "2B45E22F3324CB21B3DD774CBCA1E5BD55D6CE8352000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DZVCt2i6mgRTEXoz96AwzhIs8YT1E3LfCkuZcScSyU4g7PWNPnLsdNz5xRN9YCZTsdTxwjSkpT%2Bi%2BiJzh8YoMNRXLXe%2FoDUl879aAebCxgJGxHaE8xQ%2Bu5QgOOsn%2BOR%2F"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:08.240Z",
            hs_object_id: "457956457",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:08.240Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58821ba890e078-FOR",
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
      "3aec426f-82ec-4fde-acec-c3f329425b3e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249846",
      "X-Trace",
      "2BAB742044142AE2F492BB12402998D25D1CB30879000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PCH329dT5u6tdzKzD4EyYgvXRLfuBlXH01WR%2FbR6NZVn%2BywvvC19cLEyyaS7dQhjkjfNmmmz13pyQVFhiHXu4%2B0XB1XBopdOnfnDUsef9IXNERiEUJq5LRverrVZ5axI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:07:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58821d2a4b2749-FOR",
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
    "1ccf67a5-9680-4117-b074-ecaa7ac90792",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249845",
    "X-Trace",
    "2B8342304B802B82F3C7BCE89707ADAD771D32C7AE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cP44ihfl9sBqetoxC6oC0IDJAPqRBEoDj75TvoaeNDQrXeHvFCoDkV2YMtO6gqNK7jt15TuoBfmIp08BnUFWk7xUo27iM%2F6oCg99QvNT2KOpNax8tmNLaCQa5IX7YjuU"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457956457",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:08.240Z",
            hs_object_id: "457956457",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:08.240Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58821f2912cf96-FOR",
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
      "4912c5b6-2279-4592-b400-0c9c760bf603",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249844",
      "X-Trace",
      "2BB7C5B28FCA596295E9C0A70789CDE98588B28515000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q2NCo0s7ts2uztk08n6wM46PvmJDzWQHoGMf4InsdpKl6exU9RrgRJsikg7v6BnKA1%2BppCCBz%2B4yqZY2KzET2euQRpnMxVVHK6YdHMarskhBos%2BVMpaakgFLH05aOlsb"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "457956457",
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "John",
          last_name: "Doe",
          number_field: "3039",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.433Z",
            hs_object_id: "457956457",
            last_name: "Doe",
            number_field: "3039",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:40.433Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:07:40.429Z",
      completedAt: "2021-10-29T01:07:40.467Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588220fae9e074-FOR",
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
      "ecc03ab0-ad1b-461e-9cbc-8b73a3da9253",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249843",
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
      "2B597EE2EA85C9803ADC12CE4705A761BAD15112D1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AdGf2YJVuDfN4vh8YVnt32HoayrZmO4IetNIUR%2BnW9Ed8KMGcFGZ2TqtHWN9GU8enhkwj%2FfLW6izRbH1RW%2FKPA5gPVi3XH%2F3%2BjZKXKpqD9RvVje14VP1e8wTQ6w37ofV"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/create", {
    inputs: [
      {
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Pete",
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
          id: "457931381",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.692Z",
            hs_object_id: "457931381",
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:07:40.692Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:07:40.686Z",
      completedAt: "2021-10-29T01:07:40.776Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588222acf72749-FOR",
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
      "618a3376-fcff-40f4-a6c5-0befa33866c1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249842",
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
      "2B3B0CCE2A02776D6DF18C2D9C10193A6B815CC5A1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OowUJD85%2B3z7jyhZI4VRDg6nwLh54sEsS%2Fe55blkh9GDx56RON6uo6Im9FKzhiKBl%2FK1w7FZjCj9GxhkM9gqb%2FZwNb6gkXYwsIjIxhUSsh3sWxJZEL6KfmA5XtBz5cpJ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.433Z",
            hs_object_id: "457956457",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:40.433Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:07:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882248a07e074-FOR",
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
      "f840b156-722e-40ce-8135-0d5daedaa841",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249841",
      "X-Trace",
      "2BAAB771B0A7A74AADE6B58883BBA05C557B75E9B0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fscAuFb2BNXxwrUhpw6gNOlAn%2FzXF123Ipsby0p%2Fah3z1SY8tp6VUAEM7UcxoN2pVlkZynW6vnwYmJtCUkwQrQzg91A8bs8LbT6M97JLBs1RmTgYBSxHh1XfHvVhaqj5"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.433Z",
            hs_object_id: "457956457",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:40.433Z",
          archived: false,
        },
        {
          id: "457931381",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.692Z",
            hs_object_id: "457931381",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:07:40.692Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882e1af75275b-FOR",
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
      "989afc23-829c-4744-ae98-f19d168bd3c3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249840",
      "X-Trace",
      "2B2B0E46827F15A12BBAC1F2A76601D02AE8E9D20E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ELHaU5%2BDZzVk8s4%2FnAbXBMPTxv6V%2FWLSwyE2%2F%2FLMDEXtXvD41CZn0o3VqTxqLHhxf1CvNWlhpnFW7JQTbihBNHSu%2Bk2NNNAcawjpbjy%2FHsTp6pRYNX%2FsbW0y%2B3wLAtF%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.433Z",
            hs_object_id: "457956457",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:40.433Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882e368c92737-FOR",
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
      "2a151b53-01a9-4532-a5a8-a2833fb1144d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249839",
      "X-Trace",
      "2B1754CE45261DCF585F521DDADE621726253EA92E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J7XaplY%2BRLslG4lupBqeqn2OosNS41NH3fA%2FT6Nbs7HPF69AV2yR%2FhDmN5nOnL%2FO7F5ZapuoxGd7ZOLZywcR1x1Wk6v2zZ7USEYzZzEpo5SiQP9IbiNnQcdVIzuxz0qb"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457931381",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.692Z",
            hs_object_id: "457931381",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:07:40.692Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882e4cded275b-FOR",
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
      "1b06bd1c-7216-4b89-8cc2-a9d6b7a2a1ed",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249838",
      "X-Trace",
      "2BC8011D6ED6349603D2D9F528CB1CE2F52394B998000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Oei2aqTfAuvvqYTBONOvZDSMCbq3VVOZteJ8%2B5UXPkEgWFemixtYEdnOR6JqgzaIjX%2BPgUH%2BVRIViuFWCzNKdQ3PqL9MXWhxAxkIkff6Kt5eq%2F0WrmXIECfodH%2B7tl3J"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457956457",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.433Z",
            hs_object_id: "457956457",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:07:40.433Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882e669272746-FOR",
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
      "89b67409-e0a9-4637-922a-e66f82e8d849",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249837",
      "X-Trace",
      "2B00C29DFAD6E3EBBA3382E3266DB93AB2E0B2CD3C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EdQ8OrxFMlhY4S0FawoCIzwFjlL175tysjDze3v9dmRM0OHBQCa7fC2df6ANN5s1IMqkU6JGp%2B4SvtasYHxZ6AT9b436zdNQDnMZnddqHvH3tNLC0rxrge8WynSGnvxw"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "457956457",
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "John",
          last_name: "",
          number_field: "",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:12.289Z",
            hs_object_id: "457956457",
            last_name: "",
            number_field: "",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:12.289Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:08:12.284Z",
      completedAt: "2021-10-29T01:08:12.328Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882e80b8e2737-FOR",
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
      "524df967-d253-48bc-9b7f-c782662f348f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249836",
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
      "2B825D36BDAF6375AFF941375C03731CF2EBAB7090000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZdfDpQNMUmuhbV%2F2dM4xKl2c46HDVbK6KtancCPxx7%2Blpr2NgO31uLBkFe%2F9CQNvfpSEAIALhEhc25MfcWFQ%2F6WmazDwGXHoYAKvevQdKTaaJgZPOi5GAb3%2FfSo2YzT2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:12.289Z",
            hs_object_id: "457956457",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:12.289Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882e9cfb52737-FOR",
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
      "cf3c3341-ba26-418c-9484-ba730e51ee86",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249835",
      "X-Trace",
      "2B3112B24CA622E87ECEDEA68DFD59A968867B6C42000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BXUoHHMo0vrO08FnA7Cdy5eeEXeXShk4%2BvhxlWl81iWvSE5a%2BBSYjEehGmigR1ft2gYRbesautn5%2F9wXqwkBbdeP9WBoSk5pwck6LoMdsJOumlLqGOYmAm6cVkvo6Vwf"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:12.289Z",
            hs_object_id: "457956457",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:12.289Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882ee5af0275b-FOR",
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
      "3545d92e-b60c-40f8-930f-da489fb0de73",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249834",
      "X-Trace",
      "2BC3038617760F7F6A8864835CB59E8761922FAFF0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cdCMRV2CwZmngzzWlROzReSGFzW%2FPCxGLQ1KfJrSK%2Bnhsu36aPj2zP1dLOnGustLsN6BbIl9QY6Vk8%2FWTteBqfD%2BSsvTixSjKalks1NmAOO9rDmMBS6k9MpENEu%2F1FKO"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457956457",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:12.289Z",
            hs_object_id: "457956457",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:12.289Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882effbeb273d-FOR",
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
      "45cbae8c-45a4-4e7a-9b9e-0781fca2bb23",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249833",
      "X-Trace",
      "2BD846B4320953BF42CDB6C5904F2F0EEFB3295755000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FdSzmhpmHUuSRSwcs3rp67%2FxzO0gu4zHFj8x%2Fb3Ons92iCQYL2xXv2ei%2B7w%2FNyyKFO9W%2BzCf2wrCeDgsHBXVt48KP8A6bZu2igAT40eARfvESb11tPOC0DyATEenCV4x"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457931381",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:07:40.692Z",
            hs_object_id: "457931381",
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:07:40.692Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882f33a89e08e-FOR",
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
      "b786d318-9595-4c27-be5e-daffafe1a161",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249832",
      "X-Trace",
      "2B7CBB64C4ABD708EACB723DA9794800E71EA2CAFC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3mzL6uTORZgVukZszI4v4mUFnHMO5%2BlHO4A3trUatkubVaosASPFQp167BC0fqNHzrsJ3y6VwlVNFuXOMiCuAAN5wBBFKZ4AePObGqX%2Bm7XQc%2FGTEl2ML%2BavyP4%2B7S4f"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "457931381",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
        },
      },
      {
        id: "457956457",
        properties: {
          grouparoo_object_property: "notgrouparoo@demo.com",
          first_name: "John",
          last_name: "Test",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457956457",
            last_name: "Test",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
        {
          id: "457931381",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457931381",
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:08:14.335Z",
      completedAt: "2021-10-29T01:08:14.401Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882f4ef78274f-FOR",
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
      "93b0eba5-0cb9-45f6-95f3-b2e86fd32200",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249831",
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
      "2BF9B982743BCB4F1330184FBDE405CFCA4461DCA2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BUPqmNUMtNIft24peBuOlcA5JsgrLdoJz3f0fSiOKq%2BHOvbZbzv8VIUUXNngEyh1W%2BJA%2B9OsEuHQw%2BYU5lhxafOizwTy2L%2B7RYC11allagsFAkMxIPffXFj%2Bg2zDYdCW"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882f6babae080-FOR",
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
      "38e29a49-2cbf-48ac-8df6-38fe1da25663",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249830",
      "X-Trace",
      "2BFF4257D088604815BF0DAA8006D23EC99552E0C6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xudAwnNMxqm0rvsYB0qQuG3MCIyV%2BnGngfQ3jS17GeiWZnT24GI9OX9lgeCEdUyJ70JKexH2FzTpD58%2BbkUIpfu%2B3XboUwg6WOQC1BzrFmmyh4LCtfxbQdsw4WHTqhU9"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:08:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5882f86dc0e080-FOR",
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
    "b9fb8be4-1f93-4c01-9611-4a124040a2c3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249829",
    "X-Trace",
    "2BF26F1BEB414BE4080D4F37A8EAB90E6089786C23000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hCGcOQf8IfpfmucmHhFP1qbTE3pErN5xqqYV%2FnqUrIbDEDotKc7Bndd7r5VHPeuo4kjfdjtuMdEqk3DzbEI58kSezax0iHNt31eikNCa%2B%2BpE%2FvcciqXqIFmat41W5T7o"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457931381",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457931381",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5882f9da98e07c-FOR",
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
      "d277e8c9-d566-4b22-98b3-c224553ee2d2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249828",
      "X-Trace",
      "2BD6B018323DDD38737A8251163994924E55F5F5D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FSJvkzSEk5L%2BJJj6RB4pscre%2Fz0FxwBRHJFmga9qbjpMFTIo4A7r%2Ftml5HSaRNkONdBxKE5K60rhA215hJx4nafao%2BnTFEEhr747%2F49Hm5Fa2tXpwDLx%2FaKYmWgzizFr"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:08:45 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5883b73b63275b-FOR",
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
    "9fb9174d-810a-4af4-9996-e1e780648a3b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249827",
    "X-Trace",
    "2B8BC167AC3395CE170E347513A93EFC443F6C31F2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u0BLEw%2B2W4QAg9t3gjMPqJSIMfZUS%2BZXK3TsmgbImX%2BRTWSLumtN4V3FJ3Rt8yUCPYfkmjnv0psBVi3l1YOAGOFYeKhHxlmJD5esi8mq%2FYNvCvnlMEJJMBSQiSGLisZG"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883b8c9842745-FOR",
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
      "2a104290-4dae-49ec-b876-3cf9a323de8b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249826",
      "X-Trace",
      "2B814C35437486CDFCD33E3F6FCBA5D2C9FAA35977000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CgxI3Mw%2Fl9979UCVclIfDHDozxEj%2Bx%2Bl8wr%2Fema7W4%2B5pA7DZGmKQA99XRoVlXQEeqPSEfiMVgx7SwefLsc1ePGHGQVleUJen8hU9DgidS%2F7V%2Bh0NO6Towv18wPlFuOH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457931381",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457931381",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883ba4871cf9e-FOR",
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
      "7c76adce-1279-4077-935f-7d48e9c8e1cb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249825",
      "X-Trace",
      "2B78FB2E95B09A250CF54FC83B1B410241C09B1477000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ozaECo%2F73SIADsjVGTi%2FHGR%2Fvg0I8PiYZqm9IJsM1TknXjOC%2F5pLTq%2BzoXwzjHPhP5nQTxWxgp6zctfbkIZaergHXBNuAob3wzBaja%2FoPDuJYDKUL94CHXbstrVmFVOo"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
        {
          id: "457931381",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457931381",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883bbea312746-FOR",
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
      "b2cad815-1d1a-4a10-a32b-8fa6baa04b1d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249824",
      "X-Trace",
      "2B8D906F24F65F7E1960C0E49B99EBE8D993385649000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fSri4iIgKu84RGVz3f2jtiIw5LXCY%2BvDOo92yCwqDysK0pEV6zO2MSCscfd%2Fmq4V4%2Bysmjsv0rdZNVbGdXnwIzwgTA%2BbuRFbXqyOsrNP%2FTTCV3MRn9mG1wvgBGGAA7eB"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457956457",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457956457",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883bd7846cf9a-FOR",
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
      "a693dcd7-52f9-43c2-927d-22af27220f93",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249823",
      "X-Trace",
      "2BEC8A6611608472791C277B1AE0418DE8F576B089000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nCiLVFS6rupQygZKkH3WRRlsKmrPrulgSwfba739xEFqNMLn477xvulLmXfApkmlFmsn9oOU%2F8jlLbIg4zLrrBSz3IJH%2BQuEh47mkHzee%2BmMiibNT%2FZAUOdygIp%2FpPzP"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883bef8b4e08e-FOR",
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
      "f27e0b53-4c93-4032-9f71-1f91b9026f5d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249822",
      "X-Trace",
      "2B0033A5636155ADB81541DA5AB808261F1B7E9F64000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kQejxjl1Aek%2F6%2BbNtOfHBOLfGnJkNz8Q5w8lN4CLUNZYKYZuWdUZooIleoWqkYsLFUfAGB%2Fg7N4PQJLTW13uVZfh5dl0CAAARNKJi7o%2FHOLNKnhGzDYIf7941tkn3Fe0"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457956457",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457956457",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883c05a1ae084-FOR",
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
      "3134a427-5eef-43db-9815-07d275ab6b2f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249821",
      "X-Trace",
      "2BCC2AAAD9D0F8863B53F75E21BB8FFC21EF09CB27000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ga2Rn9pABnfrUxC3om1YN0GfghJ4Pt6qJ579hZd8H3Qzi6SiV%2BHa3wne%2Fe%2F%2FCD5954UL7GGZvj%2FzjufhKuvyArVy%2BxP8TAIEQfYpAJ9hDYhI3hvb9HoUht5GAEmu25fT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457931381",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:07:40.692Z",
            hs_lastmodifieddate: "2021-10-29T01:08:14.346Z",
            hs_object_id: "457931381",
          },
          createdAt: "2021-10-29T01:07:40.692Z",
          updatedAt: "2021-10-29T01:08:14.346Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883c2188c275d-FOR",
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
      "07451266-b503-44ee-bd8a-557f8f44c058",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249820",
      "X-Trace",
      "2B8FE7E8FCA9A0AE50125F852EC5B58CA12AEB1784000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EuMEl7uOtIEYpdQ9wKIvzAuawdwErChWhfbjYNXFlnf%2Br5mhqSFTg6lw7m%2FjBh2DzF4eArKhkOAAq1B5b2RcneIezCL%2FkBxaRXM4%2B7KhQ2nQc4M8AmYLOexJ6xPjU0tT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [{ id: "457931381" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Fri, 29 Oct 2021 01:08:47 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a5883c3a85d275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "110bb684-a644-441c-bd94-68d5b6d86e85",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249819",
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
    "2B9F2C600F2D3A844F43BA7018D5EF66BD77B94904000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d3q7DrtSKOpiax070O%2BcBtB81JDG93ylUGyPgm8DmNx5lbvBhQi%2FA8rra55FeL0UnQ%2Fd%2BMI3ZTcsJhl22kpSwLRQ4CZBA%2BFjPN8OEhhfuPcFl5pTPlOWzz9g0oDsHk61"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "457956457",
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "John",
          last_name: "Test",
          text_field: "back",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:47.695Z",
            hs_object_id: "457956457",
            last_name: "Test",
            text_field: "back",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:47.695Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:08:47.691Z",
      completedAt: "2021-10-29T01:08:47.734Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883c56aa3cf9e-FOR",
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
      "143a48c3-cb19-4358-bbe8-d0a577ec98ef",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249818",
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
      "2B1F93659DF4B697BAD6C30ED1FB87C9103859BA7A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=i%2B6Am6lnNpjAQmZABlMEKI2R%2FlxynVhnkRIrywpMaxnVLaabRDVqJdZ3w%2BRRLher5fH%2B94xpzubcRNyRE6A4yh2LNg024FBR1CIeLC2t31SGZTR6d2suD1cS3tTzo1cv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:47.695Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:47.695Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:08:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5883c71d78e078-FOR",
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
      "10efac4c-583e-478f-a2c4-e51e29bb8eb4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249817",
      "X-Trace",
      "2B8D135E99138FD1762B66F8028D3F2B88B9934426000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UL%2F7nqcgVnDl9a7Sg%2Bzm29PtUNXzmbGnPW0urKTsG%2BMD2K37YZdKQjlWff5WrGBS5T5rCWQjXKkYcljcinoQxcDS4zXWAGKA%2FxW3%2F9pPm3BRbeVEKK3ZpMDIgYLi4I1A"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:08:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5883c87ea6cf9a-FOR",
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
    "6eea22d0-f8f1-4a5c-8b5a-778b24151726",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249816",
    "X-Trace",
    "2BF97C35D2E3B9A7729051697A3FA0BCF390506A01000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XqZcPLr%2Fu6ekGdhg9acgNHNtgIzj2zXEH0YobK3BP%2Biz5DE9VBfr7%2B83M6G8xk6Zui2oJSQ3urrvpIUqUreWClhOWRvSEIqxUKl23jsLKk3dIRMTME1dWiGam03AeVVq"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:08:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5883c9df5de07c-FOR",
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
    "38a38932-c93d-4f7f-88dd-7c22b232eb86",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249815",
    "X-Trace",
    "2BE21E4863F45DDA059F0A6CA212A908E34A8240C8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SpZgbKbLhR9mBmFVqz6rdQxtARw0%2BC5rZAVpttnacnweP3ml7qzyjcS4FTol7ueHbEwMJlCSc8bTByMtPjeXq0%2F79mbBaOzOdKgyqYQ2QteTmHnrFquEewJSYTEcMVLi"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:09:18 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a588486ff232749-FOR",
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
    "c8d96dce-3c1a-4274-865e-6f177641254e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249814",
    "X-Trace",
    "2BA8219E7968D42764F2E5A0AAF0FD316CBD514C2D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FjmVJmr7kcKNyZtj7YYW94w%2BnG4ZUEiHp2rdiUgVauWD0XHOCUMYZ0d72PhbtWANchGIuGNW2pqhPWiyRA4RGsdrKEdxsIE662uIFdGi2BfPhSBFUqsyGETIwmgAy7dM"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:47.695Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:47.695Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588488ca8f275d-FOR",
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
      "9cc5dc8b-b20f-43e0-a6e3-beeafde8615f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249813",
      "X-Trace",
      "2B0CD18F965B299655FE3052991AB9B4668413A331000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=obPyAfXSokQ7dbZGf1AJNdA8BaBHLfmI%2Bng1v4DO0zMuJ%2BjTUo6pdF5YOhcEE2tnnQPpUWhyHP8O9beZCf2LjDQU8h%2BbVmKLT4P8DVdnY%2FdS0RK5tJwYKgynFA1Mehwh"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:09:19 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58848a284c2745-FOR",
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
    "d4bcb3f9-9e86-491e-9ab3-a670efca4872",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249812",
    "X-Trace",
    "2BDDA99FB34E4CC3659F6227F01D51F6BEC861C604000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cBGcLaBl606UokkZtxn9joQPLcGsasY9EmHudI95PZ2Q2qCXHURzky05LPFV%2Bbv7u7CZ9t%2BgIfe9rfNnloUdnkpMuSGfQBqnSfYl%2BnLXOUQYo89kEYAIpxaC%2BVtRdiI%2F"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:09:19 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58848b8f05cf96-FOR",
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
    "b8898c2b-7afc-4b97-ba32-5ebde4dd30dd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249811",
    "X-Trace",
    "2B73613BC0CEB069D7F9E3B250BEED382211BF054C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vy1oob4D%2FhbuA%2BcdvKP%2F7I7PCd3XvYbHEewnd9xDvMTrosC8rXRXmCgutExawECCtjMI%2FgDyrJsWRIBD59C9rLwPOXgu89h%2BZKs4upV2lTc5upEdxaIN%2B1DGwebFyuqj"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:47.695Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:47.695Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5884905cfccf9a-FOR",
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
      "8477ada4-9384-4763-b82d-3f1f151c49ad",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249810",
      "X-Trace",
      "2B4504296F4B73D6685A63FEEA7F6E266BBA656BF3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EqHodZTI3r3ZLpiPPVLeSia7qJZgqSN5Q1u3qX0Fj%2B09yPY8nNMlIV62VP7abGtm%2BnZA8CV%2FZ5O4J%2BiqFHlMb%2FrdN4YUHze%2BmDE9f%2FzsxOrlqYiayvhB6wO7fKYe2VpS"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:09:20 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58849209a7275b-FOR",
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
    "e917c2b3-981d-4cd5-bb25-9d44d640c4b8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249809",
    "X-Trace",
    "2BC962D5E0C93F6A549B2F6EAE61E2FE07B0220907000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0vGDaaZdJrVHcu65%2BNb78gfxLy%2FQN9ESZtYaWfh6QSVUCN4rde%2F%2BftoOLDMh1X2qgBAHaKzaBBkwYnAZO66%2FZwj9zpSEs9mItEOrTmYSz2jfGKkg2qIwlRk28I2d5pZW"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:09:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58849519dd2743-FOR",
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
    "d7e05443-9b0e-4677-88ed-61ed9052daea",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249808",
    "X-Trace",
    "2B88FB1A87D9A77170742694761B26DA3794896F07000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aWlhFb32qUzz58jeO4uIOtct6xaMZdkr6ePFYYjFC%2FMKpEd7BUgXwKxlirwoDqBj5eseH19lEwnpoUYWuptlk%2BAWq26W00%2BMFZAQwCOTzL2uYkw5LUvjPOGEsZMT59VI"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/create", {
    inputs: [
      {
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
          text_field: "text is also here",
          number_field: "5",
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
          id: "457941098",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:21.159Z",
            hs_object_id: "457941098",
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:21.159Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:09:21.153Z",
      completedAt: "2021-10-29T01:09:21.221Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5884969a052745-FOR",
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
      "880d1d41-fcec-4365-863f-8adc3dbe8c4c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249807",
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
      "2B397346721F6B2F8948E67FDE8BEF575D566CAF4B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yi5bFXwPgzVDdk2p%2BT8WML2DayRsQ6h3rKWcp%2FAYe9wHNcQE8bsQiKiYcxFKI5lyalAdad7LHPYazC15UH1UGVJFzHcF%2By%2FDxn4AlJDcIVboSA7NMVQYHctN8BQg5pQo"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:09:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5884985a63cf8e-FOR",
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
    "a80cdd2d-cc83-4112-a82e-68e39c849901",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249806",
    "X-Trace",
    "2B1570EED228AF0A08177384821EBA6C8C3A175BE4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1T3CoDfSRo5i2zJphYWLEa1Vu0IqWeQk5StTYSp0vDwh2%2FLOwIX861Q%2FTQvH5VKxl5MtOte8Oi5MaDXqidbczlA6fh7WTeHGGKW%2FBWgkIAU7jrvCpkI2sk%2FnpyG6ygV%2F"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457941098",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:21.159Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:21.159Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588555ddb6e078-FOR",
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
      "6eb3afa2-8166-4dde-8887-ada0a4f03809",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249805",
      "X-Trace",
      "2BBCA0E6CEDFE9C68223445745B4DC04779C0B20A7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VZ68QD9Uwb4ncXBfX7CZqLSZJPNrp6lnniGoCNjLFZMrVfUnvCFlx6YeMhTNwtnGhR9i3mPbd6uYyfk884rSWHNi2vVHCQM92mbkN4f266bJDRV3BbvfX4V1y1h8gQ3Z"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457941098",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:21.159Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:21.159Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5885573a602745-FOR",
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
      "8fdca6f4-1520-49b1-bb19-110cae19240e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249804",
      "X-Trace",
      "2BA9A80C9B6A0BCC5CBFA70267B0D88D6F8533C038000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gtMRPB8WSLOUolFq2noxsE5ZvsRoAdrj27deOWCifEfhb38hv9Ysvjjx2L63uMU4sHD0bM4xEvl0DBp2rVdqnIWKRuMzOCiUxwpSn3I8EfEJ0k0lGNqs9P4Ah64LJRO1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457941098",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:21.159Z",
            hs_object_id: "457941098",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:21.159Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588558df06e08e-FOR",
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
      "ad19349d-42bd-47dd-a2f5-cc6b84c48d01",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249803",
      "X-Trace",
      "2B4F43A0B6C3A17353152D60D7E55B65E1CEF8F02B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NnoqilP9hNwRaJVr1sOpVqt6HJfJ7AvgVhioEgbhRFn1IDt57i9LdUOiGtDkjqVz8zPTW1YYh8s3cxzzOIEniUB%2FTKUbxfDTfcgZAZnw9h7iXy3%2FLoa3clhtaUp1uiq4"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "457941098",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Maria",
          text_field: "",
          number_field: "",
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
          id: "457941098",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:52.745Z",
            hs_object_id: "457941098",
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:52.745Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:09:52.739Z",
      completedAt: "2021-10-29T01:09:52.794Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58855a4deee092-FOR",
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
      "1742a9e9-91be-4523-9ed1-5dde6690ad35",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249802",
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
      "2B2E625B145C7F283CD3CFC44072AC40284B88CB8A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=k1407x3rdM8ZNtfgFZLUCNsOVTbEMEvQpaYhaGVFaxt010hXmPjuYR3qxXeOR7GApGD%2BxgZ0uqZvIDVfE%2B37FCHiVKZtq%2BCeWbcbEk2kPDHxPrJ2MELjy9ODsdvFNARo"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457941098",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:52.745Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:52.745Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58855dc90ce080-FOR",
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
      "f60ff448-5c9e-450c-bf2c-1f8d50029ab0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249801",
      "X-Trace",
      "2B0F704BF22D811BD3390F8A38A901E04A9B540795000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9WJoAg0j4Oxiv1hf3JOMr7Nc1UzB31v4QSz9UrXULo2B%2B6BZ1zvnlFoLqy7WLrCwDJWLwDxOPO4gsCstwvQ4%2F9eB%2FlaWWG5SzHXcDQjn0oP8GQpOG2VyCb9KFITecfe5"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457941098",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:52.745Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:52.745Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58855f2eb42743-FOR",
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
      "687ab84a-7b96-46d8-bc03-006d3120a630",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249800",
      "X-Trace",
      "2B23DDB06A43B862C4951B7EC7A5DF52D9E72092D2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qCO3OITUY%2B%2Fmaxj9TbPRLT4dWPGLrKpfmRr4qm%2BLe0EoGIPKF4QqlQtv4ht7zHnaJ1%2FYYhWr1G9vS8sfKFiAd1pt%2FWr1OJ81qiHd7W7BHXQSNde1tmA5YeOQ76RTi9WP"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457941098",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:52.745Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:52.745Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5885616f3ce080-FOR",
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
      "7a59b838-c456-4f25-8783-892a0e948c99",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249799",
      "X-Trace",
      "2B7E0F7008322ABAC6FFEC23829C93086DAF7561B5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vgzfnpntdTzi7Uj4Kr12kNqcpqmw6ETMZzU2dFG1A4I%2FtNOJcDB4vd4rDZkjiuWClF6ucFO2ibjlzBL4%2BtXVLbf%2B5ed9%2FtUWyrTi4IBC4KCpYuPzlHfMaH1zBxaoO3E0"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:09:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a588562ecf8cf96-FOR",
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
    "ac5dd3cf-0ee2-4387-8092-91c0c90b9965",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249798",
    "X-Trace",
    "2B66D2A63DBB3B482FDF5EEDCC1EF813B16C2207F7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X3p69LT3A2Z6zzT66nHYvX4HabI0dxEtg19LFaiD5ldXrtyk2byTpKMCcmy9MVDgQpKGpOufpeZczFHckFnfSphbp4S9KWb7HvQfDReVPy%2FocHCQfqEqOQjagMPnPjT6"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "457956457",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:08:47.695Z",
            hs_object_id: "457956457",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:08:47.695Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5885647c36cf9e-FOR",
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
      "38e51fe4-17eb-49c4-85ac-057c43e141d3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249797",
      "X-Trace",
      "2B590612541C541427FB35DED32A729B467B8C71EF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tqeMUg2Gp60%2B7bw2aqXTgMy1NW2S6pt9uGasreQ1Z7DLbUcwAheAUxd693QzvkZrNOt1pQpflX74Fad5SJNPrQfRJoL45cZ%2FxgGFU8cHOseJ60%2FO51aiaPHc8ZmdJ1Dh"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "457956457",
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "Sam",
          last_name: "Test",
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
          id: "457956457",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.364Z",
            hs_object_id: "457956457",
            last_name: "Test",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:09:54.364Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:09:54.360Z",
      completedAt: "2021-10-29T01:09:54.397Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5885661934e07c-FOR",
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
      "5ae80124-36eb-4340-a337-eaa3d208a22b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249796",
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
      "2BF550D5A884D65A9966E215680B50C61125C65923000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PjuSRbuKK61MUx6xfia%2FoJ%2BI4rKPVq%2FbjJol6Mku%2BGocnZQEVIdq7izJ86uY8fLoyLauM672O0JCWzgROR3GbWSXoNps4E0VGRKy3DcSk%2BralV7Bd1Qphre2MBRh8Bbe"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/create", {
    inputs: [
      {
        properties: {
          grouparoo_object_property: "grouparoo3@demo.com",
          first_name: "Liz",
          text_field: "some text",
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
          id: "457953422",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-10-29T01:09:54.618Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.618Z",
            hs_object_id: "457953422",
            text_field: "some text",
          },
          createdAt: "2021-10-29T01:09:54.618Z",
          updatedAt: "2021-10-29T01:09:54.618Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:09:54.618Z",
      completedAt: "2021-10-29T01:09:54.754Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588567d9e72746-FOR",
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
      "64e2fac7-52c2-4a6d-86a2-14c1cc626813",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249795",
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
      "2B83BB79AE1BACCE54E960885809A87594A6097A72000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T2XJXQFG1ewkbyOfW7%2BZG%2FMxsBQGEM9MAmRj%2FMixmkuoRxkh5qTV3KbwzsTvqm9bRrllvN0nntKs6%2F2KFckG%2B4UW6aZHSyQe%2BBQVEGzyPD203zhe%2Bvu%2FgbOGr%2BzMA6Hy"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.364Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:09:54.364Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588569ed64e080-FOR",
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
      "81d9788f-cd0e-4b6c-8f30-d7b48a0d019a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249794",
      "X-Trace",
      "2B70DD46C519A0D041922116BFFE65F6D405519744000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HTxwSfSTgug707XFBb0kWXIso1pd2ofSgLWvS0h0fJD34wMBG9mj9vhvaWbBZKiMSUjLbCqYUxIxE1oLSwMCm26saaBshUeKS%2F9J5eBuIXnPIp9NzvmLXMWHTSPEfutz"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457941098",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:52.745Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:52.745Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:09:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58856b5c24e08e-FOR",
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
      "5566358b-069b-4b6f-bffc-4e3361c2c110",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249793",
      "X-Trace",
      "2BF2B26E121C8260E9F66045DEDD072569123EB824000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Zx4Nz20MZ9FQq%2Br3A7OwSFnIRr5fKOcZPSwrPCMv%2BZaXTIkqFSWRAdhwSESKKNS2Xc6%2Bw6iekSWhj8bRwNfxMf9amLDzJ3gwhgxRrXtsHxWg8Vhpqi%2FIIfabS3cMTzxD"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:09:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5885700fcacf9e-FOR",
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
    "e8080b4d-61dc-430a-9ed6-9ca86eb742c5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249792",
    "X-Trace",
    "2B4AA5996D11C3FC78424D4CC355D7C8BA93C605CB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CB6eftIHmALGPenbnjRNxknA8FOubfU43LVegYTctWrMWJGC0O4pefBYO5zBlblXog2NCRtRqA64DugQ%2Fwgo5NVmdu4q8qJhL0KVB2KryquElysVwyfOOALQlDbmWJhn"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.364Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:09:54.364Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58862d1aa62743-FOR",
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
      "b44fae38-64f0-4868-9238-bfec428e4ca1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249791",
      "X-Trace",
      "2BC2759F1BA222E034F70CAFB4B499AB8E2C803206000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3dRKMjY4TKixd%2BJie%2FvVrpfY5RzabJrVFL373n6U789hBU9HVD4qWRnaCyK1BhXqKCtEyxWu98YRZ5es%2BohSE431R7M8upAnJTB5600WuSlTAtME1R7Se7ClFs2uRr%2BM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457941098",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:52.745Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:52.745Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58862eca05cf9a-FOR",
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
      "d57fc999-6f2b-40a4-9aa0-469147897319",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249790",
      "X-Trace",
      "2B6743270A5FE0FC7059DB9164C84D58561257D0D9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g1sQK%2BKKMeMhCJOVBNod5XbCCe0LADt947n1n9%2BKhQk3fkcXL56DoKj897E6tnl51op4PTyZJx3DJ1olZL6Lt02aDBpWqvQp3HN0i2moI0l%2FGwocxDJcJZvpXzMWpL5R"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457953422",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-10-29T01:09:54.618Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.618Z",
            hs_object_id: "457953422",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-10-29T01:09:54.618Z",
          updatedAt: "2021-10-29T01:09:54.618Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588630791ecf8a-FOR",
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
      "8ca4a32d-d66a-4ee9-b204-fb8e77186310",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249789",
      "X-Trace",
      "2B2CA4F3657FD9623719E2970553267C4B635A2518000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BzYlN3yVhDPmWFpRIALpzgVdPdWjHawYDQ19n7MyXKsHwJbDMUh%2FgIcNiCuPAu8TkmuqftC4YTv6oIJ4hI8vOTbkQ1Domw6l7HJK8I9yFp4mb9x%2Fy%2BzjomYk4obmXqIz"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.364Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:09:54.364Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588633ca5de092-FOR",
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
      "e3dff61c-a50e-486c-8558-981469fd87cf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249788",
      "X-Trace",
      "2B8F718958F5D4C10229F60D6CAD77A537CAE8B3F5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7OIODxDn5XmpDW124mSC9nzEE%2FXZDEVj9tbAPLW2qtHsJVvtr7tJf5PrNX5811N25svh7t%2FNZmMMMhCmINEwnYGKZeb%2Fyd3Z%2BwF880D8zjb17QcDpb7BUiwgl74VEUv6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457941098",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:52.745Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:52.745Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58863589e6cf8a-FOR",
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
      "ecdbbb3c-47bb-4705-ba6a-7c93b67a01dc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249787",
      "X-Trace",
      "2B7E8C41F9E44648205A8FFC33DAF9BC9FACE4EA17000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zdCVFtl43rxWLsVYsYKogaO0Vwqe7dEkuHvd4WAMSl4RhcJDOc0F9w%2B8iAoussh1yw%2FmNNN0y3nXia1aqx5teD%2BynAJD8BT4XJlXSabDmVvJzhVfOc8XUYh2oZKso3CN"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457953422",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-10-29T01:09:54.618Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.618Z",
            hs_object_id: "457953422",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-10-29T01:09:54.618Z",
          updatedAt: "2021-10-29T01:09:54.618Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58863708b3275b-FOR",
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
      "9a43cdf9-7dee-4150-8970-b6503e648eba",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249786",
      "X-Trace",
      "2BD39D30F35E42569BFFD37FDED3160D536F63DF1E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bddSrbJEJH0APu1%2Bn2sOHgn2NFPHumqVP59vtUhXdoJdwTwBU6yvi0Daq6z4e4O%2Fjir%2FgKPnTOPbbIj2AJhYBzEViqtEQCDu870H74KswqGu%2BRIQCNPD%2FbsTh9mmZ3yU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user0@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user1@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user2@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user3@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user4@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a588638892f2745-FOR",
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
    "0bedc3ff-7a23-4069-ae1e-737464e08ff2",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249785",
    "X-Trace",
    "2BD8C2D750D3E0AD39BB472B28F6A27F0301C99B49000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j%2BkjSzNegYaePlpCVyZISUx6wU0Zbt0KvYaTc%2BIn49KNkGldhdehupZ7%2B1lgIivgObMFS%2Fjd8uuTyj99mo%2BWLckqDdWVLR1JkvQhz%2BRqlzHuVnz8H9KRO5ULJJTo5Ok1"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user5@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user6@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user7@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user8@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user9@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58863a7b6ee078-FOR",
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
    "456da691-3597-4266-8cd3-5b5b1fdd708b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249784",
    "X-Trace",
    "2BC41220B48866046030F468565FDFC4F1E987EF92000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=juqrlrpEVGtDWuB%2Fl2SlXsJx3VvBTA8weRgFDBzPkLnNfT64%2BNM6PdqZRj2dOw2PHR75k7HUXKQaxwagsIXwlYVzmn4luxVsByEv6iA%2FbbgE0xJM80Y5njw93SlrKak4"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user10@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user11@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user12@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user13@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user14@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58863c0e3fe078-FOR",
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
    "8917efb4-3466-4f59-ada5-67c5ca789a02",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249783",
    "X-Trace",
    "2BCE6EF5B8DC0765D20871B1D75EE20FC65FD06BD4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qH5wzIyhoHxsBsrprfo9B1v0drbmo4%2Bh%2F5OiEV4LXVJRjqIc7VtODJTfmLNXiRDSpRPv0loVf7DdJ07Gv01o0hJ3XiINTzCqgZzOaR8lu2VKxxK59Py%2B1PQawjFZH6Yv"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user15@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user16@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user17@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user18@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user19@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58863da81be080-FOR",
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
    "8c24e1f6-4ebb-484f-8962-797624effee4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249782",
    "X-Trace",
    "2B71B289EA3E005B3C484C2E3CC72FE31B273D3C8F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KiPpmr9KhaRh0SYn4%2Bgeui0ecY2u1ROb7lQDoB8w%2BA%2BKoDlHMWdGtjuo%2BQB%2FoNJFxzhOUM%2BgRnh3N8J49JChnqk1wXX1MutbLsdIhzJ2OBIb3SMVvtaWvNidCh2GdKHR"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user20@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user21@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user22@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user23@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user24@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58863f5b48e080-FOR",
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
    "2361db91-e09c-48ca-93bd-acf2a278455f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249781",
    "X-Trace",
    "2B9AD16F78A110144D797C0DE7C9C4D4ABD9E930B9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=z1o%2BIOq0RRE7BkzRWFNdTPX8FCMqjHVw0xRUKeOfK62SSnDZ8jyDx0%2BafKJC300Ljf7Hip18c%2F4D%2FqLAwcHdVytNoGHnR1i9o46%2Bm3sorV%2FM%2BvUrRCMfu5VC%2B0HKmfn%2B"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user25@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user26@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user27@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user28@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user29@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a588640e88ee092-FOR",
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
    "e8bb1abe-dc1d-4ce6-9952-8204ba2b701c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249780",
    "X-Trace",
    "2B50F55867050DB8EC1650906974073FF7DB58F554000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0jPz4H2Sl32lke60bibg0NAUSjFiUY0ZnIa3C3stBnmWBK5AzAK5%2BxMHCSWKW7Ace5pXEiRhe7JslgM1mqjVGUEAjoZg5em3IcktIdlnQwmGuXnTV%2BzvhxdSB4EQ5iHt"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user30@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user31@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user32@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user33@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user34@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58864278be2746-FOR",
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
    "3e5bb6cb-45c6-432a-a9c0-b7f9361f4b07",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249779",
    "X-Trace",
    "2BEA7EACE2B8E4C50995E67A99D314E3F17B2D52AF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=txLJ7WKZc9dND1Qcm3Li1u4HQPgFTLWDN9grthDjOiN4ORMuQViJrwsY4SeNOO0speSGaQSqjtYeqBF1DM33hpk7ahYAbh7%2BdzwF0A%2BwyxhTMuh96jLbb5kQG8qLwX9O"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user35@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user36@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user37@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user38@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user39@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a588643fac62749-FOR",
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
    "82afb389-489f-41ec-85d7-c1de9b40e780",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249778",
    "X-Trace",
    "2BBCAEF46BA062011DF9F49BC31AB1970F0CAC50ED000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rEcK8%2BLxt%2F%2BnztDdUQL8rxcO%2B3IqST2e64oMw6BihU%2Fbmyq1CqoIqoqe6p%2BlcEwyn%2FcsIql%2FRl5rC4I5qekGvowZu%2FHG%2BSRqVkWlkgzBTodZJlOHXFwprSYr9Jr20%2Fcl"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user40@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user41@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user42@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user43@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user44@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5886458b65e07c-FOR",
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
    "a13bcecf-a686-40f9-be5f-a922130de286",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249777",
    "X-Trace",
    "2B4BE332024BD7FF1F162962FD54257A7FE775798C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LNAvbwayhWG8bNJITAO1ht8j1U%2BaOeiNw%2BH8czXHwQs21yWbSxCOER6oYvJZSiZsgpDqGE3kaLsLztoXaYT2fhXvEio9MNmsI6ySrZQKQW%2F6Cnh9JJE21oji88XEIjkY"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user45@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user46@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user47@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user48@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user49@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5886471d952743-FOR",
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
    "7588607f-430e-4e80-9d30-ae5e2fb872a5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249776",
    "X-Trace",
    "2B5AD4453823962D0F45A0DC21E83C4FC867E40EC7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EyE8%2FUZLqw1jsl4KdLrvz2ZaIYHAzzjWNVH%2Fn3Oqi8zR4q1F1O8TAReRBNWi%2B%2BZ3GvhU2lIq226qijMTIUpmPH5FpgJd%2ByE7lqkmKiT1l0J8cWp3mfcYtWpjTmOwQqKj"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/create", {
    inputs: [
      {
        properties: {
          grouparoo_object_property: "user0@demo.com",
          first_name: "Fist Name 0",
          last_name: "Last Name 0",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user1@demo.com",
          first_name: "Fist Name 1",
          last_name: "Last Name 1",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user2@demo.com",
          first_name: "Fist Name 2",
          last_name: "Last Name 2",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user3@demo.com",
          first_name: "Fist Name 3",
          last_name: "Last Name 3",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user4@demo.com",
          first_name: "Fist Name 4",
          last_name: "Last Name 4",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user5@demo.com",
          first_name: "Fist Name 5",
          last_name: "Last Name 5",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user6@demo.com",
          first_name: "Fist Name 6",
          last_name: "Last Name 6",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user7@demo.com",
          first_name: "Fist Name 7",
          last_name: "Last Name 7",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user8@demo.com",
          first_name: "Fist Name 8",
          last_name: "Last Name 8",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user9@demo.com",
          first_name: "Fist Name 9",
          last_name: "Last Name 9",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user10@demo.com",
          first_name: "Fist Name 10",
          last_name: "Last Name 10",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user11@demo.com",
          first_name: "Fist Name 11",
          last_name: "Last Name 11",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user12@demo.com",
          first_name: "Fist Name 12",
          last_name: "Last Name 12",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user13@demo.com",
          first_name: "Fist Name 13",
          last_name: "Last Name 13",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user14@demo.com",
          first_name: "Fist Name 14",
          last_name: "Last Name 14",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user15@demo.com",
          first_name: "Fist Name 15",
          last_name: "Last Name 15",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user16@demo.com",
          first_name: "Fist Name 16",
          last_name: "Last Name 16",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user17@demo.com",
          first_name: "Fist Name 17",
          last_name: "Last Name 17",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user18@demo.com",
          first_name: "Fist Name 18",
          last_name: "Last Name 18",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user19@demo.com",
          first_name: "Fist Name 19",
          last_name: "Last Name 19",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user20@demo.com",
          first_name: "Fist Name 20",
          last_name: "Last Name 20",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user21@demo.com",
          first_name: "Fist Name 21",
          last_name: "Last Name 21",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user22@demo.com",
          first_name: "Fist Name 22",
          last_name: "Last Name 22",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user23@demo.com",
          first_name: "Fist Name 23",
          last_name: "Last Name 23",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user24@demo.com",
          first_name: "Fist Name 24",
          last_name: "Last Name 24",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user25@demo.com",
          first_name: "Fist Name 25",
          last_name: "Last Name 25",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user26@demo.com",
          first_name: "Fist Name 26",
          last_name: "Last Name 26",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user27@demo.com",
          first_name: "Fist Name 27",
          last_name: "Last Name 27",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user28@demo.com",
          first_name: "Fist Name 28",
          last_name: "Last Name 28",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user29@demo.com",
          first_name: "Fist Name 29",
          last_name: "Last Name 29",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user30@demo.com",
          first_name: "Fist Name 30",
          last_name: "Last Name 30",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user31@demo.com",
          first_name: "Fist Name 31",
          last_name: "Last Name 31",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user32@demo.com",
          first_name: "Fist Name 32",
          last_name: "Last Name 32",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user33@demo.com",
          first_name: "Fist Name 33",
          last_name: "Last Name 33",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user34@demo.com",
          first_name: "Fist Name 34",
          last_name: "Last Name 34",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user35@demo.com",
          first_name: "Fist Name 35",
          last_name: "Last Name 35",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user36@demo.com",
          first_name: "Fist Name 36",
          last_name: "Last Name 36",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user37@demo.com",
          first_name: "Fist Name 37",
          last_name: "Last Name 37",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user38@demo.com",
          first_name: "Fist Name 38",
          last_name: "Last Name 38",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user39@demo.com",
          first_name: "Fist Name 39",
          last_name: "Last Name 39",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user40@demo.com",
          first_name: "Fist Name 40",
          last_name: "Last Name 40",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user41@demo.com",
          first_name: "Fist Name 41",
          last_name: "Last Name 41",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user42@demo.com",
          first_name: "Fist Name 42",
          last_name: "Last Name 42",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user43@demo.com",
          first_name: "Fist Name 43",
          last_name: "Last Name 43",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user44@demo.com",
          first_name: "Fist Name 44",
          last_name: "Last Name 44",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user45@demo.com",
          first_name: "Fist Name 45",
          last_name: "Last Name 45",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user46@demo.com",
          first_name: "Fist Name 46",
          last_name: "Last Name 46",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user47@demo.com",
          first_name: "Fist Name 47",
          last_name: "Last Name 47",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user48@demo.com",
          first_name: "Fist Name 48",
          last_name: "Last Name 48",
        },
      },
      {
        properties: {
          grouparoo_object_property: "user49@demo.com",
          first_name: "Fist Name 49",
          last_name: "Last Name 49",
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
          id: "457905061",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905061",
            last_name: "Last Name 33",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905064",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905064",
            last_name: "Last Name 4",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905045",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905045",
            last_name: "Last Name 32",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905071",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905071",
            last_name: "Last Name 16",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905042",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905042",
            last_name: "Last Name 35",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905067",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905067",
            last_name: "Last Name 2",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905041",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905041",
            last_name: "Last Name 5",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905031",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905031",
            last_name: "Last Name 12",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905033",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905033",
            last_name: "Last Name 19",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905066",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905066",
            last_name: "Last Name 29",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905075",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905075",
            last_name: "Last Name 1",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905065",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905065",
            last_name: "Last Name 10",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905040",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905040",
            last_name: "Last Name 7",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905054",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905054",
            last_name: "Last Name 31",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905078",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905078",
            last_name: "Last Name 13",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905059",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905059",
            last_name: "Last Name 37",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905060",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905060",
            last_name: "Last Name 34",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905034",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905034",
            last_name: "Last Name 36",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905063",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905063",
            last_name: "Last Name 3",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905043",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905043",
            last_name: "Last Name 44",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905032",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905032",
            last_name: "Last Name 42",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905029",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905029",
            last_name: "Last Name 49",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905057",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905057",
            last_name: "Last Name 28",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905039",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905039",
            last_name: "Last Name 48",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905047",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905047",
            last_name: "Last Name 40",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905048",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905048",
            last_name: "Last Name 41",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905035",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905035",
            last_name: "Last Name 24",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905036",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905036",
            last_name: "Last Name 18",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905030",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905030",
            last_name: "Last Name 30",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905069",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905069",
            last_name: "Last Name 22",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905056",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905056",
            last_name: "Last Name 38",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905050",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905050",
            last_name: "Last Name 15",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905052",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905052",
            last_name: "Last Name 21",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905055",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905055",
            last_name: "Last Name 25",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905044",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905044",
            last_name: "Last Name 27",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905073",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905073",
            last_name: "Last Name 20",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905038",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905038",
            last_name: "Last Name 11",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905049",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905049",
            last_name: "Last Name 39",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905076",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905076",
            last_name: "Last Name 8",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905070",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905070",
            last_name: "Last Name 26",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905037",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905037",
            last_name: "Last Name 0",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905077",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905077",
            last_name: "Last Name 14",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905058",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905058",
            last_name: "Last Name 43",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905053",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905053",
            last_name: "Last Name 46",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905062",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905062",
            last_name: "Last Name 45",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905068",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905068",
            last_name: "Last Name 23",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905046",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905046",
            last_name: "Last Name 47",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905051",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905051",
            last_name: "Last Name 9",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905072",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905072",
            last_name: "Last Name 17",
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905074",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905074",
            last_name: "Last Name 6",
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-29T01:10:30.625Z",
      completedAt: "2021-10-29T01:10:30.768Z",
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588648ccfee074-FOR",
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
      "c20590c4-26f0-4701-aa9c-23cea4534437",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249775",
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
      "2BAD76859D69550648FB50C4846E1FCF37E7B37E44000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=M3C%2B%2B5ysttnyz0IrN4kjxQ5aF1vct9ftI5DFm9eHJvd3An28wreJ1sGxEanYS%2BUINU3r04apOjKX0rRG3pQBC%2FCTcwiQl7BCVWjxnaF%2BlnDAB9p%2FcZGv4o7Z42bOkbUa"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user0@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user1@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user2@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user3@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user4@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58864b0b7b2745-FOR",
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
    "d49a4603-0b07-46f2-83e3-aaa1acda9d1f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249774",
    "X-Trace",
    "2B0BD73992A83E57F642D99365AF4A57AA1C04D323000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vupmVju1cMCwcW%2FNdeDCZVvNjLEe0rJBf2xLQwarx08wQlV71ZeV8ThN4guwZXu2zOY%2FEF9YO8FKP2J7MqcOJr77S69T0b6LDD45cvPWQ1NPVFurEvoLXxgXyXsMr0uS"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user5@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user6@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user7@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user8@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user9@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58864c9aca275b-FOR",
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
    "30bd4998-7746-4767-9966-7da572b597cb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249773",
    "X-Trace",
    "2BE6A000E479E0579C28F87D1FB843A9EB9159196E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mzlyejg5KWtQKs1Q30sllp0FioFR86pXh5pZ%2FlfN2gBNfffNc85IZH%2FtL%2F9VPPyyCwl4vHuf9qxca%2BG2Xfun51yKyxWGEUZfqV9QI%2Figo%2FTwg5pUVQ0oC2WBEK%2FB3VCA"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user10@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user11@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user12@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user13@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user14@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58864e3e3dcf9a-FOR",
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
    "f34a9720-fb11-4cc1-95cf-f62ff568709c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249772",
    "X-Trace",
    "2B0724B275DDB9E5245E9968E93D9BA578B71BE278000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TWIvk2J8oTRPNykU37pe5EWN9shvkibJrdb4FE8%2F14qCGlV13w7HdvQUm32VfrjbmYRfqSKVGYwh02xsPuazQJzgEwQnRUR2mJ0CbN%2FvHJp37mtYKuVwmo8kQPthOR8a"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user15@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user16@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user17@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user18@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user19@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5886518a9c2746-FOR",
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
    "6bb1bba1-e287-4d6e-b13d-3d745d105119",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249771",
    "X-Trace",
    "2B4BE7B6A73C81A80C5D9BF0A5B78C47E542C0416F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rjDgdpupFae4cLRD8l6b6RrIEPQBkIe1EbVWdP1fRIEX%2BqSetvQ7UcctRE9gl5lzNqSE%2F8MTspuyHjOZbBmqaRt7x4rYGdgvlyBBMsDxVuPNT92yI0AtG7SCH1jQibuP"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user20@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user21@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user22@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user23@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user24@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5886531ec3cf9a-FOR",
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
    "8b8c74e8-81d0-4d33-9cd8-503eb9b5c807",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249770",
    "X-Trace",
    "2BEC428E4C968F5305B8D55675F334E0CCE39335EA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zx3zOi5y1lCrVUONATSmXhIXBD9HEz2luP23F7PJ%2FPOlA9AZHskp6xC669fvRiwMoM7jjZat3h8wbksecTh%2BBv1Lhz3Js0fbnNKAuVO3c21EwAN1BKHmlQrzRhVYbQ0L"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user25@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user26@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user27@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user28@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user29@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58865499732746-FOR",
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
    "7663be27-011d-4410-b41a-4b8a3d3d574e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249769",
    "X-Trace",
    "2B52BEA427DC6F03D7D95EA42420E8376AAF4808D8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ceMgvw4l78nJqXtq%2FUegpEMb4HoxRYsEoJQ1kLhi%2B%2BekJxlQ6j%2BSDpsS0aikyfIbcUrAH1GUbpdpsyW99kko2J2F8NU1%2BgAzTfDFKep3uImEN%2FBV7XqNBOgxx0ULyDzf"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user30@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user31@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user32@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user33@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user34@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a588655fc052746-FOR",
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
    "a11c04a2-4694-493c-83c3-3eafaf131719",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249768",
    "X-Trace",
    "2B2EF28A4F20BB687A628536E882BBABC2837AE1CF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D9ylXYKvRAB4YPoC5unNAzNjfLUrLRB49wgKREMwMdEfeF8SkmIq5jn1pPsmfQ4MJYkCq2JbPVwXACDKWtZh91faMRJC%2BBbGTeT9F56iq0GCV2CkVg3liONwyCDV9W2W"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user35@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user36@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user37@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user38@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user39@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:10:33 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a5886575d8d2743-FOR",
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
    "542d1173-6aa1-483c-80bd-f6adeffe834a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249767",
    "X-Trace",
    "2B6340D4809ED2AB1F895969E3D43F19CF2055A79E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0GP0AcfY1Hj2EwgnsQpGeqW5abc3wXLtL8hCURdRPTMfbf%2BS2TCnXvY0TdQCS8SMC9Zajx7Rcn%2FUSaBRJM12CnO5Gtcsmbsw3Wnwu8FM1v2TkvIDgR314gbEr%2BTBYfar"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user40@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user41@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user42@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user43@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user44@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905043",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905043",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905048",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905048",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905058",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905058",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58865c4afd2745-FOR",
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
      "68b1991c-27d9-43e4-833b-411041f08a1c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249766",
      "X-Trace",
      "2BCB4E43A918F498AC7C5F6EEEAD91EE305D0B76DE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ivx%2FRbdxcftGYGj38tWKUuTEbqPhEfTAyemviEcxyoawvZ0PaQAsMnYAXGHgw7r4F2ZttNQoVHUnu%2BLOWeWUw6MygBPchqg1zbEEarlzOJ0gvoql53cMU2CD1MxKj7ab"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user45@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user46@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user47@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user48@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user49@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905029",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905029",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905039",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905039",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905046",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905046",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:10:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58865e380c2745-FOR",
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
      "fe6adc1f-e23c-426b-ad09-11cd1078a296",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249765",
      "X-Trace",
      "2BD8014B21EC958675A530EBD385A98C6D01DB0756000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2csujhyrH42uwMok1gqNKnTji8P8SiNSj7XOF5dfwy8sVD0K6hAvBFlywUoDamc6gSFIRmXxcfVeExKaPekndVrEaoYPB%2Bzsy%2FJXvMzc%2FZWLJgIxWHp6DEHnmPoyUsbj"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user0@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user1@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user2@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user3@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user4@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905037",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905037",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905063",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905063",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905064",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905064",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905067",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905067",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905075",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905075",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58871b6e70275b-FOR",
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
      "f740d675-0426-4cbf-9345-766cc522ec0c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249764",
      "X-Trace",
      "2B03560BDDF7F7BF266E08810E181F53572476D27C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=m14eelNWtsyt3aSBu9Ld%2BZh%2FujlHrInM3y3Nkbq03HAANDAF1mWkR7O%2FrLARv%2Bcycf9WnrBkjbhlmHu13n91UP1UgdcE7c6uJ49pzX7mRVGmgoXE%2BewToebMMFktqJ%2Fv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user5@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user6@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user7@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user8@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user9@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905040",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905040",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905041",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905041",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905051",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905051",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905074",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905074",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905076",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905076",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58871d4d3d2749-FOR",
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
      "18d3c42d-672a-44a2-be0b-305ce6f82191",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249763",
      "X-Trace",
      "2B6A9A6434BD8DA983351C47CA03418E31DF10442A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uf2vyYNwbt4bKjHlFdb%2FExz0BCBl96N7yw3%2BWzbZDIp05zqRj4BOxzTBOCHQZj2i7Q5YLTWHiJ22A8VG7RXg9jVd39lX%2Bdnd5DzYZdiaVQ%2FzDfP%2Ff7ZNR%2FzptzCIRaH4"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user10@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user11@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user12@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user13@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user14@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905031",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905031",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905038",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905038",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905065",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905065",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905077",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905077",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905078",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905078",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58871ed8c8e080-FOR",
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
      "afa3817a-4704-47e5-8026-877fd4e30dae",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249762",
      "X-Trace",
      "2BF3A0BFA5AF1209018D7C413AA46646340B49F935000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RtJdIJtp4y2ol%2BrH2f4CIABOJeV6%2FkIF8%2FZKbvVcewRHWl2OrekFhFSN%2B0D4cMImXrGRCeWO1KacH0JxaHcMf7pjNd7wa7gCnsrRDxwfo1TeVlAIW5w5yExlbgprzE7r"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user15@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user16@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user17@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user18@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user19@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905033",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905033",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905036",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905036",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905050",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905050",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905071",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905071",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905072",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905072",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588720cf4ae092-FOR",
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
      "ebfd7ef3-05ee-4f44-9f6b-c12e0b5f79f9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249761",
      "X-Trace",
      "2B6D303B3BE35E27B4D58EB3AA2607C979FEEF30BE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EMc5RTP0Od8LHx6TIAG4Ho3epX218UpSXtmiCYPvuSeYN9GdEsJde11qxxODRcwbLI5pR%2F2LcW4csczkJeVFPSimrBowZT8i9iIPqCaQ41nqzzn1hduyBwSBWEw%2Bgt4b"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user20@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user21@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user22@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user23@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user24@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905035",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905035",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905052",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905052",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905068",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905068",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905069",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905069",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905073",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905073",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5887245adee080-FOR",
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
      "8921562a-6481-42f3-8ff3-609b8dff4037",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249760",
      "X-Trace",
      "2BBA9634E89C1BF72B7B58A46F92C7A567D79D47C5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jl0PN9ry5jOVJSeULfu0M6cOcoHuDhhgk2WZ0cl6Dc3o78LEVGCmpYxSUA%2FMLPeCkSsHW7gwtp0wHbku%2BnQRr00bsXAztg7R%2B5rmfV8lveCoxqgKit2xNjm9Pq%2Fd00gR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user25@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user26@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user27@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user28@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user29@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905057",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905057",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905066",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905066",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905070",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905070",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905044",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905044",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905055",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905055",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5887262fd8275b-FOR",
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
      "e483758b-8c13-40b5-95fa-50e07bb409f0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249759",
      "X-Trace",
      "2B14AB97825C2C1FB49496217AC5DBFFAA8C9FCF34000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BQ%2Bdus9gEPbMC5CkepC554l7Ns%2FS1aq74qXK0YzgzMT8QLbGlLlgmVyFJvSImvSbp1Er8bo8e6wJ9tpL8WjwwNGYNdrP5Zrflp04x9vmHplqg3JGGi39559pE%2FYobvSD"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user30@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user31@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user32@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user33@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user34@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905030",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905030",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905045",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905045",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905060",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905060",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905061",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905061",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905054",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905054",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588727bfefe08e-FOR",
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
      "decfe2e6-4d21-4840-b42b-ccd65e78c7ec",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249758",
      "X-Trace",
      "2BF8E91CEF082E27311E3F6E73165B640EC8EA9B9F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RYiUe9nZFW%2FSuIou%2FLh6WHi6%2FZDjTC%2F8Ip1Tzgdx89KsA0mkfcynvdQZVFbInSr%2BjInQY%2FdAhUvh6vaynO6z39%2BRBOJAZ5EJ81plT2Nz0l164tNNRes3f9EZVFTEOLXX"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user35@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user36@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user37@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user38@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user39@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905034",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905034",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905042",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905042",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905049",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905049",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905056",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905056",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905059",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905059",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58872b1dcecf8e-FOR",
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
      "77c7fa49-7963-45a5-9271-f29025829b7c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249757",
      "X-Trace",
      "2B4EA4A00FC79CC73725F3B39622C897FD7DB2011B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FudkPhpNJYka9xTO0H%2BXsyQhvamwJgcNXiAjNzwl4STme6JEKaM%2F62vDZjhZXICK2X98gMItIYVzW0xi8TYku2tH6wDDlEPlN%2BKgCxqiFCP7QQgjJ9cFsB%2FQj4RtHxqI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user40@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user41@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user42@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user43@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user44@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905032",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905032",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905043",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905043",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905047",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905047",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905048",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905048",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905058",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905058",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:07 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58872ce9992745-FOR",
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
      "b22bca21-e1f7-4391-a101-cdaa86775faa",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249756",
      "X-Trace",
      "2B28BEF2E942CFB8D9CF4E4FF18062DF0598415210000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uwKl0Du6qzqzoph4il%2FM3OE%2FjfdRggSM%2BaR4hQEgraX8BoQqpC%2BvBJRj%2FVc3ti7SnCm32qHreu2BRyEf1c%2ButmQTGHySgn4FP%2FFOyjb7oRRoFF8ao1Tw4RdsZ04sYdMa"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user45@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user46@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user47@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user48@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user49@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905029",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905029",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905039",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905039",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905046",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905046",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905053",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905053",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905062",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905062",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:07 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58872e8b8b2749-FOR",
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
      "d74b49bb-0984-4510-8e5c-796878fbf8fa",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249755",
      "X-Trace",
      "2B536C7D7DEF59631F6668B567AB29E154FF03CE7F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fZQl1S4jaV%2BL6QqRsgVzKdu8cn7oX86gWxhMw4kWi6HHVyw%2FzWOJquxycCEotWmtNti597hCbyUclOw%2BMDnvekf7kOJSDai%2Bq6MnIc6Ksgh5Ps3YdjSPyPHehZC784gv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user0@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user1@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user2@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user3@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user4@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905037",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905037",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905063",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905063",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905064",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905064",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905067",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905067",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905075",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905075",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:07 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5887303dde2755-FOR",
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
      "394ef535-5f94-46d4-b469-747453b2cee0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249754",
      "X-Trace",
      "2B9526A64D479AEAA3803D0CBD3EDF92DD3303B662000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RPiEuka3gHkDz3FB8TfAOxe5N5GSbWWl9yar0ckpjd07OPMTd%2BphGGy%2FeV71ix6L9HCm%2BBGGARXcX1ORyRvXopykn187WPnlRlSlXwLu7PHcyYHFJoU7dMx0Du%2Fql6Ds"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user5@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user6@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user7@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user8@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user9@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905040",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905040",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905041",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905041",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905051",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905051",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905074",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905074",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905076",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905076",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5887324bf5cf8a-FOR",
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
      "25a2c625-cef8-4f7c-b3fa-06593fda28b5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249753",
      "X-Trace",
      "2BDCE4F16A45A440A7353CD31145755889C0F40B76000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LqDvoU2IrBwo3V2vBpsnk5xu0kwKaAkr51oBFDRzf85fOFN7YQJQ5vAOmLovSOzfx9xeOEKk30CGjU61IQ3WyKBaHqogxD9Ih0xFeUXIB%2FN%2BV%2F3pE4lxEVXq0J7AedaK"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user10@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user11@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user12@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user13@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user14@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905031",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905031",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905038",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905038",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905065",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905065",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905077",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905077",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905078",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905078",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588733cd71cf8e-FOR",
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
      "ba4f9b85-f247-49ad-8e59-9d8d386c8787",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249752",
      "X-Trace",
      "2B0B47E907461285686EED93EB51D808DE551EEE98000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=05%2B1uufhKcnZVcoHtgF61KWjSPPTCie%2Foo%2BseufK0R6qfj75pRL3YXzXE5DoTpANbuzzKtITKNRbRsbzpU4MaAYO%2Bgm8rWdLmuadMF59KcsZKmM0iNXQKuD5Yrt3FwAO"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user15@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user16@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user17@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user18@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user19@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905033",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905033",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905036",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905036",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905050",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905050",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905071",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905071",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905072",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905072",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a5887357e32cf9a-FOR",
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
      "3d829eda-15cf-4c3b-9529-e12ede18f1ea",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249751",
      "X-Trace",
      "2B94193900669FD632E862432B79169119867C36B1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E%2FGd17Yuk6AxdAiAgHKPLqQL9OoVKK8jlk3QT7mBCQ4GdZDVxZsDD%2FTWcS7Ukid4qnNezAAEk4WSojozE6R9CHLZ6otoBHzy%2BYHB9yIUUKJ2oQoFsVqaBBQ04sfKb5dW"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user20@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user21@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user22@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user23@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user24@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905035",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905035",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905052",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905052",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905068",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905068",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905069",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905069",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905073",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905073",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588738e9972749-FOR",
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
      "5f30e35c-5e22-4dae-8f9d-97da7dc31225",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249750",
      "X-Trace",
      "2BBC4662DC234120BCFD6582630416F53DBD9C98BC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=va4%2BgEKzAo9To7z9UgoWejnoaXTzUBHY%2FqOyRKisQFVIsdZjmn3YhEa6E3BJ5Dz%2FZXwLimI2PO1tPfKS2WLG11MAe3uqHjDHxLxgaKRZQCTc%2BWEdouZTWERhpFg6rt%2FT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user25@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user26@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user27@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user28@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user29@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905057",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905057",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905066",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905066",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905070",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905070",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905044",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905044",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905055",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905055",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58873a6cab2749-FOR",
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
      "2dea6a40-8f84-4374-9351-14416864dc17",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249749",
      "X-Trace",
      "2B8F9E26E5737839BDA2C9B9DCFCB184C08ED36538000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fH9MYYbMceTzVTfxHhLMhdF8P0swdrIYvv4t%2FNlyOLm65IhVBxK3V1PI9nEls3hLHxUSjuWnCaTojJrlFtOyU8UXK%2BTAWX3y5XgmCoNB3YvLDGBZb6lFNK6FuLL4ZCTM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user30@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user31@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user32@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user33@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user34@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905030",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905030",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905045",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905045",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905060",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905060",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905061",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905061",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905054",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905054",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58873bd969cf9a-FOR",
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
      "7512665f-50cc-4e77-ace2-2366221e3d5e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249748",
      "X-Trace",
      "2BD5A7B60C94D2E14BA339C172A5D69D28BD574664000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gco1zO7zZpT4O%2FolflsqLg0YFTxpQrXw85goe55WfNXgnta%2BEQ4Jkgl31sB3jx3mZuSH2dAoJfCYI%2Fknvo5J2y62zFrBS5YVmVfhu6%2BAVhV4qT2Kf4S9Qc4eopiOpGyv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user35@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user36@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user37@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user38@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user39@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905034",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905034",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905042",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905042",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905049",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905049",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905056",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905056",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
        {
          id: "457905059",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905059",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58873d8b492743-FOR",
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
      "73eac5b2-9855-46ba-92c4-233e6adab4f3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249747",
      "X-Trace",
      "2BFF40C90BCC7D2F8C8807E36849121D20D855C99A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eZrgmWufVKaWT194yOVHrtKPbE6lS4Su2zRR9tvihcVwRbp1UtZqEiU38KUF4C4RPIOEJpub7nwQprcBGNJ2MZB%2B2RPwFnw%2Bdrs%2FVXKCAQunOqHeka7aW662Mlp7SbiR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user40@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user41@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user42@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user43@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user44@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905032",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905032",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905043",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905043",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905047",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905047",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905048",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905048",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905058",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-10-29T01:10:30.626Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.626Z",
            hs_object_id: "457905058",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.626Z",
          updatedAt: "2021-10-29T01:10:30.626Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58873f4b282745-FOR",
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
      "f05f6480-9fcf-44a3-90d0-e460032e6488",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249746",
      "X-Trace",
      "2B6695AE129B0FCB266FD3703B8BECBB0931264D1A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y5yl6tZvyzTPaR2L9UuAEOxKxJBcTrNKxdNGnkLuWAOgwrzaQauBAiOULBOw8iG5WTYuLXPIdS9ujlxOUxm3oJtgnA%2Fq7XoVoJWtAeVqMOhpccyLjFvQnTUp3GKYZHu5"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user45@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user46@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user47@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user48@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "user49@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457905029",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905029",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905039",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905039",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905046",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905046",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905053",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905053",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
        {
          id: "457905062",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-10-29T01:10:30.625Z",
            hs_lastmodifieddate: "2021-10-29T01:10:30.625Z",
            hs_object_id: "457905062",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-29T01:10:30.625Z",
          updatedAt: "2021-10-29T01:10:30.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a588740cc3ee084-FOR",
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
      "d52c4767-8d4e-45fe-a792-47b609808c3e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249745",
      "X-Trace",
      "2BB5F9F94DD7767F030B2CF6D07BC87BA1A8BAA41F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2F5hT2SmkglyIjQpQQP%2Bdcw4esA2an1uhKk7%2FpcVh8PgunFapfKs7oQ1NPeUdRs7o2jp8L6PdIyzGjGbX%2FkxZFvzWTdRcilieuPIdZc%2B5hGt9wrrHArJs6Xik%2Bpwd1CsY"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "457905037" },
      { id: "457905063" },
      { id: "457905064" },
      { id: "457905067" },
      { id: "457905075" },
      { id: "457905040" },
      { id: "457905041" },
      { id: "457905051" },
      { id: "457905074" },
      { id: "457905076" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Fri, 29 Oct 2021 01:11:10 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a58874249c72745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "34507002-254b-4a88-8df9-4acab1e3e487",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249744",
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
    "2BA8693E186346FBA4698DE46D7ACE06B45CB96AAF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XAQaeUvViIMkYeP1UxD98NPHGs9zmOvxtXrUwN4ugIdwLEHuMFuH8c2NV%2BJXDP9mnXUYko1OacJ%2BqG0u3yAYrfZuEOh4kPjbgJjI0vK8Pja1xzpsC8wT7rJ24vGVUOfF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "457905031" },
      { id: "457905038" },
      { id: "457905065" },
      { id: "457905077" },
      { id: "457905078" },
      { id: "457905033" },
      { id: "457905036" },
      { id: "457905050" },
      { id: "457905071" },
      { id: "457905072" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Fri, 29 Oct 2021 01:11:10 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a5887441a322746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3022e645-21c1-41a9-a0f4-10ce1eb5fdf4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249743",
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
    "2B0A99DCEAA0DBE3C26F3AFA98DE75E6BB4CE0EB86000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JwN3t5Ha5ky0NPoQGNIcmfUdhW%2FiwR6slZqbh3Us3QobWWTSJiVrbQqye7bQrbPdjufjjNU1%2BvJpOAQsD6snmxe8F8a9q9J2YzZ7FkRODfSi7ANK4unapiu6uo21AmWa"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "457905035" },
      { id: "457905052" },
      { id: "457905068" },
      { id: "457905069" },
      { id: "457905073" },
      { id: "457905057" },
      { id: "457905066" },
      { id: "457905070" },
      { id: "457905044" },
      { id: "457905055" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Fri, 29 Oct 2021 01:11:11 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a5887460a19e074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ff9b254e-afc5-46b5-8554-bb58ad7da525",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249742",
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
    "2BDBF7015039C071485EB7BE71D3BD011B0E2310BE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ywwXX1lxx0Fq4v8b%2Bp2YMusaA44bnIueNJyEOso29TBrw4CeI6eldW95GbBVy8cklhejjdDLJdHhSc7NgV0tdtaQcuaguChlyG6MprlM0H5TMQIOfbY%2FiB7gF3U1gj%2F7"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "457905030" },
      { id: "457905045" },
      { id: "457905060" },
      { id: "457905061" },
      { id: "457905054" },
      { id: "457905034" },
      { id: "457905042" },
      { id: "457905049" },
      { id: "457905056" },
      { id: "457905059" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Fri, 29 Oct 2021 01:11:11 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a588747ae962743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b167abd1-e0ac-4ecc-82c1-db645ac45423",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249741",
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
    "2B693C5A1C74F593F42F85E8F05A87DB546AC181F1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZG5KLbQOLSSKegnZiq2ua4Al5O5iKbC1Ewkelr%2FcPlOg8kpdKbA2odx6dgvztaHaIIluy3xbEeRR96yEknmZgik9pkcrCI3Aft52c8S%2FO2ts2y0KZgRCWQBTSlX96rSk"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "457905032" },
      { id: "457905043" },
      { id: "457905047" },
      { id: "457905048" },
      { id: "457905058" },
      { id: "457905029" },
      { id: "457905039" },
      { id: "457905046" },
      { id: "457905053" },
      { id: "457905062" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Fri, 29 Oct 2021 01:11:12 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a5887496de9e092-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "06ec5204-77a1-454d-8cc8-fb58ea19b70a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249740",
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
    "2B91AF05D0A8DC971BC7704742DB016C2FA7C47E7A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ImjssCaFBdGi462XNxcStH1JPBouRUrqXgfu7WtXKA7Z3zO8cbLDohSbhahlNwCdcAqxhCdmyyOSH2TevI38VIEk8PtCTDHnu2JM36Q4JQrUAoq1ayNvl2%2BmhUSWXzwX"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
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
          id: "457956457",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-29T01:07:08.240Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.364Z",
            hs_object_id: "457956457",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-29T01:07:08.240Z",
          updatedAt: "2021-10-29T01:09:54.364Z",
          archived: false,
        },
        {
          id: "457941098",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-29T01:09:21.159Z",
            hs_lastmodifieddate: "2021-10-29T01:09:52.745Z",
            hs_object_id: "457941098",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-29T01:09:21.159Z",
          updatedAt: "2021-10-29T01:09:52.745Z",
          archived: false,
        },
        {
          id: "457953422",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-10-29T01:09:54.618Z",
            hs_lastmodifieddate: "2021-10-29T01:09:54.618Z",
            hs_object_id: "457953422",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-10-29T01:09:54.618Z",
          updatedAt: "2021-10-29T01:09:54.618Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Fri, 29 Oct 2021 01:11:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a58874cdea2e080-FOR",
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
      "bb82ddb3-52ca-42da-9e1e-fd6ec1fad575",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249739",
      "X-Trace",
      "2BB1B479E4FA0A090CB327FE810B9D39D715F12BEB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Zvd9N4snWEyY0htmfnVCmLDFCxQshEe0Ft32w%2BfTUu%2FzPyHTqSSCzMH80XdD8Z7RxaeXWpdatbVJWRHOfusZq%2F9wK51eTsFCP11nIbpbmP5MjHsn%2FGQOW%2BJc7encNtke"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [{ id: "457956457" }, { id: "457941098" }, { id: "457953422" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Fri, 29 Oct 2021 01:11:12 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a58874e58202746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7630d53d-f7a2-480b-954a-b63eec9fc571",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249738",
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
    "2BB09C4A68BD339F8867FDA57C7E92C720A9AF3DFC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F3RfRkllhfWqiMHLf%2BMscqmZU5bj%2B%2BaVuEXvzSUKmpI5KWhgxHcXBQciWySB6fqf4mHOWDRBVAJlD5Ekix5EcLXe3EezCXcj9a7NzNaN0xM1n1FG5GJG9FyKC9%2FeMoS0"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/search", {
    filterGroups: [
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo2@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "grouparoo3@demo.com",
          },
        ],
      },
      {
        filters: [
          {
            propertyName: "grouparoo_object_property",
            operator: "EQ",
            value: "notgrouparoo@demo.com",
          },
        ],
      },
    ],
    properties: ["grouparoo_object_property"],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Fri, 29 Oct 2021 01:11:12 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a58874fecdccf96-FOR",
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
    "ef759ded-d678-4fc4-a557-f1bef6c5771d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249737",
    "X-Trace",
    "2B939B96C8C8A435C67A42B6A0D91E8FF1EFC60952000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Sn9q5EG6LNGyDcfUBg2KAR4DtK84uM7yqQqT6FXUpxdWZ3Y9XiuNJ8LT6nMeMNo0xZn6wnfcPNRIstPpmqUXjuvRjiJ3YGrc5WI9ciIvwH0fpEOMZvOvWyDBGo8OevG5"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
