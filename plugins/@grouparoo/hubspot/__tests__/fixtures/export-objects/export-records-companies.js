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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:12:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2edad9d82746-FOR",
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
    "a54228dd-8c4a-4043-a6f4-0cd7de76e492",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248823",
    "X-Trace",
    "2BF87CBD0BB6AFB521D44A63C20A32005622823811000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mpuPUXY71HAUY1DUd18rfEHg5U4OLeNqlfiIYGOkb4yUdZoxrD11Z6FNMJ3eMClf%2FPGrbQdbmWJjJ6Dyan46fwCbUck4H296StSlmXwwKCo5xBdgNgwdl734krn6o0VI"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:12:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2edcb9a4cf8e-FOR",
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
    "2bf87e31-52c0-4cad-a3e9-246402c24cf3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248822",
    "X-Trace",
    "2B10584492A169C0FCF1797402C88701173488BDAB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AB6ebvhfe%2F5koZK8AgdQgAsS1ZMxv4VUg357VhJU3Y%2BVZPQuVFLaCCG2smGDr7h40UAJKS0R8ZPHCN4DqsJeZt9Y2XVcojXLTI1p1IS6LMF01Km1chY%2FHRckFD6EwqcJ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:12:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2ede8ffc2745-FOR",
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
    "2d9452e2-f3cc-49ac-9d45-deb3e732cb9d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248821",
    "X-Trace",
    "2BB87B0C963E6175B8B75B1D0531AFC2210CFB0247000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FEdFRoG9lrs8gf2zxcqA7Hkwz7ImIXx0hc1T%2FkYubGCSz2WqCb%2FFeD08pbxOKumPemXFBpG%2B9m7sc7YXvkDwq9jxXCoEcS%2F9gPSHbdb9Jfkp9tnX5%2BZ%2F1CLwnAKvSEFy"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:12:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2ee01d21cf96-FOR",
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
    "c12cb866-419a-4936-8fb4-2efddff0f832",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248820",
    "X-Trace",
    "2BE0BC124304DA2E763168FF894D271AFC3E55E5E5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wuae6O%2FT7MqlNwegymwxWWar%2Fmc3A%2FXY5WRbpyAeL8Z6%2BFBFm0NkpVsMDb64PrFDD%2Ftrl9KcK8DRtg6s5yuzugI3qsT%2Bwmi0J5KDiPIjlVn7rfxd1FtApXIt3rt0TOg%2B"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:12:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2ee1d988275d-FOR",
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
    "00fdfca8-13ef-46fb-8b82-6326330f656d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248819",
    "X-Trace",
    "2B1B88502575086E92941AE00F0BDA4BE5D5CA7FE5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4NWyCR54cQU0rinx9tZvcCq8UFaAAkt4TGQFRiIKNp%2FFAwGtkuaG7pDfiXRXP9dQVbcCRSc6fjQGkXabjo%2FaQhB%2FQUSlD1SEx3QFtFqG%2FFUyoWJlbdvll2uMUYrJYQ3j"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:12:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2ee37ba9273d-FOR",
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
    "d21f4d4c-4fb3-4139-a104-71ded6db555f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248818",
    "X-Trace",
    "2BD79418874AD9B3866FBFC701B3748174CFB23B35000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IVgwed0%2BY0LUfRJNKUdWSj300sJPTBJPxyEYV%2BUbKcw4Z0pUjbY5pw9%2B7MDTSUWrvWkjucmwDHU0tDe3513zsD9vI4dujZNkWzTQBo9KNxSNpDSEhE1K6%2FmrF2t%2FA3d7"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:12:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2ee53e44cf9e-FOR",
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
    "0e2b6ca0-444c-4785-ab83-213e4df8a8dc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248817",
    "X-Trace",
    "2B9CE72289FF69637B92B367E8BF75710E87ED357F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2udm7gPKQr4okzeIUMqSZCfcyr7N3UF%2F%2BH8qYfhT6cVk7Tf1MGyOFg%2BIrBx882xBaOVLwGeGL2s10gugCREC6iXIt6JupAx%2BkjfvbhSVEaGRitwMax5mg9rIPX4AYsG%2F"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:12:32.529Z",
            hs_object_id: "7983436802",
            name: "John",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:12:32.529Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:12:32.529Z",
      completedAt: "2022-02-22T18:12:32.594Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:12:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2ee6ca61273d-FOR",
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
      "611627f2-9842-403a-ac40-5965c4e659a1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248816",
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
      "2B42BB4673744A9009C41F49F6867C81B04351A830000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=geE00vE7WBMhehqQxO9S6L%2BQV%2BjMoMgYZqm2JXWux9715BunTQW3B6hz6UdFSUKvHNDK81ilav2oxrRt%2BO3bqODYjD1dnx8F1b%2Flz%2Bzm726Y5DPLQetE9Ky%2FZOgEIVGG"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:12:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2ee88eea2749-FOR",
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
    "6e0c9b9b-d007-4a88-9f9a-5f73a58515b4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248815",
    "X-Trace",
    "2B574E01D8799404CD6AA8D062330B46D51A9F1FC2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OPbSABZAHiWmyebpsnZ%2BzLCLVhxIkOKXyQzynUGKUvA3EN9ShHyTLBbZlDULnlFLZh8%2BNNDnbR8PAnwQG21KGnzJ%2FoTLKrnin9jWRMKKPOiRg%2B4zp2Inp7mwj%2FyWbCxL"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:12:35.241Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:12:35.241Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2fa5985b275d-FOR",
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
      "fb173537-a42b-4fab-9cb2-23de3923aab8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248805",
      "X-Trace",
      "2B941FE30C87C124BD4A8D0361E24F4455892ECC71000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ipoCSOFcOfyT1t4QxQOe1z5IZpZEchRHpiIDch8IyI57VJCSK%2FQ8ZFzv60BbTXYWYoHvuKCMLN6KcP9C0CIj2po9a6lLO4TVgQi41n9XLjwmnQR2g8Tj3z4i1tisRkQw"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:12:35.241Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:12:35.241Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2fa72c652745-FOR",
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
      "caf8fc34-58ea-4a74-ad46-a527e40c0525",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248804",
      "X-Trace",
      "2B8C710D7E1C7BF8B21ACDDA325A601F870FA0CE38000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=okRTx%2FaEGij%2BfW4gIVdSPOhkhkjjFL5MHyd%2FS3n2R7l0934K%2F71FKoghaR2I%2F18oWeUXuOiADzDoKYT162YYtGApBwHSsvul4haV0F3VMT9lJ2PBkaLxz86RTp1tvcRv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:12:35.241Z",
            hs_object_id: "7983436802",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:12:35.241Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2fa8eba02743-FOR",
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
      "33defde6-7037-4298-a55b-fd1440e6645a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248803",
      "X-Trace",
      "2B5DEB5C79AC744E278829E9DF7D389A857A8548B7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QqXc2NvnxGZqkCGc2qHoZ96Z4mSA6Cqt30SYGPn4SoqBMxl1pDLPcWTu2N9P6knjodxhId8Md49RVngDGhacrrgLekyIDwvbfRGPxWFUpuKt0UnZAXDLED4Z%2B7Ggxwfs"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:12:35.241Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:12:35.241Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2faa9adb275d-FOR",
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
      "e32fc67a-c878-4ad0-87a5-e60bf37e1496",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248802",
      "X-Trace",
      "2BECEE851224BC3BBFA6332904238A593B70DA4905000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6AgSobDiKouVBx6anwtOC82gfd9F64XGxLjoi3MjXngP3zq1YHn60J15iHhPLXX3tHYiYNEyBHFhru9jQaFZ6YPqDLulWMB1CHYQWiT3MEnvt3mUMkF2GJsaEOwUJILe"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:13:04 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a2fac6fdb2755-FOR",
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
    "8dc4cb4c-b29e-4138-98c9-afa77d175bb8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248801",
    "X-Trace",
    "2BDBADBF489B14DAF838AE7231DB130A09E093B4E2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=unVlyhsbAN%2BvCk5sIzRsPdlTI%2BFObaF1hl%2FIpSryekqAoLY8YTwFDsOhYoHT6huc6K%2B5EwpPiZdcVGTkY%2B1WnTwiiOKoD1y9GsusMG%2Bnen0fLRJlDA6HwKOsuyoO2isg"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:12:35.241Z",
            hs_object_id: "7983436802",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:12:35.241Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2faddd2c2749-FOR",
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
      "43453c41-b5c8-4852-b734-9d52890ba3f9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248800",
      "X-Trace",
      "2B3A1469EAD198234BF6A6E1D5BC680BE72362848E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R8wpni%2FUv2hEJ04eiba9LyTLzaz47WclxKltHv%2Frh4fkgwih095dZeb3otFNZGQRxMcUjvDboctIKmggeCs9oPLoNWUrrcd4u1s1HJo0hW2D2d4Np7FJSJw4VN00cBEB"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983436802",
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
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T18:13:04.681Z",
            hs_object_id: "7983436802",
            name: "John",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:04.681Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:13:04.677Z",
      completedAt: "2022-02-22T18:13:04.716Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2faf89902749-FOR",
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
      "01850b16-24a5-4f02-9ef4-583c818478fb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248799",
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
      "2BD902AD85CB9509F383B6E112D748FF1DB32673AB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AQCno0b75%2Fsn5MQQ35k6S6LlVQbU%2Fc%2FhAlrrT08%2BmXHQB%2FfznoJFthyGIVBT%2Fbh4zJyqd0nEi895aMTDdz5RW9sY%2FOcDGdiSznb8dP5s74CYOlZOHXpTt5CmQR81gL3r"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:05.044Z",
            hs_object_id: "7983476502",
            name: "Pete",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:05.044Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:13:04.949Z",
      completedAt: "2022-02-22T18:13:05.080Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2fb13deb2749-FOR",
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
      "391517ae-3bb7-443f-b176-6a1f5942ba93",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248798",
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
      "2B273ACA7B22C8B43ED37328CA36F87A3B63A19FB3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a3T60SDKvNFoUsSqQOeo2eoO9raiFrh5YjwVMQolEs%2FQ8PIN6TluXggmMXsO%2BNLBtI6DXjbGHsjcaVoMASym5DMS1zaraaxRLqbDcXERomBoU4lqTloXo55w1wNfmkDk"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T18:13:04.681Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:04.681Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a2fb38934274f-FOR",
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
      "675039b8-3aa8-4e0e-9a38-73996bd772e6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248797",
      "X-Trace",
      "2BE8E89A231720369CB8EA1F267B3866097C732511000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nR3dhpIM3UnOm8pYsqs9HKzwCe468raa64GXd%2FfnvzsoIhWESINnf5W7JDkSy2yFaZ4rGcwwElz1QMerF1vbBWTpMWEOSTcVFr4l53ATiu59tVbS3L1W8dwoNfxHBqh3"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T18:13:04.681Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:04.681Z",
          archived: false,
        },
        {
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:13:06.829Z",
            hs_object_id: "7983476502",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:06.829Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a307139c32746-FOR",
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
      "54cbb593-b0e3-47c1-991d-c7adbae5c048",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248783",
      "X-Trace",
      "2B3B6CA23310A9D40EC3E7ABD95EA25B251ECD2302000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W4FKgTTeyAjggy5yzTVGKt1DrfQXbLlp%2BTpePY0Lf%2BkRr7M9IlwwttKzZwF%2Bc3kd%2BQgrnnwKll1C9dnwqA3Cveazv5Ys%2FiONEGg9h2mkqYVcr96NduKWT4%2FNoyOWnB3M"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T18:13:04.681Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:04.681Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3072bd0a2746-FOR",
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
      "2cf965f2-d5c9-4482-ac2c-1912e7f400d1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248782",
      "X-Trace",
      "2B2607E26C1B19DD9D8DEF3FBE0EF29CD641D47EAD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QjJ%2FB2l7ESu3kQguWmetPOp9uibJop7QcR%2Bs%2F6%2Fv3xR02TzjqPYJqiqircOeCLvYcDLz%2BBPK26GwcY6pO4XZQ7OLbGvxtH8rGstmzvMa8mmw8BYsCsrcUQH3rJlIRz4F"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:13:06.829Z",
            hs_object_id: "7983476502",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:06.829Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a30745dc22749-FOR",
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
      "da465319-cbda-4eda-99bc-f4693be945eb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248781",
      "X-Trace",
      "2B8F9917C6917412B98ACF70673F990E6523E9404A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gUi8nNnTPCQSYA9EHwu3%2FEIOFANs33dPfifsXV3gZvUR%2BK2cbjZCmWMz8XnWVIB8KFkV%2Bx3fpO9HaIQM73k7virimACws3RsTMiPJ6z9Ph6a0wHrbQ5kX70tmPw%2Fvq84"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:04.681Z",
            hs_object_id: "7983436802",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:04.681Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3075ee1ccf8e-FOR",
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
      "8b9194db-8b83-4fec-bf8f-39102e3ff13b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248780",
      "X-Trace",
      "2B83EE61EB361447782FCEC29656ED8ABD8656CE7E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sDcG2CEJF65g01ZwUBQKDCM59Q4yTNzbOGF6phPBFKPQhd4fjTZHlgra9DLLWFs5h2%2BUbgfurjG8asm4fvHjgCy2QUbMBveGIEPkLrAIOUBfqWWpiCCE9%2FD%2BIw3nA0r5"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983436802",
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
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:13:36.660Z",
            hs_object_id: "7983436802",
            name: "John",
            website: "",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:36.660Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:13:36.651Z",
      completedAt: "2022-02-22T18:13:36.795Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a30777989cf96-FOR",
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
      "5d57e522-2e69-4476-b7e7-c8cce286ce34",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248779",
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
      "2B0BAA55C37F22653836FA41E5153741193AFDF350000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3n66AigeTGevJINglVdW9cLpbQIrYdMwGBLYNYCJj77JohDXKVZMyd8XwDlRBgOV1EY3A79022XDn56rYKE2%2FMCn%2FyKcx8FhIpjaVpx54u2AesFssvEOsDHwtIOqRnh2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:13:36.660Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:36.660Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3079ca7be08e-FOR",
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
      "33c64995-c536-4993-b76a-bab4187b9ea2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248778",
      "X-Trace",
      "2B959833FD5984CD3293ACB5EAF71B49C79EA7BAC3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qew%2BYu1fAeovHIljw3T4i%2B3CZAMFcov09Dib40IRIfO3w1rev9qzgSgMRn5E%2F9CVxIxCp1Lr9IVmkWmoIrgeEk%2F7gCNYzR1iG6xNZjbTRYnPe6BFvLh9RR1q%2Fu28ztm%2F"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:13:36.660Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:36.660Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a307b4c012745-FOR",
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
      "5f12a228-4465-491b-bd54-3d9ed234c083",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248777",
      "X-Trace",
      "2B8B535BC580623A50C62B081516CE0D46054EC1B7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Fx63MZ2DNAD7TL6SleENI4LQ%2FCjTNZDJ0OhXvtJIBHUKl0zJHds7FqRXrAB9XqrekhEcOtP0mOKa%2FI2XlvN3XiSuYu5ULf44Zf7Y7hgN4ZtrjTwTTYctXdTKMCQqXbKc"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:36.660Z",
            hs_object_id: "7983436802",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:36.660Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a307cee8f2755-FOR",
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
      "b9bb9517-cfd9-4479-9b8e-27812387ea08",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248776",
      "X-Trace",
      "2B761E0FBEC12C6E8E0BB47BA66D4A8D4EBE3F0BE1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Qht0NxcXTxtcKDVcJvNPQ2VKXRe3mX60j2EeSJ9mdsK13UskUkgo6dvGUR1szGXF5YoouAq32SRrHSALp0Y3AiZ%2FEcB2ruHCLeM6QFBWxOXCYuWC1rDD96eTvUdB5x1b"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:06.829Z",
            hs_object_id: "7983476502",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:06.829Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a307e69b6e074-FOR",
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
      "d58c82c6-beb7-4497-839f-12d342cd8e9a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248775",
      "X-Trace",
      "2B07733CBAC607838B521C8A39FB5B8CD91BAFF3E4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XGCX3CZbxlrkUaaTFwbXyWFPjafCxd4bcgbWczgJCHhiifVozcLQAlssgS4w%2BOJJWrQTntk11xMDdiUcDEhPpPIGkcUdIy9cM9QRa97sQO3s%2F6%2B3pRomISvY1eG6m815"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983436802",
        properties: {
          domain: "notgrouparoo.demo.com",
          name: "John",
          website: "www.test.com",
        },
      },
      {
        id: "7983476502",
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
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983436802",
            name: "John",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
        {
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983476502",
            name: "Evan",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:13:38.044Z",
      completedAt: "2022-02-22T18:13:38.097Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a30803bf9e084-FOR",
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
      "6b462135-1571-4677-b9ef-3f799a5e14d6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248774",
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
      "2BC454F437B8661E8CBACE6D4CF5A92925F671F84E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UtSXksLxUXd0MCAWL6RLCQePqV%2FRguegzXdJByFW7mAL3j7TN5aZGsieuoik%2BUa7zsmw9GQvmUyDcdrAw19aFHmcomZMm2pSO2LRJHtgtqlmcOmd5LGE3N77Yo5LmFLP"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3081ec0dcf96-FOR",
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
      "e9f362fc-8124-4a03-bacf-34f41f7c7eb7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248773",
      "X-Trace",
      "2B4FB8D85F2C0850FF246E3C769109425C7F26F0F5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uUktjiScvDPEz51CaLH64pFPKOrOpdkcF2cWHbZXHEco3dH4uvMVM%2B7JWnHbHcOuTvqz3LFUEkG9zNB55T%2FgAfrQPbnc2xPNnLzhG1NIVakgz%2BkERGPtDvg4gdksdzRo"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:13:38 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a308389cd2737-FOR",
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
    "4b9d7d29-8855-4b2b-b7a0-e236a2d2f7c5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248772",
    "X-Trace",
    "2B0308FD598765BE3974E1662E5ABBDA6BDE1D3B96000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HFlOiAhbDpD5RRafO6CsrP2vW6aUlSb0iNcnbkyor0DtNhi7GHgUZynGALunq%2FkYkKEGQDWLecPdV8rl%2FN9cigRre2uBMa3YrbOr470aVZ5WFzcdBqNa7FhPPX33gcUi"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983476502",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:13:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a30850914cf8a-FOR",
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
      "4e409b46-e6d1-46eb-9088-65e4b8295c5c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248771",
      "X-Trace",
      "2B8EC144B915D4A0BEEDF17C8CD212946901D86039000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UsLKKLVE9bNUV4SoiYfCch4XPcxHqM%2BntIAx0Q2ovJly6JxrI%2BpzZOpYn29S5PWSw7rddsQx%2FKtfe59jj0jRT6pjBqdSx3f6FrTCt583jndhqhgIrBFj37gxHycNrpeg"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:09 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3142bb5d2743-FOR",
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
    "ea88cb84-2df6-4649-816d-bd7e9cc92165",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248757",
    "X-Trace",
    "2BB3E2F45BB1D1D611905328F49780743E178AD594000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9GDl3q34djnfenKHK17vUuthEVlwKfHCHB2gy6tADRQM8ZKoeQLhkR5BFLorZwBI%2B3VQkW1yBmCFcf4m6DilzFHlpBHIsrSwp%2Bfo191dP7eY3tjjbaWZenoIfFInaGLf"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a314468fd273d-FOR",
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
      "47f0cbb9-8e0f-4c82-bc61-49c7038120f7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248756",
      "X-Trace",
      "2BDC8F9E0FF64B7930B31F3D401440A8A5364C8981000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Bc7CHC%2BhXyqW9flTEMMkVPK3PF7vbamlqbURCm8UZjmk0h%2BoMkK8kBrfHqYXeh9BOummByUeV8YlX17zpTgVoDGpBV5eRbSLIIiBjWWOCMhOn5HmUBwQrVXL2fMMuhtR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983476502",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a314799622749-FOR",
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
      "ea66cfd5-da6f-4a94-8af0-2b261f2b9c18",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248755",
      "X-Trace",
      "2B2826DC3F75EBBE557DE38A4E5D88443DFF147EF3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P0sFcNuvlTaYrpC0ri3tdiqrSLMcOFKUKjwcNiLmx17Bn1xGrQHbrgtJoo4U2%2BDEeYwfLvEUMPE0s6lcstIVoRZQnkk5d%2FrBhIsiQhFCkf%2BI%2FcXbfbOx2fPiBtysdWin"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
        {
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983476502",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a31495b7ce08e-FOR",
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
      "2c7bf980-ac49-499a-8837-37d5dcf30d8b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248754",
      "X-Trace",
      "2B8E6D3BEB692DF01CEA5FA918A6877AEC0E2DAFD2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GllpxuotEJreZpl3K%2BtC%2B1lnEnipBe2u3%2FieJgruve%2FUDqrbErBCn5NxK5l56%2B%2Btp1zmCnESHHIRRl6gT8IUF9RDEmD5NWeAJ0Jq2Nbdx99vn8hoeHVBKcWbNUIbXlcS"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983436802",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a314bbeed2743-FOR",
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
      "acc13435-30cc-41b9-89ba-b4fd9869c62c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248753",
      "X-Trace",
      "2BB58BE8F1CF37F28332C581AA0E204C56421F0B28000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Bg6rKtiH1hjG9kWoaCSuXmPY9OWHGt%2Fqgh1nkKXGjVXJoH2UnJttMEfe6ctyEAMmK%2Bim95Io56xuOaY7m5wa%2Fq2pCcL3cThpxBw7pUC%2BU9oH6u%2B1dWSm4xVj%2Bj0HvTZw"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a314d6bcf273d-FOR",
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
      "419723de-a608-4d52-acca-8e411162ef7d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248752",
      "X-Trace",
      "2BEB525F67EA0E41D6EC8030B7CBA13C3486C97ACD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=i5kS%2B60mJ7vteyEIBAo%2F4m3ii5crxh6VMQR%2FgqzZy1sZntyHPlswZfnqhl8BiWlANsIgvWMulVH3Rn%2FoN1C77U3iHMGk5HRTzWiDEZdEK1ELNfaYZT3VAAx1TLGVJAiM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983436802",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a314f1b362746-FOR",
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
      "a6589820-48cb-437c-b207-0d476f2d979a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248751",
      "X-Trace",
      "2B41841DF502E65BEEB7601571AFD13195ED71E9D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=81ez9j3Wzmk%2BTzc8N78tBoQxb9QxqbTjRgkwyFdkO3sQiUI6T65RL8btu6eC8iyHc8fvP00THzU8sGgobVZtufoKV9cS3m6bJTz1MJbHoA%2BOK1NXdDzuty45ZRKzo2iG"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983476502",
          properties: {
            createdate: "2022-02-22T18:13:05.044Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:13:38.054Z",
            hs_object_id: "7983476502",
          },
          createdAt: "2022-02-22T18:13:05.044Z",
          updatedAt: "2022-02-22T18:13:38.054Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a31509b4f273d-FOR",
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
      "80cd2abb-31b0-4764-ac35-69d03a237e0d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248750",
      "X-Trace",
      "2BBB97A21B9A6225DCE411ED38D8E9F050392EC8AE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jt1aN1qbkI%2F1JZIkknQBZfyD7EvmjDOmdipSOiXbhWQCr3VwFKoas6yPpvCD9pPZGVg8JtikigjXdHP5ed%2B7QMb3NznFG9YBoqirPsm%2Fimy90HhUqFWpwNYH7R9tcNlI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [{ id: "7983476502" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:14:11 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a31521a9ccf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "56bb10aa-b94d-40c1-96c3-da6140976f4e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248749",
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
    "2B4511A80383ABA7FD5606EBD31242BF9665A64F42000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hWHHl5sC6SQq%2F5egTas1fNjV29Couv8TpTp%2FFGiuuXivn6H7L4rY9Hel0x%2BMEMfhnKK%2FsafjU4Y8x8fbeUyQ5cQsYDfxoHxy03pxiLz5tq8ZfqHEKz0eph67mNFU8dOK"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983436802",
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
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:14:11.908Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:14:11.908Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:14:11.902Z",
      completedAt: "2022-02-22T18:14:11.953Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3153db6acf8e-FOR",
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
      "e2282ee5-55b1-4f69-a32e-7bdb42ee1dce",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248748",
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
      "2BC3DB85DFC51925F3D55224365CBA7872A39D0253000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pssAyjGV%2Fc5bz9IN2l8R%2Brnizi73YywXdtykx3w3pjNg%2FqrcQNclUmD6mXSY8Z%2BdlSJY6WqhXo%2Fv3tVjO7gm%2Bhq6GiSS0aHu8lfns2UKiiCfIhtdo3o0563OdGVXpQe6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:14:11.908Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:14:11.908Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a31558e42e084-FOR",
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
      "1aacc34d-1822-4ec6-adf3-6040f6bace42",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248747",
      "X-Trace",
      "2BB96EC44FBCBF78A813DED101D64B440948A8C60C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FBCf1t0W0Y8nESifV5zdgzgQy7mrSOhKGraQmeYAgilJxDgX5GzjwSUr5Ao5rYlGQx4VgvXNPGA4P%2Bfn%2FZE%2BpOSr%2FK%2B5qdoLyA8kEFvgZJOEgt0d1nAxp93EzSXXuivQ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a315759de273d-FOR",
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
    "9c274d70-dd3f-427e-96ad-4881a38ec9b9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248746",
    "X-Trace",
    "2B11117439F7802B0E6BF9ED015AD800764A6F5347000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=foDJyCb1GTygcLXf9UxHRdXVceI0Nz1rqdReLYgo03PbcacDWTvenZ6cvTzOlEMZAlTJh5Zva00eBKvWPqW3tezkCLLEiXHgvGIpJ3eqc7npUgq27IeabnC4MvAi21Gg"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a315beb12274f-FOR",
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
    "f8251cad-5b14-4274-9881-2f51d8a93c9f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248745",
    "X-Trace",
    "2B143D35F4D1FCF51EA037C783BC22487ED8B85AD7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YqdPw0AsvfyNKx3UyIzNjSyHjiNglkYzyinRxAqCnhFxUx4a%2BrwrHQP3MLqjKAJlVcrhlneX32YHdn8cFPvhzntg8Ofum60Q9ugu%2BM4bxyUuh61i48VTGdQ7QCT9AKy8"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:43 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a32190f772743-FOR",
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
    "e8bb8e4e-cfdd-41c9-abd6-2b0bc23a37d2",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248735",
    "X-Trace",
    "2B234DA22AEB1476D5E8496006E1D63A9391F0E909000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Bz82kZQWe03%2B5eHPcwgXDoWDgYnJq%2BOCJyXgU6Fw24NxuXP0HOLunHTkJ9O4dV1gnwEk0yuZeP4dEP8plmFBoRIs8DOtUjFMXuKS78tvHaAWOEni9fsN%2BOh0rMOky7Ig"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:14:11.908Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:14:11.908Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a321b9d1d2746-FOR",
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
      "d5871837-7927-44df-a140-55c7a0251e67",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248734",
      "X-Trace",
      "2B7012E49CFE5851706A9C1B0D0974EED20FC4C6C4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ii%2FJxoEiuUjjfoJLjQ1ULcmFSekBI%2BiGoRWCKUrJ3ny7%2BVoECqCaggeWh0CB73hBfdzDsKxX6JeVKAH%2BNakT7Jt66716U6E4aILNp3hmpX38rtboNGokmPiDImByiB%2BB"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a321d2f90275b-FOR",
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
    "631c0127-df24-4bf3-ac8c-ad5b46910004",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248733",
    "X-Trace",
    "2B2F1463CC15FE5EFDEE254C91EB43A717FB4087AD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e4gQ1haRhmSdpq2fVnu1sQRObJZ5HwkYa61X5jiBWjACp358Oi1B%2BBVfWYJMNQcWVEZ0CRaVfK%2Bhm%2BBYoYDEhjr9titDdOCyYRoTgR8%2BB1WL%2BgGoM7IeLPb165lvM5Jw"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a321ead58cf96-FOR",
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
    "41e6d35c-e4c2-4197-83e6-995a562f558a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248732",
    "X-Trace",
    "2B5C0C1BE64CB7321E761F2DA38EA02C0CC8ECC7CD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Lqe73G%2FRZUfOp2%2FLmE6f85c1SRoWdZvHfQEGvNpyVWlxv2UXgmaCg%2BqtWlEouPO9bNvJvnKyzoBTcwsf1ZtWTqN488hSOiqEFXpGa2LVsf1mwp7Tb8srnrYvV6Jlt07M"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:14:11.908Z",
            hs_object_id: "7983436802",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:14:11.908Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32204b022745-FOR",
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
      "6a83d21e-e589-4dd7-9dd2-ec65d03f90d8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248731",
      "X-Trace",
      "2BDBDFE4C24C5EF51AB328823634DE3038C6E06084000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r5THoO18RdACAXyCHZ6yrv4mPExBMqcfXeAtIYaOgrpHmJtcJRNQYzJqhoQlvN2m73iQNuqS0QHO5s5JrHaLCoIlKO1kePLJU1EbqtgQWgbJcAXHN3yQ%2FSuYsGRuBId1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3221cb30e074-FOR",
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
    "346f256b-f5e0-4c90-87e7-73fc00442c11",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248730",
    "X-Trace",
    "2BCF5554808D8D33DD7661D766426A27D60EA2FE44000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0U6k42NxJhCBemdztMh8WeDIw52w8yJBgYBs9VtxKI7jPzRE5E811wowO76xvFjTkffNKHVg0lTNzc3cCqliesB5kd9vUGIpvqECMdnXcHMK3KlerJ%2FOo9HHembzxazO"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:45 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a32231d15cf8e-FOR",
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
    "54bf3e1c-e741-4394-9926-2472f829d358",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248729",
    "X-Trace",
    "2BC051BD328FC83B6F4411778357C1AE8614D6A926000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1m8YQPEoHtM4tc5l%2BIHPQHN5eJXQgNHUSFCcn0jSNWRgaR28S5ScdE3SN1fHpKp3eynm97v87QmhcakewDZWcDDs%2Frbp6RsCCRtcI7lyLqsELtrGLGqbVVDOl1n1nlbX"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T18:14:45.334Z",
            hs_object_id: "7982848945",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:14:45.334Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:14:45.334Z",
      completedAt: "2022-02-22T18:14:45.383Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:14:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3224aee2cf9a-FOR",
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
      "293dc19a-a5b3-46d1-bed7-1f87d56bb9f2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248728",
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
      "2B9043B23FFE2D8F879CBD065C0AD8F378BB145A59000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kD1b4VJ6V8yRgtmC46cVqI6Ux2FhzIvBbjZXUMjC0lwRPbhImhN963SmMpv3Y%2B6%2BoUoFvEncAENMWlIsYScQP6z%2FKBrcANh%2Bi3xcz8FBflwOif8OprdhLzjrgCFavUhe"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:14:45 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a32266bdfe074-FOR",
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
    "54b7910c-b38b-42a1-9768-43428a544b3f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248727",
    "X-Trace",
    "2B8B1AF94D648D0A7D86C12BB8A0ED3F9ED007B9F5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6hgYeWOKYcmxYD%2BuKCXosEvZ635kVxOQTAoqk0j35GD%2F4%2FLHO6PGZpE87u9mtsv9oUpfgciKMxB1FmHvTWw8%2BfMhTqqvzlXd1RNZHaan91UP6V0ijOfeVNJ6IRd7aZ0f"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T18:14:48.045Z",
            hs_object_id: "7982848945",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:14:48.045Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32e37cfa2745-FOR",
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
      "324358fe-dbb5-462e-86a0-d9fd67f58763",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248717",
      "X-Trace",
      "2BAF9E929F35A39FFEA1DCECF1DBE27817E87A71CD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=74mGaMl1W4w8Wh1oNpuc1mTwFfB3Sg5pTVw2ZpvoeYJKrqrh1ixnaq8LIhJ6kqD%2B%2BUv7o%2FsTPDXS6ijgOl1cKP9nUKi%2FWshEYZmXLEuYOI%2BEXJJQc50Rx6rIrIgmvB3d"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T18:14:48.045Z",
            hs_object_id: "7982848945",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:14:48.045Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32e5184b2745-FOR",
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
      "b0f59544-292d-4b03-b3e0-9f7f5143fc8f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248714",
      "X-Trace",
      "2BC442B76E57BA0E5308CB9D5716D7D187DF96D6C6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KlrnKrwwj%2BlAn4lnL7K0kKyCIUebymgW78BMRW9%2Fonw3yUVj0PA5QHiadjbsmYSqf5gW1avUEafZL%2Bnvm1APDK8s5HZwNUX5GjuTehEeVbwzqJwaejEhrJGPW1OgsCdY"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:14:48.045Z",
            hs_object_id: "7982848945",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:14:48.045Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32e889fce074-FOR",
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
      "1199ba33-d7cc-4d30-af12-127c366f1ce3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248713",
      "X-Trace",
      "2B99CA7DCA5CD8A7A34A61397D9ECE45635FC3A36C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=20syfZRQXAkisfsbTZgZk3jJeDUFIeEpfo%2BnwMgQFn28biy2wCdlgx7sv4MTCIGZ2PJ1uX5nH5aJ50VYtiECYINY4mjEDofVLsJqOuI7SKcuGCIY%2Bh0N3NhHB3M7PRY3"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7982848945",
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
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:16.947Z",
            hs_object_id: "7982848945",
            name: "Maria",
            twitterhandle: "",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:15:16.947Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:15:16.942Z",
      completedAt: "2022-02-22T18:15:16.979Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32ea3aaccf9e-FOR",
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
      "d4bbbf20-b1d8-4651-93c9-2f4a7625fc96",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248712",
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
      "2B9F738BED15C167ACEC369BE9FDDACD10BFDDBF3F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=90ILsLQtHXJwvpSajj9RKygdrJGL4mCJUhXjOh1pvghLsn5IJuBmTCsZr1ZMf%2BrwgTddp4iLHEor6zJy%2FuQ247e10SgCZhRPjan79xQKfzP%2FbfZ3qIZv866myjzLKjcU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:16.947Z",
            hs_object_id: "7982848945",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:15:16.947Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32ebdd252737-FOR",
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
      "4bc45258-4510-4888-a5ec-9b0aff9d80c3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248710",
      "X-Trace",
      "2BF4373A484D301D2C4BD08A8A9FA380D354C7CFBE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OEiMbk0neyRkhdw2y7b2Xsor64CRyb9041RMFufUq1stHiZtnsJcmAcg5yPsu3nNjjEqzMCDZqOIe%2FUxe9Lx6SRgCd9NeoNePWR5shLFy3vw%2FEQBO%2Fhiv4ufi8bgmbhH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:16.947Z",
            hs_object_id: "7982848945",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:15:16.947Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32ed6df92749-FOR",
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
      "976502eb-7af3-41e4-a915-213712cc51b7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248708",
      "X-Trace",
      "2BD209251358FC890404DFE117A353CF180FB3CB0B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yw0MwpfoTAhoHLOWk48GgkJHpwrRVYY%2FdbS2Kr%2Bpt%2FUnuQSeUZQZbwI4Yfu9U0F5AHHaEkx5k05qDmIDR4La8QiqzLbTyXEnbuASCPhALIblCbvVXPuz0M5kIAOg7kzE"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "cdcebbd5-4586-4a63-a0cd-6e143857cc1b",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32f008ba2743-FOR",
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
      "cdcebbd5-4586-4a63-a0cd-6e143857cc1b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248706",
      "X-Trace",
      "2B7E532B49E393F0CA6AEE3F19B2E561801AFB814A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Kr8wU%2F8fD4BDEt9F80tR5GzFL5YKHewxRSUifk1r96PQMgcz6daHBC3s6jg%2BtZd2bDAp0dEJZHEh4Kb8icVzsxGlpHrtxmTwWyU3NFuqb8es%2FJp2Km3Jnw2ge%2Bj%2BcrVR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:16.947Z",
            hs_object_id: "7982848945",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:15:16.947Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32f8ba74cf96-FOR",
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
      "e98b359a-3e5b-4d69-8759-30706183a90c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248705",
      "X-Trace",
      "2B5FDFC21E9904C3F80C5DB8067D6CBC1D0A80E1FA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZDXtm1T1VSy7UXkY%2FLuKLge5kqbWk64mNcFqfsNvaLDZQxZE4Hbi3EmIDpBNkjGCkkKsCkp16BJCw0ABHWPXVi%2BEDjm9dZCRcmhVuUU66zw2YiR98ipBJS%2BPry%2B%2FXkq7"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:19 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a32fa4826274f-FOR",
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
    "599a0aec-a8e4-449d-b7eb-1e58f73584ac",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248703",
    "X-Trace",
    "2BF05C805F303CAD9AE3A5E106E2E3C8F2DBA82519000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HBmzIKOUwS5gAGY5dj2kc4rPlTYnzCXyr%2B8%2Ft1%2FKLgX0UZNFLiKuL1WZ0ViYkOOD24v5BjwavWL3fJrjQvYv3%2FaVyL8Q8stYL6CkI%2B9lvvKY8VJeIaCyArk9hsC8Jegi"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:14:11.908Z",
            hs_object_id: "7983436802",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:14:11.908Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32fbb9052745-FOR",
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
      "f817fe73-fe5e-461c-81ea-f0bacc34cd71",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248702",
      "X-Trace",
      "2B782AE3F97B55270A2C4C39F2E016C37CFA1FDC4A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fsmK%2FopaEsTYMtz16Hk3wJN1hIjgyxeeOu8cOvIeFAb7DgaoB0NraYDHTsUOxsbjhyPJ79Depj81JbBWxibByK8xHgZ%2Ff5XG5wOwnSvZwfAWWmS%2Brp6bO1Tfo4O8YzyW"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983436802",
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
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:15:20.031Z",
            hs_object_id: "7983436802",
            name: "Sam",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:15:20.031Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:15:20.017Z",
      completedAt: "2022-02-22T18:15:20.067Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32fd9ca9cf9e-FOR",
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
      "2c1f32b1-2e99-4b0b-b31e-37ff7485c475",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248701",
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
      "2B5ECB3DBD3147BF9BD588A9D8BC043E31B3BEB096000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B9SEUqOa1ukCS4yuUjEp4fiLh%2BYY0OfzgpNLBI%2Fe63Trznr%2FxomHXDtejHuYsvdqWrx2y9%2F8QR6IbQMlap94NG6HSqMq55%2BrQhdYmXAEAyBYsVP9bnQp%2BOn8Q7QikO5o"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "7983389083",
          properties: {
            createdate: "2022-02-22T18:15:20.282Z",
            domain: "grouparoo3.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:15:20.282Z",
            hs_object_id: "7983389083",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T18:15:20.282Z",
          updatedAt: "2022-02-22T18:15:20.282Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:15:20.281Z",
      completedAt: "2022-02-22T18:15:20.334Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a32ff4e52273d-FOR",
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
      "265c6254-98f2-43dd-8e63-f307f06d3907",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248700",
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
      "2BE664F7BAD5DB3A9E0BE09745F7739AA824AFD576000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Mi%2FnynCiDcsY5GwMcENAYbqYv5IfT2nlyHYINpDqAQqW%2Bcbo2pdiSEfBLUQFOUuUvHcj4Fksv3PKmUNbjJcUwUvB0%2BI%2BJcUby8ZFbidCozbROJFXgU3xlor1b4ZjR9G6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:20.031Z",
            hs_object_id: "7983436802",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:15:20.031Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3300ddc12755-FOR",
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
      "3493883d-dc6e-47a3-b67b-8d96e082fed6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248699",
      "X-Trace",
      "2B882F3D9032EBF46861778B33A74CE4978A19B85D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LwwnYNbT9JoBgyPYGhbwINNJc7WP6dwEaaBDQlXha0m1W%2BoBjdB8ylFNjTTNY8UG3M7aermR4xa5Bo5xbCI2hZ0tQ3ZukuT7d87CND9mhysRrhOfbEKnWRO4nd3c5GIk"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:16.947Z",
            hs_object_id: "7982848945",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:15:16.947Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33027b712746-FOR",
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
      "109b2e5c-c501-4606-8298-957676cb9498",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248698",
      "X-Trace",
      "2B5F7F8D8B40C150C0301B281875FBED0F130C69DE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=b1Qs53DpqdWHBMI4cwkmatri7uE%2BnF108W2nDEECLQ3fYAL%2FWxy%2FKyX9NAVVj1eZMIBNqUXdJalnS%2FVHrUyU%2BveVWLRrs0GHxatB%2BzT3Vv%2BupaxuO%2Bj2FCZa%2F5m0Ex4l"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3303de542746-FOR",
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
    "f1270251-45ce-4f20-a8d7-70f1f9848f4f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248697",
    "X-Trace",
    "2B76C4472AA1CFE799217BE030FC97DBA150FAFD94000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n0qpaZpDdJsesRAtb8CtAz9dC9uJn8TLYUgNyuTHHNYh%2FFoW25UPVaKesu4a5PV7pRYo7eqMsL1o8ZA6axn8JnA94KXjcHC44WfQy2ykMjZ1uyoGWRLGa70jgKnxVLa3"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:20.031Z",
            hs_object_id: "7983436802",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:15:20.031Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33c0dc1bcf9a-FOR",
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
      "af7820f7-9eea-4fdf-8bbb-8f24f8653f66",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248688",
      "X-Trace",
      "2B82EB5663AF00AE2E8AA31969F3DA4145EF3318BB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VOUku9hakofb2Afvy9a5eSwrRmQ11Zcg9qs7ykqEaSOcwWGliw4vdFIgkGQd2oZgekHCSfu2cg9wQVs%2Farrb4%2FpE8vlFgyoJVly05YZOeKdTdPW%2BaU7JNBHay9hsPTyF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "74046cca-f9d3-40d9-bf49-e9d1ea6586cf",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33c45a352743-FOR",
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
      "74046cca-f9d3-40d9-bf49-e9d1ea6586cf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248686",
      "X-Trace",
      "2BBC5B933A83F277DBF4F5064C3F45D4CFA8917AFF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rA%2BtPefhxr1OaYmYCDZ2H14cvxiy5Qshk1R0us4dx5y228O0eY%2FhgUcg0mcN8%2FePJ04zV8%2BE8dxISZsR6HHGG6ko%2BQ43YokYngfcvI8JBRGW05ZWWb4tfDKG965yzsMH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:16.947Z",
            hs_object_id: "7982848945",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:15:16.947Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33ce28b5274f-FOR",
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
      "465e9ef6-4522-4d76-b44a-97aba6a8b127",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248681",
      "X-Trace",
      "2BC1890BBB0DB5ED24F2B13E629D9E01EA6B7603C5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2LFbiE0W%2Btif%2B4Z5SzSKQl%2BNyeM2fACPwpgglzssWaeXKBPNRaiyOzfRFmsfv6QXMbsv5NcX9qRF7jkNoPKnPnNg%2B2yMMBzaiqNdAYKIszrFKkkNNmTXtnwzm6lZnurZ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983389083",
          properties: {
            createdate: "2022-02-22T18:15:20.282Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:15:22.770Z",
            hs_object_id: "7983389083",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T18:15:20.282Z",
          updatedAt: "2022-02-22T18:15:22.770Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33cfbd422749-FOR",
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
      "c52421fb-25e3-4f1f-8533-1ba129434659",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248679",
      "X-Trace",
      "2B4BA5E07E56B98F33AAF58F56D0211637863F4002000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fWQEUBTDpdHi3npo9OaWzWUTdysenfN%2FOTmzwk0t60XwXHKDdi6mFRBxqMJwqXoK7gBJHussZ0gl8SJfDTVq9qWZF5hXMQOMvp8NgMByX1HN3%2BHNIOSDLTTLlBhqPMWT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:20.031Z",
            hs_object_id: "7983436802",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:15:20.031Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33d1bed8275d-FOR",
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
      "ebce4f02-0ffd-4de3-bf96-c4c31ef28ffd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248676",
      "X-Trace",
      "2B4C8F4444B55EDBCFD2F6D571C516CEA8B689866E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NaVn0rSLICQCelq9075ED%2BByv9mTiG%2Bkf6OiBJrMR2FgA7JHEPHIzRyRRpZKqVWqiswJqLG%2BTduyeeqzrLXr8%2FBYsnpFgzJrS0xPeu4mDzUx4qT2Q9K2uShcRp3Svs4Z"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:16.947Z",
            hs_object_id: "7982848945",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:15:16.947Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33d489e5e074-FOR",
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
      "9a6189f0-da14-4743-ae69-3a9858f0b7a9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248674",
      "X-Trace",
      "2B5BCA7D80EDE9664ED9E52341E164DB934D0CC012000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hpweoVuCyz8QlaN%2BRDQGpkiajmhQLqAVu6wCHvFcctl91ZgGylpGJ%2FJ%2F0MtFLTOczpud12WdYDKS6BymxuEc4Smx88FkH33PdwOvZnYLQfM099sLT36L5XYt%2F1ZW9MeG"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983389083",
          properties: {
            createdate: "2022-02-22T18:15:20.282Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:15:22.770Z",
            hs_object_id: "7983389083",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T18:15:20.282Z",
          updatedAt: "2022-02-22T18:15:22.770Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33d659f2cf8e-FOR",
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
      "58d48da1-df3b-4fc0-ad8f-d58e3a4b6111",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248673",
      "X-Trace",
      "2B5CB3C83F88F0216E860795253FCF6DD99AFA5354000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ufbw224DqNV2GmZKRO%2BadJSH%2FCHO3DAPVA5GI0%2BwZ3ZcttvVwGcGE55ltCbzuiUSnt%2BpszuPAi4tjBkAoxvMkBFo1i1NpZ170rRjjAiNJ6n35l%2BYUrmwvd5fSOooAM7N"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "c6341b9d-1169-4ff0-a8f8-bc005a338181",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33d7cc56273d-FOR",
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
      "c6341b9d-1169-4ff0-a8f8-bc005a338181",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248672",
      "X-Trace",
      "2BD21B51CDDAE99AD2B2431A9D1D98FA1FC9347988000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Rvoytx%2FZjLzldnFH%2BJsUSCR90e6hzwC3x9fMtvsIKcVQkubvfULye9U0aaBa7VjQXKOnXgKZKZtxjWXwrpCZyHQlAK0RQEB3h4rDaweB9AC3Ky6Gn7NqWrB10tdHDaZd"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33e16852273d-FOR",
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
    "cc8cfd97-f7c8-4285-9d88-9d16c843adff",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248668",
    "X-Trace",
    "2B33FD8682661FC7C5EA4B187B6E8155DD1AE56229000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z98wrxTu0cO7owXbD%2FGSvQH9Hl11CbjKlZ03zZc07ptc82YixJe9skc8E0fOX5P7SlPSgEQkvmwzCorX6DoXDqRUn1NbDy9UOIGKMA%2BNAHGGB0gVQk5m2ncTJhKS2Eu6"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33e33ca92749-FOR",
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
    "d38d4785-4345-455a-83ca-8cb8cfe65b23",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248667",
    "X-Trace",
    "2B7C2C79C405C036BBE14AD560C5D348C72ECFFC21000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rk91kqR1bbKWxkAotrbYtilvDoxvV4HvUBWkrlV73%2BrPOOADOQFnBzlekFutYbKVVrNTr%2FB7yGlqT5e5hCHD%2BV0I%2FvO2yltDp79JY2Kxk0DuKmd%2B7DMGRlop8DOcclkH"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33e6889f2746-FOR",
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
    "9adebf25-6f7b-4487-a8d6-88b7f328997d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248666",
    "X-Trace",
    "2BF037E4301D4473E7E8CAE36A87B4750363742D16000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BkZ%2BUTKSKh9OEoX1aLjIDyJVJdUPf6m5OFpAqKrpMyzyjEFECzyqCcSTRapg9hebXiZICh5LN9%2B3KBjLv8NIKITggmxCWe6G27KsOOTbvvmY0Yh00cnzCYpoXg5h%2F3e5"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33e85f50275d-FOR",
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
    "d88fd095-b6a0-4f9a-ba0c-be4db990e517",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248664",
    "X-Trace",
    "2B8FBC5A93CE05F2CB5AECB61CC89B8A3ADECC5B1D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Mk4dAtxtHeQOIPVFuwstl5qz6aZqwU4F60ZRA3Jr%2FE9mtUFr15Epakyj0CYBL3hxbnE2A9nmv5TwJcH9CWG1LOH9%2FLZyvSAEVwr9JFs5nPJCq%2FGNsUQAySesh%2F3ByiEu"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33e9ee292743-FOR",
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
    "ec1f54a8-0c6f-4580-adca-3bbeb1798fd1",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248663",
    "X-Trace",
    "2B199C5AEF7677E9831684427FF706D1D5CEBBD906000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U6TpGbcJGqARX27tg0l8hdE53mN6Ka52v7NEcsXfvZP9lQr4B8CqeKBBFbi1dFdAAYqQNsYoa781aCH9YDyzFYydSHTQRx%2FpPYvzbqtJzRmLjW%2BgXWBdloZ2b6kyzqZ%2F"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33eb7a35e08e-FOR",
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
    "8b16b73c-8d1a-4414-9e2b-ca1c172deea2",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248662",
    "X-Trace",
    "2BF4705CE95BCDCC136229003A6FDE23522AC010E0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=udAASxsZ5rVVeO%2B0MkNe4CuiNKgsfyHD9UYF73aAa%2BlQbRKSoAtMb59MbZFy7vNh%2BoGdyT2rEOcIM9LJcM4K7frNI08dYl0YZt0Jc45KmQGIm6ij4LlSsifE9sJ3hFwT"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:15:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33ed3ed02745-FOR",
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
    "35ad356f-1dce-4a28-964b-96462a09f186",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248660",
    "X-Trace",
    "2B652EB8AFDBD6BF34DAFCF5BA45AC77F8B7050D76000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mQirobW9zjcvaD5FCWAxK%2B0gCHMRRqPXJVYTn%2Fd%2BSeya9Zk2%2F1l6e%2FLSc0C6RHj4s2avDwd74P9oluRAJPfJvaVIr0bM%2B1ofPmCzlBwepFukX5iOEep1LW8tPYO7%2Bi8c"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "0193e25d-2686-4692-aa9d-78661168ee34",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:15:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33ef0fc0275b-FOR",
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
      "0193e25d-2686-4692-aa9d-78661168ee34",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248658",
      "X-Trace",
      "2B8C9BE3753A1C7629BCC9DDCD2CF8DF0A49AE5C63000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KxWreB8NhxxN7Gy%2BDqAPVcQX2ohL3pDoEjj5%2F3BMDrlX36mwHUjLnCaPGQ4ig5ewek%2Fk14ErKjSLkUOVb5cpSAznNryIMoAganYxMm2p4B99proEeHJKnDiT25Ljke08"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    properties: ["domain"],
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33f94e702737-FOR",
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
    "658da53b-c999-484b-b9f2-0962bb19726c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248656",
    "X-Trace",
    "2BD5597469407E8F14EC58ADABC272630651DBCECF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NyDHfeW9m1T7rV85egVI3F0l9aF9ogBPHuhCQEGV3ckGDU5n5yBtGL7jsMPXeC8jk7pkFWoXsVIibs02qQsjSGvBB4lN3wGc7KxjY%2FaXVe89grYfH79Ts9eNzSkZXWTq"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33fafc71cf8a-FOR",
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
    "afadcfea-2315-4c51-96da-2f7cffff2623",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248654",
    "X-Trace",
    "2BADFAF0088F852C280DE80F17B1F5C4B7F7F3E7B0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Pyw9fDxyH0LmNFfCYks7Y0FfAtt8dFm2PPjCOFPLBiMAOHfp1OpCPGgou49cSdez8nG%2Fc%2FLycLhbja3PBdPFNP%2B5LJxROarrZ77JnUswLX1RjH1Q%2BS4%2BrmoRVESyzco8"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a33fc8f62273d-FOR",
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
    "120fe336-9eba-4ac6-a39a-e0c2b992ebd3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248653",
    "X-Trace",
    "2B0EB87EFBFB298972F3BCEB3AE539C1C7881A3A9A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SkL3Xxdv13OMUwqklh970jsUftl4O1EBIkpnPtiDYut3oRTH4%2FBZ5wKKy0SJcOeUiGbbwUJitAnx4Bn0G1Gykx5x1Nrv4rG0HKM4rVIqgd2QzlNBlHCQbbBea4MhsFKF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "7983453109",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user1.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453109",
            name: "Fist Name 1",
            website: "www.1.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453112",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user38.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453112",
            name: "Fist Name 38",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453194",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user3.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453194",
            name: "Fist Name 3",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453105",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user19.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453105",
            name: "Fist Name 19",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453107",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user15.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453107",
            name: "Fist Name 15",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453199",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user12.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453199",
            name: "Fist Name 12",
            website: "www.12.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453103",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user39.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453103",
            name: "Fist Name 39",
            website: "www.39.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453110",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user22.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453110",
            name: "Fist Name 22",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453089",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user20.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453089",
            name: "Fist Name 20",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453097",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user30.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453097",
            name: "Fist Name 30",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453204",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user8.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453204",
            name: "Fist Name 8",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453094",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user4.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453094",
            name: "Fist Name 4",
            website: "www.4.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453203",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user36.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453203",
            name: "Fist Name 36",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453206",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user48.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453206",
            name: "Fist Name 48",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453197",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user24.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453197",
            name: "Fist Name 24",
            website: "www.24.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453090",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user11.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453090",
            name: "Fist Name 11",
            website: "www.11.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453113",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user32.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453113",
            name: "Fist Name 32",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453111",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user41.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453111",
            name: "Fist Name 41",
            website: "www.41.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453095",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user16.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453095",
            name: "Fist Name 16",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453184",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user47.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453184",
            name: "Fist Name 47",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453196",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user18.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453196",
            name: "Fist Name 18",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453104",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user10.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453104",
            name: "Fist Name 10",
            website: "www.10.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453207",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user29.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453207",
            name: "Fist Name 29",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453193",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user40.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453193",
            name: "Fist Name 40",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453189",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user37.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453189",
            name: "Fist Name 37",
            website: "www.37.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453186",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user14.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453186",
            name: "Fist Name 14",
            website: "www.14.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453200",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user25.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453200",
            name: "Fist Name 25",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453187",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user7.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453187",
            name: "Fist Name 7",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453088",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user35.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453088",
            name: "Fist Name 35",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453091",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user5.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453091",
            name: "Fist Name 5",
            website: "www.5.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453188",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user28.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453188",
            name: "Fist Name 28",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453101",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user6.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453101",
            name: "Fist Name 6",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453185",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user23.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453185",
            name: "Fist Name 23",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453108",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user34.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453108",
            name: "Fist Name 34",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453102",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user27.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453102",
            name: "Fist Name 27",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453191",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user33.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453191",
            name: "Fist Name 33",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453195",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user9.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453195",
            name: "Fist Name 9",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453201",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user31.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453201",
            name: "Fist Name 31",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453099",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user21.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453099",
            name: "Fist Name 21",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453198",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user43.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453198",
            name: "Fist Name 43",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453092",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user26.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453092",
            name: "Fist Name 26",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453205",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user17.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453205",
            name: "Fist Name 17",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453100",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user0.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453100",
            name: "Fist Name 0",
            website: "www.0.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453190",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user42.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453190",
            name: "Fist Name 42",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453106",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user46.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453106",
            name: "Fist Name 46",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453192",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453192",
            name: "Fist Name 2",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453096",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user45.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453096",
            name: "Fist Name 45",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453098",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user49.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453098",
            name: "Fist Name 49",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453202",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user13.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453202",
            name: "Fist Name 13",
            website: "www.13.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
        {
          id: "7983453093",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user44.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:01.131Z",
            hs_object_id: "7983453093",
            name: "Fist Name 44",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:01.131Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:16:01.130Z",
      completedAt: "2022-02-22T18:16:01.303Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a33fe38a7275d-FOR",
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
      "be716851-52f1-47d3-aeea-619b9365a698",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248651",
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
      "2BB69D6871397F32030B024E8DBC0989F29AF6B058000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LtDznF5SMtJKTXU7JCsEfq5BB1dSwOT7nweL7UtjGmzyjaTGIfye0ZIH9kKvB5ai92hmRbjZf1cNqgrWCU0FE%2F3VOyj4JvZ%2Fg%2FVymwT%2BxcDDx3yfKGI78XAPDwZZEYAI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:01 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a340109cb2745-FOR",
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
    "ff6b34d4-db7c-4645-8eb0-dbae95247a38",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248650",
    "X-Trace",
    "2BDE555EAB2AA43E09D53EC878B58A157279F88BE0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QGSGeiFc1dGlJztvs053MEFxYtAzhFVjB92IA86I4lwHfAwbFnZ%2Bs%2Bx89zHSAcfr9FiyvaDqy1BI87b%2B9S%2BPBBw3UhqZ65x%2FZPpY1Q1yszXeNZ7YScAW6d7J8cozNPoI"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3402bd262745-FOR",
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
    "7c2f2cc1-c181-427e-959b-5c6885b526ae",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248649",
    "X-Trace",
    "2B281B9B20FD3A16833B7B912CC138135E921D2E60000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AQxg2xxx0%2FxfMmHmuUN4nBeU8nHyWnhqGBb42J%2BdZlDSWXi2fpM9crI%2FJc%2BOmAu0bg07chfYbeY88FF%2BulecZxxnqdB%2B95HbCC6leOiaxNnYtcHGNMK5DaiVyGmeapGh"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a34076a472746-FOR",
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
    "9111a65e-bc86-415f-889f-6b6ff1950b4b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248648",
    "X-Trace",
    "2B6D1A7E4FD790EBCB73E2753D3B7129ED0C6FD7B7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1bDIbxCFzvI2Y1iKBMrD7eiwz77LyjZ5m2fgQiwCoR8buryE8HTJPpqPe3ZAETK0AbFwyuQPGdNVA2aI7mUmr9CW5SeffZHvvd4ux%2F0Be1A7ftaINzTyJgXU6X6wHA4w"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:03 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a34097f11275d-FOR",
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
    "86dbe4cd-bf63-431c-b450-9d190c0e8ecd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248647",
    "X-Trace",
    "2B0A0E07A7952A272076A5B522D02F5BEFC01A7E0E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dXmzSoqGpTeRR1wTCBCz8mKGBRxS88CV01cUeLCoLyrq9m4voPAqvJqcsBtd1mR5FMD32UX2E4%2BV2sb%2B%2BgIkE8UVHkpAiA3O3PuQ7lp2PKD%2FDNhxUkHWn4WXyEk80taQ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:03 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a340b3e8ccf8a-FOR",
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
    "64b839ae-0541-4964-8b10-5ecc5ecd7621",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248645",
    "X-Trace",
    "2B88654BA2E468BF312C9A24EEE8829288CCA466CD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0IK3rUXDkBsnq7vVIubkbsXNvYKq%2BL48qcCVog5GUYb1oyxj11DndA73MW2L3pqskXFy7E8elODtGB3Rf67OX63Lz9gV1ICA7I9S%2BJc2l%2Bqe6T2S2cbCSIfHe0c9b19n"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:04 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a340d1804e07c-FOR",
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
    "4888cf6a-6761-41d4-88a8-02d076c958bb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248642",
    "X-Trace",
    "2BD3C91B72D221BFE5E1013DE4A9EAF521BA0860C5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Nnb88wnC%2ByVRb9k%2B4ijqsiQHDxvXPBcYjAZl9KVS5kJVAD3Uaz1FWhaP6u3NtzpjyydErlWbBJWqfBf5vQbQZ%2BkgXGrSlsQJTXtrGuIqBGxAVDtJsuzYUNhR8vquuSvH"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983453113",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.972Z",
            hs_object_id: "7983453113",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.972Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34120b5ccf8e-FOR",
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
      "4745517d-e61e-4a69-9e5e-a96aa1273aea",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248641",
      "X-Trace",
      "2BB30E12BD949B04EE3EA4B752B10F7345FB3D7C83000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uQtEaVDunwTw5kWxtKkYXCKkVvd2Kq5oZMsDXM150436w1Wa1K4YecRPueG8vDd%2FUYibJDSb049JL1193PliKZNwLgRwTastZvX0A6H60qgTUEoBe49wjU1xlBCsIk1X"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:04 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3413b9dee07c-FOR",
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
    "9f62272a-da7f-4dbc-a86a-8bc6266894cc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248639",
    "X-Trace",
    "2BD1902D10589C47E1A3A8F20030911BA665E7E938000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Km%2FLe282deAQFqi7Y4z9ZmEJsSD8WamEfWCA2IftBxfTY7p4%2BkCvztlbEhXnHc7FqUdk7ZnmU1cTmcpzkSN4D1ulSU65HT8AiAwNGlpD%2FA%2FTG7U5yX0a176wbYDH%2B0kV"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "f8942ef8-b00f-42fe-8947-e7eb0bd97708",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34155eabcf9e-FOR",
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
      "f8942ef8-b00f-42fe-8947-e7eb0bd97708",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248637",
      "X-Trace",
      "2B708BA8F141D13B8E60D8261576BC970B6D0BBB67000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e4sdZOrtYuOLju9hEVccc5vDgCrVpTQg8N%2B6KyC3AZxZkPZ%2FrKwTaFZNPumcUmWNU2Kv5ojVLo4cH7G%2BFxeXpf9SC3TmMa7XjGEqCitfvEy9rZ4fXiuaduFRiBD%2FWy0Z"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 4,
      results: [
        {
          id: "7983453093",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.301Z",
            hs_object_id: "7983453093",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.301Z",
          archived: false,
        },
        {
          id: "7983453190",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.303Z",
            hs_object_id: "7983453190",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.303Z",
          archived: false,
        },
        {
          id: "7983453193",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.996Z",
            hs_object_id: "7983453193",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.996Z",
          archived: false,
        },
        {
          id: "7983453198",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.245Z",
            hs_object_id: "7983453198",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.245Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a341e385d2755-FOR",
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
      "963305cd-ff34-4f96-b6b3-5ca9c44ddaf1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248634",
      "X-Trace",
      "2BB5CA46BF42C56525D9F852696AB884323EB15361000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RY%2FefsLaxVXauj%2FvSpuRabmC1WZDl92K3ZfMcBl8hqAY5uydE6w%2F6SoJD%2BKLJ4NyIUnrtHSwm%2FxjxCcbBmfNa3dQs5VVCV%2F7eQ2r4h1g95IL1bEKt1vpaARqxwuQD1nk"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453096",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.447Z",
            hs_object_id: "7983453096",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.447Z",
          archived: false,
        },
        {
          id: "7983453098",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.970Z",
            hs_object_id: "7983453098",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.970Z",
          archived: false,
        },
        {
          id: "7983453106",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.233Z",
            hs_object_id: "7983453106",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.233Z",
          archived: false,
        },
        {
          id: "7983453184",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.066Z",
            hs_object_id: "7983453184",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.066Z",
          archived: false,
        },
        {
          id: "7983453206",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.173Z",
            hs_object_id: "7983453206",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.173Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34214f8f2749-FOR",
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
      "6cfe49b5-ecd9-42c4-a04b-abee72cd94e3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248633",
      "X-Trace",
      "2BB4B290CECEAF0142770C59A1406213F5B038F5F4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c7RlYzH6yDDQEBmFEXNtrJ%2B3OOt30KhUT%2F2zHyyqH7uLx1T%2FjwS0CtHvTRQNsnLL47p8olv3Qgf0ucV%2FOPgDhsiy5TCmyBq1zCDmILePUClFbbWPlVEw%2FV1vhrJSB6Du"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453094",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.246Z",
            hs_object_id: "7983453094",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.246Z",
          archived: false,
        },
        {
          id: "7983453100",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.011Z",
            hs_object_id: "7983453100",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.011Z",
          archived: false,
        },
        {
          id: "7983453109",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.291Z",
            hs_object_id: "7983453109",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.291Z",
          archived: false,
        },
        {
          id: "7983453192",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.985Z",
            hs_object_id: "7983453192",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.985Z",
          archived: false,
        },
        {
          id: "7983453194",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.242Z",
            hs_object_id: "7983453194",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.242Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34debb072749-FOR",
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
      "5e634e49-28f2-40e0-a96f-5db9d148ffa5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248628",
      "X-Trace",
      "2BC21B59260CC361BC6C0F48419287FA7A6CE77EC9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3LBHL%2BkjVt0qfb2JsN3QmjsP6KS3SspncUJKNB0Q1wyAhx7Q54ELhn6ZswA7s1CScPHcRyGXeymVJfLZDedyEupZaDnleeQN%2Bfu3XyZeQtrRuvN58%2FehwGSrLcl1jxxi"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453091",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.057Z",
            hs_object_id: "7983453091",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.057Z",
          archived: false,
        },
        {
          id: "7983453101",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.238Z",
            hs_object_id: "7983453101",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.238Z",
          archived: false,
        },
        {
          id: "7983453187",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.235Z",
            hs_object_id: "7983453187",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.235Z",
          archived: false,
        },
        {
          id: "7983453195",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.968Z",
            hs_object_id: "7983453195",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.968Z",
          archived: false,
        },
        {
          id: "7983453204",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.738Z",
            hs_object_id: "7983453204",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.738Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34e069c0cf8e-FOR",
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
      "87d8b32b-25d2-4f59-ad9e-67075e49af6d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248626",
      "X-Trace",
      "2BED2D68282C8987F37528505EAC4812BDD6F18E1E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TGo3LXrJJUDnT4V%2FBE1aVMS2uJbQyH08SlR25E5qlxkx30RlwK6OlBwG9VbcaP2zq6yw6ppTFq%2FxJ7JWlH9C9BlQV7ioAkPXk38t7mCWnjWuLE2IoFkG1NCKFLMI4eCF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453090",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.966Z",
            hs_object_id: "7983453090",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.966Z",
          archived: false,
        },
        {
          id: "7983453104",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:02.800Z",
            hs_object_id: "7983453104",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:02.800Z",
          archived: false,
        },
        {
          id: "7983453186",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.067Z",
            hs_object_id: "7983453186",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.067Z",
          archived: false,
        },
        {
          id: "7983453199",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.069Z",
            hs_object_id: "7983453199",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.069Z",
          archived: false,
        },
        {
          id: "7983453202",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.242Z",
            hs_object_id: "7983453202",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.242Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34e259c7274f-FOR",
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
      "0ef2b669-c40e-4a6a-86c9-09f0704166cd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248625",
      "X-Trace",
      "2B0246009C23E5E1C814CBA96A041DCF3014A4D8D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aeKEwZWu0XRWrqpWb%2FnqO8XjBpGs6kUeq49b9biO478xv3GIssz7HsF7%2BvoEwFT97TCPZD80h4IBTKKe0aIbEHRBhfAK5x4We7UBaDyQi8Kr7z0tKMySnDsNuwenW5it"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453095",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.978Z",
            hs_object_id: "7983453095",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.978Z",
          archived: false,
        },
        {
          id: "7983453105",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.048Z",
            hs_object_id: "7983453105",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.048Z",
          archived: false,
        },
        {
          id: "7983453107",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.045Z",
            hs_object_id: "7983453107",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.045Z",
          archived: false,
        },
        {
          id: "7983453196",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.233Z",
            hs_object_id: "7983453196",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.233Z",
          archived: false,
        },
        {
          id: "7983453205",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.994Z",
            hs_object_id: "7983453205",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.994Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34e43bef2737-FOR",
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
      "6e2c9079-fd2c-4db6-9e32-31ba95885701",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248623",
      "X-Trace",
      "2BD3881483DA060D064B83C56CE5B5E62070D056C3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YqPjCsirpcjYBPVqQNHQo37ZKM5a9U%2BhgaPzU4icfFA0AQPCpwGYJiSWB2cBBsPoIOBmvpUxa5BJqZv5BpSot%2FyKrKixa4NteCRpjHQ7K%2Fr8mCfzNZvna3rpaVGALqI%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453089",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.980Z",
            hs_object_id: "7983453089",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.980Z",
          archived: false,
        },
        {
          id: "7983453099",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.293Z",
            hs_object_id: "7983453099",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.293Z",
          archived: false,
        },
        {
          id: "7983453110",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.302Z",
            hs_object_id: "7983453110",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.302Z",
          archived: false,
        },
        {
          id: "7983453185",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.981Z",
            hs_object_id: "7983453185",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.981Z",
          archived: false,
        },
        {
          id: "7983453197",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.976Z",
            hs_object_id: "7983453197",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.976Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34e95d0ecf9e-FOR",
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
      "e94088e4-6adf-4af8-8345-c3a11eec01c7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248621",
      "X-Trace",
      "2B58B82DB3918CAB497146972178EDE344351A23AC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cPM1gD5ZP3yUXxmS5T8PAMaWjFJ7JwBrm%2FhZclPaHkYXQ9lm8CkhWIp3Mi2SpDG%2FT0YKVDgpBukYx5MM7b2N3GtZZKZwH4xJ5FpRzcSLFU8Tn3VjDgTNbnX6zj%2BW0IhD"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453092",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.990Z",
            hs_object_id: "7983453092",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.990Z",
          archived: false,
        },
        {
          id: "7983453102",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.975Z",
            hs_object_id: "7983453102",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.975Z",
          archived: false,
        },
        {
          id: "7983453188",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.009Z",
            hs_object_id: "7983453188",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.009Z",
          archived: false,
        },
        {
          id: "7983453200",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.972Z",
            hs_object_id: "7983453200",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.972Z",
          archived: false,
        },
        {
          id: "7983453207",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.073Z",
            hs_object_id: "7983453207",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.073Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34ee6d3f274f-FOR",
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
      "8f4d928c-fc81-4d7e-89e8-ab113962671f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248619",
      "X-Trace",
      "2BC130E733D95D7279B5A530283EC7AFB50E5E8CBE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y5t4WPrZrgc6DRK7bn%2BHpdbhG%2FYnZGHMDxsvN4Y%2FjQoZPPGuFHRQuBq4%2BNNlTLNOIgybgV%2B7Vrs33ZHzAKehtuHq7g77MLxCKKOy8kujOvE2HrRZQ1srGIOvrl4fkh4x"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "1fbb68f7-4f95-4f42-9e5f-7009e21fd714",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34f00e03275d-FOR",
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
      "1fbb68f7-4f95-4f42-9e5f-7009e21fd714",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248617",
      "X-Trace",
      "2BD470D12277794376C2B64C8EB82F6EE50B9128E6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=i389HbHRcULkJMUnLGI8PjRlHdJVQOHsx%2FaxPCWP4OtwA8%2BDa9iD7g4NPUAYE5wm%2BUiclCVOm%2B8GO9kGc6KRd5rjlRqVJDnLiglXbA5bL0HwLNOM5kEcw056kPcJfEZA"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453097",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.976Z",
            hs_object_id: "7983453097",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.976Z",
          archived: false,
        },
        {
          id: "7983453108",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.990Z",
            hs_object_id: "7983453108",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.990Z",
          archived: false,
        },
        {
          id: "7983453113",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.972Z",
            hs_object_id: "7983453113",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.972Z",
          archived: false,
        },
        {
          id: "7983453191",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:02.767Z",
            hs_object_id: "7983453191",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:02.767Z",
          archived: false,
        },
        {
          id: "7983453201",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.093Z",
            hs_object_id: "7983453201",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.093Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34f87bc1cf8e-FOR",
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
      "7b8f12c3-6b56-4918-a29c-559669c0b23c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248616",
      "X-Trace",
      "2B695884B1D23343353601E1661FE8B3BE86C0C42A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KjfESsFparqtLbvj5WN9zkEnTyl%2BUHLPqiSlaMc82EtY4ilwPOrCez0lkYdhgip0hoKLtdelaRImHBF%2Bd8YS6cDXVwNKpMrNcTSnjrrcLnWD1AWI%2F4vX4Nv75CiojmJ4"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453088",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.066Z",
            hs_object_id: "7983453088",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.066Z",
          archived: false,
        },
        {
          id: "7983453103",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.239Z",
            hs_object_id: "7983453103",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.239Z",
          archived: false,
        },
        {
          id: "7983453112",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.986Z",
            hs_object_id: "7983453112",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.986Z",
          archived: false,
        },
        {
          id: "7983453189",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.986Z",
            hs_object_id: "7983453189",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.986Z",
          archived: false,
        },
        {
          id: "7983453203",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.078Z",
            hs_object_id: "7983453203",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.078Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34fa6f69cf8e-FOR",
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
      "4de25da6-76b3-4ab9-8efa-6371958ad8bc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248614",
      "X-Trace",
      "2BCFE58ADC08AF39CDD0473D8D187DDC47CD235FED000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qmQWa2Q3tqmnOmOxIVJLnK70lXzl3vm6nDq31wCLiRkawCU3MMxvIOX5kcbWu9guPlJ0y9IZNN849WLXpHktOvuNrZuaB%2FbiaTdAUCLYhmAmQjf%2B9jLIwkciJA%2BqkMiV"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "cc9fb7d3-1aa1-40f1-bd1f-f720f6162a13",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a34fc2f5a275d-FOR",
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
      "cc9fb7d3-1aa1-40f1-bd1f-f720f6162a13",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248612",
      "X-Trace",
      "2BEDE268AC04FA3E2AD4D713174F7A8F9A432E8AB8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AbIGkOFEQS%2BfP2JIQzk%2BeQk4PNCWqUoZGABa4aRwd17Cc0J8zWIaxyu54hxcDR1IR9efkH6PS%2BZRALxfEcCDuPvN%2FXWqwJfhjXCSuPAGGSyp3SO6RfavvadBrhesK6pK"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453093",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.301Z",
            hs_object_id: "7983453093",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.301Z",
          archived: false,
        },
        {
          id: "7983453111",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.082Z",
            hs_object_id: "7983453111",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.082Z",
          archived: false,
        },
        {
          id: "7983453190",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.303Z",
            hs_object_id: "7983453190",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.303Z",
          archived: false,
        },
        {
          id: "7983453193",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.996Z",
            hs_object_id: "7983453193",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.996Z",
          archived: false,
        },
        {
          id: "7983453198",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.245Z",
            hs_object_id: "7983453198",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.245Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a350439f62749-FOR",
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
      "34914bd3-1b8b-43e9-b180-1cd0caec9b11",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248608",
      "X-Trace",
      "2B30E4286D94FEDD4C8C2A865C981FA56DCDAE85EF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=v3e6tG9ZHxqFY4m4PHZTKwNscvhyttj%2FVzrwdT7pL1FLdIeizvg8GkHVD2HgcM6WgngJMFbZsVTKRPBsWVWlP8fiMFBhuPuJ2l5WfKNgcpy1QklfMICUmbcVlO%2BRS0Fm"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453096",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.447Z",
            hs_object_id: "7983453096",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.447Z",
          archived: false,
        },
        {
          id: "7983453098",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.970Z",
            hs_object_id: "7983453098",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.970Z",
          archived: false,
        },
        {
          id: "7983453106",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.233Z",
            hs_object_id: "7983453106",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.233Z",
          archived: false,
        },
        {
          id: "7983453184",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.066Z",
            hs_object_id: "7983453184",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.066Z",
          archived: false,
        },
        {
          id: "7983453206",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.173Z",
            hs_object_id: "7983453206",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.173Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3505f9982737-FOR",
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
      "13b73ccc-7037-4312-99f9-1fcc41a09d0e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248605",
      "X-Trace",
      "2BB95A11E43DA2AE1333D2FFB0C40FD0B0651F31F3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1EuAl3e9NxDeHU96%2FP6sL14YQlQ8WUfoAy98LgbWfVJMEdPyOFPWKxeGJBhhunEKRBjvnxV%2B3yItpf9GpvQDZIyfI%2Bt9QDhpdYcRYoKx98WQ9Af7I6VRnJZPbsCWzlvy"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453094",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.246Z",
            hs_object_id: "7983453094",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.246Z",
          archived: false,
        },
        {
          id: "7983453100",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.011Z",
            hs_object_id: "7983453100",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.011Z",
          archived: false,
        },
        {
          id: "7983453109",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.291Z",
            hs_object_id: "7983453109",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.291Z",
          archived: false,
        },
        {
          id: "7983453192",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.985Z",
            hs_object_id: "7983453192",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.985Z",
          archived: false,
        },
        {
          id: "7983453194",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.242Z",
            hs_object_id: "7983453194",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.242Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3509c983274f-FOR",
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
      "fbdf939d-21c2-43d3-9835-2a4b815a7267",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248604",
      "X-Trace",
      "2BB635729BE187C2A943A94F44057124C958FC3574000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7%2F4W%2FGqEbhvuJ9kzjKSyFla%2Fm8ngM9blNo80Cduf6MwsJLPnB3Kw7GA6DEwnR5d5pR%2BXTpB6RZLsGjuYMny%2BvnJqiq0mynSKRI%2BHG0wsNKQiMDqjfQCiY2Aba9RJr0Pp"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453091",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.057Z",
            hs_object_id: "7983453091",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.057Z",
          archived: false,
        },
        {
          id: "7983453101",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.238Z",
            hs_object_id: "7983453101",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.238Z",
          archived: false,
        },
        {
          id: "7983453187",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.235Z",
            hs_object_id: "7983453187",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.235Z",
          archived: false,
        },
        {
          id: "7983453195",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.968Z",
            hs_object_id: "7983453195",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.968Z",
          archived: false,
        },
        {
          id: "7983453204",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.738Z",
            hs_object_id: "7983453204",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.738Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a350bd8d2e07c-FOR",
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
      "22c17b03-19b7-4308-9f62-e2c707ce2fd6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248602",
      "X-Trace",
      "2B20D899C993C584C5D258FD15C38CF5185F53B84F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XxnoMuwmdrTKwge5%2FjhpkuE4%2FFuK4%2FW4ARH5KA1q%2B2Um9KQL5Wx9hx5JGLEln10rjdXhFzUXCeGKgofl8Nc7kcqeFpMKzHCHo%2FC%2BRnoqPcCi4qyUaxbdIN3xNvteYV3r"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453090",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.966Z",
            hs_object_id: "7983453090",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.966Z",
          archived: false,
        },
        {
          id: "7983453104",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:02.800Z",
            hs_object_id: "7983453104",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:02.800Z",
          archived: false,
        },
        {
          id: "7983453186",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.067Z",
            hs_object_id: "7983453186",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.067Z",
          archived: false,
        },
        {
          id: "7983453199",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.069Z",
            hs_object_id: "7983453199",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.069Z",
          archived: false,
        },
        {
          id: "7983453202",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.242Z",
            hs_object_id: "7983453202",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.242Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a350db9102743-FOR",
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
      "45af1bf4-c544-43e9-a488-6aa664777982",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248600",
      "X-Trace",
      "2B18C1AF784539F54CF2A4FC47D4BC3869CC77AA25000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YdOBQaYeBHQoRZTOFcndQoetOuZfMAXVJgiAjQUdile9He%2FRgDUi8KAj5lzvPGO56DssrapaYEuo1AMLV3CXluPsNBbk2%2FpAFpjKnc3yDQLgSz9Ys2Hx6O1fY%2FquBPkv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "f745fb15-9414-4ca3-8b18-061ed672b1f7",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a350f5e71e07c-FOR",
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
      "f745fb15-9414-4ca3-8b18-061ed672b1f7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248599",
      "X-Trace",
      "2B10EF879A10EDF956BCFCDEECDE27CF66F0094FE5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vj9kTHmX2LmFs1Ey9mgvDowxAhusk4ZRiASWAscLXxrr9Bi7cqcqlnocwb9fSla0NvBeOWqxn0X%2BRZhN9HVlfYaoZUnhG0CDmSCUcpsV3%2BYgNRDvpZXajW3y4z4KH8wg"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453095",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.978Z",
            hs_object_id: "7983453095",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.978Z",
          archived: false,
        },
        {
          id: "7983453105",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.048Z",
            hs_object_id: "7983453105",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.048Z",
          archived: false,
        },
        {
          id: "7983453107",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.045Z",
            hs_object_id: "7983453107",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.045Z",
          archived: false,
        },
        {
          id: "7983453196",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.233Z",
            hs_object_id: "7983453196",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.233Z",
          archived: false,
        },
        {
          id: "7983453205",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.994Z",
            hs_object_id: "7983453205",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.994Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3517995a273d-FOR",
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
      "3d9e19b5-e5d2-4ce3-85fe-4eba3c80867a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248597",
      "X-Trace",
      "2B22B6F17440A950A3DD078B38463B485C1A791757000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x5wXbgNyCAXnG743BejaqhD1CxC2gATM6LdZcUCHp74JkW7rIkngCJMVV5KmkyHRpexJrJHZzcjwvYY1s7Se9wnz1pIw9uuEFoOdxSGkE%2BTRqWWMiVhcysxlqr4ki%2Fg1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453089",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.980Z",
            hs_object_id: "7983453089",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.980Z",
          archived: false,
        },
        {
          id: "7983453099",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.293Z",
            hs_object_id: "7983453099",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.293Z",
          archived: false,
        },
        {
          id: "7983453110",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.302Z",
            hs_object_id: "7983453110",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.302Z",
          archived: false,
        },
        {
          id: "7983453185",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.981Z",
            hs_object_id: "7983453185",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.981Z",
          archived: false,
        },
        {
          id: "7983453197",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.976Z",
            hs_object_id: "7983453197",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.976Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a35192cb42745-FOR",
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
      "3350bab7-a5f7-4382-812b-cb91db531e91",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248595",
      "X-Trace",
      "2B5CA18B366E4787329F89B717F138FB23BC817D18000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MCovQk%2FU1HkMAwQ8JITEgzkdA5tpzTkXAMJ7tE5mQKarN9XZSGQNC2mMIMnM%2BpyXQesEjdQ9I7gyXGBZnqVnu2tH5Hej2FGz7BfCUa6%2F8YkJyWSS9NOM7uR52Ig0cyJN"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "f49c26c8-9065-44b7-b2f9-c1ac6f9d51c8",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a351c884b2746-FOR",
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
      "f49c26c8-9065-44b7-b2f9-c1ac6f9d51c8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248593",
      "X-Trace",
      "2BBBB3D2BFDB8C9EFD700BBC54354656A3DD0D4AD4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eX%2FKZGQbNUA1gy5O%2B%2FgyqTTu%2Bw%2Bqku%2BsT6HetFiwugIZEHkPQv7GBZaDOHmYP9vywWBWICVWSHoK3ib7TepY7yhWJdIsXjQ5vgBGxp7lLLuih1wyin%2FPU%2BFeSNIS8PwF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453092",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.990Z",
            hs_object_id: "7983453092",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.990Z",
          archived: false,
        },
        {
          id: "7983453102",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.975Z",
            hs_object_id: "7983453102",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.975Z",
          archived: false,
        },
        {
          id: "7983453188",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.009Z",
            hs_object_id: "7983453188",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.009Z",
          archived: false,
        },
        {
          id: "7983453200",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.972Z",
            hs_object_id: "7983453200",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.972Z",
          archived: false,
        },
        {
          id: "7983453207",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.073Z",
            hs_object_id: "7983453207",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.073Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3524ce0f274f-FOR",
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
      "781abf86-4410-4e46-a651-b5cd512b1345",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248589",
      "X-Trace",
      "2B095322C16A750444D05654F401E9E359A4D10DA4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PlVXMtqccP9FPKWdhrRy7glrBnfWZjoijUplamEQhLCRH7Lcoym5LWH7X%2Fv1eYSZSMe5%2Bw2HeNR23PP6tmqyPLU9zFZ13PqNJk6vPYrxR%2FlSumU7gtm8XbC%2FBVCX0rp5"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453097",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.976Z",
            hs_object_id: "7983453097",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.976Z",
          archived: false,
        },
        {
          id: "7983453108",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.990Z",
            hs_object_id: "7983453108",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.990Z",
          archived: false,
        },
        {
          id: "7983453113",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.972Z",
            hs_object_id: "7983453113",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.972Z",
          archived: false,
        },
        {
          id: "7983453191",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:02.767Z",
            hs_object_id: "7983453191",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:02.767Z",
          archived: false,
        },
        {
          id: "7983453201",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.093Z",
            hs_object_id: "7983453201",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.093Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a35268f8ae084-FOR",
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
      "e36adca0-6ad0-4c30-8960-461333f26ef7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248587",
      "X-Trace",
      "2B39DD34FDD50CFEB9BAC37C6CE78E537B0DA2BF95000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QJ1pEbo8wZVqMLYHHiyO%2BLSZVA5iVuH5zN31Clq2RWpODFDye8tZeVfUR48RTrCJZMn2K275Pt8XWlfA2C79AmszefI2u9N8KpN3z4iDyZHwSGm8q9lBLkNUVHp4zIFY"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453088",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.066Z",
            hs_object_id: "7983453088",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.066Z",
          archived: false,
        },
        {
          id: "7983453103",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.239Z",
            hs_object_id: "7983453103",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.239Z",
          archived: false,
        },
        {
          id: "7983453112",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.986Z",
            hs_object_id: "7983453112",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.986Z",
          archived: false,
        },
        {
          id: "7983453189",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.986Z",
            hs_object_id: "7983453189",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.986Z",
          archived: false,
        },
        {
          id: "7983453203",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.078Z",
            hs_object_id: "7983453203",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.078Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a35288c922745-FOR",
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
      "b330a704-36c0-4262-a257-3402102ced31",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248585",
      "X-Trace",
      "2BA9D15B995EE10D365276466614C0E77E1AE2F9DB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3Y4vJk6mFwYp2T6QzfRVeRjdBWfnwHEA7547tVqcybclr%2FQA%2FbUaK6%2BcbqWRWZdWjY%2FToZMI85UMdKgFq68YNJ6%2BzpXEL4qpHLHDzy%2FEmcAMpm6IP3D81pGKmJPOrDKl"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453093",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.301Z",
            hs_object_id: "7983453093",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.301Z",
          archived: false,
        },
        {
          id: "7983453111",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.082Z",
            hs_object_id: "7983453111",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.082Z",
          archived: false,
        },
        {
          id: "7983453190",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.303Z",
            hs_object_id: "7983453190",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.303Z",
          archived: false,
        },
        {
          id: "7983453193",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.996Z",
            hs_object_id: "7983453193",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.996Z",
          archived: false,
        },
        {
          id: "7983453198",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.245Z",
            hs_object_id: "7983453198",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.245Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a352bfddd275b-FOR",
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
      "29c4bfaf-0fa6-441a-901c-254a7fe6bca1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248584",
      "X-Trace",
      "2B2EC6FA5EA5E33548408DF61FA435B424505E0577000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Uy34f3PByvv1JX7OqSrem76JTxmgti7M3EBNVTZLWSnaobRzg8l%2BSQRbiKA4OH5xT8pP9vJG%2BfZ4X6vcmo4bxA6ZtvK2f1lG3snhrzoofhfr0YxZxCzCcGksW0bMDsRC"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7983453096",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.447Z",
            hs_object_id: "7983453096",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.447Z",
          archived: false,
        },
        {
          id: "7983453098",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:03.970Z",
            hs_object_id: "7983453098",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:03.970Z",
          archived: false,
        },
        {
          id: "7983453106",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.233Z",
            hs_object_id: "7983453106",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.233Z",
          archived: false,
        },
        {
          id: "7983453184",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:04.066Z",
            hs_object_id: "7983453184",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:04.066Z",
          archived: false,
        },
        {
          id: "7983453206",
          properties: {
            createdate: "2022-02-22T18:16:01.131Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:05.173Z",
            hs_object_id: "7983453206",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T18:16:01.131Z",
          updatedAt: "2022-02-22T18:16:05.173Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a352d8fa82755-FOR",
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
      "e3c8720f-d90e-449f-9486-af35111ad19a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248582",
      "X-Trace",
      "2BA1C65733A2EC1A38BB5A6AF9EBD1C420CBC09035000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CONAy7YyRQvMphLAVq2OfUQPiBlxl0EvnYBKEDS8nQJU4xzTjU1H%2FY9%2FRDN8g%2FWtErgIMXuCQo3dP8oZhGcmtrJLO91J7b2FKdkic3316rSiotH7I0SkLTRPZPcf1J1L"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7983453094" },
      { id: "7983453100" },
      { id: "7983453109" },
      { id: "7983453192" },
      { id: "7983453194" },
      { id: "7983453091" },
      { id: "7983453101" },
      { id: "7983453187" },
      { id: "7983453195" },
      { id: "7983453204" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:16:50 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a352f48d6e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b5291504-e8a4-497e-8f79-4f319affb745",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248581",
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
    "2BF9463AFB622CFCE91086A54E34D6064581D6516A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1Osl1g5b5jSah4vMg8diO6Yq7VzxJK6Zifc48Dp6kRwdoLRtVQc92Qa5cNJ96wOKnoZf7NHi83wP5HZEXrrn%2BMBhQFxMLMVLOZqswLRAbHXe1yc5AhbpLeOPP49umHy6"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7983453090" },
      { id: "7983453104" },
      { id: "7983453186" },
      { id: "7983453199" },
      { id: "7983453202" },
      { id: "7983453095" },
      { id: "7983453105" },
      { id: "7983453107" },
      { id: "7983453196" },
      { id: "7983453205" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:16:50 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3531aaea2749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5043c849-0d00-4415-8ab1-70b918f31531",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248579",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "93",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2B995714A3B1B28D7692771D279956AA321D514F6B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gfe4rN6KYyTm4Uzd5f2s8jYejLH63FkWa3OAYC9Z8KeElVvXodo5%2BI4UYA3sJ%2FoXfIAvm32m%2BuKZ7QD2sFahAH8syXdu4fblEyPihk%2FM6pqfR3Od%2Bxg4lnWsYIpY3CyE"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7983453089" },
      { id: "7983453099" },
      { id: "7983453110" },
      { id: "7983453185" },
      { id: "7983453197" },
      { id: "7983453092" },
      { id: "7983453102" },
      { id: "7983453188" },
      { id: "7983453200" },
      { id: "7983453207" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:16:50 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a35333b58275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2b4d8b16-959d-425a-aa6f-e39e5b045edd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248577",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "92",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2BAE7C086D93319012AC366A9C4A6B8CECBE5ED6E8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mGdiYWdXEuXyvPc%2B63htJohhugAay0Qi9cF%2FV%2BE9sq3lxHWIL7AlDDfoRe5W0%2BwES5JFLB0Xmhaqw4ToCg9PqSXCdNRL8A8o4wHpAzpp%2BxCSNm75nQW%2Bq0Q3lX6WUdBB"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7983453097" },
      { id: "7983453108" },
      { id: "7983453113" },
      { id: "7983453191" },
      { id: "7983453201" },
      { id: "7983453088" },
      { id: "7983453103" },
      { id: "7983453112" },
      { id: "7983453189" },
      { id: "7983453203" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:16:51 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a35359abfe07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4b66bdfa-17ba-4434-84c5-3bb66147a5ef",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248576",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "91",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2BB5014B43C1369DC9424B22E05C5BB479CF917722000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0A%2BZweqBsAH5kWS6FG70UViVR4OMvZ8JPY2U5hJC0FchGX%2FMzwl1bvrhmWwK5J%2F9WBWgG5zlda31tim542QDqQfLVbbhrrq5xq0Bm8JyEyrW5%2BsnUYGjmtiD%2F%2B%2Bse4bj"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7983453093" },
      { id: "7983453111" },
      { id: "7983453190" },
      { id: "7983453193" },
      { id: "7983453198" },
      { id: "7983453096" },
      { id: "7983453098" },
      { id: "7983453106" },
      { id: "7983453184" },
      { id: "7983453206" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:16:51 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3537fc8bcf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "59df7fb5-4984-4a00-8136-a7238717288d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248574",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "89",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "8",
    "X-Trace",
    "2B6B9E11CB537C5237673FC069B2AC4519B0890D0E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jucs2Sze3A9%2B0TGtt2F71SMZf89kzLA%2BjQPLwDvnKO%2BZ3WovN1eetisfp9RQhMNpqmjLzQlWEDZhlnJxXP%2Bb2S470NDkxTSG2MYWWIbmeb3JxGQusxp2FRSxHFoYexEU"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      total: 3,
      results: [
        {
          id: "7983436802",
          properties: {
            createdate: "2022-02-22T18:12:32.529Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:20.031Z",
            hs_object_id: "7983436802",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:12:32.529Z",
          updatedAt: "2022-02-22T18:15:20.031Z",
          archived: false,
        },
        {
          id: "7982848945",
          properties: {
            createdate: "2022-02-22T18:14:45.334Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:15:16.947Z",
            hs_object_id: "7982848945",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:14:45.334Z",
          updatedAt: "2022-02-22T18:15:16.947Z",
          archived: false,
        },
        {
          id: "7983389083",
          properties: {
            createdate: "2022-02-22T18:15:20.282Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:15:22.770Z",
            hs_object_id: "7983389083",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T18:15:20.282Z",
          updatedAt: "2022-02-22T18:15:22.770Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3539e8d92746-FOR",
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
      "3e19bbdb-2164-4db3-9a7c-fb58ad20feb6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248573",
      "X-Trace",
      "2BCAF7E84C4233D7130489C883459D325DA7990171000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UFIVgh9S2wG3OpGrVfkVEtzYhUJtZtPXkiJ5VXSLLHxWKAD8UnIyRcpcdI6iT53hXRZdDJ7SKNRquhr0am7NcKb4yuf%2FbmahpgHwqtWxu4A6TE%2FqT%2BhVzW8yHIUCfXM0"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [{ id: "7983436802" }, { id: "7982848945" }, { id: "7983389083" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:16:52 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a353b79532743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c611df04-6507-4eb3-abd8-b3f52153df4d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248571",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "88",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "8",
    "X-Trace",
    "2B7E1C45DEC3841DA98DAA9AFF0DC801D23CE4D221000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dGD8fFWfYP76ztcntwLX4VZBbsY6XlOTFDZhqEX6D4Vnqyc9MdKYOl85TrcpagsPuLB79MjjvOpY6TYivnmEIK6cquyjPOud7gQcrHHbG2Y2qkkFIWxBb1HDSnIB%2BWLj"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a353f5b28273d-FOR",
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
    "1900797c-d125-49b8-872f-d598275128c4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248570",
    "X-Trace",
    "2BC6E47DAAF32F9791D5403977554579A7A3425179000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5hyXJ3MQyMnkqY7cYZkEeySNtqZmbPcU84E0QxfAtbpcZIX9UWphJSOiNk16TRgJmlvdKm2G25rdXIKfQrD5q5pnDBZXHb7rJeDuVyRQyg07Mao%2FKMkq7uzY59NP7DEZ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://auth.grouparoo.com:443", { encodedQueryParams: true })
  .post("/api/v1/oauth/hubspot/client/refresh", {
    refreshToken: "faux-refresh-token",
  })
  .once()
  .reply(
    200,
    [
      "1f8b080000000000000334884b8f82300006ff4bcf9220d962e3edb32da402d195a0e2c5f840a0ca23a8a1bad9ffbed9a873984ce687dc9a73569331e1d17c54d0fd23346a06489100b0620560c290cbd4faea288f39d761e307f3c009b44ad6deb25a9592994de61c8e95ae624fe8f4695d2e70230090f2dfe84326f0a6c83f85089c63db330b3398d712d81ae663227ad82a49f3a997d053b7797253de5d2deb85fb68fdb6f8a6011c5a444b85550e32209969cb6e772b9b3ace0e4d7dbc92f190d9f6ef1f000000ffff0300aa8b1f00e0000000",
    ],
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:53 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
      "Access-Control-Allow-Headers",
      "Content-Type",
      "Access-Control-Allow-Methods",
      "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS, TRACE",
      "Access-Control-Allow-Origin",
      "*",
      "X-Powered-By",
      "@grouparoo-inc/telemetry",
      "Set-Cookie",
      "sessionID=fb509b803146c8dabe2eeabfd62d71de28abaa21;path=/;expires=Tue, 22 Feb 2022 19:16:53 GMT;",
      "Via",
      "1.1 vegur",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LB%2B1LOlroj0Cv5jGfpBbVPtN5mewDb2aqR3YMfv1zlF2byEIW4SFXSWr8X7bU9HgOH15%2B3obwdIK85SKQtUeioQSPXMMuz0SRJTa7OmWxg34t%2FXNiBUUAOxI0xINgEY85zxVOrE%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6e1a3541b9d66af0-GRU",
      "Content-Encoding",
      "gzip",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a35452c53e08e-FOR",
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
    "4f44856c-6331-4e5b-b29d-95fb491f967c",
    "X-Trace",
    "2BCF397CC36777D3481E9F0E6A5FD06DFC31DA0869000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s%2BE0MmvMuImdzIqNm0GvWhXuOfbc1YInZCdrJq5SyALn1M9DCS3AkjFAOLKQcnaTkVnm4UrMqRXWJdNcj1mj7JfhfSDJGYfD27aqw5jvlKVirBKR6mA%2BBOLxaqm11HIi"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3546df04e08e-FOR",
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
    "d6509a39-c8c5-4a06-9d86-88a3b48e4d9b",
    "X-Trace",
    "2BB7E7A8367CCC0E16CEBECB0E68EA0DD4B851C968000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dLbDlkdI1PAtqx7uIyhUed5IU0LK69LLADvEotwNi8w9hHmKbpQ1hmcR7mgirp2Dd4PQwweg7OZFDlq54QngyLJ%2BiPMCU3mDbYcdUd3bQN6oakX05id6FdFiGEGXFuTn"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "6e67473f-c341-4909-b2a6-6c5f2303b743",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3548caf9cf96-FOR",
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
      "6e67473f-c341-4909-b2a6-6c5f2303b743",
      "X-Trace",
      "2BA5F6929DFCFFF406C7E4CC7E4E64A3C6FC2CDA6D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BxB7D4%2FzjUs%2F6193FI7QU5pwqzbMfTMgmeKm5QF9QxcMKmBNkO6CoYARuKzZBqFN4aS2Hxp5bsgELObZgWTmMgBzn4xO16ED5Hz5j2FdzjeeZSjK6ztoGd9FxE3Q5Aor"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a35539e72e074-FOR",
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
    "9007d6c1-7f49-45e9-9f15-4ef7977cf017",
    "X-Trace",
    "2B96EEBF5889B39D2E919C0AD1673FDB0EFC7DDA1F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Zll%2BjWfRk0cFbrv8WBWdQDXCJs23KU2c8s0kr8%2BVRTN2Y9E%2F3mIlPLXw%2BJ%2BpUUeyzCD1hfTjucbbg3oa2gezJseVB82DZIEXgMZRdV6ieX1PZKEtne40ok6UkB%2Bi05SE"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3554f8c82745-FOR",
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
    "857c9ed6-e0dc-4e85-9ce4-5f7faffbdeaa",
    "X-Trace",
    "2B41F0025AE9974538B4FFC3600533906D3085B014000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2aavp1ziEMPoq2WPoH137csvitLzGlONHmV5c2JBv1Fc2Ivn9miI5zFqiBPpBHgR8jnKEH0U%2B%2Fm%2BvVGeBLlw02ZGIPG7orcXrpUDS1tFYGWjnecPu5gDciRORKYDGBjm"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a35568aca275d-FOR",
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
    "620eb561-cb38-4dc1-a481-6657e16483e0",
    "X-Trace",
    "2BAFFD7AF637598F60447A4E67CA3A5705F4DC0054000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j7ld6WpvjqbOr7c1bPf9ggEOOJ4SriUoyhAHPiAWPZV6UlUvyuzoZL7mbny4NTIILxI%2Flcl64tAfRbAXBknN2EJljJJkJJ7vaC3a2wqFZETrvqH0XTCM9uFbC8OXzRiH"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3557eff92743-FOR",
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
    "3ba03706-b509-4829-a650-9e53881ebbdf",
    "X-Trace",
    "2BB965F353B77BC9F9C3B1A8E9363233FA5818A8A5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IbNpzvqONZ%2B42HSGx6cPkF4DcPjCS8UnqnHAXnUEklbeIDaVQcXD98H4ygY0tYhR2psp78b5b6cRjv6XtvOcuUl5pi83dAw6Vdl7Curwh%2BXB644ojAq0pESeVCs4FcTu"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a35595e1be08e-FOR",
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
    "37f828d9-8e4d-4e45-8f24-af0d75ed1dd5",
    "X-Trace",
    "2BB0677368ED8AE162E4CF6EE218C190ACEC349116000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RYoVyJSwhCM1h4hi%2BJx2nzl%2FDmOg2H8kygCLkUzuovIlfEaJZY6UlYBALPnzKBoBw%2Bc1cjuvKO8VelFXBh6InWIG4LNZt7m928cAABpo%2BzwD8Eqv16VGprU%2B4XoVZYLR"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/create", {
    inputs: [{ properties: { domain: "grouparoo.demo.com", name: "John" } }],
  })
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:56.830Z",
            hs_object_id: "7983486584",
            name: "John",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:16:56.830Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:16:56.829Z",
      completedAt: "2022-02-22T18:16:56.870Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:16:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a355acf2e2749-FOR",
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
      "0c742faf-5b96-4ac2-aff6-0f3b3630f4d3",
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
      "2BC29BE1AEA09A3B3ED4EE508CB4B60ED45DA011A1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jfKIft3EpgdFqv3osSGtReQ%2FIA0eBSImyLbPEs%2BPefpivl6q%2BTGTNRLUB0XD6JJhLiCMhuibyZJOnWgb6TzcQQTqArXO6C6LdKMBCgQA0aFGLpzcOboLaRZ9b3EdMGXr"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:16:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a355c3d1a2755-FOR",
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
    "4a84272c-2782-4911-87fe-385a43693442",
    "X-Trace",
    "2B2AB6213E998C676856C60DA8DB239D027D579C0B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1NgAQqH73cGcTdILA0M1w06iWfXanVzle%2BlYPv79n9qz7Gwh%2F%2BEjOcEIDkwapcUmgkPWzFPfHDSYmO0pUOyOtJFYfoYZLM9nUHldu2lH2aSRWTBHJOptUdUTcxPLBNkl"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:58.697Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:16:58.697Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36194adde08e-FOR",
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
      "2730506c-8016-47fa-a67d-2e5ab1dfef7c",
      "X-Trace",
      "2B32D016B5B4883D0D77A1101D20A2199D8539D72D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=43i9TWKz9GGwSvQfIiNY3BHL0vrhGTV2OmBu8GNizj%2BuGot11aVfpFjjFW5DDBhI9ktX3pWnPLa2Ygg0j%2B9HSX1lPXBu2%2F%2FK2KRrnQg%2BWcX38RnzHF%2FfoPcLlJJaTemx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:58.697Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:16:58.697Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a361aed85275d-FOR",
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
      "d814c2db-8dc7-417e-a117-40a56ad6aa5e",
      "X-Trace",
      "2B65555D908DCB443E95231B8AD85687470F6EA419000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aYrHwut38eTGOuUeGffplHJLOR7T4PuDNDLRbOuhLjucNZ2Mc8%2BCKEJE2PKptpyEWx9vAwFqHP2qS0uXZCY1YjDCZLV4KaN0NszIg%2B9V4lKqjT0Zgzg2PmTYNepKsepq"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:58.697Z",
            hs_object_id: "7983486584",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:16:58.697Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a361c5f30275b-FOR",
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
      "1bcf5c9c-9917-4117-b84b-173279109f3b",
      "X-Trace",
      "2B23555BFEFF789AE6FEF7A4A4A0376D3AEB7D2EE6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7TqQQ%2BHtdvoaTIVL9FjZiIlzRwPhCOwArKoglTxkEvRbdxy%2FYAwZCyxCXaA5DRU60yDknbBnMy0DdE36pinjtaTYZyW2b4eIsFSug0b34QyaGJK8yuZUkSiPY24KGejb"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:16:58.697Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:16:58.697Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a361da93e2743-FOR",
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
      "5a0ea416-dad1-4185-9df4-812b4eb39302",
      "X-Trace",
      "2BA1813644E72880F6D6B426237FC9739834204D32000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9xQsUN6cLOKSus6CcueI0qIc3bKcMIeiT%2Bo1Ew5ZagmELh6TsKa6fx8sd79q4wOEnaprQ9wGE7aCcrBb15vhf02TpLfi0RyFD2vhkBXoZJvtpOxOLBjTD9mhFOHFos0m"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:17:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a361ef91ccf8e-FOR",
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
    "7c4f6d79-492a-4ddc-b078-cf3b3c8f26b0",
    "X-Trace",
    "2B2440DF3DC99625BF808FE7B418E9F2AF9B56F871000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wnrGTqIeX9dfWvXwjmKQ9tcNUuCS3ewlWdQtiHh46leCa8tiFJJ8nDTDIUpkTueeeJb0lzxTKlEe2zcob68UOkRsM2BjBZEYn%2F%2FaPWdSJo4zvJJwcCjVB4a1QYa%2BVgUg"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:16:58.697Z",
            hs_object_id: "7983486584",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:16:58.697Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36206bb8273d-FOR",
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
      "9d908a26-d895-4cf3-9cf1-9121d01b6914",
      "X-Trace",
      "2BE36B391B1A9FED3953BE30D7D4BE689172DDB722000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VpPxgExhseEmBrJa5i0Au4TKRIneIjgbK2EI2WXpWIh%2B0Hf1CWWNMcRhR5%2F%2BgPz6O74WFpolwb94SMQ9%2FA77qaI5IW4Qqv6GJTgVzt9D15NTO8k3xudnfYRcBE5dxuHh"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983486584",
        properties: {
          domain: "grouparoo.demo.com",
          name: "John",
          website: "www.doe.com",
          facebookfans: "3039",
        },
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T18:17:28.743Z",
            hs_object_id: "7983486584",
            name: "John",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:17:28.743Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:17:28.739Z",
      completedAt: "2022-02-22T18:17:28.794Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3621eb30e08e-FOR",
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
      "a87a5f3a-6b8a-48ee-b465-c9ffa85109db",
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
      "2BAD27F5E545BA28C4C54EAF235E0DD2209055A54A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xtIec%2FdBllMMVIPeHLIM9SNpoIxakiEdtdgTnLMRaAoZpqsYms%2BPT1kw0piTG07NoTXTlQcVc3PUPVM8rbBVUoYOPQTPySmADl7TEvaoIP%2FxoaByMscT%2BB08RUfLyqS%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/create", {
    inputs: [{ properties: { domain: "grouparoo2.demo.com", name: "Pete" } }],
  })
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:17:29.019Z",
            hs_object_id: "7983477338",
            name: "Pete",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:17:29.019Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:17:29.001Z",
      completedAt: "2022-02-22T18:17:29.074Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3623b9accf8a-FOR",
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
      "48e57c41-8816-43df-a120-6501638fd55e",
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
      "2BBD97583B00444696263A714D33588C64135A7EC6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZEVFRBmpqg9PHZ8C3wPZWzV6TVNOlGyTG7hWkMlYSUY40EgSTGHyzNDWTKtGNMBBkMEM1NQYtbXY6DsLR9XLObgHnqf0BXWo9nTYs2q9R%2BK%2FRZKavlMraN23thgGhad9"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T18:17:28.743Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:17:28.743Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36257b0be074-FOR",
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
      "3756cce1-c953-43d7-8e9f-8615db4e22d4",
      "X-Trace",
      "2B4A070F68E3E74C2742BC3ADC1692C38E2814C272000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CLR6Bv3pEvN3r4WS%2BSQyowCedYvA%2F23ZtfujqL6Ls2zlFM%2BrFSqFDmhuzEBtvAfVt1gjJXYucLwQl0u6u%2B1DV4bJyk%2Fp06Z0H7VcxN0KpN%2FXsfIAqhxa%2FiE2E1JzVzrw"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T18:17:28.743Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:17:28.743Z",
          archived: false,
        },
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:17:32.535Z",
            hs_object_id: "7983477338",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:17:32.535Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36e2affe273d-FOR",
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
      "72299894-ca1c-4b96-9346-e2097ab78b25",
      "X-Trace",
      "2B7FB685EDDD12EA0DC68B06748FBE26D3C04E973A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qGwbu0Tu0nbphOVqjAmrH0ZIyWmEXqkHVrzFA3vB7sAMQazUG23YYkamDocAqHUPeN2iA%2Ftw0hRujG7HS7%2BGZS%2FHL4VvSdRR12z0vZKI6JO63E2%2FF9T8FTTR6uKSkn2C"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T18:17:28.743Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:17:28.743Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:17:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36e42bc9273d-FOR",
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
      "806d3fe3-e56c-4e1b-829b-cc8936c7f3cc",
      "X-Trace",
      "2BF9765887019607BFA5FB7E249DAC9CCC9B9F9BB0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VRKIqBGEAN3dfBP38l2e8lJjPkdFVTOq4kIIWqhtd27xgd8OG8EYZL9M7bKF1nItdlndRPHOtfN9qFd1Wbco1%2F7I2DO9ReqEA%2BpNd11xf9adW5r7g%2Bj4EAgEHuAjHv1S"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:17:32.535Z",
            hs_object_id: "7983477338",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:17:32.535Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36e5fd7e2749-FOR",
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
      "2a26e7e3-9d7b-41b5-a390-d43902fd882c",
      "X-Trace",
      "2BD8B9C323D6C1A8007A16FDCDD28930175EBBF7FF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PRfRfDYOXyO4pZa0D1DqmdqVmuKtBQjKS4Q%2BB%2Fw%2BPuvEYYIodCDnKJKMR4Ba2ZHKE%2B0oTh9Mt9GSdgzIilqmUJMWy30mKkKc8mr8DjkoXlLUD7mAL5HOZ7deptO0ctZM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:17:28.743Z",
            hs_object_id: "7983486584",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:17:28.743Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36e78daecf9a-FOR",
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
      "78062a61-4cd6-4c36-a240-d3f38772514f",
      "X-Trace",
      "2B792D47C0B479B341629C1D1C837B73C91B473D49000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F4O7Mykmwy2JfSF3gaZOjn8BRRrp%2BwX%2FnPzT1DZjPqeycrIXYS0KKfOtsw1ZDvZpGfhj5IaHSFU4wpsUoGDFhMOTgdPtlAAX6L%2FOwVMVDrNGwOpxzPAIBff76BjNFsjR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983486584",
        properties: {
          domain: "grouparoo.demo.com",
          name: "John",
          website: "",
          facebookfans: "",
        },
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:00.599Z",
            hs_object_id: "7983486584",
            name: "John",
            website: "",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:00.599Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:18:00.594Z",
      completedAt: "2022-02-22T18:18:00.640Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36e90ef1cf8e-FOR",
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
      "f7865cd7-e174-4d03-979c-ba30d61a8ef4",
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
      "2BDCFFB723B473C1312A1537182045D0F8578A8079000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oaDVkLttBZ1gUdOOZfvkquETnjlhVVMeAFjVw2FjCSF0sZxNbe4S2q7HAb7itXILanVWpMqm9bZDsUsj5TxXYLg9qOz4mJeJhRv6wpRBM9g57axAgH3GNN5y5Ccwh7%2FI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "13b8090a-f6e1-4294-aa95-c16236ce64ca",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36eadb4ccf8a-FOR",
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
      "13b8090a-f6e1-4294-aa95-c16236ce64ca",
      "X-Trace",
      "2B1BC69246A092159468F9D4470B45E55C580EF61D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=637wTKYOa5A0dGLX7voUSIe7xV2oBV3zaurFMexKyCrT1ZkS29HkK%2BAR0913xWN1zwrA4N2borxUg6T8zgItGXd5XPhzACPfRMh7pB0xMUvtbyv4QlMueauZO2R77Uo0"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:00.599Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:00.599Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36f3f8b2275d-FOR",
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
      "a244083d-3913-41f1-96f7-58befede7ada",
      "X-Trace",
      "2BA90F7F0900FBE8726C2BC85F38922F1CD286282F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ugmoGG2dTcUgZ4%2FV8ra%2B3u%2BH2jTvQk0yfX%2BzUUeGfmQctXKLbsAEgOOqvkRtMUoY32%2FT%2BNPK5hbss2RJDuXHjcGfJgI9DN2IPUYklBsfgNyKjv0NTWfLPeX4gvs6WNQn"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:00.599Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:00.599Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36f61a94cf9e-FOR",
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
      "bf1d485a-b0f8-4afc-8c88-4525962f69d5",
      "X-Trace",
      "2BFD49028B30474503E2D6AEBF9E035C39A9AE0B8B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Vq4aqEosWgYGKR6VGWnJgdy0sRAaeD6JDIuJAomO69em1FEQUAcj%2F40yJbygR7BrgIaCa5fUv9dKWh6R%2FtQA7YrUPValFP9awwJady4%2BEMyGT0W0JClmJ32of%2FpSH7s0"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "3e7f76b1-d60d-4926-b347-e2c3e4603ccf",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a36f7aa11e08e-FOR",
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
      "3e7f76b1-d60d-4926-b347-e2c3e4603ccf",
      "X-Trace",
      "2B8D814062F8D2BC5BE142A27B53667EEA4632BD9C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RWzowev7QIiGQlr9Dafs2%2FTresYd4za7b8BzDJVbFuJILcHBpIgXbsyrD0JixtqHTOyOphSyd3loUaZk1Ulqpn4o7Lk9L2hfYUi4AjeGqx2wLUA0%2BbygawJ%2FbwQNFPHH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:18:00.599Z",
            hs_object_id: "7983486584",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:00.599Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a370238aa275b-FOR",
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
      "3fff6515-bf7f-4dfa-9192-a2a5ccee72e0",
      "X-Trace",
      "2B81E41B8F41A9539D7F1438E50ADCDC2F3E470C09000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Fdv255QTzrM7Hki1Cm3cZv85I3zibjgpjz9QyuCkEsl55EhI9BgYgW9a5cOEkvWaHTXNTnM5QKUlmUWU2xFlaWxJ9iJca%2B5Vn64AV9X4FVUZteug6r6PLKMj0YbMVcb9"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:17:32.535Z",
            hs_object_id: "7983477338",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:17:32.535Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37039d61e074-FOR",
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
      "5c10d5b4-babd-44a5-9a1a-5685e82bc69b",
      "X-Trace",
      "2BB4AE0CE508FAA6618193A2BD374C0B0A2ACA8906000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n01yc%2BQ9m69LGeiaTZ8ixx6ILU%2FiF2GTX2p6Js%2Bc9G855TexrYqzwAVMmJdCB4b7wjQDkb1zvkuIJ0xqFM1QUhzOBAvc466Dv0d5XyZQvfs04jT8iVkh6l3IhZ%2B%2FOvz7"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983486584",
        properties: {
          domain: "notgrouparoo.demo.com",
          name: "John",
          website: "www.test.com",
        },
      },
      {
        id: "7983477338",
        properties: { domain: "grouparoo2.demo.com", name: "Evan" },
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983486584",
            name: "John",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983477338",
            name: "Evan",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:18:05.096Z",
      completedAt: "2022-02-22T18:18:05.143Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37056b6ce08e-FOR",
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
      "f75d5221-7fdf-4bee-b994-1cf03a9cf634",
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
      "2B2CF8D66E710266C3D51FB701C64B9FC5961AA52C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WTaNZZ47xi3Zh%2FAKKaJ4Sdx%2BwtDQdJBOAEmcmFOQy06nDR1YN6zEQLL1orGr3i9fF5i%2FTuwLWW7wkmp6eAHCZ8e3pXBebSi13qNVB7gV2MG6QTD4nFh4pVL3EN9nRkk8"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3706ee7b2743-FOR",
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
      "98ce2fdf-db4a-4321-ba69-705c9fa77fd8",
      "X-Trace",
      "2BC1DDBA064D8F09E53315C8E40E8A1219A26EF7C4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q9oq2aHYFuM9q%2FcO3Q88jLRcpTpzJ8ulwGyLpxpeG5sCO9etcVBh%2FNPZnCz8JXR5yP65UXPWl1xOIROVi3llA07GMHWmUcnlB2hruzkuXC8c%2BXUZrvXtNPh645%2BMdTZk"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:18:05 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a37087f42275d-FOR",
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
    "d0f670cb-66ba-4488-a5cc-1082b4761c54",
    "X-Trace",
    "2B3691DB49BF20B83CEEAE3BA8523233DDBCC8C525000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=253u4gXZ696HgpDZoIXuZDliVi2ykxLrHdb7eiHz1qjIhPOwP45QuqN6yPwR%2FJLMPc1mxhRoWMgmFnvWwnsV1PPRp5PBfPhvUkF3jkJqgvvwX7kKwVhxpaXFQOlql%2B43"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983477338",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3709ed882755-FOR",
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
      "62e4e284-384d-41c2-8927-dc9819ab5d03",
      "X-Trace",
      "2BEF01902804DFA4EAC9A2716758F234AD057757B0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ifu5sxqcmRRKy1c5ZZQjj%2BnVa5Jns9cy028QJajTEZnFfnBKTsacV8JO5OtH5kmb%2B38QX68D8%2FaclDnErK5kv6oALDFCs164GiWWUsl0hXs6p%2FU8E7p89g8TCyKCxOgf"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:18:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a37c739792743-FOR",
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
    "eb6f53a0-6531-4d08-99fc-ce736aa87494",
    "X-Trace",
    "2BFE9F3A5616EF8AEE896CD51D46594923CB182681000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FYvZd6stQSiB2TEhL81jRafI76ajMZU6psGLRBGdNFXrUl%2FCb1xSs7fJggonjFNjIBSJXOLkyutFh7g0RPJjZtr8Ho9JNYc%2BHu7fW8uuvn4Cg%2FMOgdxVx7YeHJCYlDq1"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37c89c802743-FOR",
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
      "d1890369-cd47-43a0-99dc-7e9e9fc79279",
      "X-Trace",
      "2B7648093EAD68297D5CCBA239E64C6C587409AD20000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4ZaGZS0sUs9ownUXX0G6jhdeVOaYQoIFY3sy0aj5F4QovJl0347s6%2B0i1HgAD7tSaCcd5mlv9pxlygi2NrmsHYQKCg3TAWiquL2qsg1VccGYQNynhh6JNOZaPiFnW0fW"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983477338",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37ca0c07274f-FOR",
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
      "d6d6465e-26e7-4a8b-9d07-d785fb50c13e",
      "X-Trace",
      "2BD0FB8A06933A69390D75E862D8BF5848AFD0E3D0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QsF11HLqOV12KLjAZUJcEwleZHpUcywTqMHuHmoakwWX3GmpQ7FFju%2FA0JuVsn9t8EjJ1RZWpINccVZFH06HrX7covoTDEhddwcCIkVVNN14ANV724BGnqdHidb2cFR6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "fa81b48a-6ddd-47d7-87bb-1202f8ffdda3",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37cb5937cf8e-FOR",
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
      "fa81b48a-6ddd-47d7-87bb-1202f8ffdda3",
      "X-Trace",
      "2BFB8D4533712D58762824FF851C6528ED33345674000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OfNqhxKV9VfDfI0aT3WWH4wdWpqkC7gwI9gRjbsdQshS5sd4WQ%2FBdWSAgpG9%2BGmth%2FZzKmAECY7h6lvqUEHiEI3GFBpJ%2Bq1gbvin65GQ7ZfOZvQH0LJm7uQ%2BHOG6ABdm"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983477338",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37d5ab332755-FOR",
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
      "6bd64d64-82b4-44e6-9583-399608eff79a",
      "X-Trace",
      "2B1C685E1DB6545CD805D6DF6E703A7F73146D4CA4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YbxaYMwcLa1F%2FP0uFhxegVfAK56bMXbsLei6rEYjFL2rQd4HQb%2BB9tXx%2B5xFP3UftxrkI%2Fahlpr6XnpBhY%2F1l%2BYZg7IGiWIyfW5%2B3ZBZFkf0YG3l0SfWtBzXRPtmUUxx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983486584",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37d759a1cf96-FOR",
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
      "c592e234-eca6-43c4-85be-c3f7a0d42dd4",
      "X-Trace",
      "2B6F4F71DA9DD0682AA6E0DEF7BDD6B2822C4567DC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5CmyiyXNWYsHjxXnnzF%2BQCpEFFx1FbLZ3C1swKvephZOjzqPQx23MPG2PCEir%2BpCPwyWwl%2BIsexKvMX84QO2WXkgi4TPuik%2FBzS04D4MzqxbvXHuIoEBIvmjLGQy2dLV"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37d8cd222737-FOR",
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
      "f321d884-d4da-430f-bddb-1b4365f07ee4",
      "X-Trace",
      "2B2A03E44B41C81C7B1A420DF767DA9369B8C93893000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jPZgj22EDJRMFbo3La9uPZ2VF1Uk1bpgNTZU6flx1Y1eUIn%2BT9%2B3jjkPHLUR%2F0oKItqo5xmSKxxBLhe%2Flncz8o4vbWwhRSHTYFU8rV6ZITxOzdQZm9MBWgjAgsZyYylx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983486584",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37da3b57cf8e-FOR",
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
      "8dc1c14a-3e2b-475f-86d4-e4ae5337593c",
      "X-Trace",
      "2BC1BCEBB3EE953DF2A90709BC7A300DF93F3B8274000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YSY4YP%2BaEmwCmZGXpCKyJUjNgpRr8Q8y6X4F%2B7mkP8MMz2XOl2vk5VGPOjBtVrEf4XY5fnjdWo4ihh6Z1Qg99wYzxMqvXRM5lAIzcucnpDzrywBQUybXvnZZ8knPOCuB"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983477338",
          properties: {
            createdate: "2022-02-22T18:17:29.019Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:18:05.101Z",
            hs_object_id: "7983477338",
          },
          createdAt: "2022-02-22T18:17:29.019Z",
          updatedAt: "2022-02-22T18:18:05.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37db8d5fe084-FOR",
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
      "49629cba-c028-49fc-a111-080e1544fbcb",
      "X-Trace",
      "2BAEF30863D71CC148FAA6FDEF4EEC71444D28C81B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p%2BGc7ye7x0Va1Wgil84XjnxRX3rjtH8ATRUiJPwenFcviEbDArGDJoX%2BpA3hJtL2pkhrfoDek6KkZE7p6Ay2eDc8GAiLq5B1qc7%2BVS0uCwur96YigfzSd6HrcqM%2BoSKt"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [{ id: "7983477338" }],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:18:39 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a37dd29fbcf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ca07bb7a-e4f9-443d-88f6-421781e24c23",
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
    "2BBD3C72E5DD17FEC4DEB62D8F5147319944FB50F2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FdiPvr7LBb7%2BdJYpOkDrCuKZQn1ZMgyAgQ2CorYq1nUrsvxY12AJySxp4V79NlcSglvzBut7rPmFr41KcwIcXfAWHcYlKHm7uWNq3Kj36290fldc4RlGqKuRc7vRVt2q"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983486584",
        properties: {
          domain: "grouparoo.demo.com",
          name: "John",
          website: "www.test.com",
          twitterhandle: "back",
        },
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:18:40.179Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:40.179Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:18:40.173Z",
      completedAt: "2022-02-22T18:18:40.217Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37dedef9e07c-FOR",
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
      "39bfd5f7-f1b2-4cdf-9af0-d5146f814591",
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
      "2BA803495E46737172D81D801052B9CCAB2E2FA8FF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1ANJGTvemBqxBrSiGPUvJqynLRP%2F%2FBzvRVnvHwq16B1b1STBmLHzFHBBZpjNGhvf45y7ghZH1105zktQ9mexX2TrQtkud1YgrYmEYh4b4FTsiKWeROds9NUqtcJdG5nH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:40.179Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:40.179Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:18:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a37e238c0cf8e-FOR",
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
      "4d2ed3ec-931e-411c-bec7-eda22b6958eb",
      "X-Trace",
      "2BEA7883E070259CFAC6BE7E8407764092EED3F47C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mKOrevsBA1KgeGmzcmPDCeXsP3E6zrUq8wKDfWdFgaGc8VOs0R4HCZjozs%2BEsgieyw3KbS2GKMkJiLG6GU%2Bk9jp%2B2JKQVwYItFEmp%2BIRvhf9BEUZPypRaRfvz6MkkISR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:18:40 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a37e37be92743-FOR",
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
    "bd8aaecb-c084-4464-8214-33bae388cec9",
    "X-Trace",
    "2BCCD37A5F38811A3B043D7FDD8B79E6D86DF34F97000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7L3lQkUwG5aFnnLr9IdJIyy3gALUJfgtTa%2B2SxmHZclhf2xHE02EQ4RfHC%2BagyDKJwN0Uufb3V1aCk1a5aoS8GN10YnIYM7JFEOSoMKUigA%2FYOi2uVw1QB%2B8QpdrnpoP"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:18:40 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a37e4c994cf96-FOR",
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
    "6c1f8948-7636-4a23-852a-4727c72871be",
    "X-Trace",
    "2B8D8E000888DE1941A635F43616FACBD701DB4F7C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n%2F58DB%2BFvIP7dsqcwFRGxw9%2BmqhOVXOZ%2B%2FMMsq8xS4dLbn1ef4HePmz58mIuwaCO4djvNSCC%2FXhT8CwyERDa%2BnPHacWAkjUbNQtlyI%2ByQu8ZZZejqk0X%2B6eDFnhVmEFf"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:19:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a38a1d837cf96-FOR",
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
    "2219a68e-b790-4dfd-b565-920dda0e3711",
    "X-Trace",
    "2BC78EA104D43AF6D3187916F17C9A9FD3776A1AE1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sWyWOeB%2Ff8e7skAt5FKRA7FKKsGD6OJkGJgi8fiGIqZy%2FdHXEkbWUhdOaWK80HND1qbTiiE2JU28hHaNxpGR97zWL7z2S1MH8xFRcRaIxQ%2Bh41ZLRjOmULvomYawlcfL"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:40.179Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:40.179Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a38a34ecf275b-FOR",
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
      "fcaca2f8-de34-4ac2-9959-4cd83d71688a",
      "X-Trace",
      "2B8E508B1E810758F5E1157A59244D401AE4F9D5AE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OkyxdZHHfZnkjonFGT9eU2EVrlWjVoGetZn4Co7uS4YsANKiENYVd8vc%2Fq2hBzC0S6HqzLl5%2F5FZfsxyCLmVhmDWGjMVWBnsYvOOehd5Zc5jCH5hrKF2XOT4CGMGu2xC"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:19:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a38a4fefb2755-FOR",
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
    "59546407-74e0-431d-b79e-cdb2aed155f6",
    "X-Trace",
    "2BA2EC846066F629F51AD3B5BF01FA39D1CB5905B6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sqFGS1Z85L65ygJ6UaQ%2BaP6%2FuNqNfVOSXgS06DxXblIrGsUmBO1mEh%2FfbVYkiUX092N0wexATJSa2MEdKScy42qxJZNbNwotdsoIHc25t3jHo%2FsUM22TPk39ev7AO2T5"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "4f782195-1025-4c65-9ff1-596862e6fda3",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a38a64b2be074-FOR",
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
      "4f782195-1025-4c65-9ff1-596862e6fda3",
      "X-Trace",
      "2BCDCE7762296E8AE080806567B498188CDB458B4C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kSM7mBegxuy3EX0fxfyFXjbAo%2Fw2nIFDp%2BbA%2FcJbCEra%2Bvz3zwSR5KBlSm8ZuQf8%2BZIK51YxFQVjXQBOEhLyxTYMqZufJwpNR54eJMHALKFicMXfN7v1jm6nb3kSCP%2Fh"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:19:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a38aefa4a2746-FOR",
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
    "7f57d2ed-2e9d-4c4a-b7e7-b96f894f20da",
    "X-Trace",
    "2BFC1009B8CDD53C752C4431B2659563B077D58141000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FrEvZKOaipbyOWnG2t99Tcu16heoteDC1SdPm3JuWn4mAdICLiU9BsGyMcPItOnXNW1cCUzBPIIQXfZ5uaO7squk%2FljpE7h80mpwjLVyvrZajPKkhoRWgiIgGBU2Qxnk"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:18:40.179Z",
            hs_object_id: "7983486584",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:40.179Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a38b09837cf9a-FOR",
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
      "1e0b2956-08cd-4ca3-9009-f9d9485edc59",
      "X-Trace",
      "2BD8955C8BE9DA493F7DE4B5390F0794591840E3C4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ev60p4yU0Fd9Igta5uQzwF2cEQd6JhCcI3V9hvKLQyBon%2F3V%2BSkzt%2BrLShUdpmfAoVVdgk9z%2FDuqK%2BJECHLlz3OYro5QzsRJ9xBzzOBxAN5VcV03tNwbrU3O%2BfkaIPvx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:19:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a38b1fafecf9a-FOR",
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
    "0f01a84b-1b9a-48f9-8b6d-9edaadd99e15",
    "X-Trace",
    "2B39767810EDD1FA501B5C03922A06CCE4731B17D0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dldzpszCyLvwhbyrWcgY5XUORmvdb80E06ZE3%2FZ5k1HbyFhwNs6Gr4ZFAO755npxOboJ2jJfPj%2BBfRvX1OyZP%2BD4h4FuNUIEIMhO07qflsxwoSLQbQJ4xVeqeBekvFEf"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:19:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a38b34e8ecf9e-FOR",
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
    "37765979-c43a-4a45-979d-1d14bcfe91f4",
    "X-Trace",
    "2BEE0C26D11048DC2F8C2452FD9DAB907FEA0895D5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FBelxT0OVtZFf5s9VfYC0jSWUpB26vqG3Q4Xmwh1O05vYTyIV5xyJQxoDG3EHw7b0exLxLtvEBy22ygY7U3K5f0Q6OqVqs1vxD%2FlMtKXjrdtBfxCONIZNkA412p283%2FL"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T18:19:14.106Z",
            hs_object_id: "7983423012",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:14.106Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:19:14.097Z",
      completedAt: "2022-02-22T18:19:14.170Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a38b4ae45e074-FOR",
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
      "dd4423eb-9e49-4c58-839a-cee220b73c3c",
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
      "2B753B7610A3DFAB3CBA8EB819903E783AB2211D73000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KnSBODizgIIOz1izNOhT6jDBqfPG%2BWdnlcjZKZZOZ1yas7Lgdxiyz5Qh1x4gZemq2H23xReb%2FCJsyFApkF3vRjoeN7qUfLZg3lW9uugL8T9CSVulV84J04DMyAsPOfT2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:19:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a38b648f5275b-FOR",
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
    "2a9ad02a-1718-46db-a2f3-6251d8eb4d97",
    "X-Trace",
    "2BBD7616DE21A45C511C493FF760B80F9AAFC7DD60000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Xrxx2WxMuQjTkMrFxCJVTyptwvFpVBoileyqG4UNmN73p0%2BwuIA5JZwnverRK5mP9s%2FjV5fp8%2BIvYIq5lcL4JEbSMBURwyBcjYFj9C%2Bfd7No7%2BjOReFgDEKDJJFrIjtY"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T18:19:17.046Z",
            hs_object_id: "7983423012",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:17.046Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a39734f9b2737-FOR",
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
      "baf53854-08fd-4543-8334-0e6d0ab9fd0e",
      "X-Trace",
      "2BF8D2936A71208BCF09E162634DAF00BDF6B54EAE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L%2F35alaFop1buq1LQ38GL%2BRfJlViBAUanPHRrDVi8PcS44eOff40A9JZLc89H9seUuxZYwtcqriJR3MQuJLj7N3ASmFfNGUTOVhD%2BAxbRvPQ8u%2FC0ogIIFn9IZyZe1gL"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T18:19:17.046Z",
            hs_object_id: "7983423012",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:17.046Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3974ae2ecf96-FOR",
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
      "e1493848-5306-49d4-bca1-f3b4c6179130",
      "X-Trace",
      "2B7ADBD1F083275449EACBC7BE893609A83181E762000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FUwdlMat4IQGriIJT%2Fj%2FfKwnbeyQ8uBGbJDvZ8tkZc3QVvfEG3DPnz2wtppTGM5O9JBcSdC2mfWRQA8CPkKYOzMgP%2BhtlxFOjA%2BovvzNJzv%2BEmr3DEhJhZhWqXYrhenn"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:19:17.046Z",
            hs_object_id: "7983423012",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:17.046Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a39767c11e074-FOR",
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
      "fbdf444b-5341-4fa0-a814-243f386c4f83",
      "X-Trace",
      "2B0AD81652739627EE7DA619A403BBEBA5BCFED035000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BVnCFsU2dqoMWTEx4zXG415GdjTVJtm3D26FL5wSAA1hA5jGePRn8YWaYcj7G2qjszFIXGuJH0eje3YRCm9vhyYOPh0yQQJT2vejPiLNtuXIKyNDUlz%2BnircTDUdA2Ia"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983423012",
        properties: {
          domain: "grouparoo2.demo.com",
          name: "Maria",
          twitterhandle: "",
          facebookfans: "",
        },
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:45.374Z",
            hs_object_id: "7983423012",
            name: "Maria",
            twitterhandle: "",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:45.374Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:19:45.363Z",
      completedAt: "2022-02-22T18:19:45.410Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a39780eef275d-FOR",
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
      "db9bc07f-2d9d-445a-8d5f-8bd6e6265e67",
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
      "2B4CC90DEFEB5B28E9DAD1534C4BB2EAE667779F24000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YqPvgYJsdHKlUXthaD2zKoecI0B0CTDcKL944jHWoiFbgXn%2B2g77masdt39k%2F949fDIdAroqyQpu%2FPIAFU9d84osV6Fw1dUygALxkMl125SzY1GQmtSQ82ZMnXlUKyJD"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:45.374Z",
            hs_object_id: "7983423012",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:45.374Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a39799d1c2749-FOR",
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
      "5e793207-ba07-42de-854e-5eb2e8209ac4",
      "X-Trace",
      "2BD2DCB932431545E2C1DE840B78F01234CF42774A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B88sbPphdIrgLY9IU4w3fbmdX63mYZJ%2Bc9E11ty%2FOFXGrYzVOzH12psFokbFkwGvAt9%2BxViktszGnQBThhYJjtAxiNuuae6%2FKKxxxHlIgOR6MHgryA1MFrbF4HClYyAr"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "0be73f01-1d0e-4a8e-a448-522302d07df6",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a397aea22e07c-FOR",
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
      "0be73f01-1d0e-4a8e-a448-522302d07df6",
      "X-Trace",
      "2B2FA3FB9347D546C6D3605853C2E5835768FCFACF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6ebdQy3QqICbC83CpyroD8TgbdTntcvtxwj1tPkudC9Lkr9k7PjduhU7utuyFQflhe08UARDW4WyGn%2B%2B7DxSKbLAMOXiNvX8uFWYtWyNLXiaBoJ%2BBLMOwMxmL9%2BpZ6zD"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:45.374Z",
            hs_object_id: "7983423012",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:45.374Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a39845ed9e074-FOR",
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
      "3b3da736-d516-47a4-8383-f03d0ab1136e",
      "X-Trace",
      "2B1EFA32C6DC1565676EA175726E842230C7E5935A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GR4vShilsXXTXdBDgmpjLjeAfBUXQViWtVpWKasP8aNnWUyet7Z6sX5pMMhAPyTimKsfucsZ%2Fe35VmqZpU1gYoAv3VPf5qR9dytMgvrnC2NhwQT3ewPpm9ShcMYcuUg2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:45.374Z",
            hs_object_id: "7983423012",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:45.374Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3985c9d2275d-FOR",
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
      "6d606b2a-0911-4f58-91fd-b6b4f796afe0",
      "X-Trace",
      "2B079DD8441E7E47D414CB672C13DCADEAA3CC81AE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3LRcWQnu6GXz1mZ3H%2BJabw9gmlhAEYsqCmpAY5NI%2F6U3%2B3mV9wTHlXGGQfaDlt7adEn7H%2FJ%2FmrGdBtl4798IDmWtI6Ar%2BhR5kijw0VV8EOHrAL3L58IK1DgUBIckSiql"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:19:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a39875e2c275b-FOR",
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
    "b1ecbb49-0a6c-4827-97f2-9738a670a4b6",
    "X-Trace",
    "2B486203F90D5760678313E46A5262198B557A8675000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gunIw4kfKmRSbRP35vEXkFa9STi4j410bKGfIjVhGxhYBnEtmwt07B4ZsCa1%2FDmuQFgZqGTQ4FAxk3kTF2LoR%2Bk%2Fc1Asjkyuicy41xapIqSknL8mPdURqXgUo%2B7%2BbemH"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:18:40.179Z",
            hs_object_id: "7983486584",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:18:40.179Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3988c932275b-FOR",
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
      "14039cb8-611d-485b-9b4b-efe4b745ecbe",
      "X-Trace",
      "2B7EA8F9C9C85B7BCA9D2F25608DDB02CAEECCC6E5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P%2BEPxfJFflreodoDKTaBEIfNchVaPAqMDf2iXbxmd%2FB6miGUn%2F2fAmaSoI7rvXrPqF5gCROl9jnhGYXUtg9ASwByCq%2BSuJOh6Owz19scCfz35mdMgBDUbPP1HUqP2L2x"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7983486584",
        properties: {
          domain: "grouparoo.demo.com",
          name: "Sam",
          website: "www.test.com",
        },
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:19:48.318Z",
            hs_object_id: "7983486584",
            name: "Sam",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:19:48.318Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:19:48.313Z",
      completedAt: "2022-02-22T18:19:48.346Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a398a4ab1e084-FOR",
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
      "3a5cd1d6-1f50-4650-969c-287ada359e62",
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
      "2B750E9ECCE673947F85710832DFCBD3391829265E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4cE9VuuZdihge%2Fhnbf%2B1MWF8MSJFMLwyiWmsSQnftjYmgGikKo33tKombM2x1BsRK4H470NfkwI2J9HUictmPpzLy%2B9XIdEMHBlrt68W3LPb6rV%2FYX7QH7GtRJ3PIuHK"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7983415121",
          properties: {
            createdate: "2022-02-22T18:19:48.558Z",
            domain: "grouparoo3.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:19:48.558Z",
            hs_object_id: "7983415121",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T18:19:48.558Z",
          updatedAt: "2022-02-22T18:19:48.558Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:19:48.557Z",
      completedAt: "2022-02-22T18:19:48.603Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a398bffdb275b-FOR",
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
      "d22a1882-244c-4603-8a63-e6f05e35caf8",
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
      "2BB0E0364F3B329D5CD136AD4A02E78E1258F167A6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gM9ViwbZP5SL7QuWzUKfgWTHVQCzubbc7oChATqJqpVSbWoK6H1byNLwEDPYQ66a2qjEbaJ%2FlgQoUzut%2FotEoIwte2FAXJpz15ol9wX9znMo8UH%2FGWJt6IXIpqKvWcd7"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:48.318Z",
            hs_object_id: "7983486584",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:19:48.318Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a398d9fd3cf8e-FOR",
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
      "eb3319a9-854e-4bfd-be8f-dbf10db3d542",
      "X-Trace",
      "2BE82E6A53E7BE484432A15EFD2D9AD9F38EA3FC97000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pkGA4%2Biii6reGvOpHhDyrwl53VkYbfAp%2FzABMmE35EEWc%2BqMlXsQUptv8NRYl7P58t53xNA0K3JR2XUdnbJJCICtnS9qSn5izk4EgNfr9jOz8FaGyJtL8AHaOljcppz6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:45.374Z",
            hs_object_id: "7983423012",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:45.374Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:19:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a398ef98fcf96-FOR",
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
      "5548f944-7de7-4719-93a0-8f4f810b28f7",
      "X-Trace",
      "2B03957B98779E174002A0467E3CF877F48AAD1071000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6iEH2vQgnHtzMSpwdXGN6OqVyd%2BHU6RcAkrycgjZTMW1VhJPcbQkkJW0OAeuSzg86S3266dRQ0%2Bdnhr0axV%2BFFmh82baRL3aLa6U5HTUO9XB7CG8GCACsw2RA8hR1Fc%2F"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:19:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a39907cc9cf9e-FOR",
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
    "bd31c329-0a2d-408a-ac77-aaa18ad2b106",
    "X-Trace",
    "2B7E2DB864CD8853B3675B54F88B4ED60FDD2CAB65000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=o1AbWRZoT8a%2FcyrPPoAwkR15Mm8Y0TuX2ftWyyal%2BX%2FfzuPQgOCqiQKhY%2BEgML%2Fkn2pV9vlkNvmVj20fv3ik%2F7Wc4%2FbkBYS3%2FwH00Frl1YnYmEZhEgb1VJO7AAyb3pfX"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:48.318Z",
            hs_object_id: "7983486584",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:19:48.318Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a4f4ef8273d-FOR",
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
      "1cbca439-6302-43c4-a1dd-a376465ac40f",
      "X-Trace",
      "2B4478A943A59508457FC86C59147BD89DD3F4981B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V%2BLcaj%2Bq3aIALOCDvnvssAgwgJxFNRL0PdqFyxTrZptB8iPZEGVMbU5%2FrcYRIxY5tppCniiNqt%2BXykmZVSDGvWt5d5F7%2ByS7IdHmM0Vo16Wuue6r9Cuk0jUgd%2BXmZ9P%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:45.374Z",
            hs_object_id: "7983423012",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:45.374Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a50bd13274f-FOR",
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
      "dbc59e4e-3a99-453b-a5d3-4814ecd4d4ce",
      "X-Trace",
      "2BDF767F2F37FFBD5BA70736D6D0834721766AD97A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FUq%2Fgxo6bY6KhiiDsUsrsfMZLAY%2FWInyilg8mR4soz495pyxrc3Va1%2F2KzDUYjOdrPOwR5P5sMvWSUH4uz6S%2BV8iBOvGJ7FLTsXmDhvesrcgsHAJ%2BIu9b6y8s5ZCSDM5"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983415121",
          properties: {
            createdate: "2022-02-22T18:19:48.558Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:19:50.460Z",
            hs_object_id: "7983415121",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T18:19:48.558Z",
          updatedAt: "2022-02-22T18:19:50.460Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a5229de2745-FOR",
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
      "f9100fa9-d05a-43ad-8fdd-d514bfd48a11",
      "X-Trace",
      "2BAF96D4638D3D5FA6AA00F486C35F001076BF9BAD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rQ1dWp5MkmL%2BS5DAjPioaGsj9O99Zms8W%2FR%2F6MwKYNilOuYTcu9nXrZYX09K4DNyrYLLuWiJu1TBvGAxLnH2VN5QEfn%2FtP8yQpm3e8q6jkz9q3f31rbXjpYS93lAub7K"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:48.318Z",
            hs_object_id: "7983486584",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:19:48.318Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a539d55e08e-FOR",
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
      "bf90abba-c8bb-43e3-a09f-25e663d6ea08",
      "X-Trace",
      "2B2302879257A5F581468DB41D094C69C91E836BAF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EWqqbejUCwsZLW2DY%2BtGoL0bwxqWH5QPUsZqWjHp%2BWvhDK1cIvHHKDav%2FUoCT3oL0sP6d5KmhVUUQYEB9ia0ReOlZpmsb%2BolllrGa4Vh1lUzuQBOWWVp2sDSQIknbRFC"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "8f5a1d56-6dee-4885-bf42-1f0f92f2d27f",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a550fbce08e-FOR",
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
      "8f5a1d56-6dee-4885-bf42-1f0f92f2d27f",
      "X-Trace",
      "2B69D92489634B5B719EFA59B059DB7073AB545B82000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lJaLWrrBU2jx2abSZhIO%2BKzOJ1i6OMz52hupHrhXEPwlHyFknqTpxRkOHawzazSNHM2%2FR9X3%2FMeGyxQYMa964elao265TpVynsu1cbFryDKvYEaRFVzUaPKu3Og4X9df"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:45.374Z",
            hs_object_id: "7983423012",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:45.374Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a5f6c01cf96-FOR",
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
      "aaab4ea7-04b2-49a3-9d2d-883d7e009c19",
      "X-Trace",
      "2BEC3DD7D968995283D2D465BAFB985D160B73BC19000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p7GQzsHxvhtff3mQOiaH2pSHp1cAf00N5Evo5jAKdzjYkRrYCxhIOfrG2j%2B0P5EEuLS20bIeuQIXcJILIWnOX%2BdNkl5iyMDPsiX9Ia7HuecBis8uC7W2IAV3zA7qPB6B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "7983415121",
          properties: {
            createdate: "2022-02-22T18:19:48.558Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:19:50.460Z",
            hs_object_id: "7983415121",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T18:19:48.558Z",
          updatedAt: "2022-02-22T18:19:50.460Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a610c872745-FOR",
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
      "cfbe792b-a4cf-49ff-8909-f7cefa5ae26a",
      "X-Trace",
      "2BB2A2E5DC0EC61F62811C3B557E3543835C0E86B6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xdwcB4INcXQVxUC%2FW9Rj7SKHr2uq7iAMhlQm0yf6RAx3VXNB5ITeNFDDZMpYRpeSZ0NKFWlQKf0%2BOKjmCjG4aBZx2Z12%2Bs%2FxKL70dleosbjyqVGYC648IQTiVVY9POnu"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:23 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a62bcb9cf8e-FOR",
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
    "d3808516-2897-4412-9039-b0be3942b930",
    "X-Trace",
    "2B92FBFAB9227DEAA7EDEC3970EF587394CEB75A22000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1nKnZDHY6UEy3xPs8BH%2BexflHq9%2FR3p%2BU9dNPMdnoZwFNn0EWv9MpKaNTQb82HVKGeiDUhMG3arp2cow4mZ6KuoqY7g2AX6jeu8fh1eehJEftMtW8gWt4jte5wleVKyX"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:23 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a643808e084-FOR",
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
    "025228bd-7c09-4be6-b9c3-2fbf72dd24b7",
    "X-Trace",
    "2B0F869C7BCD6E07E1ED26ADB7EC5D7E885253F979000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W%2FT%2Bh%2FDD0H8l48PNDDLVzNX6r75OC4819DjgFxRG16ozs6B1ekXCyoH3PyowD62hqWR4LHG7y%2BVw5XEUSDalUOQTr49O4xt%2BPtr%2BejHKEpdgVuIr748KycZdGwXIoJ9L"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:23 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a65edd42743-FOR",
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
    "ec335abc-320a-491c-ab68-8773d5df92bd",
    "X-Trace",
    "2B3912BD458292F7772F96F1ECF8BE34A3A1A620F7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oj964pamKqNqyOfeS09pQR6LK1BH4iqwB9JamIZZUcutQUBHbCDf%2BOnaKS%2BOX3hjg57TRpMxr0eza%2BSSNu4cUtHur5sF4R3llmOKoTl7UZTTMHn8BkX6hud2CZyXdx21"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:24 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a675c8acf8e-FOR",
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
    "1f56bb8f-322c-40f9-8026-7fd5256d3bb5",
    "X-Trace",
    "2B4ADDEBD31A86F20D175688B451D68763D6AB297E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F%2BUmYPstgWxW18dmb46HFIMUfilBLJVml7s%2Fw%2B8%2FbH%2Bt0SWDIt7Y3BreAAwD%2FoOCaYl1VSoKp%2FHiaORkcb9qDCyczRe8R9h08kYs4biZ4uwx%2FfRwKWSNSxT8lLpBT9%2Fn"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:24 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a6bcce9cf9e-FOR",
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
    "eacede6e-9623-4e94-a351-15b29615a922",
    "X-Trace",
    "2B41E6A5BABDA53D2B9DA4407F4CA464CCC1C43EB5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gdnWndYNL10JVh%2FGRO0FhlY1V5l%2FEdNihWMKSeJqb5glYd%2BUI8Nw2vjxvLb%2FUimuLXdR3Q2bcXwU2MiiE7mPz%2FxotM1mqNC%2FEhnAKDEsadGEungK9V8%2BgOtDKOhGYCc0"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:24 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a6d6b8f2737-FOR",
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
    "3f791c9c-1581-47e5-bb6c-6734304c9e84",
    "X-Trace",
    "2BB3064C19641950F1A173832BADA66C18A59A9696000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mKlTz%2BefJsLQJJv%2BQxAtS4GckfwXWjRNEixCIEdgEbaiDioI32R%2FYJnnSJdDZyeGLPd7uzd1Tfomm30oDeg36Z14DQ3LUbezMfBAbYjG%2FCVVQgxCfhXcwQ7PESEfKUeA"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:25 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a6eea84cf8a-FOR",
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
    "073f20ec-e492-43bb-8d60-6f2e3cf8539a",
    "X-Trace",
    "2BE3F72A9D7847884949CFDE5F4548680DA408A8BB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OUWRraEcCJThBB1eOBBpJu8%2BK5zZ4s8BYmG35WEMRvK0j2JkexH7lUTNFF65Bpfz8pqhADZO%2BFQr9us0WnanZ3vxlQVZaUIGy7q2TcfSguXjaDeTH5ozsAEBiV3bCE0p"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:25 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a73dacb2755-FOR",
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
    "f50f907f-97cc-4539-9abd-dc32e0ef5c44",
    "X-Trace",
    "2B2D456CBB76C05C94E9C37F38DF63FFA89B2F4E03000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UDoB6ljtAN%2BoZKiQViPQBM853QENZQAxD14gsrb5z9oTikGTXYJjQP2hw7hDRMYgTApCS%2FopzkTwR3qtL0DLeN9aoSCgph0E%2BtDfSMMSIrbJuTLUMYPCvbtMExr4WSU2"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a757a7b2749-FOR",
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
    "5eeb2c46-0d71-41e6-a608-58704eba93c9",
    "X-Trace",
    "2B38A4D6AB7186B9C0E49FB677BD400A3112EDC859000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RipAXZAUVBDgEs8PODkKBqoXr8WJBg4omRx%2BwupfyGQIkoX%2FAs5yJ3qRkpL2HUHssUFRMt7RVJTfrB743FKAqb%2BYF%2BpNHCWyldjmg24YSPP7o237c6ZPxo7f5p2jv7Zq"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a76ebff2743-FOR",
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
    "73693fae-5bcf-4392-a4b0-61bdae403e1d",
    "X-Trace",
    "2B6FB2E11D6DA2AE7DD71A6BCAADD580B324D9449D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ne6xZfNrMD0U5dMkOR013IlwWuPtC5txHmNCkKylm9ibYjeNwlWrLyq3%2FjJ3JDIw0%2FJnvCu7%2BwdSsMmxvb76pEs%2Bgp%2BjMUrkvH7gYY562YgxccW0Kj7bSwSxXOeowgIF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "7984203695",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user24.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203695",
            name: "Fist Name 24",
            website: "www.24.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203692",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user10.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203692",
            name: "Fist Name 10",
            website: "www.10.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203782",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user46.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203782",
            name: "Fist Name 46",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203702",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user47.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203702",
            name: "Fist Name 47",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203703",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user39.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203703",
            name: "Fist Name 39",
            website: "www.39.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203789",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user12.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203789",
            name: "Fist Name 12",
            website: "www.12.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203791",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user19.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203791",
            name: "Fist Name 19",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203697",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user11.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203697",
            name: "Fist Name 11",
            website: "www.11.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203790",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user31.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203790",
            name: "Fist Name 31",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203780",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user22.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203780",
            name: "Fist Name 22",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203781",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user28.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203781",
            name: "Fist Name 28",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203785",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user27.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203785",
            name: "Fist Name 27",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203698",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user23.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203698",
            name: "Fist Name 23",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203690",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user15.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203690",
            name: "Fist Name 15",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203693",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user48.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203693",
            name: "Fist Name 48",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203689",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user34.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203689",
            name: "Fist Name 34",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203794",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user20.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203794",
            name: "Fist Name 20",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203797",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user32.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203797",
            name: "Fist Name 32",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203806",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user49.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203806",
            name: "Fist Name 49",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203808",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user18.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203808",
            name: "Fist Name 18",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203705",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user7.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203705",
            name: "Fist Name 7",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203701",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user41.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203701",
            name: "Fist Name 41",
            website: "www.41.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203801",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user4.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203801",
            name: "Fist Name 4",
            website: "www.4.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203803",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user9.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203803",
            name: "Fist Name 9",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203704",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user42.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203704",
            name: "Fist Name 42",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203792",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user17.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203792",
            name: "Fist Name 17",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203778",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user6.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203778",
            name: "Fist Name 6",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203796",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user38.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203796",
            name: "Fist Name 38",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203700",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user35.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203700",
            name: "Fist Name 35",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203798",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user29.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203798",
            name: "Fist Name 29",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203802",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user13.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203802",
            name: "Fist Name 13",
            website: "www.13.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203807",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user37.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203807",
            name: "Fist Name 37",
            website: "www.37.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203800",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user26.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203800",
            name: "Fist Name 26",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203691",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user33.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203691",
            name: "Fist Name 33",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203777",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user30.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203777",
            name: "Fist Name 30",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203793",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user5.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203793",
            name: "Fist Name 5",
            website: "www.5.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203783",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user40.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203783",
            name: "Fist Name 40",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203779",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user0.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203779",
            name: "Fist Name 0",
            website: "www.0.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203795",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user14.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203795",
            name: "Fist Name 14",
            website: "www.14.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203699",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user2.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203699",
            name: "Fist Name 2",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203788",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user1.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203788",
            name: "Fist Name 1",
            website: "www.1.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203696",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user43.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203696",
            name: "Fist Name 43",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203784",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user21.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203784",
            name: "Fist Name 21",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203804",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user44.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203804",
            name: "Fist Name 44",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203786",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user45.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203786",
            name: "Fist Name 45",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203694",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user3.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203694",
            name: "Fist Name 3",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203805",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user25.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203805",
            name: "Fist Name 25",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203776",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user16.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203776",
            name: "Fist Name 16",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203787",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user36.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203787",
            name: "Fist Name 36",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
        {
          id: "7984203799",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user8.demo.com",
            hs_lastmodifieddate: "2022-02-22T18:20:26.475Z",
            hs_object_id: "7984203799",
            name: "Fist Name 8",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:26.475Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:20:26.475Z",
      completedAt: "2022-02-22T18:20:26.700Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a78cb03cf9e-FOR",
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
      "1eba7402-e6de-4960-b14d-b099aa8bc316",
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
      "2BF3F9D00403418A729B39FCB45EBCCB5FD657BDA1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yQ3DXJl%2Fr1B0QZTS9tW59y%2BTYkVQrK4Tu68SEcHeoMCAup%2B6FjOdUwvmqvlEXo1zQgTs8WkJptfVmEtVVLrh7FLrNNPApP9qHmaWyCGeiLuwpxCHfLsWsRE6X6YuovPF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "18360ad1-140a-4ef7-b10d-67b32a0c79bc",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a7bbc592755-FOR",
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
      "18360ad1-140a-4ef7-b10d-67b32a0c79bc",
      "X-Trace",
      "2BAF591882A47B182CBDE2807382646CCB6940D454000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FiJ3mg1i9dq3fPNY1bPHRkw1zEjQGQTCOTa%2FoY3J%2FbQtk5Vk9UUgYMu8yqRq9b8HxNK06hxYSbeeGGV6%2FhZ3W47u0Dp3ig36XRvN1kMYbswEi15dLN%2ByiUUUgWJCZqXq"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a85fc91e074-FOR",
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
    "ee666633-3850-448a-b78a-2ac006f86b0a",
    "X-Trace",
    "2BFD5BE9D7EF73A92F0E61D82E7573D15C7F7E2739000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F30LgiT5Spf8Su7D8Mzz6v9P%2Bb2rERJEidJ1OQfQA1m1z7f23XOJr3oVzjyliWWeGNzSPC7hZ88RIV0%2BqvFTnVFdF0iKEBvcmz3sinRiAY2KmpRma7pLEWky5xxAadp%2B"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a8aef18275d-FOR",
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
    "6f36913e-4f80-400d-8632-a0df07fa6f07",
    "X-Trace",
    "2B408FDBB02E18832BB800ECC12F75F4BFB28C374D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FwH4kx3dVKsfiX%2Fem36zy%2BOqzRY9VTqW6BRVKhC6g%2FrSbaEHt29Xw%2F6ayNjCrIWbxUdLv15TcpE5zyERug6C8rKiZZttNrZeXsT0%2FG4y6KNtbh5mbYHMvJtD2%2FQcyogS"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a8c98ec2755-FOR",
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
    "2170b505-a6b3-4c02-9051-4d9b10c37293",
    "X-Trace",
    "2BA656D429044D532F2995E3FC26A67A514F8FE2E9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SZ72%2Bq1Udddj4kLuAq2bBsEuFd1clIg9h6Ft5bvPda7TGr53Jushz%2Bf6GAFil9Jislky2qEI7LiCoy5c50hzm9Ia2mp2Zwm0C0rKAzHHzGUKIESxNS7rN67S3R73%2BQOK"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a8e29002746-FOR",
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
    "3ffc7415-0828-4523-8338-566bb0473e56",
    "X-Trace",
    "2B220C981269AB0C99DBFD16066E2192D5EE153950000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ayu1vgOE2%2BkfySDbYQAjmmJpJWPqZLfT82pcU1RwpGcpX49IrPPzi6bSu2Ii%2BTAZvSsWdmAAgBdap3ytw9n3r0qO%2FAOZRyZIvUYOs3CrGgWqNpzNvKDnnsdbtmH4TeEJ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:20:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3a917a992737-FOR",
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
    "e9d438be-68b3-40ae-9d36-a637f1edb7e7",
    "X-Trace",
    "2B62C855573B071197FB75FFA2A6243703C6419F5E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7mFKjVZsq5i%2Fizn5qlQ94%2BvCdOqDRmhaq5H39o3wT3I9FPfZtirLw15FTSzClEQB4RcNxmNJuEFf4xYlEJotaa6Bp%2Fr8FiNzaZUmfTZYWSirBicj60VPOOgljOytHwlF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "80c6aa05-28d3-4d40-9c0c-5eb274c54c38",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a93ebf1cf9e-FOR",
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
      "80c6aa05-28d3-4d40-9c0c-5eb274c54c38",
      "X-Trace",
      "2B3E9BD262AD2AD980D0096855E737B85F75C86643000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5i588vy95CMXIySn9AYusG2MXibb6wBBmvOyiQtbzYPKws%2Bo2W4JA7zFRrtauNlT4LQmnwnsvYvxV9tSAvEoT9zKG3sWswv3L4ZM3vaTlUBq2ckJ%2BmADeU55QUVXPUvQ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 3,
      results: [
        {
          id: "7984203785",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.190Z",
            hs_object_id: "7984203785",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.190Z",
          archived: false,
        },
        {
          id: "7984203800",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.559Z",
            hs_object_id: "7984203800",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.559Z",
          archived: false,
        },
        {
          id: "7984203805",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.835Z",
            hs_object_id: "7984203805",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.835Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a9bfb742749-FOR",
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
      "3b4b899f-7419-4a20-8614-2d684775f7e2",
      "X-Trace",
      "2B7AEA529A562B0D10F77D89B70E250BFB005DAFE0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U%2B%2Fju5NrGtNCyxQCqdSUQHdRBK02VjCf5YT%2BQHTewPzWwCMiwjmPZdhkGZph4CZIwmXl4%2FExZoKAq21OzxAM0s%2BnUGBwOnLFQ%2B95WEMtwc3UXmXFqZa0mlvGc9JHAG8U"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203689",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.677Z",
            hs_object_id: "7984203689",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.677Z",
          archived: false,
        },
        {
          id: "7984203691",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.643Z",
            hs_object_id: "7984203691",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.643Z",
          archived: false,
        },
        {
          id: "7984203777",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.591Z",
            hs_object_id: "7984203777",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.591Z",
          archived: false,
        },
        {
          id: "7984203790",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.564Z",
            hs_object_id: "7984203790",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.564Z",
          archived: false,
        },
        {
          id: "7984203797",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.678Z",
            hs_object_id: "7984203797",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.678Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a9dae0d275b-FOR",
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
      "1ef7499b-977f-41ab-8bb0-7618a420746c",
      "X-Trace",
      "2B37436AE1315100EAE2563D97B33FC6BD90BD389C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gEYszIVLc01BNAMUEzpQ%2FjD83nSX0jHcl4HzpsNmFegkLhAOrDsmxViW7UG8%2FnUBWbyvlIC1e4VDO%2FNcZ24TL5rp%2BJ7oHFTRH05vfUkdXMGKggO37yMBa5COOqbXG0oX"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 3,
      results: [
        {
          id: "7984203700",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.675Z",
            hs_object_id: "7984203700",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.675Z",
          archived: false,
        },
        {
          id: "7984203787",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.203Z",
            hs_object_id: "7984203787",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.203Z",
          archived: false,
        },
        {
          id: "7984203796",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.543Z",
            hs_object_id: "7984203796",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.543Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3a9f384f273d-FOR",
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
      "2770043c-92ee-4f69-b40a-0e4484c34e86",
      "X-Trace",
      "2BC11F9636F28E24E8F8DA9D3B5818163AE269002F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ficw2AGobOAf9PaKk1Xn5cBeV88NpUi4UDR%2BVZ9aVXPzoomOiRCkUH%2FhPDXpT3YyVNQR2m%2BW2iTOquD9VS8F6M1AKZw25Kj4HAr9SG04edQSCu%2F5NsTff3mnP%2FUdrR2R"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 4,
      results: [
        {
          id: "7984203696",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.817Z",
            hs_object_id: "7984203696",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.817Z",
          archived: false,
        },
        {
          id: "7984203701",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.553Z",
            hs_object_id: "7984203701",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.553Z",
          archived: false,
        },
        {
          id: "7984203783",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.636Z",
            hs_object_id: "7984203783",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.636Z",
          archived: false,
        },
        {
          id: "7984203804",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.623Z",
            hs_object_id: "7984203804",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.623Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3aa13b43e084-FOR",
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
      "8c0222fa-8c6f-472d-a8c3-03728ac225c4",
      "X-Trace",
      "2B55317560F5DDAC73B71535C49C33B2FB338C4DE5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zJkwK%2ByA0RpS9DqN0MnH3W8ffELkrZFKRcFRvI4CrZlddg6QDa44U2FXFRjCFg73GpmXvtlXEk0czplJ3qRkcHk%2FL03FT0yLca1xWzB0ILrpXPaOC%2FqELEZlaSdLcgr1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203693",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.925Z",
            hs_object_id: "7984203693",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.925Z",
          archived: false,
        },
        {
          id: "7984203702",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.321Z",
            hs_object_id: "7984203702",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.321Z",
          archived: false,
        },
        {
          id: "7984203782",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.701Z",
            hs_object_id: "7984203782",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.701Z",
          archived: false,
        },
        {
          id: "7984203786",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.326Z",
            hs_object_id: "7984203786",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.326Z",
          archived: false,
        },
        {
          id: "7984203806",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.543Z",
            hs_object_id: "7984203806",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.543Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:20:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3aa2c8a1e07c-FOR",
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
      "4c958267-f14b-4e67-9618-46d86194671a",
      "X-Trace",
      "2B64AA5DC04BBD7F76AA5BCC5AC78419941A354B54000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NT%2BNY5qlWVJ6OZX9jT3TPucqGMjp5mQTq3%2BxouUY716xVcmpUxPxGQNxvCI09Jq455RD0XBaJV0kniS08ojVPST4FTFLVb21KXIS%2B0slOMRBZxIiVy19BgNcKiaCCZeh"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203694",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.824Z",
            hs_object_id: "7984203694",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.824Z",
          archived: false,
        },
        {
          id: "7984203699",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.549Z",
            hs_object_id: "7984203699",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.549Z",
          archived: false,
        },
        {
          id: "7984203779",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.827Z",
            hs_object_id: "7984203779",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.827Z",
          archived: false,
        },
        {
          id: "7984203788",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.330Z",
            hs_object_id: "7984203788",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.330Z",
          archived: false,
        },
        {
          id: "7984203801",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.690Z",
            hs_object_id: "7984203801",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.690Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b601b852737-FOR",
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
      "63c72008-d019-4f94-900f-90841780480e",
      "X-Trace",
      "2B5C6C90A1D8F65CFFBEED609F1D20054C4B1D1DE7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ejzu0YXX6KTMiScv3806w%2FnZ43onCSXh9oAYjO6TnhW21ISv7r0HT7wda8I2Yk6MdEYc8c2zWrj2mMioURp1IhQoiRZXc%2B69K87L2wB5po9UyHYGmkJ0GVQj%2F0KYbHB9"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203705",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.559Z",
            hs_object_id: "7984203705",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.559Z",
          archived: false,
        },
        {
          id: "7984203778",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.188Z",
            hs_object_id: "7984203778",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.188Z",
          archived: false,
        },
        {
          id: "7984203793",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.688Z",
            hs_object_id: "7984203793",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.688Z",
          archived: false,
        },
        {
          id: "7984203799",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.828Z",
            hs_object_id: "7984203799",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.828Z",
          archived: false,
        },
        {
          id: "7984203803",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.818Z",
            hs_object_id: "7984203803",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b619ca4cf8e-FOR",
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
      "70cb0d40-105e-436e-91ec-3621d29aee71",
      "X-Trace",
      "2B03561E650302144C4E03AEF8C2C368DAC85656B8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kAoJPvZQYqKH1V7TXozbGCWwaqscs046Rk2f1UwN%2F%2FwTVmmzATNiMmehS7rkYosfTg5X8KiuPRpF2Fs3XQR608%2BsUSoj63JWTlyX8sr3BEgED2QGNAGZ8SURH5Vv8VWW"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "fe87a82f-d6a9-484e-860f-81d0cd5dca37",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b632df0cf9a-FOR",
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
      "fe87a82f-d6a9-484e-860f-81d0cd5dca37",
      "X-Trace",
      "2B0E3021573B56971C38F76BC6205FCFEDA1F5E67A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tnplJ4RyTjywund%2FQeDl51CqjBD3Bu5EVHJpcOoXanPPt%2BfN35mhcKzhFdA3PJq4LiSSXIgcqKOpHTzclnDQkxGhDy6IKp%2BVr1YQq3TnNU6cMIi3QC1s6UnbyDcDRh1y"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203692",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.322Z",
            hs_object_id: "7984203692",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.322Z",
          archived: false,
        },
        {
          id: "7984203697",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.534Z",
            hs_object_id: "7984203697",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.534Z",
          archived: false,
        },
        {
          id: "7984203789",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.916Z",
            hs_object_id: "7984203789",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.916Z",
          archived: false,
        },
        {
          id: "7984203795",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.839Z",
            hs_object_id: "7984203795",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.839Z",
          archived: false,
        },
        {
          id: "7984203802",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.207Z",
            hs_object_id: "7984203802",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.207Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b6d3945cf96-FOR",
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
      "067ecc38-3218-48fb-a687-cf9cced433ff",
      "X-Trace",
      "2B1F04CB239C5A35FDA32F6830EC9377CE6789CBE7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A6XdAVYq%2BSBpUOBfpxF8b4eKHkKlxY6tTouwS38PUEXEzUbCLsP4e8D2zEgLF0P3%2BSq6hUsiR0pvFHBLqwD4HSzrhtr4jlNbkdcb7BGzSkXG7M3LHKSUJ%2BFje6X5AvBa"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203690",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.588Z",
            hs_object_id: "7984203690",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.588Z",
          archived: false,
        },
        {
          id: "7984203776",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.192Z",
            hs_object_id: "7984203776",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.192Z",
          archived: false,
        },
        {
          id: "7984203791",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.682Z",
            hs_object_id: "7984203791",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.682Z",
          archived: false,
        },
        {
          id: "7984203792",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.636Z",
            hs_object_id: "7984203792",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.636Z",
          archived: false,
        },
        {
          id: "7984203808",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.542Z",
            hs_object_id: "7984203808",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.542Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b6f48822745-FOR",
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
      "88782111-1a9e-423d-88f2-b5d592dad597",
      "X-Trace",
      "2BF0C7385A7227D0C45CE88CB75D3AE7C7026718B3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JSV6x50KsRo71%2BulUE273VzS69b78RX3K0Q6MyGik5AmWUr5FvU%2Ftp1FSUerlEmoZ3fzihIURq357okHRY1QsgwWL32joLNDzH7khkb%2Fm4OQGac%2FLTwNT2trSJ%2FMmP%2Ff"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203695",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.191Z",
            hs_object_id: "7984203695",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.191Z",
          archived: false,
        },
        {
          id: "7984203698",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.592Z",
            hs_object_id: "7984203698",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.592Z",
          archived: false,
        },
        {
          id: "7984203780",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.819Z",
            hs_object_id: "7984203780",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.819Z",
          archived: false,
        },
        {
          id: "7984203784",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:31.047Z",
            hs_object_id: "7984203784",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:31.047Z",
          archived: false,
        },
        {
          id: "7984203794",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.643Z",
            hs_object_id: "7984203794",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.643Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b70efa8cf96-FOR",
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
      "9c908091-6087-4d18-87bb-027dde424461",
      "X-Trace",
      "2B30DDD39FD17680B1797ADE258B399C06C8ACBA53000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dwfk%2FYBHxinSJNB6Lem%2F8kgi64xurD68dK9yOSMafW%2FihKE4joP1UUdg63B1U0RBciCMFt5EGZ6o39YWgRHac0ov4u8S4A%2BWSzqW8EvNs2z5XpIa1YfXNDe8QlVcaH2E"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203781",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.193Z",
            hs_object_id: "7984203781",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.193Z",
          archived: false,
        },
        {
          id: "7984203785",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.190Z",
            hs_object_id: "7984203785",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.190Z",
          archived: false,
        },
        {
          id: "7984203798",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.540Z",
            hs_object_id: "7984203798",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.540Z",
          archived: false,
        },
        {
          id: "7984203800",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.559Z",
            hs_object_id: "7984203800",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.559Z",
          archived: false,
        },
        {
          id: "7984203805",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.835Z",
            hs_object_id: "7984203805",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.835Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b72bbf02749-FOR",
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
      "7c384d5c-8781-4165-be08-3593f36befeb",
      "X-Trace",
      "2B15B366C27BD0C9A7DFC6F033C5A8883984ACFB2D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K8sFQmplEtaDPRtrvwq85ofWgmd9Zr1RhY2n28z2DMueJwmMEGP4CwwGle6ATGwiq8rMOX84CFhl%2FHK73mvRuluhbktfn3Q5TTM7HwUmPqLx3AuBo%2BEsfG7GJh1cvPL2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "ca5e9077-d3d1-457f-9e20-0cddad856d6e",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b746cc82755-FOR",
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
      "ca5e9077-d3d1-457f-9e20-0cddad856d6e",
      "X-Trace",
      "2B984685AFF4EC34F0E60D4BE13E60FEEC8BD33237000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u4atZdhlAVPoL4%2FTluVx0LdvuwuHTfBPyALqDj6LH%2FPmO7D%2B0Gyl4wq4A4ET3jdsFS03jajuFUFeTz%2FvvnEJ2V9OwCyO8XZ5WR59plICpn5YLaVfjhfIELJprj8cahb4"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203689",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.677Z",
            hs_object_id: "7984203689",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.677Z",
          archived: false,
        },
        {
          id: "7984203691",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.643Z",
            hs_object_id: "7984203691",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.643Z",
          archived: false,
        },
        {
          id: "7984203777",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.591Z",
            hs_object_id: "7984203777",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.591Z",
          archived: false,
        },
        {
          id: "7984203790",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.564Z",
            hs_object_id: "7984203790",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.564Z",
          archived: false,
        },
        {
          id: "7984203797",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.678Z",
            hs_object_id: "7984203797",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.678Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b7df866275d-FOR",
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
      "47c6b2c7-9a8e-476c-be5d-34f354889e19",
      "X-Trace",
      "2B2C67DBE6F650676DF61F2EE82B5970D0ECF9D643000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jCOwsrh978Awd5TpBRbwdbyYPNplcgjJUm3Mu5HeAMCo5GAbNORYja9bQVLhfZXcMoflYRU5BMq01epaQj5fQx6uirUQYWBa31KI0ocu5edZpwcuNeNIYuwKLiQDCetv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203700",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.675Z",
            hs_object_id: "7984203700",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.675Z",
          archived: false,
        },
        {
          id: "7984203703",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.198Z",
            hs_object_id: "7984203703",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.198Z",
          archived: false,
        },
        {
          id: "7984203787",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.203Z",
            hs_object_id: "7984203787",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.203Z",
          archived: false,
        },
        {
          id: "7984203796",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.543Z",
            hs_object_id: "7984203796",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.543Z",
          archived: false,
        },
        {
          id: "7984203807",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.325Z",
            hs_object_id: "7984203807",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.325Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b7fce7ae07c-FOR",
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
      "50f5add6-1e82-4e69-970a-3debe76067b8",
      "X-Trace",
      "2BD239968F1A980EC94E88CD429D0E5085A9EECDA3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5bsD6xh%2FN8BsyT%2FxRI1TetWz0Z%2FXR%2BlBvJkfV74KIgrDyc42pt8yiOoqVyEmQCik4LVSBqOXgMUq9gnHgcJR14ftq8A27L%2FC63GztUVnRGCTjO7oLHHCG6BNnKvDufNw"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203696",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.817Z",
            hs_object_id: "7984203696",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.817Z",
          archived: false,
        },
        {
          id: "7984203701",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.553Z",
            hs_object_id: "7984203701",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.553Z",
          archived: false,
        },
        {
          id: "7984203704",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.703Z",
            hs_object_id: "7984203704",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.703Z",
          archived: false,
        },
        {
          id: "7984203783",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.636Z",
            hs_object_id: "7984203783",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.636Z",
          archived: false,
        },
        {
          id: "7984203804",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.623Z",
            hs_object_id: "7984203804",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.623Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b818bfb2749-FOR",
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
      "7223cd3a-8266-4a8c-8790-6d781489b023",
      "X-Trace",
      "2B75E0DC0920201F6D74ADAB81640C91A3F2E85241000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=m%2FmY4wLdZk4fVze%2Bi2r8samEElsAHaIIa1CBx2V4oLnktxkR%2BxIgxkYZ2wj4gT4zB1TDn14zVM0mO7s0z8GJR4zeJJ2bZ1rN%2BgtfDxTe6auCUpRvBKoKQjHE47L3N8Yr"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203693",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.925Z",
            hs_object_id: "7984203693",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.925Z",
          archived: false,
        },
        {
          id: "7984203702",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.321Z",
            hs_object_id: "7984203702",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.321Z",
          archived: false,
        },
        {
          id: "7984203782",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.701Z",
            hs_object_id: "7984203782",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.701Z",
          archived: false,
        },
        {
          id: "7984203786",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.326Z",
            hs_object_id: "7984203786",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.326Z",
          archived: false,
        },
        {
          id: "7984203806",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.543Z",
            hs_object_id: "7984203806",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.543Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b850c9d2749-FOR",
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
      "fb0ea664-c90b-4f6a-a8e7-6ebc13396b11",
      "X-Trace",
      "2B2674191D74E03D202DA5463D95659CC20B09549A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qPUB5P0hUFyIcloHA%2B4aIy4t9CoNmEdi1LMFoqhuQ08c6pJvYrP69lwL9LzORzxOarYZ7fotjZXsFT89G4WRVuPkbSMmqZb2j1nAbmXqMVwUZHa7Nzco3t%2BHaIk6M4Kk"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203694",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.824Z",
            hs_object_id: "7984203694",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.824Z",
          archived: false,
        },
        {
          id: "7984203699",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.549Z",
            hs_object_id: "7984203699",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.549Z",
          archived: false,
        },
        {
          id: "7984203779",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.827Z",
            hs_object_id: "7984203779",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.827Z",
          archived: false,
        },
        {
          id: "7984203788",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.330Z",
            hs_object_id: "7984203788",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.330Z",
          archived: false,
        },
        {
          id: "7984203801",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.690Z",
            hs_object_id: "7984203801",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.690Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b87e89acf9a-FOR",
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
      "32ea7c8d-dda6-45e3-873c-79d4762d3174",
      "X-Trace",
      "2BA4B4C180988FE81133C6BF2F5D2013D034BC0DD6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hA7PHZ9zGMGBoS3UfTEE47qTIwuZ8NL6GlBLcJVfKBJwZ%2FERw7GKS0qFQKB1ikNJxdZS%2FZAZU4uvIIKm97vxKo4FvWEvZJqYaB9NSJclaZgPZkrA0Yip6CHy9u%2Fu390C"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203705",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.559Z",
            hs_object_id: "7984203705",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.559Z",
          archived: false,
        },
        {
          id: "7984203778",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.188Z",
            hs_object_id: "7984203778",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.188Z",
          archived: false,
        },
        {
          id: "7984203793",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.688Z",
            hs_object_id: "7984203793",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.688Z",
          archived: false,
        },
        {
          id: "7984203799",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.828Z",
            hs_object_id: "7984203799",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.828Z",
          archived: false,
        },
        {
          id: "7984203803",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.818Z",
            hs_object_id: "7984203803",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b896b072737-FOR",
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
      "39b8e57c-a14f-453d-bacc-51b596304871",
      "X-Trace",
      "2B1863DA63F00C844E008BE523D9D6215F2BAEA799000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n9pE5PRKH%2BlLGEWUKSZ5pTgV5uDwpXrRCF7Obxel3uMunMaZCsV9A9T7fXRr8W34CMjuXoyF0r1F5v4gMsASMyWHsOObyYMgpNLfpthdL8Sarq65S8QOTl953GbWXujE"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203692",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.322Z",
            hs_object_id: "7984203692",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.322Z",
          archived: false,
        },
        {
          id: "7984203697",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.534Z",
            hs_object_id: "7984203697",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.534Z",
          archived: false,
        },
        {
          id: "7984203789",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.916Z",
            hs_object_id: "7984203789",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.916Z",
          archived: false,
        },
        {
          id: "7984203795",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.839Z",
            hs_object_id: "7984203795",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.839Z",
          archived: false,
        },
        {
          id: "7984203802",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.207Z",
            hs_object_id: "7984203802",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.207Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b8afc0ecf96-FOR",
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
      "1e60a1d4-9537-4d74-81ee-4d3565f4d87a",
      "X-Trace",
      "2B94AA66D82735A284D6B4AE89FDDA1D747DF62865000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FFv%2F5U3zXQIdSJvb547Nw14jPPGGW0nQOt4Fdm4QoTVK%2BVcFAGm0btrzp3g2p5lCvqIcq7OUpCoKpTRgJi46WziJs8yRM8nY7WvMLcEN3JQ8CSCDZws%2Be97GIdr%2FmoUd"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "a616ec16-3eb8-496b-9a74-e6df8749c759",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b8cb8d7cf9a-FOR",
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
      "a616ec16-3eb8-496b-9a74-e6df8749c759",
      "X-Trace",
      "2B8F023573402303808D51BDE654532D936A0614A8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LaLvSPTZk5lMY7WPsGkNuQAo8aruCgBV%2FLARFHaJArmuCpSGKlYT9FgxsTF0e1vWopqjexv0039KQJz5AfIa6%2FF6HXOamx4%2F6n1lMBaQCuwlwQEWE2nieOyC3demDUcG"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203690",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.588Z",
            hs_object_id: "7984203690",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.588Z",
          archived: false,
        },
        {
          id: "7984203776",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.192Z",
            hs_object_id: "7984203776",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.192Z",
          archived: false,
        },
        {
          id: "7984203791",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.682Z",
            hs_object_id: "7984203791",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.682Z",
          archived: false,
        },
        {
          id: "7984203792",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.636Z",
            hs_object_id: "7984203792",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.636Z",
          archived: false,
        },
        {
          id: "7984203808",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.542Z",
            hs_object_id: "7984203808",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.542Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b962b40cf8a-FOR",
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
      "0eb5f9a9-fd9d-452a-a063-1da226d71614",
      "X-Trace",
      "2B6BE2CBC5C414634030B8160441ED7E2E1E6F3544000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Cn5e%2FbiXBtymuAdoTConrcwYWGeKoTKBK5fHXwU0gLlLxzAgGA1ltx9WTV0Hgz2p6Vmus7QP05zG%2BtKcTGL99%2FObD1C6%2FiIClhuGsbciTt17jM9UG8tPEhOGJMFni9%2Fc"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203695",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.191Z",
            hs_object_id: "7984203695",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.191Z",
          archived: false,
        },
        {
          id: "7984203698",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.592Z",
            hs_object_id: "7984203698",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.592Z",
          archived: false,
        },
        {
          id: "7984203780",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.819Z",
            hs_object_id: "7984203780",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.819Z",
          archived: false,
        },
        {
          id: "7984203784",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:31.047Z",
            hs_object_id: "7984203784",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:31.047Z",
          archived: false,
        },
        {
          id: "7984203794",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.643Z",
            hs_object_id: "7984203794",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.643Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b97cbb8275b-FOR",
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
      "2d89861d-ca10-4a56-9df5-e29f42b94154",
      "X-Trace",
      "2B87ADDD3CC7DF167339FF8FB5BC788F1D8A496949000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NMiJQWdx7ANQP8nkWZeBPib3jM80gO3vZbSEpNiTPSnEyf12LpKEhQP%2BUeMGNOoLrJnBrLaoOj9hO6qvJL4AmRPMtaTtP77bUk8YOIyi05BCVgeAfgKLnMEgm5kyXyCT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203781",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.193Z",
            hs_object_id: "7984203781",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.193Z",
          archived: false,
        },
        {
          id: "7984203785",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.190Z",
            hs_object_id: "7984203785",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.190Z",
          archived: false,
        },
        {
          id: "7984203798",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.540Z",
            hs_object_id: "7984203798",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.540Z",
          archived: false,
        },
        {
          id: "7984203800",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.559Z",
            hs_object_id: "7984203800",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.559Z",
          archived: false,
        },
        {
          id: "7984203805",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.835Z",
            hs_object_id: "7984203805",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.835Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b994e82cf9a-FOR",
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
      "95acbad3-fba4-4c90-85d6-0c016e19480e",
      "X-Trace",
      "2B116BB7F8C78CD78BFF223E62C3770D9AAA29DBD5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kE2fHgNow2NCTKxwxRkMw7fuG0wyerqVpvO59oXrgoRYMwgbB6j2etScwonc9Kbovc9MrpSxUrUVlYRqK%2BwUQVu6WCrPdF1jPzX8uMZOfkLS5PQzLQcpLkqS1TCpDcy2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "a562553b-2ac0-4f7e-93db-1e6dc00f8d44",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3b9b2d9b2755-FOR",
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
      "a562553b-2ac0-4f7e-93db-1e6dc00f8d44",
      "X-Trace",
      "2BDAB16AB97C6F094E3B3267D9D0B4408535EFA69B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HNo8zg%2FD7kJcLEPDvbIz22of0N1FausQAcxrJ3Y7jrtSY5E7CQzPlcy0Df1tlUdu%2BLnvr52HOl%2B3q62UguHwn9XftU1ewSaAHmq%2FcUT1zFR5ujBJqyUVqbTRuSW2sju2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203689",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.677Z",
            hs_object_id: "7984203689",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.677Z",
          archived: false,
        },
        {
          id: "7984203691",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.643Z",
            hs_object_id: "7984203691",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.643Z",
          archived: false,
        },
        {
          id: "7984203777",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:30.591Z",
            hs_object_id: "7984203777",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:30.591Z",
          archived: false,
        },
        {
          id: "7984203790",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.564Z",
            hs_object_id: "7984203790",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.564Z",
          archived: false,
        },
        {
          id: "7984203797",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.678Z",
            hs_object_id: "7984203797",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.678Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3ba39d3e2749-FOR",
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
      "7cbfd589-ffd0-476f-9778-3341a5f45b64",
      "X-Trace",
      "2B9B4CCA7D69D556D71145ED4F5A3BA87DCE94727B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=psbrUxQKDFx8kO7EjzIYHCrDvf7DelSu1ofmhOAXaP2vAkuboJorEWaOxUywnYrZ%2FdsGfE0nssETGgCa8GYLkswVRxwMi5YycLbVmSQKpKZBf%2B3VGJSU9BoxjIe1qWEj"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203700",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.675Z",
            hs_object_id: "7984203700",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.675Z",
          archived: false,
        },
        {
          id: "7984203703",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.198Z",
            hs_object_id: "7984203703",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.198Z",
          archived: false,
        },
        {
          id: "7984203787",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.203Z",
            hs_object_id: "7984203787",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.203Z",
          archived: false,
        },
        {
          id: "7984203796",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.543Z",
            hs_object_id: "7984203796",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.543Z",
          archived: false,
        },
        {
          id: "7984203807",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.325Z",
            hs_object_id: "7984203807",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.325Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3ba54f29cf8a-FOR",
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
      "e7f39c5d-a0e9-4108-a5ae-9826b9c0c1b8",
      "X-Trace",
      "2B08BAE5C9ECAC8D1661F2AC3496F70044BFCCD024000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N8eNy0tNT2o23CC7%2BnvRkqAXqUECRHLS9yk2851sbwXQjtPcxAauq39%2BJbJIbVl3OQQbOhJ9%2Fcm0BzL029qxaJQ4qfeFx%2BH2WdiDJ%2FM1CpkO%2BXkS9dIl%2F9zIJ1YjWhq6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203696",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.817Z",
            hs_object_id: "7984203696",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.817Z",
          archived: false,
        },
        {
          id: "7984203701",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.553Z",
            hs_object_id: "7984203701",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.553Z",
          archived: false,
        },
        {
          id: "7984203704",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.703Z",
            hs_object_id: "7984203704",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.703Z",
          archived: false,
        },
        {
          id: "7984203783",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.636Z",
            hs_object_id: "7984203783",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.636Z",
          archived: false,
        },
        {
          id: "7984203804",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.623Z",
            hs_object_id: "7984203804",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.623Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3baa38f12746-FOR",
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
      "3b69ab50-e448-4e82-bdbf-0dcec35849c9",
      "X-Trace",
      "2B1EF45FBBC1D5F2F5A9951AE08C919E2F93AEB35B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5WE5dDv%2BVR3WSMpTkxw0vQtDZ%2FeHiSE5bHK9jUis7xNLA0Crnyd1IP%2FqYK1KH16ytmdTmrznwy9V%2B1NQvgu7M7ybKKQnq%2FPsLyzSysYds%2F%2FWbKIDWaBrVWivVxu2XpXe"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "7984203693",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.925Z",
            hs_object_id: "7984203693",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.925Z",
          archived: false,
        },
        {
          id: "7984203702",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.321Z",
            hs_object_id: "7984203702",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.321Z",
          archived: false,
        },
        {
          id: "7984203782",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:28.701Z",
            hs_object_id: "7984203782",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:28.701Z",
          archived: false,
        },
        {
          id: "7984203786",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.326Z",
            hs_object_id: "7984203786",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.326Z",
          archived: false,
        },
        {
          id: "7984203806",
          properties: {
            createdate: "2022-02-22T18:20:26.475Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:20:29.543Z",
            hs_object_id: "7984203806",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T18:20:26.475Z",
          updatedAt: "2022-02-22T18:20:29.543Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3bad8cfee074-FOR",
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
      "e88f5078-befa-472c-8904-507f70112042",
      "X-Trace",
      "2BC70DF8FB613A783A23DF270614D557883ED823FA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vygHCiRy98YI1B%2BwPrM0QFiXmSDTTqThsMB9zhJARkS49x%2BqRyqiAysiDi0k97t637co0W4hKW%2Fzlwf5tBN2Sa%2B6ySIrxFebLZS4DJhEnTiQgGu8C6Vk4zdaAFty6KSZ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7984203694" },
      { id: "7984203699" },
      { id: "7984203779" },
      { id: "7984203788" },
      { id: "7984203801" },
      { id: "7984203705" },
      { id: "7984203778" },
      { id: "7984203793" },
      { id: "7984203799" },
      { id: "7984203803" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:21:16 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3baf8a5bcf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6751959c-cafc-41e9-b551-a3cbbaa63ee0",
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
    "2B6B3AE54EC9CC85B5300D164602FEFB31D4083825000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kgVeofL1MAejyWnMgkmIL3EdegaMqDrzy0lA6Y%2BE7zr7PSVjUOcONFMb8PZVW1J9k3LESfJl%2FLNEX3IM2AjC0KxIYUMkMjaBdnkclpP1GzcRrN%2B4BGRuyRDxgC57PBTN"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7984203692" },
      { id: "7984203697" },
      { id: "7984203789" },
      { id: "7984203795" },
      { id: "7984203802" },
      { id: "7984203690" },
      { id: "7984203776" },
      { id: "7984203791" },
      { id: "7984203792" },
      { id: "7984203808" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:21:17 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bb4dfa5cf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "91e1379a-205a-49eb-a441-5721e920e58f",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "93",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2BC29BB73E3DC5F53E258D822291567BB017D92CFB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H2MjblDBIT9vWwsU%2FY0WXZj7k%2BnSSPn5nHJndVW%2FNELkR4EiFdjzYqfs%2Bhb9Ysq%2FMLVflq2Ep0w1PEk64nsOpnWsee0uYXIixfwVu5blgeeTPCidDiTIs7iAVeH%2FTm5T"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7984203695" },
      { id: "7984203698" },
      { id: "7984203780" },
      { id: "7984203784" },
      { id: "7984203794" },
      { id: "7984203781" },
      { id: "7984203785" },
      { id: "7984203798" },
      { id: "7984203800" },
      { id: "7984203805" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:21:17 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bb6dbdfcf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b408fb87-7e39-4976-875f-e5269eb62aaa",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "92",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2B4CF1158296A39F5AFE45A7561932C677242FA6D9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RKR8d07mljBd3SJBxRIVNAQaVOElubd7pR%2FgvzFLhdFfYCIxHgUOZnCT%2BjOUMoEGM4Lp8NmtbwzHgLVjjW7FSM4JTLaGRffbb0K546KaDFwguJDIogWMSYTlzKGX62EF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7984203689" },
      { id: "7984203691" },
      { id: "7984203777" },
      { id: "7984203790" },
      { id: "7984203797" },
      { id: "7984203700" },
      { id: "7984203703" },
      { id: "7984203787" },
      { id: "7984203796" },
      { id: "7984203807" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:21:17 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bb86a322737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f1ae0792-21d4-4464-af1e-9eaa0da67704",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "90",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
    "2B93448CAD6960810AC00074C07F415A77E8118BF9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xSVRDyjmExpuJTrW9TwrobphsOS6u7qyaYwcDDbNT5K0xrkY7W%2BP4wUNKhM3D3tPo3Q2LwQVKv9Vls0ayDgQ4ig9VzreYP1Evy5JHNVZleQNM1xae2Pm47%2BCuHlGe41b"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [
      { id: "7984203696" },
      { id: "7984203701" },
      { id: "7984203704" },
      { id: "7984203783" },
      { id: "7984203804" },
      { id: "7984203693" },
      { id: "7984203702" },
      { id: "7984203782" },
      { id: "7984203786" },
      { id: "7984203806" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:21:18 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bba4eed2737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d2149b98-5cb1-4080-b5b9-6e4ffd735925",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "89",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "8",
    "X-Trace",
    "2B527EE25AD823BACDB771CEA2752AF1A31C25AE07000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QfyvTUotBYIjHYW0J0%2FcPzh3BTKwcaD6SaZUzAx915vgCfeI3NbUiAlvBtxRuCusquTGx7AQ4piVnvFyGP8bxjQfH1F3UxDlL1GxYWNQp2I4LZQZfVaUrUAxPIyLT3Ra"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 3,
      results: [
        {
          id: "7983486584",
          properties: {
            createdate: "2022-02-22T18:16:56.830Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:48.318Z",
            hs_object_id: "7983486584",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T18:16:56.830Z",
          updatedAt: "2022-02-22T18:19:48.318Z",
          archived: false,
        },
        {
          id: "7983423012",
          properties: {
            createdate: "2022-02-22T18:19:14.106Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T18:19:45.374Z",
            hs_object_id: "7983423012",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T18:19:14.106Z",
          updatedAt: "2022-02-22T18:19:45.374Z",
          archived: false,
        },
        {
          id: "7983415121",
          properties: {
            createdate: "2022-02-22T18:19:48.558Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T18:19:50.460Z",
            hs_object_id: "7983415121",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T18:19:48.558Z",
          updatedAt: "2022-02-22T18:19:50.460Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3bbc0a88e07c-FOR",
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
      "16ebeaa8-017d-450c-aeb5-199a6ab0d553",
      "X-Trace",
      "2B14C7BEB0130FC6338394ED926B53DB3666FDFA07000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4HS35zaV7xHjLxXvB62zgg0NG3wMVWzzG2DVUCe79dvzKZNso%2Bi9HlCgit6mgJErnjWavIFNrO8CiFKUmf2qFveipnjVbT5lfw5GxkmNhVkxwX2hQqpemnmilQMgLwUc"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/archive", {
    inputs: [{ id: "7983486584" }, { id: "7983423012" }, { id: "7983415121" }],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:21:18 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bbd8c8d275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ef056d97-2c4f-4200-8446-43a1725ce1d0",
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
    "88",
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "8",
    "X-Trace",
    "2B7A5F8EEAD51002098566B2976373DA7DDCB921C0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vkCE9Di22VlKaUKF53JQWAMXZYaAbv6gCPuE%2Bv%2BgNDEJvlB9YfaijqLyLgbeJdh6hnHbTXwwfyXQnDIsi4lL0hQzlGOE7ev2KqE5QRGFptD%2BX2QmrP%2FPp2pLqcoox9Y1"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:21:18 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bbf3e1a274f-FOR",
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
    "7232089c-b3e3-403f-a233-a6c3ab311953",
    "X-Trace",
    "2B31263580318ABC80B51C74088D9012DE0F550FD6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hyTbfpbnpqfz2gxHsKrPx32ctNq%2FvAjJvlq7uayLU7NzEWyzLqIbyPCeShX5oYvAAWNbvYCHj5s5YGYR0O6GcrG6MvcskebXhOS3bjbb11kZtZedXYzCGYvBNswTbqGX"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
