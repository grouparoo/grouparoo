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
    "Thu, 04 Nov 2021 06:17:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7c23b4f6440-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c9f76c66-bc6c-4e6f-9626-0fc068b75d0f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247313",
    "X-Trace",
    "2B4060B05FE189F4CD0AF4FC779B20F416F55EFE08000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WLBHIQBnxjpHsy7gLUGrZiXo8rczNyVx%2BJjmtyCVrP2mJp9QCbnpgyCVH1%2FEQWijv7LnFiySLG3lrjnU%2F9c467WcBJCCo1%2F%2FhuQRY%2Bo3VGZPDdbRCwqKUSrWu5zJZndl"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7c3ea6e4d9d-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "15724ab0-3191-4329-8247-4f3d28de9768",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247311",
    "X-Trace",
    "2BF83272393C9809FA2AE2B4DED91F0BAEBA982529000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1GH1v4EiZepTK6XHc%2Bfq8yFYNiEQdsam1Xgf0MqTIk55jxT7iqsKpYDXst7bULgVUjBryvXyjA%2BeW2EXob3Wvl8m4fumvElwV%2Fk5iX0BrBlItxS8LaigoX6FtTFoBdRS"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7c5aefd7115-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "84f6cb75-07b3-4313-a2c0-515e3d57184b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247308",
    "X-Trace",
    "2BCBA53D2C8091DCC6692DD12D3BA32EA4295C340E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oFueqQC55%2FfF58Hlgh3MzXfma%2FIByi7l8hF%2Fj%2BfIBJVmlbtzxUtIRQC6w4f%2BdHxDkjQdpyb3iaIlf09nOS0tOE1lVtJmLJGLfYOCiqDSLjFqh84mI4NfGrmflVBI8FTm"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "f6a733dd-23d3-4c68-be2d-2098fd08305f",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb7c87c1e3b28-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f6a733dd-23d3-4c68-be2d-2098fd08305f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247306",
      "X-Trace",
      "2B2A929AFF985B695852A14C408D2A10D1D323AF5D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=miaQazuiA92WyLbl4KEnetLDcLwHN6maWmJcnJ57Kwgxog3BeoaMJXNzTjy47yrXlyiOM70ws9wwuBgKaXumncrOb9%2BZ1X6x1pRyhXqw%2FgSYuDo1zwAO%2BAzdqkUJ8pz2"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7d24a92ed1b-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "32937c46-2aa9-47f9-861e-523576f00d0e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247300",
    "X-Trace",
    "2B9762DD3A45304CB6A29C57DFDF1AFE36F19AA9A3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gtLYIvunIVwADguIPS2weq%2B019VnyuDKzTbR0ItvlWrL4GEXFGsmt0itw1fX%2B%2Bds0XhH6tvYJVBdpAhAsU%2FqjtMNWAq6ngqK9SS4n1DJf5Zeopdpa7i2plZziHLhmHMR"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "5a5703c9-3e6c-41a5-944a-5eb3b098dfc9",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb7d3d89fed93-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5a5703c9-3e6c-41a5-944a-5eb3b098dfc9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247298",
      "X-Trace",
      "2BA03C786D11CAED2AE21AE33FA3076818B30838EE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mFlUK3puhgTlqb8zqGEWbqdVQ1hjL18kpHc%2FTFTuWH%2BJXQQZI3sCgVf7aIB1WSAttMSUEnnhybXXUt95TenuQCj3P2k2DC19P7AwBXq3mNAKOxHxuUFJEdXytlXZOsDC"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:15 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7dbfd08023f-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ada232ac-9af5-42b4-8526-8d3e0421acca",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247296",
    "X-Trace",
    "2BCC38FF4EF43A9B3956B1532FB9DA871D2899FE31000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q9VijEdhkO%2BrOpeEfXJ6tFR5uCIsGjiKnVGAtPz%2BSPx1wbLNdh19J1xvz12H7jbes8Ir2ONPzCgGdHpm17Gtd1NpPYW4%2BrnoisutkqSNF8RlR%2FSDc8hCH7aQ5rf2Leae"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:15 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7dd688d2509-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d48a057b-978b-4306-bdf0-2db68825ad4f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247293",
    "X-Trace",
    "2B09C45B0A0ACBB122D5508420A2010517F2329810000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y%2FuRBqWp98LYq5ryuImIqlYjw%2Bn8vXevsEiutw4qlgAcmbO%2BQEMH0%2FIZv0GzKjWgh8zFOT6I0M3Cpypjd8Aiq5sZhmovzO4Gbngwiza%2Fvj6tD89mQMMsEkfc6HjfrlPA"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:15 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7debadf0256-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "08e7c899-b42d-405e-9fcb-148f60ae14a4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247290",
    "X-Trace",
    "2B5F19542D98CBAB3B4C15002176095D7D714B3C78000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iAtX09EJRmyGbH4EfdXL3%2BML6962twysEfvgd4eHgNMK1kOIbfkk4mHkR1z5gC11S5A3Xsbhfs%2Ba7Hlb7K3DcjqHLcN1bns0o2UsyZiI2aCx8t72B6ekI4QTGER4UJVM"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:17:15.868Z",
            hs_object_id: "7224014906",
            name: "John",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:15.868Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:17:15.867Z",
      completedAt: "2021-11-04T06:17:15.919Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb7e04eac3ada-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "05eb9610-bef7-4ef7-a961-329718128814",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247287",
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
      "2BAD3C1985432B74C3DF2BCA3DD9C83BCE8B1A72BC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kr%2B6hToMUUjAMJBb%2F0S34%2BEzCk3hwAowrgiP6UxBXh6ZXIPUvJUcZ%2BcR4N%2FWIxj090Li4PGHiCOKdS8G7wnUsG4QOeFLvV9uQbk%2BjH8FA3Mvx2eXNlk%2BwMiHmtbaFuk%2B"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:16 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7e3df6f3b46-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f64d3ee5-3fb4-45be-8c9b-ba68eca38d1e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247286",
    "X-Trace",
    "2B673D0C81B8BE968B4C02B15FC2B789C887F73D30000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xcMDyh45v3lNnqMmq%2BH8NXSr6AmG%2BOQqRokYGfeKG45NEpiaaOGLj55uXSyfyMZYcWYnhXsFlzpOcg5LGZquGsN80dJmQr9LJ4My22T7UcAkBR%2FRcMcCldz35wBIK6QB"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:17:19.076Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:19.076Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8a0cba670c9-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "78c9bea0-d661-4fa6-906d-30a0ab5fb90d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247278",
      "X-Trace",
      "2B3B2BAC525152695C899C60E82D7612409561B469000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JEuVt7LIeXDdys947%2BA1AqvFBynpabL%2FFAllEwOqqXx49Kv3Porw4nIbTtw2TW9cMqlJBuY1GEcrLaphkH2npqv2ZLLBpnSTdvlkB4JAjcMUYsjM6ORzwiPObh%2FmWlhJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:17:19.076Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:19.076Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8a25a136459-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "77dac229-8320-4730-9ef9-197702acf2cd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247277",
      "X-Trace",
      "2B4A84550444A1A015AAE55676850780FAD921CDEA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KWUclytO8IqbYU2Pc2JfRh9x2MyPkLGURH0uAULgTzK3O8tcexwLmUzTwFjvoWijPtqU9ImOctEDN%2FXvmkqlbjY6Aaanrzwq5kAT9HYtScTsV9mQFYtoVt3N10A0e3tT"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:17:19.076Z",
            hs_object_id: "7224014906",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:19.076Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8a3be7f1fa7-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2c655dab-52fc-4ef4-81c1-5422aae613c3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247275",
      "X-Trace",
      "2B5A02BD78E490BFD8BD7064D35BB25CA11F99CB69000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3M4AxMBQEdJZMH93elBXjHnQ01zNSYbNCEv0GaUD2KcniQc%2B7VJbKEhA5LZgdjsIBViS1wdjy6v7zyDnAu4LSgNR2NYbzBo%2BazodG3Kuvuq5nWWsRmE84%2BH6FywTExhk"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:17:19.076Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:19.076Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8a69f4f70e9-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2d79d88e-346d-40b4-90de-3775c2035a77",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247273",
      "X-Trace",
      "2BE0AFB9EFEB7E2291A993953060B7F5F27DE017D2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1011639L2e0wcrf7LtH%2B7dHc%2BVqV%2B1Qf9OosLTwV1iJ71QtcXZEZNkgu%2B9BcnvbRUZhrfpIaGJVRdofRqevInOPufhznl%2BOMw0zMIwc8NQdCesBjBnvAMxqJ1TKQCpPa"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "2e7696c4-bc84-40d9-a38d-f17b97f182fd",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8a86bbf70c9-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2e7696c4-bc84-40d9-a38d-f17b97f182fd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247271",
      "X-Trace",
      "2B4E569D9EBFA41B4BCB33FDE6A688AC30F1F55F39000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fE%2FeQ%2FVN3hSpFhqgo4CV2lXDF8yRrtFUowkpcGOeG%2FpLfVcgOItJJ4Bj0Qyr8JUIBNcpuxZmgAbnQpNyymDqkPqLByhvfTDfxbiSK1Uh%2F6XGMdGL%2Fnbb1%2Fv5C%2B5Ncflb"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb8b1d80870ca-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8e9e1485-ce70-4300-a408-4d064f948c56",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247268",
    "X-Trace",
    "2B4CCA9F2DABB40D7BA25A4DC1A9D58668BAD3C132000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tMVDgMr1m3IojWsIN2OpIgQoJiWj%2FgvN67Slad%2BIFdQDrFfdX2YlJcJP2TOHq4U6kZNR63cLzfPC%2BvUsN%2BsseNz3anneWUpj%2BqIry60r86HteUfRNPECuJFhEF2Ajp%2Fs"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "327a9ea1-990b-4b89-bef7-514e64a52788",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8b34d376440-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "327a9ea1-990b-4b89-bef7-514e64a52788",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247265",
      "X-Trace",
      "2BD0A36EFB11FB8D1EE49A141D5177EFF7A636A9D5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=puodfU8Vpk2%2FUa51UyKpq29RQzGU7Cs5asnVHT7VS1n5hcYzCIAVvfbklI%2F3%2Fdp90mEqZCmSwGf9DugxkQeTvoA%2Bb6L6twrspRiLpDUARA%2Bz1h8ekIPZyZOKvaMq5h8b"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:17:19.076Z",
            hs_object_id: "7224014906",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:19.076Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8bd2f051fd1-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ef233489-9b0f-4265-8541-878669ca054d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247261",
      "X-Trace",
      "2BA5EDA908C9F8C9BBCE2363A1C0296D57DAA8C27B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BwBkFu5FaNExs0DjjGwo%2B7V7PQEmonrfdQNpakw4Tn2O9rqWM5fImblabYgotmvVL4%2BixEi77%2B%2BVkrxRn6VacfEWPeoUnTA9LOySyhh17FR%2BhdcIv2oT9gS06eT0Kt4j"}],"group":"cf-nel","max_age":604800}',
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
        id: "7224014906",
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2021-11-04T06:17:51.229Z",
            hs_object_id: "7224014906",
            name: "John",
            website: "www.doe.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:51.229Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:17:51.199Z",
      completedAt: "2021-11-04T06:17:51.259Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8be8ea1ed0b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f3b85cd5-8040-487c-90da-c44be7f3bf8c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247258",
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
      "2B98C3C420ADDEE828ADDE9D27BE5D326363FA3ADE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XrJmTM8lEpgyD0FfUnil0AVWwRRMlkcTvX7qzth5dhCTjYglC3KgQvT54KVOzXUSXKbdQmCRzPauw%2BeWaz71%2BNqgE5nrcNvKQn%2FrWFTcIG0AUJDwbg%2FlMqvb1o460wWR"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:17:51.485Z",
            hs_object_id: "7224008219",
            name: "Pete",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:17:51.485Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:17:51.473Z",
      completedAt: "2021-11-04T06:17:51.524Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8c03e6570f2-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "85f69299-3ff6-4400-9c64-b8856cb6bfef",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247255",
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
      "2B3BB43217BF5468504FED9641260D21CF690F17D5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p4NyBECBcW1GknEydSk3nXD8txBppRKVI4p2Mg036XJ4nfC4pNKDWGw15gKuZoBZ%2F45iKPWG2WP%2FGKSCiyEv54EXo257dHu1iRFHtAy6Qbwj9%2B79ChGHAtO8MDjKXcUn"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "96ba4fee-b91a-404e-b8ee-8fb7590bcc07",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8c1dea26462-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "96ba4fee-b91a-404e-b8ee-8fb7590bcc07",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247252",
      "X-Trace",
      "2B4BB821204FE45F1BE750E0B88538B4F1BED6DE66000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DXGVW9noEnW3WzyMuYXK%2FKy44%2FqiDyEK8UkAhoWp5P6eg1NTsQ4u3NP8WTdtRXa2DH4n7Vsl%2BZlGZDd%2FvCCV5RBf0gK7YBE2uvurhgYGGoL7qm6lYcuvVVT6PBb1U%2ByR"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2021-11-04T06:17:51.469Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:51.469Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8c9d8b73b39-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "da0f151d-30cd-4568-b191-331495c8c4c9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247247",
      "X-Trace",
      "2B4F68644196C603812ADCF62EEB947FB70FA0DBE2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3fDmM%2FjTDC3tCQ03Y%2BSb%2FnHjLlA42nfxX5vIhYbKNCjCokDz6o0F%2B9cxUOt9hSQVhTika%2BInbotAKWcC4AO5OxP6p2%2FAJosFovsrEh69l68Cy4Ky7xyy39yDSZod0NpU"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2021-11-04T06:17:54.253Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:54.253Z",
          archived: false,
        },
        {
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:18:21.489Z",
            hs_object_id: "7224008219",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:18:21.489Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9880a9ded1b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "13df0a4f-6150-48b3-aa74-ec86070c55d3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247240",
      "X-Trace",
      "2BE93BE1289B35CB2C298ECDA261737648E7E65E32000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T49ErqeAIsM8VjOhvYKTsKDvRy%2BLKuIuOZM1hQ0sjw1PujSwjxDtkzZLKcvZrTLtb%2BCrkPefQPRfqstv7Smv%2FoICsIwb4cXMHi%2BdRkFXCUV8kryG0jIMY7P%2FeQC2H%2F3y"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2021-11-04T06:17:54.253Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:54.253Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb98999be6440-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e97cb7f6-b77c-4c9f-adb9-2935b900622c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247238",
      "X-Trace",
      "2BA6CE2A427A34FAB2EB8BEA7FCA0045757389BA13000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J8bSl0GD6ND8NZSyIDIXxsdV3uF5OGyBLS6CrW4JHKA7kJ5V0Qa5zLP6OjXOxKOi62DfKoyU11SKacMDvIMqEjh9JmdpeESrNX1nNbPFKBZgKiqwjpZNaUSh7%2B7o2DSC"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:18:21.489Z",
            hs_object_id: "7224008219",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:18:21.489Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb98b488d641c-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a7704390-a5de-43cf-bf10-023853ca706d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247235",
      "X-Trace",
      "2B3646BB3EB1C5304A920222B45DC79A9893F141E8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s96zZpVfmSN3SR8115zYdtJz3GlbGvGDWUcnl8sjs6kAlM9RcGUbK2VrH5bG3cMgn6OnMs6P8Y919nAt2s0reCfA7SxegM9mD29WY3baRDlZ407wIL0LqJUNeaB2aEhs"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "bcf36a49-e73d-4d91-bbdc-864eb45679a7",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb98e6f123b2d-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bcf36a49-e73d-4d91-bbdc-864eb45679a7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247231",
      "X-Trace",
      "2B1F1408EBFE0A1E8B3B6A7336A55B0861523CB8CC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CYQXzxL5tN62LjO7HWZrxUf%2F9JmRDO6zpGP%2FVtien66ya6gda0yUqilVTMQCjFizaOR97Ibio2muEgxvBwsYF1povPQf786SlUi8mBj6QzZUctYPrRB7wABh7y9JWkmq"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:17:54.253Z",
            hs_object_id: "7224014906",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:17:54.253Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb999ccae24f3-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e1a006dc-2cd9-47bf-ab82-637168889286",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247226",
      "X-Trace",
      "2B491AA6C3F57E69245C86EE13ED35F08144829169000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=shIfgDEXa0bSLSZD40tFR9OEI1eTAMlhXGvMmN2gmboFqncOu38iHb25KE2mF5ytKun3nzV3CLfrj2Y%2FC5ZHSG4NMegUQE0FVtUj%2F7SV7cQNMhq4NKVoOmCgjzw35ExE"}],"group":"cf-nel","max_age":604800}',
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
        id: "7224014906",
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:18:26.486Z",
            hs_object_id: "7224014906",
            name: "John",
            website: "",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:26.486Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:18:26.481Z",
      completedAt: "2021-11-04T06:18:26.527Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb99b0af6ed0f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f9421f19-28cf-434b-852f-e3e178972aa7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247223",
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
      "2B2910F9B2A1BE4395833EC03954A9FD57BDB9A118000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xs34zHc2KN8YWizbUIYHkIsCMpUeFSP%2FGZSyxMzCIIqhC6f%2BQITQcZe7O63l%2BgIauoeLcIspbmTjd2wt2SJmAP%2F%2F42GVgkTEKQkJtR8ZB1TyI8crwQTYfo1DyQKxdynW"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "2116e147-6a0a-427e-9c96-abe901dd8b94",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb99c7ee22500-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2116e147-6a0a-427e-9c96-abe901dd8b94",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247219",
      "X-Trace",
      "2B364C682A9D67CE37867A7605F4CEAD4CEC683196000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ajmVoprD9suJHruaFbp4MEqS0TINW9c%2BmjT%2F7D8NdLUhBkZD1Zruqf6A%2F36kKQCdGc9D23OfG7tYxnOfyyO8%2B7SGWCiw6zcNNB0qfa5UqGEN%2FnbuDV8AtHt8LMArQcd6"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:18:26.486Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:26.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9a6ca3924ee-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9e3d5577-f834-4bed-a961-da9e6678a4f9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247215",
      "X-Trace",
      "2B25AD354F55149BDE974A927CE247AF011844953F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jQsFDk3igwO%2F9tLj3O3qyuH4SoRJhSHCWc5kaKM4Uk1Fafwnr9MM4B7vGYi1jOhSIc2W7qgqF8wd442RAsDot4IebzoLxj2iF4k1%2FfOmNKRIN7ZJtxV6BQo2ucfk4Xqr"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:18:26.486Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:26.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9a818893aec-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "940bc2bc-a3e0-4e9d-bcd7-982468178040",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247213",
      "X-Trace",
      "2BD18A7AD385FA3812DBFA6BB5D5538BF800DD72D0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A29vv6yQrWo0mhC8536ZRsVR9tO11pKnv4TaWdSW%2Fnq7rhHhpelu1DK7kuQE1aupA8yqJQzyhJDHnKZOOWd%2FAEJladod0PsUuNS2KImD5A6l4FdV8a%2BZlstwA8WvpVk6"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "4703f549-9590-4072-9523-cddfb82ec0f7",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9a9bfc070f5-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4703f549-9590-4072-9523-cddfb82ec0f7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247211",
      "X-Trace",
      "2BC5BF21B8B3544B68219908B2E45EF8EC158D0D66000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dJuH3eohZIZxlZ94wvqyn8aYAEW6xzHCecmgMDGFTVMwYAQcV4ZogbUKbuYaV%2FJ3IEcgFVvzA4GASA5x7BxmP1FYbWLMSGrR%2FbitvZr0DBkXz%2FMZ33dQ%2BXYwZkFeKwUj"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:18:26.486Z",
            hs_object_id: "7224014906",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:26.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9b12ebf7099-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5fa42ef2-57b2-4e67-b37e-76942188ad17",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247210",
      "X-Trace",
      "2BB999184F69ECB9BFB5A51DEECC5D556DAF1A2A4D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Nno9oNsfRBwOjD1uu7GBaBvNGkOuYrSOCoWsOPbj0V1mD26zgXq0FMd4VsKD9lqhwVZ5Of0Ye2P1WThpBYatYJpctpFj4EH%2FJhzaS7aLLDqi2EMw9GQiRoIbTjUW58DD"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:18:21.489Z",
            hs_object_id: "7224008219",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:18:21.489Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9b27de4ed13-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "775e3a44-606d-4b61-9f7c-0112c1ce6399",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247208",
      "X-Trace",
      "2B3D7C94D6FD3FAF56896CE7C79984AC266F5515B2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qd%2BTXZP6u1ScSPdj5N%2B7W029gnrD7Y5HJku8t9JYV2lyzL6rjf0Y5X41mQttB9bJZyWMD2rlRD0P3Vl2GsaSyf6T%2By2NP9Ni5Z8rugvbylLRi47GCsEdixx%2F91Qwg2r2"}],"group":"cf-nel","max_age":604800}',
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
        id: "7224014906",
        properties: {
          domain: "notgrouparoo.demo.com",
          name: "John",
          website: "www.test.com",
        },
      },
      {
        id: "7224008219",
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
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224008219",
            name: "Evan",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
        {
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224014906",
            name: "John",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:18:30.475Z",
      completedAt: "2021-11-04T06:18:30.562Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9b40bfb70f5-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5511bc9a-0ff3-4f4f-b5e7-56ab547d1d9b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247206",
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
      "2B86CA18E7F91107F3D1777E1C063250B565ECCF46000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oIzXVcUksj61F45iUoaHNmqmJudmpGSfpXaQAwx8SVUFvliRfixzFePGnMen6keNkkuN8fNM%2B3vEoxPEjhABMoFDviLbOctL2A%2FVhixk33eZgoSgbckCMdPC7VzOxTAk"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "190dc162-98aa-471f-968f-2e8f8f08c1a9",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9b5cfea212d-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "190dc162-98aa-471f-968f-2e8f8f08c1a9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247204",
      "X-Trace",
      "2B12B6C7AC6D8A9FFD76CED345136FCA585EEDB5EF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H9OVW489FYVqyxsL%2FLLN7%2BJfVLNMBBtZkTtGyxeuWTWvBN7hzbrdJBFjJt2rq0zKAsebPJOfShK1ZQccWb7vgjYcRccck%2Fm5ylh%2BoGa62ibW%2Fc8keej5MqkDDLg53zjJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9be198770b8-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9156a476-d2ca-4bb1-9ce5-5d8e01a417be",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247203",
      "X-Trace",
      "2B629EDC04FE4BA543CBDFAFDD82D992E9D4F2231F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Pr3Dbv4lXHdFWpK82B7oCPCzWui8qVZ%2FgezODLkvnWV9qsCmKfJ9tMpV70BQVZZjB0rLTi6K5o4kFoZJmAc%2FmfbnCenbnhFdcUvBI6ajX2ZvTjyK%2F5lNfoIzP7I%2B4gQI"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:18:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb9bf6c386459-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2022b962-5cf7-4526-a908-c1855ec6e0f5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247201",
    "X-Trace",
    "2B3A57FEF2DE5EECF20046C4D4F16D66E712E93392000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ggtP%2B0dvQgtd2zybIF%2FcHhe8rhPyDu51c6RQyzOOYbFML1c1huFt%2BRFkiwvXh8i9%2BrXBVkgllx%2Fl8Rohj3gyWfL46hooJ%2FJ7RhOW1ywslNiT%2BlwUo6V3w2d51fhmGAig"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224008219",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9c0eaaf707f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8ea284d8-e8fa-4f9c-a6b8-3bb7c3addd63",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247199",
      "X-Trace",
      "2B70FDA09C6141E454DD83740C30357FC91C7BE10E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ksS34hEyNH%2FlrWNnaUW4RmLaTCdHyQfxSn52svHGx7uwSA%2BUZUJ2Q07pTpNoGBSrWJM2N612So%2F1MMkKNiSJqOQqhLwE70llKRbPcRdRqNFvRKqvEYcH533QnphW%2FiBo"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bba7dac7e6435-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d329f58a-defc-4ac4-8dc8-bde8d1c646c0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247171",
    "X-Trace",
    "2B912817DC1D3D570F90C3D787E45D5D4CE8B959E2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iMkSdIA9%2By5cDDoqSUPxkeftNT04pmdDfEdELX5xT%2FrI7aLBS5f45cXdbKs4YZ6QPTw4CowgCbMmBXT6t6oqF6vBOMRQ9nMxTmsajxaeC5iSWaMHhd%2BRFIbKF3qqlQtQ"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba7effb42518-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "734e740e-67cf-4a77-b107-a6e8720af2ea",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247170",
      "X-Trace",
      "2BE32330640F356AEC71A982061A898CCA30E34104000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Kl%2FLSnob6HqDtM74e%2FBLemgvpVMre6KOHahJwyJFkMQIEZ05h0Xi7F3HNe0z1X8aQk0XFBmv16E8h82i8roR0%2B63esvyPxohAP6cHRaRK60dBEcKs1wIbMSP9dmL2uT0"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224008219",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba806e9070c4-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b80e9bd5-d48e-44ed-a5fd-f37a9c0fb651",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247169",
      "X-Trace",
      "2B1D7CEEA37967E70E9FE9C5DFF212D2888CB5CFBE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QO9OSdDbPMpeKXTS%2FeHykzjrDzTtjvRlfpyjW9pH%2BIpTlnbDkMjbZ%2BnhAUBvWA0L2k%2BXEoTGqRT18lkFTHWrPGsXQZEIBeuUCjFbcBIAaxVyFUdWnOwowazLDZhFPaGG"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
        {
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224008219",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba81bf7f70a9-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4e74ca45-4f9c-4cd8-a61f-7cae6b9e346e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247168",
      "X-Trace",
      "2BFBD35799B48965539DCB9FCA01405DC0326A9330000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EWHjzTzTTlFVoL%2FdzxNVqFbHo0W6jKntPhkF4W49vn5bqFBwp1CLeVUQpJ4H87EA%2FU1p1Y9qujWfAV8FkRdwirNIO%2B7o6EtPGpeVxGpE6DKiDFQHqu5vIj%2BFgm0UOfm3"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224014906",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba834c646432-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fad4dbc1-3969-4076-850c-d9f48598aa1b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247167",
      "X-Trace",
      "2BFE79856D926948B79DC6ADA1EA0FF1E518D7FF4B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dwZz%2BCxqFl5K27YeZpyE7vNXBv0482RS%2BScircLra6R7BqYfQDPySrnpBCafTqM8T%2FRKDgy%2FFHXvi3JF6y1q6k6Jj6M1TusirmrfEGvh8wEXedgMoKOl9PHq1m%2Fl7IrO"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba84bb8c70ab-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1e20bdf0-12c0-4d86-97d4-54552a4b24d4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247166",
      "X-Trace",
      "2B86C1DCE4E107AD625837F22328FAB351C9A18F37000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hJeEY4BMNUlB7hHOQk4Qu1WGdfy1X4Blo4cVfAC3%2BhbtV3bfM2yMqDgcG3Q6NpIcyksF0lhwwrnpltivTB%2BEZ4N%2BC5P3c58oLJYK1yhAl2qN9OgdbmeQ7L%2BuEfZgLUN%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224014906",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba87ca4224d6-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "77c1f639-feeb-4770-abb1-7ecfd6b03c83",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247165",
      "X-Trace",
      "2BCAC28B952C10177D5E5961E320C621E3D60A1ED2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yki4sEzStcGATTQkyyVzYppTLIfvzef9In85nYFCPRx%2BzEbOZFIqOzaM3vU7cssAv5Ce0LFaTpqsYwBM3U4%2Ft7RxuJhUWY%2FNSkmoXBkrsF2p%2F2gQxBwzALzPNZ66I%2FQQ"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224008219",
          properties: {
            createdate: "2021-11-04T06:17:51.485Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:18:30.486Z",
            hs_object_id: "7224008219",
          },
          createdAt: "2021-11-04T06:17:51.485Z",
          updatedAt: "2021-11-04T06:18:30.486Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba8939971fa7-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a3b4a74c-a061-4c90-8338-b604aecacda4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247164",
      "X-Trace",
      "2B7AA0E06C556D09BBF3CFCF89D3665A70A8EF2B66000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dtrHlaXdjTKOYj4JIssOJQbeKeEgRK3Eix%2FHuIrtgwfUImrdUQULcgtNht3jH0DDj7KEq8SRfXc%2FQvClh8CCbQjLDgHQkf59OkfCp%2B6SF5fH3%2BpksTVRtZSNm5vOYtiy"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "7224008219" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:19:04 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bba8aa8a370c9-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9e55225f-09a7-4beb-a8a9-e8b1fb9582f2",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247163",
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
    "2BA5AAC81D4515ED7585DA76AD77192A3D62FB47C8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eU9aW40uEzatYSSk9x47sbPZCHFyIfBQt1gdUw6vM2UtKaMS1gk2miGyRhK0P8V0S9TYsfFmfRAhaKUVvd9s2uq4%2B2McPw1nrB8MGP4f57NvCUgN3RQ3iiXNieYFYQak"}],"group":"cf-nel","max_age":604800}',
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
        id: "7224014906",
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:19:05.087Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:19:05.087Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:19:05.082Z",
      completedAt: "2021-11-04T06:19:05.142Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba8c4aac706d-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e6d898b6-0687-459b-b2af-7dd7dd3d6472",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247162",
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
      "2BED3C84FB9D349E8E638D4E3EE33C00E85CE54CA2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V4tpB8kR80UqHnPLvVnAdnhcM8A%2BmgyAE%2Fv5cuFnjcsVWo0xyCW%2B3E2RH%2Fl%2FvcCmMCq8fPaz2l8sbk3YDTJMDsk7sP3X4GcHDFaF%2FwmyT3jKttDXhbAFsRMgbN9eydpQ"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:19:05.087Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:19:05.087Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba8decd9213f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a125f583-fb65-443f-89e1-8e3664909243",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247161",
      "X-Trace",
      "2B3C673BBB836701FB1F0C6E2358C8873800A5602B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=31TOx1R6GNVzNrWHmu%2B684FqLEin1AoEsfpqOPVa7jcPNrTtZR0drxZ9AQEhIKYX9RJ4MPiJz%2BL3bFXzb3Fk5aCRKd4FHRTYlZWoqEpkUJPhuecCSnnluH2wIhKo28z7"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:05 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bba8f489c70d5-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "51f4d495-4d69-451f-9f3e-d4c1099e6e43",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247160",
    "X-Trace",
    "2B824148ACA846471E094624913CC48B491F6411B7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XxA4tW02tnNz64hSFQuEWLKVilWwZmBNa%2BFAh1HGt%2FqHZJItb2fKK%2FsrXbdxV909Vi%2F5OeHK4Ml8xCRoeWVFN%2B4ntvC0xH47uLbjc883bhoD3ktufls6stMCZoj5X%2F8U"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:05 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bba909df570f4-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a4c3a8a6-c300-4ae1-ae97-32d02a760022",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247159",
    "X-Trace",
    "2BC3E33C0E10CFC1BC4F3D5A360E1E51B8DA270776000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4KHZSdRL7dIy4yZDA9IVUhQIbmSu8oRE33H84aysq54gvP8qfCv4W1M28rSky7FNto%2FxnAzxt%2BPCEllm5aZCEDhWRi6xeMXigUpjhjyGlZS1m66CPz7LCcru4M8qfDss"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb4d79576464-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8532f974-c25c-4d02-8af6-f6ecf4a61105",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247140",
    "X-Trace",
    "2B9D405FF35C32C5893972D3175CFC2A07A1B9E26D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FwE8PEuWDkppX69Fln91dU9oihGqz4Ixv7o%2FFg4lHpVKe5qqHFOu0lzAkrPrh9%2BwFEv%2FM9ML373Bu6ebETKIt7gWQkgMPzO7GE22ZwCs1RRHfWVmmzminUOhriBc9wvF"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:19:05.087Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:19:05.087Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbb4eebb46456-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "995c487e-5eb3-4c4d-a0aa-614893e97af8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247139",
      "X-Trace",
      "2B2AF82A80BA2A163A19B905D90FAF99E09AC51502000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sK%2FONnnL88FWHwz3zH%2BQPAzZD3KmAKx%2B1EloqPTF%2Bui3z8Evs6lIE8f2NuVXXB%2B6Q2KtQJEGEKbOWZYiHZB6wpTDZ6Ua4f7d%2BsLKj7Ea3zRc9l35zrzjhHxP4GJfURmZ"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb506c7570cf-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e722fe28-3abb-4d63-9b84-31cda4b65853",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247138",
    "X-Trace",
    "2B113532AA106E03613972CC18AA73172498EFBB5A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q9EaqDBuS2wfU5%2FDSHWqnlD2YC6R1V%2FRsI9tEz0NJdNDoT0NXNiOviFqJpAuF5p%2BKfxz%2BqjfNMdoxTHt%2BoNjxvtvzKfJkq4Lup5kGeVvOEVYs7H9flo6BqVPWgw6%2FbLE"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb51ccc624ee-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "54da747e-c195-4400-bdf8-5418af7ad76e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247137",
    "X-Trace",
    "2BB97D2BF9CD232B9495114951EEE0E3A95C5E3E56000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8yHZpzGPcF2az15HVV2X3fCTVaK4rExDDMpmeos4CkThAiWyMBGbuHe7m9hTaaJ9F0pm%2B3gphGGBgE5%2BXCsom%2Bfhyu6AFrHWJHak410ebUSpkWEOHdm8SiG3b3AZHVyL"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:19:05.087Z",
            hs_object_id: "7224014906",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:19:05.087Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbb535b6aed33-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b3050842-d0b4-4111-8f95-c900890079a5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247136",
      "X-Trace",
      "2BEE25E39722A626CAA08E7661CEFE7C462194512B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bThwCx4aaUevLoMf3z8LWuE8M%2B1GylegKRCz8Uoi%2BfeWGTp7p7S%2B6UMU2gwGFjXdylayzhNzkvNDsRhIpF1FBX3zge0WNfankr9sUH%2FUk%2FG%2B6HgQvlAVTUYKOkwSFYt9"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb54cbcd6435-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c11e1e29-9b16-4e13-890b-a5c81865d0d8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247135",
    "X-Trace",
    "2B6EAC69C818F1240169E34F7108EBED6D54137204000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jpl624sO0iQD1QCwMuDDMHk8GZP48HMUhEn2%2FWp2Oa%2BYV8Qm0ei4OJT5f6kfeD39fAADPEOi451q3lkE1gMNusTdybCpuc0BvHbUrps4Q6FIjbIUqC7HcR%2FCJc7KlQPi"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb5628800fc7-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bab8ea12-4835-49c3-8e16-f135d5d1cdc3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247134",
    "X-Trace",
    "2B41F1706048360F8C91E89E80D552AE19FBFE11FA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fb7xrqkpntUTx4HZ8dxp7g3Kir1ihShwqdPCDjSQrXBIifIM0XUe2lSlGz5uv%2F6YWKCEBM72uybUcQivixOVwomUzJD4SftOGbqbNDNLbh%2BwW5Hi4%2B48FTKIciFGkMPW"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2021-11-04T06:19:37.632Z",
            hs_object_id: "7223537846",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:19:37.632Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:19:37.631Z",
      completedAt: "2021-11-04T06:19:37.674Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbb57bedb1ee4-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "70bb7cd8-1af8-43d9-abb6-907ccb8a120a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247133",
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
      "2BF9C52C5EC17A9FB48CA89353ABE353B7A4394166000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cttxKwsYkMr9CigEwY1aKlbye2NaDTRtNlu7LJ6RodC8Y50WpzWpNVb%2Fk5QDbf2zh0l0%2FGRV1of1BcciF3bmn9EPNxlfzI6Egzc%2BpT2tvfXtCs%2BPhjFQL48JnvzVFe6Z"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb594c356459-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9b5997a2-521c-4501-beab-bb04e8c67153",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247132",
    "X-Trace",
    "2B50FA30073ECF9B247631D7EE9187DAE2B73CB2F0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GV%2B16HfcQsyuVDYbHOjdKblWIqUBd8Dfndl7SHY3e59ZJEYukoQCZcKI5wSVylrhqEVXIXdkCpN1xG%2BlryOCLWk1zmLT0AsDdjPsHKuLEaphPoPo4wsm5j0ZwGxTL12c"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2021-11-04T06:19:40.735Z",
            hs_object_id: "7223537846",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:19:40.735Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc162da37126-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "df5afdd3-5d22-4695-82fe-3401ec1ddbef",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247103",
      "X-Trace",
      "2BA1A68D076220CF219CB934F4EF456A102EEBA196000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ILe%2FFSPUvxXIc87tfRD68W1RUsVcg5%2FnHhMCPR8O0SJ2LdfJIgDJqrp8lSzVpHNnqdH6thERDIr19UfyILnpvTOCdPVVVoJEASLM06laS6T3co4qBhyhbhqEJ2DqXBJq"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2021-11-04T06:19:40.735Z",
            hs_object_id: "7223537846",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:19:40.735Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc1779b31c6d-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d36d20fe-b09b-48a7-b775-6041464b2c7c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247102",
      "X-Trace",
      "2BDAFBCA50BD68A8203C6B1F8482DC3123E47F0165000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BWrkHHXmUmsAbmItOx8%2Bm%2BoWSzPVVl8aX8yMCK4ysi6vz%2B%2FkcKcdJhUxObzXJVThRGbbpqNgtY28Mi3WUGMgj1OIFFtFHFMgpM2wXMCXobuIjUqNx%2B%2FfXkv%2F%2BToOMjDv"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:19:40.735Z",
            hs_object_id: "7223537846",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:19:40.735Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc18ea1a3b2d-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7a899b92-dfd1-48ad-af2f-00d699018e1c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247101",
      "X-Trace",
      "2BACD4245E312C25F3D871F68D3F3BBDC3D2AE03D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rGsK3fBE1%2BLSNJsz0d96Jvl99OOZKoLbnlOeIIFxgSFV3qTQt2uxLxZvGGOEXfHJpYe4kuUv5z1lfB8UH523VX8g1YgdnS7LgjoTFeiW5Gn2GSkEgAryTvtcSPp%2Fk7bM"}],"group":"cf-nel","max_age":604800}',
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
        id: "7223537846",
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:08.990Z",
            hs_object_id: "7223537846",
            name: "Maria",
            twitterhandle: "",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:20:08.990Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:20:08.985Z",
      completedAt: "2021-11-04T06:20:09.030Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc1a581024ee-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8ffcb03b-0186-4584-8f41-8ea67a419442",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247100",
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
      "2B96665C0E8AC4F817CF1FE70618349C982636FA66000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cqlf8Drm7OKCdvgiY9b2qWMkY5Ja%2B%2FC7hR7HGTbGSlL1z2eENMKkjZrhLscnIwSvNncs3FQFTpNh6mn42XmGblWX7Md15b0RXoCctuYhcrOYXhFQKbRjF2fQuVjA3wkL"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:08.990Z",
            hs_object_id: "7223537846",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:20:08.990Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc1da8f7709a-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1da04801-83bd-4fd9-8e62-ea08c20bf4df",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247099",
      "X-Trace",
      "2B4B821A5A88CDC52D74E98DBADB1119A6D44840DA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9Sl1X13Er7XIfA5R5ok%2Bd6nBBSoSjh0lMuNqyeU2DI%2BtH7sdJZAhGrcN4NLoaqybChi30yPGwp4WtUIM%2BSNiub7trXEa1PyC6jnOQQ95rbU97y%2BjQlnyLr5vpOSJE7rA"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:08.990Z",
            hs_object_id: "7223537846",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:20:08.990Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc205c7b70d0-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f891f344-1e68-4e54-9a3d-3bba4f4c5b07",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247098",
      "X-Trace",
      "2BD6A69A298540BE731AF63E0AFAAB131204573C75000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Mdp57F8V%2BDnni4P8%2BQ7bZ%2FldC7XXmpbosEde1D2EhVwGUp3Wvmd0%2ByXh%2F4nZAJ5n03Vq%2FEd6didpHstNQlh5TW5qHWhOyOEZ%2BZRPJHLOU%2FCxjjHqHdoOgya%2F%2FhFCNjJP"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:08.990Z",
            hs_object_id: "7223537846",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:20:08.990Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc222bb3ed5f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7cd7dc51-32b3-4485-b7e6-b24cddb28573",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247097",
      "X-Trace",
      "2B52D239547B563C19AED5396C8188DCFB897A0604000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=goenAYtX0MjZj3tkPc%2BTNZXAsYqmoUzT7wrBA1h7P0Q33XXSD4DoGc6rutk6J1HO%2FcBqmvf%2FgIWfIkjVhonVe7E%2Fvc47xjg66UM1wkFdEbggavMhnHVXg5OCZXdyyfsY"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbc23aa1970f4-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2eaff212-60ee-4412-ab65-c9389258d97d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247096",
    "X-Trace",
    "2BD56577F77C51F2E448C3FCB6DF439756B0CC5B81000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e4OcbnaXZ%2BRokJiAZ5DkT8nA4tfuBvE9z%2BbswueizYIfwOUMoH0HwOugNR%2B3GyiZlkHwA8Qwac8sWr6J1LfhCAJG%2FVHrcGcZ99AcjMcdHJNHTxEk0CvDLUhc1VfRm5mx"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:19:05.087Z",
            hs_object_id: "7224014906",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:19:05.087Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc250d736450-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a8ac87ea-5f41-49c6-9954-fc4f6695afcb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247095",
      "X-Trace",
      "2B9151A8E3FCE03DB49078A7BDC819418F7587B578000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HGEIPt1DINs%2BHqjtFXtTtOIJbvxu%2FBAqDGGUTvgmaVMfH1gjgPUGj6jz7xm4l5mgrsR4Lw%2Bfoq%2B%2BRKHy8OO%2FQJKwE5GPmIp1lLLZxQdKun5WbUv7v60kacKkGn4X87kk"}],"group":"cf-nel","max_age":604800}',
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
        id: "7224014906",
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:10.709Z",
            hs_object_id: "7224014906",
            name: "Sam",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:20:10.709Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:20:10.706Z",
      completedAt: "2021-11-04T06:20:10.744Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc266e0a0fcb-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c05ff66b-02e5-4d44-8101-1a37e0277255",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247094",
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
      "2B4FF122983F9FF35E886FE353C6D5712A20CC4D70000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gsFMteL0SkgYS5j2%2Bo3GcEm9NPqcL%2Bz50PGj%2FX0ML7jAYPpQqtnWi8LXrc3SthMNe7mlco9pDA2Rfytc72D89sE5zHZ9VFCqQC87XE4g%2F0dnIayjYRb4ge%2B18iHcB931"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537933",
          properties: {
            createdate: "2021-11-04T06:20:10.948Z",
            domain: "grouparoo3.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:10.948Z",
            hs_object_id: "7223537933",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2021-11-04T06:20:10.948Z",
          updatedAt: "2021-11-04T06:20:10.948Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:20:10.947Z",
      completedAt: "2021-11-04T06:20:11.100Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc27feb5645f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6b373962-7429-4a10-a19f-1e104932fa06",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247093",
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
      "2B6DEBCF2B967FB23EBD2AE301EF571676BDB7C2BA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oarXF0T5ufH8DdTKRexEAGyBHSO6pVPiTIYkjf17ujBuDMIvH8taNrwZc%2FvXrOMXv6WSuPWOiqNg6yWwLA0KT29loIbnsixIhGbLX4%2BsJXvT%2Be7b66n8LiHSeuMcKfyo"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:10.709Z",
            hs_object_id: "7224014906",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:20:10.709Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc2a29ea6423-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5d88eb0f-b9c5-45c4-91f1-3d91deadf516",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247092",
      "X-Trace",
      "2B2A316BF7A17CA37CB878EA02537683DC8379D179000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Xy%2FN1dTI3qLtTS6NWkpeSCJgwE45lIzFut%2B5JBDCqwERlGK7N4wCJvsxNKam7h0MCQ%2BwojmfbCYYwfdpkuZVae8Djd3z9blagQ3Qah%2FE1VPMyO%2BPZctoKYGjT8U9yFgD"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:08.990Z",
            hs_object_id: "7223537846",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:20:08.990Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc2b8a492500-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "69185b9e-3e8d-42fd-b45a-be637ddf3353",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247091",
      "X-Trace",
      "2B1B38BC33AED5E249AAC403B6F001B579DD9D2133000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eJs61fhNfafJ7EjhL2Fd9Qi5BzXEZ3PgqJVyQZNKLnd1X8na6be5XUzK%2BeIMwV%2BX8y8vtXgdgHeTrprSTFaHiFE45Ae32bk%2F4hkyaci7IJwQ95X%2FrhBWKoz15TW%2FlrFe"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbc2d0fe2708d-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6b58b4d9-d4ba-4061-b899-ddab9cb7aaef",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247090",
    "X-Trace",
    "2B59E0E9765B8EF32E1E3C22ADD69E8CC537643D50000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=B1PHz9E3zOfWKZdsN8ujBbSFv5USp1KeexA%2F%2BzBjFB%2FlXVnlHBPfSEpv6ResTuvVjtgBDwfCYPXoCi1VybdaD4vKxUFh2dWegHoqD%2FdGRvxG1IbqWF9ZAHKFKl%2B7kbrk"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:10.709Z",
            hs_object_id: "7224014906",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:20:10.709Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbce9d8ac7101-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5b667e46-0c71-4a6d-88e0-c474fabfb656",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247042",
      "X-Trace",
      "2B791B4F3575C36F99381EF0C4C1D90166071D70A8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qPaeFSCc51Ex0%2BgcozErS9%2BI3An5xXyxQB%2B3GZ0zB1eNGZAE%2BvdHOJf3Outu%2Bol1AVueufJSyq8GQdDQ52apw6U7NZEcGkqeb%2Fh2HxeysenYUdSip4DOVGeBssfy88JE"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:42.155Z",
            hs_object_id: "7223537846",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:20:42.155Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbceb2da3023b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2c58a4c8-8ef7-44f6-aff5-cd5fc5163fe9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247040",
      "X-Trace",
      "2B8A326E6FD8966FA5054A03805461117FA037E49A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s765lM4UphlqiYXd57DIFqH0MNefEsmzJyIzaDPeHnoKDZ3ivTO7yWcD0DtEtGZvuK%2FJUVv4v4Yo61xQlYl7Xk0nl%2F8n8TMPcptCglkAIbtP4kiVM9jcm2eCxruGR%2BmR"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537933",
          properties: {
            createdate: "2021-11-04T06:20:10.948Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:13.806Z",
            hs_object_id: "7223537933",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2021-11-04T06:20:10.948Z",
          updatedAt: "2021-11-04T06:20:13.806Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcec6b86ed03-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "aae9c9bf-13d0-4fb5-8403-978b1bb5f5c8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247038",
      "X-Trace",
      "2B6194B4E84021C20B4D82B65386B9AB69D0E088DA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2Xom4pFrP8%2BOdun3kXMYjalJjH5IX1wkO%2FH%2B9KCs3RSDS2SO4IB0nx4Q0N7PFzXbOX5KBucvL6T4I0vWndZ88CAveJ25GKUNYa8dWWD%2BrrR%2FkFAGB3ty%2Bw%2FgnTdfS2XO"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:10.709Z",
            hs_object_id: "7224014906",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:20:10.709Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbceddc70642c-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "507888e8-4e14-497e-bbaf-ee8153e7d0c2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247037",
      "X-Trace",
      "2BC1A8F9FD26C7DCCBFF7DB20333E816661360052C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3YK3kM2VmxkkFY9SdxqMgMzgelEQkBnIuzzOPgwW1qQPu%2B8S3vHL%2FDgi%2FZuaJ0FgLbxAsLi944wzm36A3NDYysKe4YJChnksn%2BGxJGkncN7N%2BX15FlcsrlGZCYAZ20A3"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "ac9608a4-0799-4b67-b3b3-8b715f296713",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcef4f8b706a-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ac9608a4-0799-4b67-b3b3-8b715f296713",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247035",
      "X-Trace",
      "2B35A27FF724A69565336069CF9A01281A5C490777000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z4RH9q9vJLNj29hVBaTo4wXP4ZK0mHnlectyKEe3aC3tksLJ5qLWz5xvS3nWaoSKXYv5AXzq5uJc4EEiEXAuRwvRzMlSjXhis9he2bTfXZ03GrntItTlI6S%2BE2NZnmll"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:42.155Z",
            hs_object_id: "7223537846",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:20:42.155Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcf6cb94ed1b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bcc3f85d-c8d4-4d37-aab9-32c1f4ff9d96",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247034",
      "X-Trace",
      "2B9FB16847DDC9550C15E3485D8A0782AE05437FAF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ttSkQ%2FB1duVyA073deXYTn8GLMk4Q%2BnZhPZyrixWUX5FCBiYrBrDGCUaM0A5us7J%2BRssmm4VC5d3%2BJ1YM%2FLvFUBVND9eCuZ%2FZi0P0zYYHg7AwVNXK0AKiDW4z8oaVsry"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537933",
          properties: {
            createdate: "2021-11-04T06:20:10.948Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:13.806Z",
            hs_object_id: "7223537933",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2021-11-04T06:20:10.948Z",
          updatedAt: "2021-11-04T06:20:13.806Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcf83c8f3b27-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4573b1a8-c908-4a9d-a23e-eb206f5de07c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247032",
      "X-Trace",
      "2B2FF10E750FD51D737514F610926B85371A1E1CAB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7SVhIv9YpV%2FLSU6WvHbEqe0ZvT0nLns95ielK0ufl8DyVbR9uQtEAo2KmEzNJK%2F6QBCR1N1sK1ntWr7YMXH7woGm7GD%2FD5Jts1BPbh3Vfiu0If6MYbPBlyA0INXPslI6"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "3f039cd4-bdbf-4411-a77e-23e0dd9ed505",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcf969e70fc3-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3f039cd4-bdbf-4411-a77e-23e0dd9ed505",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247030",
      "X-Trace",
      "2BBD3A1B9A130B81709EFD1D64A275800B081DBBBE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pCMSwDvOfWnmCpd03GoGauB6gk8o9jPZGZs1MwjJVaUogw3%2Blbp8CPPGYdqgKxBktpRIw%2BQN4IWsctqJwy3SoXLnvsYCElbIPXSUC1C2Ps3E7GZAzu0PR%2BeKGHPVOoPc"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd04095b6438-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "de6184a9-d8d6-486f-b905-de6e2914bb28",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247027",
    "X-Trace",
    "2BA5E7BF26926950510848036F316E40E71316B382000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SAXAiJpX1taEXCZ4fuzMZdPg12II3dIElxxVK46nmpv9uJ2We4H83UlYd7Lyep7yBI2rqGbz3fIS1FRRFccwm%2FGpd7oYW%2FcVaR90z1u37gBiD%2FxlNcVXDq%2FAFsODqRwQ"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd055b9c2584-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c815baa7-b4b7-4a72-80e5-e61e23eeb251",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247026",
    "X-Trace",
    "2B0859040776A6567D95110C4BE949B0385A45493D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A0oAxXfbCg1eNecr3B4%2Fz30v2vRcIPIZRNmtjSq7%2B2MLYOc3Fp2mEkZl2k%2FXfEHdbO6I0pFQHa4qerR%2F7KsoO1cl4e2KPCrqWy85Ze9t4YLUeCO3mGO0d3Yask7L2qZn"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "646b5e0e-69c5-4adc-bea1-f86e7c694c1b",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd06ce8b641d-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "646b5e0e-69c5-4adc-bea1-f86e7c694c1b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247024",
      "X-Trace",
      "2BCCB82389B1CB7488F79FE685AB603E6AD977AA31000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aMjkLyS4D%2B36zX3%2FMCn8apnCMSrKai9%2FPoBpy4jCTZugNkFFRBNcSvdqebum%2B07Us1dsVcfQAGkGscS%2FcvbKxAvht859sVFBfN2G4dbKbJB31PN4Dh8mYHMdw12%2FnAkD"}],"group":"cf-nel","max_age":604800}',
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
    properties: ["domain"],
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd0e9fa3707b-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4c96613b-3bfe-4047-b5b8-14c0d691ede7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247022",
    "X-Trace",
    "2B926CB60CF89597337C178AF517EE8BE2787D8DE1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UUZqIGmnEt3EhP443mPKM8TgcGtuXMA0mJ6PcKSHpVcLVpDXqIc9LaTlbROkYk7eSwpooWCjJrGKM5Xt0m3L9JDcsXW0vr4QN0Qmfkxo2ORrjNoRaWjt7YcrlRQGTDNt"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd105dff70c3-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "25ab446c-254b-452e-bd82-6e917c6e32f3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247021",
    "X-Trace",
    "2B10CDD27F4C6BFD578AE4658EDD798B9EFAF5475A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QG8WaUB9%2BQcHt1eKMTLEFYDkUfYuptn3dYa2M0Q7xQtj6htR%2F2xOdQ4Rfm%2FbcHM2CYGBXGSdGN%2FpieEwqBeeGqRm94%2BZWTNIxEvXdOPQch8MBD%2B6DVK84BkwcKyryJY1"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd11ccfe7081-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c4439f4c-a275-4780-9352-2049f1dbc4bd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247019",
    "X-Trace",
    "2B4EE7A911C3749DEDE8211DD456480D6062F80801000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZrCPSPTt0y0WCMPnWy7kyL6c97z8cdN8%2B43opx2OpxnwFOd590CaslF0l%2BGcahMjjyeIqbKRwfGMhqNRVABM7PFjm2cVqPlcOI3LCm0bpNzb%2B8kr%2BsHYCI4R1SDG9dBy"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "e06be94e-0a88-4869-a8fd-050f32b647b2",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd14ae8670a3-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e06be94e-0a88-4869-a8fd-050f32b647b2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247017",
      "X-Trace",
      "2BE4A9902CA5B1AA8FB5F5A127F3B2718F0110AF3D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=i8sQB%2BZw42xB%2FyukZibFrHVNle9ovf%2FMiQLYHqB8LbjwZLN72bsGGg8W5AREUnC%2F0xl20uAhD%2FrhZfRUYJEh6QJEiNKA1WXejFWAmni9ohnfSEUxZn9TFc5HURj4qsWA"}],"group":"cf-nel","max_age":604800}',
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
    properties: ["domain"],
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd1edcf40231-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5792baf3-dff2-46c7-ac04-ff63b12d6941",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247012",
    "X-Trace",
    "2B00D97EFBEE29B0F37527E7264EF73E573A12B322000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GYKrbltTrzJK0SwVBw2QBPYe3QJ7f0%2FlOwAczxDABIQVnKDl8SKad0xmbp9rakiwwGPelBSglTqCSzELGYu5BMoybvywwmAUn7MWjiikoSl%2FoePWbgLZiEz8uIR%2BH2au"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd206918255c-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "be9e3091-2369-49a6-883f-a6fb0c9878a0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247011",
    "X-Trace",
    "2B06B63216D9CCDC8C5DB7D3D02CE780EC707587DC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sJeNyz7ACnjduRvFKKWn9TTBxA8cVivW%2FTO4D3uXPonnuW3VhkPenEkCjI8BBHZXg5naK%2Fez%2BwEZA0RfZ%2BRgINpooGBKVqy8MdDTLQ3AzWsfUxm%2F41G65MS43ZD2Meot"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd21eb2c70f5-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ad6f3300-4705-48a2-8a5e-41dc98d8f176",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247010",
    "X-Trace",
    "2B2DEE311C2BED39B6120557E3167879C11B466712000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eIkYB%2FFbp8Vk3xge%2F7BkM4saUT0pMvYXbOc9jGJFEtzS%2Fundf72LarfxzOsoHsZLGGvXHpzaUyHSSGTOTN7wNPqdAt7JCzOelFTRbevkBflbzYXhsctoMBe7dJcE5TG1"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd235f321f9b-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ae8aff15-d116-4201-be24-8ae92a3e271b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247009",
    "X-Trace",
    "2BFBD44CAEEC493F3BFCB9B2A4543AFBC523BF1C3F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=23p2aQqWvFvqX%2BKDyPJZLe%2BA22Hqyps6LeQ7hfCscMiajlUutACRkxfhPEmDpKS9qckHFfpevUaytrmOhybAN%2FHP%2BwpPDtR4DJv8lpVlswhYPsnAvyMok57UiOHjZfRg"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd24fc4e709f-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "91d18a00-7168-487a-ae5e-07d3d58974eb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247008",
    "X-Trace",
    "2B0F4C4DFAB66094F66C3BE937540EE9684A51B3D5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w58F9rLvPHIj2D5kHmRVo0WZrlIES%2F93qlDkehuJvGiMywJtfIKbxNWHqaSBXthH8oZAb%2B2cGQt19lFbxgYCubJnw8fXGPTzTT0%2B404g2Iwo51H402%2FsY%2BYA2H9EapOc"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223538012",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user34.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538012",
            name: "Fist Name 34",
            website: "www.34.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537986",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user17.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537986",
            name: "Fist Name 17",
            website: "www.17.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537987",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user36.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537987",
            name: "Fist Name 36",
            website: "www.36.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537991",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user20.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537991",
            name: "Fist Name 20",
            website: "www.20.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537966",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user38.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537966",
            name: "Fist Name 38",
            website: "www.38.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537979",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user3.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537979",
            name: "Fist Name 3",
            website: "www.3.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537975",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user40.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537975",
            name: "Fist Name 40",
            website: "www.40.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537970",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user13.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537970",
            name: "Fist Name 13",
            website: "www.13.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537995",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user16.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537995",
            name: "Fist Name 16",
            website: "www.16.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537976",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user42.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537976",
            name: "Fist Name 42",
            website: "www.42.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538013",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user46.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538013",
            name: "Fist Name 46",
            website: "www.46.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538015",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user41.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538015",
            name: "Fist Name 41",
            website: "www.41.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537974",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user2.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537974",
            name: "Fist Name 2",
            website: "www.2.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537984",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user43.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537984",
            name: "Fist Name 43",
            website: "www.43.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538004",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user6.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538004",
            name: "Fist Name 6",
            website: "www.6.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537969",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user32.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537969",
            name: "Fist Name 32",
            website: "www.32.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537997",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user30.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537997",
            name: "Fist Name 30",
            website: "www.30.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538011",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user19.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538011",
            name: "Fist Name 19",
            website: "www.19.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538014",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user1.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538014",
            name: "Fist Name 1",
            website: "www.1.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537985",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user8.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537985",
            name: "Fist Name 8",
            website: "www.8.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537978",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user12.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537978",
            name: "Fist Name 12",
            website: "www.12.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538001",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user0.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538001",
            name: "Fist Name 0",
            website: "www.0.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538003",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user21.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538003",
            name: "Fist Name 21",
            website: "www.21.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537999",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user11.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537999",
            name: "Fist Name 11",
            website: "www.11.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538006",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user33.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538006",
            name: "Fist Name 33",
            website: "www.33.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538007",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user39.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538007",
            name: "Fist Name 39",
            website: "www.39.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537973",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user37.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537973",
            name: "Fist Name 37",
            website: "www.37.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538008",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user45.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538008",
            name: "Fist Name 45",
            website: "www.45.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538009",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user22.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538009",
            name: "Fist Name 22",
            website: "www.22.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537971",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user28.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537971",
            name: "Fist Name 28",
            website: "www.28.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537988",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user29.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537988",
            name: "Fist Name 29",
            website: "www.29.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537994",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user4.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537994",
            name: "Fist Name 4",
            website: "www.4.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537968",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user14.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537968",
            name: "Fist Name 14",
            website: "www.14.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537989",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user48.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537989",
            name: "Fist Name 48",
            website: "www.48.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537996",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user25.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537996",
            name: "Fist Name 25",
            website: "www.25.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537983",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user31.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537983",
            name: "Fist Name 31",
            website: "www.31.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538010",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user10.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538010",
            name: "Fist Name 10",
            website: "www.10.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537982",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user18.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537982",
            name: "Fist Name 18",
            website: "www.18.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537972",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user7.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537972",
            name: "Fist Name 7",
            website: "www.7.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537980",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user9.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537980",
            name: "Fist Name 9",
            website: "www.9.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537992",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user5.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537992",
            name: "Fist Name 5",
            website: "www.5.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537998",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user49.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537998",
            name: "Fist Name 49",
            website: "www.49.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538005",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user27.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538005",
            name: "Fist Name 27",
            website: "www.27.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537967",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user47.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537967",
            name: "Fist Name 47",
            website: "www.47.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537977",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user23.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537977",
            name: "Fist Name 23",
            website: "www.23.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538002",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user15.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538002",
            name: "Fist Name 15",
            website: "www.15.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537993",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user26.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537993",
            name: "Fist Name 26",
            website: "www.26.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537990",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user44.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537990",
            name: "Fist Name 44",
            website: "www.44.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537981",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user24.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537981",
            name: "Fist Name 24",
            website: "www.24.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223538000",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user35.demo.com",
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538000",
            name: "Fist Name 35",
            website: "www.35.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:20:51.684Z",
      completedAt: "2021-11-04T06:20:51.883Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd26781a70b2-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "90fbe03c-c617-409c-803c-805a0b97340c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247007",
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
      "2BB3FE4DF92C8CC52BBCE4844EB29EC3D79E0ED1BA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jcwKBx%2BryswTQrHPqiBdnhHQ3mHPhv7c53I1QVZzPMLXYc11TXh51kNE%2B%2FqWAzuJnhOjXF77iu91Zj91jdDXi8aPclf6Y7eBnHDtrd3aTChhMfwbRvk33aIPjOYdHOvt"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd299b64ed67-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0f199fe2-4daf-40ad-8a9b-925ae7140f13",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247006",
    "X-Trace",
    "2BA638EA8A99ADA217B62C9E63D3F0DD6A2C78ACDF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iLKb6T3D63b6TxTB1WE9yK0wnf4aXuNPbp61jEOL4EYM5EABFMWDfH8DklFYrETClJc5YjYcgJgmAfAzvmFVVE5X1389izT29Tv8kana2qQQDc6robUZjaCz%2Fya25cI2"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd2b0c667100-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "81a36158-2c8b-4a6b-b096-669eec2f5f93",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247005",
    "X-Trace",
    "2B29F759212ADAC60821086CE51B5E355F63E333E7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0PYs70NQJwNUQglxYGtzHY03P%2FaWqOjR%2Bke44qsie7bQil2AdK7eY4fyoPkWeprkXidhufz9XhKuPxQnjHFXJRD8rb14XYWDQsmzpihJM2a5NSlrxaPeaKa7maTarRGI"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd2caf031fa7-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fafef20a-a190-4841-b6f5-d016a514c89b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247004",
    "X-Trace",
    "2BD9636705AD2A7A3F8FF18F95FDCFCC8BA94F0069000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sxXW6v5osyt%2B5n2hdVKoGQOIaFx6Rxqwh3VIUoX%2FAUKhvO72MMGHquxOX%2FbgdTKtyod3rA4dYRtz6sOPb3INW7K89%2FyeL4xPmQxY7UbcWMvdLtHWmVqs3Tj%2BCTNCamtk"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd2e38287100-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3174e9af-490d-4766-a36d-197145690bd1",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247003",
    "X-Trace",
    "2BC9ADE9DE20A598B802137298A22331549FB602F8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RtIKZfGHxWUZSSF1ucEvo2iie%2BO5gDQne4GaIsKMjctFKUfSHveA9UmKNGRfk0ejfE5LriacxQd3PkWGLO%2BIN%2BhRXB8%2BqaCguKDdixVSzHnu4btpoNmzxyQegA7%2BjS5e"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd2fbafe2574-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "163f0fd4-1141-4d4d-8f2a-e85a185831ae",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247002",
    "X-Trace",
    "2B1253B6AC5B40F96D8A7F8C6A9F92AE9DADBF559B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ruDaGuzaBDoiiP0AeH2cPyAfjvUTdpACmt1JvwFoswcVVJG9ZrRI1vRWWzfj4%2FnbYYjlgM8PRo8vKsJ34Jd36ck9AM0le%2BUIBdYMUlTPQjp5W%2BTLMJLk4m82rIocFSSq"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd315b172544-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "62cd6ecf-bbeb-4364-b57c-6df54db86990",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247001",
    "X-Trace",
    "2BA3F148CCB3401E085657D917ED5999161C249224000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XRzXPVYb4%2BaV5cutDsW3xY%2F4NA5xkKz6TbjXsT97x6bsBahshHBy2i1AMnbZSc3DP%2BxntlMhXwlbYILg6Gt9US0S6HBud9Yb14tK7oC07FWexUoOyGMNzB9QkGiL7Y%2Fx"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd32cbdb2514-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "eb7afe46-7d4e-485d-bb34-5e9cc6806253",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247000",
    "X-Trace",
    "2BE3676E6A71FEC878D3A9022DD9152117C588A8FD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H%2B0Wepo6N4Mhsyu7VIacu51Nh9R%2Fpcbzb1byissUUNJND%2Fqwtm5WOGYrKSSo%2FpO2gWPlPiKutAu9ObXyY7LDZ5AOOJh%2BwilQritQOkKRHBgtWNYX0KYe47VSeboBpJI5"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:54 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbd35cc2e7075-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f5332dfc-abd3-4e4c-8fe7-ce26db933f68",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246999",
    "X-Trace",
    "2B0257E2FA28B7C09A59F1049E823E8A75DACDBDD4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u4J20IwyAwDdrqmT5M06tNFT8RZVd%2Byx5dGq7Uc6Kyz18JXHBb0w%2BZmPsA9PVIh6MfhsgqhQilAZ%2FjAtnHvwgIWbmmzleNjfQCNx38pnpH4TjvwVS3tOTFi6xps9WM%2Fb"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537975",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.431Z",
            hs_object_id: "7223537975",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.431Z",
          archived: false,
        },
        {
          id: "7223537976",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.036Z",
            hs_object_id: "7223537976",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.036Z",
          archived: false,
        },
        {
          id: "7223537984",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.388Z",
            hs_object_id: "7223537984",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.388Z",
          archived: false,
        },
        {
          id: "7223538015",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223538015",
            name: "Fist Name 41",
            twitterhandle: null,
            website: "www.41.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd373ed86426-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "28edb201-95e5-4671-a666-cf846fc030e9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246998",
      "X-Trace",
      "2BF0B6C6B298786F114474E2FD9C24393205015FE6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=toevxxRK0am4Em6Qk5oBMNaJzIBD2B8KuoERje3vSEbfvv7q4wnaz6jpmbTZDzxM5s9ZgtDSBYsGtZVQHevtLoB4QvwxqCdZFa%2BYN8u3H8Pv%2B5AYuCZgLsHlCjq63063"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537989",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:51.684Z",
            hs_object_id: "7223537989",
            name: "Fist Name 48",
            twitterhandle: null,
            website: "www.48.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.684Z",
          archived: false,
        },
        {
          id: "7223537998",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:51.963Z",
            hs_object_id: "7223537998",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:51.963Z",
          archived: false,
        },
        {
          id: "7223538013",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.868Z",
            hs_object_id: "7223538013",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.868Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd3ae9c0213f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a1de7a7c-a3a4-468d-b4f5-e101fe7566de",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246997",
      "X-Trace",
      "2BB93E80C9B74654F07FECD9728F46081F17AC1212000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qzCfSRjc2tmcArsX8vcysLhKZOrbGOYMVl%2FnDQ%2F6LONFQXqUv86e1BJSwHrHsEn8V22p7t0o3CyObteZ8CFBnDYnNmjstX8tOnG1ApGY8ra4Qw7OV9zFNmEtn%2FEo8Nk4"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537974",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:25.181Z",
            hs_object_id: "7223537974",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:25.181Z",
          archived: false,
        },
        {
          id: "7223537979",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.753Z",
            hs_object_id: "7223537979",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.753Z",
          archived: false,
        },
        {
          id: "7223537994",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.981Z",
            hs_object_id: "7223537994",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.981Z",
          archived: false,
        },
        {
          id: "7223538001",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.381Z",
            hs_object_id: "7223538001",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.381Z",
          archived: false,
        },
        {
          id: "7223538014",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.981Z",
            hs_object_id: "7223538014",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.981Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdf7f84970e6-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1eeb5a4b-ad69-4164-9da5-e283b0808fdd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246948",
      "X-Trace",
      "2B4B214BD6982EE72443843F26B073DDC157A30C49000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FF9QckJSoTVPafEVK%2BhppTw9F3m8pYAe5blyJkEE5cXgahEaAnoN8ubMKwm8MlFvsJrDBQPMq1Yod0P6AQuHpJN01u0V3%2F3x0MoW7cq5KL%2B8afLedTXEAOvagNmJ%2FMbF"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537972",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.384Z",
            hs_object_id: "7223537972",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.384Z",
          archived: false,
        },
        {
          id: "7223537980",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.451Z",
            hs_object_id: "7223537980",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.451Z",
          archived: false,
        },
        {
          id: "7223537985",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.615Z",
            hs_object_id: "7223537985",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.615Z",
          archived: false,
        },
        {
          id: "7223537992",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:55.146Z",
            hs_object_id: "7223537992",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:55.146Z",
          archived: false,
        },
        {
          id: "7223538004",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.615Z",
            hs_object_id: "7223538004",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.615Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdf97ea82509-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ef63c228-1628-46f3-b262-98af41e2aa1c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246946",
      "X-Trace",
      "2B64ED5E73F288C7CB1EC4355C705AB76BB7502680000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rDYD9c1PFWtAeszOuF8pjBBi4RE%2BEhOzgT%2Bq6%2B1qXfCPlcitTGuOYr0FcfJsWbaaTuA7sIGEfejYYMvN9ecgeqQBTDZbXheoIPRv6Dt8Wxz6o%2FKYoSW1OtHSkg4KDWcr"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537968",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.256Z",
            hs_object_id: "7223537968",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.256Z",
          archived: false,
        },
        {
          id: "7223537970",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:05.252Z",
            hs_object_id: "7223537970",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:05.252Z",
          archived: false,
        },
        {
          id: "7223537978",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:04.522Z",
            hs_object_id: "7223537978",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:04.522Z",
          archived: false,
        },
        {
          id: "7223537999",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.597Z",
            hs_object_id: "7223537999",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.597Z",
          archived: false,
        },
        {
          id: "7223538010",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.451Z",
            hs_object_id: "7223538010",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.451Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdfb0c4e3b3f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "deac024f-ef8e-4abf-a784-98e24eb88dc3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246944",
      "X-Trace",
      "2BD111207FE458405B1520654A956A53F71A1F8C5A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cKvO6QfyOrVQuLSe1lQMBoqHJ2rHvQ6ns%2BvYrQeuTFFOsTRjLlOapJD4GIrpyumG1erjsWWe%2FMS1jcgVhNU6onRCSCeSorZMqCTKJ%2BXnKB5sJ9QI4LJKYw44s2nZlQGq"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "1667022d-d204-4dfe-a1c7-3d258c4a1836",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdfc8bd36462-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1667022d-d204-4dfe-a1c7-3d258c4a1836",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246942",
      "X-Trace",
      "2BD02B03E385D0D696AF4D9D299524AC8BEFB9154E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SOc4dXoO%2BMZIXrTIo1QlGI9yNhj5DmNV8HZb5rpV1nmaqRWK0K%2FcdPRtdmiRXvZM2%2BlEpHm58NN2uTq%2FLjJeo3P7pxDAwzvxw6Fw9GiT0hzDq3yoOxQkXrUsBnYc5SM3"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537982",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.255Z",
            hs_object_id: "7223537982",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.255Z",
          archived: false,
        },
        {
          id: "7223537986",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.868Z",
            hs_object_id: "7223537986",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.868Z",
          archived: false,
        },
        {
          id: "7223537995",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.564Z",
            hs_object_id: "7223537995",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.564Z",
          archived: false,
        },
        {
          id: "7223538002",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.640Z",
            hs_object_id: "7223538002",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.640Z",
          archived: false,
        },
        {
          id: "7223538011",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:24.976Z",
            hs_object_id: "7223538011",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:24.976Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe0628d670ca-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "efda6521-6c0c-48ac-9785-7d5234d89b4f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246936",
      "X-Trace",
      "2B9BA7119E4AD2F72170F50D78269E75EBB0367391000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wWs4bR2ybIMkDJGNhwH2xrYLCJTkb2RnPFpwdWObNEdqhrtuT3YMkJC0S%2BALRWlkW%2FHJoP%2FAYyXRPRxH5a%2BQsDX5GEicXqM3%2Fk8kDzP%2BPkgR1BKD%2BP9dAh6LQKHl2iKV"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537977",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:56.084Z",
            hs_object_id: "7223537977",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:56.084Z",
          archived: false,
        },
        {
          id: "7223537981",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.773Z",
            hs_object_id: "7223537981",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.773Z",
          archived: false,
        },
        {
          id: "7223537991",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:55.857Z",
            hs_object_id: "7223537991",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:55.857Z",
          archived: false,
        },
        {
          id: "7223538003",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.034Z",
            hs_object_id: "7223538003",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.034Z",
          archived: false,
        },
        {
          id: "7223538009",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.033Z",
            hs_object_id: "7223538009",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.033Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe079fc470ef-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "98c647ea-dbae-45bb-8b80-440915a47bdd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246935",
      "X-Trace",
      "2B6D88D23A229EF4D3689EEA51B76114717200303D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=60mr8H4HVKVLb5yXEtDg5im4n5bvRJfW8w%2B08IuX%2FU%2BIWYYlA0QL7tIIH0wBzXdcCXvdRK5v1N1BjjaWUyQUbW4La5RxKW2%2FusrpjpTWgSa%2BZx7qEPwJFC9Wz4IkCFGq"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537971",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:25.970Z",
            hs_object_id: "7223537971",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:25.970Z",
          archived: false,
        },
        {
          id: "7223537988",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:27.730Z",
            hs_object_id: "7223537988",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:27.730Z",
          archived: false,
        },
        {
          id: "7223537993",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.642Z",
            hs_object_id: "7223537993",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.642Z",
          archived: false,
        },
        {
          id: "7223537996",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.773Z",
            hs_object_id: "7223537996",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.773Z",
          archived: false,
        },
        {
          id: "7223538005",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.980Z",
            hs_object_id: "7223538005",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.980Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe092e0b6438-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "343caad0-efae-4856-b727-21a650fbc4a2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246934",
      "X-Trace",
      "2BB58E5C69DE02EDE0AA7D35F898192F16725B57C3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FGdZ2CzcPsSTFWelGwB%2FNMJan%2FEHElw8BlL0N%2BUxy57neloqBPZxUHPA0JqYeA%2BvhD0ZmEt5JIKnAKFbxWnr3y6xxm6nRG%2F6clTpWCxT%2BbSQBWixI64B3d4jyt60X9Hh"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537969",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:24.010Z",
            hs_object_id: "7223537969",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:24.010Z",
          archived: false,
        },
        {
          id: "7223537983",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.381Z",
            hs_object_id: "7223537983",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.381Z",
          archived: false,
        },
        {
          id: "7223537997",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.985Z",
            hs_object_id: "7223537997",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.985Z",
          archived: false,
        },
        {
          id: "7223538006",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.396Z",
            hs_object_id: "7223538006",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.396Z",
          archived: false,
        },
        {
          id: "7223538012",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:09.867Z",
            hs_object_id: "7223538012",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:09.867Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe0acf7d1ee4-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1a706bce-074b-4843-bf86-38a847ac9662",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246933",
      "X-Trace",
      "2BE37EC8C0FD516BBEFA8E182BC5070D89ACB48218000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5VHT8y19ZwExQl2NtGKlRqLKuaBuTmRlKM%2BiWp2iPjFmQuAdPpOWTfsoTLCIJhc03nPBHaZT4XFhl6QKAF2Acfl1DhMJ3vIo8scqYVIUbSE5xS8hbGEoHbIjKmlyyrW6"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537966",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.642Z",
            hs_object_id: "7223537966",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.642Z",
          archived: false,
        },
        {
          id: "7223537973",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.156Z",
            hs_object_id: "7223537973",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.156Z",
          archived: false,
        },
        {
          id: "7223537987",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.811Z",
            hs_object_id: "7223537987",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.811Z",
          archived: false,
        },
        {
          id: "7223538000",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:24.976Z",
            hs_object_id: "7223538000",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:24.976Z",
          archived: false,
        },
        {
          id: "7223538007",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.680Z",
            hs_object_id: "7223538007",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.680Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe0c4b890fbb-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9435e6e8-0ba4-446c-b20f-c9502190c210",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246932",
      "X-Trace",
      "2B7267A346AD4692FFDED4D6BC7D95BB923A182658000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UEr0ck8pCIY7Nc9uJUsfitqeEtDX1TPIdhpKq%2BbApf3B6%2BEQMa2uyXh1%2B2sL5euOMwR3bmiAeDR%2F8OgzWXzXxpcminydPa1gOMcBh%2BjgSViYbDn2LGFjPrB20u7WrJbe"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537975",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:06.655Z",
            hs_object_id: "7223537975",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:06.655Z",
          archived: false,
        },
        {
          id: "7223537976",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.036Z",
            hs_object_id: "7223537976",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.036Z",
          archived: false,
        },
        {
          id: "7223537984",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:09.655Z",
            hs_object_id: "7223537984",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:09.655Z",
          archived: false,
        },
        {
          id: "7223537990",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.598Z",
            hs_object_id: "7223537990",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.598Z",
          archived: false,
        },
        {
          id: "7223538015",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:23.895Z",
            hs_object_id: "7223538015",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:23.895Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe0deb7d6426-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "adf3ec59-3b87-4fae-bf1e-be1652bd7ad3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246931",
      "X-Trace",
      "2B1835591FA754D1DB84AFF4ED6290C5F548050395000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lGHahMT5v7Xir8lof6g9XYung0sJ7y0Bf26Z5UEp2GPyzkv8DVjQbjBH7%2Fvol2Aedl9w7c3LvecSQyeo39TYnKcAz9S2f6ND8f%2BHVcaO4T287woAfBCA7z0POGef1bba"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537967",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:26.255Z",
            hs_object_id: "7223537967",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:26.255Z",
          archived: false,
        },
        {
          id: "7223537989",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.555Z",
            hs_object_id: "7223537989",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.555Z",
          archived: false,
        },
        {
          id: "7223537998",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.753Z",
            hs_object_id: "7223537998",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.753Z",
          archived: false,
        },
        {
          id: "7223538008",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:55.378Z",
            hs_object_id: "7223538008",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:55.378Z",
          archived: false,
        },
        {
          id: "7223538013",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.868Z",
            hs_object_id: "7223538013",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.868Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe0f6c75251e-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "568edb56-ebc4-48ad-9e7b-bafe09b5d426",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246930",
      "X-Trace",
      "2B133CAC4D0110DF4AE0B657531C1BFAD341AB7E68000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=68YZ4LT%2FnEVgt4bW1%2F1kvP4w5jovFFQbqhngJAqMKG80Cw4SdvGUxaKMO7gvTKzC0MAStx8da5DbG7amqIKLyh2RBZdPjdK2R6sjFQn%2B4nnExSxALZwmcxuGRsXYr1%2Bv"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537974",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:25.181Z",
            hs_object_id: "7223537974",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:25.181Z",
          archived: false,
        },
        {
          id: "7223537979",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.829Z",
            hs_object_id: "7223537979",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.829Z",
          archived: false,
        },
        {
          id: "7223537994",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.981Z",
            hs_object_id: "7223537994",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.981Z",
          archived: false,
        },
        {
          id: "7223538001",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.381Z",
            hs_object_id: "7223538001",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.381Z",
          archived: false,
        },
        {
          id: "7223538014",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.981Z",
            hs_object_id: "7223538014",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.981Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe10f8e1023b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4abb6026-e609-4eb7-80dd-003ba89200b3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246929",
      "X-Trace",
      "2B1A646992801877615E338838373349B9F36DE836000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KG9XnZJaNsh6v3FtA21DkY8X%2Bu%2FHfTnLujnzwBANP6ZT5ByRvSrFP%2B2aMCZRfGcSTLEkELlAr4EXIUi0iSj%2FOkBBi7j0GMoDOcbLV8PwkfbzK9vAB9pJGd9vI4dV3wVX"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537972",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.384Z",
            hs_object_id: "7223537972",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.384Z",
          archived: false,
        },
        {
          id: "7223537980",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.451Z",
            hs_object_id: "7223537980",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.451Z",
          archived: false,
        },
        {
          id: "7223537985",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:27.189Z",
            hs_object_id: "7223537985",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:27.189Z",
          archived: false,
        },
        {
          id: "7223537992",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:55.146Z",
            hs_object_id: "7223537992",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:55.146Z",
          archived: false,
        },
        {
          id: "7223538004",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:29.377Z",
            hs_object_id: "7223538004",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:29.377Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe125a636426-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2f750939-903b-4a76-aee0-8dcd33b40abd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246928",
      "X-Trace",
      "2B5FA0795238FD8B3F8BE6471E41557810245D0B56000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=66OtGiNg5R9909nzXsJqU28GzXXF7Jb0vKOks%2B7dMEYSvMF4xBw%2BTmUNFLPTK%2FlRjxPjjeXZfXnTCTIcnWbHaWuyQEF2zwMnxT7or%2BVEVi3Cw2UKmRnRlLzRAzfEw2vL"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537968",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.155Z",
            hs_object_id: "7223537968",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.155Z",
          archived: false,
        },
        {
          id: "7223537970",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:05.252Z",
            hs_object_id: "7223537970",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:05.252Z",
          archived: false,
        },
        {
          id: "7223537978",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:04.522Z",
            hs_object_id: "7223537978",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:04.522Z",
          archived: false,
        },
        {
          id: "7223537999",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.597Z",
            hs_object_id: "7223537999",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.597Z",
          archived: false,
        },
        {
          id: "7223538010",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.451Z",
            hs_object_id: "7223538010",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.451Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe13c9522560-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0f15332f-b3ea-426b-b726-6271e744a164",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246927",
      "X-Trace",
      "2B90FE747853170127B545FAC1763A3336768D5F13000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bMi5%2BMncun3qKutTEWFgBL3Hxnwdh%2Fb6sNP3zJ227HJwhlQ%2BEGFqemfZmJFBCIuzYT%2BHCXbrB4TM3Cvzm5iS8erbdV7lwhrfXwXeTn9SQX%2FKJ%2FzuX2WFZsbN19CQEhcX"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537982",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.255Z",
            hs_object_id: "7223537982",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.255Z",
          archived: false,
        },
        {
          id: "7223537986",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.868Z",
            hs_object_id: "7223537986",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.868Z",
          archived: false,
        },
        {
          id: "7223537995",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.564Z",
            hs_object_id: "7223537995",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.564Z",
          archived: false,
        },
        {
          id: "7223538002",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.640Z",
            hs_object_id: "7223538002",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.640Z",
          archived: false,
        },
        {
          id: "7223538011",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:24.976Z",
            hs_object_id: "7223538011",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:24.976Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe153e117104-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8f25d633-4349-4493-a341-5b70c5602b82",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246926",
      "X-Trace",
      "2B5C73ABB0F8BE2DB010D08DDE08A129921D76E8B7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pPDekIi1GlIOY5u3S%2FxbZq01X8ThKk1Osx5VgSLInpxhi01ukSpx2hSSViZA3a%2BD1Tj%2BiSIdzgZkoie%2FiCKvWkyhS5RN41OcBw0tOSmFVpSCllZzWMgGZ1mEuZXzJTxJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537977",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:56.084Z",
            hs_object_id: "7223537977",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:56.084Z",
          archived: false,
        },
        {
          id: "7223537981",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.773Z",
            hs_object_id: "7223537981",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.773Z",
          archived: false,
        },
        {
          id: "7223537991",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:55.857Z",
            hs_object_id: "7223537991",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:55.857Z",
          archived: false,
        },
        {
          id: "7223538003",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:27.321Z",
            hs_object_id: "7223538003",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:27.321Z",
          archived: false,
        },
        {
          id: "7223538009",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:27.321Z",
            hs_object_id: "7223538009",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:27.321Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe16bb9970e8-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d4701ecc-0fcc-466c-a72d-5f69477b8291",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246925",
      "X-Trace",
      "2BEF1EF89A8CADD612527811353D18E10E4FFF4920000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NOD4F2%2BXGpuGKp9EJLMKxAKbuWeVzVX%2B0%2FR6G55gAaHOn0%2BnR4E9%2FfMCn0ZMRIJdQjxcno9Ca4noITK%2F4iRDbJ0QNTX6lwTFgT5oIIOPcYCQLGyunKgJqJfn%2F4K1bnvX"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537971",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:25.970Z",
            hs_object_id: "7223537971",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:25.970Z",
          archived: false,
        },
        {
          id: "7223537988",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:27.730Z",
            hs_object_id: "7223537988",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:27.730Z",
          archived: false,
        },
        {
          id: "7223537993",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.114Z",
            hs_object_id: "7223537993",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.114Z",
          archived: false,
        },
        {
          id: "7223537996",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.773Z",
            hs_object_id: "7223537996",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.773Z",
          archived: false,
        },
        {
          id: "7223538005",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.980Z",
            hs_object_id: "7223538005",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.980Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe183c7e0000-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8a8773d8-47ac-4582-b773-f47d307a0cbe",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246924",
      "X-Trace",
      "2B131F70DB21D2A8C7E68A9CBFF20458B79A431CBD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4v%2FNyUMqkoMJBEAUgmnH2i%2F5sgxXWHYQmrkNJ2gZZPQY8T%2BWakCl8vMoX19JXg44SzuzTzmhQW%2B43LqyMG89jy1LBgTjkirloc9VUZz0rOxCtwt8YLKA6%2BW5ejNRAB8x"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537969",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.555Z",
            hs_object_id: "7223537969",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.555Z",
          archived: false,
        },
        {
          id: "7223537983",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.381Z",
            hs_object_id: "7223537983",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.381Z",
          archived: false,
        },
        {
          id: "7223537997",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.643Z",
            hs_object_id: "7223537997",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.643Z",
          archived: false,
        },
        {
          id: "7223538006",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.396Z",
            hs_object_id: "7223538006",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.396Z",
          archived: false,
        },
        {
          id: "7223538012",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:09.867Z",
            hs_object_id: "7223538012",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:09.867Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe19ddcc024e-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "46d22a17-6166-4678-864d-700ef5c0689b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246923",
      "X-Trace",
      "2B03BE457CABB5FB0FB88C067560DA53B285CEE369000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7aygJI8I7RNSLVft9uTCUxUyEFP2YbEz68GLIJeU5e2PNoyOC26gsgoQIvucOKYK0mr%2FvjSjcvI2nNZFwwlrCzE4Gjij6SEOTL5%2FYWFp5S%2B2rxkjxwIWFthfm3hsgzHM"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537966",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:30.643Z",
            hs_object_id: "7223537966",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:30.643Z",
          archived: false,
        },
        {
          id: "7223537973",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.156Z",
            hs_object_id: "7223537973",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.156Z",
          archived: false,
        },
        {
          id: "7223537987",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:30.345Z",
            hs_object_id: "7223537987",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:30.345Z",
          archived: false,
        },
        {
          id: "7223538000",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:24.976Z",
            hs_object_id: "7223538000",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:24.976Z",
          archived: false,
        },
        {
          id: "7223538007",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.680Z",
            hs_object_id: "7223538007",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.680Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe1b5afc0fc7-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1ff1afef-6dad-44b1-b07d-15fcb4908305",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246922",
      "X-Trace",
      "2B47870B94AC03F1C12C0E32048049786672B9EC75000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kAp%2BXFR8uzATX0QXNYjPrffm5KCEjvOngLEZbkfKaYutXK43EZ2%2FZ0%2BboVNI%2FRr4lqMwatR3%2FVkjkbLrDdlg8oCmjO3Q8Weo4X%2F6j0n9kBSLjsuMADG%2B9M8O%2B8USgWP0"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537975",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:06.655Z",
            hs_object_id: "7223537975",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:06.655Z",
          archived: false,
        },
        {
          id: "7223537976",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:54.036Z",
            hs_object_id: "7223537976",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:54.036Z",
          archived: false,
        },
        {
          id: "7223537984",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:09.655Z",
            hs_object_id: "7223537984",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:09.655Z",
          archived: false,
        },
        {
          id: "7223537990",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:07.598Z",
            hs_object_id: "7223537990",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:07.598Z",
          archived: false,
        },
        {
          id: "7223538015",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:23.895Z",
            hs_object_id: "7223538015",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:23.895Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe1cebbf70fa-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7d1f1f94-9cb7-424d-bed8-aadb5e0d29cc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246921",
      "X-Trace",
      "2B22048F9780AAAC8EF1D6A70AD617F415FACF57E1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vxYZlqPPwJZM497xAe9BOG6ee4i5xmazV2rThHCtD9CJnMSR7JPpSfpHknH2pL4cMjDDOPmzz7q0U1DFxYwVF0tDI9cKrGTClOHp9J7v5xc6rgocieH%2Bpi7stOIDRNwz"}],"group":"cf-nel","max_age":604800}',
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
          id: "7223537967",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:26.255Z",
            hs_object_id: "7223537967",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:26.255Z",
          archived: false,
        },
        {
          id: "7223537989",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:28.555Z",
            hs_object_id: "7223537989",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:21:28.555Z",
          archived: false,
        },
        {
          id: "7223537998",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:52.753Z",
            hs_object_id: "7223537998",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:52.753Z",
          archived: false,
        },
        {
          id: "7223538008",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:55.378Z",
            hs_object_id: "7223538008",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:55.378Z",
          archived: false,
        },
        {
          id: "7223538013",
          properties: {
            createdate: "2021-11-04T06:20:51.684Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:20:53.868Z",
            hs_object_id: "7223538013",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2021-11-04T06:20:51.684Z",
          updatedAt: "2021-11-04T06:20:53.868Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe1e8dce6428-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6420642b-7183-4b69-aa19-20a15b3104b1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246920",
      "X-Trace",
      "2B10D06F8D7E1B957DACFAFBAFE4CCDAB8AE2D6751000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T%2Bbi88oP5khm%2BN2brT3dw%2B4gxssDeIqzjHjbepoJ3FgVVzoGSPvvFVRbqmtcmbnAGK2Q3zeDC7rzTN5GzZE6u1lt%2FYUUvFh2NcMW0FiZY1KEMdhIO49cdGwoNO8y7R53"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7223537974" },
      { id: "7223537979" },
      { id: "7223537994" },
      { id: "7223538001" },
      { id: "7223538014" },
      { id: "7223537972" },
      { id: "7223537980" },
      { id: "7223537985" },
      { id: "7223537992" },
      { id: "7223538004" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:31 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe203de1ed23-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d9c15e22-8d98-4e8d-a3b0-32c03c2162e9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246919",
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
    "2B6D2A2CF457AFEF27BFEC5216D7324425E2CC941C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jt7V87F5vGYH%2BO7zlboLcuRP97xqjW4prmNmuFzrV02k6Bd0Z6Dv7RaayT%2FIRU%2Fning1Evem5lyxC0IDgP8LPfH%2B2Ro83rHM9ZTp3GsYPJG%2B%2B9Jkr9%2FFSDOYojD7VAIQ"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7223537968" },
      { id: "7223537970" },
      { id: "7223537978" },
      { id: "7223537999" },
      { id: "7223538010" },
      { id: "7223537982" },
      { id: "7223537986" },
      { id: "7223537995" },
      { id: "7223538002" },
      { id: "7223538011" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:32 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe21df4c709f-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "635027c1-54a8-4cb9-9584-1f857077015f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246918",
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
    "2BF5A5725F19DF973E220F930B58CD3BBC4D5FDA90000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JNh8CKVauxr%2B2fWzE%2FV5M5ZtwVYkfRn3%2FNJJZLWbsUwKLiwHNUpTgokcZMtW6HHhUNXkNWoia8D6JL3KmLKJ916IYdiZegEv%2BfDmpWxW1wlSMQIG7Zs5KmZT56C3kn%2Bz"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7223537977" },
      { id: "7223537981" },
      { id: "7223537991" },
      { id: "7223538003" },
      { id: "7223538009" },
      { id: "7223537971" },
      { id: "7223537988" },
      { id: "7223537993" },
      { id: "7223537996" },
      { id: "7223538005" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:32 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe23b82270ec-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d5a96f29-7636-4d2f-a989-51d50c69515a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246917",
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
    "2BFFA8F7838DA5C5320DB334A223029AB362B2CCCD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Dl8SBVVKONCTlDFPskQW21UC6bRXsR%2FUlUQBQ6HT5WCY0WaIpsGEs0lrY9U78WyELSgb4jCF7hzuZke%2B2nj%2FDnR2PdUoYVS9SwackuHV1vasrooHGs1842rwhavzCobz"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7223537969" },
      { id: "7223537983" },
      { id: "7223537997" },
      { id: "7223538006" },
      { id: "7223538012" },
      { id: "7223537966" },
      { id: "7223537973" },
      { id: "7223537987" },
      { id: "7223538000" },
      { id: "7223538007" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:32 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe252bee70e9-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "193ae28b-d1c9-4c17-a58d-25bba2de127b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246916",
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
    "2B344AC5BA83683D464F0F620F26A54C8C00A48318000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OWQLAOTDD2OuWWu%2BNDiMIZwJ8m%2FFidPXBMuNqGQHiVc644h7nndqfi7XmLfefbSPh6OsJNieptC8bq7kJ%2F2AcYH%2Bqzy%2BWdhrSJgkvgyh5ciQdOHY6Hkt3ulvXcoE9O6m"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7223537975" },
      { id: "7223537976" },
      { id: "7223537984" },
      { id: "7223537990" },
      { id: "7223538015" },
      { id: "7223537967" },
      { id: "7223537989" },
      { id: "7223537998" },
      { id: "7223538008" },
      { id: "7223538013" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:32 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe26a9350fcb-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "416b62d2-1c19-4f76-a5da-a5511b7267bd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246915",
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
    "2B6BAE0679634E7866A06AF6682BEAE1438E048678000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5EEp4Yx7QFRw6nVyxAe4aiiYiEKTDbzEqivJUPW3QfITJ1nYvuzVBKNKC6Cy3v0WIXsN%2FHFj9QJ6IwgpVuFeHlRdOBHPa3%2FW3tbLiqwj1B8rP1w8R1HWINwNoSGyz8Kv"}],"group":"cf-nel","max_age":604800}',
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
          id: "7224014906",
          properties: {
            createdate: "2021-11-04T06:17:15.868Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:10.709Z",
            hs_object_id: "7224014906",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2021-11-04T06:17:15.868Z",
          updatedAt: "2021-11-04T06:20:10.709Z",
          archived: false,
        },
        {
          id: "7223537846",
          properties: {
            createdate: "2021-11-04T06:19:37.632Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2021-11-04T06:20:42.155Z",
            hs_object_id: "7223537846",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2021-11-04T06:19:37.632Z",
          updatedAt: "2021-11-04T06:20:42.155Z",
          archived: false,
        },
        {
          id: "7223537933",
          properties: {
            createdate: "2021-11-04T06:20:10.948Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2021-11-04T06:21:14.158Z",
            hs_object_id: "7223537933",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2021-11-04T06:20:10.948Z",
          updatedAt: "2021-11-04T06:21:14.158Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe283e4e709f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "db919621-e91d-4410-9f99-07f3c9c4ccce",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246914",
      "X-Trace",
      "2B4A51A05ACFEC98D2DD743E87926D7FFDCB3B6EF3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hadAQ5D%2BZyzA0fyA5tEjIREz3nI0WTt7Xhcn070ocdrMdjZo%2Bb3%2BTQ0iVBusp09mK33AL2EAVuYye96nh76oRi%2BWmEE7plROQ%2FP081ZZnTHRsXDftt%2BSqieFEuIUDbpJ"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "7224014906" }, { id: "7223537846" }, { id: "7223537933" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:33 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe29aa3f707f-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2ace6eb2-434e-4d30-90fd-b36950343473",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246913",
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
    "2B79675BE3AE2D19D18E5E2AAB445B8EF82658A164000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Lq1oE70Iu1szR7d11ibL19yBFYddYd2oceXjejV2XSAhJIjm2UFwKEuvbAi0SyxCnaErxZNElGCUBjixVYeB8CyCNE8uBSDZEpDgXzddVrKgczVRZ%2BFj6P%2FkxgiOwtn6"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:21:33 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe2b1bb72133-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0bed7674-e706-491f-9551-5d1a6fd9af24",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246912",
    "X-Trace",
    "2B6515FA1962E5C35294B9FD81980A320F24A915CE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YkWJhJkqLsxWpVfHiZU0UJYEUrcUF8eKPHOjlD8TBorAVq%2FZ76YIMj28YswXDAGEYpJbE09JWCa95q32TsimZ1cIHtqfkTMqCZFtUySRyO%2FWZcsPTzIgd4nwGE1PHjU2"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
