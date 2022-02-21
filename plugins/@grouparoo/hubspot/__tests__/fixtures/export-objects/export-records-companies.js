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
    "Thu, 17 Feb 2022 19:13:09 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df154d2888c8c41-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bba0da2b-18c7-49a3-85c6-9c36af55fc93",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248712",
    "X-Trace",
    "2B918665C6064F639FED8649EA1B706AD1E45ECBF7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ra1OgyhnQFxCJ08%2FkmzKk8Jd5%2F90caXv2ckfe0FWOxFVzPZuMGntS1eYnwOXXNjVICSBzEUUexPoe9Ax8OMcdx6rVzqLaaGPd%2FZ%2Br1%2BSaWsGty9UR%2BY6hKWozjUHX7iU"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:13:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df154d3a9b032dc-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ab90272d-f5df-4c02-90c8-b6921d22bcd0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248711",
    "X-Trace",
    "2B2CA4304001595E7008A1AA283453A21DB1002E7E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8nnKcQyN3PaTbReVYS%2Fx%2BttgZpaEQKbDbBITECB2JICHOUSHdRMI1%2B4%2FHzt1PYtkXD3o%2By125pkTGl%2BUcz%2BLPQt7bW0G1QKpuJ5hIzWbQ9G%2BsrEB2yPDzya9h2mC4bex"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:13:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df154d6bf5b1a40-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "41340d3b-f348-462c-82bb-1b9b1eb6a100",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248710",
    "X-Trace",
    "2BEFC869AEAEF352C09A29C150F0BDC24956CB5528000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FNfaBj%2FrpWGGrOyWmRDyHn0xB3%2BKtSLXCmZvtZdmV26KgdHflV5KrmKFnJd%2BY8R9rWUh0J4SmfHu7GrB%2FP3AsXcQeM84N0XR3rV5yt%2FuEKrwYUxbvw8ByqiSt8ivvVGA"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:13:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df154d7fce68c4e-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "add3d394-89b7-4a3f-8369-330a41066d65",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248709",
    "X-Trace",
    "2B8DC642C8279270CBC380E9ECC4CF19E3E4AA89CD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q7%2Fz1xBAbGb0xyJWJmRoXmwFrSYRMpRpykdx8GV%2FI%2FGrsQwZ%2F%2BP0AKWBqSUGRd8Fsrcxml0y5JxCIDkue01nxiSYF0KNwOyUj1YQsl%2ByyydlieMav13gFCxbj8siL0u2"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:13:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df154d92d1a32d3-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1a172499-cc14-49ed-8630-1a763f6dd943",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248708",
    "X-Trace",
    "2B8C1963DD74523BBA7093FB0F8E64A9BA0ECACEFA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OCyzLfEYpnxhLgTFKY74bbjw2vpXZj2joY9zv9681S8LfpdvLfyFCytRio8iwXcq%2Bv%2BYerfsF%2Bq4jIntzqq%2F16%2B%2FuxZYOo%2B%2FrtL9pjPKJVYXz6NEAA3AfaFAuqtlhTDB"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:13:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df154da78128cc0-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3b9f0d96-141d-418f-b415-a186ece5b7ab",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248707",
    "X-Trace",
    "2B8E57FA9081046FEE133A239228ECAB0C40B1A6E7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zF9rJEHtg7%2FxJv12zLE94iXXj%2FPlyqqX%2Brzmhyqnmk9ER4zn50ALRp8A%2Fx8fD3x2UYtnApaJFA302jWwisvMWl9gZEvvyS2yJbkQN%2Fv6AX17qk5eTkE8CVKTbKUuWuv4"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:13:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df154db8b6f189d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "33734877-9ba6-4efc-a9b8-b856a42a9f66",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248706",
    "X-Trace",
    "2B811F9938617E795A177745A52A0F67123FA6EE58000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7og1l4D%2BbXnpWybwbe6%2FpXMBYwzcMW0Y891LAAj700FvUfxgLCU9jUSeb7Bw85ybY8%2Frt6gSiWIAuW2NSc%2FRCUh%2F6yQxInP8a8uzbXSE%2B930lK8NZM4%2FlLRBAg7OA6Bp"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:11.178Z",
            hs_object_id: "7945143592",
            name: "John",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:11.178Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:13:11.177Z",
      completedAt: "2022-02-17T19:13:11.239Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df154dc5b06195d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6c07f246-ec6e-42b3-b339-eb372e3ec284",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248705",
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
      "2B694F1297ACB07CCDA1D681E913D83E9B5CD15584000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q85shjmp7IA9fSpiJYUzVEgCOP5UJYT6srB9dQxiyRcNoUaeIhxcgjoR9H6cnmwCZvXP3LPetY3d%2FUAUPR2ck8XuLQCP1uUFuE%2BY5KLaWKcaxNsRfoP7%2BF2fYWcjIOhX"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:13:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df154dda9f78c23-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4de87da8-4d87-452c-82af-ac8ab8fbd554",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248704",
    "X-Trace",
    "2B7D07483D0A903A720B01B75BD8E844BF700F79A1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=55DZssWRklXsOwsFl4g2FhknJ2M3y%2B4FfK3h8xK9ElToNy9ZDEeXdv5tW08LwpqmYyuWE2%2FtR0usnHEGAZpmQWRaWz%2BSPCPunE0tVXuiyMQdg2pfuaZpwSwNmQx%2BTfl6"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1559a5f9c186d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c72f530b-44d9-4c2e-b6f0-fed8716cf493",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248703",
      "X-Trace",
      "2BBE9110B8EC8B026AB78E5C4C3FC7EE12474732DE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=I9Huigqhoph3TEjJjbJuDLMNlaSv%2BhkVqW77hY92bwdoMktw5bXDaUxyOFnjeFZ3PY68KTtJVcmUaSGYiTi4mMQgm3svc4oTDmtsd%2BDix4QZ7f8Kq8qyyoga9vTiHWf8"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1559b7eff8c3f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5e52765f-2b7a-410d-a67d-02a860437fcd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248702",
      "X-Trace",
      "2B560ADBF7578C417AA6F8FB5C220DA44A66EABD53000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SQ329baCGAZxoymwuol1pw5xZ8eZUIyGaBSGKnNlZguM8u2FPh%2Bd570qkNL5NqwlnN4PPFRAwU96fUqnLVWDpZj7%2FI6Tyn3IwIZiOyrFL5e8ae0%2Bej9yb5OvSfTYg4%2By"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1559c6ed9e748-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1d7eb601-6521-4f4c-8def-2a4a040b9290",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248701",
      "X-Trace",
      "2B9A292D46C08ED85370DB27E18F2F71F81CE59886000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fCuoN%2FKpJGcpIWf0JytrwZpWMALk3jWXj4FEZd2VQ2xYvm5xhhcyz%2BklQUKHsMpwS0Z22QjefFZz7J%2Fs4haj3JP6td0NhdCfRRwwX%2BTSdelc88rcmexGMt2B6w4%2Bt1L1"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1559d5b821931-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2f98bc9e-cda6-4dd7-909f-38d52772676f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248700",
      "X-Trace",
      "2B55C4FADC885BF7E3D9B66C20FBD5A6F28A5600ED000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1xJWZ5PQqc6HwgvDuOfe4oxNVcBR78gVDV7rb7mH9t2vXvl2H0U7H1EhQYDOcSY9oFKyTrepoH9uMCPxKmXoXuDh4l9DS0SoRT4dDcYoI3PYwBIjzWlY6OisckccBIIo"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:13:42 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1559e3fc41829-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "60a6c150-bbfb-4b10-966a-70d3ebf70705",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248699",
    "X-Trace",
    "2BA2A1811FEBF626E2C8CECB8ED75AB304C6743682000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X0mnKq8AVRJdJdwme4IK97K2MXDaNvHBgLqqEY4VsdZG4v7FGYDUxLPkphdiQpQB4N%2FjipNuzG5s5gQlkg2ccSzMEqtTzxAo8Bt3Zq3AreFoXd%2FG5UE9lSo%2F3QwNh%2F8F"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1559f8d4b8cbd-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b1909740-ea4f-4efc-9a46-b297ca72ae79",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248698",
      "X-Trace",
      "2BCF07B2300E3556F052EE5108046941347AA0D1F8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RkmTll8V39QlZqPEeM3HCEmhFGFFgatH%2BjQ2F0GNfMllXC6%2FUe%2BB9ZIIF6m%2F7hWkliKN7ttQ1vtC9GgENaAwpPcDMkegWa%2FOkWUWaTLWL8GLdZL7243keaT8ihufPr6K"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945143592",
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
            name: "John",
            website: "www.doe.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:42.588Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:13:42.583Z",
      completedAt: "2022-02-17T19:13:42.619Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df155a0cd631865-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "35aa5c7d-b9eb-441c-8d9e-efe8de59180c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248697",
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
      "2B7B4207E7D744C9EA7656595A81300ECBAC19EDB1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x%2F7alQMVrXbT0zB2svqXikUqbp4jaVCFOWu978PVqLDg%2B8NoLOUeAhynnct6SnmgmnzrM9Cpg6VlWrvX8G4NgZvT5S7xmgBvoyy0ylj9r7vZaDlA%2BfO6Q4hyEEScPdf%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:42.762Z",
            hs_object_id: "7945057905",
            name: "Pete",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:13:42.762Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:13:42.750Z",
      completedAt: "2022-02-17T19:13:42.806Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df155a1ce468c63-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3bbbe85f-3755-45dc-b090-3550703ad12b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248696",
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
      "2BB16292F604E5D5BB079232AD15F726EA6DC0660F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TUCQ8YjXNG%2BeeiLPiYnDLVFrTB%2B4R3ZzmzC4Xj4hQWQ27L6QZs328qa%2FDyDloSNKFnzUTdMInuawXidVLcYfkyj2To1%2FlExwVnh6zZ4rgI52FDXu9pp%2F1PCYzz2mmR0F"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:42.588Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:13:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df155a2feff3314-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d036ab62-b360-423e-ba33-334cdee5f154",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248695",
      "X-Trace",
      "2B428A55EED86F3213ACCE44D128B50C9F52BD94C5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2GyBPA6brZf7GcilaOQpv7f5AyHsvDyyyhKwoLMojiUQzsPZHV%2Fn8RaukbBB%2B2Y%2FeN7J6mNlt%2B3hCrjHavaqvPnT%2BBsyR3iwBAt4tbeQlom4VRuFmB8du9ulBwmDMYlH"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:42.588Z",
          archived: false,
        },
        {
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:45.768Z",
            hs_object_id: "7945057905",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:13:45.768Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1565fbd35e710-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f44a0e4a-8b5b-4089-af72-696940243cd6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248694",
      "X-Trace",
      "2B0AE028F225AD46F9FCEC8D9F00C29A59DADD7164000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7zSubj9NVv%2F8ZAI4c%2FhVam%2FCFKpHxz0SaBSywZtpIFhUPgXST8t4NtKAkwrmvnOLaHaI%2Bq60tx26mCFexn84Xo28izlbhSc04%2Fdwi%2BL6OWKHDmTpIkCVprkRnjzv%2BWHx"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:42.588Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df156615afd17b9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "42333af8-e76e-4ae5-80bb-1323a0be0dc4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248693",
      "X-Trace",
      "2BF94ED5748588FF3EEDD098E52EDB81B29547C18A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qKayjuturYLi4LJThn5hSGkEY%2B4193wYwYONT4uUywH5vaUFxrYMSe2uWcVuUfJo%2BWuxkBeRZP8%2FUAcC6V0IG2whruqnUNs4pbIXkfYIEKN%2Fs1L91GSUklnBqfrJx5%2FR"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:45.768Z",
            hs_object_id: "7945057905",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:13:45.768Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df156626eb78c69-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b13e2db5-677c-4729-9c0c-54e28adde05a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248692",
      "X-Trace",
      "2BFE2825405F468254A7021369C07CF213BEAB190E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Yqflk6QFOTYD3gMmuUNRXlMH81Guu2M00Tsk5IDPOVJ6PUHQYuOmF%2BJlC%2FFv%2B0cGyfo%2FaFpV9%2BG6nTQ2476E5mm2XvV0Vy2sLHOxe5hL0R%2BBQzliJE3SN6bHk4al5Poa"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:42.588Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1566399448cb3-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a586667c-630f-46fe-b2d6-bb5e32d3c9ba",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248691",
      "X-Trace",
      "2B00B48CDA92766CB3C22311C8C171BEE070941074000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FVASkkh7dMLCZY0VVVomg8LKATA2EznITeZZkcDbZ%2BsWyNBYv6jbASYYXx9YL9yhjO%2FlgQalro2%2Fa9jusYLWB86mUxFpgEsfd8H2Gf1igV%2FRKEio3G3D72VCQQn17X75"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945143592",
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:13.935Z",
            hs_object_id: "7945143592",
            name: "John",
            website: "",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:13.935Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:14:13.931Z",
      completedAt: "2022-02-17T19:14:13.965Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df156648ab332d3-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d15da63a-698a-4a95-97b6-e8c684b77ba2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248690",
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
      "2B5FEEB0F0051214E7B76C65CD3F696B362B84C457000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ki0pZwo2r4m8Pv55GD50UUaBVESRTiux%2Fxa8FD5t%2FEgvgU%2BA5yczq2G4O2ha1D%2FRzmfbi5rQlGbNBv4rw5LBYVje787%2FyJ3SCkMYv%2BC4f9viw4zX2yxrA3iBckDEH8t4"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:13.935Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:13.935Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15665ba8c32e4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "55047956-f856-4aad-8c75-7d3b52d6495c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248689",
      "X-Trace",
      "2BDD0960A05140F26D2067E40C272BA4D54DB69FCF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ArnjeS1kAg3CtHC1D8ptRG%2BRDpjeVEgf5A9WiQbuuGl7mbKxDRH7veCHoOzTYuB5wFJZsSlJfL79vP64B6D5tZyADveOYlPIz4Yp3DX%2BfJq%2BprBoFbZFAzN0lDW8MAWy"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:13.935Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:13.935Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15666b9591811-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "90f2f5a2-2331-49a4-9c0d-991bee8876e7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248688",
      "X-Trace",
      "2B92A92F26DE3FA4D4430474516F4F67ADFDB84493000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4hP3ekxuEhUM%2FCQmUK%2Fjsu3%2F3ZW6M7I%2Fa5XOnKRx4%2FC%2B3hBznyyO7ck2emXkpAG950Bv67aPhfzgZul4rfHZjFcMWaHiRFCaSLwPA5XlJ6fxMO4R5H1M8bZ9RxmtBNOe"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:13.935Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:13.935Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df156678ee38c5d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "71a12c3b-35f8-4dbc-b702-23e42253cf35",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248687",
      "X-Trace",
      "2B9CF709D67DA18E7EAD680C35E8BEF0AC26EADDF2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yDJxCg2%2BCiLtmWuCjY6abVSlNhu0XuNYotIIykU4dDGGvd%2ByMsrioVA5%2BgDLFFevRutJoZe2d9OsmU6Aa33Vhjv0Autqjs6cd3xp4%2B9tStHD2MfTyg12o%2BGwQrmqsEjV"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:45.768Z",
            hs_object_id: "7945057905",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:13:45.768Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1566869458c5d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f1028390-05df-4483-8689-05a4105cdecc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248686",
      "X-Trace",
      "2B56CF7F13CC6E3353A93E316F5636012DCD3E63CC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LHmkZTh33%2BzLYSdNsMtVSCcxHlMItv7TlRwO2qGbxorsYv14IY093127uWcnhMgoMq2%2FnvZm1kc9%2BToOwtFe1iKFuEi%2Bof1NL3xiu%2FM45Nnt0JWwdyqdojra8ZOKfvd3"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945143592",
        properties: {
          domain: "notgrouparoo.demo.com",
          name: "John",
          website: "www.test.com",
        },
      },
      {
        id: "7945057905",
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
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945057905",
            name: "Evan",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
        {
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
            name: "John",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:14:14.673Z",
      completedAt: "2022-02-17T19:14:14.731Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df156696c3132d3-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f535bce8-49e6-4d15-ab10-e0d591bbf59d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248685",
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
      "2B8E6AA7C2D13E94BE8B4AB3DE9B8B447C8A9FCEAC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aLE%2FYR8pij83gL%2FLWU5hNJQ5OUc3wJGS01IyJuDCi5D13e9UG1VNEr%2FkvtX600K0%2BBXuaQMXAq3RcNnDbZq0EM5%2BsK0HD1NQO4UzU%2BrTU3kMzEXcVdv6fO58%2FMPNK55L"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "de61843f-b3ab-4bc1-8c54-358e37eb0621",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1566a895218bc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "de61843f-b3ab-4bc1-8c54-358e37eb0621",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248684",
      "X-Trace",
      "2B33FBBFD93D8572918F02A3A5C2B26B108E0EA4D6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pImzu1yXQO3OXd2tjYLsT2vOAtkgebaEAHxlw9HxRRwGH%2BwK7bMwFLoD3LK%2FjilGmGGg24hFB4E%2BK%2BF5roVmvqGb8k1Yz4foKo09UVou47pfV3uDRbBwp6D5cs1ZrQ2c"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df156729b5a8c84-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9fe36783-0cb5-4d98-819e-11f4093e2c3f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248683",
      "X-Trace",
      "2BA53849256BE7F3DB40B11651B1428CA1F4745ABB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JDs3GyEXCIwV5RC1tIDPPFN0niIwJr0vj%2F5EnlEp6MQ9ukIMCLlhyBmi3SJDy35m%2FjWwpePCKWyU4vYlCFYY1w%2B3tZucv59tqtWY3QlcnQY4xkW%2B2gSEWQ%2FUnCLScxnM"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:14:16 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1567368c2334e-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1f8882a0-dcf5-4d03-95bd-4971faee7c99",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248682",
    "X-Trace",
    "2B5CC7BCC5D4152C05D324C5A540ADF1D41068331D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dqWW8gddinOhGgKRoCPL3jt17tqyEYRogz5YuuXR4ztEFsW7ZolMtwRkOhX3t4kVQyB%2F%2BVD9qd0fe3ZxHisKgs6TcWga0zsPh1qL%2F628Pg5sPqW0L2PFh2E9w7d2roeJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945057905",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df156746fd81a0f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7066ff40-ad47-47b1-9269-52b7f55bca79",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248681",
      "X-Trace",
      "2B66D7B150648AECADCBBAC8ED166B103244DF04E9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hYZAyITnzXvCGvZXMMgzr7vHiettyAFJi7zQwuKKlczEHL0iplTwgmutljaA%2FIDNQuuhhmenEsCov5jzyZh1JMWdC0vMBUYYVMOPcP45p42vuSAv1XsCoZT6FQJXkGXV"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:14:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15730ecab8c6b-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "38199673-4006-485d-afdf-f6b2747ca777",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248680",
    "X-Trace",
    "2B14934BCBFF4F03E3649D6967A52290FD835DA1DC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vE72lA%2Bwm7oW%2FayH7bpMaqLBJXUiSkiKPWVQ4RU8B5j320zAvz%2Frdok7zJ4mgX0G%2Fp5aCr0mvqtzd%2FC27xiZbnYn5CbP%2B5YNeAHKjf%2FUueUXhQpwjP8bYohr2Z5%2FQBcs"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15731deff8ca1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "941a756f-fa58-43bc-81bd-72adcfe7899c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248679",
      "X-Trace",
      "2BB3028A55AD1E6245F30F97D6DA17C0E9240F0697000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DtGdzChQKj%2FlJB2onJuwm%2BvpzwwOZFgoFfMMK5Njsgujx6zPGFI72dbyJ6K4FA5OS5SgfVgnXWuPOl0YjbT0mzPH7piQDEWE5ray4pM9u1Q3nMR6CfFNqHi9fSKVTAGs"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945057905",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15732cf2e8ca2-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "399fcf0f-b07d-4e44-8c40-3a9b448ecbe9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248678",
      "X-Trace",
      "2B37098010FAF00CEB773047F062E46B0A933AD9C1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s5GWcCvo4VwQFf5uMkHb2oPrhamWEyCKXuJQh9g%2FvnxlWRJwth1fmuNM5woW4MkuKP4bV26lWruFly589jR8zDe0oAyZ%2FoxIqFqSGs2h6bo3DWRS6VnAipjGSV4GHK5T"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
        {
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945057905",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15733be1f15ab-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "95d1519b-62b5-4eb5-9589-384ee0861fc7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248677",
      "X-Trace",
      "2B9B07921C022495EFAD8FFC1EE971CD5F4BA82AEC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Df7yPcYEZmZjDfEyJ6uxao8wqQyxbCkSHZuzw4N5GSSZ3OyqsgzgROVx9%2BbVphQzJahOzbqu03cKsIxg%2BfHa3eglQdEUf3qhWyYYMo08ziFAnNtRH1mEMCGxqe9RJCbF"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df157351f3917f5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c7bcfed3-e849-4380-9455-b3407a9af63c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248676",
      "X-Trace",
      "2B41F07ABC30615E960815DADC780967CC0FDB43CC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=svjeGc2L%2BtBHy02G%2BKE3OOI7yZhv8q9n4XweIWgpd9OzmsDcdi9JEryLiwR80bK9ppMzjzNhu6wtTGYmgSIKJlfQ3aJNmq7pvvs14wHFoeS%2BQdpzK0aL4js%2BzjB3O5yB"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15735fd82f060-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dbc3f448-4386-4a97-9a82-f63e4b079cce",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248675",
      "X-Trace",
      "2BFE5848F860D53967FF4200E384F57445AABD6DBD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PuGQ6wHkIcC6PU8%2BmvoN6%2BaR4TWL2%2FHlnQSC3mFafWbnZPPeW6eoAGfi9%2B48eNWC8EWhVnpS46BMAyahEExgEO96aIplH8Ki2IbS7Mis2EDEOg6lWQgSR42zht24sIm1"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1573759628ce9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9f9fe85f-b4a1-410a-abae-6b8e66152c0a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248674",
      "X-Trace",
      "2B65B4E843BCAB20B69C68F76DA017F2477A030649000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Bf0OGZEK1bn0fSyQkVjUh6XUXtDhhBLz3MEsJ57pRHcD7rhlTrt4YKu7QLzFW8gFVjqxwHRRUgVh8G%2FRPDBb3HPdzPaw6LftFN5gFH6XU%2FMliAJ8cN%2FBjZ9wzU8JxAbB"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "37dc391a-17a0-4cc7-ac54-ae9c5dbd0313",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1573889438c57-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "37dc391a-17a0-4cc7-ac54-ae9c5dbd0313",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248673",
      "X-Trace",
      "2B10648F56DEAA0A1F1FCF158EAF338E28ECCCA538000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n%2Fb1eGc%2Bu7Wu%2B%2B2zQEw22hI8NYUskHZG8VRm78bi2PSLJpdI2J4xi%2BV0dAsWkXUEaTSvT4SG2DoNQ%2F6UIdw9mPOLjX727g8nez4rQyZySVvSFPT5USUPRka129ZihOUr"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945057905",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1573fe9f61891-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1c73a682-55e9-4d8c-8f14-10b5d4a8ac1a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248672",
      "X-Trace",
      "2B10A02A265FDAE340BB0B3B3679DBFE5BB1652989000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EcBisFRWraaLz%2ByMkcxMFhOnLbZSUNfq4uak8bQ4rWt6UKazoi3Az1qMmfrwPje681StwaE5y4h%2F5sanQ4WmbPzNSm5g9uEJfhiixfDEURF%2Bc9yNVM6RSyHtE0pXQ0WB"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "7945057905" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:14:49 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df157413cf11819-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "eaf47ed3-dee6-47e9-a8e3-96b4c67c675e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248671",
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
    "2BA4894ACBC5678516D60D76856CCE58C6FDA41A67000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fFA6IdOzPo%2B5kW5nvsQ%2Fh0AqFkSqevGWdm57K2OwTE2UeGG2v7FGMtwQ340N6pjzcXa66ek7jjP552PwDKoE4ab2zDoOOrwDxY%2Ff%2FPOEHlWKTn44EqtyKqpTSHl8V5O3"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945143592",
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:14:49.382Z",
      completedAt: "2022-02-17T19:14:49.432Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df157422d068c4b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3dda752d-9b92-427a-9452-ce49bc0c177e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248670",
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
      "2BBF06803FF32F766C08ABB84C18CF59B6B9A5C5B7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K1Z9jn%2FSK1haPYzkz8acq6w3JMCEcyL%2B4vTb4Q3I5oYDE9bJOxz8eAfVYXO0D%2BTwtpdADgx5S%2BMiHfqJK6ldQ1HDip5gheeB2lF9jozNGvFJQf0W3avU%2BWe0rpkKRhp5"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:14:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1574348938c63-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a3b2c212-262c-403e-92f9-9fb4afd05862",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248669",
      "X-Trace",
      "2BBD34390EAEF666A38B896F405755B56E9F8F9B36000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OigDMR3UOba%2BduMMDK9PCl4g6zm23kP2e1UrtMdtCLraVV8UatXlidxxZKES41Y1bgXKyKHGx8GXkkz5lOiY4XdPkJkUDpKq4RRQ2vDEzOQ1eHsV2sZaP0bnqHdSNPUL"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:14:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1574409c819bb-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f9eef0c0-5021-41d4-afa0-231388f96677",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248668",
    "X-Trace",
    "2B571A6FB94A96298E96BB638CA8CC179CEF9258B7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1qg9UETGmNSzkrjsfmFr1rdippq8xHzfN3Edw23TNZEkZOHa%2FjhrZD2jnQUnRCix4V0UyRVPy8e%2BJcHzasZ8vv6zH9W1zFRCkE6dBnK9zZGJvzAYOths22Ig9iZpOU38"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:14:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df157450ec51a48-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d52f22a5-acab-4fa4-b87a-d2ca53aed117",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248667",
    "X-Trace",
    "2B542A872C76701FB0D8103D5C482B0EBDFF0176DA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UBrRGtmi6u%2B4KlrWuplWWbgBzfjhaMHkpXjONj85QF%2Bb1CR%2BorRX2u6MgNRVmydvje0IzTz7IQkO1w5mo%2F%2FJXJAWygkA0I4kCmRwoYjFPdG%2B%2FBfjkIICWRnlndd28Abt"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:15:20 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df158018c03e738-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bada183f-18bc-48d1-9a39-1538d7bb0a71",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248666",
    "X-Trace",
    "2B2904E3D018E8427BEC62C71A7348E4DA2FCB9ECD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sNuxUZpyxhvdB5VKSUwrvu3et8%2Fo6HYDfB9%2B5DMq6lvBbiCd38n9I5r2pP9ea%2BCJaaMSkRs3FZGZXbagLSbFsJ%2BxcYy2GP%2BIcNWEJjAjbo%2BD4aHAdMpbGWZuZ0Y1thKp"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15802590e1986-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "40a5ee41-f6d4-4072-9a26-4d1212a4409f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248665",
      "X-Trace",
      "2B8605A4CF2A976A2F848E041039BB5D3B331BB7C1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ibY2zEgWFcWuIZWCq1UrQZYZvWUF58B0zot4Yya%2BC9K9%2B7zZiQON3NzT1L7DwJCA%2FQXG3JUV2dHSvv%2BYBQqALilFeqU%2FOjvj1qFVXCsUGTgWHA84rjwDkiXcQY4GBqE3"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:15:20 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df158031de318a1-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "66e2a595-dbfe-446d-b766-6d34b81c7dcf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248664",
    "X-Trace",
    "2B2E61B39676C2416973CAAE35893CC8644CAEF1AC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZKrffTKRGM8DG%2FCatI3fne%2FSYWR9GnBi1QBfQxWLPprfhR3KXO2YKEfH6XdH01%2FslBeFVZ6NYPLhTVFP70dU%2BixZ%2FRz00eqm9xHRRUxr2hH4j1x94DYRrZ0AuD3M%2BdO3"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:15:20 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df158040aaf1a17-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e69dd4c8-a71d-45ed-8e24-c474fa58c9c3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248663",
    "X-Trace",
    "2BD383D7F5BA3D89BF54C2AB331B66221CF03CD805000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7x7hs9aAcc8I9x1wxT7C458k2G5SzqHHQ2HCJDipM68jNCj%2B1teGQCYui1tKkrM9btnqQmz1T57aTmhOJjMS4kkpmNWEDKcCvWJSxEs60nmYa6U8x8sn3QDKq3lYSQyA"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158050e91e730-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2fe2a243-5581-43fb-a287-014c797e575f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248662",
      "X-Trace",
      "2BA76422AFA59A3BFBEB50FD7C03EB41FEB4A2053D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XluLCifrSMSAwNcjXjXFAznzruAG1BvGuYjKn24GxFnGYtG2Duai3FRoi7axjV5bcTlqMvsfmOmW3GfHiYLHQz302E%2F9cCtbRIBYLrRVUTG3mA9QTNk8qsaUrZ6mKDzR"}],"group":"cf-nel","max_age":604800}',
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
      correlationId: "d657812c-8e05-43b3-8c4e-9338d5e5b4f6",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15805f9b88cd4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d657812c-8e05-43b3-8c4e-9338d5e5b4f6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248661",
      "X-Trace",
      "2B71BB7828638FC124FA86B2252507DA512F69EFEB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S5H2ew8rrth5%2FlrjnLlgS7XQKVjaZes54zebN3BD4W62wyyNwsZDtih4mLq0Wr1ZLzrUfwVj%2Bq7Vd2b9ROYR14qdEcLtYP2LRww3GNzEJS%2BUNxrBQj9gT16LIMFQwnLg"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:15:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df158102ffa32e4-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "48c2135c-96c3-42b9-b08a-734fc4ccb726",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248660",
    "X-Trace",
    "2B8321BC388239459068A37F4047B08A699807F290000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zPlH4jlUCsgP1PGBTIFrrqtTpqBsVeXzbG%2BEJa42R%2FTYCqZmFR%2B%2F7jA6vJvdjKBYdCEKfkS%2BYTgtR%2FCnPhaJMfmWpBFFMbEOyLiDCtddpx6TvYsAEnvJKEmldhq%2BD9iI"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:15:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15811081f8c8d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fdfc885d-03a0-4093-b3cb-e2176654cbde",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248659",
    "X-Trace",
    "2BE8242FEFCAC506B21497A715BB996E21B5A4479E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Eyap3QVBcyiV4mhjSGZOxSPUnhy%2BSoL7LkSrh2sIMpKbVgeD6HF7Vq1FNh6BtJmFBh15YM6kL53oQlrYLYRpqYwymOOb0kqE9Iu%2B%2FKofvBsDhR5fU1vjl239fEDyd6Kb"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:15:22.624Z",
            hs_object_id: "7944583019",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:22.624Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:15:22.624Z",
      completedAt: "2022-02-17T19:15:22.783Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158122e8b330c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bffd5eb3-53af-499f-be50-dd7645af2fc4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248658",
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
      "2B0CA5448AE1822DA398418FEA29A3169F8E6A08CD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xx%2BBASIiN56b4xEdwbGG8GAatLQ99DE%2FLmauVCkfZaON59%2F50LKV9MmdIPjwZDJPvY3V1A0tkLH5cfArDsnQLPIsaZpAbQlUM4EcyqbkxyT22DwMuZ4vuQgagwseywRT"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:15:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15813cb721a34-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "68cdd5a0-3900-4374-82ae-851d713e031b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248657",
    "X-Trace",
    "2BF732769010A464E0A8674835D3F67245E2BB7535000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a%2F402cvuZgiK7%2Fl%2BGdtns%2BNWoixEbxF36Ez5ggXrMrr3KNtxWzfIeOuPKLRdzBuY%2Fpw7MMQEhXBPKZr%2FZVjeC3hCwIm8IktX%2BSRao5q2YVO96DOO%2F6YiysRav%2B2AOnTo"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:15:24.982Z",
            hs_object_id: "7944583019",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:24.982Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158d06ee71912-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c55653e6-57d1-4bf1-afe9-17c8e4d04b1c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248656",
      "X-Trace",
      "2BEFBE735F401E5E7FCFDA4DB77BE8DAC686F84E9A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AAmaf8%2BSrcVAOW2Y7JDNZ89kkaEIWSmUkUGDMPyYp51ApG3ZPP%2BtaBVdRwIQtYVUNA3Ehde36GeeaSSxl05PQkR4Kh%2F8nl1Fk9gGDovqh2xFI9DUtT57tOeusKQBJ%2BeX"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:15:24.982Z",
            hs_object_id: "7944583019",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:24.982Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158d15bf2e764-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "de0c7da5-b2df-4f8f-8840-9cf7a4f75586",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248655",
      "X-Trace",
      "2B5D6538ED4D333AF46F2665BCC0955B5E0C3098C4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=k29FxP2AzOi8shRm88rz%2BasL7%2F8tamHiuxsak9wxoJXIT6gl7ygqt5T0Aq6ZHQwT7GKy%2Fl1tl35YGWeUPNpCvkttjaOUqgQ9AWNkMiOH4C3LO6rOoAjpSF7%2F9yd3HARg"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:15:24.982Z",
            hs_object_id: "7944583019",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:24.982Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158d2baf08c5d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "84142200-e66e-4f00-b135-957b3542489b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248654",
      "X-Trace",
      "2B821906226F6CFECB5E2A6FF34DEA3DB7049906D8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8IWSHLOU1AvX9qkeRoxiBXnIos%2Fc7X8G8roZQPgmVUnxcVItrJNqJwYfNqgEJ0ojNbeAiuUeQtCIf7hlRm15uIuCdeo43k512BovCzNGmQQW7qmoQz1IhYPlJE0mKcR3"}],"group":"cf-nel","max_age":604800}',
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
        id: "7944583019",
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
            name: "Maria",
            twitterhandle: "",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:15:53.592Z",
      completedAt: "2022-02-17T19:15:53.635Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158d3a91f19b2-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "28112231-1965-47e1-bd4d-dc97e0efb0d4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248653",
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
      "2B450D51C19E29AD9DAA738D99180D7C7CB4D4411F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fuFj6Rqpqr6SCNuU3owjwqz3BqT6mZPOc8mEDCRiISS1DRfdG2BZ2GB0roiT%2Bq7C3T1qolAj3xv7JKTnxnaSvnxfVvPxJBvVc92ieo0UwLIraLVyQhJkSBxwcv61gzOB"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158d4abbd18ea-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "56f6eeb3-c002-462d-a1e6-3660fde64714",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248652",
      "X-Trace",
      "2B1747A71C4FBAE5D1136B41ED4D19738FDDCB4073000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=td8a6Vru1GIUW0%2FGnDIGkTleLl4QXVds4T74hr8k8PRTb2OT09zE9n2FyY781PBHY0FhjtV5itTfriBJwOlv2BU%2F1H9pWfDccoU5%2BAyGvXQjxDurDgJruLhAAPKKI2Me"}],"group":"cf-nel","max_age":604800}',
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
      correlationId: "ca826afb-2202-4dd7-9ded-3ef9424f222e",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df158d59a2b17a9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ca826afb-2202-4dd7-9ded-3ef9424f222e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248651",
      "X-Trace",
      "2B973E2B45326D5A076F001638F5D83C88408C448D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s8Rw3XkuDo22%2BBSPDoaBAEzoF0s0FHFou4pvTe%2Bc8omFgL29hIJCohYsrPbmRIikGquASWZM8mumUQdTZmlF5hpDUye5gTYJfefO%2FNAlt2bWnU5D2NZOowdnnAepXz7b"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158deb8a01967-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c3a1f158-9f47-45e3-bbcf-c6b1f3118ac7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248650",
      "X-Trace",
      "2B0DC034BF57F8E3AE46787F69C877BCC3FC964E9E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g2DmsBqhntW3geoYKhWRGWG%2F5gBrCgr6D%2FkllR8gB4FD5pEdTfuOZku5brkbG4T0IFR2dXTnVhONwq%2BxPcHbe%2F8Exd%2Fz1KY%2F%2FWf2lRu7cUArE43aOfIIi8jIoSi9cBb1"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158e019e919d7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "927ee645-0bda-4b71-87b8-53cdf52c2a6b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248649",
      "X-Trace",
      "2BCF9ADA80E98788A36E9A97F8C9DE8B7A1BD9541A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d1ZRjr8Ame6RkNkqkrwJSKg4Q6Bck38vdE8YQnOWhllztD1sz1t3EISErSfUzbTRiILR78ybNP0wiCcg8M8IBIncjVZWljQx8LpCW6l7w1%2BJy1wWjiEIVmW5zDhqp2%2F3"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:15:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df158e0fcd51778-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "246da79d-2bee-4095-aa12-ea31f468de1a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248648",
    "X-Trace",
    "2B32515160BF1A375A4ED0979B96735677A97086D5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hcI0SnoqWWXXjgWUk3y8RtttZgz7QjLgxE4TKvULH%2B9ClcBdROE3Zj6MlCgnpTOqzFw62uvTOiU0H8SN%2Fv7ISyawLxfYSWBxzcFB%2BibOsh9IDxlUucP1wJiSMsKm4B7h"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158e1d8c71a1b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "67e50e9a-d56f-4005-b2e7-c02920b1d711",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248647",
      "X-Trace",
      "2B3D68612A40A33A291B47A6CB77E5E8E2960CD7A9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xs2QbTZfkpD1MyxavV1x5EzmeUkhUZ541r5mlYkGmC9bO3%2Be5xzz3az%2FCpZ2XHJ3yX7wC7VdlN6MxWYqQSmkACqDa7JiSBCzauKq2B2jfh8KHvCwCpS8UqVcqLv2tgrU"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945143592",
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:15:56.015Z",
            hs_object_id: "7945143592",
            name: "Sam",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:15:56.015Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:15:56.010Z",
      completedAt: "2022-02-17T19:15:56.052Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158e2a8168c4d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8deee853-e257-4039-ba8b-517054220be2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248646",
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
      "2BC5685775E2A85E03AD55781602A3849082692ED2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ivumGC%2Bqb4zDTFYxgFv2UPJGfXhwsdHaD2ZQ0xCh3AIP6Op56GWw%2BLuj7d6%2B5i8jdqCAw9jPMbSIi7OhOIoKLvvPHUSOrnCiUhFM4ZHi%2Fc15jRz1OqnjWtDGH6Lvkku%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945209857",
          properties: {
            createdate: "2022-02-17T19:15:56.185Z",
            domain: "grouparoo3.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:15:56.185Z",
            hs_object_id: "7945209857",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-17T19:15:56.185Z",
          updatedAt: "2022-02-17T19:15:56.185Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:15:56.185Z",
      completedAt: "2022-02-17T19:15:56.252Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158e3bf368c35-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3d8698c9-f2cd-422c-a463-5b42bfed27a1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248645",
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
      "2B7C25BA4B0CD796B264E29C4F031347776A5FA780000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N1M814SSTE9lis%2F83Y81yfntfAJ%2Bba7yOal2L3BBksOhAseKSyES%2FMO7i576oGYL3ZNNMG2W4hHDH3ttT%2FRucLexUDk8K%2BJWZa1EQ7cavoE5Pswr%2FIqfNFHNsKRi%2BAvn"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:56.015Z",
            hs_object_id: "7945143592",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:15:56.015Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158e4f8b98c21-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c80c02f9-e65c-4c5d-839d-373f2a6266c6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248644",
      "X-Trace",
      "2B543BED33B08C7164AFFF60A097AA5EF3700EAD63000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yM77bTUr3HQSF76mf%2FGYz%2Bz4si0SlXL6v%2Fg%2BQ64ye6iYEoNDTX2S%2BrowCcVsc2Pt1oiilTUoVgUevfh6XPhUcQOMAYD8V%2Fs0NwISdGLvh%2B%2FAUtqtjyrxxAlGzpnhu4xD"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:15:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df158e5efb68c42-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "962bffe0-f3e4-477c-b692-e2dcbcaff8de",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248643",
      "X-Trace",
      "2B35AB85C39AA2F1D247E9B78595F0CBF7BEA0A59B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gPmarIzfC3FB6RtkkhFrwGRuqQvLk51xT0b0Z0WhJ5DsCYS%2FNwdkO8Gj1u9hokZz4SCWm5guZ3ldh%2FdyQd0BPUYW7q3Laq6znrEpey6e8J9mx%2F2H4qJi0X3doGBCoz6F"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:15:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df158e6ae228cd6-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a2cb0e07-e17a-4378-92c7-3f0248b2efb5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248642",
    "X-Trace",
    "2B72B971790C17F191E93A588939A56E6285215CA7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IQGjeD8U5O92t63KBiKScmYp8vflxMwfNAMFe60U1yRcPzv7kTKQ35PepnZ4l67Ou07aA2oEnxSMIz%2BoV8nza4mS0E7apqe0z%2BtpBK4O%2BEc8uPRAc%2ByS3%2F58chosgztR"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:56.015Z",
            hs_object_id: "7945143592",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:15:56.015Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159a308e8e720-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ba037357-173c-4286-9302-f1e43fdbd84e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248641",
      "X-Trace",
      "2B3C4E4EF44ED0CAD9697F06B4FDB80B4B2064CD57000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fEWgt0qJ5n9Q5AWOih3%2FJwBp0yGWK106ci%2BSN7CgjT1vrfO6ppLLuhrfY3RzQRgG8k1Coy6T31q2RzXi6%2B4oEByCA44NPp6zxp4BadPIn%2F6OScbmNLm78osFzmGplRG7"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159a45dba8c83-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3c6921fb-ee3a-4352-8461-361d67423ede",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248640",
      "X-Trace",
      "2B04FF2FB3DEA29FB5046673F549F77D8F0E645B1C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MdwMDAqWs0XO0qGdWUoCjIONKF%2F9KKyv69z27dm30o6gnvpS5%2FEgRT8PMrzfvD1fIhzFjwooguxOcragBAMbK6MC5XAlfDFPG%2BSfx%2BJmH6Ewz6SAAd%2FdwzNJlmAPvp94"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945209857",
          properties: {
            createdate: "2022-02-17T19:15:56.185Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:15:59.877Z",
            hs_object_id: "7945209857",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-17T19:15:56.185Z",
          updatedAt: "2022-02-17T19:15:59.877Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159a55a5178df-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "661c0466-8036-48fa-9ded-0ff3118d814f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248639",
      "X-Trace",
      "2B239FC3B2EC97928F3D1EC640E7341AA457571B0F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xFAP2GFj1P%2Fh3Gf4o7EU3bUK9tO346hZOwbv2zfWeoOdgfaPFVQrOqVxrIzkOR4YD1%2BB1PikaoyfMrNtdNSAskyLury%2FR1sdTqk972S8Rv3uKvZFfSGMeXoPBeOq95%2Ba"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:56.015Z",
            hs_object_id: "7945143592",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:15:56.015Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159a658380cd9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c33c161e-00ec-4e21-bdb5-d403634c6d54",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248638",
      "X-Trace",
      "2BABB738BA71D8CC1C33478CCB4DCB5B28283ED72C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sbTun0J296O4lFYHAU409NVH3YMQrz1jL2z6CSBnjsmtgaLT0KSKVDfxCr1FQqtPR6iRiYozcQif9VsZYVw9DlJy0nn90Vc5xeJzFoonixq34X2pC%2FUzsw9T8wWqJyvp"}],"group":"cf-nel","max_age":604800}',
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
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159a759f2efe9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1a9e950c-3965-4127-bef1-f12f2d56ffcd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248637",
      "X-Trace",
      "2B7128E8F0A97A093B88C19B62A6590C53ABA8583B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CghRcWiSx9SDX1w4YPyf3fC5vl3orUQarJyhwwv3r8yxNwuvcY%2FoFDw7Sl4%2FhmgqkEgAwREpvJTVudLCWl78nDAOravg%2BErxRXEHYMEksrv%2BMzd0qa5fiUmtq%2F13qXN7"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945209857",
          properties: {
            createdate: "2022-02-17T19:15:56.185Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:15:59.877Z",
            hs_object_id: "7945209857",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-17T19:15:56.185Z",
          updatedAt: "2022-02-17T19:15:59.877Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159a899418cb4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1ab124c2-053c-4678-957b-fec180e07e01",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248636",
      "X-Trace",
      "2B12AC11997EA56421445546903B885B7816294BFE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0G30ci5vWcwXzw4L3xz5lVVO1ubpy4iDEcF3cEqJNbwIh0s5%2FLIADrmsGpcRmkc2HJ7bpEa%2F%2FuZ%2FcXV0xG5ZPwK%2FGpk0JQGRjoAg4YOHqgBaZFmAI%2B9vaoCNctb4sWE7"}],"group":"cf-nel","max_age":604800}',
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
      correlationId: "d81cdc95-003a-451d-9d9d-b355dd6a5819",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df159a99e28f00d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d81cdc95-003a-451d-9d9d-b355dd6a5819",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248635",
      "X-Trace",
      "2BCAA730F1F157A37A1E4D1D0B9D30ECA4CF8C5E68000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZiC11ys1p6Ak6O0HJodupttTm1UH46fqVGCgW9qgYMGaz0vlaeTYaDUgjdLKJl0tFzVCmEdHmujnXzrhVseNoKnn77%2BubW25YcXGCsSDPM9Kyy0hK%2FeassCuvQ7P0B%2Bn"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159b35a050ca5-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9259c0cd-51bb-46ea-bbbe-7ebf95d734c3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248634",
    "X-Trace",
    "2BDFA0B75D9D5D1B108A7DAEE1C59F1BB0725B8A76000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DYObV25jbiEvluBJxD8L%2B9zbiKi94Jezxz43Fd2IvbO3sAzNftsbBEq6du9S7o42c3s5SMnx9m%2FlGogDWb4E1LVPSrgUeaYEdYenkdwpFujeeIAip4fi8PdIQg8GRyJW"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159b448b88c87-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bf907952-eaba-4347-9fdb-f184ab2d7019",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248633",
    "X-Trace",
    "2B36232EE16E29607A1A89B8D722BD9D1E97958043000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lys31FFOW1gHcB%2FDP2mXZaRamqf5UEBXm2K5k4kJCISzXX5x4OQRSPGoLTDFP37n1UpxA26PS%2FPWb4dTOrh1dUw2%2FFbeVc96GcDRVP5tt9QrcluNnXjjn0zixr012Lx3"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159b55be41978-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8ba39c58-9d26-4dac-a004-fc19c50ce03a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248632",
    "X-Trace",
    "2BB669FB705D71C4622F48541951A23F34CFDD8FED000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZBdMFmY5MjHWRVrTUxEzJOUiBH%2F1BoeG9lm%2Bav4weu8xMvJyL8XqN%2BKo%2FnN%2Bu7Nl8xYX5gpIZB5PfiiFkzrQNR3JtpsVtOYKUD01ijavW%2FjZ344L1589ylhP4MszEemo"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159b63a651a07-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "59cae143-5686-4658-905b-12495a7cafbf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248631",
    "X-Trace",
    "2B68D9DE740880161E377917D061A3ED70BF3BCCF7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q9rrIg%2FCnlMtAXf%2FaYZ%2BbRwZH9gqVApd59UkhAvI83Z2ULieYfHLAza19P0PKmWxxlt8ZsvBAzbnWseOjSNxs3NMAaKgs5GSxjQKF6QuES0pYkrYVabvzhX9HPUcH2v6"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "5cd23f40-40d6-4687-bcc4-040cd0523e8a",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df159b71ffb8ce9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5cd23f40-40d6-4687-bcc4-040cd0523e8a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248630",
      "X-Trace",
      "2BD9E5B09D8B6C6D4A3021E3CC94DBDA447BF67C8E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XwE19Zqf8cCuaIuMQCECMc3wKDajYx5DNf3zDTpq9UWF28w2VMfBK3ryXq1L7hZRPDzxdC9s0uhCGlRzgLpZppb7CrnoFt%2F0w%2BUVrjcMA2mioxLiMB8d4XymRCuVQjIN"}],"group":"cf-nel","max_age":604800}',
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
    properties: ["domain"],
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 19:16:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159bf18761764-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4c6d5f9e-09ec-4a73-a20c-ca1a6ee5bb04",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248629",
    "X-Trace",
    "2B7BC442D69BC1BC76D6A4BDAA7E87F8BBA4C04B68000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aazbBRGzZTSH5fVpOFtoYZVuDLOpVr3x%2B%2Bt5q%2FZQpQ7FG94r6fPvk4dsMgkwZKAeQsrJFUsjAfjxME6AD5SZCZ1%2FHp80mr8uouq4nzmqu9p87%2Bk5GKjDqvHVC70O76ww"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159c0286819d3-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f6ed4043-7f0f-42ea-9742-b574a39cf815",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248628",
    "X-Trace",
    "2B852748293EB27B545D267EFFB837FB3D46A50116000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=v22yQToBWx5AZjAu9fjad%2BOjVivPcIDL%2BnVdjAqKW6xacen1kvmCBjicowpx0KbW7OYG3UAorjXTrDQOoV2mM51l1zZ9Rh9EACPJIabtzokfHNbFmh1NBLa7kKx%2BEjyK"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159c1292f8ce0-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "611f74cd-988d-4fab-a43b-9ec39cfbbc69",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248627",
    "X-Trace",
    "2B00782935E779937A8E891A9867F11F95054CBD14000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hM7jjqWDy5n1xdXbAFhDFMGzNtay%2BEz75nFKuecEWAGHjf4IXW6OPaUm%2Bf3lY93k06g%2BrGoXe5daWDBkim80XxHfZfmXLYOgYJHGUWOErqRdzT9ajMWlFuaD%2B%2F4TSKvW"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 19:16:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159c20f178cd6-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6c817e50-5541-4a6b-9035-b86f21b4de8e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248626",
    "X-Trace",
    "2BABA4A189FA397969A4C0D90D3365B41702C76DB2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PgndZCUB6rSzZxyV7K7acwriMcEJEEJx0fXgLgvmIzJfrLPrEp8j9OIN4lQtsRP9T0ppLEI1cTrTqSlxmyGLbEgriJq7K%2BvVF8TROXA3RhHO7drseUpWEWsPQj6QwFv%2F"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "c3868485-417e-4ffb-99c1-5f158637e1fb",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df159c32b02e6d8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c3868485-417e-4ffb-99c1-5f158637e1fb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248625",
      "X-Trace",
      "2B407B55CF53450CC5CB017E9477E773635B67A04E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kU1EXJrf5K9EsFPt7aV46MBDGq0pQ4avba6eDWJP6T5njM208Dt4L7bdqQf70zZAtNnGyJANWlwrrYxdJJ%2FGhB7IxhMes3aVGhLqp17oEKdenMUN12NcL1LCPc6QCH2s"}],"group":"cf-nel","max_age":604800}',
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
    properties: ["domain"],
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 19:16:33 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159cb3cbc8c72-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f07afd8a-ef27-4a46-bd80-ff2169e2875b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248624",
    "X-Trace",
    "2B561CFCA4E98789551092BEB3F01B1822D1989235000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uQnxwUsPkTtMPYwPKyFw0HUes3MRVWNeCj69qwGW7fXELm3DPAq7%2BX6sSmVQSBpIU1Ue%2BH0h%2FsroH4XnY42yVFogOEqB%2FYibUc%2B3GHEqdxywdT7sJXp9Bg6mRsrXppXf"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:33 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159cc5a0b1a2c-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d6f007b7-8c0e-442c-b07c-0e2197c62859",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248623",
    "X-Trace",
    "2B227CE43F580973B9AD0BB760410FD7F9FCD561DF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HOSYH5JF4Wn7yxNC2W10IVzw4vn1zkiemb77Bf4ivKCgtNMfFJ2N%2F%2Fze2QN7f0H9vgXNELXxoMjUj5mF2hFfNid8BeM%2BCAtkedbGMTP2YgTK3BA4WFVVJt2g5D4dlPlp"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036978",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user21.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036978",
            name: "Fist Name 21",
            website: "www.21.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037059",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user6.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037059",
            name: "Fist Name 6",
            website: "www.6.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036960",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user42.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036960",
            name: "Fist Name 42",
            website: "www.42.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036969",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user24.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036969",
            name: "Fist Name 24",
            website: "www.24.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036952",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user29.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036952",
            name: "Fist Name 29",
            website: "www.29.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036959",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user44.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036959",
            name: "Fist Name 44",
            website: "www.44.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036963",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user15.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036963",
            name: "Fist Name 15",
            website: "www.15.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036953",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user16.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036953",
            name: "Fist Name 16",
            website: "www.16.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036977",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user40.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036977",
            name: "Fist Name 40",
            website: "www.40.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036972",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user36.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036972",
            name: "Fist Name 36",
            website: "www.36.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036956",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user38.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036956",
            name: "Fist Name 38",
            website: "www.38.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036962",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user3.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036962",
            name: "Fist Name 3",
            website: "www.3.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036979",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user0.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036979",
            name: "Fist Name 0",
            website: "www.0.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036965",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user17.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036965",
            name: "Fist Name 17",
            website: "www.17.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037060",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user22.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037060",
            name: "Fist Name 22",
            website: "www.22.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036982",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user35.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036982",
            name: "Fist Name 35",
            website: "www.35.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036971",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user26.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036971",
            name: "Fist Name 26",
            website: "www.26.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037065",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user12.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037065",
            name: "Fist Name 12",
            website: "www.12.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037070",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user34.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945037070",
            name: "Fist Name 34",
            website: "www.34.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945037061",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user8.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037061",
            name: "Fist Name 8",
            website: "www.8.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037058",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user46.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037058",
            name: "Fist Name 46",
            website: "www.46.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036984",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user5.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036984",
            name: "Fist Name 5",
            website: "www.5.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945037066",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user23.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037066",
            name: "Fist Name 23",
            website: "www.23.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036958",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user25.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036958",
            name: "Fist Name 25",
            website: "www.25.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037069",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user39.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945037069",
            name: "Fist Name 39",
            website: "www.39.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036980",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user7.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036980",
            name: "Fist Name 7",
            website: "www.7.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036961",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user20.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036961",
            name: "Fist Name 20",
            website: "www.20.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036985",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user31.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036985",
            name: "Fist Name 31",
            website: "www.31.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037062",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user41.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037062",
            name: "Fist Name 41",
            website: "www.41.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036975",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user48.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036975",
            name: "Fist Name 48",
            website: "www.48.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036973",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user14.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036973",
            name: "Fist Name 14",
            website: "www.14.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036983",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user28.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036983",
            name: "Fist Name 28",
            website: "www.28.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037056",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user13.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037056",
            name: "Fist Name 13",
            website: "www.13.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036954",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user10.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036954",
            name: "Fist Name 10",
            website: "www.10.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036964",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user47.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036964",
            name: "Fist Name 47",
            website: "www.47.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945037063",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user30.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037063",
            name: "Fist Name 30",
            website: "www.30.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036970",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user37.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036970",
            name: "Fist Name 37",
            website: "www.37.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036981",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user19.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036981",
            name: "Fist Name 19",
            website: "www.19.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036967",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user33.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036967",
            name: "Fist Name 33",
            website: "www.33.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037064",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user27.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037064",
            name: "Fist Name 27",
            website: "www.27.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036974",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user9.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036974",
            name: "Fist Name 9",
            website: "www.9.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036955",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036955",
            name: "Fist Name 2",
            website: "www.2.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036976",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user18.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036976",
            name: "Fist Name 18",
            website: "www.18.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037068",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user1.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945037068",
            name: "Fist Name 1",
            website: "www.1.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945036966",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user45.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036966",
            name: "Fist Name 45",
            website: "www.45.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036968",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user49.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.561Z",
            hs_object_id: "7945036968",
            name: "Fist Name 49",
            website: "www.49.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:33.561Z",
          archived: false,
        },
        {
          id: "7945037067",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user11.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037067",
            name: "Fist Name 11",
            website: "www.11.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945037057",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user32.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945037057",
            name: "Fist Name 32",
            website: "www.32.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036957",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user43.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036957",
            name: "Fist Name 43",
            website: "www.43.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
        {
          id: "7945036951",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user4.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:16:33.562Z",
            hs_object_id: "7945036951",
            name: "Fist Name 4",
            website: "www.4.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:33.562Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:16:33.561Z",
      completedAt: "2022-02-17T19:16:33.705Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159cd38a332ee-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "142123c2-6fdb-4461-9dcd-ca53aa0cb8d9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248622",
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
      "2B46256B02D45A1FC2959F80A784675C32F7AAC908000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wTdqja1Oxt0GWwYQ%2BJzaHPWRLHkd6E%2BWvqRkIrM7TmKZzfekgQh3QwEl9%2BGTp3965Xb7srm6vjFPVf0lvayLwZ%2FOTZC%2Fe10AYHH1CPGiqaZkFV3lBAwMRVGnjzW3jeoP"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159cf6c30f001-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "82fec859-f77e-434f-91ee-a48c2e25ec36",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248621",
    "X-Trace",
    "2B82C338C99D2C767BEC158515528ECD389FF3E201000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ita5%2BovvTUI7nGNy6O2hFocpLyD7rnNVWHsMq6EpdCZ1H9RfugmzV9sdR0WxLrnBH6ROwlNeFyesO730%2FX2fKgpxRig1Cp8YbJVl2JShdiP77iZXqShupIZz2JDSpKWu"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159d0cbc832d9-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "eb6a0aee-0c25-4f09-aa54-2d90c6669e67",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248620",
    "X-Trace",
    "2BF44D2176FC666811991DEF24F8C38ECC8884AF75000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=twHhbBgPgK7YPsQFkXlziQGawKh3UN0XBZrtofCH2Z9ihUOr5e5pjLEGsxJuE%2FRPjRJFkd%2FoHAQPWOn3u%2FT3KPdBz%2B23HfMMn3sIqhc6uJfTWfb%2BmQIQz1igY%2BDB2yxk"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159d1eb668ccd-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "06605f6d-e75c-4196-97a0-de52ca3ed3a1",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248619",
    "X-Trace",
    "2BA7CE23A607704A8D6201686DE5EB5993A8B61536000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4JNGw9OBfFu%2BeYZsoT3GateB6mrn6Oh9v8gqovAe9eigJI2ZyRxV98v%2BSvvSs7q2xTW91kB2fCrlqebNmBzv%2FedWZ12NWxmIJHLlF1OfjKDvuezxSBwdYSj2sGt6Yj5R"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159d2cb6f17a1-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ef37412d-8214-4e8a-bf9c-81dd17fc7f8f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248618",
    "X-Trace",
    "2B5A7819756A31480B91C940762D88E16FC3F6A146000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ATJ55P39gOtirOCwwmPLIwgTfLukFWJIpARpkjKgdY4bjMsMKJcrYxjoTV63JJJwcxB1XGJ%2BQ2rjZBS7%2BP3GAy%2BWt1IpSUdzVuf6CJ%2F98AgkghMMXssNNgC2JeuqbXyh"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:16:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159d3ddd01760-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2df0640d-c6ec-4f21-be40-6a7b94fd443d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248617",
    "X-Trace",
    "2BF01D478CCB7364E6A7C3149FE3B035C726CE3A4A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UoV3MIrZ6TyTS%2FDte3JlfRVsT8rhHMNilUn3zWG63FIbHtp2rULCeIhKdcz5s8j115nWdU8KKSFeTt3pcFYLuN19%2B6LEUIbqlb8jbOKIGegqIp9zpXFTJ3SYrqwt5SQ2"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "894e0f28-9328-4b19-8c7d-e4e3784972a5",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df159d4b858f021-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "894e0f28-9328-4b19-8c7d-e4e3784972a5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248616",
      "X-Trace",
      "2BA0981D80372BEF06E8B592FC5FEEC59D90C8AEC2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BUyNmeQJ%2FKPOIyVenkzvieFlQ6PXVRsDSDgAnKtvr9Rq7cLQnLEEa8tSQQu1vEY8UJxYOmDgJ9RcCDJxvceEUQOfGDgb%2FOqQDmog8FY%2B0EyynMpzbiCbUPll8qfwS6o7"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 19:16:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df159de48951a03-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a5cb4a4a-c656-4e08-83c3-7733f47d71bb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248615",
    "X-Trace",
    "2B1B3B14E925B7B9FB40F75C16F4DF59641ECFB9A9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ne%2B91CDaLpsPxNUfIabHUC7cJgKKh1enxBYyEoLwlFIpEmVSnH0yKYYMYrJu8m%2FsShJHm1QvKVjlw3HS%2FI1WJNIvr46TOANRMfyR%2FAhH9EeeP43Tsnhz4pvDy2RgOzfY"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036985",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.250Z",
            hs_object_id: "7945036985",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.250Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159df3e49198e-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6884c7a0-e475-4905-b80b-a47276ea8dd6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248614",
      "X-Trace",
      "2B8A4FFCD3144604B4E6FCDEAA94570A6FBA2C53E4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xynt9pnVSl74jCJ5STast1cjwPeDsHDnei%2FAb0SZ2FarFLqheVtaxVWeza2XAo5w%2B71s2H2h0p8yKphPOBQ0Gi5EQ%2BYiIUK7Fx%2BKotl3zOJndgyuFktLr%2BbqNtdv%2BODl"}],"group":"cf-nel","max_age":604800}',
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
      total: 1,
      results: [
        {
          id: "7945036982",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:34.842Z",
            hs_object_id: "7945036982",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:34.842Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159e04f6219ae-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d008bedd-24b5-4c50-9121-70674c492a49",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248613",
      "X-Trace",
      "2BDA3F56C86AE960729311840F2D13D7FB9E9C53EF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ISjIWr9csg6PTo7I0W16yNGmb4kBUTckoqD2nOCl3o3xSWLy4X%2BNrggfyizPJmemPMkI9oY7paMcdnvIE27kfpSOzxoYcXLtOqqABVXeCpyRiITnfM1L1ldasYJvKODJ"}],"group":"cf-nel","max_age":604800}',
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
      total: 1,
      results: [
        {
          id: "7945036957",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.656Z",
            hs_object_id: "7945036957",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.656Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159e1fca115bb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "238d3e7e-26a1-48e2-bab9-4a8f28bcd357",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248612",
      "X-Trace",
      "2B69201DF59F6D78AF28270C33E83CDDBA48A8147A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MJVOe6iL7h8OxKjozg%2FJjdmkZWRxjBplzKewIKLqaBgDwIBgsCkBEQuGV%2BO%2FO9jYI6DQ6Fzf1G7n0TUVdKYnCJwP93zuRXMW%2Bonx1LQKnEdwGIjPMz8c1HG3Zu4oxWH1"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "afdcf219-fc5f-44e2-a069-88d0ebe5cdf1",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df159e2db358c89-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "afdcf219-fc5f-44e2-a069-88d0ebe5cdf1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248611",
      "X-Trace",
      "2B69FDBAE0518E327758DDD7812611014BDE021D8E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4P%2FiHUxKRvKqUsCbB6sFA58rdP%2FiUZvZ877TRREo1zrMC4wtuEwIG9MTHpQdRjMLuDerbCGzytGw3znRczGzqDTHNld9Cbr5RrVx%2FlqXoH0bIxQJmCt5rt8h7%2B1YNvkN"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036964",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.461Z",
            hs_object_id: "7945036964",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:35.461Z",
          archived: false,
        },
        {
          id: "7945036968",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.201Z",
            hs_object_id: "7945036968",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.201Z",
          archived: false,
        },
        {
          id: "7945036975",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.566Z",
            hs_object_id: "7945036975",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.566Z",
          archived: false,
        },
        {
          id: "7945036966",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.045Z",
            hs_object_id: "7945036966",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.045Z",
          archived: false,
        },
        {
          id: "7945037058",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.493Z",
            hs_object_id: "7945037058",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.493Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:16:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df159eccd0e3320-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2aaf0da9-215e-4526-bc3c-275e43f54e95",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248610",
      "X-Trace",
      "2B7D388D5F90A78EEE62F86C073DD6BB0D88598026000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MlSd%2B07Bnn2ZpMJh6c1kcdMKq6B7YiiV6VFhA2xdgUZfv9uKamNNfax20DfTnEWdDtXu0VF7nx4yAu7ZKjRmIpVEsM6VKabIb3NZTovzr63osR8vE5dHoy%2FBLGF%2FVjxX"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036955",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:34.232Z",
            hs_object_id: "7945036955",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:34.232Z",
          archived: false,
        },
        {
          id: "7945037068",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.556Z",
            hs_object_id: "7945037068",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.556Z",
          archived: false,
        },
        {
          id: "7945036951",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.202Z",
            hs_object_id: "7945036951",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.202Z",
          archived: false,
        },
        {
          id: "7945036962",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.039Z",
            hs_object_id: "7945036962",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.039Z",
          archived: false,
        },
        {
          id: "7945036979",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.456Z",
            hs_object_id: "7945036979",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.456Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15aa99e9a8c59-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bf3a1254-2c16-48f3-8992-a0c2fb2b012e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248609",
      "X-Trace",
      "2B230C9ADD17E83A323FC475C57BFDFBC6D3BA87C5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gQsGH9WxDzqWvr7RaBQT3xJfYvHe9Z2GA%2FxpLtqgydP9WFOVJqTgS4vQAuXgopLwo%2Bo1FgFhcWsz3LJ1WVwujsjIWH2LS86%2FYB3f2OAXludKzsMgiQB0tD7ZQxx15AFp"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036984",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.043Z",
            hs_object_id: "7945036984",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.043Z",
          archived: false,
        },
        {
          id: "7945036974",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.873Z",
            hs_object_id: "7945036974",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.873Z",
          archived: false,
        },
        {
          id: "7945036980",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.839Z",
            hs_object_id: "7945036980",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.839Z",
          archived: false,
        },
        {
          id: "7945037059",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.043Z",
            hs_object_id: "7945037059",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.043Z",
          archived: false,
        },
        {
          id: "7945037061",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.856Z",
            hs_object_id: "7945037061",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.856Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15aab1905196b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2c88f1af-ac61-42bf-bd1e-eb812087a9e3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248608",
      "X-Trace",
      "2BE54190B1054372B938A40902C0C7F8EB8AE5C77F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Bz6y8dBM%2FMaC3eVEl7o0LPbrMTjURzt6LELQDfjFQ9FLuPoiCIUNLEGqDyBglAD7OCBVfQJ2ljSZd54uLfvFR8bJdJ3cmX%2Ffz21CN%2FUtZ4vc40p9eCzrWnLte8J2CCp%2B"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036954",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.858Z",
            hs_object_id: "7945036954",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.858Z",
          archived: false,
        },
        {
          id: "7945036973",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.472Z",
            hs_object_id: "7945036973",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.472Z",
          archived: false,
        },
        {
          id: "7945037056",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.852Z",
            hs_object_id: "7945037056",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.852Z",
          archived: false,
        },
        {
          id: "7945037065",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.858Z",
            hs_object_id: "7945037065",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.858Z",
          archived: false,
        },
        {
          id: "7945037067",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:34.286Z",
            hs_object_id: "7945037067",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:34.286Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15aac2ad18ca7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8f5d5878-a3f7-4343-ba83-cb0121b94e12",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248607",
      "X-Trace",
      "2B4236830D9E530BA5E60D99E62A901836F1A1E405000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sKNLMCQg9K4CxfnPYSQQsQB7x7TkcIqugoCuWR20%2FYJzDEToc4cm5wUwaVazFUs5lAx650v79IlhRFuviAeH9fEx99pm9nAHIAuTZh3C2LGd3Zb8uDzOWLSflmA1Dq%2FP"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036953",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.060Z",
            hs_object_id: "7945036953",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.060Z",
          archived: false,
        },
        {
          id: "7945036963",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.252Z",
            hs_object_id: "7945036963",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.252Z",
          archived: false,
        },
        {
          id: "7945036965",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.866Z",
            hs_object_id: "7945036965",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.866Z",
          archived: false,
        },
        {
          id: "7945036976",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.466Z",
            hs_object_id: "7945036976",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.466Z",
          archived: false,
        },
        {
          id: "7945036981",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.891Z",
            hs_object_id: "7945036981",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.891Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15aad5b7a8ca5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f6dbc2ac-20ca-4242-adcd-f51b42411d3d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248606",
      "X-Trace",
      "2BF45653B0CC8413B207B2D9247CC3B7281C0C125F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Vkp1o9KSQu%2FjpvAyr1yRepSKOgM8nhcKJkCpF9bQbjMrYWPFugs44B12noNhTn8c4rGxh5KN2TE2mp7qmEKidcGcW%2BjRF%2FhcPS9CF%2FSuM4K1x6S2LqtADE9GNBPN1RHO"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036969",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.469Z",
            hs_object_id: "7945036969",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.469Z",
          archived: false,
        },
        {
          id: "7945036961",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.847Z",
            hs_object_id: "7945036961",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.847Z",
          archived: false,
        },
        {
          id: "7945036978",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.871Z",
            hs_object_id: "7945036978",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.871Z",
          archived: false,
        },
        {
          id: "7945037060",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.484Z",
            hs_object_id: "7945037060",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.484Z",
          archived: false,
        },
        {
          id: "7945037066",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.043Z",
            hs_object_id: "7945037066",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.043Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15aae7bb68c39-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7609b216-123b-4607-96d3-356a56dc9b9e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248605",
      "X-Trace",
      "2B22D71BCF792DAFF3858675D1F33215C4AFC3A35A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g5bM1VsDJQnmFMlCB5wu2Dkr3STsW73iVmYTWbol7LoJVqAbCBN1b0HJme9kYmfi4Zk6EvKw12yVQSCcwCxCF4dZUYOcFRIF0gSwK8%2BtUtxOk4S5CGYwsmfvNP7LYWwR"}],"group":"cf-nel","max_age":604800}',
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
      correlationId: "d9fea27c-be87-4146-9c9a-b07c8138861c",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15aafaddb8c7b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d9fea27c-be87-4146-9c9a-b07c8138861c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248604",
      "X-Trace",
      "2B35AB2361A0EF1F138BA0BDA638EF179F2FBDBB63000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tu7OLyMi%2FEeIl6obAvzeDhapKdtp4Gnk%2FRPL4H2%2Bc9nc%2B57QcxN%2Ft5T6fM25VZKVtIuHkBzSCBON3qYIdP2WjtuMp231aE5PTCTGszKhX3QUJJQj2fhJoBoFwKtBVfhX"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036952",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.262Z",
            hs_object_id: "7945036952",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.262Z",
          archived: false,
        },
        {
          id: "7945036958",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.470Z",
            hs_object_id: "7945036958",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.470Z",
          archived: false,
        },
        {
          id: "7945036971",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.570Z",
            hs_object_id: "7945036971",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.570Z",
          archived: false,
        },
        {
          id: "7945036983",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:34.286Z",
            hs_object_id: "7945036983",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:34.286Z",
          archived: false,
        },
        {
          id: "7945037064",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.576Z",
            hs_object_id: "7945037064",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.576Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ab97f7f32e2-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f9c7864a-df8b-4f11-ad7e-f5704cb14b00",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248603",
      "X-Trace",
      "2BD4EF6A8BBBE71E912003B05673BFF603BC8B9E79000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Tf928e%2BYj4GK%2FXwTxDEFYqoVJoOPb%2B5EfNYd%2BizGQMyM6NJtYB3DIbXxOxSPUe3qOYQSHRM9PxzRhYUxKqD70Iqar9rXboItLtWCnBE9dZg4IDN%2BGsQLcc2KErUZPahG"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945037070",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.292Z",
            hs_object_id: "7945037070",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:35.292Z",
          archived: false,
        },
        {
          id: "7945036967",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.870Z",
            hs_object_id: "7945036967",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.870Z",
          archived: false,
        },
        {
          id: "7945036985",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.250Z",
            hs_object_id: "7945036985",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.250Z",
          archived: false,
        },
        {
          id: "7945037057",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.035Z",
            hs_object_id: "7945037057",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.035Z",
          archived: false,
        },
        {
          id: "7945037063",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.869Z",
            hs_object_id: "7945037063",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.869Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15abb5aa332c7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d590dc1d-a94a-45eb-913d-7891b2be285d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248602",
      "X-Trace",
      "2BBF43BDB29036F1F2F3E8733928DDB977EFFD5CDE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=t7YR1tm5GLMFMYgQtpn9MipdULbXZWrunpoA8y5gTqi0%2BwClbs2%2F%2BEYdVmcb5Icz7DwjVvypokArZnM8uVorgwERjI2vvhYagPsDcP7xlL6RLXjn9OVU%2BHKnGiivvsez"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036956",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.868Z",
            hs_object_id: "7945036956",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:35.868Z",
          archived: false,
        },
        {
          id: "7945036970",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.262Z",
            hs_object_id: "7945036970",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.262Z",
          archived: false,
        },
        {
          id: "7945036972",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.248Z",
            hs_object_id: "7945036972",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.248Z",
          archived: false,
        },
        {
          id: "7945036982",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.150Z",
            hs_object_id: "7945036982",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.150Z",
          archived: false,
        },
        {
          id: "7945037069",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.878Z",
            hs_object_id: "7945037069",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.878Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15abc6b6e8cc6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "57c8fcd2-1911-4c2c-ba2e-f289bfae4560",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248601",
      "X-Trace",
      "2B32F31E06689C62AE9D6864B31F636061DD140653000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y370URnLkGjZf8T80gu%2BugQs6UKeEWYNPVEPK5pUtHfKG5POjzYen2ATosiBGBkVfETp7likIF0l04i2P4ksowwoSL98AyRNZxV8Vcfs4nrOYTrYIpEKRN2ohMUk5cCh"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036960",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.563Z",
            hs_object_id: "7945036960",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.563Z",
          archived: false,
        },
        {
          id: "7945036957",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.656Z",
            hs_object_id: "7945036957",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.656Z",
          archived: false,
        },
        {
          id: "7945036959",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.476Z",
            hs_object_id: "7945036959",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.476Z",
          archived: false,
        },
        {
          id: "7945036977",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.188Z",
            hs_object_id: "7945036977",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.188Z",
          archived: false,
        },
        {
          id: "7945037062",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.457Z",
            hs_object_id: "7945037062",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.457Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15abd9a6532d0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c0435877-3e58-4586-9352-625841c0bcdb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248600",
      "X-Trace",
      "2B09491F89B0447BAA45B9A010F6C072241F8190A1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s%2BUe%2BuWvi8pedrPIzIzr48ItsCggqFhuusfGgjMutYZkeKnW3FRVY0Jou1KwhqhjS4waF0YZYOnl7PlUye1I53VliI3dqzuJKP0Y2%2FiWOtC1FNZTbAYi2HYrJXGw4MzC"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036964",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.461Z",
            hs_object_id: "7945036964",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:35.461Z",
          archived: false,
        },
        {
          id: "7945036968",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.201Z",
            hs_object_id: "7945036968",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.201Z",
          archived: false,
        },
        {
          id: "7945036975",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.566Z",
            hs_object_id: "7945036975",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.566Z",
          archived: false,
        },
        {
          id: "7945036966",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.045Z",
            hs_object_id: "7945036966",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.045Z",
          archived: false,
        },
        {
          id: "7945037058",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.493Z",
            hs_object_id: "7945037058",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.493Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15abec8510cd5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ba9a8d03-6d71-4fbd-8bb2-feee7154ba15",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248599",
      "X-Trace",
      "2B25968E5FD0C317973707359E39ACB33F9C201F9D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qoIpq9SQ0bQTouoBYZGVhM053z%2BnXWuW8dWVy6yJ6bGfOw2AYSZbjebF5ge2WDG5iW6ri5JzmpeO9NGk3eV2wiuhX6D9gGRvce6TtlCV4Bx4tOZhdz7pNxY2i9u0B9Ss"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036955",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:34.232Z",
            hs_object_id: "7945036955",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:34.232Z",
          archived: false,
        },
        {
          id: "7945037068",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.556Z",
            hs_object_id: "7945037068",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.556Z",
          archived: false,
        },
        {
          id: "7945036951",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.202Z",
            hs_object_id: "7945036951",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.202Z",
          archived: false,
        },
        {
          id: "7945036962",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.039Z",
            hs_object_id: "7945036962",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.039Z",
          archived: false,
        },
        {
          id: "7945036979",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.456Z",
            hs_object_id: "7945036979",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.456Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ac0acd519bb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7fecffad-9b51-4f68-9db3-366722d70b28",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248598",
      "X-Trace",
      "2BEAFD363F970341218DC5465EFF6AABE64814BB12000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7LfoNIqSh9BJpiVgW4KNvNx2jZmMY4QqVoG47HyJHG%2Fomql5HJnNRVBiY8Uw1X78%2FWu36OiSrSpHcE9yK7FM%2B2TFF6NuSFNXWjump%2Be%2Fg0NdILS89vCgCqjeuXeHnZx2"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036984",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.043Z",
            hs_object_id: "7945036984",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.043Z",
          archived: false,
        },
        {
          id: "7945036974",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.873Z",
            hs_object_id: "7945036974",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.873Z",
          archived: false,
        },
        {
          id: "7945036980",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.839Z",
            hs_object_id: "7945036980",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.839Z",
          archived: false,
        },
        {
          id: "7945037059",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.043Z",
            hs_object_id: "7945037059",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.043Z",
          archived: false,
        },
        {
          id: "7945037061",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.856Z",
            hs_object_id: "7945037061",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.856Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ac1ad2319ff-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1e6a7be5-e64c-4941-9a1a-ef8df83234f9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248597",
      "X-Trace",
      "2B73B7341AACE22E7E89DF7F04B6F79280B17B59D5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CNYLsFMR5I55qGmd1hUTui0CquHWLVT4i4CZlEa26CZQmcRskdQYU6NFrc8stcJtscNOVdw%2BHQnNvgBssmmp6gsB90RwmkEytlO0dehlSYVEqz7luoID0LBpK4JKq32g"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "ff320721-a7fa-4235-825c-bec15c61c245",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ac2bbfe8cc8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ff320721-a7fa-4235-825c-bec15c61c245",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248596",
      "X-Trace",
      "2B6F560CB0FB2CC916F4D21DF8BFC1E10F4BBB2D99000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2JJRrGsZWzkiTP4v5aBqgPC9%2BdJ%2FiXhP2hkGCy4yUcvAycDE6F%2FKTorKAu7ozhH0qhInM5hBDQqyNzZeqKmuGnUj%2B6LQ5%2FIg7aZTxrC39T81uqEOkvYZ48oPH7LAu15c"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036954",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.858Z",
            hs_object_id: "7945036954",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.858Z",
          archived: false,
        },
        {
          id: "7945036973",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.472Z",
            hs_object_id: "7945036973",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.472Z",
          archived: false,
        },
        {
          id: "7945037056",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.852Z",
            hs_object_id: "7945037056",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.852Z",
          archived: false,
        },
        {
          id: "7945037065",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.858Z",
            hs_object_id: "7945037065",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.858Z",
          archived: false,
        },
        {
          id: "7945037067",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:34.286Z",
            hs_object_id: "7945037067",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:34.286Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15acb7e918c95-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f7015e2e-ce2e-4426-944d-0446de8aa2d7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248595",
      "X-Trace",
      "2B924753A64A7E30167531B3E7C35FE1035B7DAAD9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tbgDESgntIfIh28%2BZTsCuR5WjE%2FI6JxxukpVkNsITwqA7OWvZU1IbBuZKOXoCWTaZU%2F6VuXnhGNeF%2FMMk8zagM8UcZqIZ7Hi5mRxsx%2F0saUeGvmQ311LHU4BnS0XfFx5"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036953",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.060Z",
            hs_object_id: "7945036953",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.060Z",
          archived: false,
        },
        {
          id: "7945036963",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.252Z",
            hs_object_id: "7945036963",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.252Z",
          archived: false,
        },
        {
          id: "7945036965",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.866Z",
            hs_object_id: "7945036965",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.866Z",
          archived: false,
        },
        {
          id: "7945036976",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.466Z",
            hs_object_id: "7945036976",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.466Z",
          archived: false,
        },
        {
          id: "7945036981",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.891Z",
            hs_object_id: "7945036981",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.891Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15acc7bc48c17-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fb5570b4-57da-4590-9578-b7ac87bf57ef",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248594",
      "X-Trace",
      "2BED0ABFC46E54615FB138336375CF39F1745CAA8C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2IMUu7sEgf2IhZCA9zR4QCAnBJ7StoLxOl5eQvOyXFOMHJ4uaiOI8T6vSTrh3bP21ZYtnvOWjzFqaBCk9RjiTUqW0n3qCvQKKuVeECBwlxCSOvxnHClWRoyna7MeXlmm"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036969",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.469Z",
            hs_object_id: "7945036969",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.469Z",
          archived: false,
        },
        {
          id: "7945036961",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.847Z",
            hs_object_id: "7945036961",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.847Z",
          archived: false,
        },
        {
          id: "7945036978",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.871Z",
            hs_object_id: "7945036978",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.871Z",
          archived: false,
        },
        {
          id: "7945037060",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.484Z",
            hs_object_id: "7945037060",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.484Z",
          archived: false,
        },
        {
          id: "7945037066",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.043Z",
            hs_object_id: "7945037066",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.043Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15acdcf4f8c36-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f0497a3d-e16b-4c29-a114-759dc80c2e7f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248593",
      "X-Trace",
      "2B7A7B01719958A33FB32E42DAC1F3CFD451D7DB25000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6W0A0UmXu6U9vKmWxyYw6fZl0ofTnBcFDK65Yr%2B4c4pT9sY74%2FmSdXdCL3URgTQDAR6V9bMR4o6pjw27BNpkDO%2FBhXnW3JGF2Y87uLXs1GehTVnzbHwxOyjt6PUvUjGF"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036952",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.262Z",
            hs_object_id: "7945036952",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.262Z",
          archived: false,
        },
        {
          id: "7945036958",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.470Z",
            hs_object_id: "7945036958",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.470Z",
          archived: false,
        },
        {
          id: "7945036971",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.570Z",
            hs_object_id: "7945036971",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.570Z",
          archived: false,
        },
        {
          id: "7945036983",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:34.286Z",
            hs_object_id: "7945036983",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:34.286Z",
          archived: false,
        },
        {
          id: "7945037064",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.576Z",
            hs_object_id: "7945037064",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.576Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15aceda4a78eb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "edef7a9f-9a77-4e05-896f-bf14a3bff4bb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248592",
      "X-Trace",
      "2B579FC1E1356C39A4945C072FEA3644D4F52AEDEA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IzZabc%2B4TaVE%2FzPi7tR9PI7EVQrW8XRrr9%2BGpNt4YytymvVYk85jGovhQdTiNJfRh%2BLTTjYwi7bFZZSKBVbIlswWIm0b8JH%2BxVPJg3A9gqcyeMqcTYuVcSQe1WjXhrRW"}],"group":"cf-nel","max_age":604800}',
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
      correlationId: "71045acb-8844-4a98-87e0-d36c6a7e667d",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15acfd8168c45-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "71045acb-8844-4a98-87e0-d36c6a7e667d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248591",
      "X-Trace",
      "2BCEB0005ECD460D10EB4DE665224A1E375578B88C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jZoVJ%2FnMaOryS54RRrxCaYmZrb6eo%2FMW9poRRKSlrVqtxoP3HjmF18nIQ%2FXtWSiHM8f660BFY5hd0RjbuwIIHHgtQdIaymjR9vAG3KwtQTw4XGoRc%2FHIN7xSrg8JjY71"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945037070",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.292Z",
            hs_object_id: "7945037070",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:35.292Z",
          archived: false,
        },
        {
          id: "7945036967",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.870Z",
            hs_object_id: "7945036967",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.870Z",
          archived: false,
        },
        {
          id: "7945036985",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.250Z",
            hs_object_id: "7945036985",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:36.250Z",
          archived: false,
        },
        {
          id: "7945037057",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.035Z",
            hs_object_id: "7945037057",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.035Z",
          archived: false,
        },
        {
          id: "7945037063",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.869Z",
            hs_object_id: "7945037063",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.869Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ad86a8f8ce3-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "528d8709-fe9d-49ab-82b9-f52472f051dc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248590",
      "X-Trace",
      "2BB2ADC02C80F52D66D091FCA93F6003B391EDD67C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P3Qb4zWjufxIanqsGXJ3fgDXpVp016JDqlHuDjVwtK4yyW8byVJTi%2Fbqssgh3S3vKek2VoCduDR4rF3PNuMt9TzwDyhDSMHj4qH3BWtKvRk%2FYdnb%2F8kIRah7BoFWXV%2BC"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036956",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.868Z",
            hs_object_id: "7945036956",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:35.868Z",
          archived: false,
        },
        {
          id: "7945036970",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.262Z",
            hs_object_id: "7945036970",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.262Z",
          archived: false,
        },
        {
          id: "7945036972",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.248Z",
            hs_object_id: "7945036972",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.248Z",
          archived: false,
        },
        {
          id: "7945036982",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.150Z",
            hs_object_id: "7945036982",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.150Z",
          archived: false,
        },
        {
          id: "7945037069",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.878Z",
            hs_object_id: "7945037069",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.878Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ada298d8c36-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3e5f03b0-c5ab-438f-88be-bdc08f8f2e08",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248589",
      "X-Trace",
      "2B2148C7FCC3FBA33956B7ABE0850B052AB7B7A0C1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OLvRrWZTLOt6bcr0USxUSX3VP15C7uTFXhYOTpL1eBwExIrtUk1oLcqG97lPAdVt3DEqty4nA7dTxQhT1KoyJNeBctPN3iSixPN9R%2FpImwTdlCfpInmvZAFaAeYdLCpw"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036960",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.563Z",
            hs_object_id: "7945036960",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.563Z",
          archived: false,
        },
        {
          id: "7945036957",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.656Z",
            hs_object_id: "7945036957",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.656Z",
          archived: false,
        },
        {
          id: "7945036959",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.476Z",
            hs_object_id: "7945036959",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.476Z",
          archived: false,
        },
        {
          id: "7945036977",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.188Z",
            hs_object_id: "7945036977",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.188Z",
          archived: false,
        },
        {
          id: "7945037062",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.457Z",
            hs_object_id: "7945037062",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:35.457Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15adb4a848ce3-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1d2646c3-e203-403d-b0e5-4b8ed7b38ac1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248588",
      "X-Trace",
      "2BFB125E650EAF865C0612D5D330DA6604796CB699000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=onDvx%2FWnxd0Bv11cJo%2FaIea0VH3ZLl9kQ4iEs66VqJihrCsbbThyjZFtY5rJTTLoNTPIUFEoLG7tyNvQivoK4tgIlF6lT8FOh9lJKVHmi0HjJKAJboPjIBGW%2Fqk7kdHG"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945036964",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:35.461Z",
            hs_object_id: "7945036964",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:35.461Z",
          archived: false,
        },
        {
          id: "7945036968",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.201Z",
            hs_object_id: "7945036968",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:37.201Z",
          archived: false,
        },
        {
          id: "7945036975",
          properties: {
            createdate: "2022-02-17T19:16:33.561Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:36.566Z",
            hs_object_id: "7945036975",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-17T19:16:33.561Z",
          updatedAt: "2022-02-17T19:16:36.566Z",
          archived: false,
        },
        {
          id: "7945036966",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.045Z",
            hs_object_id: "7945036966",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.045Z",
          archived: false,
        },
        {
          id: "7945037058",
          properties: {
            createdate: "2022-02-17T19:16:33.562Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:16:37.493Z",
            hs_object_id: "7945037058",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-17T19:16:33.562Z",
          updatedAt: "2022-02-17T19:16:37.493Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15adc5f133314-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ea9eb6b7-219c-4c62-99ea-c95468d34e9c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248587",
      "X-Trace",
      "2B574234D259D49431D399B620EC35D3239E3BF720000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U9KrXUgwlYrVcNmP7KITvP2aQyL2Nz2f35jLJgBcsn9Vkxcl%2FBYxttrirVgyR%2FdrxvrKAd3IEC2%2BSlTs08AtbKwCQqDb4Fp06TqjgckwMv8QpZrDA6YrrHXAiiC1dzCR"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945036955" },
      { id: "7945037068" },
      { id: "7945036951" },
      { id: "7945036962" },
      { id: "7945036979" },
      { id: "7945036984" },
      { id: "7945036974" },
      { id: "7945036980" },
      { id: "7945037059" },
      { id: "7945037061" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:17:17 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df15add68d718aa-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6b335cfb-7959-49ed-8744-b43b61d52bc7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248586",
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
    "2BA7369762930701B1EDA7D5D3AEC48727A773E8CE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R8WYYbCW9DeFbMAk11kmMimQjmhMJxFgyEBNa90wmNPgxY%2BXw1r3m2yTSuuUY7apEvtn0EitERsV4Y%2BxtuByMyfZp%2BOwXeUasd7wTVjlbktjY3OcoH33ZAFnZVRW8iU%2B"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945036954" },
      { id: "7945036973" },
      { id: "7945037056" },
      { id: "7945037065" },
      { id: "7945037067" },
      { id: "7945036953" },
      { id: "7945036963" },
      { id: "7945036965" },
      { id: "7945036976" },
      { id: "7945036981" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:17:17 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df15ade7b7b19f7-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "79b085b5-ca00-4a6a-bfe3-a00835c72fa7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248585",
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
    "2B9C00FBCC87909618E3C62A21399520F634816B86000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NcTMPffnFf%2F%2BgeR5jGwDHXn7htgZh5QIxjAuvPd2wgOMmP%2FyUYbTYz8DlnFFeYg4w5TlPOAHHmOkZEce4vE5%2FLmYpF6EUDLbqg1cvuamtY65NOWHBh4HGcpUoJ6QuiNb"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945036969" },
      { id: "7945036961" },
      { id: "7945036978" },
      { id: "7945037060" },
      { id: "7945037066" },
      { id: "7945036952" },
      { id: "7945036958" },
      { id: "7945036971" },
      { id: "7945036983" },
      { id: "7945037064" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:17:17 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df15adfeb48e84d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "38119990-3e2f-4646-b0d0-2dc90ecc54d6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248584",
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
    "2BE6BA998CB83D100B4EEFD5A0D113734214B8459C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9hLSWl7plxm8L3pSk%2Fv6I40x%2ByWMTh5OF6G7fp%2F%2FBwvjoAircsMgzjNB%2B9QCnZ5HPuFjiggIidq34QwGuBPW3MeRXzyovSZU0V6zRUdVfU0gddznA6dvfuvCGOWe2OGj"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945037070" },
      { id: "7945036967" },
      { id: "7945036985" },
      { id: "7945037057" },
      { id: "7945037063" },
      { id: "7945036956" },
      { id: "7945036970" },
      { id: "7945036972" },
      { id: "7945036982" },
      { id: "7945037069" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:17:17 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df15ae128938cc6-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ec50e928-f935-439d-87a1-62b940691dec",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248583",
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
    "2B3EA948B3458D5834D124A5FC72AF27B1CD73364F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3ZyhDd5QTV%2BDWpYNlkTXGdFvSuB7bLlsbX6OLXD4vGZE5uuC%2FXGFu5PZLG76SyfdplobZKeGFJpeYTvwiSG3YbQ3nXz9dyxeTXmjPeLBLpHi%2BWIA%2Bg8HzHgeLFvOpON7"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945036960" },
      { id: "7945036957" },
      { id: "7945036959" },
      { id: "7945036977" },
      { id: "7945037062" },
      { id: "7945036964" },
      { id: "7945036968" },
      { id: "7945036975" },
      { id: "7945036966" },
      { id: "7945037058" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:17:18 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df15ae2f9a21a0f-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9e2719ce-f30d-45f1-b8f7-2086a32dcfef",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248582",
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
    "2BEE971D00089523F7BFF5D6117E2D6B5EF0253390000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vkNnG%2FkfYcBybJCY7QsSQe7rifYxJAjenIZ8m8FpV2jEQZwVAtq6e6niF0y1UBKfdr%2FHHvg17QO6NtfSLWhfy%2BNi59OXTY6B%2FQiVy%2B8RNU1gT%2BYcIh6GI3pAbleIMc0N"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:56.015Z",
            hs_object_id: "7945143592",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:15:56.015Z",
          archived: false,
        },
        {
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
          archived: false,
        },
        {
          id: "7945209857",
          properties: {
            createdate: "2022-02-17T19:15:56.185Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:15:59.877Z",
            hs_object_id: "7945209857",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-17T19:15:56.185Z",
          updatedAt: "2022-02-17T19:15:59.877Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ae3f8ed8ce6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8f9cae57-79ff-424d-b5ec-2daa6a67b0d9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248581",
      "X-Trace",
      "2BBF2577C53FBF842435FEB60CF1BDEF261ECFAF66000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hHqdwNkwwlrPQtN0KwfrOYaqvVMFZTgKMG9RBihKWcQHjxqJ4sY85WCJ2huHGV214MErEGdoMGGaS%2B9xsa3v6eX09xSSgV27dvtxLZSmqUqNTFv%2FYlkeEH56Oz1PeS0d"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "7945143592" }, { id: "7944583019" }, { id: "7945209857" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:17:18 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df15ae4de891839-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "45cb3e79-68af-48fd-bfe3-d53f6880d604",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248580",
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
    "2B39F13114DD72860E0D94AAB3332DE7A9F33D4D9A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9bgG2XFSxOBQEnbVOk%2BdO90DLn2xXFgGOjCwrk%2FRijPnKl1fkJkG3cOi%2BVXAp0yItOnf1fb3ukJhvmwlAlhKvAMTl7ooIiPSwA9gMjW7oJCs2c2XI1yxWQnCtnUGNIab"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:18 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15ae5eee01780-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3ffe1bd7-55f7-48da-9b99-eba763020a44",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248579",
    "X-Trace",
    "2B769AE1FAD5B7B55F8CEEF59B928A9FFEBA528157000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aX657m5zWp9Dpjx9zyh3ndXtV%2B%2FUsj1a0kumvJ90R0nDcXpXW3lRfnKiWUBSnP%2FinmNlKGHiNVnJi2oLANehh195AMqG8SIr6UDppIlG8MtdFUwvzolwfPSlSt6tYqkI"}],"group":"cf-nel","max_age":604800}',
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
      "1f8b080000000000000334884b8f82300006ff4bcf9220f820de3eda062b4f35603c19a2882f2841428b1bfffb66b33a87c9647e4827ef454d168426d56afaac55a0450c70960230b60280eba0e4fb4734af30507a0ba4e7c796e5df44ba3c797be36c47afe4d836ba8d21329e0c7d3671cb5908009cff192a70183e5cca6f2104a5600a0662e8ffe5e2a01d0f2e5330453ab31f398b9aa19f645da4ee55bf96493ee4b6b5daf8b0a6973013d895202352e8e6dae6dd55d6dbe228ebd3932cc68e69be7f010000ffff0300397bc6d2e0000000",
    ],
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:18 GMT",
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
      "sessionID=670335a7ad58812703a213f686d584de074ee37d;path=/;expires=Thu, 17 Feb 2022 20:17:18 GMT;",
      "Via",
      "1.1 vegur",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h1KfyDmRcK3aRA7XTGEu5VI2Herl7Uclyo1EV2usA%2Bb%2BHJ%2BD19%2BHobQDKHrm%2FPJnE%2BA1k2pX4vyqyK7shqfULjY%2BSq%2FBb1nxIkGCYiYxbPY3KT11yb%2BiZbI9n7tG%2BZtuV6sWXCnTluwU4yaYzw%3D%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6df15ae83ef18cb3-EWR",
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
    "Thu, 17 Feb 2022 19:17:19 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15ae9adab1927-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e26fd022-0ac2-4773-afb1-ba2522e99c93",
    "X-Trace",
    "2BB4E583645002224EDD92F1E3B0D8A821528FBD1C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gMP2UnPKGhMM9nL5dTPvbBuvX97dh1pbvfDxjViof8RX7fnhyjtWFPglvJRcSG1ss3EqAsxVisIyeg3zmO%2BWldWPH5N0pQNiUbHplPJu2JrgHlzKOrCABHVPON6oHZsv"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:19 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15aea9fa88c9c-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "985194c4-221d-4484-a960-b6b06163fa6d",
    "X-Trace",
    "2B3ED04C776A7CF68D3D9FB2ABBF0ED626FB27CA8B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yNludnfudmTZ7WL0sdgOJ0POAWRrXT%2BF24V1WeCiLULFR3%2FlcASWQhNRLaqgmxyxlWXkoFjv0%2By1JkEzuh%2B2eGfJXW%2FxZ0D0JcqW3Sj%2BSTJMdeg2HPku53u5sKSm85Z5"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:19 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15aeb9fc41916-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2fec9e97-efbb-49ae-9372-a44e641ae360",
    "X-Trace",
    "2B461017A44324285B17A214EEE960A8FE4FA86DA0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=z%2B4aRzkUl%2FCM%2Bk08QGoA6IofviZf1i%2B1cHaPXmCrEd5WFGDsV6FqlH0N%2FICKyFFq0Ev4WAPW9kGG%2FLBc%2FgFNCpu4utM1l%2Fw%2Fo03Vejg8%2B6DZRd45GC9cwbXlYydumX5Y"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:19 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15aec590618ea-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bebf0dc9-393c-4c21-9b01-2059cea0d1bd",
    "X-Trace",
    "2BFF8CAEC4025A66284B78DF87BE5C8411C4A23101000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MwBL9YSnfFvkfhg%2B0xmI9gKk1IZpRVdS6Ummfjw1MLTI2PGVEMOqPXWr7W4pzrp8ceQfZlbbS3G8wWis%2FMEOHJrhrZBtdHDReEAtN2H5tGlGPcHtBM4ztCqYim9Nanqs"}],"group":"cf-nel","max_age":604800}',
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
      correlationId: "f7a9326d-2a8b-4385-8bd2-d6baabf5acd3",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15aed3da41967-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f7a9326d-2a8b-4385-8bd2-d6baabf5acd3",
      "X-Trace",
      "2B1115B204E44790E9894D6D0A2E0718A53414FC38000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KJMuDCWZgqzxF1yACpow%2BaR5e54lXAXDkCZROPmJFBp01rNLFOJhLcSdSUuFclwWNrQGHZu6TgTxZU0iFDOzJd6a22LEHj8LxUDzeM2h%2BTtyZztDMxIk9Fyi8xmJjhh3"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15af788091a17-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0437f761-aa41-4d3a-9f27-00465e6d61bd",
    "X-Trace",
    "2B05E05987C448AF508BDDBA86475F75D6111F45CF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Qubw5Ax5jgWtoOlg4ODWOGUpLUOV8tdkfq1QxAxr4AlTuHZ3pB5G9uIimxKPt5JoQdphx8ps1vCF%2BcdTBuzliFaF3vfBjrJ9ynNf3vUNv8Z1IJVilz2ry3%2BFrHevc%2FxR"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15af85a4c1799-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2117db16-6fac-48b7-b988-874321a56fb6",
    "X-Trace",
    "2B58358DDB24D4F6B21F75095E91AC288DEE7EB2D0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4vbtu9B70vLE36LcYaRzGrfnoztw%2BVeLPeFCUEr6rS%2FZykeMHtFsY0VV49dBuaYDs%2FiN4zTjKYO%2FPburK3uYX%2FPjzFMSYwSL6cOVEtDZbrS0BwfqLNG0Sog90QYxPHWf"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15af90de40ca5-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "30dd6939-105a-4670-bcc1-f7e85f8f8c81",
    "X-Trace",
    "2B689B93CA271D0E0CF9FA3F41296DF74E60956C82000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jSQJi2aVX718mblRU0VuY7yT2GhjCR39Py2MYezMCnmd2jqBkTHPHo%2Fg%2F79Mzj1yU3K3R1oM3Fk85xAT3%2BWiSCrcgpMWAOvzBhGtfk3oE634Gl%2F2Gb4B8icFvO7v76ud"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:17:21.592Z",
            hs_object_id: "7945164639",
            name: "John",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:21.592Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:17:21.591Z",
      completedAt: "2022-02-17T19:17:21.638Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15af9bc5b3350-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0687b096-a62c-4cb0-8fe1-c8fec5f17817",
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
      "2BBF588FCE47E568286A8358F405F9393FFC31B738000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pcfJFdhMCEEMJf0jdUGpKixlTb7bY2pyb67YpWFbZK3b%2BTqgEXWR%2BS8Epsi9RcDptGtmwT5cgDtfrT6CFmXapsESf%2F7Vl%2FS3YcQuVSrEPnK6SdGYFqF7UAJz8I0G91pL"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15afabf3f1977-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "adce8eba-b063-4cbe-95f0-4a1260e98777",
    "X-Trace",
    "2B6B4E107DCD66C63D06DB177AA82D493E1926DB70000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9QDyTF%2FGreXmqCmOrvVSXId%2BFXQeXYP5Wy9Yvc9P05wNnsAntjYH3V4rCLRGrEoy8dLPojLkn%2FsDGc5myEO%2F6rDg5Vo8G0z1tOmKARVlM3s3c9A9jNyjWyfm3IGqUdNG"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:17:24.355Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:24.355Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bb70fba32fa-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7d2aca21-c273-454a-a1d4-16f29ec41902",
      "X-Trace",
      "2B80A9AF8A6C841A57D6D1AE27EF4F44228F36DEB5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BjCaAbJptwGQPtgQnTS0HD%2FLfLlRI6XEtluAtrYqH0asx6SHs1BgYWxDV6%2B9Nb5i08rzT2SlcWn7b4yY%2F9US2XOOoyqYLyP3mvisFa9oI34TT3mTFdQJv6N59pv67eDW"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:17:24.355Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:24.355Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bb8190b78eb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e27cda74-a301-4091-930e-e0eb672c8f2d",
      "X-Trace",
      "2B9D5024E755E2384CCABBB207A23C51B49D7784BC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3QJwRH3ywrn8amoIpG%2BMMbfPuaRTEcgsZ4DunqXFBAX1u%2FghE9DDAP5tRyCVXuM37bqxQa9Oaj3jV3HjmJxDVUFsfvRCuJaHC5%2F6z865HkqmfGFAVR2hoCpVTEEdoAi5"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:17:24.355Z",
            hs_object_id: "7945164639",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:24.355Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bb91f3f1998-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6921ecb5-3c36-4e90-93d8-04a76edf3f7b",
      "X-Trace",
      "2BCCA6B76FD0488FA6F2B1C07EDA2D853437F431B2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c3GsDC%2FFyBidVL7wSojWuiPNiHlSDLZgc9Jh%2BaSOui%2BWLCG3y%2F6rFEti4ZNADDGHdgUk7oTvSpMzfEB6x9rm%2FkgrGBgXrEi9a%2BI%2FWuD2SWP3Y6p9YXIUEt2v6itGTj1S"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:17:24.355Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:24.355Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bb9edc28cdc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a057c2af-1d54-4c6c-bd9d-ad394bd788ce",
      "X-Trace",
      "2B3C9D2019A41C2ACA2D33A3C0F395CB88B13A106B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ty%2FPrwmUqcRjOvA3PJd%2BsqYUX%2Bl%2FwNOP1LuG6pFo56qoSrtcwvMxBid8S%2BZJLvcFkjtIYbHXsaEODOWa0kvyztlC0JGPhNgCgd7ou6OdaJX4vEv%2B7Cik%2FNG09VvreWUq"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:17:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15bbabdf68c3b-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a8f0f93c-a29d-4040-9011-0c92c0c72cfc",
    "X-Trace",
    "2B844DAA9C2C5C8C78A1B41A7E46E23A3A80620B5C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wMFAsfuDAl0TCDFvely%2ByOp40D59CORCRxR52I1%2Fl6ZztKxO749y%2FqAgNouWDoxqYC3DeVkKNoTLilW3G1LWM9SEsaVjt6QhWl9erHo5MzvOvjsHfHA2qGigDsFU4ueX"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "de1d0d8e-36d5-43b5-8a7b-3daa35f12715",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bbbcb6c8c4d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "de1d0d8e-36d5-43b5-8a7b-3daa35f12715",
      "X-Trace",
      "2BF9283EF735F757D8613C31DF141FA98BE3E95E8B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KV%2B8%2FreAkWKGUoNvRITyxN0TiGysMiOeTIzaI5KxzDf7JtJAJLUjT3OhUUXBdqhk%2FYltc4z17MOaCu4%2BwIZ7rjIjK%2BQx87SoJpY7gYY14QqRtdow4oqgHzz%2FQxYv5yM%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:17:24.355Z",
            hs_object_id: "7945164639",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:24.355Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bc3ad181a13-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b5da6bdc-6073-4cef-abda-49943be8acb3",
      "X-Trace",
      "2B1A5CA85B16DBF0F357A02E6ED420BBFA3104BD23000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WcnJ%2BtD2Wgpgeu2uuiDi09mr3lD8VjNc%2FXCVBkgPadLjMXoY9q%2Fl%2B0w5wRHUuI2ohdWEiHenPHoN0HFYRF4tc4P%2F50xWVyAPqO8fHukrG4ml2T8gPt4fCBLJrjfMsceS"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945164639",
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:17:54.049Z",
            hs_object_id: "7945164639",
            name: "John",
            website: "www.doe.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:54.049Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:17:54.044Z",
      completedAt: "2022-02-17T19:17:54.092Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bc47fbbe744-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2bf74f75-dca5-4cdd-a44d-296445b283ae",
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
      "2B3A8B7BC0B86E7201837EFBEEE4EAD431BCDB8BC9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uweC8jb4NIIlALPD7dUy%2Bk2GEaBMlnKPRNIgwof6HyfVfr551tPhi8%2BR1KklmRvb7NwB6ZXKnRkicnB8908nJtcGS1rqMzTrczAcVZGVrennDsl1LBzyBouQh%2FD75eiq"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:17:54.203Z",
            hs_object_id: "7945165109",
            name: "Pete",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:17:54.203Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:17:54.203Z",
      completedAt: "2022-02-17T19:17:54.237Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bc57a1832e8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "aa9605ac-b971-4015-b4f9-2b9cf51ab926",
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
      "2B0E88ECC1D40EB03B1CF516E1A7D90B77EC728D81000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tl%2FGQGcqAvilgT5V9PCP12ZvTATsWwB%2BB2dUoEUWewRyRCucA68iCkZRszqbPKhzptgHt%2BsW31es4hYp%2F78Bth4Ulrf3mcBdDSa34hu62xFdHtusBtHICfUEreuG1%2Bg6"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:17:54.049Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:54.049Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:17:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15bc67fc21978-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fdf92496-20f4-4319-8c1e-8eb8ad3a8381",
      "X-Trace",
      "2B2BF9146B6CE9BBFB6D0F978E7A6AD45E09E62D01000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nUMJXG53Lq%2FaOxZDdBwoO3%2B%2BVba0Go1aA9g4x4VLnCQtisv6CiLcL%2F6gvxnvxXt2P5UflOoF9luT%2FANUMaW8PS1N%2FAODHJDncOVWNcT9c%2FdvD1JCPxvdeG5jxVgiiKhg"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:17:54.049Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:54.049Z",
          archived: false,
        },
        {
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:17:56.690Z",
            hs_object_id: "7945165109",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:17:56.690Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c82da7be6d4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c7b2351b-4259-4ae7-af3d-3d3f68318350",
      "X-Trace",
      "2BB1193A02B41DF2FF8C810EE46E3DE71B5F28A118000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pcPKGYiJPJDbYmLeGFwEYiF2lWzBXXkVe4cH%2BSuxUkgGx9y7IPZc%2BzziFvGnclcw1C9ndq3tnyXwMgZKmxO5eyk%2B%2Bkk7Fq%2B4%2BgeXGJLhrFfcfoKamMd5OdA1uotNhGyf"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:17:54.049Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:54.049Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c8398850ce9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c1016882-3c08-4ea6-884a-73d81120a661",
      "X-Trace",
      "2B8BD9A7F26E6B71DC3317583829B398D30ADBDD3F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wtbh0GP%2BF9eBAFI1UCfcjBDD03m6u8Fiqeb7f3tKDSlOw092UIO4fAe2JL5GyMsAK%2FzyjuobM%2B3WXeJiF%2BYrpjpitgESCw42ZO264MfxjDVRUlft6Di4Kl3yVIhvNbgL"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:17:56.690Z",
            hs_object_id: "7945165109",
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:17:56.690Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c8478898c5a-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "55dbcef1-6bc8-42f1-a9bf-2f7b0cc316b0",
      "X-Trace",
      "2B0EEBA07127E03AA2A93BA0C7777971396200D53F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KPVyVCVobr%2BDrUFB8nLHQD%2FYDrW1hMtYTsVHokU1it%2BOkyWBPu6rF4s3RYV%2F8u%2F8I%2BvfU6EppCY3Qz8z6HMVrHA1S97KiYDXwk7pieshsAXL9aceD448ZIxUF5vIepqE"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:17:54.049Z",
            hs_object_id: "7945164639",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:17:54.049Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c855ffb8c78-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c37ae69e-e8b8-4a92-b8df-40eb6f089e85",
      "X-Trace",
      "2BD1AB8330CB44D248DD59F544BC9F78F24CCEF63F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YJwHK8RjQofMIVtdE%2FS1J6Hrm3Bjhxu3Ef2%2F5PlaeLZ%2BFF%2BYMiNl6RYYCL9cOrvHzA7EL%2FfT6%2FvspCpuMG3UUVNugpEh%2Fja091FlellONuQURO6so6J3gzynG8ZM7vQD"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945164639",
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:25.045Z",
            hs_object_id: "7945164639",
            name: "John",
            website: "",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.045Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:18:25.040Z",
      completedAt: "2022-02-17T19:18:25.077Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c863d851a1b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3fabc3fb-499b-4669-9d6b-a484b0cb26f0",
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
      "2B6D77A81B506145D8438584527781B5DD7276AE68000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=niVFcg3Jd%2FdIqc0MkI0nJoTeeexTpUu9FlV%2B9909ybkeNAf4NBy3PYaXVrjZPTrxf6JirXv8UtRWXFRI3h6glrRbafUd64nCQRPMMJtS05YscPKrvItNWpO0yHpgxpME"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:25.045Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.045Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c871d801a44-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "abaa9b86-2e0e-4099-be2c-ef070b3eecee",
      "X-Trace",
      "2BB53CDAE2BBF1D0A8DB121A1D3D58B5FA976545D8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cuzyCj78QkI9G%2F1vsvvzu%2FaTVQSsqgceiyqNtl%2FAPKhMW34YWx%2F5pC917fK2p4546rq4yKYoarfXAC29FPbn78390nF2FG3lkdZ2c7ZyIbuoHmEnLIg322kL29Yv4Z%2FK"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:25.045Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.045Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c881a54335a-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7a979256-402e-48e0-9602-f0955db8c8e1",
      "X-Trace",
      "2B03F1A63DA2CA781F1AC8B5376E4DF58DFDCBE9E0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AWX96h8rAluqt2aZP9bCD6PoKOEIXryvOf3nna%2FKOCdU%2F9eNZyizIT00tBPq2l4nOZqR%2FuCiqIYyQ192ViEqripJo7OvTDbMsFPUbl8fAZ0l29ClpTs7gEc9cm5oK%2F0%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:18:25.045Z",
            hs_object_id: "7945164639",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.045Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c892b7d19aa-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d790f5b9-3a21-4aac-88d9-331d3c858d4a",
      "X-Trace",
      "2BEE9DD9F4FE53010CD358C4BED78A9764A9EF5C02000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lckHTf9RRac3kZZzqwktW7KIWpRLc4%2BfuCbbSuAoKzySXiYZjSHFgjLudvPHvAlRcNUYjJpIJkxtfjIFpReJVAJgzrs0YoaWs1HwxPoGG741yZcoxVFXsw8L1TSgEUhK"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:17:56.690Z",
            hs_object_id: "7945165109",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:17:56.690Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c89f9c41a17-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a773b66b-00da-4318-89c6-275fa854794d",
      "X-Trace",
      "2B42DD60AB2D6442A2038AD1DE2718827B070985E0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FdV8JG3UcqUymN3ctPUT8FrzfIwj7TMFk0Foc4flhQ87f8KtEVF2qPfwDP77MYHQ974O%2BSaFmfFmaWmwnCx0PxzER9YUFxPct8dAHVRqhTPAm7C0T%2BT7f4zzZb%2BLw%2FYz"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945164639",
        properties: {
          domain: "notgrouparoo.demo.com",
          name: "John",
          website: "www.test.com",
        },
      },
      {
        id: "7945165109",
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945164639",
            name: "John",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
        {
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945165109",
            name: "Evan",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:18:25.752Z",
      completedAt: "2022-02-17T19:18:25.860Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c8abf3e1760-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "76747d9a-992f-42ed-9966-410a0ecb7d17",
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
      "2BDE0573AFA45F0893803B1BE3B83F2CC30DED79E7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=089HSnZ7o%2FZKTwFpL95aOnXxoqLSu22Mf9O9UE4cVnoFgS8W7vqktr7u4OIdJ1PgJTEzE6p9100tY%2BBILbFmF0AojYAcuakvpHWz%2FZ7G%2Fz%2FdxpLkkAWn74hNEPCC2C27"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c8c3f9c32ee-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a17bc153-5dac-4b43-95d7-44e6c7793b5a",
      "X-Trace",
      "2B7BAD89B28C94BB7CB8B7840CE97D946080C36056000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gBAeO%2Bt0XEnStziE0GEcGtb%2BoK0Q594Ogvym1FDdbkMeJaVhLnWxzt%2B4jXrh1M7HzW0tAVJIyPUbXHi6g%2BPR5sJE2YVjdrMJyN37W5d0CuY7yZIpLLYBAKXnYrM6UHme"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:18:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15c8d28a1159b-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bc5d70ff-ebeb-4ba0-8402-887cae57d1d4",
    "X-Trace",
    "2BD6C06C4DDFE73D6BFFC588A34A80C3AF61388170000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U29%2BNvSvRG0oTX5%2FUhV7KPojq3S6jbmAAC4ellsFPlUtYA2K8fGOEJzEJnBOpb%2BxLgKgh%2FIbLJuj0cohEg3Bn%2BZic1dH%2FVNfb87K8AjAupMiQawvbowmtlMU%2FCkL3YFe"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945165109",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15c8ed9ffe6c0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1f2385b7-2637-4b1c-80da-abe326b8984a",
      "X-Trace",
      "2BDC194EDCFB29F7CFFAB2D03B02D7553CF0C0F11C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GSpIvV0PSMRMR4kvrNa0vhXE6BihZdt2neq40mTPugEeYfHxBjtEDfCP2NyV7chsDxQKCbyis04AhNqPJ7OqIl5N54%2Fp8aLNRqiARuSI0oR4NGLT3D6insyy5wRjrm1m"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:18:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15d4b3b051788-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0c100bf1-3697-4d4a-8cf4-b8508f324fce",
    "X-Trace",
    "2B81584F65920D1695CF7447C84898AD940FF37ED8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YxrMUJZ87JnUC%2FK8AIDl5IgOhSjUaSpKSdsxM%2BW%2BZ6y0fFe30951GQ0%2FezFXXqC1W8pGiwpMAlXr%2B4kBsNKG10CQ3jgYePY3GcQRuxJt%2Bc5RoCnryru4dBnxhqrhv7jB"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d4c3b5a18c0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1f9a5674-8779-4927-b806-0a91f9df5e0b",
      "X-Trace",
      "2B793E3220782AB4321BD1A55B1D77D64EDDCB97B3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4up2CG%2B2C5fI3%2BexFH6QRIyleAq4nD4hHL%2FBx75ZLkQK%2BIdTvuqyO6xyw2ocSIU21DUDcLVBIEW1ir4%2Fz%2B2EfhM9LTIvi8FaD%2BSJKeRMbshERVe1wvjQmvKoTR%2Bcqx0c"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945165109",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d4d08878c99-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f81c8570-0c91-4374-be41-604c44b37915",
      "X-Trace",
      "2B9F2C914D7DB85F6BB2108BA831CAD519362DFF6C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Yy8tSGOvfGh6Hm76uvFHJAJbhQ6DJofJChCwyNE8OPGb9u0p9Ixa%2BSQcrG1xYOfyj74C1pd3fdMkoR6JeuQzWhsD8Gtl%2FyEhm4WEG17VFH%2Bb1h0x75WnhVcVWbgKK9FN"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
        {
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945165109",
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d4dcd820cdd-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "180d82a9-9bae-4ce0-b5c3-18fd02551232",
      "X-Trace",
      "2B38EDE77C80C179F497CD8990ED3FC18239FBAEBD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p2SIU%2FaC3NNnrIs7wDFAlurZs6dYfFSms454E1PLsjY6iscEZiv6lsPXdzCGRavSMIAIlGbms5Uqupb8k68qyOQ%2FKF%2BqNaPbSH2sG50oPKf3VPRfw9FkTVqmUc4ismCO"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945164639",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d4ecc73e75c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6df179c6-abea-4fd6-b5ca-a16f56510abc",
      "X-Trace",
      "2B9B3784933A6F26B2B124E646A87516703F41D79E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=djAJNkxTBlgt3gLkTy9Zu4oHJ959%2B1LKhDEtD%2FCl0hb6V5lHfFQ3WLXF4VsDdDg3Z0EEfqKDdEHFqFmo%2BbkSa9gxMjBjZBtzbZ%2BYrm%2FDFrBgHUP%2BKCeu9GxHNCaLuGA%2B"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d4fa99c19aa-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f8857ff6-61f4-48fd-85e9-71f0aae6c9e0",
      "X-Trace",
      "2B249D362B795EC337F8BCC9C879EF5ECFD6A0674A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BMUP%2FcWPmgWgEzrlDASRGemunjFRTk5CnmasRs9qYj9XdIpmjFOda06d6yAJxIUpHDZf425ymAbY%2FUR6yQ76A5HuPoSRpKPdzMor5OR%2FR6%2BX1rJ2BG9ckhWANisOUumd"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945164639",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d507cd18cc5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ca494850-5605-4108-b2dd-411774d5c892",
      "X-Trace",
      "2B15379A80EF5DB4BAAD468F872A7AFAD316022C2C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=B1OgVBIs40TNrMeDQ8O%2F743EQ2ZUoTNXK3do2Dk9RdiMyRCHWBYMzKfTLOab%2FhdZP16%2BdPhPR1coDc3TVwvOw0rqi%2Fjpc%2BF8zaQpQmE0lE%2FPAOlVCwaWXo7%2BkkNsPW10"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945165109",
          properties: {
            createdate: "2022-02-17T19:17:54.203Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:18:25.772Z",
            hs_object_id: "7945165109",
          },
          createdAt: "2022-02-17T19:17:54.203Z",
          updatedAt: "2022-02-17T19:18:25.772Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d5178f81993-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d4fa9492-c259-4177-898e-cbf815c5fca4",
      "X-Trace",
      "2B1DCDCADCF6C82906C3EF37B3A4635A2E33CCCE08000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PfQZoc9TIb83Avr%2BphZ5poFI6G%2BHWw5%2BJHT1ETDqOO%2B%2FX513Cn%2BZqVsnZWzDIUmcVeft2pT1%2F73Dqf38wfncCXlzrBSMqsS7DLUuJHfxmNHrRQHeV9lx4%2FvAjlLJXNp4"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "7945165109" }],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:18:57 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df15d523f7d19eb-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "50485e38-4e7f-4a6d-aa92-b54e26a45791",
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
    "2B8071AFB022214D721592A1A8D48E1BC46313C3B3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hufayalQADdkLQWg6kbAVNHQAXHs8foVEi26KMY8UxvaKnadgU80txl4bHSAIChvZsp0gyFsFCxeSbCKv8%2Fwe79%2F8GbOx5VQLCBUkG6WSLOqazVJnzvfsk3h4KTcqPrz"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945164639",
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:18:57.870Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:57.870Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:18:57.865Z",
      completedAt: "2022-02-17T19:18:57.913Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d534f188c11-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e3ece3ee-99a4-41ec-8651-f5e9d8febcb9",
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
      "2B3FCD49BD9A9D265ACB773FA2FFB002190BD69AEB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Fzr09rTEsIS0Px3F78K%2FRXofMpsw0nay%2BcGEYRPv4BFumoKxsDNPp0FW%2Be3UnWrv4hIIqmmhavhPitxBsLOw4C5KI%2FPOlWF9mud7%2Bprl2%2FZnVyCkvxI6tWWainNluEut"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:57.870Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:57.870Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:18:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15d546b958c7b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4708ae53-b04c-4b74-b4e3-b87e2f9d434a",
      "X-Trace",
      "2B08FF84D834F5209CC5E347A96B03CA382C16B8D0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r%2BaBCM%2FuhxXrkTw%2FJ86Xiv0Onu26fOL1sxuEJP4Z4DDVb%2Boy5Uv3kTbx8Mbu3RqwPK6%2BQuOqv8viHITaIHkQaKiApy7AUVm78mFLAbdWcof2Kjd%2BexXhjS0o19qJ61lq"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:18:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15d552ef08c65-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b7cf6e24-86d7-4e35-9a71-c8c5907772d3",
    "X-Trace",
    "2BB6BB2086349AB8C6C443577A34ACB75F462DA08D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=O2dmtAjT%2BNx96u%2FAu4o%2B4ygoDLD96PZU%2BGjRXVNc45xXZ11ZslZH0KZrte9pqi9dzMil3HThKdwWrOrHax1Dm0VJWbjOyV8ZNI2D988dOI3Z4Tbb%2FzQebQFERmVSRCMn"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:18:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15d563ee81a44-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "04d1eef8-e77f-466b-bc00-91b0a5e5217b",
    "X-Trace",
    "2B5E23081CE3BAE1C78411CE25DA3F5C679C97907E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=waPjIJAe%2F2Q2QC33%2FvDmbUa8lBkaaUA%2F0Z1xegpqT0GoXp%2FwjFcxR1WCMUdwr6J1jCol68ox0DAIfmVtjW541p42pkPGtsne1Yo4cOGYZMXEuKy55kiDwBzxqxDFj2YI"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:19:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15e12cf571861-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e23c4d4b-2158-4464-b7ca-0ebaaca1a874",
    "X-Trace",
    "2BAD4245D29E3B2D061E3716967C4B73EC394B0B45000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nietiQIQnsXbnR6DB9Dyb3yGTnA3y4F8ajrINJzVnTBlpsTL4haDkW0J2hh9wUgPFGTl5AqwcNXlEJnAXdczWJ95adR5cpOV4frXPtsjjIZYN8yQIsZe5I7vX3K9YQ54"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:57.870Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:57.870Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:19:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15e13be5af015-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c9098200-060c-4bf1-a5e2-8647e6ca38f8",
      "X-Trace",
      "2B4E9396A43666EB209C63D2570EB71DC1858B00B1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=b32%2BCLe1gu4k9yAblF3ECqeM91GTUPnBYcqTtg7dEmh%2BIjvSi9oCRUJrk3rZb7IBw2KnXXqml6lKR5Owt%2FQfoNEubr5sMui2mzfEWrDe2Ce%2FS3%2BXS%2FJ43V2Me2WXc3bf"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:19:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15e14cc408cb9-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "83e8b083-16be-4e9a-954d-8146e26d83ad",
    "X-Trace",
    "2B4BAAF6455E4E565B67E15351A36D62A9149037BA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZzVyYkB5CcCu4kjF8iQQisJJEvX7PzOYrqmsq61kMh0gePOh3WYY86LikcJZu98T6%2FnneKXF%2BIe4Ga5e%2BTHvfoKSuxNqpdDYE7VdLzf8Qh5yg99oFT1La6JH8YxqN%2BZf"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:19:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15e1579321982-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "52ef9217-4f40-4292-af1e-b446af8039fb",
    "X-Trace",
    "2BCEE0B83A3C03356A0596941E0A01268B41AEE9AA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fj57DTTxGeF2DGXux0Chr7RJid2mRkfteuPpt9g9XBCrHmh82z0gIkCBItfMlD%2BDodLwpLj9jlwf7WJL7t3ShVsNYGgMQI62Zes9g7hAVHOY0hh2iDiKhDssYkLFZ8B7"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:18:57.870Z",
            hs_object_id: "7945164639",
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:57.870Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:19:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15e1619498c83-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3b70bc61-6694-4a95-b98e-c163da69f3a9",
      "X-Trace",
      "2B9AF40059A9FB4912A228C1CE234484F2737B9E83000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y3PzLv8dCDd7reETFVDsf5Qxus2czGYmb6Uvtaucrh7012lSv07k%2BNfovuhWi229YkkMpDKXZ9gxtLt4N8BDCBH46rRgjAqxOxYqreq6sJVwyWmsuhbvlv3ktFPcVtrU"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:19:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15e171d4c8cc6-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7a821691-b584-4804-8bcd-c14019c129fd",
    "X-Trace",
    "2B40C5596247EF44FC13B444D350271ECBA9B99C5C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bwSSBUlVFx%2FtYYQAvvCKPKMACHZZ6bSfjj1%2FVQqEiTARzO%2BTo4acStWUQi7kVszilTGEDcmeg4Er51rWBtvbtgP5Fb393Jmst%2Fk%2BUhKletyEGV8HTu0XKNjvojseRazj"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:19:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15e17de7e8c6f-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f54c4a6f-3bcb-4297-a541-541469c19a8d",
    "X-Trace",
    "2B8197D94A8A59B7E65C833119D67E2974CA40F0E6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GIENDyD9Tlpg5I7rqlyWKibhrjm7EXIiZIAVOiyzICBeRWiu72M5Uh8OXvdYG3mBqUBD0cmgXlQv%2BxbNtMzVFWsQ9SXMce%2F7Piwbm73Fk%2BRWDxd9dDlye5iPZCRifnL9"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:19:29.445Z",
            hs_object_id: "7945046052",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:19:29.445Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:19:29.440Z",
      completedAt: "2022-02-17T19:19:29.496Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:19:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15e18c90318bc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "10aaae8c-caf0-49f0-9d7c-51dd003d5f0a",
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
      "2B05D8F42872E92DC122350AE282E235B167A51866000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NbivTMpGufm4CHPyXz6LxcrtX6829tiH6aFr3Rb4zP4XUJ37xm3JdTml7CipuFyuvkWpAsHhhFMa5rzktzPABtcpJgVxRZYwcwtb44SeIU1Z6l6uew2jlOto0cSzylN%2B"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:19:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15e19ba808c93-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8a2f9992-f8f9-4850-ac7f-c48430b71dc1",
    "X-Trace",
    "2BF8822E84CB49AC2A1D7F0E0EDC07D32BF81A2B47000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T%2F3ylcm6kUz6yxV1sOGC5uHFhM9SU63i1wtRdC71mNWBdmNZ%2FLDfZ%2B2cwp02ApE8TPqEZK8qu3uXtfopb0%2FC06kBFgXWLUbGMNJg%2BjENpOtoTXxIr9xKTSJ89kUWyfi2"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:19:31.530Z",
            hs_object_id: "7945046052",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:19:31.530Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:19:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ed63dce18a1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "03713819-4e34-46c9-a3ea-6ee9f6bdc851",
      "X-Trace",
      "2B3761768864DEA5A3961E2631E50366A0BB8433D1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kYuqMdtlSTPCzVE7Y7NhpXhO%2FYUTpy9lBjkXHHSfIZeK%2B88b%2Bpo8%2BHP6o2BfCUOaC0u5a%2FRRuSoTczQknTjjX8%2Bhwu1AlGdU9Jjj7MW6rEHn0JULQ%2FoIok3H25kECJdE"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:19:31.530Z",
            hs_object_id: "7945046052",
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:19:31.530Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:19:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ed75fb218b1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fecfc2f5-d087-41c3-8e99-f331feaea614",
      "X-Trace",
      "2BD0D002E1E02E30EE48CFB46F170F7BAE47FEDF74000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R7QqyMIfIpuBUeAyXz%2Fgzi%2F9%2BusRPEiiAq54V3%2BZLOtE5yOo6Y2EsOJg1E3MURUq8nMz5BBBzu0nLTDI204wJPTE1A3hoaDCnNfB2rDwF5FgHEeXc84iyOXtv1JMI2SG"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:19:31.530Z",
            hs_object_id: "7945046052",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:19:31.530Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ed8193e18b1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5a85ee77-2bd1-4295-92e3-542691d665e2",
      "X-Trace",
      "2BC61461003CD3E2937C74D13A97641700D9E3B6E5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mc%2BqzSF34LYA0bhStFj9%2BwgPV7Ib2wxJJyfN%2FhKE9rFeq1PJr1vymrzTZTUcgitInQz65CRAbUvqGmwrWP8lxD4SHW3AdhAq7WsoBFl3cljTYfVV%2B2p%2Byjfu7AWpqX6x"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945046052",
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:00.199Z",
            hs_object_id: "7945046052",
            name: "Maria",
            twitterhandle: "",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:20:00.199Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:20:00.184Z",
      completedAt: "2022-02-17T19:20:00.228Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ed8dea617a5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4754d090-322e-435a-a993-11c05828e99f",
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
      "2B8FEE3F195C07CA7155F16EB903202E220A32F15B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MPpUeVDLuoY%2B7HR1scvLHdOWHtHGqv7At4CmHLPOnasei7bGFcYtjCC6UroIiGbDjJdTWgCC8vkT9JMrUTULj8nOF6OM4%2FfOsTN%2BrVaBHo7LKdGrTyTfTCGlg9Y9htDY"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:00.199Z",
            hs_object_id: "7945046052",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:20:00.199Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ed9df2a8cc6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "38b31199-2953-4a71-84bf-f1ccdd3e9b3e",
      "X-Trace",
      "2B9E4C49904E8B1AFD6DB80A789344CE30433FB6F7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h%2BCY2emUl5NDdB0P%2F31c%2BR7ujl7Y%2FB0R94PCZaBFvUWj8538w7SCGVSVPDETNM5FNcG67KS0cT6FNaSHXRXyFh7H0p7UXoz3IiYGy3NsgUnpcsvrdzprKt1oYAQaIDVv"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:00.199Z",
            hs_object_id: "7945046052",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:20:00.199Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15edaa8f58c2d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "81e3bb8f-3bc1-4eb9-8931-26a632e4891c",
      "X-Trace",
      "2B779CBEE17C11798DD84E949F5CBBDE2B38DC004A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dStvNNkxfJjSkqdJfbpqy%2BAZ9VU2GJ%2BxVOZ9Rqrcq8hbmE0kD%2BGpAS%2BAEvAFivrcc0adODqO1IbGZuvtbcqbrywp1akL8T3YVdwvUWtERRRkTRcGQ4osGYeY6izBWAW4"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:00.199Z",
            hs_object_id: "7945046052",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:20:00.199Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15edb8e688c3f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ff9f70a5-9f76-40be-8b63-d5777071c630",
      "X-Trace",
      "2B275815FA25FCF2C54D52786E42C8614FBB75EE35000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VlZHUe2Fgquh6vpyq%2FPtKfznt5f59QB7VIKG3q3AFLNXsuv2peLWqP1MKKq8TqVo0UVWi9ZF87bL%2Fc9TghFJpxPdWNW%2BSOHDOXJ6XBWut%2FacNKKaNgwHQvYYZL7ug2AB"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "1854084a-9e9f-495a-ae49-f45c511ba024",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15edc6c6919f7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1854084a-9e9f-495a-ae49-f45c511ba024",
      "X-Trace",
      "2BF1524A655499D98A7C7AB9C69F109278C2C0D3C2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R2QteK6V3pVXgtOTb03JMEVMb6wlRnKg9oeadlBTMgLewPAqZ%2FWPZL27uWabj2LR2EQICaJ%2F1AYYTepi25E9Z%2FqRiCWGx3Dj859A%2FJLuPdYzh1NIAm%2BvZpurfvSCpgaD"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15ee4cfa40cf1-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5ede4ae1-87d2-4bd5-8f0d-a7eb0a45ff36",
    "X-Trace",
    "2B15E9451B1C8398661CBDD920ED556F7FD63B1A07000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q5e522zO89AxTKGxSvaOlwFWIDVesDs9gZCH6WbOpK2ye82v%2BK3C1uLUdEjGDonPvo6dG4VPVrLuLUh7O%2FAtCofHfYfW6jLjyNLrpVpKiaxDZtkpdMr71CqRCEsAEMuo"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:18:57.870Z",
            hs_object_id: "7945164639",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:18:57.870Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ee5fd80e6e0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fd45c781-3223-4dd1-9d5f-fcce2c9e2ebc",
      "X-Trace",
      "2B464EDD538665305BF3110D48B164B12194E45948000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6bOX4irNRydZ11ImpIfPpgLLFJn0Z0lN6XzBMq1rDexrPtnDxuPA1kF59ZmVd4Lx0hI15tZQ1FjHu0FY%2B2cuWeGt56fKwky0NCvCYQbMo7%2B2inMvVe6sEuRNtzsxINHR"}],"group":"cf-nel","max_age":604800}',
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
        id: "7945164639",
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:02.441Z",
            hs_object_id: "7945164639",
            name: "Sam",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:20:02.441Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:20:02.436Z",
      completedAt: "2022-02-17T19:20:02.476Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ee6fc2b8c6b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b0b21342-9eb8-40e0-8898-ce66a1c2b154",
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
      "2BE58EBC30071C8E7FE82541EF76737252AA89DAA6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D%2FrkbsTrOeGd2nTAnAutohukhAD3xh3tIlnpo9ZbcEjSEfuWg2WxThtUmKd5ezTM8ghFmLsDSnAUi898ZcPfW8JGfob2uKoI3TFSfoytf9xm%2BcDgA1guNqz3nqOgereU"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945174676",
          properties: {
            createdate: "2022-02-17T19:20:02.581Z",
            domain: "grouparoo3.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:02.581Z",
            hs_object_id: "7945174676",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-17T19:20:02.581Z",
          updatedAt: "2022-02-17T19:20:02.581Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:20:02.580Z",
      completedAt: "2022-02-17T19:20:02.624Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ee7dd1d1829-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dfcfd0ac-17bf-4e5f-bc6c-13344ffa08d2",
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
      "2BE63B9C835FDBEE7BFC37A387F1D49FAA5541CF2A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kxvwc1KhmVs4Kq9bbBehWyQl69Vx9BSVYNvXgKDlxr20rKDKpPH5x74zKeGhnkm%2FdCg3zWeKPnhwTH4N%2FuNyzCY0JStGNlr6RXwX%2Bp1rLhSsnVTQAFAZuaQOTcVQe3G1"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:02.441Z",
            hs_object_id: "7945164639",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:20:02.441Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ee8dd408cc5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "10def36b-d0dd-4c5e-ac96-e52cae1ff2d0",
      "X-Trace",
      "2B430549E17B9889146E7A156B5E38973F8F73C6C7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y1JL%2Bsm0M3UPQ6RrOmi2%2FF8j%2FSVyxjHrBDyUGaFUp3LBcHkqS0OsRxUu20Ta5VCZaK5t3hbbAUBqEYa1BTkztZm8ylS5oQGk8s8rstyqvuxHEThXPRJIwFq70a7k%2B0nT"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:00.199Z",
            hs_object_id: "7945046052",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:20:00.199Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15ee99efa32e4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "16b7f8bb-bd2f-4fc0-9def-6c4237b514f7",
      "X-Trace",
      "2B5DB87AF74A2F0755EE7600964F5956533CA83968000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZeSxJNGBB0df3tbFMEnVbY06qH%2BXI5i2ilnTJedfosAF3JADL0QpkRCN3ztGdpQXEziAwnQUO3WFrmVFGMe05Zt0OASIJafhHfBJuuLBI0ycrCH7a0U6ligP7f3%2FFbxb"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:03 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15eea98141a03-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4361242d-071d-4130-9258-94588531f06e",
    "X-Trace",
    "2B6CC3CCCF11B201F5A8C4357D75A9D2F860DC60BC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZKKvQGOyKUcof1gwtZHhMg0V2qL54RdWMR%2Bqba7Oj3hMNKjveBUZT9fP35op%2BzR0zU2ib%2BM%2Bq6BOWIos4qm2ILnFFK9J36c5ja0xLZj8SwuWUe8ZtytG34fBY6pZXNr6"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:02.441Z",
            hs_object_id: "7945164639",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:20:02.441Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fa6fceb15a7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "406d0bd8-fd0c-47c3-b167-5e3a08b30ac0",
      "X-Trace",
      "2B3EDA11AEB13772F90A504ECF298DCDDB0C5BBC57000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gOvA0efYGEOcaUvgE62OJhtSYzKEzPQ3swUY5k0VmrHbWdmJKGif5MXGtL%2BKXpDusXjzqLFpl2rmIYckRGDy3Pczz8SBPbfUC%2Flp3XvOBoS%2FaUF%2BqK4dVgEBz0HMWQjp"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:00.199Z",
            hs_object_id: "7945046052",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:20:00.199Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fa7df728c45-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b99eeed6-97d0-4f6b-a21b-cfa07732fb1c",
      "X-Trace",
      "2B963B23254ACA3BC28BCC65D3BB5439EE55A9A7C0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jGIooOCAqaf%2FDvYlg8soVRcvpIkZZRANCMB%2FTg9DwwSDqGhIg%2BVO7dNZYQA5NnPQZ9YhbZfyX%2FXXeo%2F5GVpY0hT7LNaT05lYYdTZKgS%2Fq91XIRZ2uUSsHoquWKaBqEV9"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945174676",
          properties: {
            createdate: "2022-02-17T19:20:02.581Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:07.357Z",
            hs_object_id: "7945174676",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-17T19:20:02.581Z",
          updatedAt: "2022-02-17T19:20:07.357Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fa8ca03159f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7e3ffb6e-fb5b-4a2d-9d32-a1d7a58b772e",
      "X-Trace",
      "2BB2C948665DACC9323716FE3CD7CBDC6F6BED53F8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J80NUDz5CvB132E7%2BPVmnAmsecsTJBa%2BlVbyeGGEXTG84X3EeTw1T6ow7Q7Jaa1NSFH02LygupzVo3BTI7HVoYmN15gGK12NduGiycmsgdAEjWoxiyN7aEAvtdXuqrK9"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:02.441Z",
            hs_object_id: "7945164639",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:20:02.441Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fa9dca21885-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9331fe97-ddb5-4211-b1ae-27252b85cce3",
      "X-Trace",
      "2BDE7C3BAFF50ED77CBCC2012B6A3F1CC0E490B3D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QfM20RvsK%2FDeuMjDugDtHZQ1zxjhIKUaAZ%2FXOYZT9vKyqLCxX03x9lR3pEs2wqZCYOuGTH1v0p04VitE7y7lrjEHxb2ZHKiUjkiTw6OcknaQfQ7trQZA9C66ifnkk8NE"}],"group":"cf-nel","max_age":604800}',
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
      correlationId: "fd989be3-8616-4cd9-9e00-73b9cca818a2",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15faabb968ce2-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fd989be3-8616-4cd9-9e00-73b9cca818a2",
      "X-Trace",
      "2B06FC3B193839DCC32F797B3A00D821287A2D8DA7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pvIPf8WptWC347gIb9g6fWUNmjmFMs90V%2FlulGxx4F%2FKyFH8Up1mWMHgDDMjqDQi4HiVcPxlFVSWZxsMmpg8HLeMVBnVBvQgEl%2B0NU9M0YVsZAwsCLmnAX%2FWy%2F2LX1TD"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:00.199Z",
            hs_object_id: "7945046052",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:20:00.199Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fb2ac5019bf-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0fa6cacb-a6f3-4796-93eb-ae3e7b942c27",
      "X-Trace",
      "2BC79F10843996097C47D1D3213142A28DA799C80F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WDqYPkFizX1d8DCo%2B8QsA4U8wgBuDJVMU%2FiN%2FPCFDkxLemVH%2FhQwPNAMBqcn3jzoNGixQGokGX2AsX%2BwcpVd8Ea7V7jiQnCPvvem4r7F6rObMQvlvH0lLENWiOjunoAb"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945174676",
          properties: {
            createdate: "2022-02-17T19:20:02.581Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:07.357Z",
            hs_object_id: "7945174676",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-17T19:20:02.581Z",
          updatedAt: "2022-02-17T19:20:07.357Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fb36b131835-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ee38a66b-b38d-41aa-b9f7-e3569d0275d2",
      "X-Trace",
      "2BB1DDC55AF9BA16B98B6DE8DCD781986439090D30000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SV7W%2FryTA4pPjBg7GW4yqIkPsIEMVYRFmLmNpKubnJdyfTm9pG9fUQJgOymrLkTNPFjqPa2ve4ka5mWPrRMDJauIsUgPgWKxmkxA1L1KoNX3nLsgSI4hgrePLrT2e7m8"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:35 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fb46f6e1998-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "236f1df0-0c86-4e6c-84fa-31493006f396",
    "X-Trace",
    "2B60EB247B7AF7062759BAD859E57E7A920377B9EF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q1rCvdcgyRjKhj6N%2BIkweJctxauvuYVJZnQV3lCqdG4ErB2Uogn9y3wlrORorcppVw7W4GtJRPDv6lAJO0%2B2vE4UQ5E607XMrfCZRmYdEmjptuUKC5ULroTcB1VjMLbf"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:35 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fb57c888c5a-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7fd2d482-331e-4e40-bfaf-7a6e72bacd25",
    "X-Trace",
    "2BD536EAFC09927B346A51AE6A8A1CFD77EF207496000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2F3nllCRQfM3qeiTLgteWOESmRkm80lsc298pSLDaXtfBbOs2X9ylu51fQxDjB%2BVajkZU%2FN60e%2FlD7bQqySVPb%2B4KU3nr0vFyZ2IZY9q8PVil4m2I7lM2ytahEcX6zn2V"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "76138338-0ddc-41ea-a8b0-df37b4805d3a",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fb668d419d7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "76138338-0ddc-41ea-a8b0-df37b4805d3a",
      "X-Trace",
      "2B421C384EC509D51DD20777FD6813489891D6478F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4M6V3n8C0i%2FXiG3DQVwz%2BGz4JsCxYHNTu7PA8uI5anwYkb4dhhfPYHPusu38q4xiZ4mwCc2iTr%2FVfg3b0diqzSI7fC1Puc7WYqsahIRNYBKc9CfheUlv9EQRQxIb60r4"}],"group":"cf-nel","max_age":604800}',
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
    properties: ["domain"],
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 19:20:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fbd6bcb196b-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e422289f-01e5-4596-95f4-562ad7aa5f49",
    "X-Trace",
    "2B6962A94B7D348A58AA0FFAF29D77B0FDB087654D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=znjNJcjAih7nnc6mm4lh%2FLBS83zxIutkeeAQPpn62vfLZ77K2zDW4U7fYZwkDg2YL7FCwTPtxGml%2BMV1VDcD4jQOz0EM35RyDehsmBEfEysAH2N%2BvgbfItiC%2FaJyPJmp"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fbe2ca38cee-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "69f78d7d-0eae-443d-bde9-ff5eb2d6eb48",
    "X-Trace",
    "2BD9E049BAFF710AF0288BDE2EB5A28984D87054E5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7e2Ey6PTbYjiU%2BO%2B48katBDx8CJ%2BbqCiaBIV4481jXOtNFhI81gSg93L0jMBQpDl8iZHFsy8PMmcjyv5Q6ZQ4RP8OP0HLsSqEiOEKyQQSaAYiaLAyY4Rg4q2vQGjPtVe"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fbef97018c8-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3caf5ba3-a818-4888-a179-8d1f69559e22",
    "X-Trace",
    "2B606808647E515EA6B0D92E4FAC27AE41A86B4EA9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IEL8tdoLCXotWXOkfRoyVwd8gnyPHa2yvtVTXdUqDKtYqCpKyMmTQHD0K2ntReO1x44IbnDI8oHuQ6wNTukqSAVg6Yq43%2FRc4PMuQ%2BMBjfwmHk4UqChvAhIfFnYvvK4%2B"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fbfcd9417b5-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c8651481-0f59-4a99-8fa4-eb475bc26b65",
    "X-Trace",
    "2BA1416B530ED22C9F678C92F83002379534B178C3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=I8fit%2BAEW4Xk%2FJmB9HGmiolUHVYPFbYsm5J5gIdRYtzBolxzUV%2BZwNcA%2FwOnYK%2B2nTbVw%2FFZ%2FawDIHRwXJ6E%2FDIfWVR4uW7JeeaUN0OfOWTnVZpBhOuITXfwDJ%2FHm1xq"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fc0b8f717a5-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "97c0abaa-60c0-4c47-bdba-1d7c3f4afd36",
    "X-Trace",
    "2B06AC28728B4BD00F12FF1235BBC4F56AC571FCC8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Qu3DO2qFKTVueYOSqZzKqpNVUuKFPHeqsMPgiMZ64zZ6gTO1Rhx4Z8bikFH15xnoFO78jIvX%2Bb4EKigTuyrPBeSDxGxsKR%2B2iOoMbamUr1zPuQ6K4Wz5XR2FVgysAqub"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fc18b5e1a17-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "379afe16-0bbc-4de7-bc0a-bbae206dbcd0",
    "X-Trace",
    "2BADB3184ED8ADCF873362604067FD4C02449C55B6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5GdH7MyyBO2AISniiRejtf2qiQibrSZnZXX11uEStVkCpMrYO3tYuDhC4YjEM3pCCaX1kEILMFxEPpngJ8HBp4725rQQ6pkfHHpls16Lu3qQNCYoVySVGO3E8BrXx5ZJ"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fc299883344-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6f2efa34-e3d1-432f-b3af-fcf31c5ee510",
    "X-Trace",
    "2B3B9529E1BE840A9251265D515D5F34D78CA49540000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LagEBCdlQ2nOSl%2BckURfeNTmhFaCQBcru0XT9%2FqxQPCehfboGFmBbcihe3IeSnYV3q82OIdK3seOzWn4OR1zAh8u6p%2FOGkg6Gu3W6GzkJVThwdYka1N2V1uUE74iuh7D"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "c37acc0e-7f1a-4861-bf83-d1bd68de2a7b",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fc37a7be6b4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c37acc0e-7f1a-4861-bf83-d1bd68de2a7b",
      "X-Trace",
      "2B882C801843EEEFECFCCB055C7C655F707DD23E49000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U%2FFgjQQAIFckAL6JnET38eJ4gvQN%2FAC5icI9PUQw14DbuJQwk%2BGmnnKzw6Jiga8wVs225%2Bp6CUZEJG%2F7va5%2BuaYBMXFe%2FqulhXPtnpbKsZWGT%2F40vQjzh3NXvVEGwLWu"}],"group":"cf-nel","max_age":604800}',
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
    properties: ["domain"],
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 19:20:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fcd2cfc19c3-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "caca2ab7-b26f-4bac-80c9-1e9ccc256e9e",
    "X-Trace",
    "2BAACAD44976FAB23DC978BC6795CF3A6FC530A936000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NSElJHKyncy2y3TeGlM5bvXLfE%2FQPWtW93We14jQ%2BhOdsQbrYzYLjqsy3x%2FDBFHMjxMU26wyZSsmdJ3suRT7zm6NDSi6dfJcA4QZYTeyltvFTbA0%2FT2gSlRpC9rtcxpe"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104974",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user41.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104974",
            name: "Fist Name 41",
            website: "www.41.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104992",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user36.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104992",
            name: "Fist Name 36",
            website: "www.36.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104991",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user30.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104991",
            name: "Fist Name 30",
            website: "www.30.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105002",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user23.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105002",
            name: "Fist Name 23",
            website: "www.23.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105011",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user7.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105011",
            name: "Fist Name 7",
            website: "www.7.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104981",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user45.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104981",
            name: "Fist Name 45",
            website: "www.45.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104995",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user22.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104995",
            name: "Fist Name 22",
            website: "www.22.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104982",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user26.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104982",
            name: "Fist Name 26",
            website: "www.26.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105001",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user29.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105001",
            name: "Fist Name 29",
            website: "www.29.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105010",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user16.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105010",
            name: "Fist Name 16",
            website: "www.16.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104977",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user1.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104977",
            name: "Fist Name 1",
            website: "www.1.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104968",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user49.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104968",
            name: "Fist Name 49",
            website: "www.49.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104997",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user27.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104997",
            name: "Fist Name 27",
            website: "www.27.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105000",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user47.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105000",
            name: "Fist Name 47",
            website: "www.47.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104978",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user10.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104978",
            name: "Fist Name 10",
            website: "www.10.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104967",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user24.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104967",
            name: "Fist Name 24",
            website: "www.24.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104975",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user44.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104975",
            name: "Fist Name 44",
            website: "www.44.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104999",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user35.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104999",
            name: "Fist Name 35",
            website: "www.35.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104994",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user13.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104994",
            name: "Fist Name 13",
            website: "www.13.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104986",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user18.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104986",
            name: "Fist Name 18",
            website: "www.18.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104964",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user15.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104964",
            name: "Fist Name 15",
            website: "www.15.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104983",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user5.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104983",
            name: "Fist Name 5",
            website: "www.5.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104972",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user39.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104972",
            name: "Fist Name 39",
            website: "www.39.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104985",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user14.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104985",
            name: "Fist Name 14",
            website: "www.14.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104998",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user46.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104998",
            name: "Fist Name 46",
            website: "www.46.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105005",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105005",
            name: "Fist Name 2",
            website: "www.2.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104970",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user25.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104970",
            name: "Fist Name 25",
            website: "www.25.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105004",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user8.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105004",
            name: "Fist Name 8",
            website: "www.8.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104976",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user38.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104976",
            name: "Fist Name 38",
            website: "www.38.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104993",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user37.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104993",
            name: "Fist Name 37",
            website: "www.37.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104984",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user33.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104984",
            name: "Fist Name 33",
            website: "www.33.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104988",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user12.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104988",
            name: "Fist Name 12",
            website: "www.12.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104963",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user3.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104963",
            name: "Fist Name 3",
            website: "www.3.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104990",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user21.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104990",
            name: "Fist Name 21",
            website: "www.21.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105009",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user43.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105009",
            name: "Fist Name 43",
            website: "www.43.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104987",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user6.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104987",
            name: "Fist Name 6",
            website: "www.6.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104969",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user34.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104969",
            name: "Fist Name 34",
            website: "www.34.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104980",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user40.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104980",
            name: "Fist Name 40",
            website: "www.40.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105008",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user28.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105008",
            name: "Fist Name 28",
            website: "www.28.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104965",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user42.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104965",
            name: "Fist Name 42",
            website: "www.42.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104979",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user19.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104979",
            name: "Fist Name 19",
            website: "www.19.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105006",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user11.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105006",
            name: "Fist Name 11",
            website: "www.11.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105007",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user31.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105007",
            name: "Fist Name 31",
            website: "www.31.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104973",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user32.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104973",
            name: "Fist Name 32",
            website: "www.32.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104996",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user20.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104996",
            name: "Fist Name 20",
            website: "www.20.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104971",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user4.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104971",
            name: "Fist Name 4",
            website: "www.4.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945105003",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user17.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945105003",
            name: "Fist Name 17",
            website: "www.17.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104989",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user0.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104989",
            name: "Fist Name 0",
            website: "www.0.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104962",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user9.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104962",
            name: "Fist Name 9",
            website: "www.9.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
        {
          id: "7945104966",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user48.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:20:39.489Z",
            hs_object_id: "7945104966",
            name: "Fist Name 48",
            website: "www.48.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:39.489Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:20:39.483Z",
      completedAt: "2022-02-17T19:20:39.599Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fce88988c51-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a4d3423c-c002-456a-9d2f-5eceb2e0818d",
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
      "2BC6F3AAD772362EE06298C86FE82785DB349BFF99000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Dgdtoe2zZWJg5aCq2cQpONNovNHqgUnqA6uP4tGSV6ZwLApiZys4iHrI6vKNFhiPcdLNTUsuYAs4OK4T390m50ofvrT9Dnn4KZ2f0fQ5Ctxw3Sk%2B%2BBWtpsSsFwdu%2BQyL"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fcfeed48c33-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2241519e-eb41-44a8-a3ac-b8230ba85260",
    "X-Trace",
    "2B477157E10C596EEC19072101C442173865E4CD91000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XEbTUIJNbwS4c4cK1IWC%2FVkP9FuBpHZcVHlprmoLxPx0P2xAOqwSr1uZ3OCTK8WSsA5fjY4jI19s2G2vi%2FLdfX5yYaSiwzRpHAIiCZ3QrFlcFERxv1gLDtTb7lNcLvK2"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fd0dd5a8c29-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "76c3bd79-f6b4-4f96-8b7d-ce32d4345f4f",
    "X-Trace",
    "2B1A8AA498614B3469E6D37FEF9A358CA187B5D070000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AMnI%2BbH4DuQQGIQOxGqrD3aBo5xnnIjMid%2FfVI%2FKIRwrLEJuR06tT%2B4EFKq03TRLGqvs4vPKq0pWmp9HMTMd57KekQesPhTSW8f%2BmMSNLBVsbxycfwNSSRcSuaeGbiKY"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:40 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fd1aaf31a2c-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f4029f2d-9415-46f2-94b2-94bec74281cb",
    "X-Trace",
    "2BB6A090EA75DB5D56A7C4279089118AD99CDD7883000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZqzQVN0GMPEQa%2Fd8ngrvhRD%2FV50rDJ4psZSTZRmzb%2BNNhmQFfkv9qqIX%2BN8vDMwlBj%2Bh5K3%2FvcYiKzgBkBfWmlOMGCMxrbpvXqt5sSLqWO1wfHnSlVNlMx0Bh%2Bwgdsjf"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:40 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fd2ed568c63-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c4988d6c-bd33-4465-ac90-1bf1ea12e8c8",
    "X-Trace",
    "2BB9C369ABA61D1B6DBACC6B90B0CE6B0400142FD0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9e2XGiD1u8%2BEbqKm02uTfImT3CYTWVbyUOIAR8nlptM0oNK4Y%2Be4PDTHi1Dy0ql1vhsxuzkjKHshPyHyrhQQRIvXH2O72glQNiurSHMjjGGflWngiKU4JqNltU3whfKB"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:20:40 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fd40d9419e7-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9398211e-6ca0-4bdc-9eef-6bca5b5b9fba",
    "X-Trace",
    "2BD268237E6B066D6B9A45429B55497D53E92BC880000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uJzsBcGZXfP3h%2FJyUcWzf6sZJMSrkoYpE5%2BzFg7K6wa%2B88%2BY57rpO8370Y51Bi0m3QK6qRQZ8W8SE4nnIOtzbGQYuAVYTWQZI3Zb3HoZGcFCt3Enk%2F3XzgXWmf4yT4Rs"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 19:20:40 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df15fd4eec919fb-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b27fc015-32fd-4683-99e6-1f552266e032",
    "X-Trace",
    "2BF67ABD8C298D5691C05936BE7AC576EF8F11CEC1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rA8USA3Pii94yx3QnrW8iVjq94575kRh9Xe9GEUkii0Nu5Xs%2BAyoo0FNZRQJnZEP%2FJHR4pGShppSojAT74JJIEpRqyyen5FMqxvhmVWBN0za%2FehQ4f1vJZefYTh8u2kb"}],"group":"cf-nel","max_age":604800}',
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
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "1523d751-1021-41c6-9553-203b84172684",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fd5cbfc1784-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1523d751-1021-41c6-9553-203b84172684",
      "X-Trace",
      "2B59372376CAD419D0175ED3B6FA7D1B882AE4C8BB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E9RacWsrPhBbBDduK3fzjUkEf83U9YuUc9DneqyvufkwkWKp%2FBo7uU2Vx8lw9YNS7%2BaSWFsok5BF5xDMbjkbgSXORDJiG%2BfXxT9M3ZrKEVcCJASiwlZkdlzGLdpKP4hU"}],"group":"cf-nel","max_age":604800}',
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
      total: 2,
      results: [
        {
          id: "7945104973",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.915Z",
            hs_object_id: "7945104973",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.915Z",
          archived: false,
        },
        {
          id: "7945104984",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.809Z",
            hs_object_id: "7945104984",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.809Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fdeed8be760-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4c43147c-2d9c-47d4-9951-acfbb346e020",
      "X-Trace",
      "2B15D6811E7991D6EA8BA5153E5E322EE1F3F1573C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DHP6z3mCTjbAAuegWasEaTeRdLZD3U2tvg5mvLDYAb7qJDQf8dQZE1VqCDT5ULom4UIL%2B9o8SSsXJfIyGQ%2F3RlYnlg9eAhBb8IhaHSvsNsZMDFsrkrjlw5io8J0%2FxusI"}],"group":"cf-nel","max_age":604800}',
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
      total: 1,
      results: [
        {
          id: "7945104976",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.092Z",
            hs_object_id: "7945104976",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.092Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fdfe8b432e4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bf1c23be-d9ce-4851-90aa-8f4cd5fc528e",
      "X-Trace",
      "2B2FAB9CE3A0397B5CA72C56D2BF9200E3330440F1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rThelK6%2BSCe%2BClp0RX2wfYyjQlF9YWjM%2B1k5vFonTGTYhp6C0oMiKbW8TtbpQyma85cG6XuxsQ20HFAJNib2CxrMi9vwpXG6927LiUP5FgNpiZxlxMZisJRYRbDreNdm"}],"group":"cf-nel","max_age":604800}',
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
      total: 1,
      results: [
        {
          id: "7945104965",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.857Z",
            hs_object_id: "7945104965",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.857Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fe12edc8c2f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "caa2c1fa-829f-4194-8857-0abedfe29bda",
      "X-Trace",
      "2B909032AC77355DA2A58D5383825F1BD7B5B026A2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1qGqCCIgoLt52whhwCE3XDv%2BhBa3EbWl6bV72INpHxkecQznoK297H2xMzjnFAPDmD6q8nZGx05Gr6rCM2EgyD5NgLvVfUAg2nyy6KgE7WUXFAVIP3nfAJtKfV%2BRMHsx"}],"group":"cf-nel","max_age":604800}',
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
      total: 1,
      results: [
        {
          id: "7945105000",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.917Z",
            hs_object_id: "7945105000",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.917Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:20:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df15fe20f5b1760-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "48da7523-1b9e-4e56-aeba-9a9bf107b4dd",
      "X-Trace",
      "2BD9978BFCCFD24BC7879BE8942436A593B95A2C75000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BVJO7ZP6bY%2BBVP%2FQ07S0BS3u%2Bv8P%2BmYfWbfQao%2BYEJNrP4GYVil1PxPmCn467vpML5H5eupbgwOJn3Ni%2BpBBHpYUbGxH24YUp%2F5a2TKxro9cBA6NaZKO9BPu%2Fw4SHQEs"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104963",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.845Z",
            hs_object_id: "7945104963",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.845Z",
          archived: false,
        },
        {
          id: "7945104971",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.821Z",
            hs_object_id: "7945104971",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.821Z",
          archived: false,
        },
        {
          id: "7945104977",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.924Z",
            hs_object_id: "7945104977",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.924Z",
          archived: false,
        },
        {
          id: "7945104989",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.951Z",
            hs_object_id: "7945104989",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.951Z",
          archived: false,
        },
        {
          id: "7945105005",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.350Z",
            hs_object_id: "7945105005",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.350Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1609eefae8cc6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "24ae72a3-01e1-41ff-bba3-96b2e115f2c1",
      "X-Trace",
      "2BFC71CB8FBACCF88D42B348FDBB0E2E948136076C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YmedD90Iq8VKCdnaRYTotM1iFdtB24XiPZlXVQuDrqIq4l6H3GdN5zdy8a2zG%2BZ6Cx%2FA7f6AmZNKyBYbPD%2F2IPs2Xm74xEU7VSPPfecWnDgY799tYK9SkAkxGVLfphLq"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104962",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.810Z",
            hs_object_id: "7945104962",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.810Z",
          archived: false,
        },
        {
          id: "7945104983",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.456Z",
            hs_object_id: "7945104983",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.456Z",
          archived: false,
        },
        {
          id: "7945104987",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.951Z",
            hs_object_id: "7945104987",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.951Z",
          archived: false,
        },
        {
          id: "7945105004",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.819Z",
            hs_object_id: "7945105004",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.819Z",
          archived: false,
        },
        {
          id: "7945105011",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.145Z",
            hs_object_id: "7945105011",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.145Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160a03e9d198e-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "78a33de5-07d1-4ba2-b8ad-0ab516c4649d",
      "X-Trace",
      "2BBC073693076A87E0DBF956643C1B5075270880A8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VH6KXWJ2%2FpL4sbHKWMAUTY2ecI%2FcAq0dvWfQWqcEIKbRLOHQHz7I0oxEJ5zi3stsVodP43eJ65PZ0PqvRjQF4tHDZ%2BlBwYwGhR3sQW8AgFJb9Ww7jvTSO%2Fms%2F9kF3u2c"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104978",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.451Z",
            hs_object_id: "7945104978",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.451Z",
          archived: false,
        },
        {
          id: "7945104985",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.833Z",
            hs_object_id: "7945104985",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.833Z",
          archived: false,
        },
        {
          id: "7945104988",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.822Z",
            hs_object_id: "7945104988",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.822Z",
          archived: false,
        },
        {
          id: "7945104994",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.470Z",
            hs_object_id: "7945104994",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.470Z",
          archived: false,
        },
        {
          id: "7945105006",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.286Z",
            hs_object_id: "7945105006",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.286Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160a15d1c8ca8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fa819915-b8e5-4d1e-8e5e-0da342450841",
      "X-Trace",
      "2BCA25CB738CA137FC7A84E8E1B6458F0E50A39B78000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DnMlBigg%2FasNfgfoWW7vHUdqEfWg6G74lasWvPVD%2BgwPLfrp1pyiee2h3KSpQpCGf3mVesSkFicknjJj5haTBPEG9X6hgJr56jodMvINnmqxh6HmOKdx4NgORZJ9K1sv"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104964",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.924Z",
            hs_object_id: "7945104964",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.924Z",
          archived: false,
        },
        {
          id: "7945104979",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.922Z",
            hs_object_id: "7945104979",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.922Z",
          archived: false,
        },
        {
          id: "7945104986",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.263Z",
            hs_object_id: "7945104986",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.263Z",
          archived: false,
        },
        {
          id: "7945105003",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.826Z",
            hs_object_id: "7945105003",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.826Z",
          archived: false,
        },
        {
          id: "7945105010",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.357Z",
            hs_object_id: "7945105010",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.357Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160a26ab9334e-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f8878bb0-4fcb-4567-830a-0cda2a4d8443",
      "X-Trace",
      "2BC81AF7FDE1FDE325EC58F187235FC34E4B24A34A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5jrglORpA1ThJ%2F3YSGLHnJqCTq2h0S8LVdeH%2FNGZ3lTpyBzDwOiXGJEQ9vPNZ8tfpeUqrzfMzMTkkELvOd06oufqEARYIRjIpeeHs%2BrZq4BH3znyF6VuH6JyfW%2FFADQR"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104967",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.473Z",
            hs_object_id: "7945104967",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.473Z",
          archived: false,
        },
        {
          id: "7945104990",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.175Z",
            hs_object_id: "7945104990",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.175Z",
          archived: false,
        },
        {
          id: "7945104995",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.267Z",
            hs_object_id: "7945104995",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.267Z",
          archived: false,
        },
        {
          id: "7945104996",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.353Z",
            hs_object_id: "7945104996",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.353Z",
          archived: false,
        },
        {
          id: "7945105002",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.917Z",
            hs_object_id: "7945105002",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.917Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160a3591832c7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "37861d6e-921f-4ebe-8fc1-f76de8942014",
      "X-Trace",
      "2BE3C914A55BB935016244862A7CC0932D9C3F986C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ULBDHH7ceHexdvLZx9h%2FzgZgK115EmaFYpZVJ3TFquT6nqKJCUgz1ph1h0fDgPk2%2Biy4h4ykW1IemyxsdHg%2FwAb81xUOzFNb06TZ2jK46Vc8Fvwkg0c17edR1S5UFki1"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "342e749d-171d-44c9-9e06-815f4a32ad5c",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df160a459a28c4e-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "342e749d-171d-44c9-9e06-815f4a32ad5c",
      "X-Trace",
      "2B4FAB090EF353FDAB1E07163D5BCB23B3699AF153000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4DlSgJKOif34l2KKueppG87jzZfIgAECTadavdtMbGPdKbnF1ToGZ6vAinJGIxw99o%2BBV0iX2sn1%2BxzHZUKEc9FOA6qkLN0wildK5NowBgG9jSlA21Mhn7YAyrS1rJCh"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104970",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.114Z",
            hs_object_id: "7945104970",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.114Z",
          archived: false,
        },
        {
          id: "7945104982",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.915Z",
            hs_object_id: "7945104982",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.915Z",
          archived: false,
        },
        {
          id: "7945104997",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.146Z",
            hs_object_id: "7945104997",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.146Z",
          archived: false,
        },
        {
          id: "7945105001",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.176Z",
            hs_object_id: "7945105001",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.176Z",
          archived: false,
        },
        {
          id: "7945105008",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.143Z",
            hs_object_id: "7945105008",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.143Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160ae18b88c0b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ff9502d8-f9a5-4288-aa44-9e277cfc3a31",
      "X-Trace",
      "2BEDAB0DF3EC77A5257637F0A7EB67883A114FAD5C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YU0cvPR0g9cVmlm8KSNV16rRmsR0GCOWMUgZfOJjChwMWv00gqvR8wW4LyCcdhCMxPHd2G7a1612z4%2FY%2BCYAFB1BwMkflB6q9KGPMXpY0Y%2BLBxrlDhgRI4Q0Hw9bhh8j"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104969",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.831Z",
            hs_object_id: "7945104969",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.831Z",
          archived: false,
        },
        {
          id: "7945104973",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.915Z",
            hs_object_id: "7945104973",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.915Z",
          archived: false,
        },
        {
          id: "7945104984",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.809Z",
            hs_object_id: "7945104984",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.809Z",
          archived: false,
        },
        {
          id: "7945104991",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.245Z",
            hs_object_id: "7945104991",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.245Z",
          archived: false,
        },
        {
          id: "7945105007",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.962Z",
            hs_object_id: "7945105007",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.962Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160af8edd17e5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bf37bd44-41f5-4dc2-9475-81a7656e8ea3",
      "X-Trace",
      "2BD1F7655528F112C8D17826C039E07712307774A4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=onlKyCBDyxBpFATJvSu6hhWvvvmbXme8Fx3vpGFi1vPBeJlV9i2%2BFjKZUouRv4IHWpum%2BWG5jo5xo1EH12A9JPhQhYxZk%2FA4muuTW8gAMjLoO%2BQn5CbstcUVhEiFAAad"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104972",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.345Z",
            hs_object_id: "7945104972",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.345Z",
          archived: false,
        },
        {
          id: "7945104976",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.092Z",
            hs_object_id: "7945104976",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.092Z",
          archived: false,
        },
        {
          id: "7945104992",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.961Z",
            hs_object_id: "7945104992",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.961Z",
          archived: false,
        },
        {
          id: "7945104993",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.812Z",
            hs_object_id: "7945104993",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.812Z",
          archived: false,
        },
        {
          id: "7945104999",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.811Z",
            hs_object_id: "7945104999",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.811Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160b06c3815b7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8b7e27aa-a774-4538-80b4-fd938ad649b4",
      "X-Trace",
      "2B617B667F9717B92820B0D4FA47ECE4CED14D25EA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X34B8tkW%2BskUwblbsc1SQvqB0ObCjernX62GK20Vq7NVOjc%2FvSTXxw%2BZSZy7ObrvjzDaK1%2FsultgX37PUnllQSaFPI3WA55au9nHpku3arfRoX2BPWUxDWHJuzUyVVEp"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104965",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.857Z",
            hs_object_id: "7945104965",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.857Z",
          archived: false,
        },
        {
          id: "7945104974",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.830Z",
            hs_object_id: "7945104974",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.830Z",
          archived: false,
        },
        {
          id: "7945104975",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.810Z",
            hs_object_id: "7945104975",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.810Z",
          archived: false,
        },
        {
          id: "7945104980",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.920Z",
            hs_object_id: "7945104980",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.920Z",
          archived: false,
        },
        {
          id: "7945105009",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.840Z",
            hs_object_id: "7945105009",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.840Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160b158c18c96-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "12213d48-2e69-4d91-9acf-86bf92391816",
      "X-Trace",
      "2B65C3FDBE36F2F30A638D4DB73BFF4EC2E7088312000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rRoJjTTX4x6w1kU0L0J8547cyT%2FOmryG2oJpiNY55YzpRh6R4aoqk8l6qxFOfw7EtLFwmahCUmjTMweafIchOuPLbUjby3hlZhTxtQz875dtmLcBOOWZg3qLMfWSIRJZ"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "9604bb66-b91e-4578-b38a-cb43cf38eccf",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df160b248c50cd5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9604bb66-b91e-4578-b38a-cb43cf38eccf",
      "X-Trace",
      "2BF471DEF70BD3B0F58AA66F2E7B7B72773CD6DF8F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p1qww5COJ1%2BddPI4igMxLOjGpwrua16%2FeRxZFjowzecyxdp%2B%2FoMYojWWW2PbDs7EAbknzWwrDS6ZdPhebDR19mZniVnJim4uSELne%2FvxfwSluMzzw7BeBqzqQDmS47Wj"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104966",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.248Z",
            hs_object_id: "7945104966",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.248Z",
          archived: false,
        },
        {
          id: "7945104968",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.813Z",
            hs_object_id: "7945104968",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.813Z",
          archived: false,
        },
        {
          id: "7945104981",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.111Z",
            hs_object_id: "7945104981",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.111Z",
          archived: false,
        },
        {
          id: "7945104998",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.853Z",
            hs_object_id: "7945104998",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.853Z",
          archived: false,
        },
        {
          id: "7945105000",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.917Z",
            hs_object_id: "7945105000",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.917Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160bbfdc88cd4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "60331652-fcdc-4428-a528-fa588ae61d2c",
      "X-Trace",
      "2B241AE9E2F9B17B3A368D1A0545A02A41A0272169000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FqjT9lCGp0twEUzqdaCgWvQk%2B2TmpbjZvnzv6avJ%2FSqMu%2FfZtdK2K17k0ySpvJe41tEDmSdeisSaVXABoGPJxbUF4vIYM1FdxdKGzAwM8G%2Fjnry35La8cK%2FxO2lLIHd0"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104963",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.845Z",
            hs_object_id: "7945104963",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.845Z",
          archived: false,
        },
        {
          id: "7945104971",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.821Z",
            hs_object_id: "7945104971",
            name: "Fist Name 4",
            twitterhandle: "DEMO",
            website: "www.4.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.821Z",
          archived: false,
        },
        {
          id: "7945104977",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.924Z",
            hs_object_id: "7945104977",
            name: "Fist Name 1",
            twitterhandle: "DEMO",
            website: "www.1.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.924Z",
          archived: false,
        },
        {
          id: "7945104989",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.951Z",
            hs_object_id: "7945104989",
            name: "Fist Name 0",
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.951Z",
          archived: false,
        },
        {
          id: "7945105005",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.350Z",
            hs_object_id: "7945105005",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.350Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160bcdfe619b2-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "79373789-3948-4bee-b4ea-374578932627",
      "X-Trace",
      "2BB2F86174C065E93E829B3C25781C93417C8C14C3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9SEvcHBQJps8ROipctAqMvGFoohus%2Fmb9d1MgQ%2Bn6YI8qQHjexTdbuG3Peypkf55%2F6Rk3M0nQ24Y6wJLiQxvrZRLnCGdMyM%2FinR0Wn2vpsSMHvYD1GfdcLhdHkvBVD0O"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104962",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.810Z",
            hs_object_id: "7945104962",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.810Z",
          archived: false,
        },
        {
          id: "7945104983",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.456Z",
            hs_object_id: "7945104983",
            name: "Fist Name 5",
            twitterhandle: "DEMO",
            website: "www.5.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.456Z",
          archived: false,
        },
        {
          id: "7945104987",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.951Z",
            hs_object_id: "7945104987",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.951Z",
          archived: false,
        },
        {
          id: "7945105004",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.819Z",
            hs_object_id: "7945105004",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.819Z",
          archived: false,
        },
        {
          id: "7945105011",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.145Z",
            hs_object_id: "7945105011",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.145Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160bddaa115d7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3400f093-15ba-406a-9ba1-5d9499cfb5ab",
      "X-Trace",
      "2BCF648AFC12C645B1133A1F268B3F8ED924217CAC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HDhWH5y0jurJ5Wa9DLHCJXjlK47vydZ4QwQw90eHHv4%2BhrabEGEhlcvCg4VNX8xfJoAXqHP5NvrF01%2BL9%2Bhfbjvdn%2Fx0df%2BBoi%2BLPfaVa0%2BylE5mfUSRtDZ4nhxFzWcj"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104978",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.451Z",
            hs_object_id: "7945104978",
            name: "Fist Name 10",
            twitterhandle: "DEMO",
            website: "www.10.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.451Z",
          archived: false,
        },
        {
          id: "7945104985",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.833Z",
            hs_object_id: "7945104985",
            name: "Fist Name 14",
            twitterhandle: "DEMO",
            website: "www.14.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.833Z",
          archived: false,
        },
        {
          id: "7945104988",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.822Z",
            hs_object_id: "7945104988",
            name: "Fist Name 12",
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.822Z",
          archived: false,
        },
        {
          id: "7945104994",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.470Z",
            hs_object_id: "7945104994",
            name: "Fist Name 13",
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.470Z",
          archived: false,
        },
        {
          id: "7945105006",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.286Z",
            hs_object_id: "7945105006",
            name: "Fist Name 11",
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.286Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160becdba8cae-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "33f9a3e6-0095-4523-99cb-81895fae5c22",
      "X-Trace",
      "2B9E3DA7EB94640D82C91B852D074A8F69A8FEE981000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7H%2BennoIuwI1FDaNXIkJler9HMGf%2Bx2VQK0moWR95ENSGP4CRQj6yG%2F2cjCLTsk6Fi%2BNdvSoQ%2F8CBs%2Bzs1%2B86WccvtcfXRlizYu2wBvxyDV01upx8z67KsccFLqhKulx"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104964",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.924Z",
            hs_object_id: "7945104964",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.924Z",
          archived: false,
        },
        {
          id: "7945104979",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.922Z",
            hs_object_id: "7945104979",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.922Z",
          archived: false,
        },
        {
          id: "7945104986",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.263Z",
            hs_object_id: "7945104986",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.263Z",
          archived: false,
        },
        {
          id: "7945105003",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.826Z",
            hs_object_id: "7945105003",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.826Z",
          archived: false,
        },
        {
          id: "7945105010",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.357Z",
            hs_object_id: "7945105010",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.357Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160bfad2f18c4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "74c0228e-f0a8-411a-94cc-39e358c9e666",
      "X-Trace",
      "2B5501DB60A40B5D473B9AC4A63A46FA63656DA38A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sj4AS4stl8h%2BjhMSV3FyCE%2BQYYW9AQkxwHYYuCCEb3lO%2FEq5PXTj9HcikfkBzKth4atkxYnWtDYdSb2ZPD%2FWQ4TKaEvRr%2F6f30%2FwwnDs3QjAUo6xB8zirkxMQth%2BZdAR"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104967",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.473Z",
            hs_object_id: "7945104967",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.473Z",
          archived: false,
        },
        {
          id: "7945104990",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.175Z",
            hs_object_id: "7945104990",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.175Z",
          archived: false,
        },
        {
          id: "7945104995",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.267Z",
            hs_object_id: "7945104995",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.267Z",
          archived: false,
        },
        {
          id: "7945104996",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.353Z",
            hs_object_id: "7945104996",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.353Z",
          archived: false,
        },
        {
          id: "7945105002",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.917Z",
            hs_object_id: "7945105002",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.917Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160c0891519db-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8f241fbd-8d8a-42f4-ab14-af899929cf61",
      "X-Trace",
      "2BAFE3C458D11AF85809EFB3AB9B147481B73F7EEC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BoN%2BS2Inp1uiVEtDaLWJIzuHs36d22FdatdS48sFMWGatNTnnRsiF04DAkchhEEjbkhs5j9JsgUO3zJcv9MT7mmGrIz7ttrs1dwjS0q8SpoKeKQ4qMDTi1XiHp%2BJ9z%2BK"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104970",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.114Z",
            hs_object_id: "7945104970",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.114Z",
          archived: false,
        },
        {
          id: "7945104982",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.915Z",
            hs_object_id: "7945104982",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.915Z",
          archived: false,
        },
        {
          id: "7945104997",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.146Z",
            hs_object_id: "7945104997",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.146Z",
          archived: false,
        },
        {
          id: "7945105001",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.176Z",
            hs_object_id: "7945105001",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.176Z",
          archived: false,
        },
        {
          id: "7945105008",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.143Z",
            hs_object_id: "7945105008",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.143Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160c18b6c8ca5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "41c5f2dd-8a10-4e90-b33e-5b5dac22feac",
      "X-Trace",
      "2B05B11E9F7A0B6AB069294C08C0992B3F541200E3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HNKEKzxIFB%2BeQ9V%2BBBP9z3y81LB9ORV0%2Fe9thA2sPwQpdhA%2F4HHrZs18OFVm%2Bud3svBASQezjuz6R6mTUcgXW7yC3arCdnLlUhWeSkxvknjdO%2BCmuJwfKEWleOcRoAbP"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104969",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.831Z",
            hs_object_id: "7945104969",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.831Z",
          archived: false,
        },
        {
          id: "7945104973",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.915Z",
            hs_object_id: "7945104973",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.915Z",
          archived: false,
        },
        {
          id: "7945104984",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.809Z",
            hs_object_id: "7945104984",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.809Z",
          archived: false,
        },
        {
          id: "7945104991",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.245Z",
            hs_object_id: "7945104991",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.245Z",
          archived: false,
        },
        {
          id: "7945105007",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.962Z",
            hs_object_id: "7945105007",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.962Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160c29864e6dc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "74d177e8-6fe1-4674-99bc-90108354c4ee",
      "X-Trace",
      "2B4996692D036F2AEABD6D7E19352597719E4DC8C4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a69O8o0Eo%2BHlhPNhSkIhMfdR8rzATwncEunGroWtkrtMYVBN6paaDhU7UjvPlc0tD0%2BKrDay%2BLASqZEVE61V7gBiZRLp%2F2694Mk2SFB2UKC1233Vb7wTSPaESg0QwtM9"}],"group":"cf-nel","max_age":604800}',
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "9f3b4047-787e-428b-8f57-ad5ade258f27",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df160c40b3532dc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9f3b4047-787e-428b-8f57-ad5ade258f27",
      "X-Trace",
      "2B8BB6ADE63E0BA88D40E30F318682BC88EE0D9CFF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J9PO16Vo%2BNdW2WnL1tPtkEDXKkUyQsJfJFH%2BowFNWJIECLxnY%2FnPQ6r0XLIlzSvyc%2FAFNaeHq2F3y9AR3Zfi2Nl%2BQS%2BQ4mB84AAStDWug%2BoJykoA%2F%2FYOXFFDR9e%2FOA4P"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104972",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.345Z",
            hs_object_id: "7945104972",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.345Z",
          archived: false,
        },
        {
          id: "7945104976",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.092Z",
            hs_object_id: "7945104976",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.092Z",
          archived: false,
        },
        {
          id: "7945104992",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.961Z",
            hs_object_id: "7945104992",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.961Z",
          archived: false,
        },
        {
          id: "7945104993",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.812Z",
            hs_object_id: "7945104993",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.812Z",
          archived: false,
        },
        {
          id: "7945104999",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.811Z",
            hs_object_id: "7945104999",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.811Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160cc0b2c78d0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3654a49e-fd4a-42e7-ad11-a1691bf73487",
      "X-Trace",
      "2B933591A03BFC79B8ABE51D2D432D49D300464D75000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bBDr6EOe09hXq6GU2mhyEGi3%2BSeL471kE4fk3gcPAojyq563CSkFXsUr3oWzXI18hackFQP8Uu1sqNevYjPwwikFiAYparp9yb1R9XhsNYQX1eYdn4ekeERTHCod%2BKdv"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104965",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.857Z",
            hs_object_id: "7945104965",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.857Z",
          archived: false,
        },
        {
          id: "7945104974",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.830Z",
            hs_object_id: "7945104974",
            name: "Fist Name 41",
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.830Z",
          archived: false,
        },
        {
          id: "7945104975",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.810Z",
            hs_object_id: "7945104975",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.810Z",
          archived: false,
        },
        {
          id: "7945104980",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.920Z",
            hs_object_id: "7945104980",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.920Z",
          archived: false,
        },
        {
          id: "7945105009",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.840Z",
            hs_object_id: "7945105009",
            name: "Fist Name 43",
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.840Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160ccf89fe845-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e5b06862-f341-4ab9-89a5-8146fe5d89b0",
      "X-Trace",
      "2B39BBD1A921D8E3E2C2B93D2A27C5873CBA1A0047000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uFuL8q4K23JNaCFWSjVWph4etIqiOq%2BCbDuB1QJwg76Mwg5%2FhY0qtK6I%2F0AXBWmNE%2BOyJP9cJRkCn944dNwJnln6F0Rlpb4wsCnOZ3rZ0PeDrnVmV1LYiAEeNlB1nNBA"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945104966",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.248Z",
            hs_object_id: "7945104966",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.248Z",
          archived: false,
        },
        {
          id: "7945104968",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.813Z",
            hs_object_id: "7945104968",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.813Z",
          archived: false,
        },
        {
          id: "7945104981",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.111Z",
            hs_object_id: "7945104981",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.111Z",
          archived: false,
        },
        {
          id: "7945104998",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.853Z",
            hs_object_id: "7945104998",
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.853Z",
          archived: false,
        },
        {
          id: "7945105000",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.917Z",
            hs_object_id: "7945105000",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.917Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160ce5ea80cc1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "12cc7799-3a23-4706-8ec2-930360145e64",
      "X-Trace",
      "2B3183B5AE9B993BF4BCAEA7A9EA0EC7E207A7869E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Af3HhE6yeK1Hb7uu06DYsVI1hADU7Lk6vw9E9nQX7BHBeB7A2MYuSwOyIK7UASXRhUFqCCaglahr7ZyC84S8rFwPQQUtDpa%2BNvMN5BN9CVoe%2BcJQfkjWA%2FetrDvceft2"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945104963" },
      { id: "7945104971" },
      { id: "7945104977" },
      { id: "7945104989" },
      { id: "7945105005" },
      { id: "7945104962" },
      { id: "7945104983" },
      { id: "7945104987" },
      { id: "7945105004" },
      { id: "7945105011" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:21:20 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160cf68e21a13-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9bd0872d-b188-4638-9ee4-300ce5bf005c",
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
    "2BEDB49B45B4DDCA5EAD6217DC14B84FB88FCB3EB0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6%2BVOOkGYG%2BS%2F9GS8cXJMN1wyAHliA3zNgAIobCvESQY2H1yw8Bqz4W0OZszVv7pXePuazy%2F216rJxm9kYQIi59pv37MikxzxwPIGVRSHl6ZuoUY6zC2dhWZlwwiYmmGO"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945104978" },
      { id: "7945104985" },
      { id: "7945104988" },
      { id: "7945104994" },
      { id: "7945105006" },
      { id: "7945104964" },
      { id: "7945104979" },
      { id: "7945104986" },
      { id: "7945105003" },
      { id: "7945105010" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:21:20 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d0985c8c63-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2e3c585f-cbcf-4800-9d0d-59065a383ed6",
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
    "2BE5704F13C98EE6DE67AEFCD9E2A8D043901C3A47000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0H1yKbtY9ma%2B6qZrMcoXKgw4SHlTfQHJeRy3OPGeisIOjtwK6DxIgG2W%2FssAIQNDnrEPcTyt%2FueJXLSvsNv75mtJ0M33drn1E94oncWCkumwG150jfNB7F18Q9ml6PuF"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945104967" },
      { id: "7945104990" },
      { id: "7945104995" },
      { id: "7945104996" },
      { id: "7945105002" },
      { id: "7945104970" },
      { id: "7945104982" },
      { id: "7945104997" },
      { id: "7945105001" },
      { id: "7945105008" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:21:21 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d1bb818ce3-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c233c1a1-472c-46f7-8411-bc1a7c5f4f4c",
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
    "2B519B3F2E4AA0A2C0A8B50A65489E14C156585A3E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NQhckV3FGxyeFghHcR7H12w74ie%2FsAguYWXLZ%2Fg3iuO%2FqjUFpRraNMSglzCuuueSHnGuCqPwSSpSvRjoLqtV%2FR%2BrG6q5XZTy%2FOAs3TiuYMelw7l%2Bo5FKWF24NYGed7hA"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945104969" },
      { id: "7945104973" },
      { id: "7945104984" },
      { id: "7945104991" },
      { id: "7945105007" },
      { id: "7945104972" },
      { id: "7945104976" },
      { id: "7945104992" },
      { id: "7945104993" },
      { id: "7945104999" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:21:21 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d3fd2fe710-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "22ec11de-7a62-43c0-8be0-a45cf3e2d2e8",
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
    "2B542EAB5842EEACEB607038768876D1329E72AC80000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p6mZvaMdsKe40ioe3i84RkJE74FE7eGtRfdIt0d3UpBJQSuRw5j0mkBWVQAd6a5UotmkbneWcQRnZLpbTjtzfgofMhro0EYYRTcKwyAQK5eUDHpTkLwsiG7CWFDeBC9U"}],"group":"cf-nel","max_age":604800}',
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
      { id: "7945104965" },
      { id: "7945104974" },
      { id: "7945104975" },
      { id: "7945104980" },
      { id: "7945105009" },
      { id: "7945104966" },
      { id: "7945104968" },
      { id: "7945104981" },
      { id: "7945104998" },
      { id: "7945105000" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:21:21 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d508d819eb-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5b56a91b-32e6-4e85-92f5-fbcac247a1f9",
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
    "2B87F748E90A7370E6E06AAB36DF1D3502A2E20652000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1EL7aD11EkAPiS0%2F0my2fDx7l9njOGt0FelVJZx3jPh98c3PA7pJVCBAQNPnjVp1i2eVr3yoFa0AkFIEJ3f4%2FDYrmM%2FIyUzTiKa88Z1cj0fV2NJ3q1o63nhRCnZTLZhr"}],"group":"cf-nel","max_age":604800}',
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
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:02.441Z",
            hs_object_id: "7945164639",
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
          createdAt: "2022-02-17T19:17:21.592Z",
          updatedAt: "2022-02-17T19:20:02.441Z",
          archived: false,
        },
        {
          id: "7945046052",
          properties: {
            createdate: "2022-02-17T19:19:29.445Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:00.199Z",
            hs_object_id: "7945046052",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-17T19:19:29.445Z",
          updatedAt: "2022-02-17T19:20:00.199Z",
          archived: false,
        },
        {
          id: "7945174676",
          properties: {
            createdate: "2022-02-17T19:20:02.581Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:07.357Z",
            hs_object_id: "7945174676",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-17T19:20:02.581Z",
          updatedAt: "2022-02-17T19:20:07.357Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df160d638238c4d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "307640b8-79d9-4528-b3ec-eab3c579af12",
      "X-Trace",
      "2B847A0450B94218F995710CC2B583DFFA40BB9800000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Jvx12VG1f9f1IyzfTsS6tBnHdcHobsAzMIvxH08fKslMg2pG3t3uRuiEy2dfKfMBpYRlUffTnWuLNJG4w3ckTLTawMK7X8oUW2okXlX9Ex7jzE482l0vzXk7xYVcZqxF"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "7945164639" }, { id: "7945046052" }, { id: "7945174676" }],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 19:21:21 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d719688c5d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "36687566-8be6-4554-9d37-4de3dd0bc3ca",
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
    "2BE00A4B211A2E644447392D750748401E6BFFB4DA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bSIKfg7MjqThV9luufptA0EhlVPfocO72HRjbNl6GZcqAXtB22KB1RhZnwCfx29m%2BK4yrqqUAOv4FYFPlx7gR50gISi%2BNHuU%2BgzjHhPylAssfyr3Go58VLg26HTW00W6"}],"group":"cf-nel","max_age":604800}',
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
    "Thu, 17 Feb 2022 19:21:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d819a31996-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c52db9e4-23e8-4d39-817d-a106a7afefa4",
    "X-Trace",
    "2BCA0BB1C87BE5B5851739D11CB537DDEE45D9E5AA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hPPN9VSLfpHRpqPOeSgfAG53OYiVwT4K8yoDZZCMJY%2FcO4pMde%2BDSHbd1RpC105QeA7pXLRDYT628x%2BGn6WujaT7cvHT3bX5AVSLmErh%2BFH9VFt4yrcmH8jLB%2FTfWXVP"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
