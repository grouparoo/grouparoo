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
    "Tue, 26 Oct 2021 14:10:20 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44447abdcee092-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "df8fbd1a-2d42-48b5-8a88-9cd382926e78",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249783",
    "X-Trace",
    "2BB8927CAA80EE621F7F7B7A21EB05B0C0D8953CDC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QBXHiWPvmVzieMBvYK%2FKdgmUDK1o89tXafKxbtJwVkXlSvxEOY5EIlri0KnZ%2FVL5%2B3qZxl7In33LOXvrScnz8HXilDKhyUUmKmRw6X3GoZSOWs4%2FL4CIyesw1aAEH%2BtV"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:10:20 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44447ccbdbcf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7b6f7b3f-2391-4428-a1e2-65bea021de28",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249782",
    "X-Trace",
    "2BD3D6E2DD96A13A8027535966F9909AD427CC3915000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wB0aVzZ6h%2BfeYvNjkt%2BuPlXHFWou8j3Y8voU2HfO5%2FJp7QPHD3I0HngUzQQUyerj%2FdTbelE6aTlg%2FyARkHo8RqbqGMjyILYiN4%2FJFH4%2F0kGQ8sH%2BkbM%2FGbspA3pEuYDx"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:10:20 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44447ead422749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8f117332-ae77-49e7-befd-55e37c8dccbf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249781",
    "X-Trace",
    "2BE388EF25F522543F7851D1CE372987641B108C8A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JEvN1En8sQzRkegjJMgbib1bw578%2Fx4yG7zo30cVAt7ic5LL7DUhyoSp8zvG1yb3XlotVg66U5n4BIUJfdmKK04X0%2FJxLDuXDvteHtCJCzXwbpMZ%2BPr1WkTiiTYC5Ja%2B"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:10:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4444802b5ee07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d4469d0b-1d61-44e1-ac35-7baa3ce86583",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249780",
    "X-Trace",
    "2B96FE799C109611D2BB8B238E8E34AF27027F2F4E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fV3jdsUTHitDm6l7fTctAIegcv8KkodZPrQo2U01FQDFUKatoXa%2BVYr2wEbOVgE29WpWKJck1XN4Qc6grqD1XDs6NM4JFQuTsmEQcDP23UOa2wIpmUaY%2FmX%2BnS3e8W%2F4"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:10:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4444819940275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f94b48ad-325a-4873-b23e-8c6b06fed6a6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249779",
    "X-Trace",
    "2BCAE55D363806AD5D8F9969A8F09B83491DA16434000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PmjMAV4pJ9QcGgwU6xuH7pQoPE4OD57vpXTnlJcnnKyD3dE9V%2FNCDcAnCFbHCYrnY%2FifnnTq1xaVuBuvtHEJ8sLHidSZyica4m4BrnpucPuF59PfeXxn4e5F1Mf0j6jC"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:10:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4444833f542749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2c39952b-7471-4577-856f-a4f5128e615a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249778",
    "X-Trace",
    "2BE0CA2F48777910D107E48210EAF7BE399A18E366000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9ssab92gruROzMTr6Kz0PhjvcNFWkwv6hHnDmzKdeqA3KqUBHBudg%2Fax%2BBUnSDhN%2FeFEo99ZLrfeYhQsdhUnu9w25%2FjaQEt3Akxqr8MX1P12WtCC%2B5F4C20m5bmUs7fW"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:10:21 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4444851c26e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0d3fc1fc-29b8-41cf-abe5-34e54d052757",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249777",
    "X-Trace",
    "2B124D3E7BCDFC7D631FE5CB4F4C948ABA860130C6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aTLEfKRkUiaeDX8RKEfn4KoNa3H%2FPi%2B5xDtV3zqE9nAXG3eAxnRoUvvgFPvqwP%2F7CSeynyt%2F94mNpiS3rMuJB1BwfNjRXa%2FB2dr3uW%2BiijDKR3KWpH1Infon54kWdsXz"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:21.930Z",
            hs_object_id: "451357841",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:21.930Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:10:21.930Z",
      completedAt: "2021-10-26T14:10:22.004Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4444869bb7cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e58a3895-5470-468f-ba21-00689839e23d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249776",
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
      "2B3E3CA70C95B97D956CF7D46A25705CD04FEC40D7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A47gC65w9yWj2OVQQGJDhyzmH8JaO6d%2FCN%2F2skiQXNLsDuCGAC89srFYK80Qy2aX6E%2Bwe0YIqE8xsix3ifcC6hym1TasdPNJNfhn1FbrO3MHrqwU8H6LCX0BrH%2BATWBN"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:10:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4444884b85274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8d178959-1e13-4fe8-93d5-3e6fe617840b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249775",
    "X-Trace",
    "2BFD11409898DAFDF70E0C2495574F908D457386FE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p9OPxlLcsWAn%2FqG6K%2BeFDKJiWqtJiExbbZ2CdCj74%2B89WVmyAoYKk58%2Bq7ziGB3oFWCXymkqj4RZAg3nzGblX1oi%2FrOFfux4vjBOXajJuyBEvbRC%2FIpPdtMlv9wFAinz"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:21.930Z",
            hs_object_id: "451357841",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:21.930Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44454529a1e078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5c332798-0cf4-4ad9-8d18-89d61d109f46",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249774",
      "X-Trace",
      "2B2EDC9D4AEE21187A1528DA9EBF7C848B37AE9772000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6vVPm6sbYtwtMp6YRV6kujlSaZzquuITuOCbABppZ5n9NaxG0RZ0zRGqF2KRFQwEWTbJjS6OGAov2eON6mL8TbvPzsvr6wjpKS5zAux5tvkC5vRdmXcC5PwAu1kNBpA0"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:21.930Z",
            hs_object_id: "451357841",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:21.930Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444546a80ccf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fc20b1b8-d089-4aaa-aeac-dbb2bd05c48a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249773",
      "X-Trace",
      "2B84F201EA82945381B9245ABC944B56719C9C1A68000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UJ2XzRg4I09cYSPBS5azQ3Lvh2U%2BARVMOhc6p3m4WDSqda3nbmOffJMjV7PYcQJD2gWEL6c1gnqBnf%2FRcLnVeKVYFn73bUfrUY03a79pXwQhx6Vzr26S5B5NlW3XvBIm"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:21.930Z",
            hs_object_id: "451357841",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:21.930Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4445483ce02743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "19379433-1f8e-4ef5-bf43-8680f5dcc8dd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249772",
      "X-Trace",
      "2B42940AC25020BCB90F6C225D8CB82A9A45284E04000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gHVunPohh%2F8r7hso4lUUpxG6mAmEHV%2Fb1PwLzQwql8ZeOeDRUwpLeC2ucngAc7Fi01vBS4sacnQ8U1OIKJ6N02ctI6u%2FOSQvycEDFXtu9NrJjZMOtxVernZqOmJUNaDF"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:21.930Z",
            hs_object_id: "451357841",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:21.930Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44454a1bf7275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d6967cf4-43cb-472a-98c9-39989a16c8a7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249771",
      "X-Trace",
      "2BB65E43516261D626B22BB0695A7E1834169FA2BE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ppE4r2XlWYFDJP3AXOKcBJcDA%2F9g%2BGGUcD8adBaEz8%2FZxeKmgxm2Yl28vCFli4vUSnzxv7NVBZO%2BE7uXbbDcpYlrvA5w07R12Bfik%2FHAY4cycHq%2Fp%2BpVnT3jBsv16uIl"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:10:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44454cda21e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "645ce132-640c-4d85-a287-3675a7a46ff1",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249770",
    "X-Trace",
    "2B519A157184195AE535AC7A03484D593998F842B1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E4R1l1CLOA22g3QnN5y43dpZrI3dD9vociT5HehLxARtI6gq4gDhOw5UBb8xOgyWuqc463Dgm7AHJAd02S5bWAaS9sW02x%2FkAOGDvtanne1bCGy9kQevI%2FnZ29s9at4f"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:21.930Z",
            hs_object_id: "451357841",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:21.930Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44454ecf642737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "896a5f03-5ff4-4e50-9b1d-a25b8ed4c3f8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249769",
      "X-Trace",
      "2B7DB8D3866324E74B65BDA3B71D65E329762935F0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tBK4z5KQ0oB%2BJ6G8sqM715z%2FXzgFMaSYNv%2F%2Bb5kEuX0hCieqVf6ZfClG5cSSMfxBVkdBPJddaArpVZGvqeyKLKE0cF1EX%2F4LxEWp7SURD7s%2BNdAn2aUAA7CRPbKKS24i"}],"group":"cf-nel","max_age":604800}',
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
        id: "451357841",
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.358Z",
            hs_object_id: "451357841",
            last_name: "Doe",
            number_field: "3039",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:54.358Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:10:54.350Z",
      completedAt: "2021-10-26T14:10:54.423Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4445512d6a2746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e87f56a1-619c-4699-8c5f-c8a820512be7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249768",
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
      "2B9467B49FB95CCB023484F8E97863C474BE47A4EE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QLnKMQ8RUNdkSeFH9PUFAlM2B7%2B2n7KDOsWh5AGXF%2FpSPLldAsDB5i3%2B9aakL%2FbH0L%2BNIQU43SFmwotkY7EJFZmRsucYYVQXst4hLMnHXz%2BXxamUuxrJ9vcwdY0qNZtR"}],"group":"cf-nel","max_age":604800}',
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
          id: "451301656",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.625Z",
            hs_object_id: "451301656",
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:10:54.625Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:10:54.625Z",
      completedAt: "2021-10-26T14:10:54.711Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444552ecd62755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "239e6c16-ba41-49ee-bf2b-ce2dfa6578b6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249767",
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
      "2B956E3A2F9FA2A9D840052582671B4DE91B46490C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H2qjTUWTcqb1Hc6d4w1n1p0gnGdxszgO3%2BJyIczUxPuu%2F5Ak9weoESo8XOecfx66A9hg5InqAJ48cRH%2BkDRxsgL%2Bh%2F6SICXkrgUeAXHp%2BnDnVO99UlrB%2FrevJSQyfJI%2B"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.358Z",
            hs_object_id: "451357841",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:54.358Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:10:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4445549d3f275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0e832968-8b28-4225-a426-6173929f7974",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249766",
      "X-Trace",
      "2B908FB964A7DC9E74DC5BA32FB8C9AF86FE6F5BA2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=napkZmVA4kj7S76EfoccP9QfLM69d9oudMiz30juUg9WRJ0YG9IOiT80N%2B5wyf98fRJPtxf3Y3ujDz7q7ZeHx9YTF1aWvDUXATcxIejslyPrZd6UCdUrMFCczsLTZT5R"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.358Z",
            hs_object_id: "451357841",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:54.358Z",
          archived: false,
        },
        {
          id: "451301656",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.625Z",
            hs_object_id: "451301656",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:10:54.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44461229abcf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b789a65b-b974-404f-a126-22832155f1e6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249765",
      "X-Trace",
      "2B35BEAD69F75498FA7471793D82E66AEBE6270F5C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BmqgdG9Zygtb0Ek8UNQa6D36V%2B04BRJ%2FJj51b1Wv%2FlJrxdrmHMCq0Wm69KkqBGE%2BpJTo0TKdYswpQNsrypuO%2FzUtsGC3M7DxquqYVsIUsK7umCyPH%2BZiiVohXAJfwclC"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.358Z",
            hs_object_id: "451357841",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:54.358Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444615bebae078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ab1f7ed7-dc85-435b-a7c0-bdd3e212ccbb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249764",
      "X-Trace",
      "2B022152AFB85E7A55CB2FEDF5B81DB4F7BDC29539000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BJHDBmfzSKCUURVD0e4E5KFkRrkc7NsFRgGMowf%2BVLn6D9l0hgk0sx6bga%2BPf%2Be2Owsgmqb2kNU3LyYv82HtKcszgXbmVos8y1fwhX03%2BZupQCQ7uos7Ww4X3uWmGgPW"}],"group":"cf-nel","max_age":604800}',
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
          id: "451301656",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.625Z",
            hs_object_id: "451301656",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:10:54.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446192ef8e080-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "20c7817a-8249-41eb-9f11-f6602948c326",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249763",
      "X-Trace",
      "2B17B090784D07F14246AA5B3D8CFCC0A3CF9F769C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZEdM8afJOdhPhDPmTI1P%2BaYF%2F2DHAxJe61Da%2Bu%2Fw6joFYF502HXQKRryKyRIZL2GsL0kq4BvIQPLnIod8QxNv%2FXmmjeaBBVDc8yVd9V7aTY4gt6tcu0ZBABHCJkF2Ia3"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.358Z",
            hs_object_id: "451357841",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:10:54.358Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44461b48cfcf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e8f84b24-ec94-4fcf-a4d3-1b518ba333b7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249762",
      "X-Trace",
      "2B6FBCDB40BCCD82371A3F21B36EC95F21E0B5DAD7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=f1GZlshcUDaIQFz%2BCbhNAXJAtMId9KxvoQ7C0pMTNvOVofboSLlIk7kvnF1X1vv%2BjZrB90lrgQStdLfVRmWBy3eo%2BPK8jhlTfGDiJOsv%2BefF7Xk65Yvt%2F0QgwzVcl4kO"}],"group":"cf-nel","max_age":604800}',
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
        id: "451357841",
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:27.065Z",
            hs_object_id: "451357841",
            last_name: "",
            number_field: "",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:27.065Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:11:27.058Z",
      completedAt: "2021-10-26T14:11:27.123Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44461d58de274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1014091c-1444-4431-bdd2-50f358336ba9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249761",
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
      "2B453F1EA1C7DD772C4DE7D2E57A0AD3ECC283A1C2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6VVOaLjU8DSAxCGb7W8wcS56audTe1CRbf62FDdr3x9CUMOE0y9zmP1GDdYY44voYaoifxqMIF%2FyUc9xesrBagIDcqOSwOqdZ6ZUC8stDMz4I3lLnwZrLR0sFOtJF6iR"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:27.065Z",
            hs_object_id: "451357841",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:27.065Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44461f4ee9e084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6a1e9c90-c364-492e-bd8f-81b3806044ba",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249760",
      "X-Trace",
      "2B0C64F2B3E7664F4654587A39E2F071E73133DF65000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NjteuN%2Bu9cdgH5PIDwvLroTdJWFYdFgAZSDprNWH00kS6Ysca11grtKo9quLhWT11HG9kHzlBKNmP%2FJochRlgDqCHwzXYQy7yJsyDKeoKg%2FEdM8qN2XLcvEz1WT1zY%2FY"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:27.065Z",
            hs_object_id: "451357841",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:27.065Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444620c8dbcf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "73b43be3-1080-49c3-831f-48cf06e6e5d1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249759",
      "X-Trace",
      "2BB17B41DD2682367D1431F0F1BC21BC6AB8294F2F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=33vbZCDYcAUNCRaCiMrq6ljsj9CnumPmVl7cSIKhHkiCjAkms15O%2BqbZmKE784RLH9xX4zyqu410AAIu92%2FNPse2cA1kCgAYx%2BhrIZxk6NNQqN%2F0De7xIGibDVvhGVdP"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:27.065Z",
            hs_object_id: "451357841",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:27.065Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446227f39cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "552ed9c7-9430-40ea-be40-9912c4b9483d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249758",
      "X-Trace",
      "2BCB0788E5E28FA4285A3ABA9B8D87E6B67BFF4F99000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Aygfr2brmTbV11dCrkN6bsQ6UGdLg8HFsSZN5Ych2IDn4xnUqVu9uXirgaXanE1j4LpcbJL5mqxBnT7dq9Am0KRZrifAXXP1eDMx2xrHdrZ%2B70PsZmNhqbiNdLpU9WjG"}],"group":"cf-nel","max_age":604800}',
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
          id: "451301656",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:10:54.625Z",
            hs_object_id: "451301656",
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:10:54.625Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446241ce02749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1aaf505b-8159-459c-84bf-dfdf2df3a867",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249757",
      "X-Trace",
      "2B4B7A0BC8D8E4BA65BE426236FA397AF06B14630A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5s2W6P%2BFLRy6gYGDihDIw2V3YSOvKNQSNBcHKvqNa3mP1mJLrHivRgt2oNJrbmTq2qPI7vj0OX1ngAqFDhKjRQ1uVYQXXIn197dBo%2ByTeI5BuEbl6vpb09mXEpP3bpy1"}],"group":"cf-nel","max_age":604800}',
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
        id: "451301656",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
        },
      },
      {
        id: "451357841",
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
          id: "451301656",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451301656",
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
        {
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451357841",
            last_name: "Test",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:11:28.430Z",
      completedAt: "2021-10-26T14:11:28.495Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444625d829e078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dcaea3ce-9283-4e5e-9396-110773b499fa",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249756",
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
      "2B223679F9779BE348EA20F6C98E39D3835AD9F040000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RXuKRuBitc94nC%2B4oZCAicW1S0HKesENN0QS%2FNfI210w9qJhKhm64aDsBPOlS3KjuLtjyOC9WPT5dM8PyzTTctHD3KzT7WyEJlAlVyuXzne57xd%2Bff9Btu7gRG1wVpMW"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444627db502746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "11d96390-6101-44ff-9c1a-13cb9893be7a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249755",
      "X-Trace",
      "2BF6D5ACE776618993DDB87202565345F9DDF0812D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V2JGj3LQF6G8zzX1%2BKFMkD%2FdRkrqXL9RFSLSfqCMw%2FVWRI2YeIu4B1lkYXVr%2FkiEFLDfSKiodN%2BQqXx6OzZ4ayF58OsKziabOOf7u5g0rfYVl4B0HQQg%2BEGqY7HXrNul"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:11:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44462a799dcf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "62832564-afb4-4a78-8cd8-0b5c056d2470",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249754",
    "X-Trace",
    "2BD13EEA645F87606A3124B5BEC82E2C86D0B0C60D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jC4ZnQ7SWwHV3sEc%2BiiVf%2B6jkrX3PE%2BaqVmWPlaV%2F10AWNSn5qMEarafMdo1dx23%2BLQlmrOqVcfaydPWJZHMFl7N26T6IW6nw8rJErIAzyJZ%2Fej9AYiM9WIhbiNsHH4R"}],"group":"cf-nel","max_age":604800}',
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
          id: "451301656",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451301656",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:11:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44462bec27274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d892ef9b-a904-4208-99a7-83ff1f6fc0c7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249753",
      "X-Trace",
      "2BB13C0D1C82298FE08E53AC5FC4C58B8B9C40E5A2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y4B4UMXhr%2B1wyEuWlfbN4w5l0u0fwo0j63uyt%2BA2E021LZ7gTz7qQxnpnx9rUTLhdVaoaAMHlfVT82oaMi1TF6cMJTaByV6Rj%2FIdaWVuYriqajVSisZWJFdRf0U3Thw1"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:11:59 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4446e96d2d2749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3f5fff3f-793e-4c3c-9cf4-c8f5c09aa9d6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249752",
    "X-Trace",
    "2B1B6FCA3C4FA47C57BDFBF9F54FE5857A542579F2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WkxjeLcOTSGVWYxMo9DESl7BpLdcJ3hHact0E3vGvo2Ha%2B0ufOFzXHElkDerzfkTNnws9ToApMJxIKP3EBqEGEa3%2FHYpgBrAqDd7UFEMQTMloGMHUSu5RSIWWWF9gZdM"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446eb0e962737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3b4163f1-6679-4824-b878-da91b7c49134",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249751",
      "X-Trace",
      "2BBEBDC5E6A93235B597F6E2E99B6BDE8FDE597ABB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=swcF%2B7qP3j7jcv7NJQ%2FhpTzWemrV5E7gOn7Fd55hgw8dIEptIsVWCC9xW3fX1MXGGz0tZjhxkbKNXdStUElZb2LE8ySl0VLruMo1UqOQ1oTmL0W%2BnW39X8hQQI3z2Cdz"}],"group":"cf-nel","max_age":604800}',
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
          id: "451301656",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451301656",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446ecbdd2cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4136f1bc-8535-4f59-ae18-207fd4f355b5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249750",
      "X-Trace",
      "2B72FBD3D967F8935A34FA47E5E198D61FA5E1469B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jTIOUmllpocRaTVzol0e0daRvalnd2vOzeNWPoR0QvoYx1rOn00%2FpPAYUhm5mSF3oaINi63m9NsJ1wcOceoKWg7U%2F41%2BSC0xYfiqx%2BuGIlWitcx%2BLNdmfGmLy8Ms%2FdW7"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
        {
          id: "451301656",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451301656",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446ee78ede08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "372749ff-8905-4d77-a894-f57054fc8ae5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249749",
      "X-Trace",
      "2BEBA401EDB0451B423EEDD473B1700CD42934A893000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7VJSCNN8ceiwQ3NQGQCtFzkQ5WFIi%2FBZCp0F8CXDq5U2tlEAvuBG4eNsdCNaWtOvbtlMFlIE6wqsbg025DhLzF1xORnu%2B6jtBBhUg9khQ21c%2FfRCiIcRBwo7d9%2FHEaWO"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451357841",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446f04fe8e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1a2093da-5eea-4806-b5cd-bdc6da89cbe8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249748",
      "X-Trace",
      "2B9D4A42FCFD7BAC4C03FDF7EF1B7046A9915D029F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bUKG0Bf1i%2B7pzYsYK%2B5oU3dDAK2ASyCUMaFp8uRNULmaNHafw6XE%2BkMOHbDXJ%2FS3z2KMRQSFPdmyrL%2BWNiixorAvfJpL0B34nZ8cCB8uvtfy42y5J06nOymD8wr0%2FSvl"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446f1ce182746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5ea8d150-d0f8-4f45-ab51-216475fc3936",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249747",
      "X-Trace",
      "2B3E8F8BCA61877F570B46FC769EEBD51D80C3561C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dPcFtdb7Y26MSORx5k7c%2BxlPInQRvtOCnGSvAYscPaqi5NTnCN09hgGatkmsvfQRucEDjydzOtV8sK5yDclBMExj3oQmQNvetmXp%2FugWsMAITlLUdaZoWNf%2BfVNTDhmB"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451357841",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446f33a21cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ecb524d9-8dc6-4271-8833-9b78e8684a43",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249746",
      "X-Trace",
      "2B8FBE6400E23A7377CAAA514D5AA4EE94065883FB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cElr2QaH3cz5gHYqBMxq%2BZNQhhdPnuGgCAf0JU81n%2F%2FPsgxdeahQN9CU5292Kml1XtaUk%2BrLLbWejz%2FEd%2FuDrfIlL1zyiuX8m7H18egisqcZoUHGNGGhM3z%2BoomD9rhV"}],"group":"cf-nel","max_age":604800}',
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
          id: "451301656",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:10:54.625Z",
            hs_lastmodifieddate: "2021-10-26T14:11:28.436Z",
            hs_object_id: "451301656",
          },
          createdAt: "2021-10-26T14:10:54.625Z",
          updatedAt: "2021-10-26T14:11:28.436Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446f50856e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b96ec1a9-dc6f-4099-9b09-63dee82cced4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249745",
      "X-Trace",
      "2B3173F4E2C097F34B10A2E4B4EE356FF6ADC1BB53000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=M%2BNG1IMXF5TjSwA4u0FMKlsKebPOzs2Y6V1NKNxEki84A1LqLNP9z9xejO4An3rX8hebZLh%2FzuKsHpJNUPjLMDJPZkKNLP2NOHpZSgXF3nm6XAqG8wZbx3b5Y2TKof0a"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "451301656" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 26 Oct 2021 14:12:01 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a4446f68aafcf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0397f692-7132-4d13-8a7e-aec0966e23a2",
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
    "2B335C3C253F962E6F964F8B7B4E934F62EB57223A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zwLIUnNkcm13iFcfF21OfAOqRd5XwZXlnyDrVt0%2BWbEEdvTzK%2Fpu6ROUKEUWuJOnuFMNNEr9rPyILX010lHy%2FIui06gSShwD6AcdapK4Qm7mqGoqu9r2knfzsBQpx8ZM"}],"group":"cf-nel","max_age":604800}',
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
        id: "451357841",
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:12:02.101Z",
            hs_object_id: "451357841",
            last_name: "Test",
            text_field: "back",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:12:02.101Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:12:02.073Z",
      completedAt: "2021-10-26T14:12:02.156Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446f86f5dcf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ab2f5c82-f245-449b-914e-72b4d345d28a",
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
      "2B02A93C083533E0B9039262F1F7774FCE10230AAB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pEKmiQhfk2QMdtrEIZFBCUcDeqs%2Bl2tFZZcuIgt3nlU2YD%2B4VCM15PJHY91HXjNgxEQig1PH7vo82K254gHpPTeXfBfc5slJ%2FUMtw%2Ba7INxUNB5vhGlL20tffn8IdAlv"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:12:02.101Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:12:02.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4446fa49fd2745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "80c07ca4-c7da-43e9-902f-a7583014576f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249742",
      "X-Trace",
      "2B2CA6F4D5E6D3E0FAD917532F2D315362B719731B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IcIN%2BfBV4wwVZf60HGP%2Bhhnx20jC9Ls%2FRB4AfV29LyfReLmraPBzL8nQi%2BwMKKjY78vkI5ENOQMEwBniKFKQMaLr84qbHIycB3hPpSUiyzbzBqf4cwPryjv4cTziQ3hD"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:12:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4446fbfea1e078-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7006ace8-a421-42db-b7ee-ee0971aa72c0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249741",
    "X-Trace",
    "2BDD92D3F0867441AAD3DDF84F5D33F6611989C722000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eeo5ffaffllFyLTlmlY%2F4obsUtf6bhiWEMmpGP%2FC23MIkkJJOqQsaxg2W5X7oGwbNOJ1RqL%2FpCe4B1mtGEi8KbT9Voq%2BEyfTxVIUtVApcGYPF6NyWFfAOa7U%2BC5wYvrN"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:12:03 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4446fdb8c1e084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "52102975-7b15-4d2f-aa6e-b1a6bea2c6fc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249740",
    "X-Trace",
    "2B4B3C99D778EA12A04FE80688C6EA366BD802CA8C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PFrCOa1c7elGqg6NVoe5toUXrNippXd%2BJiiUbxPUJ7qwuKKTMsX7T1Ruhy%2BjzeHJ1cMz%2B5RRQUrmzRVDmknd2qfU6Y8lT8PJh6uHuZpwwvDGxt7hLUFDM7tpXiUItY2%2B"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:12:33 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4447bc39d62743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "faeb097a-e00b-4091-aa98-d9f65054e763",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249739",
    "X-Trace",
    "2B4AD5B74208ADC880F6F6576F03394FCCA6BF35F1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iQUStlrmx%2FnR4LLcZ4muGnar9eO%2Bmwr1B18V0WB08UkPx4K9aKy9sJKiDzc2fJJGSZuOr20Sg%2BNu0VmugxRIfcG4r4x83MSghOv5UW8ZvCuPqZTevkj7PcW4Oab%2F2sPh"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:12:02.101Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:12:02.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4447bdf9bbe078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "69e82f61-3930-41a5-ac53-90cdae42b245",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249738",
      "X-Trace",
      "2B8C1600F24AA96A9DD1FCC907663BDD88C329B90E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z%2BfZos2cxw%2BQt5ndFoUwa%2FiTHrHtTYsctSbeFGsm0sxVVwnsLcw8q3F6dMybiN1Ku5psT4jmIvGDp%2B%2Fw6JtLjPx3HqYVLKwSayP2AUGVGvQn3bLFXXJtTxBC7K1JQE9x"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:12:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4447bfbe9ccf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ed4535a3-f442-4e48-b5e7-87b62dd1320c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249737",
    "X-Trace",
    "2B4E044B4668E5DD68FC13B4BAE0AF4079101B3F37000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2yQ0d7b7hA%2BUg6US%2BomkVyvvsYMbYCz4Vor1%2BmHbCdkNGl51Hd%2B%2Bg%2Fh358Lu3Bz4uDj6kxmQFRahYtXwqL70YbVbn3ZJ821hfRjiswSlRPebn%2B4cW%2FIyYmTYTNS5OOpn"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:12:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4447c17985cf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "895d8201-7590-40ed-b697-ad11b061ed08",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249736",
    "X-Trace",
    "2B2CB9D732AFFBCA4CF290D742BFFE90CE2D123CB8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wzTshzEV0I2KnzQxsbufIDkoEQk9yur5sN40lzYYR7h7fRrrUXa%2FqhGfiwWgz5ee2gBQeMv040Rwhx5dKnRMuYAn%2BqDxvgml77vouvuK9BOyOZsbe08AvR3UKK1Y9uDo"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:12:02.101Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:12:02.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4447c2dd1f274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f0319a73-b8fe-4635-a178-ae3ff209d8d4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249735",
      "X-Trace",
      "2BDFF0B10A46A3D6E21133146AFFD56667CB15C871000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a%2BLDGxyZfbS4f0WpywLfdWehBoSxf%2FmxAnRIF5kA4X%2BMqSlAEc00ZqaeuRtBOA7Hn70afbBuVMPLmPVJkEgKKTAHwF9pouuC2fmJfTL1yDXDZhnz3puhx2UELkKD08p0"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:12:34 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4447c45914cf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9151391a-6ade-45e9-99a0-89beea67cf47",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249734",
    "X-Trace",
    "2BF495ED24F1DFC5D6115BE9CE82983A9EAB668B61000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bez6UGQ1bBtMK42NMhaHU9T91kgHUuE7C2rt8t7HVR16b0h9NSunVweMxrWhSR%2BQ7MBLok3dAenblmVm1pT%2FquVOncsWH%2FrHWfq%2BKz4Cs3yNmte7velDbMhuaVBgKj0d"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:12:35 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4447c628492745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e0fece79-2cfd-42f1-af75-4efcf01110a9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249733",
    "X-Trace",
    "2BAC5CFB2AF74AD3553C9B51C4AC55EDAA8F6344A8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2gykw6XOm%2FtP2lJy%2FmFRX5NeNc2qHpn48N3iTBIPy7wmXPyu2f%2B09IFiqGcgGmH6LuPaN8Mm8Ey2fPPO4WIy%2BRFhz%2F7MsZOdDshr0tJjVSopXfeMnZTeCfxgFFMLDNjF"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:12:35.261Z",
            hs_object_id: "451000419",
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:12:35.261Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:12:35.260Z",
      completedAt: "2021-10-26T14:12:35.330Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:12:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4447c7ae08275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e37702d0-bf7d-4584-8649-5fd13f3947b2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249732",
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
      "2BF9D6459B0E69E9A7226F28B500FD2D091E607C2F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5aypSqcBHx0cqdHDRvlVMPFJSFi8pK%2Bb0TkhIx3RfRmQOx7UD0Xg1YFhXkhrCBcK8bbmCTCHYic59WPmemtSD65pEJPkGjejj3ojioGrI11nyXteXVP%2FhR2pdv9BpzVC"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:12:35 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4447c99ebbe092-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ca4724d9-0db8-48f9-b0bc-d8773cebe433",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249731",
    "X-Trace",
    "2BEF2491168F21069C2050A1E7E978EB4F692C679E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j5LME8Odt8nzmgjDUI7BgCIjbo7tB%2FBW1a6Xz2Ok4KemRJrlLW3U3Oi0oDoHtbDeXvi9yhVRQjxfXVLeBZ1d9BHTYnyLbEzR14FvsHdG0N4D7IOnND%2FQzFA3R17A%2BX9w"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:12:35.261Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:12:35.261Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444886f8ddcf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1cdc5179-f0ca-4c00-9a52-6a2138cc6d3a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249730",
      "X-Trace",
      "2BB0F8572E3EDB3C6BB189CDFA26CE41C2E7626E2A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=86XLHEZe4MoX7a6Ki1yaPCDvdw7x1VSFbz92SqXYWuYt6E%2BDHVtbAh5DidBL1m3JK29x4iOW%2BUvO1CREapXP6Z5YuAOGA11XnFVXI1Syaab%2FB8DgP2aLD3ah6sCoNmg4"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:12:35.261Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:12:35.261Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44488908b82737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3029c2ca-11fe-42da-bc15-99b463d3970c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249729",
      "X-Trace",
      "2B85F377A7B738A6AD2B43CDA03912CEB420ACA099000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Pcqe1k3%2FN8Gk39D%2F1RVYUUgsXenkVG0%2BydTX53qgt0tEk491kjoEgBzh%2B8uxtgRq8t7Tz5FT6syg2E3sOnpxbpdGAaP1wTsvK29Srb1jKa%2BCfSlL8TWeGm4ZzC44SVbY"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:12:35.261Z",
            hs_object_id: "451000419",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:12:35.261Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44488b0ca22737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7ffe931b-1e4e-40ef-baa7-2737fb71f674",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249728",
      "X-Trace",
      "2B8B2C6937550CB00BE94D854FA387FE163BF60300000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XUZ40t3RNk9EBQ6JRMSV%2BoK4XCKIrF3JBu%2FGrEg4VsAPX5HEBEuXkxs3cDFlVHAoMGDEa6B4hGEIwcVQZbLGff7oX9XWYylHF5S4bRc1dPUZaGFhezU9DVqu%2FRU8rtsX"}],"group":"cf-nel","max_age":604800}',
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
        id: "451000419",
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
          id: "451000419",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:13:07.356Z",
            hs_object_id: "451000419",
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:13:07.356Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:13:07.349Z",
      completedAt: "2021-10-26T14:13:07.394Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:07 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44488e9d32e08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b0c728e3-5360-44fa-ab82-15a70fd49500",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249727",
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
      "2B038566EB3B11DB10AA335D7F052D3245A9191421000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LT6NfBlrNz71IOjd1UdMghoZRoIAqS48DW%2FtRW7YZYi6yWO3RzHC9%2Banl07tl1D1EaGUJ6fwZ4JSqa0OzmWPkJAjMDhuAg1%2Btx1cCYkRhvWyL0j13Q3Ziobvuzoy8NSJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:13:07.356Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:13:07.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:07 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444891f8e0275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "603b5520-4e1f-44cc-bb5e-9bbd9453b9ea",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249726",
      "X-Trace",
      "2BD5C84963F6E43CB4C731C782E666408F32A85E96000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NCRCpNIqc0R8uFVlXdIlmZBsS8soWr9plKMyag61ZB6GuSyVb2r2nPAw4GKf1mUYxZTwjyLSbjTvuTBySL3Il09gA13N7apIIOA4%2BCCfHbvVNr6U9s1bhr7U2%2FkjVMHB"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:13:07.356Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:13:07.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4448941cffcf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "49d7ab41-c1b0-4641-a2ee-53c3b8f9a886",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249725",
      "X-Trace",
      "2B7EC97352D16CCEFDFA0352758A1895AC9E4CFDDC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nVSfoJYycsghkfmTtvlYsWlRFmQDYG6y%2BBixxhbqdLWB9RwOzgLeL2DxzaLYZsU5XEYv%2F6UGK8HXgRmd7xsfDGl3r2feVijf4So1e9gz91y63tUn3hw3e4zOlwRLVJbV"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:13:07.356Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:13:07.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44489628492746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "548cb4d7-1384-418e-82af-1a7ed8f168ba",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249724",
      "X-Trace",
      "2B742834F5E21D1FAFB46B769FCA6BFF3E5AA91CBE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iYBeZLa8OE%2BxIBayybhavwlmrhTippGlLcB8meHgAlVq%2B1vzXtaZNtZM4cKI1b3HS0NfmfX%2BascHbRxPumdvTYDzfGoMGv5yfSePtjR2rgxyAEDJ5%2BsYlZjqvDZaT%2Bc3"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:08 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a444898ac32cf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "92970a6f-523e-44f0-9d43-a17992d331d0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249723",
    "X-Trace",
    "2B59E2EB0DA3E419BDF92048A84BEEA079624C6910000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1%2FFmfTImpMV%2F6PJzXvQmUFd5hecVeSa4NiffO2jtScnRAfWB%2BymS3o0XMx%2BIUysLH4ELR8jsfK9i4pOmdnbcOExZEHFx74KHpPjAAPKRiLG1kGUmt3NAVgO0o3uR9XMQ"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:12:02.101Z",
            hs_object_id: "451357841",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:12:02.101Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444899f977cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bddab21a-3d5a-4042-b86b-abb67be3d4bd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249722",
      "X-Trace",
      "2BF73681836B1774827B5D39913E112830544841E4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lGK9fscIFvcViyHHhikVLdAtxJwC11gIyu5pHOxTyR03145lDZtU%2Bi1Ni%2FOp2K7EwA7CLMveTcnRP1yezOanrxXZ7glpgeVFvgFootj6Z%2BUAxSI5BQeTByzio4oXbxPT"}],"group":"cf-nel","max_age":604800}',
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
        id: "451357841",
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
          id: "451357841",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.163Z",
            hs_object_id: "451357841",
            last_name: "Test",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:13:09.163Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:13:09.157Z",
      completedAt: "2021-10-26T14:13:09.235Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44489b9d202743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "16eb3f08-79b3-427b-9a61-4af3e4fea207",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249721",
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
      "2B7A86A789C8F328EB745B27B578161CA40F1C037E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QKtGZdqDP4BdRqw5%2BgS42WV0%2FasiHItmM%2BanxOyCsjrbGNJuls9pFoahja8JD9Akw4YAiqSE%2BNYHPfqy%2BKpT7LlNfs9iemR99jTRU6ILSuSebuxzT%2BDrAm6FaFG%2B%2FS1K"}],"group":"cf-nel","max_age":604800}',
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
          id: "451297886",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-10-26T14:13:09.441Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.441Z",
            hs_object_id: "451297886",
            text_field: "some text",
          },
          createdAt: "2021-10-26T14:13:09.441Z",
          updatedAt: "2021-10-26T14:13:09.441Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:13:09.441Z",
      completedAt: "2021-10-26T14:13:09.540Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44489d7df7274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "44fc162e-34ba-4b17-aa6d-89c33c8c62de",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249720",
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
      "2B15C24BF090067C7808E4A3A0F55D25FA0D0A5A5E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H9t4nxL1b934qr0H57kM1F6AEUNNQh60TJ49QFoTceR%2Fh8HghppbcOi%2F6LaI6YGkxQkFKGL0MppQRdy3gmeQX8Uh3h%2BgE6kFiYNRwyQXKM3KXKo2m9%2BvApJ2h8Hd13Jb"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.163Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:13:09.163Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44489f5b4acf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "08f8df57-c7c6-498c-a79f-1054e718f467",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249719",
      "X-Trace",
      "2B9D66BED8EFD01ADD018AD8A15F36FC5E0C4FFCEB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BIMxLjJ2rqS4OJvLWrlSZ0zDCCiEshUSGpxnmngK4BF4%2B8Fw6eNI93w8F40EPK1oSpmGCFhF4KiyZzEJzyVDQjd%2Bchgm4zyaLEJLu5s%2BQHXhOS5vxvLFGgdNL%2B6%2FUcn2"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:13:07.356Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:13:07.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4448a0bed92743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f0f8d0d1-3c9f-4872-9d4f-61683d01e062",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249718",
      "X-Trace",
      "2BBFC3CD9C5F5E8BDFEC2CE7419C893C81A9316A70000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uzi0OfB5coUaX%2Fn48lnztJrpqMYAJaLeUMX9Q1h4DLOBV9z1IOYOtCYEfHjkODvrARyIIMvSa50loNkBEf%2FsrEIOzWifvY9X3R7q8zvfKG0nSfPCJVLfT2wucT3VzrxR"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4448a25911274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c4fa052b-c85f-4fb5-a393-ef1316c0a359",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249717",
    "X-Trace",
    "2B95645379994FE032756C71FBE9B91A5D67D0C5C8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uq0Ru9XEySblTxkuWdopWW6vZFUe03qBIWPl9KQWF%2FuRGos1ZhMXho4pMNOB0k1i8K6P%2BTUN4NeC%2FLvxpaNAMmhrTj75Vymm9GtclqHjFG7clK0utN4ZyJhzAIIyacxO"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.163Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:13:09.163Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44495f6d09275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "58d00fc1-169a-4eea-a4b4-3b3b9903cac5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249716",
      "X-Trace",
      "2B6F1FCBAB8BC46EFA54E1282B42EB4A0C3101AEA2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RL4QiVkV%2BcU3xwdPVeBN64iqIJNn9Ch9xKrMgdKllOnMm8jkbK3JCWcnV98hBQ9nee9rB9nOxRlfSsCmpZrldpcG%2BquGjNxc0QdKiFJkIUyqRqIb%2F5SxNginvMYyZ8zG"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:13:07.356Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:13:07.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444961784bcf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "418e3011-4112-4e94-8c7a-d5ddae909e0e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249715",
      "X-Trace",
      "2B5087A2937DF20DD108A3BE8C23A835040E51F0A1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mpV9wdothYS0Z6ftLCFMLP%2FUOyIwcfV3UpojQ%2BGiAudD8l6yhO7%2Fr069uL3BDDokb1nty0YQFkpig3aFL4HPvHA9O3oDLjZXeGSPhyiNOPIh4AkiVVz36KJY67Tspt8E"}],"group":"cf-nel","max_age":604800}',
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
          id: "451297886",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-10-26T14:13:09.441Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.441Z",
            hs_object_id: "451297886",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-10-26T14:13:09.441Z",
          updatedAt: "2021-10-26T14:13:09.441Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4449641dff274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c49fd498-3c9b-4c27-ab1a-d1b1fd3fd9ed",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249714",
      "X-Trace",
      "2B4FB52A0F1335BA8A2203A0E76FCB0CD4CC808F73000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Lk3j1LKSSHByvvqqOgVSps7fzkO9eUuBB%2F9BEBH0G0hVQosjHa9Rr8QTKSvX7ZuhnYiafI9KF7EepqoaMT2T0AhIJvxHLeebUd6rz4P7crwEgQUpCb%2BWV2qeZc3%2FD0ot"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.163Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:13:09.163Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444965a875cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "80db352d-f5ec-4ce6-b2ac-4dcfa0a16a10",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249713",
      "X-Trace",
      "2B5B52705F0C0BE7BAE81A47401659661A4D9D7947000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LZRei6CGZ63iBi3Xjhv9aUTx6BTcEN1fymQ9ZgD40ptSetZIvf0ZJZB6KF2dkfydBWbbYxdRPu5wTNJEYrKPSjoZUPtMFz6gLIiVh0HsI9NdkxJV59bq0n19ETkk9WND"}],"group":"cf-nel","max_age":604800}',
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
          id: "451000419",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:13:07.356Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:13:07.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444967ccb3e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1f0d6209-b279-4874-a0cf-54dfcf7e2dd4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249712",
      "X-Trace",
      "2B117C76715EA0AF25571A97FFDE0EEA8F70D20754000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CwYMcp%2F3UgyH8j38lHOhD7dO5qLFU%2Fp6u2ioNQNYW3mG2aKjzOQRDa6ySmrlum%2BEXlm2MIV1PLmcsSI7xGGbNY8FvJXN5nMs0txm1ApHAT0CfKCVh3vTrGK1PkNacTV7"}],"group":"cf-nel","max_age":604800}',
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
          id: "451297886",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-10-26T14:13:09.441Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.441Z",
            hs_object_id: "451297886",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-10-26T14:13:09.441Z",
          updatedAt: "2021-10-26T14:13:09.441Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4449695e29275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "28627178-9488-49bd-b3d9-5b3dadc834a5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249711",
      "X-Trace",
      "2B632E805D3215E2AF8D3E307376C38C825C847641000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qMlOWQIFXi9%2BOmoxDMI1oI9uTLe2Fez08hHWGsqOTBNdr4YLm7StiZqUtJrh7CkNYlsPe92URWgB3a6%2Bt8rc%2Flc7zESvSAe%2FIHR7%2BC8aa5j%2FiZ8QprzsubzIH5%2BhgeWQ"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:42 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44496cd889e074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f637abf5-6c9b-4652-9324-f1ad44ae9049",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249710",
    "X-Trace",
    "2B1C79116DA473B7C500F45FC6567078F9360C8F9B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5PD6MsQT6ILYfw0wjvktG0wNDRKJHyoDyiMzvbn1UOTSNtMwbZtdj9A8v8UhHPNRfrVmrk3yy1Q2X9cjKseLOUJUqTZIgWbcOtXWNPb4kj4Ktin7LWu01mjLR5Ij34hr"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:43 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44496f6c91274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6586f37d-bc2a-4833-8633-62cda0328fa6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249709",
    "X-Trace",
    "2B13BC53D20F91ADBF21C406BCA85FE1CADCDA7FE4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=feLm%2FQqz87Z4pQ6I5Bv64LdHvYUNnnRobfYSKbWO%2Bt%2FE%2F4DwiPlfTdfqIECrZUzIzX%2FrdNw5L7jziQMWM%2FM65fPLK7z%2BSaVa4yOJ1poZ2mW7OWdO7zwN99ZVHpTKQxnZ"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:43 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4449713bdae07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "cae791df-9abe-4534-8195-45a0afb0d8a7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249708",
    "X-Trace",
    "2B4CFA82634FCAF86EDE04D635BEB6B1C4B00A505D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=l%2BYWawOlTFCwrghNcjCPBmX4GtGNUSHGViE11Zpu7dssoaHkyt8dr22YI%2Fg6Q%2BI%2Bbp%2B9pw%2BXNtCcdKTqS4RtZm3GoSSk1lvaKNx9DMBnKZWxWix6z2DA%2BH3vXZxMRgF1"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:43 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4449733a71e078-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c8898bde-b783-422f-a36f-6d12a9263bc1",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249707",
    "X-Trace",
    "2BEACB6BD140B0A6C50E431AB7D56FA795F292E9B5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WBX09ziNUKoN8WIY7yOBGEjpqZpOkojjh1of6pdUon9%2FaM0lwQFviZGah4bmMIgc0q1GYS6mW4i5cad2d4CsBKae2ejD8aUkXb42kQ99dtb1b%2FUopWMsOawM6TOl4vf1"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4449754dc6e078-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "62498c35-fecf-4222-996e-d831f5f16062",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249706",
    "X-Trace",
    "2B135412C740E53BFEFBA919AA9D9CE00EC326119E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oiOlxOjB97trLJbqJuSJ2wlU5hll6IGTkcKR2UVV%2BVnjIrQA7dekE9%2Btx4RE2CtL9f%2BiOhvGKG71zBgAThgYvqoZdlY3glGoOctlmuBBCcj8S9A1ODIfjPvZW0jxFqVT"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4449771a9bcf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9ccce4e4-9030-40e3-97ec-ac6dddfebad0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249705",
    "X-Trace",
    "2B5885EC331E01187DF614E5827EF7A2044FF2A7C4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=i%2Bfp1Ezuay91%2B1mK7BNcMR0HfnTApus7vcKIg2mwQkXYZfwwhUQR5MC93ktIQlxNG9zJGGQPPJ1HVZIkWtKsaTvNohuJdwwIcj3yYggRKsXkHv%2B%2Fce0MHJAtifDmTRsV"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a444979e93a2746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "52853262-5b6e-4dd5-91a8-a19eadbda58c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249704",
    "X-Trace",
    "2BBE8A5A8053253455210CB771EB6B82B1052DD409000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BxmKz6s3kBuvyXBJOt0ZrGeJEX%2FdMuceHm%2BOMUTzy6K%2Ffk76DkvUAFUhp9j024QNQkjlUL%2BL6lXXP9fLYhyscUsqjEhgERhL93h9eFiUE6bHz%2F9L1L7VzZtadCXRhrYZ"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:45 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44497bde79cf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d9f639ca-93c6-4c06-b61a-8480d37783b9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249703",
    "X-Trace",
    "2B40D3D606EB0D34DA461AE3D669BD1B6308CD75C9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ESxRDblLuu5YJh5oELYNV5ZOiJRXEKvlhVaM8HMde7fd8JJWd5nBY2thvx4bJdc8%2BvSzPYvrEyWp4yUw1DOcxAMoZ3eTcyENUCRF3BhUe59yc6CKVuGVJZFOPcudT7xf"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:45 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44497d9e64e084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "402fb3ad-d089-409d-89a8-4e095236554f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249702",
    "X-Trace",
    "2BEDBAC104CB2086494CA341DC3F34102FA88FDADC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W7hxrnfwX%2Bgp%2B%2FcTpzridWpXv1jP8H3j%2FXAXlo1JA4pZ%2BfWifsPW0p6c80H4A%2Fh0S0pIM7DsjowXo20%2FfKbCMJ31Bbt6nH8b4TD14gJv9gdZ5BcA9WXY9RD%2Blo3tBg%2FO"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:45 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44497f9a782749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c37cea8e-2fd2-4c3b-b7ad-d2f9f3901da1",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249701",
    "X-Trace",
    "2BFFB8C780104071949CD8FF3D5E7FDDF0E6E9EEF0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XyM7w62cr4aALKyV8EKNWYIgrkjt0PGsJB621MmROtppntl97LzK5J0RWgOhh60b7GtccuKnTTeSav1Z4P%2Fiw%2FDu5tHBmMOxcOCBdsuwcDsHSyTFocXq9CCkMClJWTvK"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339152",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339152",
            last_name: "Last Name 46",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339158",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339158",
            last_name: "Last Name 45",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339173",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339173",
            last_name: "Last Name 24",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339162",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339162",
            last_name: "Last Name 25",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339143",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339143",
            last_name: "Last Name 18",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339146",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339146",
            last_name: "Last Name 35",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339140",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339140",
            last_name: "Last Name 27",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339133",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339133",
            last_name: "Last Name 20",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339134",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339134",
            last_name: "Last Name 30",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339178",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339178",
            last_name: "Last Name 28",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339159",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339159",
            last_name: "Last Name 6",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339141",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339141",
            last_name: "Last Name 16",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339169",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339169",
            last_name: "Last Name 13",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339144",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339144",
            last_name: "Last Name 47",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339156",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339156",
            last_name: "Last Name 39",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339149",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339149",
            last_name: "Last Name 32",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339176",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339176",
            last_name: "Last Name 21",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339154",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339154",
            last_name: "Last Name 40",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339175",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339175",
            last_name: "Last Name 14",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339138",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339138",
            last_name: "Last Name 17",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339171",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339171",
            last_name: "Last Name 7",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339170",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339170",
            last_name: "Last Name 23",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339165",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339165",
            last_name: "Last Name 48",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339129",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339129",
            last_name: "Last Name 11",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339163",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339163",
            last_name: "Last Name 42",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339166",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339166",
            last_name: "Last Name 33",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339164",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339164",
            last_name: "Last Name 43",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339155",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339155",
            last_name: "Last Name 38",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339168",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339168",
            last_name: "Last Name 1",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339172",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339172",
            last_name: "Last Name 8",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339151",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339151",
            last_name: "Last Name 31",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339136",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339136",
            last_name: "Last Name 3",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339161",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339161",
            last_name: "Last Name 15",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339137",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339137",
            last_name: "Last Name 12",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339174",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339174",
            last_name: "Last Name 29",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339139",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339139",
            last_name: "Last Name 2",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339150",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339150",
            last_name: "Last Name 36",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339153",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339153",
            last_name: "Last Name 37",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339142",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339142",
            last_name: "Last Name 19",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339130",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339130",
            last_name: "Last Name 5",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339167",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339167",
            last_name: "Last Name 26",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339135",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339135",
            last_name: "Last Name 10",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339148",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339148",
            last_name: "Last Name 41",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339157",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339157",
            last_name: "Last Name 49",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339131",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339131",
            last_name: "Last Name 9",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339177",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339177",
            last_name: "Last Name 22",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339132",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339132",
            last_name: "Last Name 4",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339147",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339147",
            last_name: "Last Name 44",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339160",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339160",
            last_name: "Last Name 0",
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339145",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339145",
            last_name: "Last Name 34",
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
      ],
      startedAt: "2021-10-26T14:13:45.954Z",
      completedAt: "2021-10-26T14:13:46.106Z",
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44498198c3e078-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c2f2cc44-91e2-419f-b256-ed3a20bcfb80",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249700",
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
      "2B49C7CFAC9A84AE62ACA0987088FA1F03593B589B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5hacsZVnXFfEhT9N69oJlJXD8pz%2BSc8ToPrFqKrdG2FDZ4b%2BJbtlGhWScjqdANYCq4%2BnWrP5o6chUdOi%2FxRWdfRV8N3Gixj%2FAxnY4n%2BRyBjikMHk8Q5v9gHvxetOqgk9"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a444983fc09274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1fbe0976-5731-45ff-8a53-5019fa6f0690",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249699",
    "X-Trace",
    "2B810D48BAD565559293A8ADBC0EA29740957CA12D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PaXL9Dto53sAi8WVfOyDQ9BfLFj6hCXngDsVqGXABwPsQF%2Fl1IwvgOTaXUvmMj0lov6s2%2FrKlDHkhc0EF%2FXHH0kbNDqyMvvgMxtVI838NYB%2FWYd%2FAFrT0ucOlmV%2BcPxH"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a444985cde32737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "04a6dca1-ec89-409d-ad84-e526ea9adde6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249698",
    "X-Trace",
    "2B97F10D3B549E9288A0D5AE14250295F740BCB43C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W9n4iZ4aZOK%2BD%2FeD%2FcT%2BCXA1QdMdqeK0%2FUC4JvW5z09G5e9QqAsP8fkZ4O04gzYa8ZKSKdVmTN1Nmb7RXO0LyOh2S5k3jgrPdQfXy3X16xMPcbyiJdsHdYnGlGFPdFhN"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a444987bd172745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b764733c-f1e7-44d7-8f2d-7533f9af18fd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249697",
    "X-Trace",
    "2BE94DEDB3B1CC4C81128AC8541FC39012215FF249000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NKyKbDInO9BxPRYE%2F%2FbwbcF%2BBYchLOvtRfOd44aFvqeWe5UZmLganpR7sHsytwtmt8IOg%2F3zukrUupo4MyWGn%2FEqyRz2XnPCER7eratxXMYoDkIxnXkY1KVBUqee%2Fuu%2F"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a4449899e3b2737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3fe46fb7-735b-4f1e-9325-d3c2ecd20620",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249696",
    "X-Trace",
    "2BBE9CA58A8AE3578812F24E07CD8C2387D4D6BD7F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3SBv6K1vXKToahJx8K61M7ZKaD6TB9LWpzqiaAEPX%2Fw1YlowoVm8o%2FD6cEbX%2FYO4WvmQ6Sf5XSGHzbVOKtBX%2BMceTnAN1E%2Bei7ZQU5Zef6xUEXdfnrKRGNPrf0063QIp"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44498b4f36e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d76ed500-1f89-42ff-80d3-8cff725459e0",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249695",
    "X-Trace",
    "2B569A5CD365344D2DC53868FC75EA06C3CE14D60F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x%2B4hKEBM%2BcX%2BDhjFeGmzAvceOoQU6HO%2BEcBWEPoEq5Ju22vqNvfBX3a6t1HCH0mGF4Y4cyS%2Fys2n%2B2e3D9I4Z%2B8TApqAY54%2FIALZWC3ODPo%2BLwndRQFZOCpIxm050f3M"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44498d0db82749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "db635940-50c3-488b-828c-da8b2104d0a6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249694",
    "X-Trace",
    "2B9FE147AA1683E75DC8ED747307D4375CDE11F7E5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jikGSnA0HxAlu0gsRa89Zs10gHkoIKJCLSq2sQVShQB6FYfIYNwTs4sa4DWDmnSX7wCE7LCQQwTdC8%2BHw3NPrEss%2FDUT3gDLmMiTrSkvilmFmpmQic%2BpHKp%2FsHidMZE2"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:13:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a44498ecf8b275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "567cc6d5-f7d0-4663-8da9-aa3f282efb71",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249693",
    "X-Trace",
    "2BFD70B0BF7AC6E61E9852A0ECE07FEE6434B62B1B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SD4bWojairTmHQzss9gzDUERFwn%2Fs3CtNupZN%2Bs2%2BVx9LcHhmrrzmmUYJydJtDAK8OfcbzMsOWkIMFiPdMizArQeliZVsxSN0Mqt88L7YPB0Iw7Kq%2Fwner%2FOtrpc8zdv"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "451339146",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339146",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339155",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339155",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a44499098822745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5c6a7a1e-36c8-4a61-8830-b8583134889e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249692",
      "X-Trace",
      "2B36C4E4F275D93C8E2541B1B88511B271DB0CED5C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mQHLwfEgR7Zhe7EUwYG6ZVhsXyxqNS8edLgvrYXJKNWHR5jLzRL0s5uEc4mzKkf5RbDj0i5yigmuBTl%2F2j7S0w5u5pUJuK8uuJA9pSQiQPJG9mL%2B43EnefY5lQTDKTsv"}],"group":"cf-nel","max_age":604800}',
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
      total: 1,
      results: [
        {
          id: "451339163",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339163",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a4449925bc22755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "90070321-8c78-41eb-b373-828c80146f66",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249691",
      "X-Trace",
      "2B52BDE5E8084D3D0642B1254824F23D04F5F2E0EE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r6sVdx41bzoSuMKVuzRPi1iGAOezp8dCUkIeHRpxGS9HVIQuxOEdKbdRErn3cSgU%2FYRrzcAUsOn31Nu52cgh%2BghraxvrXGvPy6A%2FrQY%2B9QfbbowNHJbAdmy1pBPrGMg%2B"}],"group":"cf-nel","max_age":604800}',
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
      total: 2,
      results: [
        {
          id: "451339158",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339158",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339144",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339144",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:13:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444993fbd0e084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8a94afce-0416-4199-9197-7858b03c87fd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249690",
      "X-Trace",
      "2B81845939D1A3ABE5CD26BAC08FB09E68BE74B2D3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iyuBUWSLq%2F2SNIZucJ2XRn8XUU45QbzDdeNTJDY6jmXjnAETllG5NCUakgg3%2F1vUN%2FWKVyTHgcLkJQT%2FxEfSPVzkdRyCnyT1mmO3gcVfPkyNY9Hhs%2By0UfpUQWiGyRXL"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339132",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339132",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339136",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339136",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339139",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339139",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339160",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339160",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339168",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339168",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:19 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a545ce3275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "059ead2a-edc7-478a-9bce-5e623fa3f95f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249689",
      "X-Trace",
      "2B02C94D8C089468A1668A3EA68BD2800F370DEFB5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YsI%2F87fgW7K3Ojv1OOXyfR2A7L9YRs%2B%2Flbw60N3bkGB1LZdc7jD9j%2Bsk7xx3WvKbL6UPbHw8K6AV5d3s%2BepBkC9AJMlJTCgiQ5F3Q9H29A93WDv7N1VTapcd5kmSJ%2BMA"}],"group":"cf-nel","max_age":604800}',
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
      total: 4,
      results: [
        {
          id: "451339130",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339130",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339131",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339131",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339171",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339171",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339172",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339172",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a562de7cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c491ce0b-8d05-43b3-8d5d-ed3926e43db7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249688",
      "X-Trace",
      "2B0F7D449B2D8A49BAD5F003AABD4360EE7E2AABCD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=86MloPvp%2BZfJr8mCWVavbWSZyOj7hVa3XS%2B4A2yILPD7szh3HlUooP2tVWmBBCzJlgCfm2xDlUqYjbwUoWqp4IZCCk8LRscuapBwrsuk7tMqWZNGdWKOGxY5J0eD1f%2Fd"}],"group":"cf-nel","max_age":604800}',
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
      total: 4,
      results: [
        {
          id: "451339129",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339129",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339135",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339135",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339137",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339137",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339175",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339175",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a57c8d5e080-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4e4ac144-1e83-4c71-8f48-f3aca994b17c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249687",
      "X-Trace",
      "2BDEA88D657C828881B5597646222989C455B1F17C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NRPjD%2F%2BA%2Buxjg0rORgPdnOt1k7l5eVH2HktF3wNHgkJ6IoItRM6PFRENjMK5pw9jhfxLXM63IDFe1IUBslWPxbzh40k2T8aMZkU6LSX%2B%2F6x7RnrTZ4x%2BykTA6gU7TuiW"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339138",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339138",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339141",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339141",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339142",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339142",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339143",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339143",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339161",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339161",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a599b45cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "80151194-6387-4469-b67d-39b1f1c0398b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249686",
      "X-Trace",
      "2BC4068749C8CF05575B6513535CDD3DB4E2CB6E96000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CyVbdje4U1FvaHB91%2FrVI3s3Y%2FlJkmG6kzFpcglHjuNNGahHUDY3txAxlIFgsFiaOQ4M%2Btg0fco2vzrZ%2BIhWzYB868tTkcsLQsNA16CGOMaGcTK3mwEMJGo1n7jsqclv"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339173",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339173",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339176",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339176",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339177",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339177",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339133",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339133",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339170",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339170",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a5b7e93274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "13483ac9-6bc8-4187-9ef0-d8279b3fb63f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249685",
      "X-Trace",
      "2BCD0596C11AE207D495C32A34BD8734B6AC85226A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Li6iML6T5y31U37Z23gp6OWUGWUfxNtSzhzyrnqf3RRvCky7OLly1Fa2S%2BG37bj8L2f6nWeZNa2bpZ%2Bl4ebmVmnzul0oAO3bRHO1otnItOzrVDOtCEL1MLjt3drCTDpR"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339174",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339174",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339178",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339178",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339140",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339140",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339162",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339162",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339167",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339167",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a5deb0ccf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f840f479-7a23-4ec0-8259-cce620960221",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249684",
      "X-Trace",
      "2B5030EB984C3834953AFECE81028FFA50F55C332B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AgbicSgtgMzDZgptbMgIDgQz1rA3h2TuIT0%2FvBS4G%2FUQmzcgtiyUcvZArTu79FiGABHV6pIewS88cGaTkWaWXd2UMcAFy5tCsW%2BzI%2BWxBXnHMmelqQoVlGi3OTYTf3XV"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339134",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339134",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339145",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339145",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339166",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339166",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339149",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339149",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339151",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339151",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a5fde6e2746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c460e41d-dfbc-43d9-a20a-bb97c3e01894",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249683",
      "X-Trace",
      "2B5DC22AE5623023447E70639BF688BC1AAEE94E96000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ltgd5d3zJ0jqcgqqo60YOvjQLORHPziKPms0yzGzBUYN3e1WLuyCK3aV5%2Bac5FKnchf7uIKiizylScbPsSH45zV6aoEdWOg%2BqolOf5QYN0jilbFuQREWjmdsuAY7luXq"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339146",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339146",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339150",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339150",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339153",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339153",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339155",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339155",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339156",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339156",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a61bd67e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a1c062bf-cdec-4928-ac3e-28dc9b172a0e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249682",
      "X-Trace",
      "2BAFFAC75D1A733162DA0FC23D7B721A0F2FCD6867000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZwnI4mIjcC%2Bvj0p2Za0s2Xu1f0bgu83wlTfPngauAF3i4tMICrklH0yLzD0cBGmMjNzEix4N7FC2tJYEozC2flj3TcZhhEzEPdGvS%2B6WFM0cSsgevLlnUchjC8zEaMli"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339154",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339154",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339147",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339147",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339148",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339148",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339163",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339163",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339164",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339164",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a635c762755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bc5cf4a8-42ba-40b8-ba1a-e1406af766c8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249681",
      "X-Trace",
      "2B3F9802E3BAA0D699C296F8ED9A2CCC471D37B55D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=z7CApe2sxEfTGt7YvpDMBDGBfttK%2FnLrHcN43l5%2BsqTtax87RQQ3wZ7tYyNBGnWdg0htm6H%2F%2BXf9ESmpOPoMh8zVVV%2FhtOm9vBkekbaQhrvBpWlXAqS3zPUvxbudpjf4"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339152",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339152",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339158",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339158",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339144",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339144",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339157",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339157",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339165",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339165",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444a65284de080-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "20fdd12b-e3af-4ebd-91b3-e76628aeb4d6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249680",
      "X-Trace",
      "2BB70E6A03AF758F0C01DBC60FB8743FE95C9EDCD1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RtWRv03xyem5O4cLD5E8kaCOo00XLuclfMZVndurExaG0a1gsVy7fmJ11ikmEOwvQnD1rDVfRQrkzoII105PSF7fa3fl3wS4Fy077eRRHIMR5HoYM5Xlw%2F0xCDHl%2BJKi"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339132",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339132",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339136",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339136",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339139",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339139",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339160",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339160",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339168",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339168",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b228b232743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4cb00b02-1b0c-4713-96c7-a5b251020db4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249679",
      "X-Trace",
      "2B9F84A8A4C0BCB0952752736E4A09BA48F3271F88000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XY5jnJlEj5QXn7jwe3YgZVcqbR1KQTFtAax8ofPVZFsqusV3g9pByYS1jpgTfgPfkc%2Bx6N58DsZGgk3Wo%2Fkxx2ArDe3DuorYwq92PBFa0128sEk%2BMXrC94oU9ubbY40H"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339130",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339130",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339131",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339131",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339159",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339159",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339171",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339171",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339172",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339172",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b261f3acf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4c1a9235-56b9-4bcf-938b-ddc001d26bb9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249678",
      "X-Trace",
      "2B2D246814834CCFCE66690F41E25912C30429376A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dHehJB7IU18%2FgEEMhEwOo4lUyoQsaJkJxtBoG8LvGvjcGOoNMDpec2o9Z%2FjtmdB0bTo30TqF%2B2vJvYcCtkzNb7cQDRaFlooUQWsWi7QGSAFiFrVrVMmvpO7W5TZKFQvf"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339129",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339129",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339135",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339135",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339137",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339137",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339169",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339169",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339175",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339175",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b286d74273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "435231ac-b5aa-4cbb-9fb9-6f3b9c0d663c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249677",
      "X-Trace",
      "2B4CD96A9827C31EC5B59E0F82C3F4F07A9B4FE2A7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=n7DoOsNDEFfHPkJrvCf8c%2BEMAhe9KrgnnZx5UXXwrVyg%2BuKip7A%2BAUKYgKzKAIdCFFmRQEKHL28OCJJ2QsRhPrPltkGAokDP9VSFqImcqCQWFW7V0nh%2BmoL9VDimZnJr"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339138",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339138",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339141",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339141",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339142",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339142",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339143",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339143",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339161",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339161",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b2aa8becf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f76b84d6-16e1-4e30-ae1e-d7a91d063d35",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249676",
      "X-Trace",
      "2B790D5B7645094367D3E4E0ADF2E89C6AB8BAF68B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zEo8pb7w5xR4VUMRPY5OipvWrQeI8Pk0CT8nRMXWiwsdWRHgjIOVH2ByQ%2F7icLMFkHg0y4Mgs4yk2ZY4BuIFA3q1%2F062F5HHNA%2FSG4jp1yS5rDVgB052YOflw7phmFNF"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339173",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339173",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339176",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339176",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339177",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339177",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339133",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339133",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339170",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339170",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b2c5ea02743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e4caf5f7-140a-4af8-8b0f-407cdb7eaa24",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249675",
      "X-Trace",
      "2BC40A526B131BF097317E3F094D05B3AFB2472E2F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F0paOEzWRc0O7P%2Fy8BeeoSGWXVfggDNXGGapjLpcyCVlfydyKknmSBlLIDejLPCU%2FYaoZ64n2NMvM5%2FR5C68tAL4MFOdD0cOXWh7Qo9ob5rVf5aLiAt%2FF8OCb6%2Bc9DhP"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339174",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339174",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339178",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339178",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339140",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339140",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339162",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339162",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339167",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339167",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b2e4892cf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "19ab5b5b-79a9-4341-b6d4-572943deff8b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249674",
      "X-Trace",
      "2B34D822812367F8DC97EBC33C81F8341B36B44F77000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mIvJ25XIw%2BcSy8sSI27Mk6SuJwzUDToUXKzOKzRZ38cYIJDfhCID59e19akKFNmmcm4TzQE1Aq0X1hqlO6yp%2BdY%2FkQRfq7ATbva6tVmZX%2Fim0fXxR2sXkDhumW1cLvXq"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339134",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339134",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339145",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339145",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339166",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339166",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339149",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339149",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339151",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339151",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:54 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b3008d5274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "43b04724-7e3a-4747-9048-6dafc83b6fea",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249673",
      "X-Trace",
      "2B3AFA7DBCBBA70ECBA80CF3E38E3840BD2CBCA99D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VtGTtegxz5ee48Py%2F%2BlIx0%2BnzMHmZDv7aex0MIoS%2BFVlr4sZCN7sF9wazUZtlWrtfLuQ6z%2F5zN6B10mxL8JAaCwXd8XjQQci1wrNxCld9cYD3BdqTdnZN4XEhpdzpf8%2B"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339146",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339146",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339150",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339150",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339153",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339153",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339155",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339155",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339156",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339156",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b31ce17cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "68f919c1-8cbc-49df-a5ca-922601c80dcb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249672",
      "X-Trace",
      "2B7A9CDF0E0FDF4B7AFEF4C93347855A3084418054000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wwWgch0EocT8TPuZxcc%2BCB3cS1T%2FhgPiJKjiUYAyURguDneIqWi2LoIZg2kuPqrVxuzLGLtYZS74wubE1QNNk%2F88V9uSH3gmVBw0sd%2Fw3GE%2FnNjpO54cKDilqkO3HqwQ"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339154",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339154",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339147",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339147",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339148",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339148",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339163",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339163",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339164",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339164",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b339ea7e080-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ce9e55b5-45b0-4a6f-a149-7af1086c67c9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249671",
      "X-Trace",
      "2B0B0CA639BAFCF11B0CD483A66245D307644CAE7C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gSFiCpimUb48%2F9vQLkNrB80yH3b16%2BmEfdRv1wr6ioEA0lD7EOTv5DfZPZgn%2FiUaCeznj3CR8E2Up5LdhSJv3yovDNAh%2FKluH919x5jhjNdD4eacSxZ1MKs6fTC%2FGMbO"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339152",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339152",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339158",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339158",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339144",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339144",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339157",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339157",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339165",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339165",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b35db9d274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6db71716-0da0-4031-ae32-d308213b52b1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249670",
      "X-Trace",
      "2B4012C6A464053D7CD6BA94BAAC7D5FEEC45CB6F0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oqajCFbv2oZGSRaCLNjKBWtXZygBSnO2oeg78tTV3wHP%2F9I%2BiWDUgQhOpdhEQbxUQwBTcHV0ZUuMlYkIoD0nhbGPevybk3sExa7k3ClfTM6M5WjnvQxsl5wmZVMX77yu"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339132",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339132",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339136",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339136",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339139",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339139",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339160",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339160",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339168",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339168",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b37df63275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2ae60ae4-f694-416e-8cea-ae1534214a49",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249669",
      "X-Trace",
      "2B1F62ECC66BA6FBA345F9679F31DB375BC6E30267000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MMQG%2F9KzW1pY8qYi4n7cEOzbrfEr7rJhZvr%2Fpbd%2Bhj%2FEedqvkkVyIlkA8dUc%2FFsxhOIrZArujJBsVb84aINAa%2BzJFbj2AiuDIJs%2BUd%2FgM%2BPnRQ8PI66%2FJw1JiNtu5bq6"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339130",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339130",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339131",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339131",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339159",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339159",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339171",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339171",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339172",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339172",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b397e7ee07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cf8e8301-6faf-4705-9b66-c8acc38b06fc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249668",
      "X-Trace",
      "2B2BE7C5B52F3FF772F34626FC9B0C6ACBB4B8B531000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=54cRTh2Y3aNqESvq8jyIJ3EX4DydNUw%2BAMFyboOZIhc5jZ2uBDiuFlMTqyftjoBFuGzwCQhIUOMFWxkyoXfXBy5oX9lnvgljMY1uBr3A13jKIX1K8W%2BqOTxf0Twe%2BU5P"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339129",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339129",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339135",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339135",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339137",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339137",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339169",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339169",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339175",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339175",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b3bef2b2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "584c1dce-494c-4c34-a910-8c8bc291889a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249667",
      "X-Trace",
      "2B097B9C004A0BF4BA14108B808E22EBD66948083C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ju3HNoUCMRZbWF%2FoqGdYnMOKeRLVJQKP24fRKC7xNgc%2BHwrd0nfIIsmqtH6wGAnUgLASUS5KAAIiUufwKeb85PnedZ1DadOzF1kM3qxJExzPwM10IgKXx%2BGJj2D0z8Vh"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339138",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339138",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339141",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339141",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339142",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339142",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339143",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339143",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339161",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339161",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b3dd9b42745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3eeb45f3-f1cf-4f46-95a2-cd8d2076aa23",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249666",
      "X-Trace",
      "2BEB32551B086325E379F93EC5AF65B27D670C3FE5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eHMJyETXBnDnfFKbEw%2FH9SDt7aJo9ZBj%2FPCamR9Tns8Zcrnhfn64f%2BG9zB3NbeHtazB6rzGm%2BQlIpbH4m%2FNcDwYtYaG7unMWcD%2Fl7iLSu%2Fxqz2r5giZ%2BCsVpFa6ttZYB"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339173",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339173",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339176",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339176",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339177",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339177",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339133",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339133",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339170",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339170",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b3fed3f2749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fefbf019-7ae3-4e58-9c4e-6211d4ff980b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249665",
      "X-Trace",
      "2B86677A61F9C896CC0C8096DF84638F3F81B39557000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P4Ad8NBBj1ySHAsuTrBC0RXD9Xh0orJvefmBozxCwvclH%2FgzXYqZOzZqXD0eR4cO%2FWGmOnVFpoFfhRuE7796NJHoL5dWQVYIU%2BpRrq8f2g0Ta2PCzKlzGUF5Vr37D4eL"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339174",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339174",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339178",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339178",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339140",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339140",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339162",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339162",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339167",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339167",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b418ec6cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "71efa7e8-6862-4afc-b06c-5170e38ac724",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249664",
      "X-Trace",
      "2B8BD88A54F9CEC209828F03F69F4EFB6F0309B255000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8eBEUrxXtkCaUdEkv3HKI4ffY9fnZQw721HBoI5QnVyQ2NFJMEikszU1yF%2FEHiwewSBUyfg15%2FRhvozUV8qpyvjZId7H9uAi29ZrQFF4gUfyEEQYdj4FZuqp3KOjMSat"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339134",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339134",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339145",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339145",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339166",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339166",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339149",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339149",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339151",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339151",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b436c18e092-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "51da9780-63f1-4273-ba6f-6234a3dbbe7f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249663",
      "X-Trace",
      "2BDA59BAE338321F453BD6DAB49B80BDA17E9E9E5E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ykzqDkNFWtLnWwx5NjBTxBn7adDcRovs3p36W1ZSxn1nr93gW9S73CGApU8WQud97Uv6gkD%2FoUnjgZaekAMfDYLYoa84Xnm3ThcFZQCRJ4RXgmVUtSKS2%2Be%2Bp%2FE8BpiB"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339146",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339146",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339150",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339150",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339153",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339153",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339155",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339155",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339156",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339156",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b459a8d275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8d86eeb8-4386-4efc-a89d-b66f3b2b7287",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249662",
      "X-Trace",
      "2BAE15B525CE0DDC0E3AA474333B3B74ACC981ACC8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=O%2BugkTiWKgrCdV7NscKs6m0WEn1evz2TRqOsDF5TCIKW6oHQ%2B1Nt67KwHO7P2S%2FZ0%2Fv83vvt00%2FgGdyC%2Bc148zXhmv%2F82Mz9egV1jV6Iu%2BI9DvcHvjFqZAuVygVPf9dH"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339154",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339154",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339147",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339147",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339148",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339148",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339163",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339163",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339164",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339164",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b4798262737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e725f9ab-6fb4-4615-9837-bed19c4c83ec",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249661",
      "X-Trace",
      "2B22407635D8A9A60D943078FC0E7F605708DE371A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OAf6HsahfwmWor0fNtXGL8OjtFmr%2BlnxXPov0%2BgoNM3GztX8Wu%2BfJXX7dZhuNWVgcH%2F5k5VCQ2Ycg2l9KZvyCDaixRzEd9T%2FMmRH7P3Z5tjOC5HAJldfwvtey9aV7HH7"}],"group":"cf-nel","max_age":604800}',
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
          id: "451339152",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339152",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339158",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-10-26T14:13:45.954Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.954Z",
            hs_object_id: "451339158",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.954Z",
          updatedAt: "2021-10-26T14:13:45.954Z",
          archived: false,
        },
        {
          id: "451339144",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339144",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339157",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339157",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
        {
          id: "451339165",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-10-26T14:13:45.955Z",
            hs_lastmodifieddate: "2021-10-26T14:13:45.955Z",
            hs_object_id: "451339165",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-10-26T14:13:45.955Z",
          updatedAt: "2021-10-26T14:13:45.955Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:14:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b497a6dcf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4e97a595-dff6-4edf-ac85-430a3ca990b7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249660",
      "X-Trace",
      "2B249C68CE906F8124674A453FD9661D81FF51D4FC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cCRzvRUZoWmEAfhRhMTnUfyv1Jrqhcp5AwNcMmhjZN%2BrsQiRJtWch9jU6JJAtxrBeEHBgUO%2FPtysC%2FBwQy5iqtu8IY0nAsVCIzWuwpX4iQt%2FSpzuIw%2Bsjog8hVnLS%2Fw8"}],"group":"cf-nel","max_age":604800}',
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
      { id: "451339132" },
      { id: "451339136" },
      { id: "451339139" },
      { id: "451339160" },
      { id: "451339168" },
      { id: "451339130" },
      { id: "451339131" },
      { id: "451339159" },
      { id: "451339171" },
      { id: "451339172" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 26 Oct 2021 14:14:59 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a444b4b1bf1275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "acd8f498-dc9c-4554-95df-c6bee43c584d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249659",
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
    "2BECF2A917422CF15F80207630A6FE47B8F20DADAA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PzmJBiOyqGR%2Ba8vpPNsdeGkQn2Zw%2B129M4mOG2pJu%2BgMDG6Rep1qDDAaalntMR2a4jla1yoMwp1zQahBfSbRAWJbg%2F1bd3MJCkyiMnsbYOa7D7cl9zFDd0lFuRNuk3DF"}],"group":"cf-nel","max_age":604800}',
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
      { id: "451339129" },
      { id: "451339135" },
      { id: "451339137" },
      { id: "451339169" },
      { id: "451339175" },
      { id: "451339138" },
      { id: "451339141" },
      { id: "451339142" },
      { id: "451339143" },
      { id: "451339161" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 26 Oct 2021 14:14:59 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a444b4cef82275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ab94452c-5db8-4b74-abb4-774e95a25f70",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249658",
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
    "2BDFC8F591F22865ACBDAD9157F2A4955017A8467B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J85qXmrprl69IFuScUZduWpQed4LxP8Q6KMxUmC4AYYHlkdxUYicKHer%2FazSrQl%2Fo8Isg2L%2FIkgz06wYbLPTA%2BymkARwrDIpg%2FghwEumCZEye%2B4ECdcWREvOoyMLfzwk"}],"group":"cf-nel","max_age":604800}',
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
      { id: "451339173" },
      { id: "451339176" },
      { id: "451339177" },
      { id: "451339133" },
      { id: "451339170" },
      { id: "451339174" },
      { id: "451339178" },
      { id: "451339140" },
      { id: "451339162" },
      { id: "451339167" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 26 Oct 2021 14:14:59 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a444b4e8d6ecf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "754047a7-cea5-48c0-a5e4-4857859b2455",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249657",
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
    "2BC773E39F1C647AD948FB6C4213F958A0B2C66A79000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SVjUDVIBCg8bnIlUqYD4nMfHgC5RfWP0XpNFLdKzkkzbDJuGonx9cLSLeePnlbNVIPrs8RMinrVuIjavWztfg81nXXJzdMbUv3DprnMPiSL5fwIvSiF4g5IVZXSo9w2v"}],"group":"cf-nel","max_age":604800}',
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
      { id: "451339134" },
      { id: "451339145" },
      { id: "451339166" },
      { id: "451339149" },
      { id: "451339151" },
      { id: "451339146" },
      { id: "451339150" },
      { id: "451339153" },
      { id: "451339155" },
      { id: "451339156" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 26 Oct 2021 14:15:00 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a444b5028932743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e61edfb0-8ec6-4180-8f9d-25d1a407a07b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249656",
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
    "2B6879DABB9F2EB216B5A5302CC045635E93B5EA62000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ClZjP%2B4JvvwXKODDeKQDBBQgmDEqcR3rFyLTYwqFZ2wnsj7fp9D%2FQeWWRMy%2BzXTkWSuVx2nuZVRJ2SbnJuLcNb7AjGir3%2F2BHgcjeHt7ag8ScPcZFMo0eNFC%2FWMo6ARP"}],"group":"cf-nel","max_age":604800}',
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
      { id: "451339154" },
      { id: "451339147" },
      { id: "451339148" },
      { id: "451339163" },
      { id: "451339164" },
      { id: "451339152" },
      { id: "451339158" },
      { id: "451339144" },
      { id: "451339157" },
      { id: "451339165" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 26 Oct 2021 14:15:00 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a444b51ff0ce078-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "aeacfdbb-ecb8-441e-809e-8402260014cd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249655",
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
    "2B2879FD94676D6A81DD4B11508F9B18C77E91BB54000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yw6u4Hi7mLuLuXTVFsIDg2AlTo%2FuB5nbLHcWd8x3bNhUlTtGJDxBoP%2FZ6iI5jSiAR0n%2BaQH%2FWSG1fTu7igrD4LtOrhYCvzFFB2fUG3hKcWvOueZCrTC7gWag0DLEJwCl"}],"group":"cf-nel","max_age":604800}',
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
          id: "451357841",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-10-26T14:10:21.930Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.163Z",
            hs_object_id: "451357841",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-10-26T14:10:21.930Z",
          updatedAt: "2021-10-26T14:13:09.163Z",
          archived: false,
        },
        {
          id: "451000419",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-10-26T14:12:35.261Z",
            hs_lastmodifieddate: "2021-10-26T14:13:07.356Z",
            hs_object_id: "451000419",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-10-26T14:12:35.261Z",
          updatedAt: "2021-10-26T14:13:07.356Z",
          archived: false,
        },
        {
          id: "451297886",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-10-26T14:13:09.441Z",
            hs_lastmodifieddate: "2021-10-26T14:13:09.441Z",
            hs_object_id: "451297886",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-10-26T14:13:09.441Z",
          updatedAt: "2021-10-26T14:13:09.441Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 26 Oct 2021 14:15:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a444b5438cf2743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ac61787a-7c26-4e3b-8441-c94f519c73ae",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249654",
      "X-Trace",
      "2BA1E2C1C5E555A9A0D6BD7A7243510D78D0D81B43000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rODwpaPKnQOaKIO1Uj2C%2FECoIoKeJeWjd%2FtlQgnOWOrhvZZMFrkLnntV88LamkFChD%2Bk8WV9MhKGor%2BrDcZknThxrCwg%2Bl%2F1ds9426Z5lpo9zQskJTd5DCHx%2B4JFunaj"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "451357841" }, { id: "451000419" }, { id: "451297886" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 26 Oct 2021 14:15:01 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a444b55ed2ae084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fc8971fb-3e3e-4199-a29e-6f0ce7fa10c6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249653",
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
    "2BA535F92CCAD81133CF79B6A02F2908919B4ADE9E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Cz5m7H2lYTbdYbs3mCw%2BTOJLVGdg%2FRxaaEcwU3ev4d7kPGK407e%2BBia7X5odVKd7JjCnHO4ZXQ3YSDR3vaMweK2q9QMsmat%2BnimSMrkKrOczXWOjdU5m0KPMFTC4GS90"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 26 Oct 2021 14:15:01 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a444b59bf0ccf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "048b33dc-3fd6-4c44-8477-6e4dc6cc3620",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249652",
    "X-Trace",
    "2BA599CA6DF5999A6566C5D63749E76F3D369F8A16000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ctUGeONvnSUDNdg8Mq1luaeK9d8Pre2JvEkMvThf7TiSdxDWLxaQXKS0jpFWv%2Bf7%2F1VSuEEvmZ3BR5622MPXfaSz3YKSLpUHSe15XZVkhroGFfJOzLGhC27E8iYruOgp"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
