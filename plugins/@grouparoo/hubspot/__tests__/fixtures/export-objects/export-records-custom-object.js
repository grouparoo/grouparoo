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
    "Mon, 01 Nov 2021 23:39:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f6fa1e57cf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "cd88205f-1d68-435d-8dd1-35ae370b3ff4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249711",
    "X-Trace",
    "2B4D61017E492DCC944DDA44211BF8E0AD03B4A41B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=m%2BYm73ZT6vgzRXii9qrEByZoWMQlk%2FpMmPyavy4NRyvrSHdzzT3i3qqW486dJ%2FGBS9QefK31mceIjxCCJBlG51aszfSASGsqE7z7Kwrrt8jfQ6fkuBjXeFRVIx3wqeoy"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:39:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f6fc4838e08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "beab4f42-7de5-4f76-a0ff-5ffbcc86fc8a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249710",
    "X-Trace",
    "2BBB556B31D48BFDAF61D457E8D3181B70D5F07F7C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u4JvTDUpVHsWV7O9GDZu7nnwlv3TSuUjwQFCB5ybwXABUfsVCCePMFlWPKVy1oJ4G1OIWcAvM1hJrlWTC9OqYMg6WUyPFoPRS%2BT%2FWAZhvcxulA5jx9GYRw9lGg1Jf%2Fqs"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:39:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f6fe0eb1e084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c62ce654-71f4-4733-a624-57b72f51cd6a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249709",
    "X-Trace",
    "2B3A393CC2B8F495F00411D1E2394F13E08B0C6425000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2azhv1HcK6oI7VsSe6R%2BY2eK3o5vlgWFaSStkxlSAHqrcHHMdmQ3e%2B7t7g6bLOT1IoWGkCNN3VN%2BIvFZ4uvSbBFPLjDUJhFtdvftOdYx5R%2BqFXWjNYCzjIGKnF12k%2Bkt"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:39:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f6ffad1ce078-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8f86a10b-e1eb-405d-a49e-fe7f04bf0a59",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249708",
    "X-Trace",
    "2B301912D408D81093193F6B14C49FC00ADDC9D2E8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XfJ5%2FybAKiOa5Q0pQ90GpDEYkjeLkdyeHkn%2BS9l7Oo8xspIvnie4CoutQ5uLKMBdKBJu%2FvM0comuI%2BCBkL%2FtclyicUmB6JMlVDjZnvbwcFoZyzu1xbAuiXU%2FtQbosQQH"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:39:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f701094a2737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "352573d6-082d-44cd-8411-a49df25f5354",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249707",
    "X-Trace",
    "2B8E9D81AF028891ED0C967A1664CB3F1F5C089637000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AehXyeksV1ckXi0XooxoqmKOeKiLt9Tkrdy23yRsklQiJqShWVHBkKtcZhrPq%2BLnpKX8KOwMdJdXUcH8Pldp2mztbqX29E38mxmUlDfden0oc08SP7olNuBsIJW6mdl7"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:39:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f7029bf52746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9402b7e7-5be3-45a8-bf2f-0bd17b71ae15",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249706",
    "X-Trace",
    "2B7CE5A6138D2B2A7962F04FBF464BF177CFE76DF5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OWoxISKqUfANLDUgz3Y7%2FnWnxGkHUhdYZwNw2K6dAeIisum5VcoFulnrYizASwH24KBES%2BP7icKt3f2uC0G0NMmFEefQfu7dBGEyDOI1pa%2FqFRgRBNpW8qIetWmBAsu8"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:39:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f7044ad1274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8815038f-d77b-4b26-bb1f-864b83b092ed",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249705",
    "X-Trace",
    "2BFEF06C793FE91137C57D248BD07B565DB7F23D16000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zyCOPdlPxtbtrfMUuXXcfneHBkhvJz6iBdsRJwFMMq07Qy2dhPA7QEVugSbBuwTpOwENI47veQm4%2F78P5ExWtlVpn%2B58icPRZ%2Bs73IwW2h%2F6bnoU1xxWZvnoYXe5P%2BMh"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:39:52.726Z",
            hs_object_id: "472847769",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:39:52.726Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:39:52.725Z",
      completedAt: "2021-11-01T23:39:52.790Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:39:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f705ff36e080-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b7ac710b-7971-4785-92d6-07639bd48850",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249704",
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
      "2B1F3E76CD7989AEDFA69208B012A3BB50E7C7EB73000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HgeXSICYHupCNl2QaPILTQkQSA%2BroKueNLC3dn9wu50ekEUgZZBhmSFskPq7EHlX%2FXA5yZAhknqj0HfNKGHznjnrD51dpHxqYDLNuKUNNuih9gnkfssK4WeeqxbUXujg"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:39:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f707ac34cf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c838748d-816f-4592-b53e-dc9b492ad6dc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249703",
    "X-Trace",
    "2B94650F965AE98FE3DF5FEB716AE11E7309205A13000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=neZjiIhLIFIn68q18VsasYH8AZJhfL6zL8myy40AcsGvhbHQc2egFv%2BsXHAWmOYp74eMisl3Y%2BEXIbR95jzBbWOFes30oItwL7tzWwHaCjzaoR26yMQMHhgk%2BRi0rPTB"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:39:52.726Z",
            hs_object_id: "472847769",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:39:52.726Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f7c53af4cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a6039404-2101-49b8-b11c-b73909db42b0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249702",
      "X-Trace",
      "2B6F782E580C96BCC36F8160F04C351A94400757D8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2fIocv4X%2BPEb%2BumAoGHQ%2BJ1zoLCNBG%2BATfybUgu1EhM5kldFUhaQr2kX%2BOcqzPwknIej6S42569yJj%2BXOe%2FFA24FO1qihrG13l%2Fh2Jf4qqFISpVI9nta2yJ9as1VrrHJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:39:52.726Z",
            hs_object_id: "472847769",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:39:52.726Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f7c6aca2cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "946754e9-c196-4667-840d-a4b05b07f49a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249701",
      "X-Trace",
      "2B543F67DC79BEA1EEA1AAA3C761EFE58A120D8370000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ue3q2Q22ca4c5F7Bs4%2Fg7Ex0LEcsC1FlswsqrLtJ5iR4LzM%2B3GcTGj%2F0HFIjSiVp0PpYFG0ZuutHQS4%2Bkf83OrfyZOi7n0L498svzlErnw1Sn8y7mGi7BuCm%2BtAAONe3"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:39:52.726Z",
            hs_object_id: "472847769",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:39:52.726Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f7c8af1ce080-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9af48d69-9888-4d1c-99df-408d46eafb25",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249700",
      "X-Trace",
      "2BB2E8B4C006178947C70DB2D235407828FED7A439000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z9OIVepkLApeK%2BPYMqXnK4qkfZpTs5RhsJSwk%2FVPqJmOUpNRJDNBZAEUUGTB0i4hn4bc06ujjhjYF5Gz0UJtayl4bebScS12uZpHTGpH8uEt7PEqwY1SIILhg1YH2DZJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:39:52.726Z",
            hs_object_id: "472847769",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:39:52.726Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f7cad876cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f6f966b2-9640-401c-b6f6-5c0bec587926",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249699",
      "X-Trace",
      "2BA491FC5A8F40A74C7D98AB2477595FDE7C8760D5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jsKOX71EsUYJucMXqxWaeL6mch5vLysPICO6W5w97YSs2veS7K95aMYb7cMfwJCoz4Ks9hL2o7DFLhrCiiliOro7uTXTOYcrqVZ81mc9W24941vPce%2BoOx%2FaUeCDvtl0"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:40:24 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f7ccbde02745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e4e9deff-bb1c-4275-815b-e5fd351d4df6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249698",
    "X-Trace",
    "2BC1136909422D5AB842F73606AF87F5659FA57ADA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S%2Fu%2BwixV06jiKJuraoSpeGDg3VevSHMbBBTSsxv%2F09IuNvpsi0238aSXwlNl0hlzYolMv4vb59WTankdy7VpdS30wHa5mNxOtfo%2BlZQULLkPI4dxCcOzzMrgkpk6MfDz"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:39:52.726Z",
            hs_object_id: "472847769",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:39:52.726Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f7cee9502749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "26354791-577e-4f52-ab2d-9f0b9cd6a96b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249697",
      "X-Trace",
      "2B668F51073009471A786D6F74DB3CD2699D01300D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MLVzf18H01%2F%2FklztlRw2lbtdcX1g83GWwB2zkyOd%2Bj0HufMyfybyNpr10snBKWzLgcWUb6DXmugs4XZxQoVPCOyGNZ8Xk1PpF22oBKUNy%2FAcBiAndakeVZ1S4wZ8Bf0D"}],"group":"cf-nel","max_age":604800}',
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
        id: "472847769",
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.145Z",
            hs_object_id: "472847769",
            last_name: "Doe",
            number_field: "3039",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:25.145Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:40:25.134Z",
      completedAt: "2021-11-01T23:40:25.185Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f7d05d77e084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a314a004-6f6e-4529-aa36-108c902e1e5e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249696",
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
      "2B16421F1C854B2E8E809F76C07EE76A699E6AF49B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q9CV9znxFplDx4yU3CZW18uUroZb2NDV6mcigdYT%2FUK73V0LzSiVwOTJre7rYxkOEDEpTOaXqMIsH6HG%2F6JSpJjB6l46jYdMUHWp2s%2FbOLNkNbXY%2FKEhDsuiGFT8czpH"}],"group":"cf-nel","max_age":604800}',
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
          id: "472532546",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.418Z",
            hs_object_id: "472532546",
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:25.418Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:40:25.402Z",
      completedAt: "2021-11-01T23:40:25.487Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f7d22850cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "10c20f63-5870-4723-8a54-64390d1b493f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249695",
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
      "2B00E52764BB2BC9E5CA9DC048F759DC970D7C70BA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=t2jfh0qd231IElTKafpftv2tepSbKkQKkL7%2BmCp4k3K3DxXkRk5vhbOtzqLbSNzFkSVLj8g5xfU6yDH969yYRIOxdpqru8izaPUgV%2BppyuYPYTBvYuz3yLDnJY3%2B58tj"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.145Z",
            hs_object_id: "472847769",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:25.145Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f7d40c3f2745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "06c50f57-226a-4730-a58f-d0e5c9e98c3f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249694",
      "X-Trace",
      "2B3116EB6ABB2518CCBB11BC4FFCB8489FCFE99ADB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BW8Hgpa7c%2FqARjNMGqNnVGJ7xAD%2BS0OO%2BNA3ySc58JchPIWsp7lAgmKuJq75xCcRf7iXhxtqqNYz5KD7uBC6WEh9GCSMWWJI0VTtWG%2F53MGu31vFqkQG8DnfuhNRHIu%2B"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.145Z",
            hs_object_id: "472847769",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:25.145Z",
          archived: false,
        },
        {
          id: "472532546",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.418Z",
            hs_object_id: "472532546",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:25.418Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f8912ce62755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d1b99800-8b2e-44f9-a36f-70e97e08a0da",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249693",
      "X-Trace",
      "2BA8341ABB1995D1A15785A22E18F2847EF70FAB5C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5N9SZc5qFynaCDUjCE1uMmwj7rBU2tV5m8qSJLqzaL8uDpwVjDleMKfsYlnvihNyUOMTYx3%2Fzvbr1SWVQ03zPR4oHJYwfjDr9DqcttnEZnlAFtvIjhn9OJdEMm5Bt2%2FU"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.145Z",
            hs_object_id: "472847769",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:25.145Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f892be01cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b5951105-44d1-480c-b270-ebe39f7be76a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249692",
      "X-Trace",
      "2BF661875680A0666E07A347E2E6C7777231AC7418000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tJnoCdGt10ggxHMq8Kz%2BjhkLcOD%2Fy7977FRyYJKwuEuTGsGrm1ZEhBHLYCoFFINMtvyDuP6FGxcRCA2Kz3RLFe8a0iv8OGSlTmr1lGK%2BgV4TZd9msJPdCUjMtN3kOkV7"}],"group":"cf-nel","max_age":604800}',
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
          id: "472532546",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.418Z",
            hs_object_id: "472532546",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:25.418Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f8943cb7e080-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f5180069-e017-4621-a562-5f3d8ff5564b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249691",
      "X-Trace",
      "2B8A5B81D79E6AEC47E8E9CA3C04385874F024D9EE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oaXmILOjSLyvZ2MnmawygpBl15aJ7cR5HRc7E1pGwdQBkbqSRYOPNJ0Vw%2B84EqGmLCCfgAgteFTsp3keATedA9GnWOFo7YQMOTP%2FipZ3SX4OdRIFlWAolD%2F48IPhF714"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.145Z",
            hs_object_id: "472847769",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:25.145Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f895b8b8cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "622dc25c-a8e3-41e9-abc1-c6fbd0ae8d3a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249690",
      "X-Trace",
      "2BF3AD4B85C32D3B0DDF6A6579FE24A251F7E03C37000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W%2BayimMruUJoiuxS6xOhT1WU28Zd7DOW2ASVZmUC1Qk7VXAumRSrBBu0DK7skM7WXDuvKsjEubZsmSGZxgoI1hQ0wVbHjMNkCFatmvnI9kimDUo2q7ICBOsWcKNcmJO0"}],"group":"cf-nel","max_age":604800}',
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
        id: "472847769",
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:56.969Z",
            hs_object_id: "472847769",
            last_name: "",
            number_field: "",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:56.969Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:40:56.963Z",
      completedAt: "2021-11-01T23:40:57.006Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f8977fc0cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d460e9e3-493b-4cb8-9120-dee6684caa9f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249689",
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
      "2BE9921D255CB9D47B2148DF4D760795918910AE3A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D5GYjpHrxjWDfVWhwP4WHOgxsLinY2H%2B4mLYIQmdJ3kxF2EXZWY7dmPpf8PjPZn8S1vFfwTBx9pLxw7yxMT4HfTB2THYnMmvtVntsS0y52V8aMo6aBlFVKYiYy1GvrXQ"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:56.969Z",
            hs_object_id: "472847769",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:56.969Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f8991ec7273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "20401ef5-578e-45a0-9c51-fe110e7eb824",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249688",
      "X-Trace",
      "2BAD4E84C5D8E4A8C670C81DBA3B671833D9F9F421000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jkZ1mC%2Fi%2F0tMVJ0Ygvya%2Bdk8tvpqmnjcR47vKXVAxwnAB4UZuPBNEofvSH9qFhHXjBW9xAaGM5dqWxlp3X0gsG60Uinw19o4bNHltvHBNk3KDfp5JwSoqVLqYt0LjMDe"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:56.969Z",
            hs_object_id: "472847769",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:56.969Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f89c8fe32743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "782518f8-b908-4c9e-bedb-e1662a605f93",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249687",
      "X-Trace",
      "2B3386BEF8819344EC32BF80CFAFF2B258F73A728F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2XuwG%2FqTp3uK%2FLmIIenHfu5iQPaMZIVEyzzQ89cdwA7XTpsBapIS%2Ft8F3B4NzyQeGT1VIxhCn5ISRPwHfMznCgYXyL5AJDKb8IRUZN%2F%2BZVDOIvpbq7qIkhhmq3oysBRJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:56.969Z",
            hs_object_id: "472847769",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:56.969Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f89df8c4e084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0d6dec7b-4731-4ce8-ae45-3ddffe02f8bf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249686",
      "X-Trace",
      "2B1E2CB3605A21D0269ACF670D41C424A6EBD0178C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gBIomM80Lv81lD1hr5%2BXA8TZpHK7GaxcD%2FfJmeGCJAbdtrrR1CpVnaL4nfFPZeBy5rzik79%2FhSerVI%2Bm%2B15hgIhXXKqCk77qwriffJ%2BxMr4sCd1mRkpedY7WLwe26Wtg"}],"group":"cf-nel","max_age":604800}',
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
          id: "472532546",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:25.418Z",
            hs_object_id: "472532546",
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:25.418Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f89faeb32743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "70f69e8e-a82a-4c90-9d12-16b2886c51d6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249685",
      "X-Trace",
      "2B4210801B62D1442A8685BF793F20B5273D350061000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jsov5cEu2pornD7GhzFyypmBBWtymV1qgwVzG0mTNOkMq1nVlZ2Q7%2FOLDRJBM5nd4Ns9M2mLCylLB%2BCB%2Fj7guB%2FjQD3Ocwx1R2HzN6Mk6kvKE9Dfme%2BNOni4SJbQ6PW4"}],"group":"cf-nel","max_age":604800}',
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
        id: "472532546",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
        },
      },
      {
        id: "472847769",
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472847769",
            last_name: "Test",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
        {
          id: "472532546",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472532546",
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:40:58.600Z",
      completedAt: "2021-11-01T23:40:58.644Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f8a1b8ff273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "33a18ca5-8572-4d92-9527-fc96883f1402",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249684",
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
      "2BD0DEF3ACC598BDFACA306537EB2E625955524A55000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RtmNZQTuhupDrERfJkBx%2BHom%2F14j6Ggkb3es0RLNHCyUAdmINXnfC8%2BenAhkHqS65loavgZANwwrhRJwg%2BBFBWE55p%2FUq9fuRHDgSTCuqFwdTFSGB4oi1fWn0YfNhDiB"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f8a3ff942743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "22501e28-a7c7-4a16-9dc6-0121adf0dcef",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249683",
      "X-Trace",
      "2BC2FE2C05F180AB7B565454EFFAE241DB6E33EF74000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=O4CnDVfwfMI8ySeIyc29Ez8KvSeerVHY8fiRgI8GNrpjZyUvaIRrEtNYiErCSXcT1jI87nqRi4JEANkMeVsOjQpXYEAZlIx6bF%2Bi95IUf3XFZwnUoB1fYeyrqLm6fuJ5"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:40:59 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f8a63b11274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "19800a44-cd59-4ceb-99f4-35e5fcf31d71",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249682",
    "X-Trace",
    "2B2031A7981B9F94C1907F643AD37F28220F32C775000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=b%2F2cfzUI18DMaBK8lxRWctoPERNl4E%2FKZAaMVT%2BP6RqjY0tRfvaneVKlLy0cgiOngI1ulLwbz80kyNJyvgL7qhLr57%2FmXgFBFeXZHkxOBtEGxk54L93T2Q0r8isGB2Q%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "472532546",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472532546",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:40:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f8a7f834273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3e4de6d8-d2f7-44e9-b09f-c35076fe7ec3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249681",
      "X-Trace",
      "2B0DB28C03C1F73E1C753607C54398C3CCB19BBA4A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ifBNg7qDDtOVLO9StT1%2BDGm6Es%2F188iV4wZhVllQ4uEvQjuXGzlISCugHSTzY7Zr11s1N%2F9jVNfOMoDIlfVGgUBvui7J0WJ%2Bjw1yhHQkTEazRgl6RxT%2BT%2BtrCR4Jj7ia"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:41:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f965b865275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ea44c13f-eb10-4854-9c94-f2c96301fa17",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249680",
    "X-Trace",
    "2B6053E6B4BA8A5D8BDB095B3684344E310E346CEA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1PHdYMqLU4ue9vqe2b847IdKpIc2O7xer9rfrCPdlvTRp3R31%2BRMqYSrlmRywITnh%2Fc8%2FU2ZDxjMNDw3kYD5h6vGTBDA19nHFIltOp6pNyNS0bXtEgOFmIp%2Bb1f4rBVZ"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f9675c93e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "63734f22-5f07-4c3f-a47e-67c237b0f2d5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249679",
      "X-Trace",
      "2B5553D8BE7703707DBFC66AABA9A14D2E99C1EB4A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tWPKPij07IPsvRa5oCzfIQYDLtt6MkqRIUk7OxkzSRVS7ooydLFH8wwzz%2BQ07vqtn0%2FR7f%2FsbUYJV663vGR6HYilpwe%2F4oVDMrDaY3FeHymMd7RgFwyR7hez4jS6GJkG"}],"group":"cf-nel","max_age":604800}',
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
          id: "472532546",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472532546",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f9696dece092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3aa7f9da-da97-47b3-8e27-49e3d1fa55b2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249678",
      "X-Trace",
      "2B3352031F65336A69BDCAC594F45044511D318699000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mahNIE7EyHHMrgAT8foODwJ0JJgXUfyRvx3l%2BD8FR9OiHVULau%2FWAvT0JIEybDD9moR3oIfvJhABzTsKoE17GNJpItXW676%2Fjm%2BsWSPHvlH0v8AqmPR5eRZwvokg6iHv"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
        {
          id: "472532546",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472532546",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f96ada3ce07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "548de96c-827e-4ffb-a84a-110688b70dbf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249677",
      "X-Trace",
      "2B96C617CB059E1BBA19B5D1A5B678343BC49C2422000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Zwi%2FrQtkK1eIefB%2B3ws7kmnkUVzHu7%2Fb%2FHC40N7WSIAu3ogSI5oMJMRvIzp33GOXbewnrbUZv%2FJbDF%2F%2BYYUNzcdX1eIoBAvJz35%2BhZoatBBGKwePkxBiS%2FuQa3gMk39p"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472847769",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f96c5f1b275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "66b1e08e-d8a2-4682-85b6-adce997b656c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249676",
      "X-Trace",
      "2B9760FA7DC95F36241ED4FCCDA27EB4E16DB5FCC1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pxI%2BIy245ZLNFl3SaokdPUud4kLOEas7xdePTRUJGgMfH61JlbH74YV%2FZn8IQWJioD7isDCbLwMfh1SJuW2LMQlnossCTCZtSRcnGHvmQ8ehnUz5AoGymaUhYHlvHE99"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f96dea7c275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b56a0725-322a-4979-b26d-5827383bdc80",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249675",
      "X-Trace",
      "2BCEF5BBA5C7C66D8F3BA4CC011819AF5D62CC83C9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cZkXQiQmP6aXGYLw2%2BP1IdTKh3rm%2FXLw3iebPUplAEcjKEo4sL0l2t1Xo1YzMqm7ji5bT7srXyboCH86%2FobtjdVrzu%2BqmD2wOk%2FtdTa8sntmafnXdeDvgubkYR4ja6r5"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472847769",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f9700f882746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e2840f0d-5f11-4f7a-82f2-af1582712928",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249674",
      "X-Trace",
      "2BA2B02577153A11960ABF7A7D09D83C071F762BBA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hZFHe%2BSLmw05Bu0ruMiQEeaugm6h%2FBrd8e0cmeAmMeqTVNmP0d%2BYv7Ht2bophuQwZuy%2FqiMpfGU56zT%2F6lQpvwBdaP%2FcprEWTcTTwRn9hCBi%2BOel8zFoIBbPGqGvyMpr"}],"group":"cf-nel","max_age":604800}',
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
          id: "472532546",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:40:25.418Z",
            hs_lastmodifieddate: "2021-11-01T23:40:58.604Z",
            hs_object_id: "472532546",
          },
          createdAt: "2021-11-01T23:40:25.418Z",
          updatedAt: "2021-11-01T23:40:58.604Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f97358c5e092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "448d6275-2925-4900-ba83-32c4d6140b6f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249673",
      "X-Trace",
      "2BE98BC7F4575E892488956B85623A4D22F3480917000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eQWqJiyIk%2BiKxkT1GeI7%2BP%2BQlhBdARkwhtrT0%2BbjKFpQizCf0qXa9JCgaIoq9pit9bBFoHhiuusBcM2yxIVHxZBYuSjyJg8IyDcHwiiSc4GKltyX2p0cGc9xutsbeX7J"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "472532546" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Mon, 01 Nov 2021 23:41:32 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f974d880275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "73b61c94-4ebe-412a-b714-0381dc133f80",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249672",
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
    "2B493AC8613E8EE75D4495A9B1E85A29A74B9E5DB5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YiFbVISYs6nVQWNyaz0NkoqkalMr4FUzu%2Bpqjm%2B%2FEUbPdcQ4uMs%2Fu4tfUJ67jzdhaWvzhiOMY8kBX0zjBe324f5C%2BNc%2F%2F3vez8MagyVCe3IitHviL8BcAYAK9KWvUIqE"}],"group":"cf-nel","max_age":604800}',
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
        id: "472847769",
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:41:32.983Z",
            hs_object_id: "472847769",
            last_name: "Test",
            text_field: "back",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:41:32.983Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:41:32.977Z",
      completedAt: "2021-11-01T23:41:33.014Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f976defce092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "58ced0f7-2ce7-48fd-b68d-5abea6cb2530",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249671",
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
      "2BA3C375788049A1FF837090A0BBCD2496F73F521E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vixTInNidruhjA2nwz1yDnNHeQ%2B7IE9WFDIDfNAEl%2FlBj75JKW8OYqCKEuiCl1cvf1wh%2Bc1fuanVQRUfC73SBOFcVt14kVIeHtFfav1yU8yGp6bph4CBl69vyaluSvWl"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:41:32.983Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:41:32.983Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:41:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78f97add842749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a239774c-6cd3-4acf-97f1-c47eb2458441",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249670",
      "X-Trace",
      "2BA8BD19C84B642D701E17E3A2CF1359D462F08159000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iICzA%2BywU968FeIBKHM3cnE%2Fe0rsNMIydxE5oDJs9lpQIrQRv%2Ft1%2BLwRLxWS21ofNo4sQlK3LCl%2BMkjsVfzTuB2LG5Wrqmq7zhe67oG8tsgO16Xj0C7GtUCXDXHZk7IR"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:41:33 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f97c4fbccf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "397d6d11-42f1-4af9-839b-5a377a1225ab",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249669",
    "X-Trace",
    "2B15F8706D5329710C4E59C7F7BF6714525BC2AC2D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qjK%2FyFpMgsCwqoZKLgnA4SGRI59t9krxaY0ljH2rvrdNCFwo0%2BuZ39aOVvwA9%2BrBeMjkaqHrz0d6d%2BqgNoQeXDn8E%2FEp%2FJimIsvVts1NC4nrsnjYOI%2FgXyRocB0qwnyF"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:41:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78f97f7886cf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "84b62e18-9b03-4c28-b4f3-5dc570d4f155",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249668",
    "X-Trace",
    "2B58E88B99E7402348619201D1CF4A921E414DB852000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Sbx8YLMU%2BA5fMjhriQhbF50kp1OW78eG3MRIDm4jB1spX%2BiYo4Mc%2FlKG2RYOZ%2BsOp1t0r5cMLcBQY2%2BKVgazZVJSTr9oHB5%2BzkLXoZr5S5%2FEfmwY56vyjkw0k8RtPoud"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:42:04 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fa3c7e0acf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b4352f7f-7343-4a06-9d74-1cd410b69f2e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249667",
    "X-Trace",
    "2BA56DED3D4F7B8B254A57CA779B7A0C61E635C7C7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MGS7emLiqlVVqQXL8XUsBUlUdq1GSG3ppqTo9xvcw5saB3U1Vw1uKXuA2sOI%2BPKp0L67qO%2FfJI6pyt5Om1ahFq5tcoY6NEuaH9XocwJ%2BqYBDeDR1z0zfM3paByu1KHRn"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:41:32.983Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:41:32.983Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fa3e594c275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "854e606c-b1c3-4db5-8c2c-84b36d3a4fa7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249666",
      "X-Trace",
      "2BED3F01093A2686B369F86398BE99FF608828D904000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3yTCdamExjrAO5tMMNZIXV2%2F4NiiDwpEvppTkWYF8vP6hIp0%2F4gI9q6onbjxqyVKQGh%2FabPVzOVm5PgybAA8GAXhhQSmW352e2CpHfZRvEDBHgTPcQiuqG8L%2BIWurfkF"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:42:05 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fa40ebec2755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "57e6decf-353c-4f95-badb-292c90979950",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249665",
    "X-Trace",
    "2BF2C468E8EB6137396D0FB80D1A9B0F337EA7365C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CnujyJ%2FqsTVQe26MlqrDmfdqoU%2Fl9zF4QLSMu7v9twkUN6IvLtdiLs7UlCWFeJRXIOmvl8lSaX%2FD0QrpQfXR%2BRXChdjfEOkvrQlTssLP984zXOO5o4EqvHOnHMzWOyuy"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:42:05 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fa4289c0e092-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d4effd87-4e53-4e1d-9984-e9dc7e74f230",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249664",
    "X-Trace",
    "2BB36493140AAE7D644D9F5F937AD48674027CD2EE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=muprXX5GorrtyCCTA%2FdDKcmXzF1kdVbHjKnhatXW1Z5vJesyZidqi5V1H%2FRpJDhOUKVuikNpoRRz0lT%2Bc%2B274J2L78wb4AQ4FXbhVz4sb26u%2Bhe7%2FDrPYeNXqyjbizN9"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:41:32.983Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:41:32.983Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fa442a51cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2b4bb3d7-51a0-4e0c-bda5-4e6772a18fc7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249663",
      "X-Trace",
      "2BA7C8B5717A2BF1684601DF49FEB297F96CD3B047000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pMZATwfeJA0V7r%2FPss4FIkrfJcqplh5aRTOzac6XUYtPh8ONp%2F6wLqbr4ke8n1vkVJsNl8rp8QOQQSsRxXmmSy6UEs9%2BmSNiL5hUXlzYw0ZI3O3wA07Ug4Nlt4mmY6G1"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:42:05 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fa45ec31e080-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2d9b31d4-ede5-4ec0-9e7d-ab8adb3de87f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249662",
    "X-Trace",
    "2BBCD02453DB0018F00EFEE130D735480BC0C58A2E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XvlCju4hTJ4FUw9JFLMYkckxlwKEhq1eJOeHvomWP5jY8o5bBgZY%2FiBk1kNDsHOjdd9u1aPu1gj%2BFvAJ%2Bh2MT5VQvotIbddzi3aHPTNdC2k%2FNxMvKb2Dz7A9K6KOT2Xr"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:42:06 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fa479e70273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9c4679e2-f911-4eb3-a1ad-7b5de1f53882",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249661",
    "X-Trace",
    "2BC939569EFA6E1DAD721F086BE4B130C7EB69B6DC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OZA9nmb4oX4DKygngRlP6tJ28iTJPy0ZGkl6xrt%2B1bPukNriiNPieGZSiDku72YpZeo1wp0uPNPN9GpsD17cykx6FqdV1u3SAHDN38ZZM%2FLJzPtKUT6KoC3D%2BK1yNDgv"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:06.359Z",
            hs_object_id: "472899637",
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:06.359Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:42:06.359Z",
      completedAt: "2021-11-01T23:42:06.417Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fa492b64cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a2150b23-d4bc-44e4-bd9b-8eb9619e6c5c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249660",
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
      "2B3027865366BD2AFDFA6E305AD7C0F0A562586450000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mGgfJ%2B4mVepBaZXri47JYWBfG3lEfkfUZFGsF0azGcISDAEuAXs6UC1esFjpAs6C4IlQE%2BkE57XDePqWLBJqk%2B45bdGh5gPH3O%2F8FDlztRFZ3HYqPdy5%2BaLjntUIPwYh"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:42:06 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fa4adc822737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "cca8999e-d1b3-4366-a963-eb722a71d0a6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249659",
    "X-Trace",
    "2B8A19EE94B6CD55A3FADC3E2A22D608F9205CC930000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F3HCw4KZSGeongzJtAnyJHOcA7XE7R9zRueXtvJhcsD1jzgAGhgPNVqdZ2YtafnCnsELQvlPk5ROghfcvV3IKcNW%2BFCtiCRa9pGTeQ7PS%2Frq5p%2FlmFHG4T0EwD7r1497"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:06.359Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:06.359Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb07de73e092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dd6c123f-888e-47f5-b30e-4dc066c8f611",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249658",
      "X-Trace",
      "2B5595AC5422501D5070891475D5B8FE7D9EA43888000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=suAoFUhlXlWzqN8CRKPjm5mpQLJ1SlmHZrpGMCw6L3Shtu5LwTvppmva5kZfIjquuipX3DKZVY%2FDW2oJMGOkQt0s2Wg4ysE2s0xuIo9lWZUz42ZSodsblzSrHP7FYuUE"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:06.359Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:06.359Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb0cffcc2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "14cb6f77-b41c-4544-8f96-ffb93eea4e4b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249657",
      "X-Trace",
      "2B935179D452C39820DE5218863C7EB4B3E8F3140B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4FxLIVH8RqVBp6w55123ECUz%2FDpqZ7Ympx%2FF791TXG04spFIYhmp1DetkwIQ%2B96TDmQ06X28UpqFsrx3I386tgdsoa7UYiyHBVWcJjen4N5NSMz1DHmBPY8xbRMPfWBn"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:06.359Z",
            hs_object_id: "472899637",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:06.359Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb0ee907e078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "58dee262-3bd1-4d63-92e3-d57b1a2274f2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249656",
      "X-Trace",
      "2B111061E7FE7BC5A38F2BC44DBE40A1B01E94F13D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bjHal47%2FpqmQgU9KGXC%2FaajoUngcGgCrvn3Zzp07C%2FqGXDSx3SzPCzgE6axGljebgOemHRzAT548Oxwjh%2BDK078DoX990HX9JkYrKU2H2lIn2m1kvVYgwZrAsQZ40DXo"}],"group":"cf-nel","max_age":604800}',
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
        id: "472899637",
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
          id: "472899637",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:38.291Z",
            hs_object_id: "472899637",
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:38.291Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:42:38.288Z",
      completedAt: "2021-11-01T23:42:38.325Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb10ac1ae074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ac92d06e-bde4-48b9-8a36-3c9dc1b16166",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249655",
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
      "2B8796307774A5EAF1A3EFBF913C49969F2A010ABB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j1JVQgXYZtQNeZn3j8o0IOaiYVY30Gk6gpaJJHOLz6B3MHeD8NmHQAPEYVieMKSrL28jIqLYoTYTfoH6NkCrdJVaatLR6oErrnTXrR9ZiAnpY7MQPcgTW47kb%2BCHAbQP"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:38.291Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:38.291Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb12e8f6e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a9a601bf-0de2-4853-89a3-d7bb12ef517e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249654",
      "X-Trace",
      "2B495D4AA41B7B3AB4BF8D5B558D49DFE02A6DD5CF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5Ukd7ROojxSPQi4MVyO9qTU69rGhS3qZqZ8IyDEZA92XA934cCf4gXPSjHTYT%2BaqBUtICnWB1k4sqjweZjKpgrBg5yAVuJVTqNwRmtxouJ094kSupxLtSNOQH0Y66G9X"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:38.291Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:38.291Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb14a88c2743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0218a655-3d26-4941-a07b-85ff2e6afc65",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249653",
      "X-Trace",
      "2B6BF02A795CAE473E42B1686B9C3A9DEA8E03891D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7QGPXQ70GY7AB6Ujo8ZL96oNdJF0vvjiA3qPrFP3DGuDpTAdOX2pPnLgw7lt0cqS%2BeYw1vrPxVHaol2wAWlAQv1EijDBbVFRb%2F%2F9qxiZWvjv9ISfHRPfajNo%2Bz8fC7%2F2"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:38.291Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:38.291Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb16bce0273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8c9f98cb-531d-4f8f-9354-2b7c637107ef",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249652",
      "X-Trace",
      "2BC7AEEB3A5EFF7E94BC8B05960160FA506CF883DF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=57xXsp6EQMoB6tEl0TbAc%2FXKJisSLv5ht8JWMkkQSftXOvdCWAqB4UbdMnDSABWShxtb7Okgd76LAGl%2FPA7yHakZsabYyRItL4S4adxUKpm776MguJQqXAGuZybU67Rt"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:42:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fb183ff42749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fc296f78-b767-49a8-baa1-fd697fd1d1df",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249651",
    "X-Trace",
    "2B8DEA3133DBC70CE54471A80EC01736A92C7CEBD7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XRYOVbWu7Qc48rloGcs5VaSfrrpHwgKvYadtFt7MJ4OsQldcXEjRIQhF7ylHlU%2Bkr0EC7QJhsqJeMQIIKC9O2fsbvXHbMDm7d4EuJBsQpLbN2qHz0Hgt7NKccOLrvUrO"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:41:32.983Z",
            hs_object_id: "472847769",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:41:32.983Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb1a5db1e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "19b80922-69fc-4dc6-9db0-351696d6707d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249650",
      "X-Trace",
      "2B326C3E31AE81835FE7AB0DE804E4B2D5A3FBE4C9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2FjruVy9dXRtZHvJNw9hIFKwIuI%2FwBm%2FRKddLO9YDC7eV%2BJTZHQ2YhkiiyC8bwZQQWJDw6itXkFIl0X56cW3%2BeCkkMen3EKPMTL1bzs%2BaB0Kcter1jFUl0zegRROq5OC"}],"group":"cf-nel","max_age":604800}',
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
        id: "472847769",
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
          id: "472847769",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.175Z",
            hs_object_id: "472847769",
            last_name: "Test",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:42:40.175Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:42:40.170Z",
      completedAt: "2021-11-01T23:42:40.220Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb1c6abe275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "789b7530-e001-483f-a2d9-020a20a911fb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249649",
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
      "2B7D1AF828BDB6D09D72FA24951ED0AE8CEA85DCE0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xcRmK7CTvpLsBeCDuWGQRRppB1NdjroqeDPoUWV5a9CQJZxxPYheLyC1%2Bnk%2BwsD56ULZyY%2FwSJx6GmB7QEuR3OXBqZ8ENucB4zcXPg0Ncr6uwsTZur3baBjD3wJ4jkgo"}],"group":"cf-nel","max_age":604800}',
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
          id: "472882582",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-11-01T23:42:40.713Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.713Z",
            hs_object_id: "472882582",
            text_field: "some text",
          },
          createdAt: "2021-11-01T23:42:40.713Z",
          updatedAt: "2021-11-01T23:42:40.713Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:42:40.708Z",
      completedAt: "2021-11-01T23:42:40.778Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb1e2e3a275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4fdc9629-af80-4e2f-bdad-4f511de219a5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249648",
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
      "2B86A42C364A28E3B11689282DD69F2E0A89F4BAB8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YKbxr3J7vR4q3ZKgdhzZNZtYtcU8xYxXY1KeGRnmOg6j8LU1msCqWBC%2FjukXjyVY7%2BLEr6WcXmn%2BwWY4ndjXBQA54scjV7paPl5dpg%2BbJYWGVMQoM0hax%2BHkviyuiLNE"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.175Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:42:40.175Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb21ab2ee08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "31cd9c55-364e-4f1d-9d28-80b021cdd43e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249647",
      "X-Trace",
      "2B34229EEE9F4D64956D09ACF351FFF72A6F13A7D5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YYLZJHcW%2FuPu%2FnBppXqgZdbuz4rOqUPLKb2bxf7q38yvRvwnblyd9DFMZsvbMxtKKc5%2FZoS7PdHmMmsLvg9dns6zCxZg228Usnamx1RCsHa55nSiI8lb8g6ursYd6%2BAd"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:38.291Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:38.291Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:42:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fb231803e092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "83109ad2-22eb-44e1-bf05-be7743a20d94",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249646",
      "X-Trace",
      "2BA007A9A12338FC1E60C65922F95F9D93F33AA43B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cC0KCgx1hiLourFWpl39e425H7i7tIv6e2aKeKTTAZ800FLgkGZozh5bk7r7a67wAYmERL%2FijdrN42TWV9nThnemtRbk14K0aNOSrYZhcao0o4WXSzXvcPLOflfJjvEU"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:42:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fb24ae56e074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6db3d3bb-3f14-4927-aa4d-84f1e490b6cb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249645",
    "X-Trace",
    "2B02437A18367739C566C4120E3F54CE10B5EC177B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7S0Y7km7xae3f883Cg66RTS%2Bym7j7jAMBiSTX%2FP%2BxVzVTovUjqt7dyAmdTZv1QLE2Sqfwyyt77EaukL9T%2FP%2B92maU6Q0QOKAhAkFMSyr%2FupvPl1Mp5U7VqaV9eHLpRAw"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.175Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:42:40.175Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fbe2cb73275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6988a84a-d1f1-45fc-b270-731b9049a73b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249644",
      "X-Trace",
      "2B96BD23C1D05D60523EF311783C9A8973B1AA6FC1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dqmC6GgahI53GtOnatNJ7JhXnqD4HFvvFnne002t6%2BN3Ckciq73mKHnw61SaFtfsQkl3vZQ%2B59BQv7c43SObU87x3TvkEmgLIsrfnk3LGUtGVfoAcMpcRMssPjxEPDwF"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:38.291Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:38.291Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fbe42a2acf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ff73421e-31c8-4fe9-9b2e-8c67743fc0f1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249643",
      "X-Trace",
      "2BFCAA1B5DD34D1F8661307C68A992D11FC8038AD7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q5klB6b5iw5CtxpwpKjutO%2F6ifFpz4i1tCB9VlSKzk%2BVpvqnhD0JpJ5A7dgmyPd8E9AXM2W%2BrAZvo2VD03By1h1uTs6k9hqjN8BDELXbErK3LMsQmn%2F77KANQRIkiv2Y"}],"group":"cf-nel","max_age":604800}',
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
          id: "472882582",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-11-01T23:42:40.713Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.713Z",
            hs_object_id: "472882582",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-11-01T23:42:40.713Z",
          updatedAt: "2021-11-01T23:42:40.713Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fbe61d3d2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d771a74b-7ca8-4215-b21b-2a4183cf1556",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249642",
      "X-Trace",
      "2B436AD048FF6A35402EEE0ED1D19F36A3111892E5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bgSjRCtE%2B1xmwszwSq3BHW2dm1zAqDfWH8AMeRzTjWBqpHZkVWWd4qkqsDIAAKDINFogBJRJAMw4SPYOQ1A28urHm8a8FG9NqET9NsAbnNhICw6a3PqNmTVPfYtOMORp"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.175Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:42:40.175Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fbe78821e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c0ecd407-30d2-42ed-9d89-059edb777a14",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249641",
      "X-Trace",
      "2B1657F166CAA2532A777D522553C956F0C1AB909C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7jsGZ2DTEjyJtjgocEBaN4lhoxR6otrQ0oEB9lFTBBw0woYyQh5N%2BOV7aZ8TtbDSlG0nq9iWIRKUnWgsQS8ODNZFnFd53nrVYoM7uQev%2FhYBhe0qSng%2BU7Zkg4AQ5mN9"}],"group":"cf-nel","max_age":604800}',
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
          id: "472899637",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:38.291Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:38.291Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fbea4b56273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8e7c34d7-c099-4eb1-ab3a-3de1ae475dc6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249640",
      "X-Trace",
      "2B477465E9BEFFBFBA0AE04EFDBFD31660F76E93A6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VDJUaNIbynSk9V%2BYDgdSmixcegRMDkxhd1wl23AUJ7n6tim6IJFy9uuz7iBfJDNmEk02VJVzuzc2QY1hyMkeuj%2BL0BVXbhFN3Lp5BfV%2BAl1%2BvGJt%2BvuWJlYIJAWH800r"}],"group":"cf-nel","max_age":604800}',
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
          id: "472882582",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-11-01T23:42:40.713Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.713Z",
            hs_object_id: "472882582",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-11-01T23:42:40.713Z",
          updatedAt: "2021-11-01T23:42:40.713Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fbec2ee3273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8016b792-51cb-4246-b03e-5249d5704afb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249639",
      "X-Trace",
      "2B27A1B306EBEC795D69B61801240D03F0D2479623000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rqBY%2Brn1KrtmhiJ38evcgotFWBu5ciio7%2BhzvVFtuot2QxgH%2B7KoIf7lj67zorCM47xzw%2FaNwvBwAIbpcNvvjgnLx%2B%2FpjDcXFEQgkYbhfzP34UpGzc5UdJ%2F2QuRbCzZy"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:13 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbee8b142743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "05bd9f14-e4a3-48cc-80f7-ee98b3ceaec8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249638",
    "X-Trace",
    "2B81D17A12C42C518DE855A18CAF351F7EB40FA03D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=prhgWsa%2FqycSemcF%2BUxhSPeRMaDGhsOQvX7rx4chFB%2Fg0BTroPaTvWS2kPqwZFCooWDZ58fWJaoF5vLQPuwWKm2%2FqMQH8mEybjDmMrBVgbtfwC88CB6s4uPLAQp%2Bv%2B0S"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbf0d92fcf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "686e8d26-31ff-4202-a640-625d7293e41d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249637",
    "X-Trace",
    "2B27034CB74750CB03C54A8A9BB3E905906B1B8B7A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sf3Abf6S6sOlgsoEmUln7e83%2Bsydg7Xb8c4Il7VSsKi4HaRCCdVG7Kzl0MbOXSAR7iUj1YSTCimZD4pK6B1HEQ%2BdNAzg2iDnYhHHPD7kroz%2FVojyZXSRHZ06pOew%2F1w9"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbf27bcbcf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5033d0f0-d115-4664-aa9d-a9581f0701fc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249636",
    "X-Trace",
    "2B3082FB1AC8791C8EFB44A72C8A18B1CEBE18C081000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6jPy3hTBFGhxtbBpJH6nhRIM%2FMiGsDtrjblOxs6brZ7GlxDfuX1YTF5bApjh51xNO%2F%2BL0WcpAMasdk%2FK8SMv8leX87psMY8NERrFxy5HLirsFebjUBcueZUXVj%2BhzzYh"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbf43891cf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fe394807-d217-4519-995e-c3d7c87a5e9a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249635",
    "X-Trace",
    "2B3A8103B3A742DCC1B9F29B1702A9A86C9597D341000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xltcvyTd2867X1Srr9vDUL2WA%2FPSNVg9gvdL3lv1rtTUE%2Ft3D9QlW8m4GjLzdyeEcKJN%2F2PssAekN2sLJ56c6lNBz36f%2B71KCTopzgrjvKs7I0npaXauHmiIJ5NvlOtN"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:15 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbf5cbf8275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "45e14a35-c8ec-4568-ab23-65319ceed831",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249634",
    "X-Trace",
    "2B33B101F018A1C4612852DDCF73BC08456AB9FCBA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Vdbl0bNf2RaipIrGLxDBQWVqnmrTdLjNkPBT9YyV4QuIHqVTeN1dVF%2BU4o3N9Q%2Bv82ZeP%2Fw%2FUUxV1meJ5R8Pxi9NgQbelNIuAG3cjhBzqBTgr1JouZY7SM1uxLQwY0Lc"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:15 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbf759cdcf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9e472920-2bdc-454c-8e23-111ebf101466",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249633",
    "X-Trace",
    "2B5A5723FE78102318D73F0F84112D604160A548D9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Avj%2B8aSDoatk4RN4WzP7ZV9dhP6iLG%2B1PK9ZuEiYrl5gC5FpufHK3dtvtdyq4MkDtHJKEBWzfwepu8IQ5B78AyfFFSLVOqtOX%2FzOC7RYXrREUGFgaLCPCkAchkyB%2BqjO"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:15 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbf9191de08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1b225665-9f50-4018-b4f9-6048f4480e4b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249632",
    "X-Trace",
    "2B376AEF9C16262E926AF55FA13C181F86800CE517000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B9Z%2BE5ZAmiDb8a7%2FgedKAVpnAUqTsVwJGTdQu7nEoWD72Biz6jz%2FlIYehQ3Yw%2Fq1ipNaHDPPCALqpZzNuMhVtANaVZA9CmPRKihBKaBE3m9kWEB6u284yTJGKDaxUBZw"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:15 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbfad96f2749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "511f9d98-3774-4235-9432-4f9038d0f5b7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249631",
    "X-Trace",
    "2B9CCEB71F0840AD7506856862318D62CBCA1CD47A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IdMU%2FFiRvTcv5DZBr4pAQNnQkaEr%2BSuvdxoqyPzTubFUMII8U%2BPhOaokMGNX35XPqJ3zxmRIA6OSHFc2I8seu9Xr%2B96MOjXiaaGCb%2FI9qs41Yf%2FLI0LPH0v1I88D8o5i"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:16 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbfc3bfa275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bd5dfa4e-6f84-448b-84bc-7519fa4bacc9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249630",
    "X-Trace",
    "2BA8BF42CB4A88B453DEDAE4C5426B61A24BB27DFC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j9henK7fmkvXai7unt2zLaRfNDteciPnI1745OitCL96bu6gznaZ%2FV7erv0XW5mktoS0yGKneztQJRgSJiFSIq%2FoHfc3693Au9gBoQJrMw6kROH1oHN8S4rqSqhJqUVc"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:16 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fbfdeb582743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "030f3407-074c-4b86-80f6-c20456725eaf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249629",
    "X-Trace",
    "2B2074BDE0688417C5B8F2943E82F3870CAD558851000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qkhesUSJwuUGjrMv3FWSNX5c8MDPKgzfm12K1CCfHbJAtNIPwEU1ZTCHrNuoVk4f236Q6h2wLa5WJgqP4CaAyaPivXSda5CE%2BSkELnG7rVbdxo7C9Xkddd%2B0%2FTnd%2FckT"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848233",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848233",
            last_name: "Last Name 40",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848240",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848240",
            last_name: "Last Name 33",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848236",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848236",
            last_name: "Last Name 8",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848237",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848237",
            last_name: "Last Name 45",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848224",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848224",
            last_name: "Last Name 37",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848217",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848217",
            last_name: "Last Name 12",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848249",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848249",
            last_name: "Last Name 28",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848211",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848211",
            last_name: "Last Name 4",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848235",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848235",
            last_name: "Last Name 14",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848221",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848221",
            last_name: "Last Name 3",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848251",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848251",
            last_name: "Last Name 29",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848209",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848209",
            last_name: "Last Name 48",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848222",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848222",
            last_name: "Last Name 43",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848229",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848229",
            last_name: "Last Name 42",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848250",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848250",
            last_name: "Last Name 24",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848215",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848215",
            last_name: "Last Name 36",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848212",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848212",
            last_name: "Last Name 35",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848243",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848243",
            last_name: "Last Name 38",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848252",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848252",
            last_name: "Last Name 21",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848226",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848226",
            last_name: "Last Name 6",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848253",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848253",
            last_name: "Last Name 26",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848255",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848255",
            last_name: "Last Name 20",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848257",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848257",
            last_name: "Last Name 22",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848216",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848216",
            last_name: "Last Name 11",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848214",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848214",
            last_name: "Last Name 17",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848244",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848244",
            last_name: "Last Name 31",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848225",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848225",
            last_name: "Last Name 46",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848245",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848245",
            last_name: "Last Name 13",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848219",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848219",
            last_name: "Last Name 16",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848232",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848232",
            last_name: "Last Name 41",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848210",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848210",
            last_name: "Last Name 5",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848241",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848241",
            last_name: "Last Name 7",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848247",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848247",
            last_name: "Last Name 15",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848238",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848238",
            last_name: "Last Name 2",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848248",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848248",
            last_name: "Last Name 19",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848231",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848231",
            last_name: "Last Name 44",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848258",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848258",
            last_name: "Last Name 23",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848230",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848230",
            last_name: "Last Name 47",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848239",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848239",
            last_name: "Last Name 1",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848254",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848254",
            last_name: "Last Name 27",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848218",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848218",
            last_name: "Last Name 18",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848246",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848246",
            last_name: "Last Name 32",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848228",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848228",
            last_name: "Last Name 49",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848220",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848220",
            last_name: "Last Name 30",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848227",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848227",
            last_name: "Last Name 0",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848213",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848213",
            last_name: "Last Name 10",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848234",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848234",
            last_name: "Last Name 39",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848256",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848256",
            last_name: "Last Name 25",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848223",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848223",
            last_name: "Last Name 34",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848242",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848242",
            last_name: "Last Name 9",
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-01T23:43:16.550Z",
      completedAt: "2021-11-01T23:43:16.689Z",
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fbff99852745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "81a1fe5c-9b1f-4018-bea4-e36dc62d4bc7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249628",
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
      "2BB2B5D23321C22980A63EAC118882FDD38840B154000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q6FGBRidHBf6M9j902TFY4Rk2ytObHv4wKV9wNiW8%2FCywkYxUlP5FGFNK0UIVGfBJ8vO8gt7w7BhgzbIzUdqNCWTZ41iLhMYaSeR6a7FKXb9Zr9HR9Kc%2By7VEElWu1af"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:17 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fc02ea782749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e5aebcf8-f38b-4638-a4fd-a6ec62483347",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249627",
    "X-Trace",
    "2BC24FC28C068BA3A5C25B1D111ACC013EFD8A145E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TG6TQLARFog3oPpSGHPecnCJkWxhIThs7to6YD3Fvmr5MdMcRrOQRJdTOYW4VfRX509%2FL0%2FDmWSzsaM0sUZrX4vSU21PqejYXN7oWQDY8tEEHJNMN%2FKE2azXh%2FJ5jF2f"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:17 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fc053e94e08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e08c67f6-ff7f-4607-a7ca-a36eb88ff9e3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249626",
    "X-Trace",
    "2B75687CEF047B9655614509AF5FF6F948968A0EC0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gKyrGrNP%2Bt6oxg1iKX34q6eO9NlfwRZNFI%2BUODx4czckkBVgHqCYjeCZTCweIkegtlg59rP43fr7InlYgAkfUJ29FQqzZULxBl0zN%2FaltBrzrKlCkgNx%2FjS9zE46TvTP"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:17 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fc06f8a0e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c07f2908-054d-4537-8f49-d9e43658ba14",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249625",
    "X-Trace",
    "2B05E671E917FFF42D91A2AA3BAE229DE1364A4EDB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wv4b8QnKFOUiogcO45hMyGHdWzmK4Il%2FEAWJiZyAZWY8VfdE%2FJL%2BbFqjyTLSci812LumNsaiD1bx7A6SL0R9061CWqJHnXnggFUNNJPJg1O5BkkAKlcMk8B0LQ6OCi7C"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:18 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fc08d9c52755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1795182c-54d7-40ed-afe5-f0d2b11669f2",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249624",
    "X-Trace",
    "2B2B0C747673138DB06A669496113A8E4F46681953000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n369OHCmsB4IHJTk32L727d5nIbI%2F5vn%2FgB9bGKnw3H2VZZ9lluhRCiu6yYoglBKji%2BxZ4pCYqgHvXewZh%2BlIHlNzOcbU2FN8z0M5QM%2FOSQwgOlsKww8bDt18SqpfVPJ"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    200,
    {
      total: 4,
      results: [
        {
          id: "472848250",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848250",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848252",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848252",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848257",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848257",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848258",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848258",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fc0a6da8274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6654de58-534e-405d-a1de-e60ca3beff16",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249623",
      "X-Trace",
      "2BBA697BEAF2ADE7DFAAB1F414410E17448194EACF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UGrR3AT4QotvnlilkN2sul1T2Wx6VFSfozDUX8rVr8wzDDxpHmF80UaVuVHYk%2F06sKZSB6YTu4sGVv5WLW3vBbikPW8sicJoHYQYKAlSn2OwstFmWv28ggGN%2FGtwO6%2Fj"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Mon, 01 Nov 2021 23:43:18 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fc0cafd8e078-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6fb0a7ad-c620-4d52-8d37-14791c9c9215",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249622",
    "X-Trace",
    "2BFA92324F9109DA9A1A7AA76BAF6903AAF64E68F7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w7HjGBDDFeGa52PWDnj4WsHl%2F%2BGQ%2B2ELYuDI%2F7qeEFIygLxDXMBdqTAOTu2CdLQ9jJeOWHyNf%2BcdAuymD76hI0KsfmfI1OylIdcdPjv7s390kzPiVl9T1ZRnqI4qZ51Q"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "472848220",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848220",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848223",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848223",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848240",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848240",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848244",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848244",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848246",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848246",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fc0e3aece078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c76f80fa-eea9-47d9-81fb-fc9ba07e8448",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249621",
      "X-Trace",
      "2B83052C53F0ABA5682B566E9E1FC70B881BC9D44C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zXA%2FIjdFAm1XFJuTkpw992PA6MV7xapLntIYJ1%2BYJlTOPOkhf610O84pH88LUX4x3CgfVL1uZ9rI%2BhjNzOiyXBZVGXPQRFC8WmG3V5yiPHYqQUcMWvK%2FilpIMESZbPDq"}],"group":"cf-nel","max_age":604800}',
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
      total: 4,
      results: [
        {
          id: "472848212",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848212",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848215",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848215",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848224",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848224",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848243",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848243",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fc0fddcfe084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "33ec6ead-2d6b-44dc-9501-488793d56cb9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249620",
      "X-Trace",
      "2B24C99D173D280CFD678959F32E5C1DE2702C7A1D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uDG%2BOzi4RBMqMQa4CkTuO5sAHKWB%2FDQahw1FFj9LtMGgjvbPLX0EsSljzCuCRwYRr7Vsbb8vnMp2DD3YIFuV0nFxunPw%2FtTlO7qbR2b78udr3wz5qOlMVS1yWflf4wQj"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848222",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848222",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848229",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848229",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848231",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848231",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848232",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848232",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848233",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848233",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fc119c6c2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "57787c6d-fde5-4b3d-b14a-c9b2007ef430",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249619",
      "X-Trace",
      "2B88ED88C7B99DE3883D79D2B95AA0D7565C7AF3B0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J2I03DlZvxcwxo6sQTF8doQEk1XZ9bFCjjcDCzukRXGYwMZjYALO6ZMB%2Fh%2FmOww%2BUFsDzXcGWLnYqNMEUCDnb%2Bby81qdkFDMliYxfja5rGWdG0te8%2FpiBEojfC7GSPAw"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848209",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848209",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848225",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848225",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848228",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848228",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848230",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848230",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848237",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848237",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fc134c10cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "de91b7b5-a3fe-4abe-9f1a-688de3662a6d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249618",
      "X-Trace",
      "2B399B822B073F04848A8F006FF834EA54137B90F2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ROaJv3ed2Ee%2FMb8b6wmCZ%2B8VJ9RpZNWz0Sri%2Bv3GL5rdgj2dGU%2B6kKwArIO%2BI4RWBjCsRMizz73AtK59ezy2OBTO7bV5TzzG1sfh1jVr0sI%2BlQrx%2FZWLaPUMjhMfjOie"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848211",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848211",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848221",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848221",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848227",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848227",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848238",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848238",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848239",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848239",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:50 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcd10a3fe07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6eb50378-0cb7-4441-b249-dc5f51b0b93f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249617",
      "X-Trace",
      "2B243C908452E3F3C572585854FE89376C02BD0A45000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Tm0F1qblKXZM02vxN71BxKzJkA2SF5Te2%2FVLwakGCzMil9VJG2tSQJiA7wZq49aIGBgVD4NGLi8Do8j2VWd8Bo9tGYtQO%2FslV72n2OLDIaEo6Zvtu%2FS3%2FgdGWptXhlu5"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848210",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848210",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848226",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848226",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848236",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848236",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848241",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848241",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848242",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848242",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:50 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcd2ac1f275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "abe80ee4-ca58-4b35-9702-fe9a29a820d0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249616",
      "X-Trace",
      "2B76C8352A127F62AD42FBF37687895ED60E83CA8E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oLjaqgwA4RD%2Bz80A6q0j61BGPyt7oK9uJcnQUUktZIEvE4Ba8s8kDf3l1hkioPGpGTXteWCv1xmxa%2FXc0f8eNTXKRhAKqu0IW3arw%2BBWTew%2F90i%2B%2FvkoCnIOPZilsqmD"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848213",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848213",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848216",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848216",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848217",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848217",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848235",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848235",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848245",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848245",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:50 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcd52a06275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "532b2666-5397-4e33-a4bd-67556f4e7906",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249615",
      "X-Trace",
      "2B47C769AE1A45C2AB190163499DBA1C1291F3DF76000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ntl3DOrzrnYf1MmFxtvOAphEutsVmoGewVjwSYEgbaYDkeJm2szXNPi%2FTR5wFgmCX%2F429bEm%2FGi0gyJSjLlek5VWNXF%2FvlPdk%2FqOvA%2BSRWUaBll4i3KAS6mhGmH7TjFb"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848214",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848214",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848218",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848218",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848219",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848219",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848247",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848247",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848248",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848248",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcd6d9ae275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "984cd2e1-c682-459e-9621-8daf58f3e2f5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249614",
      "X-Trace",
      "2BAA0D25F791341EC8FF79EFB00F27B1B83DFBA763000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CjYy6jD9jhUEAVpi28ii2ERRqCKsWTXTT8YAD5A4ubYsInb6vWPRawm3wj%2BDgGeA0DgmSUB%2Fbl%2BlzMJ2rNW7e%2FpNE6HRnUv1BJRW06ftJsauSbnmoiSoXCqTDCIAR1DS"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848250",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848250",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848252",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848252",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848255",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848255",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848257",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848257",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848258",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848258",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcd91daf274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ce456238-bc7b-461a-9833-0653f09d8a10",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249613",
      "X-Trace",
      "2BA21CFF6A965EC7B4A85AF4E9D1BD4F31443C4CEA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6GB96Iva50CJkC%2FvX4sT4ye0r5b057L8manCveLnIcdStBazksp9Lj81ReTZwjYgfDeMgLHmNa6IDt76aKHLIG4%2BhcaBVyQ14B3kwucSQ8%2Fgk8CvLsbgRzew3tKWJ8BJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848249",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848249",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848251",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848251",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848253",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848253",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848254",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848254",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848256",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848256",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcdad8582745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "de061fae-dc21-4fe4-bf92-a66fa671dc2c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249612",
      "X-Trace",
      "2B742797FACAA2F507EEAC83403824E800282E3BBF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8LHWFjlLD9lgTi%2FmCHDsaMEcW9oMbwEnwo5uf20zts4OGe8X6uSJ2X88Y8aR7Wp%2B9HG9jl2wqkQJIe%2Fd0qwnIvaJ%2BGnhMu5bugLdCq8YBNsfEhJlcee1EFMCrKJX8vU8"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848220",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848220",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848223",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848223",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848240",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848240",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848244",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848244",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848246",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848246",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcdd5a70275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a5a2f3f1-0cfc-49b8-8827-200f50aed4eb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249611",
      "X-Trace",
      "2B64FABD54A5859943544094002284D4D052454550000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5qJkAIvZMO4QpzxXXW5ulfhKsOAnMAzR1%2BYreo6ct1EZhNJpa2qCzNCtlkRi07jP35i1aTByLALzdkiT8cQGf6iCMcMI0jYJxi%2FMFgIp0S7qZf9ltKBxIgaVtmElmKMn"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848212",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848212",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848215",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848215",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848224",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848224",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848234",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848234",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848243",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848243",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcdf0a17e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8705a591-844c-4af9-86d7-bc8434f5839e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249610",
      "X-Trace",
      "2B1103A17AC50A3DC0DCA3C1F970D0DFA64FEADC2B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AjtUSMDs15ZD8kkwLjCB663zfjah13MLu27aA1RM%2F6HHH9tM%2BS68kd9S1EIYtIzr%2BhktNV%2FjBc1qOcxONYhe21ziORGoTxljkaiQ12SCCJVFNE%2FXpN7Uua2kcx1Z80K8"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848222",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848222",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848229",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848229",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848231",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848231",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848232",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848232",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848233",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848233",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fce0ae0e2743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "348cd244-b0e7-4f81-8ffb-b901b1b55d05",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249609",
      "X-Trace",
      "2B95B0CA2008B6FF80B20F624BA05BB06558D93352000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ceMxcfX6luyoI8n8kbyCwMVM3uEH8lP20Yl0fVmHrg5Pio6BxEQUQdBs0cNrqI6ReekvPKgUnKAkf6swSx5j%2FPwz9Ef9l1XhCDrGqqHbWdhFZULKZLgt%2BdxdwiNfhGXL"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848209",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848209",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848225",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848225",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848228",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848228",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848230",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848230",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848237",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848237",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fce29833e078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c5630eef-3a29-4a02-a2b3-239a23b70c53",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249608",
      "X-Trace",
      "2B945DD2974AAF7CBE909C35C7208F246D65927CBC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0O2fbnXMfRGkCUcjTriXEZB3Qi7Phw7HJxuyWsePNbIGRFlt5lzVU1MaiiPz9NFw0eGagJyY4tBPkd8jgvrhpKnDPEI593GNELIMhVgdk2Y8ZLVQmgqUZtlZvIdtfuPu"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848211",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848211",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848221",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848221",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848227",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848227",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848238",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848238",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848239",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848239",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fce4595fe084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "104637a2-97dc-4303-935b-e52e22d15610",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249607",
      "X-Trace",
      "2B9503BE373013ECA2F2D1A839351CC44A623BBF49000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Fud%2Fh25hwOSP9JtAZ4oug2bfWWd1CjmO4t%2FBhTdHCecYPBcirX7ZfFNnw%2BxvNcRuJJnUKcovWrFQB4%2B6FQ6SDkLJNhfKUUg8gSg6%2BEsLK8e0jxTizsIJrOTF1wwFgLj6"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848210",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848210",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848226",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848226",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848236",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848236",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848241",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848241",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848242",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848242",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fce61cfacf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a04608d3-980b-4a15-afdf-7fc53c8d7899",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249606",
      "X-Trace",
      "2BA9CB39AF7CAC321FB41C4BC127FA5A67D5AD95EE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gvaY9Uqb2Xn4dJ0KCYfRBMdiY34fmNYbLhVYSH2D64OGrmrxy%2Bf%2B95KOIwHbEHXV%2F%2FDrBb%2FSih1s3p8oP2VIrXuvsa9R%2ByrnM%2F6so0uZt385s6X1YMQzNOra6hQx%2BxU8"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848213",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848213",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848216",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848216",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848217",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848217",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848235",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848235",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848245",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848245",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fce81caecf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7648f08d-d357-47b2-b803-2f9d559793bd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249605",
      "X-Trace",
      "2B834E3D15515DC4613A05C1CE4989ECEFA75FD16E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rE2fwMfNRY3l%2FvCYTYHrlAIV3AJilWSzNbKOHJLP4aZmMaeuuU0iHrTA5cWbcEbL4Y8UdPhyI3ubIEATwxGg66AAaSSOxz06kHtrjMUe2bhBZ%2FVujBv44BNpMnDeBHA1"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848214",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848214",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848218",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848218",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848219",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848219",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848247",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848247",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848248",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848248",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fce9cdd4e08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2f0b07ee-7cec-474d-9dd0-a9d01ea73933",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249604",
      "X-Trace",
      "2BC0E4B54085DA08E3E5BC73D1B40D0718B1C77929000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8JfRIgLBgwuyjVqfeuQKI4RNZUtoMo9CEn9eMbITCxNQXGoQ3qPy01ekWlh83ZBmjpCVeunq2LmWDVbGBDMoCfPg6qIqpJviJigE6uACqwZ2j7nT%2BqQou9oDj%2BPgSx1R"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848250",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848250",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848252",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848252",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848255",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848255",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848257",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848257",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848258",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848258",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcebdf5c274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f674dc8d-3a55-482c-bf64-e7937406e5ce",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249603",
      "X-Trace",
      "2BB53EA4C5BAAC2E903C2F99DF3C3DE78771CC47B8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BNWHegZ2sRvVClXTD1rr%2FXMpY4KTOc12MnLryqBdTkpBixWbIsi2V5GKZjZYT7A321opkvg79lmQBa4at2PzR8z15XOEUsZFfEqsIkTrs1I9J8Ww%2F%2FHZCeSjUi1s%2BFf0"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848249",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848249",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848251",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848251",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848253",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848253",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848254",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848254",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848256",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848256",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcedba84273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8db6521c-e732-458f-8a3d-956ec847c8ef",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249602",
      "X-Trace",
      "2BE484483578A8B3F3A8312BBFFAA909BAB097D712000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tissqE2QiSpsfyA7Td%2Bw6%2BPkyQ2eYaCdKGc1%2Fj7vok2BAhnl%2B48rDKwJCHTYHeEbbY1Z0b3nL2dRzdSmt4YUGsEJcGl%2FwmYEHODJ9rwUz1OBYJCY5lkMUaZIFuqcDyyS"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848220",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848220",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848223",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848223",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848240",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848240",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848244",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848244",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848246",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848246",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcef38832737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8bf52397-3690-473c-a962-5ebc127a4aeb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249601",
      "X-Trace",
      "2B64D9CD389EC62A1EF261F00AAC9663DE1D46CED7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e%2BwQ9He2JWwQAwRf0QVtJOR%2F3vA6XGl9udMj1ihE0WUJkztiASwGGH%2FI%2BQwkkMUJy%2FHWqL%2BFlkHf8IumNy2AhqvRoXNBtdP7RC%2Fj19gW55%2B%2FWE%2FuvjiO8wpOsEWQFwei"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848212",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848212",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848215",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848215",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848224",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848224",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848234",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848234",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848243",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848243",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcf28e78e092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f1978c9d-a581-4249-ab75-23c05e3c574d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249600",
      "X-Trace",
      "2B99B5F831A8199F0D3BA44D9E119437C9F10130FD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZjF4Ffqfeez4%2Fl%2BSNwg2bomvIRVtIT1CgpBbfBkYTcRfD%2FCrPa57aSX5MQ%2BhvlF9D5ITgGoz3lLvPZrEI6vdn167f5B6iqSi%2FI3UFxWRrXyz5W7XeiuobZ5crwDVaaek"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848222",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848222",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848229",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848229",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848231",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848231",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848232",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848232",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848233",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848233",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcf42a1a2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "178d9193-7c99-4de7-95c7-df01ea445dd2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249599",
      "X-Trace",
      "2BEEBFA615A728062D7E72A38CC55F7288646545B4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LgT%2Ftq1tyT%2FpAkTen8KHBcCtPf2CPoCW1LBA32uDnjGttfUw7XV64RAePUw19UCK5aqik4Siz0G1y32Ibg174Qd8RlC9pbreLwNboyw4nAar7NxUernRevIpuo7XrGoE"}],"group":"cf-nel","max_age":604800}',
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
          id: "472848209",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848209",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848225",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848225",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848228",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848228",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848230",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848230",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
        {
          id: "472848237",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-11-01T23:43:16.550Z",
            hs_lastmodifieddate: "2021-11-01T23:43:16.550Z",
            hs_object_id: "472848237",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-01T23:43:16.550Z",
          updatedAt: "2021-11-01T23:43:16.550Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fcf5b8962746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8a92438d-8188-4749-97d5-4b1667263551",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249598",
      "X-Trace",
      "2B048915F7D0AC21176AEA1319665E40A3593FF434000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KWTBGhHhFjobKSDlKPqUkzhosJySLW4WjCGmH5Mezw21%2B57WBzeIz93wfM5k5GJN4cFJW6yZ2nNfdRDTtXa6pnyz%2BYtisf4y0fZQXv80gimm6Kr%2BfMFKD5GiDl%2F6Fheq"}],"group":"cf-nel","max_age":604800}',
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
      { id: "472848211" },
      { id: "472848221" },
      { id: "472848227" },
      { id: "472848238" },
      { id: "472848239" },
      { id: "472848210" },
      { id: "472848226" },
      { id: "472848236" },
      { id: "472848241" },
      { id: "472848242" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Mon, 01 Nov 2021 23:43:56 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fcf82fe92755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "531da53e-874a-49ac-a70d-15d101c0f94f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249597",
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
    "2B3F88A5CE6DDA26FC0C2B2E1926C2CDE314891EB6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r6ieHOIfTwJunQUkus9DNOp3aFVwwgPahsBiYlG4TZkHayHiKvcaC88nuMc4cD%2FSbNQQAA82Qri1Lk9jbZlx0CPqPd7crowKs4pr7AnJZwRmVXPpqlWjPvr9%2B0roUGZy"}],"group":"cf-nel","max_age":604800}',
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
      { id: "472848213" },
      { id: "472848216" },
      { id: "472848217" },
      { id: "472848235" },
      { id: "472848245" },
      { id: "472848214" },
      { id: "472848218" },
      { id: "472848219" },
      { id: "472848247" },
      { id: "472848248" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Mon, 01 Nov 2021 23:43:56 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fcfa3e5f273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0a7fc252-0412-432f-8962-ce50daa50661",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249596",
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
    "2B4CC0702DDE5A0C135220453C7ACBD1339C6AD6F3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xzgWZlSusK%2B2UskXcnWiOGAYhtNWAPpbWfvHGKlrNcFK%2BlHmu2cEzBAYnU3rkeVy9NhWfTDw%2FKFAbw0usvrPPBFcS4M4aBNavWGoColbmRVlg9p723Ybn1qGY8gQamuK"}],"group":"cf-nel","max_age":604800}',
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
      { id: "472848250" },
      { id: "472848252" },
      { id: "472848255" },
      { id: "472848257" },
      { id: "472848258" },
      { id: "472848249" },
      { id: "472848251" },
      { id: "472848253" },
      { id: "472848254" },
      { id: "472848256" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Mon, 01 Nov 2021 23:43:56 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fcfbdda7e074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0fc7bf1d-49ef-4596-9b6c-96cc3cbeec1b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249595",
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
    "2BE9E060AAF10F928E1307D04B566C11D905B74B54000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xB%2BqRcpZhugCp%2BlJIsd9Lc%2BMmYhfsoFO1qcTiejh9Af58qmXb77iHnsNKZBsrMVl5XdStgme6M6vpaKomq44uZPacB96cm0CeZ%2FzSWAsslSUfiQave3YRzEBViS23EQO"}],"group":"cf-nel","max_age":604800}',
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
      { id: "472848220" },
      { id: "472848223" },
      { id: "472848240" },
      { id: "472848244" },
      { id: "472848246" },
      { id: "472848212" },
      { id: "472848215" },
      { id: "472848224" },
      { id: "472848234" },
      { id: "472848243" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Mon, 01 Nov 2021 23:43:57 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fcfd8b2a2749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c3a79860-985d-47c7-9671-09436bc64c89",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249594",
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
    "2B8DB299A51CA0333E2740030B763C9FAD922AA55E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wnwy5eEpXKcdu%2BzezZzeX282eaf5hAp4nT2Uz7xddeHm0Xcd5Ol0gWOpQFg8YkDQIZJSG7XU3vpxP2xIeqSbkhVY3Gf4qP3xyS8GY%2FcXblGf4Gi8MHkVis0mRycEoQfK"}],"group":"cf-nel","max_age":604800}',
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
      { id: "472848222" },
      { id: "472848229" },
      { id: "472848231" },
      { id: "472848232" },
      { id: "472848233" },
      { id: "472848209" },
      { id: "472848225" },
      { id: "472848228" },
      { id: "472848230" },
      { id: "472848237" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Mon, 01 Nov 2021 23:43:57 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fcff48ab273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "031a8d79-9480-4d93-8704-fc8ea57d9407",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249593",
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
    "2B9C2F72D46FB3BD8B67ABC495F2DDEB19CBCD005A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w8dgN3523rdj3Jg1YCAAW2W%2BCsbcYgn2klzrbq6D6NWq7hqJSG65GFm4cVxjijonY%2FjCvlzEleDfLCWlqySf7o4DdAmUUzqwUh4HVDiK%2BM%2B%2BvrghZ%2FvB%2FPwVy%2FwYXx3l"}],"group":"cf-nel","max_age":604800}',
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
          id: "472847769",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-01T23:39:52.726Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.175Z",
            hs_object_id: "472847769",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-01T23:39:52.726Z",
          updatedAt: "2021-11-01T23:42:40.175Z",
          archived: false,
        },
        {
          id: "472899637",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-01T23:42:06.359Z",
            hs_lastmodifieddate: "2021-11-01T23:42:38.291Z",
            hs_object_id: "472899637",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-01T23:42:06.359Z",
          updatedAt: "2021-11-01T23:42:38.291Z",
          archived: false,
        },
        {
          id: "472882582",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-11-01T23:42:40.713Z",
            hs_lastmodifieddate: "2021-11-01T23:42:40.713Z",
            hs_object_id: "472882582",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-11-01T23:42:40.713Z",
          updatedAt: "2021-11-01T23:42:40.713Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Mon, 01 Nov 2021 23:43:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a78fd017e9e273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "381e8353-ad7c-4135-bffb-46463118366a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249592",
      "X-Trace",
      "2B306C98CC775B2AC975402C2CE50590A4DA7AE835000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=f0FBC7q6szpaGpcTmSy44CVH%2BWqkjlfrMWsBSE6r71N70gvubAp21B0gXq%2F7FP3NPTXOYTJybt1loj0ip73tU0jDrwE9PRXmCF%2BZ9Px5hQLqZLecY%2F0BNbEqIQsp4iPz"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "472847769" }, { id: "472899637" }, { id: "472882582" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Mon, 01 Nov 2021 23:43:58 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fd04bed82743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d655ec52-7c45-4d99-a2ec-5ff696e60e9b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249591",
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
    "2BBAEF63379638EC82EAD21C151A6E58F5960DBEE7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kvgExJ%2Fvr455RgbWizSU0tZwJrxAakljP6sShSPybPfzQt8NXfMBrJtV63Xrx9xlelb%2BQK7qU0gkK3H%2FljN3M%2B8j6wr1phSlLaZlYRx9xJXPa2Q2%2Bn6HANT2VfvuVW%2By"}],"group":"cf-nel","max_age":604800}',
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
    "Mon, 01 Nov 2021 23:43:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a78fd063bcbcf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d14c7f98-bacd-4906-a8d0-1e7079f82c74",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249590",
    "X-Trace",
    "2B216AD7937602A82BC4B75FD38E085640BA44987C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Oh%2Fsk4ST350QhGk%2Bj3KIWedSGLQxJoclqDPIQUKB4ue9gIx28OuJ%2Bp8QyO1A%2BZN6tsnNvI%2FPSDJtO7ozOqxVVypaU7O%2BPdd68ejdGRb7OiLUcfkAivvp%2BoS%2FfgB6uA3M"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
