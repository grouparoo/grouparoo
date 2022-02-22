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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:09 GMT",
=======
    "Tue, 22 Feb 2022 02:34:54 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df154d2888c8c41-EWR",
=======
    "6e14d16419482749-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "bba0da2b-18c7-49a3-85c6-9c36af55fc93",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248712",
    "X-Trace",
    "2B918665C6064F639FED8649EA1B706AD1E45ECBF7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ra1OgyhnQFxCJ08%2FkmzKk8Jd5%2F90caXv2ckfe0FWOxFVzPZuMGntS1eYnwOXXNjVICSBzEUUexPoe9Ax8OMcdx6rVzqLaaGPd%2FZ%2Br1%2BSaWsGty9UR%2BY6hKWozjUHX7iU"}],"group":"cf-nel","max_age":604800}',
=======
    "9c7e42c4-de3c-4e14-8d71-69bf0d73cdd9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249381",
    "X-Trace",
    "2B85835E0024C4EF84EC0E9D45027B1108E53AFB1E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2QIjutJUrSzYlX8bsDUcrNpF9%2BW93oVLtePhZRg1o%2BCsAIJYTmkuJ%2BErQc4vdeT2PgbAhKbhb%2ByTkKwLyxiDD%2BFKMhHkAPrmy0tNPn9Ja68TjHgBuztzy6leduX9kmze"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:10 GMT",
=======
    "Tue, 22 Feb 2022 02:34:54 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df154d3a9b032dc-EWR",
=======
    "6e14d1686e14e074-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "ab90272d-f5df-4c02-90c8-b6921d22bcd0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248711",
    "X-Trace",
    "2B2CA4304001595E7008A1AA283453A21DB1002E7E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8nnKcQyN3PaTbReVYS%2Fx%2BttgZpaEQKbDbBITECB2JICHOUSHdRMI1%2B4%2FHzt1PYtkXD3o%2By125pkTGl%2BUcz%2BLPQt7bW0G1QKpuJ5hIzWbQ9G%2BsrEB2yPDzya9h2mC4bex"}],"group":"cf-nel","max_age":604800}',
=======
    "9849f7cb-c045-4ed7-891d-048d2aaff182",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249380",
    "X-Trace",
    "2BFDB3256BA6E2EFAE38EA4EC0745C0B2FDC87808F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EvB08fQgOTOZpIaNlj4HOcGQ%2B3F%2BanxoGk%2BSeBF9exMma9dR%2FsLRFoEn9b79xIyozs9kfGf%2FlmzuO1oIbiKrf4OQ%2FDKwxBPJrBswfw5zuXnfyLG9B3PIo3ljd7%2FfJ9Oa"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:10 GMT",
=======
    "Tue, 22 Feb 2022 02:34:54 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df154d6bf5b1a40-EWR",
=======
    "6e14d16beb21cf9a-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "41340d3b-f348-462c-82bb-1b9b1eb6a100",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248710",
    "X-Trace",
    "2BEFC869AEAEF352C09A29C150F0BDC24956CB5528000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FNfaBj%2FrpWGGrOyWmRDyHn0xB3%2BKtSLXCmZvtZdmV26KgdHflV5KrmKFnJd%2BY8R9rWUh0J4SmfHu7GrB%2FP3AsXcQeM84N0XR3rV5yt%2FuEKrwYUxbvw8ByqiSt8ivvVGA"}],"group":"cf-nel","max_age":604800}',
=======
    "36e3fcd8-2d96-4a5f-b64a-a13c4fc8c4bb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249379",
    "X-Trace",
    "2BF95D35FA285C658C77F39CEA99C361E32EB576EB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5Uu8ziPyfxHhIhfHHUr8GEqJxN6m0U6xktDh0cdhD9pwRUaMSb5VSL%2FiiYvQeOGPzn%2B8iNuIKpVsRqQa405aZFe6HaBVOvV%2FqqK7skypIV3uczL0E9QhNnwr1xblwuvb"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:10 GMT",
=======
    "Tue, 22 Feb 2022 02:34:55 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df154d7fce68c4e-EWR",
=======
    "6e14d16d5cb8275b-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "add3d394-89b7-4a3f-8369-330a41066d65",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248709",
    "X-Trace",
    "2B8DC642C8279270CBC380E9ECC4CF19E3E4AA89CD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q7%2Fz1xBAbGb0xyJWJmRoXmwFrSYRMpRpykdx8GV%2FI%2FGrsQwZ%2F%2BP0AKWBqSUGRd8Fsrcxml0y5JxCIDkue01nxiSYF0KNwOyUj1YQsl%2ByyydlieMav13gFCxbj8siL0u2"}],"group":"cf-nel","max_age":604800}',
=======
    "4d3707c9-2a97-407a-8306-a60067619f8c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249378",
    "X-Trace",
    "2B1DB24CB8B42E27F3174C4F6D8CFA3CC447437F2B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Jd1Gq5LBcEoF%2BQ1NA%2B2u5bk%2BW9YoZPYWdEYCsPud%2FKTpeAUIRPPF%2FeWbzQjbRqQGZb5dVN5zu0A3ur13VlNHJMy4hT9EovAMtt9yFtthbXNGuAnx0fCrfe764x5wYgRT"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:10 GMT",
=======
    "Tue, 22 Feb 2022 02:34:55 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df154d92d1a32d3-EWR",
=======
    "6e14d16ebe05e074-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "1a172499-cc14-49ed-8630-1a763f6dd943",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248708",
    "X-Trace",
    "2B8C1963DD74523BBA7093FB0F8E64A9BA0ECACEFA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OCyzLfEYpnxhLgTFKY74bbjw2vpXZj2joY9zv9681S8LfpdvLfyFCytRio8iwXcq%2Bv%2BYerfsF%2Bq4jIntzqq%2F16%2B%2FuxZYOo%2B%2FrtL9pjPKJVYXz6NEAA3AfaFAuqtlhTDB"}],"group":"cf-nel","max_age":604800}',
=======
    "f9504ce1-9926-4ada-ac78-ddf68b2d70ce",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249377",
    "X-Trace",
    "2BE7782FF671527E812B4FD5A2B84A254A245598F2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HEgTz46Xrp5WgOL9NORePJ3OK%2F%2BKQml4ejvRdC3SQgKML3KYytzkz8Miw9vfTgl4bDmmWMB2nMPd4VYAM%2FB5PHHQFDK5ArpztwrKWoHSCUeepr1Yx%2BnQwy5EjsoxrG%2FC"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:10 GMT",
=======
    "Tue, 22 Feb 2022 02:34:55 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df154da78128cc0-EWR",
=======
    "6e14d171e9bee084-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "3b9f0d96-141d-418f-b415-a186ece5b7ab",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248707",
    "X-Trace",
    "2B8E57FA9081046FEE133A239228ECAB0C40B1A6E7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zF9rJEHtg7%2FxJv12zLE94iXXj%2FPlyqqX%2Brzmhyqnmk9ER4zn50ALRp8A%2Fx8fD3x2UYtnApaJFA302jWwisvMWl9gZEvvyS2yJbkQN%2Fv6AX17qk5eTkE8CVKTbKUuWuv4"}],"group":"cf-nel","max_age":604800}',
=======
    "a41f77be-fec8-4977-9f0a-14c749b4c5ca",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249376",
    "X-Trace",
    "2BFFBA3EB6906189466BFC9CC68113ED0BEAFEF40D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9Q9f5FeAFLuzZ%2FiNYA32IsLaUkWe1dzN7Kk5QP7OdRAQ1Am9uBPDBQxtfke%2FYmSppNPfUR%2F6McwAL93nFPUpunlYpFvl%2FW%2BiYQWFyZmqlNufyakp4UQcEDkzy5MIoPCu"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:11 GMT",
=======
    "Tue, 22 Feb 2022 02:34:56 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df154db8b6f189d-EWR",
=======
    "6e14d1733c7c2749-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "33734877-9ba6-4efc-a9b8-b856a42a9f66",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248706",
    "X-Trace",
    "2B811F9938617E795A177745A52A0F67123FA6EE58000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7og1l4D%2BbXnpWybwbe6%2FpXMBYwzcMW0Y891LAAj700FvUfxgLCU9jUSeb7Bw85ybY8%2Frt6gSiWIAuW2NSc%2FRCUh%2F6yQxInP8a8uzbXSE%2B930lK8NZM4%2FlLRBAg7OA6Bp"}],"group":"cf-nel","max_age":604800}',
=======
    "3059652a-4f87-43a2-b353-0aae151ccbda",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249375",
    "X-Trace",
    "2BF378F43FA940BE958D96DFD7ECB44E01D1D3C6D7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w3TgjAkbWm46Ozyg%2FpupLmRpHoKdfZjgRCfpF0iZA1T3SYhkqHB2JTeTXmPULjg2IqOsK7VHw%2FTIjslPeVEVDsyEGsXiT3DjS%2F%2FTO5dekwiths6Do%2BpoSBxdD179u64Q"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:34:56.198Z",
            hs_object_id: "7978135116",
            name: "John",
            website: "grouparoo.demo.com",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:34:56.198Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:34:56.187Z",
      completedAt: "2022-02-22T02:34:56.248Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:34:56 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df154dc5b06195d-EWR",
=======
      "6e14d174ad36e084-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "6c07f246-ec6e-42b3-b339-eb372e3ec284",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248705",
=======
      "ecb54f8c-2e90-4b3c-a57a-9d6d9f7d01ab",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249374",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
      "2B694F1297ACB07CCDA1D681E913D83E9B5CD15584000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q85shjmp7IA9fSpiJYUzVEgCOP5UJYT6srB9dQxiyRcNoUaeIhxcgjoR9H6cnmwCZvXP3LPetY3d%2FUAUPR2ck8XuLQCP1uUFuE%2BY5KLaWKcaxNsRfoP7%2BF2fYWcjIOhX"}],"group":"cf-nel","max_age":604800}',
=======
      "2B630783D8C9AC6AED62342C8F884B3CE744B013EC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=C2ng1bBgf7thcAoU%2Be36qNpQUZvE6VcaFuzBBrQwE0EKL0NFQu6BEn%2F7bIiXCfxvV2PUBUYrWuyMApAtfd7AJcD49BLhQLMmYoQPavjYcx6OirAsHc2dCjz98ct3fjUa"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:11 GMT",
=======
    "Tue, 22 Feb 2022 02:34:56 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df154dda9f78c23-EWR",
=======
    "6e14d1765aaf2755-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "4de87da8-4d87-452c-82af-ac8ab8fbd554",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248704",
    "X-Trace",
    "2B7D07483D0A903A720B01B75BD8E844BF700F79A1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=55DZssWRklXsOwsFl4g2FhknJ2M3y%2B4FfK3h8xK9ElToNy9ZDEeXdv5tW08LwpqmYyuWE2%2FtR0usnHEGAZpmQWRaWz%2BSPCPunE0tVXuiyMQdg2pfuaZpwSwNmQx%2BTfl6"}],"group":"cf-nel","max_age":604800}',
=======
    "efda49e5-9963-4c27-8e5b-f7c2fbb15aa6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249373",
    "X-Trace",
    "2B0F83824DB15C64191A4A87FB0F71A969F5CE2ABE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LuJTJ7xkn0adgZyhNemQRy1qjzWCykLT%2FIumroF3%2Fed5LquvgS9ADVygWd0NbItpqAfg8Mn2jiTo4IUQaqhYy2hnhqxTjUKeBOEUWoOL1WR5SdidgC7%2FZGXzEy04wp%2Fg"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:34:57.723Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:34:57.723Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:13:41 GMT",
=======
      "Tue, 22 Feb 2022 02:35:27 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1559a5f9c186d-EWR",
=======
      "6e14d2334cb5cf9a-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "c72f530b-44d9-4c2e-b6f0-fed8716cf493",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248703",
      "X-Trace",
      "2BBE9110B8EC8B026AB78E5C4C3FC7EE12474732DE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=I9Huigqhoph3TEjJjbJuDLMNlaSv%2BhkVqW77hY92bwdoMktw5bXDaUxyOFnjeFZ3PY68KTtJVcmUaSGYiTi4mMQgm3svc4oTDmtsd%2BDix4QZ7f8Kq8qyyoga9vTiHWf8"}],"group":"cf-nel","max_age":604800}',
=======
      "347c2ea1-20fa-4890-ba8a-cda7123ad945",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249359",
      "X-Trace",
      "2BE683B30D14C6B62A0990458C8DEFB22C1D6DC944000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=81A6N6hkvmnFuW2923ZS%2Bd%2Ffbm7OCp7cWN0cA1b6pQ323NyNb5MSCfKvyjI%2F%2FvA6ssgy2WUH0dtJE1cncdcRW3FkpdhBw8huv5Qqp0CdqLTdQaCLWvSHGrA4Fk8%2BTyh1"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:34:57.723Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:34:57.723Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:13:41 GMT",
=======
      "Tue, 22 Feb 2022 02:35:27 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1559b7eff8c3f-EWR",
=======
      "6e14d2367e9e2749-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "5e52765f-2b7a-410d-a67d-02a860437fcd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248702",
      "X-Trace",
      "2B560ADBF7578C417AA6F8FB5C220DA44A66EABD53000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SQ329baCGAZxoymwuol1pw5xZ8eZUIyGaBSGKnNlZguM8u2FPh%2Bd570qkNL5NqwlnN4PPFRAwU96fUqnLVWDpZj7%2FI6Tyn3IwIZiOyrFL5e8ae0%2Bej9yb5OvSfTYg4%2By"}],"group":"cf-nel","max_age":604800}',
=======
      "27b9cb5b-1088-4aa1-aacf-b79bd45ebdd3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249358",
      "X-Trace",
      "2BCE6DAD801744FB6793995181D1F1B324C827F1C9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bXCBxgbuqu1O1pGN47EHKLzg%2F5L08AAqHQGzZ24wL3ELKCOWqnCdHpx7CfoLKDwsvl3CmLaLOMuENb0IYsMOn6drGp7I0XNgAV4R2QDuI0ftgwLAOPXA4GXtlAZ0ruBO"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:34:57.723Z",
            hs_object_id: "7978135116",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:34:57.723Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:13:41 GMT",
=======
      "Tue, 22 Feb 2022 02:35:27 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1559c6ed9e748-EWR",
=======
      "6e14d237cf2b2737-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "1d7eb601-6521-4f4c-8def-2a4a040b9290",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248701",
      "X-Trace",
      "2B9A292D46C08ED85370DB27E18F2F71F81CE59886000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fCuoN%2FKpJGcpIWf0JytrwZpWMALk3jWXj4FEZd2VQ2xYvm5xhhcyz%2BklQUKHsMpwS0Z22QjefFZz7J%2Fs4haj3JP6td0NhdCfRRwwX%2BTSdelc88rcmexGMt2B6w4%2Bt1L1"}],"group":"cf-nel","max_age":604800}',
=======
      "5cc204cc-b444-4bea-8b80-a3dd60451866",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249357",
      "X-Trace",
      "2B20DCE19757196872B74292555216DC39263053CA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dC3ZOzPJxUKD5BWuGNVpofx7Fhq2UaJ50xAnijwl9sU8d1SlNVZtjdYRyj9kF2DuOvmISim0vOmvKBETXUTzu67d5DaV8UAucLunfC1N%2BRsoEN3TEF6lMLQtS1qYBSJt"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:13.049Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:34:57.723Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "grouparoo.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:13.049Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:34:57.723Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:13:42 GMT",
=======
      "Tue, 22 Feb 2022 02:35:27 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1559d5b821931-EWR",
=======
      "6e14d2392f69cf8e-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "2f98bc9e-cda6-4dd7-909f-38d52772676f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248700",
      "X-Trace",
      "2B55C4FADC885BF7E3D9B66C20FBD5A6F28A5600ED000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1xJWZ5PQqc6HwgvDuOfe4oxNVcBR78gVDV7rb7mH9t2vXvl2H0U7H1EhQYDOcSY9oFKyTrepoH9uMCPxKmXoXuDh4l9DS0SoRT4dDcYoI3PYwBIjzWlY6OisckccBIIo"}],"group":"cf-nel","max_age":604800}',
=======
      "754f73cd-dc25-4e12-9beb-4ed7f08ce779",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249356",
      "X-Trace",
      "2BB3B81F9ABE71FEF42AB1C1D6D5A66C099E802434000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ap87ieLPp2T%2Bc39%2BDQpPFwlViMPGF%2Bu7%2F4rVoEq8JRHc4ubn89XtYanfcnw4G%2BricwdQH1YfywYrxTOTbmOY1X9vRlJKwJOHQcSbesd7i8Fq%2BsPCYWQVkdxC1VWoKBO2"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:13:42 GMT",
=======
    "Tue, 22 Feb 2022 02:35:27 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df1559e3fc41829-EWR",
=======
    "6e14d23a8fc1cf96-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "60a6c150-bbfb-4b10-966a-70d3ebf70705",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248699",
    "X-Trace",
    "2BA2A1811FEBF626E2C8CECB8ED75AB304C6743682000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X0mnKq8AVRJdJdwme4IK97K2MXDaNvHBgLqqEY4VsdZG4v7FGYDUxLPkphdiQpQB4N%2FjipNuzG5s5gQlkg2ccSzMEqtTzxAo8Bt3Zq3AreFoXd%2FG5UE9lSo%2F3QwNh%2F8F"}],"group":"cf-nel","max_age":604800}',
=======
    "4c698d33-4ae3-4d66-a3f4-67e064feccaa",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249355",
    "X-Trace",
    "2B11529C136A62FC5253604669D25CC1F357174FED000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lI393IzIWQ4OJK2afDOF1RuJp9i%2BmmZx%2FlxZfTO6OqWPs1sX76sfwEQUExe6J32YzwI2g8LX%2B5OD5GIEOrrEDFl71RreY788IfJ%2B%2BwLOkdfRJTQoy5J0voe8EUWlWr1I"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
>>>>>>> chore: rerun nock.
    200,
    {
      status: "COMPLETE",
      results: [
        {
<<<<<<< HEAD
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
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:34:57.723Z",
            hs_object_id: "7978135116",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:34:57.723Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
      startedAt: "2022-02-17T19:13:42.583Z",
      completedAt: "2022-02-17T19:13:42.619Z",
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:13:42 GMT",
=======
      "Tue, 22 Feb 2022 02:35:28 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df155a0cd631865-EWR",
=======
      "6e14d23bc875e07c-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
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
=======
      "b1f34d42-c0e0-427e-bdec-f715c0758bb1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249354",
      "X-Trace",
      "2BF9F54E997DF16307D53DD9ADEC1F70F166D64383000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3k0lZrvFMatWF5lthm0MCyybJjWHW4CFXex%2FsAetASxkr3MBq1a0c8SOKxR3eziW2v7kbH23feKSqIxJPe2MAS6gKRZR7PM47359VSLLPKaElI6a33LYbLGyAyfZ%2B5%2Bc"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
<<<<<<< HEAD
=======
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/batch/update", {
    inputs: [
      {
        id: "7978135116",
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
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T02:35:28.286Z",
            hs_object_id: "7978135116",
            name: "John",
            website: "www.doe.com",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:28.286Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:35:28.281Z",
      completedAt: "2022-02-22T02:35:28.320Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:35:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e14d23d3ba52745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e63f0581-e89f-46e3-a80d-6c875bcd1fb1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249353",
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
      "2B02BC4FCBB31EB6FA3CBA4D8675B19BE0FF6020B3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WKvWXQWxk2EpmLvJxv2vyb7iqqKdHJncyP8xv9URmTr2IrTfawreJqhbeRk0m8hUNI6%2FeG4ivhBALG%2BhO2NLo%2Fbo9jKKc9kyL128o8TOwp55LTT3mz3Aex%2BkYxQwI6R8"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:35:28.509Z",
            hs_object_id: "7978076726",
            name: "Pete",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:35:28.509Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:35:28.509Z",
      completedAt: "2022-02-22T02:35:28.549Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:35:28 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df155a1ce468c63-EWR",
=======
      "6e14d23eba93cf9a-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "3bbbe85f-3755-45dc-b090-3550703ad12b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248696",
=======
      "1180b349-e5ec-4ff5-b30e-70fbdd916361",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249352",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
      "2BB16292F604E5D5BB079232AD15F726EA6DC0660F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TUCQ8YjXNG%2BeeiLPiYnDLVFrTB%2B4R3ZzmzC4Xj4hQWQ27L6QZs328qa%2FDyDloSNKFnzUTdMInuawXidVLcYfkyj2To1%2FlExwVnh6zZ4rgI52FDXu9pp%2F1PCYzz2mmR0F"}],"group":"cf-nel","max_age":604800}',
=======
      "2B2B5495908F46A0B1F3F3C828A92605BBFB315ADC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z%2FOb6wJ9KTfKjItP9HX5TCyTzDk9ruX5NCkJfP0Iqa6jTfAaOIGx9zlS03A%2FlesDI5%2FK4qQl6X8BeRYSsq%2FncFVGv8jTgE5RLpjGah8e84P0UMrbz9Y%2BophLsuqkGUDy"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T02:35:28.286Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:42.588Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:28.286Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:13:43 GMT",
=======
      "Tue, 22 Feb 2022 02:35:28 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df155a2feff3314-EWR",
=======
      "6e14d2401bce2746-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "d036ab62-b360-423e-ba33-334cdee5f154",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248695",
      "X-Trace",
      "2B428A55EED86F3213ACCE44D128B50C9F52BD94C5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2GyBPA6brZf7GcilaOQpv7f5AyHsvDyyyhKwoLMojiUQzsPZHV%2Fn8RaukbBB%2B2Y%2FeN7J6mNlt%2B3hCrjHavaqvPnT%2BBsyR3iwBAt4tbeQlom4VRuFmB8du9ulBwmDMYlH"}],"group":"cf-nel","max_age":604800}',
=======
      "6ddedd98-7dae-4ceb-8ee9-ce2e57c1a9cc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249351",
      "X-Trace",
      "2B2168D862076C18088D250A4861B813157073B3BA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kr18rEAmhW8rot2y5D1U08EEYXnBjVPS642qU0g9VFi%2FKOE58N%2FU%2B2zwKLuqMYzYgcfDOi%2FaKqGdQFh6YMaj%2B4OyUJb3wH4tg1MF2ZR4m90JcxgoZFDnzJe%2B4QJuwmMk"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T02:35:28.286Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:28.286Z",
          archived: false,
        },
        {
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:35:30.743Z",
            hs_object_id: "7978076726",
>>>>>>> chore: rerun nock.
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:13:45.768Z",
=======
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:35:30.743Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:13 GMT",
=======
      "Tue, 22 Feb 2022 02:35:59 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1565fbd35e710-EWR",
=======
      "6e14d2fd6ae62743-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "f44a0e4a-8b5b-4089-af72-696940243cd6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248694",
      "X-Trace",
      "2B0AE028F225AD46F9FCEC8D9F00C29A59DADD7164000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7zSubj9NVv%2F8ZAI4c%2FhVam%2FCFKpHxz0SaBSywZtpIFhUPgXST8t4NtKAkwrmvnOLaHaI%2Bq60tx26mCFexn84Xo28izlbhSc04%2Fdwi%2BL6OWKHDmTpIkCVprkRnjzv%2BWHx"}],"group":"cf-nel","max_age":604800}',
=======
      "1e028023-cb90-444d-8b79-394c754b8537",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249337",
      "X-Trace",
      "2B19D2BBFB27DC38FE510A4AE06443C72B5B6A80A7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cNR2yyY6RtHzRsSdEGCOTv2b8%2FdtcjFyeqmJXbKqvR%2Byd%2B8q9zszSBXCq03rrVw6PPCeZwzhWVtgeWgW8P49P%2FZ2xnvN2teXT63t%2FUSHUCA1x0LktbVqXYZ8pU4PtG4R"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "3039",
            hs_lastmodifieddate: "2022-02-22T02:35:28.286Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "www.doe.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:42.588Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:28.286Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:13 GMT",
=======
      "Tue, 22 Feb 2022 02:35:59 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df156615afd17b9-EWR",
=======
      "6e14d2fedb6a2746-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "42333af8-e76e-4ae5-80bb-1323a0be0dc4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248693",
      "X-Trace",
      "2BF94ED5748588FF3EEDD098E52EDB81B29547C18A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qKayjuturYLi4LJThn5hSGkEY%2B4193wYwYONT4uUywH5vaUFxrYMSe2uWcVuUfJo%2BWuxkBeRZP8%2FUAcC6V0IG2whruqnUNs4pbIXkfYIEKN%2Fs1L91GSUklnBqfrJx5%2FR"}],"group":"cf-nel","max_age":604800}',
=======
      "0b3f081c-1740-456a-83c1-dfd159095b74",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249336",
      "X-Trace",
      "2B361A0C54B515D59F5DD4964A4D08807CF68591E4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=On9nkdEheNAeqNuLaYN5%2Bcz342kt%2FpDWZo59z6f%2FkXdkWwqL1Kl4w9d3TVABfyQSZnyCL6h6itZEJ48xkun3Mon7Cu1EKTNwpeOmroT3eZSFBXFLCkoOVNZZs4TCy1ox"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:13:45.768Z",
            hs_object_id: "7945057905",
=======
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:35:30.743Z",
            hs_object_id: "7978076726",
>>>>>>> chore: rerun nock.
            name: "Pete",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:13:45.768Z",
=======
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:35:30.743Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:13 GMT",
=======
      "Tue, 22 Feb 2022 02:35:59 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df156626eb78c69-EWR",
=======
      "6e14d300281d273d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "b13e2db5-677c-4729-9c0c-54e28adde05a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248692",
      "X-Trace",
      "2BFE2825405F468254A7021369C07CF213BEAB190E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Yqflk6QFOTYD3gMmuUNRXlMH81Guu2M00Tsk5IDPOVJ6PUHQYuOmF%2BJlC%2FFv%2B0cGyfo%2FaFpV9%2BG6nTQ2476E5mm2XvV0Vy2sLHOxe5hL0R%2BBQzliJE3SN6bHk4al5Poa"}],"group":"cf-nel","max_age":604800}',
=======
      "ced4bd8e-4583-4c7d-ab07-0b033fdc094a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249335",
      "X-Trace",
      "2B1A676E03CCAA044C0074681EF421965E13861A7A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hkRc8l0hN2VulEvlkmJJaJIWRFsZtAS9AI0YNWN3TtaX6WXHdf2kieAAr98hKJy7XN6NDE%2B9ZzX1xMQdW7f5pXaNcufqXYFPAcNOA67yaarOGc475BHbxjoT1vbbn%2B3g"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:42.588Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:13:42.588Z",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:35:28.286Z",
            hs_object_id: "7978135116",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:28.286Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:13 GMT",
=======
      "Tue, 22 Feb 2022 02:35:59 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1566399448cb3-EWR",
=======
      "6e14d301cb622743-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "a586667c-630f-46fe-b2d6-bb5e32d3c9ba",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248691",
      "X-Trace",
      "2B00B48CDA92766CB3C22311C8C171BEE070941074000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FVASkkh7dMLCZY0VVVomg8LKATA2EznITeZZkcDbZ%2BsWyNBYv6jbASYYXx9YL9yhjO%2FlgQalro2%2Fa9jusYLWB86mUxFpgEsfd8H2Gf1igV%2FRKEio3G3D72VCQQn17X75"}],"group":"cf-nel","max_age":604800}',
=======
      "cb8b28ae-59ed-4531-b9a8-4845a0d5f60e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249334",
      "X-Trace",
      "2BCE6591CC31B3F33555DA30806DAB312032C86703000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XdjJKRmCvuRa9Xdo4ZDIwzR2usWDjWJcGnXZY%2BE1negiedUqwkp4iPXEjmJaN6rqNXi5L5CiIZByiixD3p7%2F2Z98tPpNcEVgqoaTRwLD61JmqNJ46CFWMijCi%2F8iJ%2FR4"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
        id: "7945143592",
=======
        id: "7978135116",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:35:59.946Z",
            hs_object_id: "7978135116",
            name: "John",
            website: "",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:59.946Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:35:59.941Z",
      completedAt: "2022-02-22T02:35:59.975Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:36:00 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df156648ab332d3-EWR",
=======
      "6e14d3032ed0275d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "d15da63a-698a-4a95-97b6-e8c684b77ba2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248690",
=======
      "7502bd07-421e-441a-a99e-5dfbad7fcc25",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249333",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
      "2B5FE74DD161FAF4EEA39921360C248C6F916D624D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rnLM%2BD27J8bxaDAY9rJG3KiZDwmrWJpG7YiYMLDPUEaqXdJE5gL181zxIHheVxaAxPtrX7zC7hQXayURdfOqmgeyloAO9XtO7BgwdD5yVPRR4iSMOlZAeILtYY0V2z5i"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:13.935Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:35:59.946Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:13.935Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:59.946Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:14 GMT",
=======
      "Tue, 22 Feb 2022 02:36:00 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df15666b9591811-EWR",
=======
      "6e14d304cd32cf9a-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "90f2f5a2-2331-49a4-9c0d-991bee8876e7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248688",
      "X-Trace",
      "2B92A92F26DE3FA4D4430474516F4F67ADFDB84493000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4hP3ekxuEhUM%2FCQmUK%2Fjsu3%2F3ZW6M7I%2Fa5XOnKRx4%2FC%2B3hBznyyO7ck2emXkpAG950Bv67aPhfzgZul4rfHZjFcMWaHiRFCaSLwPA5XlJ6fxMO4R5H1M8bZ9RxmtBNOe"}],"group":"cf-nel","max_age":604800}',
=======
      "7278a0f6-c0ee-49e2-846f-cdb213f12798",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249332",
      "X-Trace",
      "2B3624072F976EE3D31EA81C6D8CF69CB2B42BE57F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tkkGLQsIrsipEQMJaqpiT6mswkxhk59BZvyuVlu8NkFeam31%2F3SxhmV62YsJQJOr4YSQIop3pphbTj0pfv8PahrlX3KZFr7QEl5wADh33oRaFj%2FwwYlDS%2FMnc1MPEcBy"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:13.935Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:13.935Z",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:35:59.946Z",
            hs_object_id: "7978135116",
            name: "John",
            twitterhandle: "DEMO",
            website: "",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:59.946Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:14 GMT",
=======
      "Tue, 22 Feb 2022 02:36:00 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df156678ee38c5d-EWR",
=======
      "6e14d3062d762755-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "71a12c3b-35f8-4dbc-b702-23e42253cf35",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248687",
      "X-Trace",
      "2B9CF709D67DA18E7EAD680C35E8BEF0AC26EADDF2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yDJxCg2%2BCiLtmWuCjY6abVSlNhu0XuNYotIIykU4dDGGvd%2ByMsrioVA5%2BgDLFFevRutJoZe2d9OsmU6Aa33Vhjv0Autqjs6cd3xp4%2B9tStHD2MfTyg12o%2BGwQrmqsEjV"}],"group":"cf-nel","max_age":604800}',
=======
      "1efc692e-0515-4917-aa13-e89fb7703bbb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249331",
      "X-Trace",
      "2B979A6FAEC74CC991A4E062B0B86A52EA82515122000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BQqELbK9NJK7fOvy%2FB%2BcC1I%2B2QqEVC8U31%2Bs7Orw5tpuuYGvJxw8AgaTTsWGLorAUy3%2FTt5kcjVbIpLbx5%2FEOcZ6nhBodp9xpJAhGPwE1zLPnM5n%2BQT5aGk6exudHF0Z"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:35:59.946Z",
            hs_object_id: "7978135116",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:35:59.946Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:36:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e14d3077eb02749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bc350a7e-1a9b-43ea-b5c6-4f273ad2bdcb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249330",
      "X-Trace",
      "2B725EB859F7A27CE2BDD18A89B2348CABEEBB7E14000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=42lfk2YOSOn90kTfCCQUEMENl8mMyJbguuNdlvxAvZWGkiCzPhE7FQ72UXKjDSt8Lwai9CMIX1tpuld9EIc3eUujHNjXhZ%2BZqHyobGOI7hvuDuzzvr0A1yYx2G933MSV"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:13:45.768Z",
            hs_object_id: "7945057905",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:13:45.768Z",
=======
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:35:30.743Z",
            hs_object_id: "7978076726",
          },
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:35:30.743Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:14 GMT",
=======
      "Tue, 22 Feb 2022 02:36:00 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1566869458c5d-EWR",
=======
      "6e14d308c883e07c-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "f1028390-05df-4483-8689-05a4105cdecc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248686",
      "X-Trace",
      "2B56CF7F13CC6E3353A93E316F5636012DCD3E63CC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LHmkZTh33%2BzLYSdNsMtVSCcxHlMItv7TlRwO2qGbxorsYv14IY093127uWcnhMgoMq2%2FnvZm1kc9%2BToOwtFe1iKFuEi%2Bof1NL3xiu%2FM45Nnt0JWwdyqdojra8ZOKfvd3"}],"group":"cf-nel","max_age":604800}',
=======
      "cab92c3f-d961-4ea9-9242-f5c976283606",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249329",
      "X-Trace",
      "2B0C0A017213C465443D1F828CBBD31023897C8605000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CwqnPjtsk59P7whe7rbzAnfcHVM2Qoe5SxP8wckJI5MoZVJ3LdM%2B9%2BE5z%2FOaYqAEYnmIEID6iwmIoy1UbjQ%2BaFXwShxe0W61uLJXwmLjc1wZ7r2cRdN%2BumBRDVl01n3o"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
        id: "7945143592",
=======
        id: "7978135116",
>>>>>>> chore: rerun nock.
        properties: {
          domain: "notgrouparoo.demo.com",
          name: "John",
          website: "www.test.com",
        },
      },
      {
<<<<<<< HEAD
        id: "7945057905",
=======
        id: "7978076726",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978135116",
            name: "John",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
          archived: false,
        },
        {
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978076726",
            name: "Evan",
          },
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:36:01.073Z",
      completedAt: "2022-02-22T02:36:01.124Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:36:01 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df156696c3132d3-EWR",
=======
      "6e14d30a3e662745-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "f535bce8-49e6-4d15-ab10-e0d591bbf59d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248685",
=======
      "c69af7ec-0413-4d72-94bc-812be0c07d39",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249328",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
      "2B8E6AA7C2D13E94BE8B4AB3DE9B8B447C8A9FCEAC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aLE%2FYR8pij83gL%2FLWU5hNJQ5OUc3wJGS01IyJuDCi5D13e9UG1VNEr%2FkvtX600K0%2BBXuaQMXAq3RcNnDbZq0EM5%2BsK0HD1NQO4UzU%2BrTU3kMzEXcVdv6fO58%2FMPNK55L"}],"group":"cf-nel","max_age":604800}',
=======
      "2BAD722A9DB11BF4B337EBA323540FCC3348148B0F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6t4xDrrdUUsHm7NSjjZlr7kOUQej70vKksekhISO1fm11TYoSF7yacfg2dKkWt9SttTinJ3A0pCSLWWX1ow8Oskb%2FJkmUomnJ7FbMrvqIA4kz%2Fo0B5Kmq6L1rkex%2B1al"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
>>>>>>> chore: rerun nock.
    200,
    {
      total: 1,
      results: [
        {
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:16 GMT",
=======
      "Tue, 22 Feb 2022 02:36:01 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df156729b5a8c84-EWR",
=======
      "6e14d30bbe1fe084-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "9fe36783-0cb5-4d98-819e-11f4093e2c3f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248683",
      "X-Trace",
      "2BA53849256BE7F3DB40B11651B1428CA1F4745ABB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JDs3GyEXCIwV5RC1tIDPPFN0niIwJr0vj%2F5EnlEp6MQ9ukIMCLlhyBmi3SJDy35m%2FjWwpePCKWyU4vYlCFYY1w%2B3tZucv59tqtWY3QlcnQY4xkW%2B2gSEWQ%2FUnCLScxnM"}],"group":"cf-nel","max_age":604800}',
=======
      "5aa6ac19-af39-4e43-be24-7cdac8048221",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249327",
      "X-Trace",
      "2B52D9CFA31FEC8996FD57ED2D50A2F9225ECAD174000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e1d%2FKswgN09R9JhWqIaRhsIA7gcUDTDt%2FgnD9S00ce%2FD3mljEEgZetfZLSpP61vxp8VKSDavq%2BDZhr1mx%2FJJV7m1yS2UVdaplvuU14FsRjr%2FPPOHVLo6aZKPJukE7rV9"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:14:16 GMT",
=======
    "Tue, 22 Feb 2022 02:36:01 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df1567368c2334e-EWR",
=======
    "6e14d30d2aba2737-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "1f8882a0-dcf5-4d03-95bd-4971faee7c99",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248682",
    "X-Trace",
    "2B5CC7BCC5D4152C05D324C5A540ADF1D41068331D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dqWW8gddinOhGgKRoCPL3jt17tqyEYRogz5YuuXR4ztEFsW7ZolMtwRkOhX3t4kVQyB%2F%2BVD9qd0fe3ZxHisKgs6TcWga0zsPh1qL%2F628Pg5sPqW0L2PFh2E9w7d2roeJ"}],"group":"cf-nel","max_age":604800}',
=======
    "5f7d38f7-5d7d-457d-af79-153c22095e8b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249326",
    "X-Trace",
    "2BEFACF7D9387D614978A49A6F418FAE2A92744B83000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=l0OnHTi3JfYGm6%2BpEGwFL1PM8h119ObfFnfTrbLai3EtYxnJlyQ0mSrr9mnNCniMiNJ2Ynj%2BT18OwyHiTTBMmuyoeIwXT9KkLP6Ll3ynn78HSgIJxBpwS810jgMIrAfm"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945057905",
=======
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978076726",
>>>>>>> chore: rerun nock.
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:16 GMT",
=======
      "Tue, 22 Feb 2022 02:36:02 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df156746fd81a0f-EWR",
=======
      "6e14d30e7b27cf8a-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "7066ff40-ad47-47b1-9269-52b7f55bca79",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248681",
      "X-Trace",
      "2B66D7B150648AECADCBBAC8ED166B103244DF04E9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hYZAyITnzXvCGvZXMMgzr7vHiettyAFJi7zQwuKKlczEHL0iplTwgmutljaA%2FIDNQuuhhmenEsCov5jzyZh1JMWdC0vMBUYYVMOPcP45p42vuSAv1XsCoZT6FQJXkGXV"}],"group":"cf-nel","max_age":604800}',
=======
      "e0ebcc5b-79ff-46cd-89e0-988c6af512da",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249325",
      "X-Trace",
      "2BBFD98279DF46A91BB91FF13EDE7014B2B98B157D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BlTFYIQDkVrKbnESmObinOyvyOhcYEK6hOxPRQpKNMGhM4RNwDBN31hC1cepftybULZKZtlB%2F9FjU96r4R%2FaPhrCAW4w3vutuZom7v9xIBS0jYzlJMqkFW65J%2FK%2BdobX"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:14:46 GMT",
=======
    "Tue, 22 Feb 2022 02:36:32 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df15730ecab8c6b-EWR",
=======
    "6e14d3cd3bff2746-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "38199673-4006-485d-afdf-f6b2747ca777",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248680",
    "X-Trace",
    "2B14934BCBFF4F03E3649D6967A52290FD835DA1DC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vE72lA%2Bwm7oW%2FayH7bpMaqLBJXUiSkiKPWVQ4RU8B5j320zAvz%2Frdok7zJ4mgX0G%2Fp5aCr0mvqtzd%2FC27xiZbnYn5CbP%2B5YNeAHKjf%2FUueUXhQpwjP8bYohr2Z5%2FQBcs"}],"group":"cf-nel","max_age":604800}',
=======
    "cb5740a5-f44e-4566-97a6-b337ac40a33e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249315",
    "X-Trace",
    "2BA16DF4693AFCCE87437331006625A81458977512000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iFKBW3TLC4AqIgnVPu3K6hN74ZZOnDjg0p19RnCX24mwK7LERSFR8bj5AXt%2FT5jtr0Vjigl%2F6KNP4NYaKFIqDQJgcjDngc4EmQ%2FFNzsXLpnK%2BwjjBInNB1SD07YEAHzg"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:46 GMT",
=======
      "Tue, 22 Feb 2022 02:36:32 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df15731deff8ca1-EWR",
=======
      "6e14d3ce89d7275b-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "941a756f-fa58-43bc-81bd-72adcfe7899c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248679",
      "X-Trace",
      "2BB3028A55AD1E6245F30F97D6DA17C0E9240F0697000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DtGdzChQKj%2FlJB2onJuwm%2BvpzwwOZFgoFfMMK5Njsgujx6zPGFI72dbyJ6K4FA5OS5SgfVgnXWuPOl0YjbT0mzPH7piQDEWE5ray4pM9u1Q3nMR6CfFNqHi9fSKVTAGs"}],"group":"cf-nel","max_age":604800}',
=======
      "a8f2ab29-133d-4183-a521-130f4b67315f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249314",
      "X-Trace",
      "2BAAF106659D4583B58D5EC4EC6684756BBC409306000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p7PtsTgHiipjonCQsNT2AvsxAqIQYZk4ElKdVKH17LTIIJarrzE4bb%2BvG3S7A9u4Amii4xeLLYkDpZDBFtUwHlK4Jc3Ms%2BS%2BlivZ0ZKeMEhS87pu9hLhY7kso3nXv555"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945057905",
=======
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978076726",
>>>>>>> chore: rerun nock.
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:46 GMT",
=======
      "Tue, 22 Feb 2022 02:36:32 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df15732cf2e8ca2-EWR",
=======
      "6e14d3cfdfb7273d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "399fcf0f-b07d-4e44-8c40-3a9b448ecbe9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248678",
      "X-Trace",
      "2B37098010FAF00CEB773047F062E46B0A933AD9C1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s5GWcCvo4VwQFf5uMkHb2oPrhamWEyCKXuJQh9g%2FvnxlWRJwth1fmuNM5woW4MkuKP4bV26lWruFly589jR8zDe0oAyZ%2FoxIqFqSGs2h6bo3DWRS6VnAipjGSV4GHK5T"}],"group":"cf-nel","max_age":604800}',
=======
      "f31e81ac-3516-41c0-a561-03f6e28f6489",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249313",
      "X-Trace",
      "2B2BF173F6C944DF61B117DB108A0025B33A2E506D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GEQKw9dZXBPb8wOGObrxAflJ9gGSou5Q2bI1lnKVXVlvM4VeQV5YNlbgxlZi4pziJvBwcDWilUQoO906pv9aTlFJ%2FmrQOYLzLCz7kbwbhKBhJpJIVIg%2Fz8msnnjyRNZ1"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
          archived: false,
        },
        {
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978076726",
>>>>>>> chore: rerun nock.
            name: "Evan",
            twitterhandle: "DEMO",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:47 GMT",
=======
      "Tue, 22 Feb 2022 02:36:33 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df15733be1f15ab-EWR",
=======
      "6e14d3d11d34e07c-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "95d1519b-62b5-4eb5-9589-384ee0861fc7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248677",
      "X-Trace",
      "2B9B07921C022495EFAD8FFC1EE971CD5F4BA82AEC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Df7yPcYEZmZjDfEyJ6uxao8wqQyxbCkSHZuzw4N5GSSZ3OyqsgzgROVx9%2BbVphQzJahOzbqu03cKsIxg%2BfHa3eglQdEUf3qhWyYYMo08ziFAnNtRH1mEMCGxqe9RJCbF"}],"group":"cf-nel","max_age":604800}',
=======
      "e247b858-0e10-42f6-a52c-0e77927e7f0d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249312",
      "X-Trace",
      "2B740D8BE7F061B337FD37CB8EE812D8578C7E8C3F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jpNpPArVGbVMxySz7KCSB51rtGgBuNmqWMUANNy7ZUknZ35uuFUozS7%2F%2FXhNsLfbwEtL%2BTrwSXdly4axEssd%2B8puK0viw0xtGKwaKyYWRTwmwcWecgIJNUWcx5natRIN"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978135116",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:47 GMT",
=======
      "Tue, 22 Feb 2022 02:36:33 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df157351f3917f5-EWR",
=======
      "6e14d3d2ae43275d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "c7bcfed3-e849-4380-9455-b3407a9af63c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248676",
      "X-Trace",
      "2B41F07ABC30615E960815DADC780967CC0FDB43CC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=svjeGc2L%2BtBHy02G%2BKE3OOI7yZhv8q9n4XweIWgpd9OzmsDcdi9JEryLiwR80bK9ppMzjzNhu6wtTGYmgSIKJlfQ3aJNmq7pvvs14wHFoeS%2BQdpzK0aL4js%2BzjB3O5yB"}],"group":"cf-nel","max_age":604800}',
=======
      "b2f9b18c-ae6a-4acf-aa23-e0c068ec30c5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249311",
      "X-Trace",
      "2BC8F3F99065A09FB1DA0AA91401DE2C7CB2B73B15000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wwGExULpJgdW5fcQFuVFewrbB0eA4bou0D%2BuGyS7MtneSeCJnxq2eE7pAJOPu2AEWtg0ekJZyH8WvP3BtUtC%2BRGHvS58bcACtA0UocsvOXSIa6wP26D75fAD4%2BZylQYM"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "notgrouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "DEMO",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:47 GMT",
=======
      "Tue, 22 Feb 2022 02:36:33 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df15735fd82f060-EWR",
=======
      "6e14d3d46968274f-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "dbc3f448-4386-4a97-9a82-f63e4b079cce",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248675",
      "X-Trace",
      "2BFE5848F860D53967FF4200E384F57445AABD6DBD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PuGQ6wHkIcC6PU8%2BmvoN6%2BaR4TWL2%2FHlnQSC3mFafWbnZPPeW6eoAGfi9%2B48eNWC8EWhVnpS46BMAyahEExgEO96aIplH8Ki2IbS7Mis2EDEOg6lWQgSR42zht24sIm1"}],"group":"cf-nel","max_age":604800}',
=======
      "caeb912f-0ec4-4b07-b505-868f6c19eeb6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249310",
      "X-Trace",
      "2B2BDC7B5432C42A9566FE518A0CAD376C5EBCA981000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hKtpkGUvuj2hdha0wS4J%2B2WBCjL98EC8PuGpRQJReQxXttBwbplPxGpbQyeIaupe5aJfHse6P%2FuY6I7zQS4XUdUoUM6FljisIMJ7Y9sFvp0qfGAs1EF2gdQkhGzgmE9j"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "notgrouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978135116",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:47 GMT",
=======
      "Tue, 22 Feb 2022 02:36:33 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1573759628ce9-EWR",
=======
      "6e14d3d5ca412755-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
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
=======
      "5022d028-a5f5-465a-a93f-24fe6860d27c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249309",
      "X-Trace",
      "2B5EDBE8E97C79B0E413D34F6903675671A309CA5E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zTS2VaalJp5MIkzu0ayFUJYFdSVL%2FnDcnNXxQzDjsHgv%2BD69EcYYA1d7%2F4zzNpsILSRZCLyx0HSCvlTPk7aGaJsORot%2Bvygvmxt3ojYHOgKgokV07kC8azv%2FbyOOrpQR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945057905",
          properties: {
            createdate: "2022-02-17T19:13:42.762Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:14.679Z",
            hs_object_id: "7945057905",
          },
          createdAt: "2022-02-17T19:13:42.762Z",
          updatedAt: "2022-02-17T19:14:14.679Z",
=======
          id: "7978076726",
          properties: {
            createdate: "2022-02-22T02:35:28.509Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:36:01.077Z",
            hs_object_id: "7978076726",
          },
          createdAt: "2022-02-22T02:35:28.509Z",
          updatedAt: "2022-02-22T02:36:01.077Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:49 GMT",
=======
      "Tue, 22 Feb 2022 02:36:33 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1573fe9f61891-EWR",
=======
      "6e14d3d72c472737-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "1c73a682-55e9-4d8c-8f14-10b5d4a8ac1a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248672",
      "X-Trace",
      "2B10A02A265FDAE340BB0B3B3679DBFE5BB1652989000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EcBisFRWraaLz%2ByMkcxMFhOnLbZSUNfq4uak8bQ4rWt6UKazoi3Az1qMmfrwPje681StwaE5y4h%2F5sanQ4WmbPzNSm5g9uEJfhiixfDEURF%2Bc9yNVM6RSyHtE0pXQ0WB"}],"group":"cf-nel","max_age":604800}',
=======
      "4beb4022-8e1a-45bf-a9b5-07a0e03ae0bc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249308",
      "X-Trace",
      "2B154D099ED272341D2F5DFA42E4D54C3167494BBC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DrJQ7zHH5kvFvvzvsHmhIsUhKNF8YljdJI%2FS10bYmRqjLtEa%2BoLNaSdceDcnUvVTCGuGMkR470vJOUUi1PV%2BAL1iyIFpS0tZXQlopIyaRbHhO1qOzkrHa35xtE1jLgMT"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    inputs: [{ id: "7945057905" }],
=======
    inputs: [{ id: "7978076726" }],
>>>>>>> chore: rerun nock.
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:14:49 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df157413cf11819-EWR",
=======
    "Tue, 22 Feb 2022 02:36:34 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d3d8af1a2755-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "eaf47ed3-dee6-47e9-a8e3-96b4c67c675e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248671",
=======
    "3870a50c-6fa6-42fb-b835-321361b39c9b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249307",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "2BA4894ACBC5678516D60D76856CCE58C6FDA41A67000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fFA6IdOzPo%2B5kW5nvsQ%2Fh0AqFkSqevGWdm57K2OwTE2UeGG2v7FGMtwQ340N6pjzcXa66ek7jjP552PwDKoE4ab2zDoOOrwDxY%2Ff%2FPOEHlWKTn44EqtyKqpTSHl8V5O3"}],"group":"cf-nel","max_age":604800}',
=======
    "2B78DF2552F0243506A48766EB00E9A3D2DFB01AC4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vdmRbNw8ToJEk7m08NGWdHeX5cs3gY0eZSj22p15RZtVpJx8wdAwdqysfAkPvwpcQeCEzal9ogMb56VAQaw%2BdD5VgSuVjLGrwZF34mnsJ1CP7iAx%2BvAMdA1YZlBS86Cs"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
        id: "7945143592",
=======
        id: "7978135116",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:36:34.961Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:34.961Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:36:34.956Z",
      completedAt: "2022-02-22T02:36:35.012Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:36:35 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df157422d068c4b-EWR",
=======
      "6e14d3dd9a06274f-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "3dda752d-9b92-427a-9452-ce49bc0c177e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248670",
=======
      "508298bf-2611-4ec3-aa2a-baec4b8e7525",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249306",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
      "2BBF06803FF32F766C08ABB84C18CF59B6B9A5C5B7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K1Z9jn%2FSK1haPYzkz8acq6w3JMCEcyL%2B4vTb4Q3I5oYDE9bJOxz8eAfVYXO0D%2BTwtpdADgx5S%2BMiHfqJK6ldQ1HDip5gheeB2lF9jozNGvFJQf0W3avU%2BWe0rpkKRhp5"}],"group":"cf-nel","max_age":604800}',
=======
      "2B6131255C76C84F94E23FF449C59A28C1CF34559C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=v8vxMp5JdVtgj%2B00ILax0V2nJkfPVGKOaZ%2FioNeJd013EXrATKFXK06rpJh6byZFUZTt%2BbFt05NwT1zcVshsCNzqsNrMTWky3jwlMsceBtaQ%2B5AjzC2LajdO1XyNwbG2"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:36:34.961Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:34.961Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:14:49 GMT",
=======
      "Tue, 22 Feb 2022 02:36:35 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df1574348938c63-EWR",
=======
      "6e14d3df8ab0cf96-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "a3b2c212-262c-403e-92f9-9fb4afd05862",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248669",
      "X-Trace",
      "2BBD34390EAEF666A38B896F405755B56E9F8F9B36000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OigDMR3UOba%2BduMMDK9PCl4g6zm23kP2e1UrtMdtCLraVV8UatXlidxxZKES41Y1bgXKyKHGx8GXkkz5lOiY4XdPkJkUDpKq4RRQ2vDEzOQ1eHsV2sZaP0bnqHdSNPUL"}],"group":"cf-nel","max_age":604800}',
=======
      "b9f066ef-22e0-4318-b425-2e05a8624ca6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249305",
      "X-Trace",
      "2BCEBDBD7ED68E677A3B947FDE9FC1099EFD801AD6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IGIvYkOxk%2FHUrdsfK%2Fk3ikRGvubWVFhJox6LacFxIN3viJxnirpHfOBbyapNSbb24qtm9HVW%2Bhq1FhHUr27Em3hFookx8SXdfgqmf5qD01NHrXdkll5Jgiq%2B7bp%2BgZuN"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:14:49 GMT",
=======
    "Tue, 22 Feb 2022 02:36:35 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df1574409c819bb-EWR",
=======
    "6e14d3e0fe2bcf9a-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "f9eef0c0-5021-41d4-afa0-231388f96677",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248668",
    "X-Trace",
    "2B571A6FB94A96298E96BB638CA8CC179CEF9258B7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1qg9UETGmNSzkrjsfmFr1rdippq8xHzfN3Edw23TNZEkZOHa%2FjhrZD2jnQUnRCix4V0UyRVPy8e%2BJcHzasZ8vv6zH9W1zFRCkE6dBnK9zZGJvzAYOths22Ig9iZpOU38"}],"group":"cf-nel","max_age":604800}',
=======
    "2eb27124-53b9-46d5-994b-a42290b7e226",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249304",
    "X-Trace",
    "2BCBCAE6B366C528E2BE3CE0CC2FEBB5A94087A995000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CpMa4pTsyEGDK0ghDJ8CXesLWmFry2MhkB%2BQKZau4%2FSnSKUfHAoVvRp8TK%2BuuuIWeVTTteYoC93D3mCf%2FmtAo47jX870HfAayrYmVzEgZElDU%2F%2F%2FpnV56hXwmQcuNEXc"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:14:49 GMT",
=======
    "Tue, 22 Feb 2022 02:36:36 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df157450ec51a48-EWR",
=======
    "6e14d3e25b522745-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "d52f22a5-acab-4fa4-b87a-d2ca53aed117",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248667",
    "X-Trace",
    "2B542A872C76701FB0D8103D5C482B0EBDFF0176DA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UBrRGtmi6u%2B4KlrWuplWWbgBzfjhaMHkpXjONj85QF%2Bb1CR%2BorRX2u6MgNRVmydvje0IzTz7IQkO1w5mo%2F%2FJXJAWygkA0I4kCmRwoYjFPdG%2B%2FBfjkIICWRnlndd28Abt"}],"group":"cf-nel","max_age":604800}',
=======
    "d68f6968-d653-43aa-a4f8-29480458888c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249303",
    "X-Trace",
    "2BDE2A4FC43C7BE317B8425F97C87CAD12B00A8E02000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZXv2%2FThy6DNXnnp5zU21kEMVF3RNGGsFffeLsVAPx6jYZRtG64GGfvEgFxnO9mW2suB0HZ3MVj8Usp7vxw2UoML48houR1YzhvYnm51iPFe%2FQYyOJy4vKrmPuQ9jab7D"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:15:20 GMT",
=======
    "Tue, 22 Feb 2022 02:37:06 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df158018c03e738-EWR",
=======
    "6e14d4a12f082743-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "bada183f-18bc-48d1-9a39-1538d7bb0a71",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248666",
    "X-Trace",
    "2B2904E3D018E8427BEC62C71A7348E4DA2FCB9ECD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sNuxUZpyxhvdB5VKSUwrvu3et8%2Fo6HYDfB9%2B5DMq6lvBbiCd38n9I5r2pP9ea%2BCJaaMSkRs3FZGZXbagLSbFsJ%2BxcYy2GP%2BIcNWEJjAjbo%2BD4aHAdMpbGWZuZ0Y1thKp"}],"group":"cf-nel","max_age":604800}',
=======
    "52390583-ccb6-42f2-8109-e45f13dfc38d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249288",
    "X-Trace",
    "2BD550656A3AEB3131C40E2E9059A44D06D93E6D63000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1r3kejx7jpuX4ZAjwqp645naxoPxoGgaAKNotVYjWy%2B3LZ8tdN3LYrwv943LFVG0FttF2H4Ky7s%2BMfXKzSw7AadL4bZqx5WOCl5bJ1lTuwHo4hVQqDW%2FOkufC9IpR5id"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:36:34.961Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:34.961Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:20 GMT",
=======
      "Tue, 22 Feb 2022 02:37:06 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df15802590e1986-EWR",
=======
      "6e14d4a27f292745-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "40a5ee41-f6d4-4072-9a26-4d1212a4409f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248665",
      "X-Trace",
      "2B8605A4CF2A976A2F848E041039BB5D3B331BB7C1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ibY2zEgWFcWuIZWCq1UrQZYZvWUF58B0zot4Yya%2BC9K9%2B7zZiQON3NzT1L7DwJCA%2FQXG3JUV2dHSvv%2BYBQqALilFeqU%2FOjvj1qFVXCsUGTgWHA84rjwDkiXcQY4GBqE3"}],"group":"cf-nel","max_age":604800}',
=======
      "38e0bdfe-8e36-4d79-ba0e-5a392ac7eda4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249287",
      "X-Trace",
      "2BA21E055510BAB3F23F0E14B827AE00DD7FF440D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Om4qMMBxiTd29DThDtPn7WYl7gPnkyUT2llxK%2BOoGoB71PQgy3SDk%2FF5o5pym3Nn%2F1Nz%2FNVn0Y5WEaNTcWrf83dlZ0%2BxycCAn5D6P5yDeAUnxmWme756mJj%2F1bybgkr0"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:15:20 GMT",
=======
    "Tue, 22 Feb 2022 02:37:06 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df158031de318a1-EWR",
=======
    "6e14d4a3ffcc2737-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "66e2a595-dbfe-446d-b766-6d34b81c7dcf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248664",
    "X-Trace",
    "2B2E61B39676C2416973CAAE35893CC8644CAEF1AC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZKrffTKRGM8DG%2FCatI3fne%2FSYWR9GnBi1QBfQxWLPprfhR3KXO2YKEfH6XdH01%2FslBeFVZ6NYPLhTVFP70dU%2BixZ%2FRz00eqm9xHRRUxr2hH4j1x94DYRrZ0AuD3M%2BdO3"}],"group":"cf-nel","max_age":604800}',
=======
    "18ae5b5f-ec56-4dc4-a2d3-3f5968a30964",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249286",
    "X-Trace",
    "2BAB4607AECAEAD50170C9E55B8C60421B3E18D8A2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TlO8kAaIxP0aAg5AoI%2FUrINqHR0AWLNfdT5oiezeuTkL8yUEhrgPb1W97HnkM69EEubl8QyVlTj3zBhGm6X%2BO4pu0XUjmtlRFeqvBgixAUvEEizDpbuzJrrycy0NFOcE"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:15:20 GMT",
=======
    "Tue, 22 Feb 2022 02:37:06 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df158040aaf1a17-EWR",
=======
    "6e14d4a54a7e2749-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "e69dd4c8-a71d-45ed-8e24-c474fa58c9c3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248663",
    "X-Trace",
    "2BD383D7F5BA3D89BF54C2AB331B66221CF03CD805000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7x7hs9aAcc8I9x1wxT7C458k2G5SzqHHQ2HCJDipM68jNCj%2B1teGQCYui1tKkrM9btnqQmz1T57aTmhOJjMS4kkpmNWEDKcCvWJSxEs60nmYa6U8x8sn3QDKq3lYSQyA"}],"group":"cf-nel","max_age":604800}',
=======
    "4f07cdec-cb2b-4d4a-9b09-f07bc81ad584",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249285",
    "X-Trace",
    "2B7D42C3C5D165E11806FB82DE41BC4C091FFCF8C6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y7XIW5K5JhmLC4xuyHnqMPM2ln75NeN5Gv26%2FnBp0Gd1r577x6puIbENh4Aq1ZNEYRZxqgG0fy6jPKR83D6G3%2FpoxUu94Qg6BMC5dqwXyVSPgFuXt4qkAUiUfYRsrnPI"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:36:34.961Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "John",
            twitterhandle: "back",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:34.961Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:20 GMT",
=======
      "Tue, 22 Feb 2022 02:37:07 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158050e91e730-EWR",
=======
      "6e14d4a6dcbf2737-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "2fe2a243-5581-43fb-a287-014c797e575f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248662",
      "X-Trace",
      "2BA76422AFA59A3BFBEB50FD7C03EB41FEB4A2053D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XluLCifrSMSAwNcjXjXFAznzruAG1BvGuYjKn24GxFnGYtG2Duai3FRoi7axjV5bcTlqMvsfmOmW3GfHiYLHQz302E%2F9cCtbRIBYLrRVUTG3mA9QTNk8qsaUrZ6mKDzR"}],"group":"cf-nel","max_age":604800}',
=======
      "f6d09b0d-7a36-42e4-b356-b1ece2c92157",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249284",
      "X-Trace",
      "2B1B1DAA2DF53429A756394D4983C4F59C707096D1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bNalbkSdArWrCATFALYwTTXz47Z4MK01TCZveg2MmZKPQemsxf%2FG6varY89Dt6qdKZJc1NofY6BAYE%2BT5zHHHPa%2BNgvg4pnu11TdqP9oStijZqcF5ImafGQqxc8tq%2FNg"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 02:37:07 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df158102ffa32e4-EWR",
=======
    "6e14d4a819842745-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "48c2135c-96c3-42b9-b08a-734fc4ccb726",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248660",
    "X-Trace",
    "2B8321BC388239459068A37F4047B08A699807F290000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zPlH4jlUCsgP1PGBTIFrrqtTpqBsVeXzbG%2BEJa42R%2FTYCqZmFR%2B%2F7jA6vJvdjKBYdCEKfkS%2BYTgtR%2FCnPhaJMfmWpBFFMbEOyLiDCtddpx6TvYsAEnvJKEmldhq%2BD9iI"}],"group":"cf-nel","max_age":604800}',
=======
    "49f756f1-4c78-4b47-a6ee-6b85394599ba",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249283",
    "X-Trace",
    "2BD9C12D2303C2E0909861441FCC632B6B59C907E0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xSV5ymXByg%2BnvlLANYxYAapN736TgRvT7oktV60IfN0Tn7V6iwLKWaaCj%2Be4SVGIf2LZIJaEPN80k%2F1BWzBo22fMRHGcBS8RiqR%2F0C8ll%2FJByy8XPt%2FoxJ%2FKlYot87Ii"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:15:22 GMT",
=======
    "Tue, 22 Feb 2022 02:37:07 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df15811081f8c8d-EWR",
=======
    "6e14d4a98800275d-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "fdfc885d-03a0-4093-b3cb-e2176654cbde",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248659",
    "X-Trace",
    "2BE8242FEFCAC506B21497A715BB996E21B5A4479E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Eyap3QVBcyiV4mhjSGZOxSPUnhy%2BSoL7LkSrh2sIMpKbVgeD6HF7Vq1FNh6BtJmFBh15YM6kL53oQlrYLYRpqYwymOOb0kqE9Iu%2B%2FKofvBsDhR5fU1vjl239fEDyd6Kb"}],"group":"cf-nel","max_age":604800}',
=======
    "848dd3fa-198a-487e-b7e4-0b91bb41cd06",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249282",
    "X-Trace",
    "2B193CC32845B775B17AA0EC35940F37AB354602C6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nrdkiJ9GD9DaaVU1MSa8IMx1f38C78IpXkLIJPdSQNpaxpmctHVz1f15AYUYQvOQ2UfoFKrW0KRmPr61PFaIUWO%2Bn4vVvM3eUV7NRfjwZ%2FS6ie%2Fz%2BEKkAjyiBhTyr6S8"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:15:22.624Z",
            hs_object_id: "7944583019",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T02:37:07.723Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:07.723Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:37:07.723Z",
      completedAt: "2022-02-22T02:37:07.879Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:37:07 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158122e8b330c-EWR",
=======
      "6e14d4aaca8c275d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "bffd5eb3-53af-499f-be50-dd7645af2fc4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248658",
=======
      "9eeae8f6-4a48-425a-b32d-f8698cafca37",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249281",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
      "2B0CA5448AE1822DA398418FEA29A3169F8E6A08CD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xx%2BBASIiN56b4xEdwbGG8GAatLQ99DE%2FLmauVCkfZaON59%2F50LKV9MmdIPjwZDJPvY3V1A0tkLH5cfArDsnQLPIsaZpAbQlUM4EcyqbkxyT22DwMuZ4vuQgagwseywRT"}],"group":"cf-nel","max_age":604800}',
=======
      "2B138C97B5ECFE1C09BD4DEFC2591146BF27CBF7ED000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MbgsWgx7eGmZ7DCfmdks%2BSGtTOSSL666kPIH%2FcFvt7l7UR2YfhlPR8AYubXXY7SGibZ7af5vgsy1ymF1aFonaBODZnUIYxM6HxLLYaeAwZhRSgy3zHQD5q%2BjNJ%2FVb1Qz"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:15:22 GMT",
=======
    "Tue, 22 Feb 2022 02:37:08 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df15813cb721a34-EWR",
=======
    "6e14d4ace8f8273d-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "68cdd5a0-3900-4374-82ae-851d713e031b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248657",
    "X-Trace",
    "2BF732769010A464E0A8674835D3F67245E2BB7535000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a%2F402cvuZgiK7%2Fl%2BGdtns%2BNWoixEbxF36Ez5ggXrMrr3KNtxWzfIeOuPKLRdzBuY%2Fpw7MMQEhXBPKZr%2FZVjeC3hCwIm8IktX%2BSRao5q2YVO96DOO%2F6YiysRav%2B2AOnTo"}],"group":"cf-nel","max_age":604800}',
=======
    "1d5aba20-5547-4188-b414-73b93a8fce9b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249280",
    "X-Trace",
    "2BBD053099D99550E96D0EAA382ECE3F37D33C25BE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jt4KxWisLC1Z%2FAWcL8kurF3xF5IiRl0eI63TFSIUAIz8MBPX8iOyyIYhgMmBVUjz0yuw5zujso%2BOlam8DkFwv4bqWncKFM6BD5BRR3BBnsRzeglNqCX6pRIJGjVgLaAP"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:15:24.982Z",
            hs_object_id: "7944583019",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T02:37:09.265Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:24.982Z",
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:09.265Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:53 GMT",
=======
      "Tue, 22 Feb 2022 02:37:38 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158d06ee71912-EWR",
=======
      "6e14d569bc562743-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "c55653e6-57d1-4bf1-afe9-17c8e4d04b1c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248656",
      "X-Trace",
      "2BEFBE735F401E5E7FCFDA4DB77BE8DAC686F84E9A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AAmaf8%2BSrcVAOW2Y7JDNZ89kkaEIWSmUkUGDMPyYp51ApG3ZPP%2BtaBVdRwIQtYVUNA3Ehde36GeeaSSxl05PQkR4Kh%2F8nl1Fk9gGDovqh2xFI9DUtT57tOeusKQBJ%2BeX"}],"group":"cf-nel","max_age":604800}',
=======
      "868fe6ab-4365-4866-8594-496974af27d2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249251",
      "X-Trace",
      "2B75E230BD76765E7FD93372EE2BF625E2B0183898000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=atc7%2F8DmiFpcI87ZlmiOpCd5XWP%2BIz2mZJgaqH1fafbhrblkSoFx720ld3LHfjooYt9vf7O1LgFGZWcCN9HsyKe41swm1HRgwO9hNvJ7RcEa6x9gir5%2Fr1xIm%2BdSzOKQ"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-17T19:15:24.982Z",
            hs_object_id: "7944583019",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "5",
            hs_lastmodifieddate: "2022-02-22T02:37:09.265Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Evan",
            twitterhandle: "text is also here",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:24.982Z",
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:09.265Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:53 GMT",
=======
      "Tue, 22 Feb 2022 02:37:38 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158d15bf2e764-EWR",
=======
      "6e14d56b1f8f2737-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "de0c7da5-b2df-4f8f-8840-9cf7a4f75586",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248655",
      "X-Trace",
      "2B5D6538ED4D333AF46F2665BCC0955B5E0C3098C4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=k29FxP2AzOi8shRm88rz%2BasL7%2F8tamHiuxsak9wxoJXIT6gl7ygqt5T0Aq6ZHQwT7GKy%2Fl1tl35YGWeUPNpCvkttjaOUqgQ9AWNkMiOH4C3LO6rOoAjpSF7%2F9yd3HARg"}],"group":"cf-nel","max_age":604800}',
=======
      "d0ebcd27-bfba-49c9-82da-45189ab52c7b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249250",
      "X-Trace",
      "2B0A8761A02A653DAC8E26B2AC06368B72C8AE00DE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4HXk4WqyZUDYGlOS8vibk6NvtOz%2BZe4xyJh6XKYQbU%2BGi8I%2BLQ4KujrouuLITJqGTQJs4f0tflZMVAGUyUqQdT%2Fx1jy9%2B4kH3PIGsmkc5GQnr%2Fmgedh4XLYZJ5fdxI3%2F"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:15:24.982Z",
            hs_object_id: "7944583019",
          },
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:24.982Z",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:37:09.265Z",
            hs_object_id: "7978086466",
          },
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:09.265Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:53 GMT",
=======
      "Tue, 22 Feb 2022 02:37:38 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158d2baf08c5d-EWR",
=======
      "6e14d56c6944cf96-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "84142200-e66e-4f00-b135-957b3542489b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248654",
      "X-Trace",
      "2B821906226F6CFECB5E2A6FF34DEA3DB7049906D8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8IWSHLOU1AvX9qkeRoxiBXnIos%2Fc7X8G8roZQPgmVUnxcVItrJNqJwYfNqgEJ0ojNbeAiuUeQtCIf7hlRm15uIuCdeo43k512BovCzNGmQQW7qmoQz1IhYPlJE0mKcR3"}],"group":"cf-nel","max_age":604800}',
=======
      "b48f4236-0767-4ce4-bb6d-8f3ca0d433f9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249249",
      "X-Trace",
      "2BE9D458E5101E1E9D54F252A4E5848D7D7521585C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g45PtJs1uq1k6s01hoZCYDwBFdAOHqRVinw%2F5S3NMXZ24RmR6LTEDgolXsbeun8J%2FXk32q7dHc3DKySBi5JBvZRN1uwYccC4JL080L7svoyVATnz7JrLiszNoLYJad%2B1"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
        id: "7944583019",
=======
        id: "7978086466",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:38.955Z",
            hs_object_id: "7978086466",
            name: "Maria",
            twitterhandle: "",
          },
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:38.955Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:37:38.950Z",
      completedAt: "2022-02-22T02:37:38.990Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:37:39 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158d3a91f19b2-EWR",
=======
      "6e14d56dbc4c2737-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "28112231-1965-47e1-bd4d-dc97e0efb0d4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248653",
=======
      "d55ff098-7c12-4fc4-98c6-8de65c50060c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249248",
>>>>>>> chore: rerun nock.
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
      "99",
=======
      "98",
>>>>>>> chore: rerun nock.
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
<<<<<<< HEAD
      "2B450D51C19E29AD9DAA738D99180D7C7CB4D4411F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fuFj6Rqpqr6SCNuU3owjwqz3BqT6mZPOc8mEDCRiISS1DRfdG2BZ2GB0roiT%2Bq7C3T1qolAj3xv7JKTnxnaSvnxfVvPxJBvVc92ieo0UwLIraLVyQhJkSBxwcv61gzOB"}],"group":"cf-nel","max_age":604800}',
=======
      "2B55D79E5C580286A8D321BD700DB4DE4855FE767F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VHHt2GLCMUWDHpa1uzVagdAmLGCy11HP2VSDjYHnL0zO0Q%2Bat%2B7whp5bsAxbuRvYPbT9OVpMBxWZh9YEYLWwz4iGmcrTaZshdGf%2Brbq5QzWQ8qkTW09UbNQwgqAiQajs"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:38.955Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:38.955Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:53 GMT",
=======
      "Tue, 22 Feb 2022 02:37:39 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158d4abbd18ea-EWR",
=======
      "6e14d56f5d95cf96-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
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
=======
      "15f5347d-00ab-4750-bb68-41f7d42a367c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249247",
      "X-Trace",
      "2B3DD6B352A6727258D89306F4FEFB467C91DABC81000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lbSFNhh8Q%2F%2FDvFMikj%2FgJgY7EUdOyN5%2FlxD%2Fhb2j4DV0%2FF9y9QUxGcYETWVHYBVBHuYivsqzDVBnhTj3yf9ER9HaXde%2BY0y0u%2FDKBQNzW2E0yAKU3pNFrZrWrh1O%2Ff0U"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:38.955Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:38.955Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:55 GMT",
=======
      "Tue, 22 Feb 2022 02:37:39 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158deb8a01967-EWR",
=======
      "6e14d570cde1274f-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "c3a1f158-9f47-45e3-bbcf-c6b1f3118ac7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248650",
      "X-Trace",
      "2B0DC034BF57F8E3AE46787F69C877BCC3FC964E9E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g2DmsBqhntW3geoYKhWRGWG%2F5gBrCgr6D%2FkllR8gB4FD5pEdTfuOZku5brkbG4T0IFR2dXTnVhONwq%2BxPcHbe%2F8Exd%2Fz1KY%2F%2FWf2lRu7cUArE43aOfIIi8jIoSi9cBb1"}],"group":"cf-nel","max_age":604800}',
=======
      "73065a17-c639-4afc-ab92-4730acd0e9d5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249246",
      "X-Trace",
      "2B8B46D1B45D8E189A30904F86B6F4A9F164333CAD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S7lYDXJB4HUyN26UBYxI6rGEl4XgEUYC4RSlULKluDWud1EKnB3V4sVjlgs4iA5jYqKhUsjTnaimKSN9jomoxabD1KNh7%2F8ZV4h9dXTLZJe0sDTnvB3PqAazVii01i9H"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:38.955Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:38.955Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:55 GMT",
=======
      "Tue, 22 Feb 2022 02:37:39 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158e019e919d7-EWR",
=======
      "6e14d5727e0c2749-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "927ee645-0bda-4b71-87b8-53cdf52c2a6b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248649",
      "X-Trace",
      "2BCF9ADA80E98788A36E9A97F8C9DE8B7A1BD9541A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d1ZRjr8Ame6RkNkqkrwJSKg4Q6Bck38vdE8YQnOWhllztD1sz1t3EISErSfUzbTRiILR78ybNP0wiCcg8M8IBIncjVZWljQx8LpCW6l7w1%2BJy1wWjiEIVmW5zDhqp2%2F3"}],"group":"cf-nel","max_age":604800}',
=======
      "b6d188e2-24df-493d-bef1-6594933037e4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249245",
      "X-Trace",
      "2B8B63226F255541349CB217C35819C08624A7A492000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4M6UcWgO4DjvbkMAGRgpKRv%2FE5i5AmSC77HtbPY%2BMCO6FkE9IulO72SLNO30j2%2BR8nlpDcc8XkDdRXPd1oWNIWA63JC39r6b2YdSWBAVvFWG8AzcyVpVcQCfkPgev9vD"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:15:55 GMT",
=======
    "Tue, 22 Feb 2022 02:37:39 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df158e0fcd51778-EWR",
=======
    "6e14d573ef902737-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "246da79d-2bee-4095-aa12-ea31f468de1a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248648",
    "X-Trace",
    "2B32515160BF1A375A4ED0979B96735677A97086D5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hcI0SnoqWWXXjgWUk3y8RtttZgz7QjLgxE4TKvULH%2B9ClcBdROE3Zj6MlCgnpTOqzFw62uvTOiU0H8SN%2Fv7ISyawLxfYSWBxzcFB%2BibOsh9IDxlUucP1wJiSMsKm4B7h"}],"group":"cf-nel","max_age":604800}',
=======
    "f1e67d0f-9386-45f1-a6b4-80da2fd3b055",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249244",
    "X-Trace",
    "2BDC006B6F27864554ADDA5DD3DAC0F002C02EC6D9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7izKMDvtCeO%2F%2FfVxwgJHosBHFfpxl9kGzK8ANYBoI1whNAXxtMIza1orYkZt3%2BusAbwcptygPIeN3WhUFPYIPbe7G42sdHh%2BQfZWyAZEsCBSNb4oowCzvbKFQCKs7eaz"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:14:49.388Z",
            hs_object_id: "7945143592",
          },
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:14:49.388Z",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:36:34.961Z",
            hs_object_id: "7978135116",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:36:34.961Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:55 GMT",
=======
      "Tue, 22 Feb 2022 02:37:40 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158e1d8c71a1b-EWR",
=======
      "6e14d5753db22755-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "67e50e9a-d56f-4005-b2e7-c02920b1d711",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248647",
      "X-Trace",
      "2B3D68612A40A33A291B47A6CB77E5E8E2960CD7A9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xs2QbTZfkpD1MyxavV1x5EzmeUkhUZ541r5mlYkGmC9bO3%2Be5xzz3az%2FCpZ2XHJ3yX7wC7VdlN6MxWYqQSmkACqDa7JiSBCzauKq2B2jfh8KHvCwCpS8UqVcqLv2tgrU"}],"group":"cf-nel","max_age":604800}',
=======
      "14093fea-e451-4c2c-a6dd-7016ce9aba46",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249243",
      "X-Trace",
      "2B65113C251C43C5D79A8D6CFF8DAD240A9422FD59000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wee0hhRDGldGq9kZPo3UGrQPF%2BAnxooeDiyux8rQH%2F8X885sqr4UJrwafEUITJHgazKIdiZIoqpQY3LfKiDGClhInjTRx%2FQJ2szEiZLacp5ZO6%2FFhG8t%2BvQ0wYSppl1i"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
        id: "7945143592",
=======
        id: "7978135116",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:37:40.322Z",
            hs_object_id: "7978135116",
            name: "Sam",
            website: "www.test.com",
          },
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:37:40.322Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:37:40.318Z",
      completedAt: "2022-02-22T02:37:40.351Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:37:40 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158e2a8168c4d-EWR",
=======
      "6e14d5768c6b2737-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "8deee853-e257-4039-ba8b-517054220be2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248646",
=======
      "1932ec57-b51d-4dd9-be63-d3fabde90627",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249242",
>>>>>>> chore: rerun nock.
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
      "98",
=======
      "97",
>>>>>>> chore: rerun nock.
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
<<<<<<< HEAD
      "2BC5685775E2A85E03AD55781602A3849082692ED2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ivumGC%2Bqb4zDTFYxgFv2UPJGfXhwsdHaD2ZQ0xCh3AIP6Op56GWw%2BLuj7d6%2B5i8jdqCAw9jPMbSIi7OhOIoKLvvPHUSOrnCiUhFM4ZHi%2Fc15jRz1OqnjWtDGH6Lvkku%2F"}],"group":"cf-nel","max_age":604800}',
=======
      "2B5D1C7961DAF07D4E0890F7B00C2E98186404A6D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=933F3ARf%2FUYpjz4GpYCFRyfRY%2Fm7aE4axnsvNeQKMiI96G816Juck3kWn%2FnQnnofCAl78y0SIYOV%2BgWWhgR1aXypmaSUMzw2PoAjbp2vYSE5R4KHUH1dbVbTGe%2BsOSBj"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945209857",
          properties: {
            createdate: "2022-02-17T19:15:56.185Z",
            domain: "grouparoo3.demo.com",
            hs_lastmodifieddate: "2022-02-17T19:15:56.185Z",
            hs_object_id: "7945209857",
=======
          id: "7978135304",
          properties: {
            createdate: "2022-02-22T02:37:40.540Z",
            domain: "grouparoo3.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:37:40.540Z",
            hs_object_id: "7978135304",
>>>>>>> chore: rerun nock.
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:37:40.540Z",
          updatedAt: "2022-02-22T02:37:40.540Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:37:40.540Z",
      completedAt: "2022-02-22T02:37:40.585Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:37:40 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158e3bf368c35-EWR",
=======
      "6e14d577ea552746-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "3d8698c9-f2cd-422c-a463-5b42bfed27a1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248645",
=======
      "bd1cfa19-06cf-47ca-83a8-2fcd178eb9a1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249241",
>>>>>>> chore: rerun nock.
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
      "97",
=======
      "96",
>>>>>>> chore: rerun nock.
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
<<<<<<< HEAD
      "2B7C25BA4B0CD796B264E29C4F031347776A5FA780000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=N1M814SSTE9lis%2F83Y81yfntfAJ%2Bba7yOal2L3BBksOhAseKSyES%2FMO7i576oGYL3ZNNMG2W4hHDH3ttT%2FRucLexUDk8K%2BJWZa1EQ7cavoE5Pswr%2FIqfNFHNsKRi%2BAvn"}],"group":"cf-nel","max_age":604800}',
=======
      "2BA4691E7E24BE7FBCEE60BE3F0CF560B6444375BC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EQ7NlwNlq5VYfEwcNF8FNsZAuvVlWWpjc%2FBswzhnnczblvJ%2FQz91wcXF51skfklq0t2fehNgJ5gM8gjkLSKXaFzKpQYRZC1sDXGCipEtAU68xI83esP6CYDtacZVlNIZ"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:56.015Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:40.322Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:15:56.015Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:37:40.322Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:56 GMT",
=======
      "Tue, 22 Feb 2022 02:37:40 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158e4f8b98c21-EWR",
=======
      "6e14d5795c7a2755-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "c80c02f9-e65c-4c5d-839d-373f2a6266c6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248644",
      "X-Trace",
      "2B543BED33B08C7164AFFF60A097AA5EF3700EAD63000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yM77bTUr3HQSF76mf%2FGYz%2Bz4si0SlXL6v%2Fg%2BQ64ye6iYEoNDTX2S%2BrowCcVsc2Pt1oiilTUoVgUevfh6XPhUcQOMAYD8V%2Fs0NwISdGLvh%2B%2FAUtqtjyrxxAlGzpnhu4xD"}],"group":"cf-nel","max_age":604800}',
=======
      "20273821-e68e-4be2-aa41-6a97b552c763",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249240",
      "X-Trace",
      "2B8522258E0DC583A7B9F5B96AA39608AD67EDA6E7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RmEUWJ8nMiGyGQFHfRNbreiVBA7TQp4%2ByRujnv0WgfO3r3E5cIJRhN%2BhGSl3doKitz60tTHvZ4dGuOEmWfkF%2BwhNVJcAPGJrtqa6V9KjhiBgkDXSOz0moN92xi8bCGKL"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:38.955Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:38.955Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:15:56 GMT",
=======
      "Tue, 22 Feb 2022 02:37:41 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df158e5efb68c42-EWR",
=======
      "6e14d57aaba5e074-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "962bffe0-f3e4-477c-b692-e2dcbcaff8de",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248643",
      "X-Trace",
      "2B35AB85C39AA2F1D247E9B78595F0CBF7BEA0A59B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gPmarIzfC3FB6RtkkhFrwGRuqQvLk51xT0b0Z0WhJ5DsCYS%2FNwdkO8Gj1u9hokZz4SCWm5guZ3ldh%2FdyQd0BPUYW7q3Laq6znrEpey6e8J9mx%2F2H4qJi0X3doGBCoz6F"}],"group":"cf-nel","max_age":604800}',
=======
      "6ba67ed2-e54b-49a3-8e81-c58bc3f70e90",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249239",
      "X-Trace",
      "2B098E7DC512FD8C04C419275E54F255E11A8A6F33000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NwAOBnait%2BWBTup8In%2FUYMOapXHT4XsR2YljgqyZ3EGhbbjZb8Kuay%2B8tV1KIQnn8auAQseNm%2F%2BJOYQC%2FgvEyW5F2gpUzxa%2FIPqfiKRnvRYERfHrdzXCPmBWR1ln4owp"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:15:56 GMT",
=======
    "Tue, 22 Feb 2022 02:37:41 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df158e6ae228cd6-EWR",
=======
    "6e14d57c0f04cf8e-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "a2cb0e07-e17a-4378-92c7-3f0248b2efb5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248642",
    "X-Trace",
    "2B72B971790C17F191E93A588939A56E6285215CA7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IQGjeD8U5O92t63KBiKScmYp8vflxMwfNAMFe60U1yRcPzv7kTKQ35PepnZ4l67Ou07aA2oEnxSMIz%2BoV8nza4mS0E7apqe0z%2BtpBK4O%2BEc8uPRAc%2ByS3%2F58chosgztR"}],"group":"cf-nel","max_age":604800}',
=======
    "ae33679b-2fb0-4ed2-8093-6e1bee366505",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249238",
    "X-Trace",
    "2B7ABC43A88EACAF3AF9614CF4F58FC215079BA656000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=snLF8h41bbRmrCZJHsLJjB95Moyls9Q2xFOokWA63CWnijiSR%2FePITzwKIf0%2F1XQmdomNPsLgG7oK7CiIhacEK5CnugD3ZwdOIFdYB8uYQIC7xM%2Bbjc9lKw734%2Bmu5Z6"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:56.015Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:40.322Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:15:56.015Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:37:40.322Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:16:26 GMT",
=======
      "Tue, 22 Feb 2022 02:38:11 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df159a308e8e720-EWR",
=======
      "6e14d638fb01e08e-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "ba037357-173c-4286-9302-f1e43fdbd84e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248641",
      "X-Trace",
      "2B3C4E4EF44ED0CAD9697F06B4FDB80B4B2064CD57000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fEWgt0qJ5n9Q5AWOih3%2FJwBp0yGWK106ci%2BSN7CgjT1vrfO6ppLLuhrfY3RzQRgG8k1Coy6T31q2RzXi6%2B4oEByCA44NPp6zxp4BadPIn%2F6OScbmNLm78osFzmGplRG7"}],"group":"cf-nel","max_age":604800}',
=======
      "d09acfe6-702b-4f91-94e4-9cc516a4a2f7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249222",
      "X-Trace",
      "2BCCEB45CC06D4625E3E749350DF8C936DF88943EF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z7dahkCHNzCXUSz%2BNbLGCwcaHI5y2uitRQ6e4VtJKfRrmC2AqhYl3CmPh%2BEGn2MyECMwynQUCaiEQB8AGI0CzlBerkXoMz2N8OCr0sbpH6tXUBvAEjH7vA22C5B%2FZK1f"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7944583019",
          properties: {
            createdate: "2022-02-17T19:15:22.624Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:53.597Z",
            hs_object_id: "7944583019",
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:38.955Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:15:22.624Z",
          updatedAt: "2022-02-17T19:15:53.597Z",
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:38.955Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:16:27 GMT",
=======
      "Tue, 22 Feb 2022 02:38:11 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df159a45dba8c83-EWR",
=======
      "6e14d63aa85ccf96-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "3c6921fb-ee3a-4352-8461-361d67423ede",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248640",
      "X-Trace",
      "2B04FF2FB3DEA29FB5046673F549F77D8F0E645B1C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MdwMDAqWs0XO0qGdWUoCjIONKF%2F9KKyv69z27dm30o6gnvpS5%2FEgRT8PMrzfvD1fIhzFjwooguxOcragBAMbK6MC5XAlfDFPG%2BSfx%2BJmH6Ewz6SAAd%2FdwzNJlmAPvp94"}],"group":"cf-nel","max_age":604800}',
=======
      "e0fe6865-e353-433f-a9a9-c562e793f550",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249220",
      "X-Trace",
      "2B7D672A7E7041CCBCDF274BE20CF8C353D45EAF6B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B%2Buq7HpvQq%2Fa4lS7ZIQz7%2FaEF6HTvEOXG4woiMj3hcVAKWtW8k3lHyfm8Eieloq5yQDRWDmRjiq3jXMOakUf0haZE6kg3K8w0zk9kN0p%2F1UW9U8uATEAz3XHQgAdLxTF"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945209857",
          properties: {
            createdate: "2022-02-17T19:15:56.185Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:15:59.877Z",
            hs_object_id: "7945209857",
=======
          id: "7978135304",
          properties: {
            createdate: "2022-02-22T02:37:40.540Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:37:42.045Z",
            hs_object_id: "7978135304",
>>>>>>> chore: rerun nock.
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:15:56.185Z",
          updatedAt: "2022-02-17T19:15:59.877Z",
=======
          createdAt: "2022-02-22T02:37:40.540Z",
          updatedAt: "2022-02-22T02:37:42.045Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:16:27 GMT",
=======
      "Tue, 22 Feb 2022 02:38:12 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df159a55a5178df-EWR",
=======
      "6e14d63c5b2dcf96-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "661c0466-8036-48fa-9ded-0ff3118d814f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248639",
      "X-Trace",
      "2B239FC3B2EC97928F3D1EC640E7341AA457571B0F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xFAP2GFj1P%2Fh3Gf4o7EU3bUK9tO346hZOwbv2zfWeoOdgfaPFVQrOqVxrIzkOR4YD1%2BB1PikaoyfMrNtdNSAskyLury%2FR1sdTqk972S8Rv3uKvZFfSGMeXoPBeOq95%2Ba"}],"group":"cf-nel","max_age":604800}',
=======
      "90bd0620-9d60-42d0-870d-55cb24ec0027",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249218",
      "X-Trace",
      "2B250679B8E9E291C49938694CB9F003B47D2B0866000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RoUQ2EuwbMX2GdJ7sBZWpTv2XuXw4zpsY5HN%2Fsl1cRmF32TF%2FfKr%2F96j46TiSgguo0jgd9skUiGl74zTvAKGUtzBWwqDjUhR0P3t9OYHn1PkXqFoc1IjKA%2Fgm6rzOi%2Fx"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945143592",
          properties: {
            createdate: "2022-02-17T19:13:11.178Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:15:56.015Z",
            hs_object_id: "7945143592",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:40.322Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:13:11.178Z",
          updatedAt: "2022-02-17T19:15:56.015Z",
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:37:40.322Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:16:27 GMT",
=======
      "Tue, 22 Feb 2022 02:38:12 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
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
=======
      "6e14d63fab81e084-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "1a9e950c-3965-4127-bef1-f12f2d56ffcd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248637",
      "X-Trace",
      "2B7128E8F0A97A093B88C19B62A6590C53ABA8583B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CghRcWiSx9SDX1w4YPyf3fC5vl3orUQarJyhwwv3r8yxNwuvcY%2FoFDw7Sl4%2FhmgqkEgAwREpvJTVudLCWl78nDAOravg%2BErxRXEHYMEksrv%2BMzd0qa5fiUmtq%2F13qXN7"}],"group":"cf-nel","max_age":604800}',
=======
      "366b191e-6f10-4a58-8c3a-273cc15e67bd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249217",
      "X-Trace",
      "2B575F592BD02DD602B182582998236850034D7D6D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FOmprUxD2WRSiAX%2BjHe8omVeKD5nWdpSB0EmgeGML%2BDcxUKYPkSZxelPAxImyFetswBIN%2BnzE7xgHZgtzSBz0dUBtGhwW3IB1Inb66Go7fjPXsl4KFTcQC8l9%2BpCQpvE"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:38.955Z",
            hs_object_id: "7978086466",
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:38.955Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:16:27 GMT",
=======
      "Tue, 22 Feb 2022 02:38:12 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df159a899418cb4-EWR",
=======
      "6e14d640fc272746-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "1ab124c2-053c-4678-957b-fec180e07e01",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248636",
      "X-Trace",
      "2B12AC11997EA56421445546903B885B7816294BFE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0G30ci5vWcwXzw4L3xz5lVVO1ubpy4iDEcF3cEqJNbwIh0s5%2FLIADrmsGpcRmkc2HJ7bpEa%2F%2FuZ%2FcXV0xG5ZPwK%2FGpk0JQGRjoAg4YOHqgBaZFmAI%2B9vaoCNctb4sWE7"}],"group":"cf-nel","max_age":604800}',
=======
      "f014318d-6c3e-4098-be77-f4b57e372ba2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249216",
      "X-Trace",
      "2B1F1D8334D77AC61BD9E3618221CA2D39952D5137000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vs8Pkod2sVpGW7gi%2FSjm7KSUNUiPVgmjYtF4PqtIDzXJePfMb82FfEPhrbQgpa2NbmIhXkx0ORfJ7NuMdXB54WCyfR7w3FISPewz9mhaPOc52AEVE5eRvTMVAAaXbmVN"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
<<<<<<< HEAD
=======
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
          id: "7978135304",
          properties: {
            createdate: "2022-02-22T02:37:40.540Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:37:42.045Z",
            hs_object_id: "7978135304",
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
          createdAt: "2022-02-22T02:37:40.540Z",
          updatedAt: "2022-02-22T02:37:42.045Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e14d642682fe07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "adc128c4-4bd4-43ff-9812-ad8efd2402e6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249215",
      "X-Trace",
      "2BA10C451D708D83C182213C8613466C547B5296B5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LStdQP6VLoRGUHWHmWMKuMfb%2BUrZMf5IsUEhQA8llgXfoNHRIe0osvRpViSQxpvGeKfOs46J0ymbkpSkz1f2VjukoArTzR72CHZ5sczB0ikid%2FB7EOU465GEH3AdhBcq"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
>>>>>>> chore: rerun nock.
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
    "Tue, 22 Feb 2022 02:38:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d643cee3275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "03956c2b-ab26-49c7-a6a5-3eecb78c7f3b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249214",
    "X-Trace",
    "2BFDA206FD0882C2F2A9212155C0D7B793B62326D5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EdlIvp%2B63VA%2FmeXrcpkKEy5HHRvCFHiZzpnrBRqjcNVQRW4AqmmnW9NE8jEmWuOd2F4SzmfmWruYkqzxNODhEI9bNHoCc27QeE109kRwOYxXvS4k7BWSYQuIEw69WIv1"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
<<<<<<< HEAD
      correlationId: "d81cdc95-003a-451d-9d9d-b355dd6a5819",
=======
      correlationId: "365adbc0-8cd8-4cd4-b1fa-807c49e26b64",
>>>>>>> chore: rerun nock.
      category: "RATE_LIMITS",
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:16:27 GMT",
=======
      "Tue, 22 Feb 2022 02:38:13 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df159a99e28f00d-EWR",
=======
      "6e14d6452f83274f-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "d81cdc95-003a-451d-9d9d-b355dd6a5819",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248635",
      "X-Trace",
      "2BCAA730F1F157A37A1E4D1D0B9D30ECA4CF8C5E68000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZiC11ys1p6Ak6O0HJodupttTm1UH46fqVGCgW9qgYMGaz0vlaeTYaDUgjdLKJl0tFzVCmEdHmujnXzrhVseNoKnn77%2BubW25YcXGCsSDPM9Kyy0hK%2FeassCuvQ7P0B%2Bn"}],"group":"cf-nel","max_age":604800}',
=======
      "365adbc0-8cd8-4cd4-b1fa-807c49e26b64",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249210",
      "X-Trace",
      "2B810D65C4ADCCDA504BB1EB93835490F44170A28F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VnlV63FiDrAnMY4p1OmVDACIxaE992Kqr%2FmcggGw%2B6B4%2FykvXF8XMelvr15UXeYh9baN1xakjK6BQgOdIYS6vSFHSQb%2BOi2BWte0cvYgUutWKoCHA9WrXG7qihxIpbPq"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
    properties: ["domain"],
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:29 GMT",
=======
    "Tue, 22 Feb 2022 02:38:15 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159b35a050ca5-EWR",
=======
    "6e14d650bd63cf96-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "9259c0cd-51bb-46ea-bbbe-7ebf95d734c3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248634",
    "X-Trace",
    "2BDFA0B75D9D5D1B108A7DAEE1C59F1BB0725B8A76000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DYObV25jbiEvluBJxD8L%2B9zbiKi94Jezxz43Fd2IvbO3sAzNftsbBEq6du9S7o42c3s5SMnx9m%2FlGogDWb4E1LVPSrgUeaYEdYenkdwpFujeeIAip4fi8PdIQg8GRyJW"}],"group":"cf-nel","max_age":604800}',
=======
    "f65752d6-5a1f-485d-b6d1-5e526b5fc15d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249205",
    "X-Trace",
    "2BFEE94B57F8ABB92C794F8271CEA7F85684EC2412000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vZ2WiyG4nLUHoR7lQF%2FvSbHe3UYu7DmJ%2FzOHr%2BRu%2FaIG7nJ4bz6uvYNiJDnLEfLHgyJYJmtxNFqLUjvMhVM%2BZm9OSvORH5f%2FgmWNniV4yZP1m2atyEUhFvCdTlYYAm%2Bg"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:29 GMT",
=======
    "Tue, 22 Feb 2022 02:38:15 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159b448b88c87-EWR",
=======
    "6e14d6522d13e07c-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "bf907952-eaba-4347-9fdb-f184ab2d7019",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248633",
    "X-Trace",
    "2B36232EE16E29607A1A89B8D722BD9D1E97958043000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lys31FFOW1gHcB%2FDP2mXZaRamqf5UEBXm2K5k4kJCISzXX5x4OQRSPGoLTDFP37n1UpxA26PS%2FPWb4dTOrh1dUw2%2FFbeVc96GcDRVP5tt9QrcluNnXjjn0zixr012Lx3"}],"group":"cf-nel","max_age":604800}',
=======
    "3dd604f9-c7e6-474f-accd-7024927005bc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249203",
    "X-Trace",
    "2B774C6C761D06526296169A0F42B28027B5DE5847000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZdhCp2scgqXJ49Wq5I5Gfxvc5q%2FOo4l3n5CY2sOrFzpi%2FcocHJ6hQPkb8tmqmYcZLH2pBfBKUG8wVe0d3KR4F%2FPP7aT9izX07BTcrjKi6sKo%2B7TMHIat%2FFg%2F9EIBI9fY"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user14.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user19.demo.com" },
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:29 GMT",
=======
    "Tue, 22 Feb 2022 02:38:15 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159b55be41978-EWR",
=======
    "6e14d6539a91275d-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "8ba39c58-9d26-4dac-a004-fc19c50ce03a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248632",
    "X-Trace",
    "2BB669FB705D71C4622F48541951A23F34CFDD8FED000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZBdMFmY5MjHWRVrTUxEzJOUiBH%2F1BoeG9lm%2Bav4weu8xMvJyL8XqN%2BKo%2FnN%2Bu7Nl8xYX5gpIZB5PfiiFkzrQNR3JtpsVtOYKUD01ijavW%2FjZ344L1589ylhP4MszEemo"}],"group":"cf-nel","max_age":604800}',
=======
    "bfe33221-4680-4ef3-9c10-c24a026dd460",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249201",
    "X-Trace",
    "2B4F0876298AA646FD007B32A6B0CF0A84384515C7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8gAJuAyA%2BkSx8Fx5q1VAKUzyXqiS%2FC8lhUxR%2FgirjBifk1FEmWRlv1kj6ZQLUEKuw9EvmEhyCeyE7LDqdvA5GPwhx08VzhZJg3GCDTz%2B%2FPrdbUosaCSae%2BdGAtmDob16"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "a38b1a4d-ff9d-476b-a0d4-97d6204c22dd",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6e14d654f9922755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a38b1a4d-ff9d-476b-a0d4-97d6204c22dd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249199",
      "X-Trace",
      "2B545C61DAF076718FBCF32781AB43BF9A418E4D6A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jpUxPrCZErIuEGGG0Awxk9wh4GakPqbFCNMV6pttsGg9oalc1YurWHOXO9u5eFR3Zu%2Btdu2EmDIBOpkgl3snwjtKlZ%2FdKp%2FAZ7GXvYofUjNiQNue%2B0xk63yIEiBFvZM%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 02:38:17 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d65db987cf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "90d9a72d-6665-45c2-ac45-4809d05474a2",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249196",
    "X-Trace",
    "2BD374E9BDD7FE9952838B4A12B6EA8BE4890190A2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BQJfW03D8gKMKi87w%2Fz7CkXEfdiko%2BVh1UiAA3thaEAOTPUdRktJgP3ehKcdKSi78tpbOx0Jc7lt8EhWOHwL6nT7sU2HckSPkPq2oB%2Bs9wkGbJrSdc%2FooPnTTsJMs2w7"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
>>>>>>> chore: rerun nock.
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user20.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user25.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user21.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user26.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user22.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user27.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user23.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user28.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user24.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user29.demo.com" },
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:31 GMT",
=======
    "Tue, 22 Feb 2022 02:38:17 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159bf18761764-EWR",
=======
    "6e14d65f1a332743-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "4c6d5f9e-09ec-4a73-a20c-ca1a6ee5bb04",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248629",
    "X-Trace",
    "2B7BC442D69BC1BC76D6A4BDAA7E87F8BBA4C04B68000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aazbBRGzZTSH5fVpOFtoYZVuDLOpVr3x%2B%2Bt5q%2FZQpQ7FG94r6fPvk4dsMgkwZKAeQsrJFUsjAfjxME6AD5SZCZ1%2FHp80mr8uouq4nzmqu9p87%2Bk5GKjDqvHVC70O76ww"}],"group":"cf-nel","max_age":604800}',
=======
    "5fc40dd5-9f56-44c4-a8a6-11b1fd077223",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249195",
    "X-Trace",
    "2BE7B968673AD8AB4BC5DD62433406C165FD141B77000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=coAdaiaDJMQIRpwS7ElN4g48MXlRi%2Bn%2F4H%2Bxg%2BtLIPsbcobFX8vZoTY%2FFZtN6hxhhI5k%2BjBYXT4Zn3IF5cOB%2FHCHLJqmlPlKgb3dqPD%2Bs9nFFXdFj%2B92res%2Fa7UxUopr"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:31 GMT",
=======
    "Tue, 22 Feb 2022 02:38:17 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159c0286819d3-EWR",
=======
    "6e14d6609e882737-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "f6ed4043-7f0f-42ea-9742-b574a39cf815",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248628",
    "X-Trace",
    "2B852748293EB27B545D267EFFB837FB3D46A50116000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=v22yQToBWx5AZjAu9fjad%2BOjVivPcIDL%2BnVdjAqKW6xacen1kvmCBjicowpx0KbW7OYG3UAorjXTrDQOoV2mM51l1zZ9Rh9EACPJIabtzokfHNbFmh1NBLa7kKx%2BEjyK"}],"group":"cf-nel","max_age":604800}',
=======
    "a75a3ba6-1606-47b2-8f4a-9cc1e256d46f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249194",
    "X-Trace",
    "2B0AC0CDEA695778CFBE7502AD7D497ABDBC92AF70000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NNzFWm3k02jmAppc3I%2BJXeRXg3yPVLRB%2BO4Bg5AEDkGXUsTTRWvjT7aWDwLxQYS%2BtdlreyU0nrky5Q5BOp62Qj6Bk%2BPKeIJxOjzcbPcJd%2B8uDvn%2FTjeaZFR9Ywpa%2Frpl"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:31 GMT",
=======
    "Tue, 22 Feb 2022 02:38:18 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159c1292f8ce0-EWR",
=======
    "6e14d6621c89275d-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "611f74cd-988d-4fab-a43b-9ec39cfbbc69",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248627",
    "X-Trace",
    "2B00782935E779937A8E891A9867F11F95054CBD14000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hM7jjqWDy5n1xdXbAFhDFMGzNtay%2BEz75nFKuecEWAGHjf4IXW6OPaUm%2Bf3lY93k06g%2BrGoXe5daWDBkim80XxHfZfmXLYOgYJHGUWOErqRdzT9ajMWlFuaD%2B%2F4TSKvW"}],"group":"cf-nel","max_age":604800}',
=======
    "dc2bc9e0-c45c-466c-b2cf-840d5e32ee3b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249193",
    "X-Trace",
    "2BBB081193E5E12F4372DF844B6B35E32403A98CFD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PKEETljys%2BYP0DCTggoaYCP6iueZ814ujdHYzi4kafgGC9opimelHM%2BYfawYfxHn7cKNP%2FFrf6Z%2ByS4E%2BlrIhIl66rg8Obg2DyJ%2BYo3riGnTveK%2BPF28xDsowemnWdDx"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:31 GMT",
=======
    "Tue, 22 Feb 2022 02:38:18 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159c20f178cd6-EWR",
=======
    "6e14d663aecae074-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "6c817e50-5541-4a6b-9035-b86f21b4de8e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248626",
    "X-Trace",
    "2BABA4A189FA397969A4C0D90D3365B41702C76DB2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PgndZCUB6rSzZxyV7K7acwriMcEJEEJx0fXgLgvmIzJfrLPrEp8j9OIN4lQtsRP9T0ppLEI1cTrTqSlxmyGLbEgriJq7K%2BvVF8TROXA3RhHO7drseUpWEWsPQj6QwFv%2F"}],"group":"cf-nel","max_age":604800}',
=======
    "fad39650-5a92-4692-a8e9-548fe6dd6b45",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249192",
    "X-Trace",
    "2B75E9F496F58F262B128A729E844C51B90AE02076000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cBJpfMOkv8WfNP8UF4Vwi8C7zWJhGH%2FdRLY6vFWnqoNfnUaL48XNkyHEzgue6dJuHBzi6iiUoMWR77vHkWZ%2FGs3YZdjhjvoRvG6f2RnI%2F6T8ifQpaZF9I%2FAA0aZf8akS"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 02:38:18 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159cc5a0b1a2c-EWR",
=======
    "6e14d6652f0be07c-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "d6f007b7-8c0e-442c-b07c-0e2197c62859",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248623",
    "X-Trace",
    "2B227CE43F580973B9AD0BB760410FD7F9FCD561DF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HOSYH5JF4Wn7yxNC2W10IVzw4vn1zkiemb77Bf4ivKCgtNMfFJ2N%2F%2Fze2QN7f0H9vgXNELXxoMjUj5mF2hFfNid8BeM%2BCAtkedbGMTP2YgTK3BA4WFVVJt2g5D4dlPlp"}],"group":"cf-nel","max_age":604800}',
=======
    "554fd727-e10d-4296-8d27-f5cdd8e288aa",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249191",
    "X-Trace",
    "2BEB758BCFBF1A87ED265B7DBCEC36B07B3610BAC2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2jmsGxtdR1Xio4C3RJBUoMqJSubpHWCqj3r%2FuIggwgEBTDNmkzp2dGIfN0T326yuf3htEWEzX0Bz1PX0xcie0oxhbLzXacwr8hjKKBV6vQ2LzkiZgVRV1Z%2BBPd6LP4Fz"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
          id: "7978135359",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user17.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135359",
            name: "Fist Name 17",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135344",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user3.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135344",
            name: "Fist Name 3",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135378",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user35.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135378",
            name: "Fist Name 35",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135352",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user13.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135352",
            name: "Fist Name 13",
            website: "www.13.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135372",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user40.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135372",
            name: "Fist Name 40",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135362",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user48.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135362",
            name: "Fist Name 48",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135354",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user31.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135354",
            name: "Fist Name 31",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135368",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user6.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135368",
            name: "Fist Name 6",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135377",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user7.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135377",
            name: "Fist Name 7",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135346",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user23.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135346",
            name: "Fist Name 23",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135385",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user34.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135385",
            name: "Fist Name 34",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135345",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user2.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135345",
            name: "Fist Name 2",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135363",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user36.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135363",
            name: "Fist Name 36",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135349",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user47.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135349",
            name: "Fist Name 47",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135347",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user14.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135347",
            name: "Fist Name 14",
            website: "www.14.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135358",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user43.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135358",
            name: "Fist Name 43",
            website: "www.43.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135380",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user26.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135380",
            name: "Fist Name 26",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135357",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user8.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135357",
            name: "Fist Name 8",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135342",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user33.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135342",
            name: "Fist Name 33",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135386",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user1.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135386",
            name: "Fist Name 1",
            website: "www.1.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135369",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user27.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135369",
            name: "Fist Name 27",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135384",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user10.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135384",
            name: "Fist Name 10",
            website: "www.10.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135348",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user49.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135348",
            name: "Fist Name 49",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135367",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user45.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135367",
            name: "Fist Name 45",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135365",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user21.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135365",
            name: "Fist Name 21",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135338",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user24.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135338",
            name: "Fist Name 24",
            website: "www.24.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135355",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user44.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135355",
            name: "Fist Name 44",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135370",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user12.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135370",
            name: "Fist Name 12",
            website: "www.12.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135340",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user15.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135340",
            name: "Fist Name 15",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135387",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user22.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135387",
            name: "Fist Name 22",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135351",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user25.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135351",
            name: "Fist Name 25",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135373",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user37.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135373",
            name: "Fist Name 37",
            website: "www.37.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135383",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user41.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135383",
            name: "Fist Name 41",
            website: "www.41.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135374",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user11.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135374",
            name: "Fist Name 11",
            website: "www.11.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135356",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user4.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135356",
            name: "Fist Name 4",
            website: "www.4.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135360",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user20.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135360",
            name: "Fist Name 20",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135382",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user46.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135382",
            name: "Fist Name 46",
            website: "www.46.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135353",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user32.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135353",
            name: "Fist Name 32",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135376",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user0.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135376",
            name: "Fist Name 0",
            website: "www.0.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135364",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user30.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135364",
            name: "Fist Name 30",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135375",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user28.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135375",
            name: "Fist Name 28",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135366",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user18.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135366",
            name: "Fist Name 18",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135381",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user38.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135381",
            name: "Fist Name 38",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135343",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user9.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135343",
            name: "Fist Name 9",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135341",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user42.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135341",
            name: "Fist Name 42",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135371",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user5.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135371",
            name: "Fist Name 5",
            website: "www.5.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135339",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user39.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135339",
            name: "Fist Name 39",
            website: "www.39.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135361",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user29.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135361",
            name: "Fist Name 29",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135379",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user19.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135379",
            name: "Fist Name 19",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
        {
          id: "7978135350",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user16.demo.com",
            hs_lastmodifieddate: "2022-02-22T02:38:18.760Z",
            hs_object_id: "7978135350",
            name: "Fist Name 16",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:18.760Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T02:38:18.759Z",
      completedAt: "2022-02-22T02:38:18.905Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:19 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df159cd38a332ee-EWR",
=======
      "6e14d666ab502746-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "142123c2-6fdb-4461-9dcd-ca53aa0cb8d9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248622",
=======
      "5e0b245d-69e1-4a22-9f4e-80fea5c95f4f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249190",
>>>>>>> chore: rerun nock.
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
      "99",
=======
      "93",
>>>>>>> chore: rerun nock.
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "9",
      "X-Trace",
<<<<<<< HEAD
      "2B46256B02D45A1FC2959F80A784675C32F7AAC908000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wTdqja1Oxt0GWwYQ%2BJzaHPWRLHkd6E%2BWvqRkIrM7TmKZzfekgQh3QwEl9%2BGTp3965Xb7srm6vjFPVf0lvayLwZ%2FOTZC%2Fe10AYHH1CPGiqaZkFV3lBAwMRVGnjzW3jeoP"}],"group":"cf-nel","max_age":604800}',
=======
      "2B89D01FDF6CE3D485B5F1C361C533E8B6E3F6357B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SlXnfpPwS5Re1JgcKO%2BSZDi6ydE0x9J%2BOVJ9X0Kv9Qe9RfeWJOpTortpy29UQ%2BuxKaRinimMf9m9Hdk4%2F25rZ%2By731TQelnUdcFfO4UuoJy87RDslkRXKWFzdEKXLkJ4"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:34 GMT",
=======
    "Tue, 22 Feb 2022 02:38:19 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159cf6c30f001-EWR",
=======
    "6e14d66958cb275d-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "82fec859-f77e-434f-91ee-a48c2e25ec36",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248621",
    "X-Trace",
    "2B82C338C99D2C767BEC158515528ECD389FF3E201000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ita5%2BovvTUI7nGNy6O2hFocpLyD7rnNVWHsMq6EpdCZ1H9RfugmzV9sdR0WxLrnBH6ROwlNeFyesO730%2FX2fKgpxRig1Cp8YbJVl2JShdiP77iZXqShupIZz2JDSpKWu"}],"group":"cf-nel","max_age":604800}',
=======
    "d0a0afd6-b84e-4839-bffa-60b5ad7667e6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249189",
    "X-Trace",
    "2BCEB7B8830161B74518170442E62EE3E1224C194E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uk8nI%2F8agmJNemHGn5oOURLGIItVVlrObvmgWYOsyEDeEKFu21F1rNhTYqypyUGt73H%2F91BeXPXNpY4MRu9NiODtiDVU0dpqZKaScvX9nuGL2RKN%2Fs%2BVivWvMMiw%2FkCP"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:34 GMT",
=======
    "Tue, 22 Feb 2022 02:38:19 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159d0cbc832d9-EWR",
=======
    "6e14d66acd81274f-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "eb6a0aee-0c25-4f09-aa54-2d90c6669e67",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248620",
    "X-Trace",
    "2BF44D2176FC666811991DEF24F8C38ECC8884AF75000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=twHhbBgPgK7YPsQFkXlziQGawKh3UN0XBZrtofCH2Z9ihUOr5e5pjLEGsxJuE%2FRPjRJFkd%2FoHAQPWOn3u%2FT3KPdBz%2B23HfMMn3sIqhc6uJfTWfb%2BmQIQz1igY%2BDB2yxk"}],"group":"cf-nel","max_age":604800}',
=======
    "2e8dcc26-b5d2-4dcc-b6b9-6431630d1e50",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249188",
    "X-Trace",
    "2B69B6AAF7638AE61E694185F2B8744F6244F5A759000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uBEInQiDQ0DHYUjB9mxNdilYmw%2FDLOyp%2FtpAl224PGp9N%2FTmBBWk%2FL03QBXfJP3UKubDsYEOXOQzthXFN2QeSbAupAJd0f90KxCwbQG7XufldZ9I%2F6WdGfmZRVGst7cm"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:34 GMT",
=======
    "Tue, 22 Feb 2022 02:38:19 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159d1eb668ccd-EWR",
=======
    "6e14d66d6f21275b-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "06605f6d-e75c-4196-97a0-de52ca3ed3a1",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248619",
    "X-Trace",
    "2BA7CE23A607704A8D6201686DE5EB5993A8B61536000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4JNGw9OBfFu%2BeYZsoT3GateB6mrn6Oh9v8gqovAe9eigJI2ZyRxV98v%2BSvvSs7q2xTW91kB2fCrlqebNmBzv%2FedWZ12NWxmIJHLlF1OfjKDvuezxSBwdYSj2sGt6Yj5R"}],"group":"cf-nel","max_age":604800}',
=======
    "834969bb-5452-4cdb-ad77-7bd466701f64",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249187",
    "X-Trace",
    "2BB716E7F18E0D47779C66A358D5CC3A10C194B939000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qE%2B5H5OjYSwYgd2%2Bj4qRFvjgm3tKCuaVOXdatA2FulFgqUzk5z8Y7XMB8P99YhiPfjv%2Fssa5A%2F9uz8jh8OKX7Sx2bUhjqagXO%2FfsQsRoSUFStqX9t53eu5ve51iC37UA"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:34 GMT",
=======
    "Tue, 22 Feb 2022 02:38:20 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159d2cb6f17a1-EWR",
=======
    "6e14d66efe2dcf96-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "ef37412d-8214-4e8a-bf9c-81dd17fc7f8f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248618",
    "X-Trace",
    "2B5A7819756A31480B91C940762D88E16FC3F6A146000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ATJ55P39gOtirOCwwmPLIwgTfLukFWJIpARpkjKgdY4bjMsMKJcrYxjoTV63JJJwcxB1XGJ%2BQ2rjZBS7%2BP3GAy%2BWt1IpSUdzVuf6CJ%2F98AgkghMMXssNNgC2JeuqbXyh"}],"group":"cf-nel","max_age":604800}',
=======
    "a1c2d930-292b-4e3a-9f16-dd0ddf63ba4c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249186",
    "X-Trace",
    "2B5F9634A174B1F9594643417B5B97C41F66C5778A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pwgN1cuEKOSvhInBNuMV6K5a1Bx3wM5WhJuU0o%2FFm%2B%2FYN2NZ3bn5%2B59LAZT1PeDUXH4s60qg%2FofvlcehJP1XPjwe8HdwbWfIpBUOKz0F4kCVb0tXtf9mXqlQTrYDx79k"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "7978135346",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:19.538Z",
            hs_object_id: "7978135346",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:19.538Z",
          archived: false,
        },
        {
          id: "7978135360",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:19.154Z",
            hs_object_id: "7978135360",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:19.154Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e14d6707d40275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d217e50a-f4d5-4305-b1e9-edb5dc20516f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249185",
      "X-Trace",
      "2BAF39E8B526D26F9A603A2A8A69F5922AE1329FA6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q5SgPa5AZmZ0KLyKWglXaajJ6R3Q%2BKu49exltctvgi5EZVOQ6TKCsQAaR3CwKJtFBRLo04g6SAv%2Fd5QDP4gEIj3WjPRrvgnEYVFZB%2B6uthZmAGYhRTHGRF7sYyaUkFLw"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
    200,
    {
      total: 3,
      results: [
        {
          id: "7978135361",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:19.154Z",
            hs_object_id: "7978135361",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:19.154Z",
          archived: false,
        },
        {
          id: "7978135369",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:19.617Z",
            hs_object_id: "7978135369",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:19.617Z",
          archived: false,
        },
        {
          id: "7978135375",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.563Z",
            hs_object_id: "7978135375",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.563Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e14d671dc3ae084-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "894e0f28-9328-4b19-8c7d-e4e3784972a5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248616",
      "X-Trace",
      "2BA0981D80372BEF06E8B592FC5FEEC59D90C8AEC2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BUyNmeQJ%2FKPOIyVenkzvieFlQ6PXVRsDSDgAnKtvr9Rq7cLQnLEEa8tSQQu1vEY8UJxYOmDgJ9RcCDJxvceEUQOfGDgb%2FOqQDmog8FY%2B0EyynMpzbiCbUPll8qfwS6o7"}],"group":"cf-nel","max_age":604800}',
=======
      "a23430d5-90ef-4302-9a63-65c0b0f195a2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249184",
      "X-Trace",
      "2B23045ED94B5CC0BC31A4A7600F74913CCCE32FA8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ks2QwW3l%2FOA38X8X4hrXoGJNAZ1l3JcNv91ArUKYk3tuaucVikHiEPtHmOfbwOQemXwdZB3o2BToAlq2Fl%2F10egI%2FAaTQiqxsX4xEXza6AxPtWPVwOtSP0e6iE1ZaU88"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:16:36 GMT",
=======
    "Tue, 22 Feb 2022 02:38:20 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df159de48951a03-EWR",
=======
    "6e14d6735cb82743-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "a5cb4a4a-c656-4e08-83c3-7733f47d71bb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248615",
    "X-Trace",
    "2B1B3B14E925B7B9FB40F75C16F4DF59641ECFB9A9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ne%2B91CDaLpsPxNUfIabHUC7cJgKKh1enxBYyEoLwlFIpEmVSnH0yKYYMYrJu8m%2FsShJHm1QvKVjlw3HS%2FI1WJNIvr46TOANRMfyR%2FAhH9EeeP43Tsnhz4pvDy2RgOzfY"}],"group":"cf-nel","max_age":604800}',
=======
    "708bfa3e-aec6-4e36-800c-3bfec6007022",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249183",
    "X-Trace",
    "2B78140155F0FD291A742DB44CDE86EF388822DD9B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rQqljV56c%2FqOlFvnxWtAQY0ld5DJSh2BRk%2FGSt5GIy0rLBj6RfXFJ3e9TJQDhZ8VelyWyrxLpTpm55A1xky8AQfsbSKKhJ%2BX%2FFbAN%2BkRMdARx7WReGGrpsL8XohGRBdP"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 02:38:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d674cd9a2745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3df7ed34-0126-4780-8ab8-39ff910d7daf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249182",
    "X-Trace",
    "2BB34AF4A8200AA4062F10EE7E3C6CFE131635E539000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lfu7CMgtfaokPXcKn3mw0WW95SLjOek3oM5lvww0cRLStRHydrfqr2hXRtci61g%2FtYL6Q82Tx59xyAtqgla8augcoBP%2BK5Y95Ynz97dd2FDb5usQGA%2Buvbvv%2FyBLbB%2BB"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
          id: "7978135341",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.778Z",
            hs_object_id: "7978135341",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.778Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:16:36 GMT",
=======
      "Tue, 22 Feb 2022 02:38:21 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df159e1fca115bb-EWR",
=======
      "6e14d6765fbb275d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "238d3e7e-26a1-48e2-bab9-4a8f28bcd357",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248612",
      "X-Trace",
      "2B69201DF59F6D78AF28270C33E83CDDBA48A8147A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MJVOe6iL7h8OxKjozg%2FJjdmkZWRxjBplzKewIKLqaBgDwIBgsCkBEQuGV%2BO%2FO9jYI6DQ6Fzf1G7n0TUVdKYnCJwP93zuRXMW%2Bonx1LQKnEdwGIjPMz8c1HG3Zu4oxWH1"}],"group":"cf-nel","max_age":604800}',
=======
      "99dee113-5917-4b3a-b876-025671059571",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249181",
      "X-Trace",
      "2B938C0FDCC806A4C26824480921014358901ECB18000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AOwazhaK6jq%2B%2FORmtpbOBP00dUyXrd3QWwcxUguqVQzq7HSoyFr%2FVDdWAK6KVjyi0Dg7gfLnMRrhA0puR5vUnDqKzdOs2Ra38gTZPnL3LhAr0uYrrkPOmcpi%2F8AMftiW"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978135348",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135348",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
          archived: false,
        },
        {
          id: "7978135349",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.779Z",
            hs_object_id: "7978135349",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.779Z",
          archived: false,
        },
        {
          id: "7978135362",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:19.379Z",
            hs_object_id: "7978135362",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:19.379Z",
          archived: false,
        },
        {
          id: "7978135367",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.100Z",
            hs_object_id: "7978135367",
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.100Z",
          archived: false,
        },
        {
          id: "7978135382",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135382",
            name: "Fist Name 46",
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.145Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:13 GMT",
=======
      "Tue, 22 Feb 2022 02:38:21 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160a03e9d198e-EWR",
=======
      "6e14d677ce00cf8a-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "78a33de5-07d1-4ba2-b8ad-0ab516c4649d",
      "X-Trace",
      "2BBC073693076A87E0DBF956643C1B5075270880A8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VH6KXWJ2%2FpL4sbHKWMAUTY2ecI%2FcAq0dvWfQWqcEIKbRLOHQHz7I0oxEJ5zi3stsVodP43eJ65PZ0PqvRjQF4tHDZ%2BlBwYwGhR3sQW8AgFJb9Ww7jvTSO%2Fms%2F9kF3u2c"}],"group":"cf-nel","max_age":604800}',
=======
      "c770f81e-b68d-4bfe-b0c5-844b09218cf2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249179",
      "X-Trace",
      "2B6BB6F612C423558AA536A96E96A3D6C552E9CA64000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HHQweiDFg219avLeyHuZ0rT0Vwqwi7NzoOHGgHBR5LBl0nLZARd%2Btl725Zpas2fsfpRgEjwQ%2Fp1Qp8DSllSMF8s%2FjGEj%2Fyx03%2FyIADRF%2BvX%2B%2FXyvkxuLfNX75PjlvBbP"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978135344",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.154Z",
            hs_object_id: "7978135344",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.154Z",
          archived: false,
        },
        {
          id: "7978135345",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.780Z",
            hs_object_id: "7978135345",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.780Z",
          archived: false,
        },
        {
          id: "7978135356",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.777Z",
            hs_object_id: "7978135356",
            name: "Fist Name 4",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.12.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.777Z",
          archived: false,
        },
        {
          id: "7978135376",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.343Z",
            hs_object_id: "7978135376",
            name: "Fist Name 0",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.343Z",
          archived: false,
        },
        {
          id: "7978135386",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.562Z",
            hs_object_id: "7978135386",
            name: "Fist Name 1",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.11.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:42.286Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.562Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:13 GMT",
=======
      "Tue, 22 Feb 2022 02:38:51 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160a15d1c8ca8-EWR",
=======
      "6e14d73508e4275b-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "fa819915-b8e5-4d1e-8e5e-0da342450841",
      "X-Trace",
      "2BCA25CB738CA137FC7A84E8E1B6458F0E50A39B78000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DnMlBigg%2FasNfgfoWW7vHUdqEfWg6G74lasWvPVD%2BgwPLfrp1pyiee2h3KSpQpCGf3mVesSkFicknjJj5haTBPEG9X6hgJr56jodMvINnmqxh6HmOKdx4NgORZJ9K1sv"}],"group":"cf-nel","max_age":604800}',
=======
      "9dc41f69-d3aa-4ebb-b94e-2d9ccf898989",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249168",
      "X-Trace",
      "2B4C1EC8DCD1D91DC4ED69D5495CD73D5B2F79FF72000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nzW26IZQcHfUiX361JiF%2FOwoYgYmdJHm%2FY24z%2FFzlWPG3wvEIy3iZ5ynmDcM2EVOtqJYVSw7llThugJE57D%2FZRRNT73cJwaouDdKHmsqzc1XMeSckym2wolsCA%2FXXIDU"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978135343",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.102Z",
            hs_object_id: "7978135343",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.102Z",
          archived: false,
        },
        {
          id: "7978135357",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.564Z",
            hs_object_id: "7978135357",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.564Z",
          archived: false,
        },
        {
          id: "7978135368",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.562Z",
            hs_object_id: "7978135368",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.562Z",
          archived: false,
        },
        {
          id: "7978135371",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.157Z",
            hs_object_id: "7978135371",
            name: "Fist Name 5",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.157Z",
          archived: false,
        },
        {
          id: "7978135377",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.932Z",
            hs_object_id: "7978135377",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.932Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:13 GMT",
=======
      "Tue, 22 Feb 2022 02:38:52 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160a26ab9334e-EWR",
=======
      "6e14d7368d0de074-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "f8878bb0-4fcb-4567-830a-0cda2a4d8443",
      "X-Trace",
      "2BC81AF7FDE1FDE325EC58F187235FC34E4B24A34A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5jrglORpA1ThJ%2F3YSGLHnJqCTq2h0S8LVdeH%2FNGZ3lTpyBzDwOiXGJEQ9vPNZ8tfpeUqrzfMzMTkkELvOd06oufqEARYIRjIpeeHs%2BrZq4BH3znyF6VuH6JyfW%2FFADQR"}],"group":"cf-nel","max_age":604800}',
=======
      "4006cb68-a2a3-4676-a593-d77e9997654d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249167",
      "X-Trace",
      "2BC973892617CE00A4F1E64F883942EDB30643FB37000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EmPuMX9QvHKG5dhJ6NvsOZsctgOxFi%2BoNnPYYuSwAbcVQRNg5WfoiGKY6dgglG181P0T7aHQGA7MIGcFW7Pl20L8l%2BbDWcdMSkBYB%2FVfkeoEjsiCP7GOzPhXmD0LvvQL"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945104967",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.473Z",
            hs_object_id: "7945104967",
            name: "Fist Name 24",
=======
          id: "7978135347",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.873Z",
            hs_object_id: "7978135347",
            name: "Fist Name 14",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.873Z",
          archived: false,
        },
        {
          id: "7978135352",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.340Z",
            hs_object_id: "7978135352",
            name: "Fist Name 13",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.340Z",
          archived: false,
        },
        {
          id: "7978135370",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.450Z",
            hs_object_id: "7978135370",
            name: "Fist Name 12",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.450Z",
          archived: false,
        },
        {
          id: "7978135374",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.342Z",
            hs_object_id: "7978135374",
            name: "Fist Name 11",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.342Z",
          archived: false,
        },
        {
          id: "7978135384",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.932Z",
            hs_object_id: "7978135384",
            name: "Fist Name 10",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.917Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.932Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:13 GMT",
=======
      "Tue, 22 Feb 2022 02:38:52 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160a3591832c7-EWR",
=======
      "6e14d7380bf1e084-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "37861d6e-921f-4ebe-8fc1-f76de8942014",
      "X-Trace",
      "2BE3C914A55BB935016244862A7CC0932D9C3F986C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ULBDHH7ceHexdvLZx9h%2FzgZgK115EmaFYpZVJ3TFquT6nqKJCUgz1ph1h0fDgPk2%2Biy4h4ykW1IemyxsdHg%2FwAb81xUOzFNb06TZ2jK46Vc8Fvwkg0c17edR1S5UFki1"}],"group":"cf-nel","max_age":604800}',
=======
      "487a3653-5f05-46c0-bbec-56a60d5c18d5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249166",
      "X-Trace",
      "2B51B91F79E92D39A22344BC9057696927FD6D0CB0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r6kSyE5Omdtz1g7M0qWDjnLuPQmCu5B2AsE4xjAdMvZ95hcNgTh55UBapZNX5Hcqz6P7hS7TCMXI56RuQTg3XCYQakMr5u0MttspF8dsYsBw3cd7CDByaYsyjbf96Glz"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "342e749d-171d-44c9-9e06-815f4a32ad5c",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:13 GMT",
=======
      total: 5,
      results: [
        {
          id: "7978135340",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.932Z",
            hs_object_id: "7978135340",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.932Z",
          archived: false,
        },
        {
          id: "7978135350",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.778Z",
            hs_object_id: "7978135350",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.778Z",
          archived: false,
        },
        {
          id: "7978135359",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.340Z",
            hs_object_id: "7978135359",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.340Z",
          archived: false,
        },
        {
          id: "7978135366",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135366",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
          archived: false,
        },
        {
          id: "7978135379",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.666Z",
            hs_object_id: "7978135379",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.666Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:52 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160a459a28c4e-EWR",
=======
      "6e14d7399ea1274f-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "342e749d-171d-44c9-9e06-815f4a32ad5c",
      "X-Trace",
      "2B4FAB090EF353FDAB1E07163D5BCB23B3699AF153000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4DlSgJKOif34l2KKueppG87jzZfIgAECTadavdtMbGPdKbnF1ToGZ6vAinJGIxw99o%2BBV0iX2sn1%2BxzHZUKEc9FOA6qkLN0wildK5NowBgG9jSlA21Mhn7YAyrS1rJCh"}],"group":"cf-nel","max_age":604800}',
=======
      "2522ed26-4243-4c1f-9d44-dafd9d796ac3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249165",
      "X-Trace",
      "2B837BAF158F23328B0684E3395EF3DE193B6573BE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eoNj0H%2BhqdUqucKW84Ct%2FV7oQC72zg55LD5uobiFh5NsfX08KZaLEbleqrjsyb98Qc%2BOSuQZsTHdI1Knxl3%2FhN2CIDwTj%2FI7Hn2ClBQAJ11EO8QtVKTgy2tk7n0fRp2o"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user25.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user20.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user26.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user21.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user27.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user22.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user28.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user23.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user29.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user24.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
    ],
    properties: [
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
<<<<<<< HEAD
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
=======
          id: "7978135338",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.869Z",
            hs_object_id: "7978135338",
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.869Z",
          archived: false,
        },
        {
          id: "7978135346",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.561Z",
            hs_object_id: "7978135346",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.561Z",
          archived: false,
        },
        {
          id: "7978135360",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.930Z",
            hs_object_id: "7978135360",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.930Z",
          archived: false,
        },
        {
          id: "7978135365",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.340Z",
            hs_object_id: "7978135365",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.340Z",
          archived: false,
        },
        {
          id: "7978135387",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.101Z",
            hs_object_id: "7978135387",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.101Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:15 GMT",
=======
      "Tue, 22 Feb 2022 02:38:52 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160ae18b88c0b-EWR",
=======
      "6e14d73b2e2ae07c-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "ff9502d8-f9a5-4288-aa44-9e277cfc3a31",
      "X-Trace",
      "2BEDAB0DF3EC77A5257637F0A7EB67883A114FAD5C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YU0cvPR0g9cVmlm8KSNV16rRmsR0GCOWMUgZfOJjChwMWv00gqvR8wW4LyCcdhCMxPHd2G7a1612z4%2FY%2BCYAFB1BwMkflB6q9KGPMXpY0Y%2BLBxrlDhgRI4Q0Hw9bhh8j"}],"group":"cf-nel","max_age":604800}',
=======
      "269ff213-ff45-46c7-8fb2-e8ba1cec4b5d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249164",
      "X-Trace",
      "2B6D746A23BCB3699C8A58AB92AAC52F890EF63806000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MPOq7xBuN4xhQdP3LD0tOf%2Fluq3Szs6K6lOtKqEsKDbi7uHAmTpBkma%2FOSeV19Wb0qWNfbB%2BBy4%2B%2B2ORp3VFGcQxg4NpTkB5kmuTwFkvhorrJDfUOghg8jb%2F6bgZunyD"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/COMPANY/search", {
    filterGroups: [
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user30.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user25.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user31.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user26.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user32.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user27.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user33.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user28.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
      {
        filters: [
<<<<<<< HEAD
          { propertyName: "domain", operator: "EQ", value: "user34.demo.com" },
=======
          { propertyName: "domain", operator: "EQ", value: "user29.demo.com" },
>>>>>>> chore: rerun nock.
        ],
      },
    ],
    properties: [
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
<<<<<<< HEAD
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
=======
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "3f0f47cd-b235-4b88-bab6-5bf5587b0c04",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:53 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160af8edd17e5-EWR",
=======
      "6e14d73cab552745-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "bf37bd44-41f5-4dc2-9475-81a7656e8ea3",
      "X-Trace",
      "2BD1F7655528F112C8D17826C039E07712307774A4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=onlKyCBDyxBpFATJvSu6hhWvvvmbXme8Fx3vpGFi1vPBeJlV9i2%2BFjKZUouRv4IHWpum%2BWG5jo5xo1EH12A9JPhQhYxZk%2FA4muuTW8gAMjLoO%2BQn5CbstcUVhEiFAAad"}],"group":"cf-nel","max_age":604800}',
=======
      "3f0f47cd-b235-4b88-bab6-5bf5587b0c04",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249163",
      "X-Trace",
      "2B143C091E4B36B2A47DF45E074091CB9726612874000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SgFemdIZNenNaZeR%2FQwp%2FGvZygzkMhHtTYRs3uOxqCgk0WuCq5sJiZOA9Zd1E61pJfgRKWmUajvBFFTx7zWkrDF0WdepHHGumxnXB7ZE2Ti77qbb2ISSJ1viLNQ%2BLtxB"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978135351",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.337Z",
            hs_object_id: "7978135351",
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.337Z",
          archived: false,
        },
        {
          id: "7978135361",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.872Z",
            hs_object_id: "7978135361",
            name: "Fist Name 29",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.872Z",
          archived: false,
        },
        {
          id: "7978135369",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.869Z",
            hs_object_id: "7978135369",
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.869Z",
          archived: false,
        },
        {
          id: "7978135375",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.563Z",
            hs_object_id: "7978135375",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.563Z",
          archived: false,
        },
        {
          id: "7978135380",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.932Z",
            hs_object_id: "7978135380",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.932Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:15 GMT",
=======
      "Tue, 22 Feb 2022 02:38:54 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160b06c3815b7-EWR",
=======
      "6e14d7451e04cf9a-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "8b7e27aa-a774-4538-80b4-fd938ad649b4",
      "X-Trace",
      "2B617B667F9717B92820B0D4FA47ECE4CED14D25EA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X34B8tkW%2BskUwblbsc1SQvqB0ObCjernX62GK20Vq7NVOjc%2FvSTXxw%2BZSZy7ObrvjzDaK1%2FsultgX37PUnllQSaFPI3WA55au9nHpku3arfRoX2BPWUxDWHJuzUyVVEp"}],"group":"cf-nel","max_age":604800}',
=======
      "1548f872-3da5-4b0b-94fa-d62d321e992d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249162",
      "X-Trace",
      "2B7EFD3B0013E77ECB7C610A3435FD1ECC6B33314E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=68RuOeuFW9DYP1FZ3XqtYEwaoogXOw4EPkvAlrn2sckpaMbvzlMjUk0Dk6NRvlIhSlvivfAP%2BAdeJKrW3NNv6YFeAc3wH%2F5GmPJOGJOURcwPmgOae%2Fp7dvp8oWTfA%2BVj"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945104965",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.857Z",
            hs_object_id: "7945104965",
            name: "Fist Name 42",
=======
          id: "7978135342",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135342",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
          archived: false,
        },
        {
          id: "7978135353",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.564Z",
            hs_object_id: "7978135353",
            name: "Fist Name 32",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.564Z",
          archived: false,
        },
        {
          id: "7978135354",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:19.267Z",
            hs_object_id: "7978135354",
            name: "Fist Name 31",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.41.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:19.267Z",
          archived: false,
        },
        {
          id: "7978135364",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.334Z",
            hs_object_id: "7978135364",
            name: "Fist Name 30",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.334Z",
          archived: false,
        },
        {
          id: "7978135385",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.450Z",
            hs_object_id: "7978135385",
            name: "Fist Name 34",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.840Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.450Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:15 GMT",
=======
      "Tue, 22 Feb 2022 02:38:54 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160b158c18c96-EWR",
=======
      "6e14d746cb51cf96-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "12213d48-2e69-4d91-9acf-86bf92391816",
      "X-Trace",
      "2B65C3FDBE36F2F30A638D4DB73BFF4EC2E7088312000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rRoJjTTX4x6w1kU0L0J8547cyT%2FOmryG2oJpiNY55YzpRh6R4aoqk8l6qxFOfw7EtLFwmahCUmjTMweafIchOuPLbUjby3hlZhTxtQz875dtmLcBOOWZg3qLMfWSIRJZ"}],"group":"cf-nel","max_age":604800}',
=======
      "6ebd7957-8fbf-4b4e-b81c-4b07d8893c49",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249161",
      "X-Trace",
      "2BDCF91016A20DC31CE303BEE6DAEC994FF33EF943000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GWwm9V01geUoNFNvTcbBYAC9umtRjWpl4enrwXXUJ8VHyofXgTIwRBQZIPsVNfs4zuQe25n2O3sQlSGzYeSmVI0bcAP0A2n8MTJLRcZa3Ymz%2F37wyK51emh948FPAttS"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "9604bb66-b91e-4578-b38a-cb43cf38eccf",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:15 GMT",
=======
      total: 5,
      results: [
        {
          id: "7978135339",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.340Z",
            hs_object_id: "7978135339",
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.340Z",
          archived: false,
        },
        {
          id: "7978135363",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.101Z",
            hs_object_id: "7978135363",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.101Z",
          archived: false,
        },
        {
          id: "7978135373",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.338Z",
            hs_object_id: "7978135373",
            name: "Fist Name 37",
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.338Z",
          archived: false,
        },
        {
          id: "7978135378",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.780Z",
            hs_object_id: "7978135378",
            name: "Fist Name 35",
            twitterhandle: "DEMO",
            website: "www.35.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.780Z",
          archived: false,
        },
        {
          id: "7978135381",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.777Z",
            hs_object_id: "7978135381",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.777Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:54 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160b248c50cd5-EWR",
=======
      "6e14d7484e7d274f-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "9604bb66-b91e-4578-b38a-cb43cf38eccf",
      "X-Trace",
      "2BF471DEF70BD3B0F58AA66F2E7B7B72773CD6DF8F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p1qww5COJ1%2BddPI4igMxLOjGpwrua16%2FeRxZFjowzecyxdp%2B%2FoMYojWWW2PbDs7EAbknzWwrDS6ZdPhebDR19mZniVnJim4uSELne%2FvxfwSluMzzw7BeBqzqQDmS47Wj"}],"group":"cf-nel","max_age":604800}',
=======
      "0c616a93-2c03-44a7-ac83-86bb35ea4701",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249160",
      "X-Trace",
      "2B5A5B860403A5BA1C6B9A697BD25F7AC1C909EE4D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=84iI6tr2zSBS40ojNa6OISxUZ%2BlybauTgSAej5yXiP%2FQDna0dX%2BRWP7DFs1TbQnqL%2Bh3RZIZE5QEjEBm%2FWhV2Zy8BQhhHgAPBDzJ7KZJg%2F9fNw%2FW5cL1kLbl8fnduJ%2BI"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978135341",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.778Z",
            hs_object_id: "7978135341",
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.778Z",
          archived: false,
        },
        {
          id: "7978135355",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:22.038Z",
            hs_object_id: "7978135355",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:22.038Z",
          archived: false,
        },
        {
          id: "7978135358",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.102Z",
            hs_object_id: "7978135358",
            name: "Fist Name 43",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.102Z",
          archived: false,
        },
        {
          id: "7978135372",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.871Z",
            hs_object_id: "7978135372",
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.871Z",
          archived: false,
        },
        {
          id: "7978135383",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.780Z",
            hs_object_id: "7978135383",
            name: "Fist Name 41",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.917Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.780Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:17 GMT",
=======
      "Tue, 22 Feb 2022 02:38:55 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160bbfdc88cd4-EWR",
=======
      "6e14d749fa50e08e-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "60331652-fcdc-4428-a528-fa588ae61d2c",
      "X-Trace",
      "2B241AE9E2F9B17B3A368D1A0545A02A41A0272169000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FqjT9lCGp0twEUzqdaCgWvQk%2B2TmpbjZvnzv6avJ%2FSqMu%2FfZtdK2K17k0ySpvJe41tEDmSdeisSaVXABoGPJxbUF4vIYM1FdxdKGzAwM8G%2Fjnry35La8cK%2FxO2lLIHd0"}],"group":"cf-nel","max_age":604800}',
=======
      "53554bdb-ba9e-41b5-8a5c-f6e529d53f53",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249159",
      "X-Trace",
      "2BAC2584C19AF437B6424EE726AA0EAC7412DF01BC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LhQhAQHerxT3dharZwKpsEu5eWkRBn%2BeooDQc%2BMzxw%2B2u%2BbrYhaQBT45nfzJX3aE2o0lYKUYFJAuYMAii8%2Bs3LURaxfNXMYLdDQaCGBvfFMgEW7pR0E4UdXqwUW7wtEG"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978135348",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135348",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
          archived: false,
        },
        {
          id: "7978135349",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.867Z",
            hs_object_id: "7978135349",
            name: "Fist Name 47",
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.867Z",
          archived: false,
        },
        {
          id: "7978135362",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.663Z",
            hs_object_id: "7978135362",
            name: "Fist Name 48",
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.663Z",
          archived: false,
        },
        {
          id: "7978135367",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.100Z",
            hs_object_id: "7978135367",
            name: "Fist Name 45",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.0.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.100Z",
          archived: false,
        },
        {
          id: "7978135382",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135382",
            name: "Fist Name 46",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.350Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:17 GMT",
=======
      "Tue, 22 Feb 2022 02:38:55 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160bcdfe619b2-EWR",
=======
      "6e14d74b6ece2755-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "79373789-3948-4bee-b4ea-374578932627",
      "X-Trace",
      "2BB2F86174C065E93E829B3C25781C93417C8C14C3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9SEvcHBQJps8ROipctAqMvGFoohus%2Fmb9d1MgQ%2Bn6YI8qQHjexTdbuG3Peypkf55%2F6Rk3M0nQ24Y6wJLiQxvrZRLnCGdMyM%2FinR0Wn2vpsSMHvYD1GfdcLhdHkvBVD0O"}],"group":"cf-nel","max_age":604800}',
=======
      "ad81d7fd-f690-4cad-a739-29406e389943",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249158",
      "X-Trace",
      "2B22BF592F875F56C78B013F382C5B3112B14C8FBA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2F5ebpxc8eJ8M4nBNxW9A5RP%2F%2BM0lR49pwx9OB%2BLMnirLsOsfrC57JZj%2F%2BFz9Xx0D3kk8MYdR%2FZtNRdsIFn%2BViQYKKoqrzMoPndn3Qsm92P9WMXkTY7KFsNlKSxrFUBMM"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978135344",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.154Z",
            hs_object_id: "7978135344",
            name: "Fist Name 3",
            twitterhandle: "DEMO",
            website: "www.3.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.154Z",
          archived: false,
        },
        {
          id: "7978135345",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user2.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.780Z",
            hs_object_id: "7978135345",
            name: "Fist Name 2",
            twitterhandle: "DEMO",
            website: "www.2.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.780Z",
          archived: false,
        },
        {
          id: "7978135356",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user4.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.777Z",
            hs_object_id: "7978135356",
            name: "Fist Name 4",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.777Z",
          archived: false,
        },
        {
          id: "7978135376",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user0.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.343Z",
            hs_object_id: "7978135376",
            name: "Fist Name 0",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.343Z",
          archived: false,
        },
        {
          id: "7978135386",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user1.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.562Z",
            hs_object_id: "7978135386",
            name: "Fist Name 1",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.145Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.562Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:17 GMT",
=======
      "Tue, 22 Feb 2022 02:38:55 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160bddaa115d7-EWR",
=======
      "6e14d74d09b22749-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "3400f093-15ba-406a-9ba1-5d9499cfb5ab",
      "X-Trace",
      "2BCF648AFC12C645B1133A1F268B3F8ED924217CAC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HDhWH5y0jurJ5Wa9DLHCJXjlK47vydZ4QwQw90eHHv4%2BhrabEGEhlcvCg4VNX8xfJoAXqHP5NvrF01%2BL9%2Bhfbjvdn%2Fx0df%2BBoi%2BLPfaVa0%2BylE5mfUSRtDZ4nhxFzWcj"}],"group":"cf-nel","max_age":604800}',
=======
      "3362523f-0845-41f2-aff7-954916d1f14f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249157",
      "X-Trace",
      "2B56D6A3FEED761945E0A1B330F1E045A80F3788D7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LtE2U76FXrw0OX6a7aRuL2VLfRADNXas7kUuf5bGWdBa8OPZlhW%2FVlG2k%2FEK440K15zuv9YU0VtLQjeGeNTX20aa51BrPgj1SCs2Z6E2IbRCWuVHbEEssdEa8Es5IIuB"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
          id: "7978135343",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user9.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.102Z",
            hs_object_id: "7978135343",
            name: "Fist Name 9",
            twitterhandle: "DEMO",
            website: "www.9.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.102Z",
          archived: false,
        },
        {
          id: "7978135357",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user8.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.564Z",
            hs_object_id: "7978135357",
            name: "Fist Name 8",
            twitterhandle: "DEMO",
            website: "www.8.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.564Z",
          archived: false,
        },
        {
          id: "7978135368",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user6.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.562Z",
            hs_object_id: "7978135368",
            name: "Fist Name 6",
            twitterhandle: "DEMO",
            website: "www.6.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.562Z",
          archived: false,
        },
        {
          id: "7978135371",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user5.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.157Z",
            hs_object_id: "7978135371",
            name: "Fist Name 5",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.13.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.157Z",
          archived: false,
        },
        {
          id: "7978135377",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user7.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.932Z",
            hs_object_id: "7978135377",
            name: "Fist Name 7",
            twitterhandle: "DEMO",
            website: "www.7.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.932Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:17 GMT",
=======
      "Tue, 22 Feb 2022 02:38:56 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160becdba8cae-EWR",
=======
      "6e14d74e68702743-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "33f9a3e6-0095-4523-99cb-81895fae5c22",
      "X-Trace",
      "2B9E3DA7EB94640D82C91B852D074A8F69A8FEE981000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7H%2BennoIuwI1FDaNXIkJler9HMGf%2Bx2VQK0moWR95ENSGP4CRQj6yG%2F2cjCLTsk6Fi%2BNdvSoQ%2F8CBs%2Bzs1%2B86WccvtcfXRlizYu2wBvxyDV01upx8z67KsccFLqhKulx"}],"group":"cf-nel","max_age":604800}',
=======
      "13e7086b-3ef0-4034-832f-f45c0b0d00b9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249156",
      "X-Trace",
      "2BFCEBAE2A4A45F852CFC8959CB25A726DD681BB6E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IeqEuKMj3WIiiBZS2lE9wfvA7zgSgQNPEU%2BqvMTmfOmQfiXie9p%2Fa2u2IHWaPyO7kF3%2FqoEIaywCXTo2KpQaVIgw1Wy%2FlHVfBlDRLVGIZnilHOkuF71UlrNTtbDy1q8n"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945104964",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.924Z",
            hs_object_id: "7945104964",
            name: "Fist Name 15",
=======
          id: "7978135347",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user14.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.873Z",
            hs_object_id: "7978135347",
            name: "Fist Name 14",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.873Z",
          archived: false,
        },
        {
          id: "7978135352",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user13.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.340Z",
            hs_object_id: "7978135352",
            name: "Fist Name 13",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.340Z",
          archived: false,
        },
        {
          id: "7978135370",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user12.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.450Z",
            hs_object_id: "7978135370",
            name: "Fist Name 12",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.450Z",
          archived: false,
        },
        {
          id: "7978135374",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user11.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.342Z",
            hs_object_id: "7978135374",
            name: "Fist Name 11",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.342Z",
          archived: false,
        },
        {
          id: "7978135384",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user10.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.932Z",
            hs_object_id: "7978135384",
            name: "Fist Name 10",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:43.357Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.932Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e14d750ea8c273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b2cf7c8d-758e-4090-b774-09fe6e6d85ef",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249154",
      "X-Trace",
      "2BF7628588FFEE824696D48E1DAC768C1577489F5D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FAsZeLmMgh9nhMq7vCXvPILbaSCysiVZnfT4w00DF%2F%2BPjQfUyIIQMhFoP7qUhrH9It6K2F5DOTYsVak9hSonzSutx%2FTuvOAI9DLd45Bncq5WyL0%2FChBTw%2F4iE7x4Omxi"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
          id: "7978135340",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user15.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.932Z",
            hs_object_id: "7978135340",
            name: "Fist Name 15",
            twitterhandle: "DEMO",
            website: "www.15.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.932Z",
          archived: false,
        },
        {
          id: "7978135350",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user16.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.778Z",
            hs_object_id: "7978135350",
            name: "Fist Name 16",
            twitterhandle: "DEMO",
            website: "www.16.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.778Z",
          archived: false,
        },
        {
          id: "7978135359",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user17.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.340Z",
            hs_object_id: "7978135359",
            name: "Fist Name 17",
            twitterhandle: "DEMO",
            website: "www.17.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.340Z",
          archived: false,
        },
        {
          id: "7978135366",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user18.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135366",
            name: "Fist Name 18",
            twitterhandle: "DEMO",
            website: "www.18.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
          archived: false,
        },
        {
          id: "7978135379",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user19.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.666Z",
            hs_object_id: "7978135379",
            name: "Fist Name 19",
            twitterhandle: "DEMO",
            website: "www.19.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.666Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:18 GMT",
=======
      "Tue, 22 Feb 2022 02:38:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e14d7524824e08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "01e2bbae-0bd2-4953-9c6d-8406a1088ca0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249152",
      "X-Trace",
      "2B396CB444D17AD4FE3241C91D0BB15E85FC00E502000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V6HqaPa%2FaWYEe6FCBM5s4Do5J1PA7W0z2wKAHJl47jjxi3XyWSLgR935lYjqGJmUK1jEfhA6zvGH8aQ9S2vnY7rPGC6mgmNtoc0xO4kGBW8FmnRquMQg0wMWDYfCKMfC"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "0768d63e-b522-4fc0-980e-70b46078936f",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:56 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160bfad2f18c4-EWR",
=======
      "6e14d7543f58273d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "74c0228e-f0a8-411a-94cc-39e358c9e666",
      "X-Trace",
      "2B5501DB60A40B5D473B9AC4A63A46FA63656DA38A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sj4AS4stl8h%2BjhMSV3FyCE%2BQYYW9AQkxwHYYuCCEb3lO%2FEq5PXTj9HcikfkBzKth4atkxYnWtDYdSb2ZPD%2FWQ4TKaEvRr%2F6f30%2FwwnDs3QjAUo6xB8zirkxMQth%2BZdAR"}],"group":"cf-nel","max_age":604800}',
=======
      "0768d63e-b522-4fc0-980e-70b46078936f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249150",
      "X-Trace",
      "2BF383D541537B2AE21ACFF1E44335AF9FB8168F57000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HDAu5vpRnLg6%2FaQvurANYVvWkOnhy5rleOXQNdyTVy5u2mWNAy1yORIR4QrtqpQbWZkPZJLw%2BfVMEQqCtplxgchW99x%2BsD2c35ICOaMnxwgaYvs2dmKlLB7XKRX3Suy9"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945104967",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.473Z",
            hs_object_id: "7945104967",
=======
          id: "7978135338",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user24.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.869Z",
            hs_object_id: "7978135338",
>>>>>>> chore: rerun nock.
            name: "Fist Name 24",
            twitterhandle: "DEMO",
            website: "www.24.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.869Z",
          archived: false,
        },
        {
          id: "7978135346",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user23.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.561Z",
            hs_object_id: "7978135346",
            name: "Fist Name 23",
            twitterhandle: "DEMO",
            website: "www.23.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.561Z",
          archived: false,
        },
        {
          id: "7978135360",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user20.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.930Z",
            hs_object_id: "7978135360",
            name: "Fist Name 20",
            twitterhandle: "DEMO",
            website: "www.20.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.930Z",
          archived: false,
        },
        {
          id: "7978135365",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user21.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.340Z",
            hs_object_id: "7978135365",
            name: "Fist Name 21",
            twitterhandle: "DEMO",
            website: "www.21.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.340Z",
          archived: false,
        },
        {
          id: "7978135387",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user22.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.101Z",
            hs_object_id: "7978135387",
            name: "Fist Name 22",
            twitterhandle: "DEMO",
            website: "www.22.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.101Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:18 GMT",
=======
      "Tue, 22 Feb 2022 02:38:58 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160c0891519db-EWR",
=======
      "6e14d75e888e2737-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "8f241fbd-8d8a-42f4-ab14-af899929cf61",
      "X-Trace",
      "2BAFE3C458D11AF85809EFB3AB9B147481B73F7EEC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BoN%2BS2Inp1uiVEtDaLWJIzuHs36d22FdatdS48sFMWGatNTnnRsiF04DAkchhEEjbkhs5j9JsgUO3zJcv9MT7mmGrIz7ttrs1dwjS0q8SpoKeKQ4qMDTi1XiHp%2BJ9z%2BK"}],"group":"cf-nel","max_age":604800}',
=======
      "af38c955-ec89-4883-8e12-5c0721d6bd98",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249146",
      "X-Trace",
      "2BAA446466DF699AAAFD96F48EEF8B55AB118838D1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mujnGWL2fuwb7jxqgzlolOnQ%2B7NBpydiB51BD%2F7JfRGuN7hfsinpZNQJ1JlNWfrJi2esliklNBvy7LnxNrb5m%2B8pU4%2FjNC4YfLeq14JbwF4TMK24zmHBCT%2BHXaKHWX4F"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945104970",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.114Z",
            hs_object_id: "7945104970",
=======
          id: "7978135351",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user25.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.337Z",
            hs_object_id: "7978135351",
>>>>>>> chore: rerun nock.
            name: "Fist Name 25",
            twitterhandle: "DEMO",
            website: "www.25.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.337Z",
          archived: false,
        },
        {
          id: "7978135361",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user29.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.872Z",
            hs_object_id: "7978135361",
            name: "Fist Name 29",
            twitterhandle: "DEMO",
            website: "www.29.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.872Z",
          archived: false,
        },
        {
          id: "7978135369",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user27.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.869Z",
            hs_object_id: "7978135369",
>>>>>>> chore: rerun nock.
            name: "Fist Name 27",
            twitterhandle: "DEMO",
            website: "www.27.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.869Z",
          archived: false,
        },
        {
          id: "7978135375",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user28.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.563Z",
            hs_object_id: "7978135375",
            name: "Fist Name 28",
            twitterhandle: "DEMO",
            website: "www.28.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.563Z",
          archived: false,
        },
        {
          id: "7978135380",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user26.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.932Z",
            hs_object_id: "7978135380",
            name: "Fist Name 26",
            twitterhandle: "DEMO",
            website: "www.26.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.932Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:18 GMT",
=======
      "Tue, 22 Feb 2022 02:38:58 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160c18b6c8ca5-EWR",
=======
      "6e14d75ffab6cf8a-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "41c5f2dd-8a10-4e90-b33e-5b5dac22feac",
      "X-Trace",
      "2B05B11E9F7A0B6AB069294C08C0992B3F541200E3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HNKEKzxIFB%2BeQ9V%2BBBP9z3y81LB9ORV0%2Fe9thA2sPwQpdhA%2F4HHrZs18OFVm%2Bud3svBASQezjuz6R6mTUcgXW7yC3arCdnLlUhWeSkxvknjdO%2BCmuJwfKEWleOcRoAbP"}],"group":"cf-nel","max_age":604800}',
=======
      "f9f51c46-782e-48cb-87fb-f224f33b4820",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249145",
      "X-Trace",
      "2B5BCC44E3CEE764CE2824C132EBF259BCBFE63C4B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3Tjs47%2BqVH1gnJy7g7XHxZUbtV2XmzgPBsX5srTOjxnNCpovhbTym%2F7ozqpA9nZLHg6%2Bp%2B3xfvpToAHfHZVuwBoP%2B1VOVfSiqvC42xyGtJ0QwGMG%2BoNmqcWSdhrAAu%2FW"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
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
=======
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "899f38c4-e771-4fe2-a9c5-1eb13a23cc7c",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:38:58 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160c29864e6dc-EWR",
=======
      "6e14d7615825275d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "74d177e8-6fe1-4674-99bc-90108354c4ee",
      "X-Trace",
      "2B4996692D036F2AEABD6D7E19352597719E4DC8C4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a69O8o0Eo%2BHlhPNhSkIhMfdR8rzATwncEunGroWtkrtMYVBN6paaDhU7UjvPlc0tD0%2BKrDay%2BLASqZEVE61V7gBiZRLp%2F2694Mk2SFB2UKC1233Vb7wTSPaESg0QwtM9"}],"group":"cf-nel","max_age":604800}',
=======
      "899f38c4-e771-4fe2-a9c5-1eb13a23cc7c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249143",
      "X-Trace",
      "2BB049EE99704938AC81B52B4CABDA222B3169072C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=32jEZZV32imwlSyOsPHcLOkywuZRjY5X5YaB8zNs5NGQCFG0bqz%2Fm2N3Xi0%2FwUe8zwFCvmjl24YSXVvEDwuN9H2VEcyXcqyrutILyrAQjDw21H1YXwHA1Jv8PA7Clu73"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "9f3b4047-787e-428b-8f57-ad5ade258f27",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 19:21:18 GMT",
=======
      total: 5,
      results: [
        {
          id: "7978135342",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user33.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135342",
            name: "Fist Name 33",
            twitterhandle: "DEMO",
            website: "www.33.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
          archived: false,
        },
        {
          id: "7978135353",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user32.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.564Z",
            hs_object_id: "7978135353",
            name: "Fist Name 32",
            twitterhandle: "DEMO",
            website: "www.32.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.564Z",
          archived: false,
        },
        {
          id: "7978135354",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user31.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:19.267Z",
            hs_object_id: "7978135354",
            name: "Fist Name 31",
            twitterhandle: "DEMO",
            website: "www.31.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:19.267Z",
          archived: false,
        },
        {
          id: "7978135364",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user30.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.334Z",
            hs_object_id: "7978135364",
            name: "Fist Name 30",
            twitterhandle: "DEMO",
            website: "www.30.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.334Z",
          archived: false,
        },
        {
          id: "7978135385",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user34.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.450Z",
            hs_object_id: "7978135385",
            name: "Fist Name 34",
            twitterhandle: "DEMO",
            website: "www.34.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.450Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 02:39:00 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160c40b3532dc-EWR",
=======
      "6e14d76b1c092746-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "9f3b4047-787e-428b-8f57-ad5ade258f27",
      "X-Trace",
      "2B8BB6ADE63E0BA88D40E30F318682BC88EE0D9CFF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J9PO16Vo%2BNdW2WnL1tPtkEDXKkUyQsJfJFH%2BowFNWJIECLxnY%2FnPQ6r0XLIlzSvyc%2FAFNaeHq2F3y9AR3Zfi2Nl%2BQS%2BQ4mB84AAStDWug%2BoJykoA%2F%2FYOXFFDR9e%2FOA4P"}],"group":"cf-nel","max_age":604800}',
=======
      "e602f860-7726-4a55-be86-ff4d60d7d4cf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249140",
      "X-Trace",
      "2BA8B4FC67D084AB32DFD72DE02CF3ED6A5A984670000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3OKrp7DOjiDRi6NJTSLyie%2FUS5FWuYlQzCUoeg%2FoYppXWuzk%2FMTTuqWHVn4EnmiIPrbkGPiS2kkIM%2Bk27XLf8KecWywyCXb1y0sSoQtmMLJEQqXbWHZZlD5GDieN6FkX"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945104972",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:43.345Z",
            hs_object_id: "7945104972",
=======
          id: "7978135339",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user39.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.340Z",
            hs_object_id: "7978135339",
>>>>>>> chore: rerun nock.
            name: "Fist Name 39",
            twitterhandle: "DEMO",
            website: "www.39.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.340Z",
          archived: false,
        },
        {
          id: "7978135363",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user36.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.101Z",
            hs_object_id: "7978135363",
            name: "Fist Name 36",
            twitterhandle: "DEMO",
            website: "www.36.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.101Z",
          archived: false,
        },
        {
          id: "7978135373",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user37.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.338Z",
            hs_object_id: "7978135373",
            name: "Fist Name 37",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.338Z",
          archived: false,
        },
        {
          id: "7978135378",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user35.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.780Z",
            hs_object_id: "7978135378",
            name: "Fist Name 35",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.37.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.780Z",
          archived: false,
        },
        {
          id: "7978135381",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user38.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.777Z",
            hs_object_id: "7978135381",
            name: "Fist Name 38",
            twitterhandle: "DEMO",
            website: "www.38.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.777Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:20 GMT",
=======
      "Tue, 22 Feb 2022 02:39:01 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160cc0b2c78d0-EWR",
=======
      "6e14d76cac1c2749-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "3654a49e-fd4a-42e7-ad11-a1691bf73487",
      "X-Trace",
      "2B933591A03BFC79B8ABE51D2D432D49D300464D75000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bBDr6EOe09hXq6GU2mhyEGi3%2BSeL471kE4fk3gcPAojyq563CSkFXsUr3oWzXI18hackFQP8Uu1sqNevYjPwwikFiAYparp9yb1R9XhsNYQX1eYdn4ekeERTHCod%2BKdv"}],"group":"cf-nel","max_age":604800}',
=======
      "f43a21fb-e876-4a87-89c3-023ac95181fd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249137",
      "X-Trace",
      "2B25778D00B8348AC84D271E3FD5FC1E2EA45F5078000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8GBFSOs6iwt7H8SgtfLY1QssIPL5v%2B%2BaR1DjZKJneuw5YCcFOe3gDa5coARHd4QqQIoM%2BHnolkJCwFQNfsK3%2FML6a3Sra0d3sg5D%2F3wdAC8l1zYp%2F%2B3m%2BMJIHL91Prb5"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945104965",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:41.857Z",
            hs_object_id: "7945104965",
=======
          id: "7978135341",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user42.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.778Z",
            hs_object_id: "7978135341",
>>>>>>> chore: rerun nock.
            name: "Fist Name 42",
            twitterhandle: "DEMO",
            website: "www.42.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.778Z",
          archived: false,
        },
        {
          id: "7978135355",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user44.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:22.038Z",
            hs_object_id: "7978135355",
            name: "Fist Name 44",
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:22.038Z",
          archived: false,
        },
        {
          id: "7978135358",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user43.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.102Z",
            hs_object_id: "7978135358",
            name: "Fist Name 43",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.44.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.102Z",
          archived: false,
        },
        {
          id: "7978135372",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user40.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.871Z",
            hs_object_id: "7978135372",
>>>>>>> chore: rerun nock.
            name: "Fist Name 40",
            twitterhandle: "DEMO",
            website: "www.40.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.871Z",
          archived: false,
        },
        {
          id: "7978135383",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user41.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.780Z",
            hs_object_id: "7978135383",
            name: "Fist Name 41",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.43.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:39.489Z",
          updatedAt: "2022-02-17T19:20:41.840Z",
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.780Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:20 GMT",
=======
      "Tue, 22 Feb 2022 02:39:01 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160ccf89fe845-EWR",
=======
      "6e14d7719f652745-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "e5b06862-f341-4ab9-89a5-8146fe5d89b0",
      "X-Trace",
      "2B39BBD1A921D8E3E2C2B93D2A27C5873CBA1A0047000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uFuL8q4K23JNaCFWSjVWph4etIqiOq%2BCbDuB1QJwg76Mwg5%2FhY0qtK6I%2F0AXBWmNE%2BOyJP9cJRkCn944dNwJnln6F0Rlpb4wsCnOZ3rZ0PeDrnVmV1LYiAEeNlB1nNBA"}],"group":"cf-nel","max_age":604800}',
=======
      "86e62d25-9df7-41bf-bc02-597c3c199484",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249136",
      "X-Trace",
      "2BCEE18BE9A811304E67B46B90A90FC3296071ADEB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=O3crNzl4tQ6EkogXnZW4B%2BnVIcjTcQknVxniLbgGzOddoaHYorqqUvpSf5AMoOj93c%2FnszcEjr%2Bf%2FdVaBLpwJaI415lQdiQl8%2FCzGT9CiFIR5QOyjM61hpHMWYUktMxZ"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
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
<<<<<<< HEAD
          id: "7945104966",
          properties: {
            createdate: "2022-02-17T19:20:39.489Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-17T19:20:42.248Z",
            hs_object_id: "7945104966",
            name: "Fist Name 48",
=======
          id: "7978135348",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user49.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135348",
            name: "Fist Name 49",
            twitterhandle: "DEMO",
            website: "www.49.com",
          },
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
          archived: false,
        },
        {
          id: "7978135349",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user47.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.867Z",
            hs_object_id: "7978135349",
            name: "Fist Name 47",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.47.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.867Z",
          archived: false,
        },
        {
          id: "7978135362",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user48.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.663Z",
            hs_object_id: "7978135362",
            name: "Fist Name 48",
>>>>>>> chore: rerun nock.
            twitterhandle: "DEMO",
            website: "www.48.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.663Z",
          archived: false,
        },
        {
          id: "7978135367",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user45.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:21.100Z",
            hs_object_id: "7978135367",
>>>>>>> chore: rerun nock.
            name: "Fist Name 45",
            twitterhandle: "DEMO",
            website: "www.45.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:21.100Z",
          archived: false,
        },
        {
          id: "7978135382",
          properties: {
            createdate: "2022-02-22T02:38:18.760Z",
            domain: "user46.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:38:20.929Z",
            hs_object_id: "7978135382",
>>>>>>> chore: rerun nock.
            name: "Fist Name 46",
            twitterhandle: "DEMO",
            website: "www.46.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:38:18.760Z",
          updatedAt: "2022-02-22T02:38:20.929Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:20 GMT",
=======
      "Tue, 22 Feb 2022 02:39:01 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160ce5ea80cc1-EWR",
=======
      "6e14d7730f6d275d-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "12cc7799-3a23-4706-8ec2-930360145e64",
      "X-Trace",
      "2B3183B5AE9B993BF4BCAEA7A9EA0EC7E207A7869E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Af3HhE6yeK1Hb7uu06DYsVI1hADU7Lk6vw9E9nQX7BHBeB7A2MYuSwOyIK7UASXRhUFqCCaglahr7ZyC84S8rFwPQQUtDpa%2BNvMN5BN9CVoe%2BcJQfkjWA%2FetrDvceft2"}],"group":"cf-nel","max_age":604800}',
=======
      "da0ea129-fc8c-4e28-873f-1a7bb8dd7a67",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249135",
      "X-Trace",
      "2B3DC4D059A010997DF334ABFC5A3E7BC6AA5E7D0E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IOMjbB0oPKR7hekFspF0BChb6U6mY21x2Zh90gDfK7FC4g0tvcSVsBNEVG0iq%2BblJLPE2ZPddmu2CkvRPvIWI7hutcfyF34SCwtZxj5CN2sjS4D%2FgF7J10WpNGtVnWmp"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
      { id: "7978135344" },
      { id: "7978135345" },
      { id: "7978135356" },
      { id: "7978135376" },
      { id: "7978135386" },
      { id: "7978135343" },
      { id: "7978135357" },
      { id: "7978135368" },
      { id: "7978135371" },
      { id: "7978135377" },
>>>>>>> chore: rerun nock.
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:21:20 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160cf68e21a13-EWR",
=======
    "Tue, 22 Feb 2022 02:39:02 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d7748f01cf8e-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "9bd0872d-b188-4638-9ee4-300ce5bf005c",
=======
    "a4aebd2d-264d-4a6e-a63b-14e543358fb8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249134",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
    "99",
=======
    "97",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
<<<<<<< HEAD
    "2BEDB49B45B4DDCA5EAD6217DC14B84FB88FCB3EB0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6%2BVOOkGYG%2BS%2F9GS8cXJMN1wyAHliA3zNgAIobCvESQY2H1yw8Bqz4W0OZszVv7pXePuazy%2F216rJxm9kYQIi59pv37MikxzxwPIGVRSHl6ZuoUY6zC2dhWZlwwiYmmGO"}],"group":"cf-nel","max_age":604800}',
=======
    "2B6E2D3D938CC2A42506750EF1884AAF10319063E0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZiSwb9eyaahGyCD90bpiikhuK8sT%2BwlFEcg845FrFTPRhNpQf%2FAySMEx79JyAom8WcJX8Aq92GoV6YQd3oad0vLbd2rqDfo%2FzcJyVo7vlx1xNVOdWlZRMjJJj0tgSs1T"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
      { id: "7978135347" },
      { id: "7978135352" },
      { id: "7978135370" },
      { id: "7978135374" },
      { id: "7978135384" },
      { id: "7978135340" },
      { id: "7978135350" },
      { id: "7978135359" },
      { id: "7978135366" },
      { id: "7978135379" },
>>>>>>> chore: rerun nock.
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:21:20 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d0985c8c63-EWR",
=======
    "Tue, 22 Feb 2022 02:39:02 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d7764d1f2743-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "2e3c585f-cbcf-4800-9d0d-59065a383ed6",
=======
    "f3cc3220-9376-4505-9433-87b07ca110b3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249133",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
    "98",
=======
    "96",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
<<<<<<< HEAD
    "2BE5704F13C98EE6DE67AEFCD9E2A8D043901C3A47000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0H1yKbtY9ma%2B6qZrMcoXKgw4SHlTfQHJeRy3OPGeisIOjtwK6DxIgG2W%2FssAIQNDnrEPcTyt%2FueJXLSvsNv75mtJ0M33drn1E94oncWCkumwG150jfNB7F18Q9ml6PuF"}],"group":"cf-nel","max_age":604800}',
=======
    "2B941DD7A9D0FB70AE91B46ACF4091809E5A13A30A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rW45U1M3Y7ZkaM1yrHvL6%2B8YUzexeeBP54RgsSa58s7BfIlZbADt8MBFqn6Dnb%2B%2FSbE3PQq9HJGpcsMudPTIfaHpzLywqwuz2lMutKYe4TFETD1oPemIKF%2BoG16KhzrV"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
      { id: "7978135338" },
      { id: "7978135346" },
      { id: "7978135360" },
      { id: "7978135365" },
      { id: "7978135387" },
      { id: "7978135351" },
      { id: "7978135361" },
      { id: "7978135369" },
      { id: "7978135375" },
      { id: "7978135380" },
>>>>>>> chore: rerun nock.
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:21:21 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d1bb818ce3-EWR",
=======
    "Tue, 22 Feb 2022 02:39:02 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d777ca54cf9a-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "c233c1a1-472c-46f7-8411-bc1a7c5f4f4c",
=======
    "860a4e02-c3c7-4ba0-af4b-0e32e6d6f5b9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249132",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
    "97",
=======
    "95",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
<<<<<<< HEAD
    "2B519B3F2E4AA0A2C0A8B50A65489E14C156585A3E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NQhckV3FGxyeFghHcR7H12w74ie%2FsAguYWXLZ%2Fg3iuO%2FqjUFpRraNMSglzCuuueSHnGuCqPwSSpSvRjoLqtV%2FR%2BrG6q5XZTy%2FOAs3TiuYMelw7l%2Bo5FKWF24NYGed7hA"}],"group":"cf-nel","max_age":604800}',
=======
    "2B182BDBFC9106112B25740374AF9101C11B6DB32E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6eiE%2BsXVIsCR61v2IXXCklKUXQdvEhLM4pQw6MX5QsG29v2JrvkFMtknVmlSP0%2BDMR6Emj6OtLK5R%2FBvCxcMUFQNOWiRlr2lcXLkt5MNOTUn8jaWrE2c1yTdtNnWTx23"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
      { id: "7978135342" },
      { id: "7978135353" },
      { id: "7978135354" },
      { id: "7978135364" },
      { id: "7978135385" },
      { id: "7978135339" },
      { id: "7978135363" },
      { id: "7978135373" },
      { id: "7978135378" },
      { id: "7978135381" },
>>>>>>> chore: rerun nock.
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:21:21 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d3fd2fe710-EWR",
=======
    "Tue, 22 Feb 2022 02:39:02 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d7798c622745-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "22ec11de-7a62-43c0-8be0-a45cf3e2d2e8",
=======
    "1074f511-ff62-45a2-86a2-c9c6b8f6c45c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249131",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
    "96",
=======
    "94",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
<<<<<<< HEAD
    "2B542EAB5842EEACEB607038768876D1329E72AC80000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p6mZvaMdsKe40ioe3i84RkJE74FE7eGtRfdIt0d3UpBJQSuRw5j0mkBWVQAd6a5UotmkbneWcQRnZLpbTjtzfgofMhro0EYYRTcKwyAQK5eUDHpTkLwsiG7CWFDeBC9U"}],"group":"cf-nel","max_age":604800}',
=======
    "2BB64D1A4A219AF6E439E8D106CE24CA3B56E9EE58000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ONrm%2FrMKw9P67Q3QnSpVJfDZedUcMeIuLG8u%2BlGD7tL13sO0%2BqpuXDd848inZ26sV1yvUCgMwlY62zMmsAQrgArJvAv5zjGPVKAo91onIFs6iwopeZlA2JXbtpAwugPC"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
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
=======
      { id: "7978135341" },
      { id: "7978135355" },
      { id: "7978135358" },
      { id: "7978135372" },
      { id: "7978135383" },
      { id: "7978135348" },
      { id: "7978135349" },
      { id: "7978135362" },
      { id: "7978135367" },
      { id: "7978135382" },
>>>>>>> chore: rerun nock.
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:21:21 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d508d819eb-EWR",
=======
    "Tue, 22 Feb 2022 02:39:03 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d77ae87d2746-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "5b56a91b-32e6-4e85-92f5-fbcac247a1f9",
=======
    "312f6465-030a-408b-af33-d9926d781e74",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249130",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
    "95",
=======
    "93",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
<<<<<<< HEAD
    "2B87F748E90A7370E6E06AAB36DF1D3502A2E20652000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1EL7aD11EkAPiS0%2F0my2fDx7l9njOGt0FelVJZx3jPh98c3PA7pJVCBAQNPnjVp1i2eVr3yoFa0AkFIEJ3f4%2FDYrmM%2FIyUzTiKa88Z1cj0fV2NJ3q1o63nhRCnZTLZhr"}],"group":"cf-nel","max_age":604800}',
=======
    "2BAD8D8B62BBB8210FBAC578D671C1D519580B4EC5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qr97Wi19E70NS5OHzAoLcNTunXHtFNKjaTBeRwnKohycEGOa0Utoot6uAqjs68deZCYNRemR9L7J3ONeCmUCRA7I904a0R2A1LN5IOSyxo%2BSBdxg1AeaO%2BKDh0oyUiT3"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
          id: "7945164639",
          properties: {
            createdate: "2022-02-17T19:17:21.592Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-17T19:20:02.441Z",
            hs_object_id: "7945164639",
=======
          id: "7978135116",
          properties: {
            createdate: "2022-02-22T02:34:56.198Z",
            domain: "grouparoo.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:40.322Z",
            hs_object_id: "7978135116",
>>>>>>> chore: rerun nock.
            name: "Sam",
            twitterhandle: "back",
            website: "www.test.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:34:56.198Z",
          updatedAt: "2022-02-22T02:37:40.322Z",
          archived: false,
        },
        {
          id: "7978086466",
          properties: {
            createdate: "2022-02-22T02:37:07.723Z",
            domain: "grouparoo2.demo.com",
            facebookfans: "",
            hs_lastmodifieddate: "2022-02-22T02:37:38.955Z",
            hs_object_id: "7978086466",
>>>>>>> chore: rerun nock.
            name: "Maria",
            twitterhandle: "",
            website: "grouparoo2.demo.com",
          },
<<<<<<< HEAD
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
=======
          createdAt: "2022-02-22T02:37:07.723Z",
          updatedAt: "2022-02-22T02:37:38.955Z",
          archived: false,
        },
        {
          id: "7978135304",
          properties: {
            createdate: "2022-02-22T02:37:40.540Z",
            domain: "grouparoo3.demo.com",
            facebookfans: null,
            hs_lastmodifieddate: "2022-02-22T02:37:42.045Z",
            hs_object_id: "7978135304",
>>>>>>> chore: rerun nock.
            name: "Liz",
            twitterhandle: "some text",
            website: "grouparoo3.demo.com",
          },
<<<<<<< HEAD
          createdAt: "2022-02-17T19:20:02.581Z",
          updatedAt: "2022-02-17T19:20:07.357Z",
=======
          createdAt: "2022-02-22T02:37:40.540Z",
          updatedAt: "2022-02-22T02:37:42.045Z",
>>>>>>> chore: rerun nock.
          archived: false,
        },
      ],
    },
    [
      "Date",
<<<<<<< HEAD
      "Thu, 17 Feb 2022 19:21:21 GMT",
=======
      "Tue, 22 Feb 2022 02:39:03 GMT",
>>>>>>> chore: rerun nock.
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
<<<<<<< HEAD
      "6df160d638238c4d-EWR",
=======
      "6e14d77c9dc2274f-FOR",
>>>>>>> chore: rerun nock.
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
      "307640b8-79d9-4528-b3ec-eab3c579af12",
      "X-Trace",
      "2B847A0450B94218F995710CC2B583DFFA40BB9800000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Jvx12VG1f9f1IyzfTsS6tBnHdcHobsAzMIvxH08fKslMg2pG3t3uRuiEy2dfKfMBpYRlUffTnWuLNJG4w3ckTLTawMK7X8oUW2okXlX9Ex7jzE482l0vzXk7xYVcZqxF"}],"group":"cf-nel","max_age":604800}',
=======
      "a1fa6e78-83ed-46ea-a0f7-587b3b91dabe",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249129",
      "X-Trace",
      "2BC422F65D35E24E504954BD77F36910E8C9629EBF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xpCo%2BCKM2k9WM0o85SPvlnhTVs56beso2JUnAZAF6IIvzk2YFkgTeN1njtDEy2ZJsArf%2F7y%2BOrdRQqmbUIRqfSbLWOWgRz8DeKHMSrnOUyWDAhXgJ0Qa6So6MuXJvw9M"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    inputs: [{ id: "7945164639" }, { id: "7945046052" }, { id: "7945174676" }],
=======
    inputs: [{ id: "7978135116" }, { id: "7978086466" }, { id: "7978135304" }],
>>>>>>> chore: rerun nock.
  })
  .once()
  .reply(204, "", [
    "Date",
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:21:21 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df160d719688c5d-EWR",
=======
    "Tue, 22 Feb 2022 02:39:03 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e14d77e0e7ccf96-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "36687566-8be6-4554-9d37-4de3dd0bc3ca",
=======
    "6a3405c1-428b-4e6f-84b0-3af12ac89351",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249128",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Interval-Milliseconds",
    "10000",
    "X-HubSpot-RateLimit-Max",
    "100",
    "X-HubSpot-RateLimit-Remaining",
<<<<<<< HEAD
    "94",
=======
    "92",
>>>>>>> chore: rerun nock.
    "X-HubSpot-RateLimit-Secondly",
    "10",
    "X-HubSpot-RateLimit-Secondly-Remaining",
    "9",
    "X-Trace",
<<<<<<< HEAD
    "2BE00A4B211A2E644447392D750748401E6BFFB4DA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bSIKfg7MjqThV9luufptA0EhlVPfocO72HRjbNl6GZcqAXtB22KB1RhZnwCfx29m%2BK4yrqqUAOv4FYFPlx7gR50gISi%2BNHuU%2BgzjHhPylAssfyr3Go58VLg26HTW00W6"}],"group":"cf-nel","max_age":604800}',
=======
    "2B099895E5071ACACAD890C9719970BC4C0BFCE461000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PZ3MAucxN%2FZt1ppqaZXP%2BlLAwg9sVzt%2BYn4gS3TbuLzUMfmv4ahmpGovcckUEZf%2BVPplTsCgUFDJTDXSGyKgCRH0hXkgkaLUPy%2FY1rSXzTGdhWxrAr2%2FrfG17krD5vmq"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
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
<<<<<<< HEAD
    "Thu, 17 Feb 2022 19:21:22 GMT",
=======
    "Tue, 22 Feb 2022 02:39:04 GMT",
>>>>>>> chore: rerun nock.
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
<<<<<<< HEAD
    "6df160d819a31996-EWR",
=======
    "6e14d7817878e08e-FOR",
>>>>>>> chore: rerun nock.
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
<<<<<<< HEAD
    "c52db9e4-23e8-4d39-817d-a106a7afefa4",
    "X-Trace",
    "2BCA0BB1C87BE5B5851739D11CB537DDEE45D9E5AA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hPPN9VSLfpHRpqPOeSgfAG53OYiVwT4K8yoDZZCMJY%2FcO4pMde%2BDSHbd1RpC105QeA7pXLRDYT628x%2BGn6WujaT7cvHT3bX5AVSLmErh%2BFH9VFt4yrcmH8jLB%2FTfWXVP"}],"group":"cf-nel","max_age":604800}',
=======
    "d88a135a-4356-403e-ad94-1e8af206ff4b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249127",
    "X-Trace",
    "2B072F4B84ADBB2391CAA6C9242928653AC7FF7C43000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XBFCZ4CGA4AEGIsRPOjV1Xp3vwDwFHcX1Hmbtip21sJUBqZtzwVX8aGYGVHgdd76o7hofz1l5z2HwkI6Fcavqf033v1elBmV5TrAtLFxH81dgGwkPlcIGvSAxI3zZQz4"}],"group":"cf-nel","max_age":604800}',
>>>>>>> chore: rerun nock.
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
