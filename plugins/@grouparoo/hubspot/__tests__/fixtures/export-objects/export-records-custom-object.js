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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b5e93f0a8c0f-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "021e0752-dcca-4d0b-be77-d61219cffc73",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249998",
    "X-Trace",
    "2BDE08297DA896701C30E50AE08190B954BA26B4BF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BjF7WhJnDd1xkVBYJ3RmsftCzJ0%2BFrPWZ3GRjW1bi9NmDkPIJvnq7WQoTi8SkS2niNZ8pgGW%2B2gP2g1K2LxYJ3foOzNN88ePBAR8WQf29PqGZoZU8pANz%2FEh9tyYhUHv"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b5ea6891199d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "68118d76-1e1e-4e03-92f0-06995fd8a6cd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249997",
    "X-Trace",
    "2B6AA86ECBF7471A399122BD2ABA7B7053D5C35C16000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rjICERrAMm1IryXGAjJ4iqu%2BqdM8QQ2XgeOqblhjpdSPLFOXr0r0tdFNp4EqGTEe6kyTZgMWccyzXjwPCkVWWur69mLejsJIHoVm2U2bh466E4EZbV5XdvH2qQ9KPDXQ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b5eb9f343314-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0eda46c2-22c0-4bc0-8b3d-03840d232602",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249996",
    "X-Trace",
    "2BF354C56AEC2242317D41C55C15F158FA97CB8A5B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ERceGopY7S1o98ZxeOELAq9R3uN2C6pkBTNUyFAFUKtzS5iMHQKE0D7lSpBfyi768zXTPYZGEyZVqzPtBYPLMQ3mYSocX075EZloeRFfGq%2FW3k%2Fpk2V5s7eGT103XMsz"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:26 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b5ec9e0c17a5-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "908fbef9-625b-46bf-b7d5-c0a129100062",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249995",
    "X-Trace",
    "2B9E385633AF2B63E137EFBB8AD6676CB9D7899B30000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ixZXI8VBtQk9IWQkbFIAu4sJg4Mpx0vIHMdivO2gk5JDE5Iwrh86Nek5MQIWh0cMI3%2F2Ky5fFgS2E3fuN%2Bxm8VsdSJV%2B1vau0sT76Ny%2Bcw16lzhRGT2Sv%2FHO2iAy0JqI"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:27 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b5ed7cd81a2c-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4c9a3a18-a7f1-4a2e-896e-8eacd29500e8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249994",
    "X-Trace",
    "2B43454E71C32494F6240C4CD66B05F6D79481524D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iCE8DDHn9xXVFvVMfOGvoxt4gqZqfYSob323wqQzhg7xpfICJwILAEi2XRtnJ54S%2FmzXVUXC5u%2FkLpi61B5wSvViNeUu%2Bvp5odmpznJmmnikEIQLVdzwVZ4%2B3Iy%2BPdDz"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:27 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b5ee6e1f17b5-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ff273a42-af42-4492-b03c-025cd277d033",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249993",
    "X-Trace",
    "2B6A46F088F25FCBC90F78EAF6C225F8C96248C0A0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=D8TudRqetHJu%2BmUQnHw4joR2cKpON1uufryS9O0bwYgS8Z7T%2BgcwWIALIEZXJfxIJ%2FuitkqbjDhNbRwuCg7IpI3Gr7rIpwDNQ1HdVgiuMHe3kZeeGtpoPsT3XE02dfCJ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:27 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b5ef5fd08cdd-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8daf53b0-9fbb-476d-9ddc-a5a1ceecde5e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249992",
    "X-Trace",
    "2BFD61D1731995173FFE9EAEF42059CC0701E6B75A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mti1dlWCHX9kXkn0NvSgZsueKzdl8McwVrHitmKPKy8CloL1qXjHnfdVwISS%2FuxEJws1F6hHuit0BsdkyMzS1v34EvmX18PN12A%2FVvDNjpq6wyZ6ij9WzpIyTFl7edAc"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:27.424Z",
            hs_object_id: "860247707",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:27.424Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:19:27.424Z",
      completedAt: "2022-02-17T20:19:27.487Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b5f02ec2e76c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4bc5da90-a967-400c-9650-f01e7825793f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249991",
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
      "2B40BBA3686E5D2B424F650188182C85C4FC12FFA9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=08BpSbwZ%2B3X459WczX0xxknhTCJRqASIAdoTnUKaWMUi5QEHRcPLVexS1yb1rifg3O1PkWqaHZixIHqEjuNrLNuu5gjfuh%2Fb9wPEt7vADdxairHLs8yBhLtsvVWsxmbP"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:27 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b5f13a3a8cbd-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fa8d90c0-bfb8-436e-8650-f26a7d20819d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249990",
    "X-Trace",
    "2BDF19870507048DF3033AEF67CF61AB439A7A95F5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cz5YYYf2pcWqXqgdriFD4mpukshG3Tj1OVSivLTttnJYYToJewC6m0Lq8iYw2Zo%2FhDfz9mHi8q%2FI0S5JCpsYGZEDjflDAmTVt0%2FFNwtWkADX2fm%2FwpA3qYoNc%2B8xHywF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:27.424Z",
            hs_object_id: "860247707",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:27.424Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b6adbdeb1819-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2695d9ec-7140-4bd8-a979-dbc0717d439e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249989",
      "X-Trace",
      "2B868D02AE381F9712DC240575D9A4A36E06BC9485000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HkxSbsA78Tab7iY4ixeZB%2FAFdLF3cd5%2Fq5xAXHQEluuWKU4VZ%2BBo%2FRSkM6%2FcYj4DQEenUjO%2B9CWJVbFCf2AEchbqps75U5RHY%2FRR1JQrLkUXkNJ1fv%2BsGA5YljS2HObG"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:27.424Z",
            hs_object_id: "860247707",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:27.424Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b6aefefb19fb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "22495d9c-95fd-4070-9047-a66c96805578",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249988",
      "X-Trace",
      "2BE8D577D5A02F47962080DCBA8DAA66A50DA0BCC2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=G%2FfYrxHqtxf6koP5c6STFgwiAPHyGkAy5i1xSEiTFOiEnjCLfShfJQvRilAzAUORV0Izjwe7BIPP%2BYwUnBQh0dlcm%2F4aCYXEM1CHqAuD%2FNysTLgInRHzP0S%2BVsX0B90L"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:27.424Z",
            hs_object_id: "860247707",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:27.424Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b6afe93d8c9b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cfc6c1ad-b84f-425a-8492-71c9b6c64a46",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249987",
      "X-Trace",
      "2B991D64C49CFF0E6BB737D2DF04E3A3FA53DD56BE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GW7tAb2IiTgt0CxTYxNL%2FDOY8eJoK32oJ3pvImdeeJqewLfp6b7B2yGU7TZIxABY%2BCDu0OOjfowdFpSrxBw4DZGLDxNYzk9nKVnhtqcVai5aBWTNLAVs5c%2BGedIrzoS1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:27.424Z",
            hs_object_id: "860247707",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:27.424Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b6b0d8788c99-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8ac1812a-b505-46c0-921b-e70c4f535c3e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249986",
      "X-Trace",
      "2B9E9A2020C70294664F614E4F6793433EB27388F2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0g8zhCB8TbWhIZzb9hnq0MDTnyi1NYESIjt7aFABG7yHF%2F2%2B7%2Fnpdg5nGepBln8nsw7ui0ffAukJSOMvpq1QF19FaGfm4UMm9j80gvfK0YqYe4mBuU%2FIFmOCFMwWUjTH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:19:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b6b20eae8c45-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "77d5d589-9aaf-4795-bfa6-c3f904811f13",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249985",
    "X-Trace",
    "2B03DA9A732C9820CE412DB63D06603792295E75D3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qvlDkPi3rSPzgg76Zq1ZPXJGx4E71iPWPmVF9d9Q7gyOKvOqOOwJHTfsNkckM8bePHOQDGt2UN%2BWQ%2B3%2FTvgZ24F3gGhTdZc9fkYeE5j85KWZQrRntz5ccROrl4Z0XoMO"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:27.424Z",
            hs_object_id: "860247707",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:27.424Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b6b2df2a176c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9ca43ee0-4eeb-4c4e-8cdf-d819a7f35d9a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249984",
      "X-Trace",
      "2BA68D6BA076755F45CE27312A4ABE5109891D8537000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wLBiq3C2Q02z4rVyzLeePsSkAhQOGB9cA0AyxtkwrKpgZI7fylPJjp8%2BdPpj0ZzZFxNwu%2BvaROx4wq3%2B9ACZA88zt6auIix1v6%2BcO4V3DvqTG2ZOU7hy7UkQmrGIps07"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860247707",
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.727Z",
            hs_object_id: "860247707",
            last_name: "Doe",
            number_field: "3039",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:58.727Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:19:58.721Z",
      completedAt: "2022-02-17T20:19:58.773Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b6b3be3d1821-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8702e0d9-0441-4d38-af22-d7ff909df1d9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249983",
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
      "2B0241B6A657359D1FF0DD70F1C4C0B5E0387D607E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3EMKGxZG1vD5ryOZHzYpHTDaBmvJJaxAP7ZWLGCGFftsqvizzjZuSByEMkd%2BnfaRjWnGEBiDQkUVAJ%2FEvqz%2BeNT2u34C2qAsGZ9OPOzjrcAWu0f1dFXB9aVNncBcpnlK"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859979604",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.959Z",
            hs_object_id: "859979604",
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:19:58.959Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:19:58.943Z",
      completedAt: "2022-02-17T20:19:59.023Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b6b4c9768c87-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "48d8ca68-95e9-4a39-8754-c12be425e73a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249982",
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
      "2BD1AC9A2F4480F3EEC78DF04747125B8980521AF0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ByOnTBtKHN6RZ8Ytc4ojoXNGeDKIVSHWG4WBeh%2BOS6SeljQEyBsZuiLw43htLfLw2kY5QMERUfjY1PtTPZvzy9zHWbz%2F6kmnFnv36iapgW1YEPmUupYDD7gdnZJrnIDN"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.727Z",
            hs_object_id: "860247707",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:58.727Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:19:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b6b64dac8c30-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "92f04bd3-ef13-4790-b338-2373f37a5ffa",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249981",
      "X-Trace",
      "2B382BBB9C98977B91037346A7B51083115D057D4C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=haBYkp6DECkYZ8AnkPXzuLcig2yO24MVgwSGyFqw%2FZf5kh52kUvW6gXpIfeVkrOYtCi7Wvi5TKgEwb7YQzpF9YVT%2Fev0DbBAifJVxrhp1xGw6weaqzVGX0ENMYTSDKtI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.727Z",
            hs_object_id: "860247707",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:58.727Z",
          archived: false,
        },
        {
          id: "859979604",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.959Z",
            hs_object_id: "859979604",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:19:58.959Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b772ccc71768-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "496b47f1-e950-4bd2-9fc2-c07265424084",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249980",
      "X-Trace",
      "2B59E7026F69B8A6F28AA0AADC91883B9E773EC474000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rh99Cl6ZQ2eUOjz55Ja1YqF1DfSfoUogfKZW6fR5J%2FOOfQWI4K%2Fnsmd8mPUTeXYvQSKvFX4qeIGwUly0X9%2B5QL9NHM6qapQf8zrGqP1BB8lxxBJvF2RU1trX4lLUkL7S"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.727Z",
            hs_object_id: "860247707",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:58.727Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b7743d708c15-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ea6fe57e-fbb2-425a-8210-2a60cb47b23c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249979",
      "X-Trace",
      "2B1224365E5D763F1D3563D331FC9CEAFF0D99A14F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lTEvyTYV3gNu4oQ47nVZi01%2Ftl%2FHBRaPGZSLapP%2B1fD0XmXml%2BDXmH6fLtfZvKMP1dW91MSqJ1B%2BIvhJ4%2FR3P9c7eIHh4LlpSOduugWFy03xjsRqObz06SFMIMzJYu%2Bc"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859979604",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.959Z",
            hs_object_id: "859979604",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:19:58.959Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b7751bca17ad-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f34e8952-da51-4995-9694-15f5b3639a3f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249978",
      "X-Trace",
      "2B2112DBF6A1A97164BB5FA094B93DF4EF077143B4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ND539dIvrQc3ESs4ms98cbXglOknbvRx1DJGMZHy2p3JpmFamPjLrCnnQMlQ%2BS6gtXHv5JeUmwHw5NUejEl%2Fpoq03zsXw694iX4i4AWCigSFfubYdt1UVHdJisMz0mQW"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.727Z",
            hs_object_id: "860247707",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:19:58.727Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b7763b8c8cd6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ce00581f-86ac-40e0-a2db-2f414482df76",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249977",
      "X-Trace",
      "2B610942E430BFF7C9DEEA62B501F17F3BDE47671D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gEfJ6J5iDi4luPugWXEOzqO8%2BU0nW81rttX4EqhXpZtq5cvA%2BgtPNS2WZXwhGI6iEyJrXuv%2BPixlt7FZbIAVh2A2sbVn0aPPE3fRPt0aJ%2Flug9zsC4hoabx0OHBLplAC"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860247707",
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.008Z",
            hs_object_id: "860247707",
            last_name: "",
            number_field: "",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.008Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:20:30.003Z",
      completedAt: "2022-02-17T20:20:30.045Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b7774d708ca8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b0248323-cbab-4669-bd04-75c8e5908a77",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249976",
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
      "2B04EF5967DB66BA12E43F3E530A477811426DD6A7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7UUDQt%2BeJpveuPHU3MFWJ%2FgbVYahpaoubF03IjxKaQ9fLHZ7uz2uydjbIk1u1Y2cY%2F7Y8TO8nXzhxEv9UPSNAner6WXZaDz%2B9tAz3nWvs0%2BkC%2BFdp6qtmuQMpgH0Q4u0"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.008Z",
            hs_object_id: "860247707",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.008Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b778285f17a5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "451267e3-abcd-4f89-a953-5762dadea031",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249975",
      "X-Trace",
      "2B6D92508DC8C84F34A062E24EC9095F5A75729DB0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dh8ijvF3yYrE8Z9lAkx880d9CzR5ZV%2FJmnIrfR2vqUOC842rFCHaEpvu5xPyb6W7Flg%2FeNM%2FZZXeyi9eJGe8Qj2ovlOkKp1cRfJBgnIM%2FI5QwGDuqDuRxnYYFnSEPdz7"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.008Z",
            hs_object_id: "860247707",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.008Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b779099b8c3f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2b196ac0-be81-48f8-8da5-d47e75acf8f8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249974",
      "X-Trace",
      "2BAB3F679F0F5E8A1F8A7271B692A29D805D005821000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e5u2FOtLjPWHNH%2B%2FLVPa35oH%2BQzjN3nSxl8a%2B8NAxi5nUccvHSjrO1AmkGMROgU2N8ELdNKccyHOJmodGaLPtbtJeRnGF56yAQhKLUYxPi6mTn7Qp6B%2F%2FJuMq6OwHrp9"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.008Z",
            hs_object_id: "860247707",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.008Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b779fba38c6f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "47c54d06-a6b9-4ba5-b1af-9fe055d2914c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249973",
      "X-Trace",
      "2B9A03C7FBA7327F5EC78569DCCA0F76FAD430ED47000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OcG8tHJq1V2gPnAzEBOjocr1xu2%2Fyk9cc%2Fxk0qWrF9fhXZkuNY2tweNHLtjllnwGy9gVtbgjCpv4fZDWYy7s%2FsK%2BQ%2BkVXCAE45uqcC9kg%2BvQhvFyaYkQgAATyowwznrF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859979604",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:19:58.959Z",
            hs_object_id: "859979604",
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:19:58.959Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b77aefc11768-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c398a76a-9a50-459f-877e-6723688dcb00",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249972",
      "X-Trace",
      "2BF16CC524F55EEC891CEE76B379D8266139AF8301000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dusaiQ57uqafQTabEEJ1KU%2BJDhD61uwhAQLTimBuBEtN74Y56yUX93Kh3hSsUVWus73o3V6QhCDz1leFd0xP%2BjByS4fzxJknLzleFjt3fEyiSxb8onRG4%2FAso%2BN068f6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "859979604",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
        },
      },
      {
        id: "860247707",
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
          id: "859979604",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "859979604",
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
        {
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "860247707",
            last_name: "Test",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:20:30.811Z",
      completedAt: "2022-02-17T20:20:30.878Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b77c3d851829-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b55a0573-b020-4de9-ac2b-c31df928969e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249971",
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
      "2B01FC79CDDBE1F43A08ECC355004F7872C53A669F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AM067Qi6kj5HiMVABIXbEbx5ymtguSszIqH2mc8LT2MZIWnezRpmUMYQ%2FWaaZX5atcU%2Fw75ifCToB%2FHlIo%2FOXiKq7qwRMDJDWqMzPLFbAOS7tSFD%2FvDHG7OOxK43qPm1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "aef131e2-8f21-4de8-8fdd-be8390cd979e",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b77d6c2319aa-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "aef131e2-8f21-4de8-8fdd-be8390cd979e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249970",
      "X-Trace",
      "2BBB8BCA11C3C7EBFFCCDC68106724AAFEF8CDAA14000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iiQFD%2FTbdkTf%2BaBdhu1%2FGnOwKl0a8fgWegaQbo6izR0R3w87fcepjF4IWdMcoT7pnTvCf6zTgFp0TfWqv0sxu7BAzxJ6uiAN5LGBL8HCWAUo1%2BAaxbAJZh0wCt3wPL%2B1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b7870f618c4d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ac7c6c0e-11ff-4608-9567-ca10fc61899b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249969",
      "X-Trace",
      "2BA2A75F68F062EB0D236CA1E7B05E459BD0AEC299000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ApTwXsxUqRaCFvp5Ni%2FC9cCqpqP4LViJw9J5Jxp3drqFJo5DHFo%2FS9%2FVSphlFIbigcvjL%2FrR4%2By6bhZkP74%2BCV%2FffTQNYUEpzlsArm1OkvzjA%2BV5glsRGvNQDaFxJIiA"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:20:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b787eceb17b5-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "66b2cdd7-7080-479f-8321-b270bc6dfe2f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249968",
    "X-Trace",
    "2BDFF43745F4694F8F185AFD6C0D785853B3375F3D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JcK69wifPb1CJbMaxNcrQKijiohLq1OJvi9Q7a7TPwrg5mgNfqCQ6FgxI4gVSnETEOaeaWFflwZhxxBoGnZWVgDEUUpEbfxjMwmiOx0f5esPTpJP%2FiQr7yQOWeKzWcE5"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859979604",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "859979604",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:20:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b788b9b41912-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4375f102-5b2c-425b-ba27-443a4c61b813",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249967",
      "X-Trace",
      "2BCB81E20F6B0F081E5B3BB417FC1748D2F1D98DF3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4bo%2B1bIl%2FT5yWhaw6VZdoQdIlwTontMgWWiZ3s9P2ves0OFJPun6n%2FvwlEB62mAprrPOusizX4cxN7Cq0bhcY1qfcWHFObEQ9SxanyiIB0XJ8j9gVJJcadNSup1Hyr2l"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b8451fe319df-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ea14d264-9167-4baf-b790-2b40fbb5dae5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249966",
    "X-Trace",
    "2B1845FB8471D7D5139444EB249307B72C7F4C2E44000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dqkjruzk%2F8RJePu1a6CFUascjARNDWq1QZuLtFnk5MtDDU5v5dzQxb48rsVLx3HPz77PfzK81AnK%2Blck5uhGh%2FhcoB4AcU4zfBGIIcc0hHvlbU4wwNhadrfgkQj%2Bk9KA"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b845fc918c6b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fc36fd89-15f8-4ccb-a086-5aca90598183",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249965",
      "X-Trace",
      "2BC54E8FEB7A8A2B406ED57D2DAB5AB82613F1CB34000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4L6bNQvWJ78C5uSOosA5R3HBNMpOu7wOwiWlrCyoR1NXs8a3tW3IPDlcT2zqMvpeLyRBYJg2jbZksHa7PzvpbdqMSkMYIOkktJCkoNZohiZPYG773xAbm98Wi8iA%2B3ES"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859979604",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "859979604",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b8470b983306-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "22d8b500-7fb7-4c9c-a398-db4ab422c6fd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249964",
      "X-Trace",
      "2B4C3F59D7EEBD155E53ABA6D9ADD1035D4A59BEB7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tLoO6TEWoU6i3EWDep2D3F7FU1vAoXVjXTVO0gLbnfQKUv%2BZg9Ngd%2FRwg9rGcqBZsaDEEAE%2Bz1j47htYriVL0b6Ks%2F%2BR1uvAg0zOg2VYxS1ecx5MnSj57SP79T1VUssL"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
        {
          id: "859979604",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "859979604",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b847ed14e84d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8e695172-a8a0-4457-8891-e07055a35798",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249963",
      "X-Trace",
      "2B8797F2B34D1BAB34F269E854A1F58595439BD4EF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ySw%2B0axhg5FYsioV45OZM8bA8ycji1y2M%2B8vmEZBnZOTwa1Rn1mJ4LCpchTaqCttn20Y5aF13qyaFkwOd%2BKr07WilMgDAtZ07BsPbVD1m1cgE4519kMHOOw1nw4ju%2FGU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "860247707",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b8491fd217ad-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1f159f51-0ae2-4ff6-8a97-be9c4f1ac638",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249962",
      "X-Trace",
      "2B5F34EA511D2337376FD92C75EA6A9B4F12D3DBF4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S2BJnIRcuKdubumdiOo9SrIUnjMdjjWmy%2FACHuKgLtnk%2FjIit5%2Faexk0OJ3gfPE1G%2BO65x%2BlAI%2FHDwdgNkkZf%2B%2F5WzyUkn2hSCAIBIcD47s4OgYdS2GOKIShwnR2hM9C"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "47fbe378-b973-4d39-b645-acdb1fa3939d",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b84a1db8e859-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "47fbe378-b973-4d39-b645-acdb1fa3939d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249961",
      "X-Trace",
      "2BAB53F5FD1EE9F23C7EFD2C19873FA13E4E0C54D1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4H5sSkpbdJbrwYvfgmkzLnt2sFeSOcdzPSbE7bt03%2FgaAFXc9H4jzXa4zBI96IVSLFtUIBMuW9a%2BRww9mJagWIX%2Bcy8%2Fa6kf4x2HNQGd3%2BmuhLg4Krh%2B%2FV%2FusV2itK%2FF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b8543a3532d3-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dc6b8708-cf6b-48dd-8a33-332c02e5efe1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249960",
      "X-Trace",
      "2B770A6CFC526DDB40760E8CC3E35D7DE9912B9D4E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Fg%2FTa7x31Iqt9kKMoJ%2B1besjom0QfOJhOM12eB31KlgRx2jZBKEb2UWVrGB7j%2B2jJuYUKS2ZDklslpzSMchY9ZFk7nldjOc%2Bb82G13sl0LRQCjw4qdCNvwtIEQy3ICSl"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "860247707",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b8553dd88cd6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ee27cd79-4ba9-463b-aa65-c9da48a7afb0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249959",
      "X-Trace",
      "2BA2C42D5EB5CC1016B09F3376BF0CE18D4B959A45000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dJar8lFbxt39txZUf55lL3%2FFmNW%2FfBbP1Frd3%2Bzf65ThmvkKrVGeMpO3%2BZxuLKO%2F%2BVswRARZ1m8q1ZOPwDazotUAWFZA24zaErA7nNgmYXEss4g3vht%2BrZToN5xsW4px"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859979604",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:19:58.959Z",
            hs_lastmodifieddate: "2022-02-17T20:20:30.827Z",
            hs_object_id: "859979604",
          },
          createdAt: "2022-02-17T20:19:58.959Z",
          updatedAt: "2022-02-17T20:20:30.827Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b8563bd88c0c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "59f22f58-3113-4054-9589-b4a30664a868",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249958",
      "X-Trace",
      "2B8CCBCD0E8B7FB017F797AECF68E3164A270D53D5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KomN2Cf0JnrNItxRBNcNcCqjgjiwp1TYT4qMBh9P359mOjAd7RbPZH4xjQSNr0OJvAPJxOpF2nKoPJ63Qz%2FvEq9Kv5WYLWwiAE%2Fy%2FZh0TgpjDt5luAnlEtfLEXdkNGL4"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [{ id: "859979604" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:21:05 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b8573a6a3300-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ff9ee1d0-8099-4245-97a5-bad70ef03336",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249957",
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
    "2BF2A0F68CA5CB642CCA92ACF08CD7C36CE5648550000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YLdvBu42U4MF4j4qwhw8hLQeEZzTr1lCNyxQOCIivP3NfN1yamB%2F75sLVuZOutsY1rosSZyKxhOGlPrraR2KKS3aczKQPj5%2BCctKP%2BhIHXGIPWzRv%2ByAP7JbL35SVJcl"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860247707",
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:21:05.991Z",
            hs_object_id: "860247707",
            last_name: "Test",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:21:05.991Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:21:05.986Z",
      completedAt: "2022-02-17T20:21:06.095Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b8582d09189d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "992e0f2d-4dc7-445a-9d13-a1e14015e3b5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249956",
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
      "2B8C9B05880AC444F8E5706900EE6EBB8BEB50F188000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XYdoKq16QeFSeWhitFHQSAa5zKnFFj7NJ4vwMj%2B8isMTkQfQwJAjrA3nixAm28f1FZDvIIhFVHy9sTsa%2FRL3cfMBMFGJspROirDnBVYYXrwJVK9RDV3UPK2hyjmPrAs1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:21:05.991Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:21:05.991Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b8597ce9e74c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dcaeafd8-6184-40f2-8f9a-1248ab51e6a1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249955",
      "X-Trace",
      "2B4D67F0BA75B501B2F4D91BE04816679E8E54BCF3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AZ1QjPsO%2FPbYu0HYa5fiKSrUmWWITwZWnTnhJH4%2FguTD9tzOGoI7xlz3Q%2FPMEUYs3zkFxhkFyiyutWVUqe9VvL2tAwzD21WDQLC8TUY1SqySoBmsCq%2FIdpbsiPSMXWs8"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:06 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b85a6ed08cec-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0e7dea2f-9bc4-4be1-9aa3-427b6d4c6f82",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249954",
    "X-Trace",
    "2BD1F50A6FF7FADFEB603ED4DADF9289989547C5BA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XaWd0XgI8WnPT73etRWtonjpWMvlXk8J%2FuCiK5r5rKi08twJjenNtRj2s7C6RnCMptGOaMZN4iqCTm5G%2F%2BxAlWV%2BvOmnWCw6nrJFTpqC0YcsBkyPCNuzAJaSN1X9asc%2F"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:06 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b85b2d038cdc-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "09619197-87e1-409e-a3f3-6cbd6c452478",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249953",
    "X-Trace",
    "2B6E2C73CC760C434640CBD9D21AD05DA9B043EBF6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pT7Ze6ruZ56WaSn53IXIEkIwJQf%2BPzSfq8Psb2DWrCRn4p88DJ2GCISIdiFSgAHIwnHO7lY1lQOFarG4Zl50TTQ4jawm82BTuR1L2qGw%2FyKINNljIm2lM%2BxVpbWg%2FAWF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b9178c021819-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "458fb8c7-aaeb-4861-ba3c-51df4197c73d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249952",
    "X-Trace",
    "2B5E8C95EAEBB69BB2A6A0BA00845B1B94A1DCDCF9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=80AMTxD%2Fpq4C67pfNFa7ayFjAvWdU5Q1VXofWo%2FMFl56fcYxJrhwBdUQ69GcErO6ysYc9LgC30uhiN%2FG9AMJSacBZRnQ4fJ1DnKnicU5YFLlu8H6UuQPtxg7tbJlkFdD"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:21:05.991Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:21:05.991Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9188dbef059-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5beb2e09-7248-47f9-9754-685b250dcf0a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249951",
      "X-Trace",
      "2BB9D0B0C18178B64E85A0B66A34C5FBF618290D21000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S8KNSOmCIedGNhCKwRQYOJSnlnuhBdUu7qPSTnH4S9os3kgF99VqOCQcSCBkHiD3BOPDhkubN%2BU6VQfe7tsTumDyAzjumvSSX56A1fa2QNTvoElyVSoJzIijYfi7geql"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b9198ff98c5d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "93575df4-544e-4ac3-b6bd-33eda072f1a5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249950",
    "X-Trace",
    "2B5EF7EAAA495B132BD296B2C0A5F2224B537F3574000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=H5XscsdldanITv4S5OvN6%2FmLAHyJVvMYR97NU9WQ%2F0137PCTopysBLPQrHsghBrYaGdftnSIwGeaBX3FWIQsPU4vV9jH4NxpJV2TpIryCAlphzx7j3PAEpH048uBhAne"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b91a7f2617e5-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "23a3e5f7-d5ce-41bc-be11-4dd2dcc5df9a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249949",
    "X-Trace",
    "2BB6DC20EAC7A09BC820B5446C7978EEAAD5D836B2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZW%2BJxYoiN0Rj87aNSxh716Il73HZcdohz4ayaD%2FxAJzCgXRSS42b6g%2BwTyXUuhbCMoevG3%2B%2Bl%2Fi5gMdg06v%2BvjUiMoGvsk2NIwhFIt7yps9QSDv3a571FMLQuq9iZFcc"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:21:05.991Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:21:05.991Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b91b5ea6333c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "03fffdb0-98eb-4a52-8eb4-3eae9f37edf1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249948",
      "X-Trace",
      "2BC9EB2E5A9004C214B36F9CCF0B4DA139977ED3CB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oxKRVtPGGxOnJBFPk4kjHw6yIrSBxB8EiuTBq6gbV05VwLOAA2byO5%2F%2B4haVG%2Bo2K5Y3V9bbvmEoFvQK%2FptAp6UXbNqRTjU%2BawWtBhVKG76x1zVml2MwfxwfQIDzfGGe"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b91c48cd1859-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "687b4856-5774-4c72-8078-3c2f183d9e08",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249947",
    "X-Trace",
    "2B1192B7818771304966D7CC3ABE1D5D126415400B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ulOII3swh2P%2BxygsTIYpj0EGhoUTRtOo3mjmnqM9bhQy312bL6jhZMM7BT4%2FTGCUfbuYXB2D18jgrZY%2BUkKt6wWSSptjIotppNSt3zxSqlWJXkoIddUFfN0ZYQ3ggCdu"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b91d2b7417f1-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b51d256a-89a2-473e-b6aa-5a2126a1b37f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249946",
    "X-Trace",
    "2BECC96693D1DF59CEC6DB164D60C4BD790E4F344F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pcwL8nJO7qMtJ5OLXhLoTZGy%2F4634gHfug8aTEzC58PMl2vaS%2Fv1oG3lpkWU1eq7X9GjNcy2ZMRcisobNoCa9c4ZmOw4peEj9X5SV2sB3OFQM2bhIsagxlnzQEF1SaL2"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:21:37.684Z",
            hs_object_id: "860274522",
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:21:37.684Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:21:37.684Z",
      completedAt: "2022-02-17T20:21:37.769Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b91e2ec932ee-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "07154d86-30f3-4e2c-920e-3f3ec1e388fa",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249945",
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
      "2B521B20C7303AD19CB77F52E8B60F41169A667490000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HEvlAMhbf5S1zKF1KsCxcdMVYK5p%2BUhPgghTRBFdZP5R%2BbtLVRjQl%2B9yUzXm38P4aJw%2Fm%2B4YwPN6KLNGCk105M5%2BBXz67863ml9zZV2cpNiF67l1wPcZS0gFIUYs01Rv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "3d78c0a4-b7a3-451e-bac1-56c28dc9f21e",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:21:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b91f8e4e1801-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3d78c0a4-b7a3-451e-bac1-56c28dc9f21e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249944",
      "X-Trace",
      "2B824FF376169471C5B83488FF1CD39263A3329D02000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rJSFMXvFAjWda49ql08lgc%2FJOnY49wcTzXBYGPB3%2Fg7rXhU0ldksrvHG4OZsu791c8r3JH7z%2B3A3%2Fh%2FYCdvKdWOQsSyoK8iSKVFeml%2FhzAVNAomANX3Pype0BRUPmsdM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:21:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b928ba8e0cbd-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "253976f0-233f-4a85-aa00-8f3d762a281b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249943",
    "X-Trace",
    "2BD34F74C6C515AAFE2F646C97B451B69BE569E1B8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3GXCBiRKDGqwgFcoo8%2B9m%2Fjskd0Z%2B78JxB2NYCYvM1ZzEh9NzL6MxP9QKWJjqLEBtB7InueDjWZT9XP72XYdg5F4a1zFGefI8Y%2FftZj8ky02rZHUH7aVXlaaXflgkMs3"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:21:37.684Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:21:37.684Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9e58f6fe720-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1c8fee31-f139-4e5d-9204-e24ab19a8d5c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249942",
      "X-Trace",
      "2B1CC201FCD9AA98EF27211FDD967C877968D6712E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QhD7HpCYJDJfuPaYxGkGzlQ2TM%2BPVbNWZGrA7llocdacPDAY6w%2BYjW9ANyFiB%2B9Z2ck6Q7lSB64Mj0TubRlpCvEJlUbztDS3yLf9JrqHF9%2BHOzMMOAGDPRBxYB%2FDK540"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:21:37.684Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:21:37.684Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9e689da1a1b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "428184af-7764-4f92-830e-148a544c15ea",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249941",
      "X-Trace",
      "2B624010BC93DE11F26C777C1C4B84338DF8F64EEA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=e9gTHhGTZBvlwjShLwAQh7s9W9l%2BqjOvF3ZOuBNF31QHwXZPVrilVuLNbcnpSfI90rBHbQG%2BDyj%2F7H0wqESeGHYO5XrVAWGTm%2B9csH%2BM0x%2BCSJjhOZGXNnzmst0%2BXwgm"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:21:37.684Z",
            hs_object_id: "860274522",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:21:37.684Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9e7df0c0ce9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c58afd8f-df4d-444c-b97b-b694252caa3b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249940",
      "X-Trace",
      "2B84A67C1ABF019C2103C558D341EA64DA6DBCB82E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5bGxW97X%2Bl5%2Ba%2FX7e8AF9BRXQ7ZrJisr5MQWb8Kqj2u4FH5HDZ2IaFOt5GQdLesartZMhkjM5qY5EMG0rOU2T0Z9w%2FimUORQ%2B1MNqkbahztX1ROhe3soj3A6p9150DY%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860274522",
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
          id: "860274522",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:22:10.109Z",
            hs_object_id: "860274522",
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:22:10.109Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:22:10.105Z",
      completedAt: "2022-02-17T20:22:10.167Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9e8acdd1a0f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "448082cb-ac19-4e1b-8ef7-c3d3966131b1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249939",
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
      "2BA76AD2AABEC2822A6456B86F4AEB65ADEB0EA128000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xIFs%2FaLlRsRzewhTD1%2FfBE9Lo5Ms0f%2Bar%2BO9cM%2FXBW%2FM0otgn7LErA3GgzSnc6yP7gO7DYTc%2BdtQZ3XN%2BurSiIHN0qu4R5OUOf8OeoQN%2BgJAct9%2FocKQfTDLKY1XlW1P"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:22:10.109Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:22:10.109Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9ea096378d0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "288019d4-97e5-40c0-80b2-413428414508",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249938",
      "X-Trace",
      "2B402AA44A12ED895EF667175D8AC9079873A35DEA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BEiQMwF0C2AwRaYBmi%2BkwUkd6X41%2B%2FO1XTm%2FJCL4cZux6U5JPQeYAqgwxoGU6Q42VNCwrDmPXZNDY13AMpQ8y9pty6Y72JcrzEw1At2vSRwRmqqNksbMUW1UhC92ss2T"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:22:10.109Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:22:10.109Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9eb0d358c39-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3fbabc50-a350-4b05-99ee-eda3f2ac8dbf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249937",
      "X-Trace",
      "2BF1CAB1F48813759B7ACC46CFDD661C89B1CAEF29000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PaX1JGA5HeeQDTClu%2BoZJ%2FF9OHpkRR8lCzl7Y6uHpgDGgGKf0Ui5ToQjCbqXOB0qSq%2BaCL03HXN7btC2zaGnzIuooqo9jh4TrkTQqsSgj9a%2Bjyb6WzBtJ1pPpRZG6ECc"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:22:10.109Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:22:10.109Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9ec7ca8182d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9c3845c8-2054-43ea-a7ac-79b537acd103",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249936",
      "X-Trace",
      "2BE11AC6F6BEF88F9F2018F0CF8D38909F950A2D46000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XiaFnZlHJn0BNttEJfayWY5EaPe6gPjCGSCSFqr3TLjHjwIDOIpaUwBoLChQ%2BBjVo%2F6dHnqoi69I21ZDS7Ppaw5ehLt4JxLUcWiMZfh3v5cvHph6V2JK43go0ZftPybO"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b9edeb3be740-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8c71b84c-4dd3-4081-b453-cf593d40ecb5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249935",
    "X-Trace",
    "2B78E53EE05AD34093B23091D4032BECBCE8BD9659000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nZ7ifemA69jLAEJHreIbydTsBUF4xU8VY5n07zQAyuDG3MoPDhWp2S67merjYuKOC7m2dReXPLspSNMpefwE7svylcj6ciYjxDr5JZObZQZt%2BQlob8s%2FCFoF%2BsLelBlx"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:21:05.991Z",
            hs_object_id: "860247707",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:21:05.991Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9eeceaf18b1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a09ed4c4-6267-47ac-8f2a-be5f0f76f24b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249934",
      "X-Trace",
      "2BCDA170EEF37D990B58C79A09896D8C3011A68F44000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hCZDZKSKFumHGIl2Q7c2R1o0VL5uQSKMVy5saH9CkTP%2Be3AS%2FfEMV9lIJglGjiemjzQjlKZL1IjWl7T5ET9NfEr4WCiUBcatnar%2FkmcX4rHjcdsBVf83cyMmB5bHJJ%2B5"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860247707",
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
          id: "860247707",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.251Z",
            hs_object_id: "860247707",
            last_name: "Test",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:22:11.251Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:22:11.245Z",
      completedAt: "2022-02-17T20:22:11.290Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9efed5419cf-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2bda7665-5939-421c-8c84-e8d03b6575c7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249933",
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
      "2BBFDE29AFBA85CC7135891BC4FC2437F952DC01BD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MXgHglaaxTJqRVgpdrVOQMecFtFH7QXkwgnoyHvZYV1eY1EmqzlGMSSaIqrhMKOQHKB8hwLTrTSOrc1zVMac1Bqt7ON6UENgxGfWHobCSqvF24Zr8ai0HdjBbXcSWTKr"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859992456",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-17T20:22:11.425Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.425Z",
            hs_object_id: "859992456",
            text_field: "some text",
          },
          createdAt: "2022-02-17T20:22:11.425Z",
          updatedAt: "2022-02-17T20:22:11.425Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:22:11.425Z",
      completedAt: "2022-02-17T20:22:11.490Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9f0e9e578d0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "82557893-10ef-4d7d-b62e-03a8765e5ea1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249932",
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
      "2B97E8A5A55427A11F3688FF1492E2B3EE1765553F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3t1HPhMyM8WL4gAOmjmIgGu6tBGXIi3Bafw%2F4RyyjjYwNUW9uIRlJgc1DPPRkqAGbhsdAsJ2zxUdVSv3DkbgLsQBt7sAiiM4ZT5TtTe4weFJb1eUmnkAQbs2wrmGKH71"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.251Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:22:11.251Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9f23c761774-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "20d7a139-0e81-4e01-8f14-03a7add067d3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249931",
      "X-Trace",
      "2B2A6D0F4F7AB050EC8D3205A35695F5AA902EA6F3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L6RUA6X1Lt4U%2FEmnCWL30qlOLizdRL0jf6B89X9aR1RFdMvvLYHvY0Vx6q89WyCEiRd6rAJXgMyeCuhCcCGLMfjUcRb3ox%2FeyxBcgxFnYQGLlZR2EFhynJgJGOweFSny"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:22:10.109Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:22:10.109Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1b9f339c4184d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ed7537b2-630a-4631-ac51-1d06d59ec52e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249930",
      "X-Trace",
      "2B5376BECB58B2F89DE00D74CA4777A8D673B79F64000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WDdYkrg4XtiC39p%2FLWe1Zu5lyOti8QWErfx2zw4gI4rsOCr8XPB0NfyX5AKmul9y8MQkKxKUPlmsQK%2B%2FTMtNi4BvFFuqht53eyrf9hi6dwVIiJ2llhFjlDc%2BL60MPwJY"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1b9f419b5e6c0-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a50acaff-5009-44aa-b273-790c61b7399b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249929",
    "X-Trace",
    "2B88962EADD2FA387C0A4552B8FA15FBACF2DDB965000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xKNOtIbfZdgvyypuxD8fyuutxsXr%2B9DMA55VOuCgW3v%2B3KIdRkrE7uYBzyQAZ2Qdh%2FVk6KVDDzYDFbpF2LJZkDnED1uRHbWy1YSl50IXsqluyF9WDMN6IXu1b6yRGRE7"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.251Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:22:11.251Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bab0a8688cab-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a6199968-73d8-4373-ade5-d1546017ce13",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249928",
      "X-Trace",
      "2B9CE04A80692D83192E72362EC0192E928F4CA390000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ybQgDypO45hWlhycQLj8LEbXgHPd0ZGKp15xjt2QGpPDuSMuNjXucKw0t%2Fd14zCYpswpjudF8riaOARAIt%2FAES20jhnclbQjT%2BsGaX28t8Ct%2F4cjTIJHSbaN36zGb0A6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:22:10.109Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:22:10.109Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bab16ea21851-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6acb1540-5b9a-4482-8218-edca0c2d56a1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249927",
      "X-Trace",
      "2B410E33E923663B2B762707176BB2B7396E53D46C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mpXGU2v9a6I2rdosZBxTnblcgSldh4As4K3nQm7PyA948ayFovS6p8m3pUTRe4YhbQMuNME%2FKbvHFumQJN8JUX9O82zfnvGCsYQViRj8Y2iXKTTS0PIwKtPrIBJV8QYh"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859992456",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-17T20:22:11.425Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.425Z",
            hs_object_id: "859992456",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-17T20:22:11.425Z",
          updatedAt: "2022-02-17T20:22:11.425Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bab25e918c15-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d3869c6f-bc16-4f1c-b580-8399c04891e3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249926",
      "X-Trace",
      "2B0345202248791B78F4BBA04F195B8D0EFE63336F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MxOyuPBnQp5wppKa%2FMS6l5oyWv6YbXrF3O3lWN7mepcg9oSKqMk43Lvuh%2FuASxfswDUw6i5FqCccVks7fr68IB6XgJSEdVg3D6ORhzH9202iQGGSYNRzAbvRt3PpPzEp"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.251Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:22:11.251Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bab36a4a8c41-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "89e2a44c-74d3-4aee-a8a8-99337770345f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249925",
      "X-Trace",
      "2BADD8E7130F5C436F09318A48845E9B5E0A3BF228000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Peqm0sW4mMYGgLiPSLmYe31q1C3ifsRfJZijcZ2uQduQZ%2BsLS275bDc6a7cEak7E%2FBsZczAThtmiY9dkpac%2Fn%2BL5VGOqmEln66KLm%2Fcy8cd2QfrHmJUv7Finy%2BFmGCzI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "91c530f6-6a02-4a6c-8ed7-8421a283ab68",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bab49c6c8c83-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "91c530f6-6a02-4a6c-8ed7-8421a283ab68",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249924",
      "X-Trace",
      "2B30407926B9063499AD4CE9549A36194D327678BE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wl3CGWV4%2F9XHrnJ6kPzpfLQFg%2Bt47%2F069u8z5stse%2BMnt%2Fnk2kMTuEKpUKV3aNHJHdAiMir9iqjqUIlDR1n9b%2Bc81LzanUKjK27uYL7beOqGfI8e4IYYTAJ4oq2NFZ6p"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860274522",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:22:10.109Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:22:10.109Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1babcd9b58c35-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bdca617b-3954-4a4a-bcb1-436432308590",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249923",
      "X-Trace",
      "2BBC30181C96757A380D3AC727BB85202CEC074534000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zixEZQBeD44Q4LELKl6I7BP02rlekC6Dqd3rQC%2BmuBvyMHfx3RUqEkAhIAVZD7EgOEWilM0FiieWwe9y4H%2Fg6qrIeMFfQ7e2K9HEg%2Fw1kiIUYNeMvo7Zai1lH2Mg1pwf"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "859992456",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-17T20:22:11.425Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.425Z",
            hs_object_id: "859992456",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-17T20:22:11.425Z",
          updatedAt: "2022-02-17T20:22:11.425Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1babe5fc61835-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6df8bb4c-d00f-4d42-b2d3-9b412cdc842a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249922",
      "X-Trace",
      "2BF649D6EE09F70A62EDB23955BA6AEA99215019A9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UjD3RFGv44ARH5Aob3N1nNPPQSeWCDE2RHFMtQ66jDzn3c7T%2F%2FHMiLFfieWQCWaxGbLkPkr60d%2FrbsiFQOb8vFBVF5Wr034tuF6cvieR%2FBZw%2BcmqhVuT%2F%2B1SNhZLVizn"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1babf5d6c8c27-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "cc308077-416d-4110-963c-f4e5d9b55daf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249921",
    "X-Trace",
    "2B731C33E24500F02CEADA135BC1B3029E0F1410F2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8EJbNFkBp7pdMZc3hDvgADG1%2FQzEqMp95w14nrE9Jz%2FLHsUXePARejUp75%2FAoHT5hGu27QMVj8NrBdG3SBks8uBvcJG%2FsDRJLjziXTU%2Byx%2BgQBttiEdyl2x9DX4yCJwb"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bac089c78c69-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "612aea0b-01d4-4319-bd25-9258dd3a6edc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249920",
    "X-Trace",
    "2BD0B789DD7DE44C80C0F05D52B33839C18D805795000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zsb5qhuNCtfg2SjIxMsDSuFIreHypl8%2FD0tIST98i6pnjwJ2uTT9bVE5h2YGNHnBSaAGwlKfSzcQh8GLat5bOvooc4QwyblZTvZyUQq65tQpLWrI6WjqdNqG33p2cT3V"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "a1344eef-9aed-4c74-a6f4-160c298dbd22",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bac19eaa195d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a1344eef-9aed-4c74-a6f4-160c298dbd22",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249919",
      "X-Trace",
      "2BEEA3A3F9A9404737051348A066212CE912D7D767000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uIKpBHG8RLt1oEQ2Uwzi7upYHDFVu9%2FKcTCher%2F%2FHSDGnEHf3um2vnlVA6UxZg6YUO3HaR9PHnE3hOupdMAahIhqGSv7x0leH07i%2FZMCaLNW32kIXTBujcQnnkNCtb4I"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    properties: ["grouparoo_object_property"],
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bac999e73354-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "31928bce-8142-45fc-956d-647257affb1f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249918",
    "X-Trace",
    "2BAD123ECFECBC7D597875C288436119DF9691155A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WkQo3a1xUMX0KQgGNHH71VQv%2BxRjW1V0G2IEdWUDEiqx0%2BOeW9i8cHSAxkXmf2xZaw62NpV3UpE8nfyt4zHCobmI4Z6%2BzCMOsBUgnHKDhmO2SOsc%2BjD6foyup%2B6UaONv"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1baca991d32f4-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4a24aaaa-bd50-4e64-a17a-ad3c379f7fac",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249917",
    "X-Trace",
    "2BB949BE4471933165CB951A80C260DD3D1197D097000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LzqYd66IkM842Q4ad8x2ql7r1pPK8Oh59X%2BuP%2BpmLJNL7N12HHWPrUpVkwWXPO4YrBZsorSC7h8geiwU2uQbxu1MlJktnNcUjO1Sjs4rf%2FrPesoAG%2FnHwzgdQlOvWf9c"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bacb895a8cab-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1a8663a6-4da7-4bab-a42d-32d257b126e6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249916",
    "X-Trace",
    "2B4459315867E7F9BEC24CEF618B9728FD84428A19000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vtSugnCIXdQjsaVZBuSJGVEkcn%2FzRZnfGcAxEBFj%2F8clB6ufJmsQbMbMnuC4%2F2G1GacIt%2F4jINWXI2IN10hUrbY2S8wVdAcN%2F49dmg0DxMmFr6ju%2FeUXqgJKhyIHVQew"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:46 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1baccdb9f8c0f-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "078e6cf1-eb45-4f8b-9893-26acf3d4e91d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249915",
    "X-Trace",
    "2BD6D06AB82C9E65BF82003708B08D194685490B31000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=as03y3tcj9fjsqht0E27szQvrDOiq7miqm%2FND8NxnqFloRQAmvQrnv0pLiwJyLdBgiYWFVoVpavGkGZ9cVcipJbkVW012IoJmbqt0OiC8mEiUT92MZtVNSantf7bCwiT"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "62f7815b-3416-4a86-a714-e22e0732c028",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bace0abd0ca5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "62f7815b-3416-4a86-a714-e22e0732c028",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249914",
      "X-Trace",
      "2B4E54A70631E46052B38C360179CCC35F4A1AC9DF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nLl9Z5QgandltnzWX06ALfXvjjUUPdJQ0jgHGrKifVh8g6jgzxRZ1JXh4MxgpuclwLHOjQhdtd%2BE1%2Fd5GjngKxO%2BxbhBm94jc3zRmTWkHXuOpGc8SbgiOUhQZFJXfWIj"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    properties: ["grouparoo_object_property"],
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bad83ef61815-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d28f637a-8d89-4fc1-a377-83e956bafa73",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249913",
    "X-Trace",
    "2BFE13A3D0AB3A9520E4EDC12A5DB660CD280D2B7D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vdOUVMgE%2F%2B%2FJ8Dy6CEBovC%2FAg443w7FvoKKWJb4uAcFWuT1yH%2FxjdO00vh4jnnA806GVJZA8yfwW932hI1ADZ%2F6m0870tFAnLpbOEtGZA2Gc7l8jDC%2BGwE87SJ83u5v6"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bad92d351a34-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7024ce0d-5ba7-4664-9f8b-07b889e074fe",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249912",
    "X-Trace",
    "2B0FCF2D01AC59EB950216B5B822ABD521DDE0B881000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QnuSfXAqb4hgQytnxd%2FVq5RL7uobrpyaAFUadTajwX%2BKcPV7Wz6phcIK5LpxpAXPy70AZHal8xvFnCBDPR2z9cdQuid%2F9%2BihDiJeQIT0%2F%2BmygcXXyU%2FZK1OfnGPdGcoJ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bada3eaa19e7-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4d2f4c84-e68f-416e-bf13-c9f8d771ce8e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249911",
    "X-Trace",
    "2BEB9CB1170ECEF1CECEFF5F5739AE0B3C2D92D6FC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=w5lqxP1k2FuqwD0CHmP0yVO1HL3mAEH8Gd1bEr24rjUfdwLfSn0z%2BZGvGxvcNNoZv6PDS9tn92hiSZC5x9KtYgqdtk7CyR1mtFzDjoMSgXO1XTl2IPBTKQdqIhLqoL6x"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1badb3d0419d3-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "25456fcb-d893-4dd6-aca1-251953077ad6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249910",
    "X-Trace",
    "2B9799BE3EC2F980121103A5F238F30413D09CD378000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sgy8eJaeIxftBl33mg8Bra88kt68%2BE9wDYidd7dW7cAP4MSr8DRk9VraaOC%2BB5eeY7fGWWU5PcUxgL%2B4iw%2FXmiaVB6CRrkLCPYfXaQZWhUYWUMChWwyUWD%2Fap9DrxlBR"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262072",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262072",
            last_name: "Last Name 24",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262167",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262167",
            last_name: "Last Name 43",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262176",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262176",
            last_name: "Last Name 34",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262179",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262179",
            last_name: "Last Name 36",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262065",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262065",
            last_name: "Last Name 5",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262171",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262171",
            last_name: "Last Name 37",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262069",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262069",
            last_name: "Last Name 42",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262060",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262060",
            last_name: "Last Name 17",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262173",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262173",
            last_name: "Last Name 33",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262073",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262073",
            last_name: "Last Name 40",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262062",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262062",
            last_name: "Last Name 48",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262156",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262156",
            last_name: "Last Name 32",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262066",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262066",
            last_name: "Last Name 4",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262161",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262161",
            last_name: "Last Name 7",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262150",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262150",
            last_name: "Last Name 6",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262160",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262160",
            last_name: "Last Name 8",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262071",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262071",
            last_name: "Last Name 49",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262164",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262164",
            last_name: "Last Name 0",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262159",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262159",
            last_name: "Last Name 20",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262166",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262166",
            last_name: "Last Name 26",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262070",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262070",
            last_name: "Last Name 22",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262165",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262165",
            last_name: "Last Name 25",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262144",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262144",
            last_name: "Last Name 28",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262172",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262172",
            last_name: "Last Name 30",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262068",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262068",
            last_name: "Last Name 47",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262169",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262169",
            last_name: "Last Name 45",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262154",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262154",
            last_name: "Last Name 15",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262147",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262147",
            last_name: "Last Name 21",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262064",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262064",
            last_name: "Last Name 10",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262148",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262148",
            last_name: "Last Name 3",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262067",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262067",
            last_name: "Last Name 11",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262158",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262158",
            last_name: "Last Name 14",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262146",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262146",
            last_name: "Last Name 12",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262155",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262155",
            last_name: "Last Name 19",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262175",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262175",
            last_name: "Last Name 35",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262152",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262152",
            last_name: "Last Name 16",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262151",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262151",
            last_name: "Last Name 18",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262174",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262174",
            last_name: "Last Name 31",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262168",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262168",
            last_name: "Last Name 46",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262170",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262170",
            last_name: "Last Name 44",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262157",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262157",
            last_name: "Last Name 1",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262153",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262153",
            last_name: "Last Name 13",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262061",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262061",
            last_name: "Last Name 41",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262163",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262163",
            last_name: "Last Name 2",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262177",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262177",
            last_name: "Last Name 39",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262162",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262162",
            last_name: "Last Name 27",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262063",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262063",
            last_name: "Last Name 23",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262149",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262149",
            last_name: "Last Name 9",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262145",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262145",
            last_name: "Last Name 29",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262178",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262178",
            last_name: "Last Name 38",
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:22:49.067Z",
      completedAt: "2022-02-17T20:22:49.281Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1badc3e0d1a07-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5865ae4b-db6f-455c-ba20-e42a1d0db530",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249909",
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
      "2B1FF0EDD6F3B704A791477C036D83E2528A7D06CE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=svOS4atCCc9PHnkrXByLgoVzc4aIj1I3jPpllZyh8hTj9oalGNeevCzxar4mWEyEj1wNvOs86LgvVMGAo5FdK1QGXC8R5noYvFRw09NIltAL5R3CSiDYeQoJkNBYFLc%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bade9fb30cdd-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "57da07a9-dcf9-4db9-a005-80c186187236",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249908",
    "X-Trace",
    "2B245BA92BBFBD58AD106ED11F70988231DE0E89E3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5kXY7yJkRW0egza3hrtrU5IYO7BweF%2FdR1MBOdUiDnRfT1j3%2B7%2FPtmRLZvrlYBkopZQXtc0uknM3vjhlQnPrA7ZEvpai3%2B6CqJ4vGkFaOPhJYNlDtW1O4s2H73EFR0qC"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1badfab908cb9-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "913315e4-6ac1-4629-8aa6-661792f5fff3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249907",
    "X-Trace",
    "2B222C597105B8609A84D35F3753080533588DA2BE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YFjR%2FhdKFT91fQdby2j%2F7XsOkIyDC1zu5B823hMV%2BGcvWIUtEiUXJKtzu08MFX6YifGGe6gmKpjCgN6%2B%2Fl6r4C%2FT2IwbyR3dnRnj%2Fj%2FGWgStC2kagsGLUPb422WIu5VR"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bae0bb52e708-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "44ba5024-a7d2-42f2-9e2f-3f6e488adbca",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249906",
    "X-Trace",
    "2B603EDA99CA3D9A62A0759964F4245DACCACB414E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=z4VjW42XX8bHLK2UR7rXyobmh9IvNdgttgyIM73L%2B6e0FnpcnQLg%2BlxM5WbTQYfWQvhB5XhZTNWHni3FDVVOfu8cDc%2BBhnyqlYY7tv1rZ6ACdKus25HPEv5u%2FRQlDSVI"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bae1a99e159f-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e7b31e91-02e2-45ff-9acb-60029092db4e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249905",
    "X-Trace",
    "2B35839F266AE330059D35CB264267B5A5492867CD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=U%2FCi0STzKLOGhaAN%2Fjd%2BxM%2BavfuIg%2B6j%2BJ9EsBV1xQAdZnzt5Ky71FdG5HHyh5opos9kI15ySTOutM3LqTwHd4orhy%2FaQxeccYcURXbWXRnsE2rMPMIRNA7IC14zMTF6"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bae2ba861967-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "cdf1658b-ba5d-4f25-95e2-ce20d6439f5f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249904",
    "X-Trace",
    "2BC7F7A3F39AF34FF467C62A894191561567EF6BC3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jEqEnUkkoD1yFa7zc9orEbFybhf7OMrb7wCRfWY6dLbVZ3Gq05ox4WMT53yjWZew9wrzlk3Ae3OTlYy4Wo0sSApcA0v7x%2BdT3%2BkNVUTdm6mOsouQpMoWqHCwBuzREqrC"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bae39a51e849-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ae6d9524-62c3-4693-addd-87832999a1cf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249903",
    "X-Trace",
    "2B8F65619E15EFAD75E13F2526E819E907D0D01402000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2JQ5FzEmSl%2BmzuMGOUN77XjBTVF%2Bfk%2FTHeK18u74Pe1uiKD2vm8ZY7Zn8%2FwvhJUJV9LCGY0oB3U4FB7fF%2B4TNX020zO2wa%2FMRoJ06qaiFn9pCz501OPviATDsPAEvTPv"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bae49e288cc3-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ac211bec-9e17-45c3-af92-5c64d1d5110e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249902",
    "X-Trace",
    "2B3A7F62020E9D9556EB141E99660D1284C8561DA5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5jrLh3yAu%2FwudtdAvltKuEWJ8DoMCVRL0BHoQr2KDcz0sip5Rl2yHX2HTqgo%2FjjmEzrb%2BTERgyxx5gkyKgqiDsevU82l7mXJD%2BfU4PbiIiuBAv6FBrp9CHRefVCvkdBY"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:22:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bae5799815cb-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "aaf62da6-f2b6-4076-926d-93aaa2af09bc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249901",
    "X-Trace",
    "2B64D15AEC8CAFB664146A3A0536C2042DDFB92FBE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SSD3AE7iJ8zVpmlm7TCnT3vteRlfj7%2FaauwWtnXXYy%2BQAZ%2FqXZ9U9lPj9%2BjSS%2BnYaS%2B5M9%2B7mN7sjVNeTuJSo7na618eCjrA3cjWAiaaMq5rP%2BvFg1EjL6xSSzUiSYlX"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "862846d3-d356-4134-9b23-fce2f178dd94",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:50 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bae6bf748ce6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "862846d3-d356-4134-9b23-fce2f178dd94",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249900",
      "X-Trace",
      "2B031BBD30E9104BC6A935B0FC4EB592A3BA794C55000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uUMsQ24K%2BAOKQZxuEJ1E7McQaLBTcqELHIG9EKCooIGcjGBOHi6cFIQhuQFs2brT1cIfDAA5QmgzOuUKuivW3gDLugkYizleHwcahWmpzV31Mvknk0PHMEXxri7Fin67"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262061",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262061",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262069",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262069",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1baeefcb53354-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "613f7241-ff28-4063-b9a8-64ae50ee4a75",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249899",
      "X-Trace",
      "2B49E8586C325FD5544C2E4E18B26F17EC82AC3F17000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1hP7SGtVAQAMRlKE6DdEGR1g5wJNaP%2BAkxZxKk5yseU6ZVh4Un0r2RpEfX8DBCpCfsUJu0WASodDuQEBRZEpi301t9iKbgQ4MmY6%2BrGP234N7yA6%2FA%2FTGfhn4CLJg4dv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262068",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262068",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262071",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262071",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:22:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1baefffe88cb9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "144ca840-1727-49fc-9689-da083928bfd9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249898",
      "X-Trace",
      "2B1B295F117824AA21F5EBED44406A4795A5A66D4B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XEFftRWWNTbzju1ouo6DHyNJsygWZsjm2SXRjQacP4R%2FKFdxqZgaWEPFvQvFcqqo7Ty28B%2Bj90PIE3lpJMefcWWl0SIxAUPjxOWInE6bhZMNS0uQeylNWOZAp0gyWigU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262066",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262066",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262148",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262148",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262157",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262157",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262163",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262163",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262164",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262164",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbacdf8632d9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "21299e71-08aa-4c24-a27a-e0a2497949a1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249897",
      "X-Trace",
      "2B3CD245FF15D94D3343524BC9742044293C0877AC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c8JrtTU2S5neGogp9NyNEXsVvKVIPxUDSLym%2FX6wh8CpZ0XgfWGdodEe1y1E2vjM16r2qChcPDTy0YJg1uosPlS7EsFRYP7A2chSakxUdJRqQw2AATr%2FIh0nsJs8PS7t"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262065",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262065",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262149",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262149",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262150",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262150",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262160",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262160",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262161",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262161",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbae0d6a1859-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "58ca5f89-6a5c-4517-860e-6083ccaf831b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249896",
      "X-Trace",
      "2BDC1219992730353C5D4004881731093B31D54662000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=W%2B9B5i4pMZY%2F9gzgfB6%2BztYd%2BZ7p53GLqx9tjajNiLKzBHunZJrwN7SMMca4wMWqfYHeHZSw7TCyTf873poIJdMy9sX%2FH64F4SYbfIeh3Gewj3K%2BVRpaAXcDySKSFBg4"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262064",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262064",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262067",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262067",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262146",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262146",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262153",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262153",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262158",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262158",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbaf2bd88c65-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "78ea93a7-25c6-4adb-aa85-5db5a5a2a40b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249895",
      "X-Trace",
      "2BFF3EB6A2E5231B3F86B2F3E663DF2BDE7340AE17000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lJKEojv2nEP9fJIG4TF049zHo3kO%2BGGuonRUZILfWRv35avvMvGgnykHoz0CglrAwnt3s3haPdcPSBHjo5B46vSJIOUWZRTEHNiEzb8wdWcWr5N4SVb%2Bgz%2F6lifZplQh"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262060",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262060",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262151",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262151",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262152",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262152",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262154",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262154",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262155",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262155",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbb028a98cc5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "99543bae-8e55-40c0-881c-d42cdef1eccd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249894",
      "X-Trace",
      "2B265C9AF7373051F46D4816AFAC9E1D6CC1ED4D9F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QTmsgdOCoIS%2BBjk2SCSuiG%2B28p7r0CcwvLTagiNbbhZ9%2FPioMlasJwOpR3RDrR94pexvOW0g2qgtzUHSiksDxf9swM6qguHF6Fp91Xn4I7RS3Pkxom0TwenPxvJi3XrI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262063",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262063",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262070",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262070",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262072",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262072",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262147",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262147",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262159",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262159",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbb16cea1921-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0c6a7137-faf6-460d-9db6-53d27e467dfb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249893",
      "X-Trace",
      "2BE08153F83726824AA9B2705671F5E93A2D8F7C57000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gMXf5zWxSfNJsqla8E%2Bk23V0WWwqWcyoI95o%2BOx58wQKQYXWqXFYp5rLpf9VijD3ITQT%2F6WPPyXWrkeUjzee7fxetNu6Auae57w0Bfio5Vfq5qm4B1JjlCF%2B5Ilzi%2Bmg"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262144",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262144",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262145",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262145",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262162",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262162",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262165",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262165",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262166",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262166",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbb2dcb1e6e8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2ead8374-a358-4e6a-a567-840e0bc2ffa0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249892",
      "X-Trace",
      "2BE02C0CED7FF24BDCEB81D3FF07C6EB8DB1557902000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bHk76JMNvDcCTloJbh27aLevqC97vYVsEEqphMvhw2R2G3m0uQb2NxyD5KesW83XEhzFz0QpLEnNutj0hSZKlFkoFGwZ0NIdj1SkV6WmXFXT3%2FkBausabNc0ghICKIDf"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262156",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262156",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262172",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262172",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262173",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262173",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262174",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262174",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262176",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262176",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbb3d95d3300-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dc3c13e1-ecec-4607-bf7a-ff1e2c34f503",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249891",
      "X-Trace",
      "2B6172A1C5DC8B4AED4528F93123037FBBD676DCA8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vAxLVf5%2FFWke7vRcHsAEyy%2BPd6twMZfHnWoHOrkJpWWlvMZqfd4lmz4q8AiBIn5WszYySPe1nnEEbtBFj%2FNU5DHeTD4dHCopj03T3xYsyEmeqGqV5z3MbWjXkqRNod1E"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262171",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262171",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262175",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262175",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262177",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262177",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262178",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262178",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262179",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262179",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbb51bc9e6b0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4c647505-8da9-4b57-a51d-2da6581607b5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249890",
      "X-Trace",
      "2B010280EE261DC0A51B0DD0F8DC3C29224EB244B6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZDhiPBFI4LXdwAJLXsnEJ42%2Bwzw32f3L6w%2Fl%2Bgw9uYjUBz7HVR0ZwT6GjgACDe4kc1fvjuOOOs1xisLUYjCN%2B4Sq0NV8V55csAyePNjA8fTi1Vmh98jwiOFEGz0QkoOL"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "da55dd80-0963-4377-937d-74c953e6094a",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbb65c1119fb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "da55dd80-0963-4377-937d-74c953e6094a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249889",
      "X-Trace",
      "2BCA9AA751EB63E05252785BF8EF8B18A1F14371DB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pIf9fUHj7Eq1wjH5fzrQRXL2FGioOcnw753kmBI%2Fcl3OUsGtrQUPxYSdWnbfZVaEkzUOChuWqLMP3OQkcLwJgEnnj3Na16koIc5vSauQ%2B7xiA8bVvhyU6aHjIZlH%2Byk5"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262061",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262061",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262069",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262069",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262073",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262073",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262167",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262167",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262170",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262170",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbc00e2f17a9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c76f0a71-4c30-4545-991c-b932ccd31c22",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249888",
      "X-Trace",
      "2B39AA7476E2E332FD554D7FF3FBB41408CE416968000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WEr%2F3l%2FgE9di709HHR2aK1fSp%2FMoJJsZPLJ5u%2FcmsySMUxchB90%2FDq%2BwQM7GdYC%2B4zFckD07QS8%2BAyKDc4UqN%2FrnM3VDeOFtq9bZ77NyFpX4awDCFxBE5OiI8ClUDGi%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262062",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262062",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262068",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262068",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262071",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262071",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262168",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262168",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262169",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262169",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbc0f8b68c5a-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c3e71bb8-59b4-4e81-afda-e42412fb8885",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249887",
      "X-Trace",
      "2B5D246FAC4AF658057724A292CD807ECB085BD97C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zwa3hDOWc1U3AB%2BE9x7ZBsYgtLCkBmDBki6Y5w0GVp301CIHtCvZSBxrg458wgzsAVZcssXC5P1Giw7RInWw34xot7eqG0O0QHt2%2FDT%2BnhoWVrlFCEjPqwHXni7CXpDZ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262066",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262066",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262148",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262148",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262157",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262157",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262163",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262163",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262164",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262164",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbc22a5d32e2-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d847ed89-b54d-4061-bf7f-d6676c1bdbb0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249886",
      "X-Trace",
      "2B991958743CBAFBCF2CAB3211D40BA72BD7ED1184000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RDYmMFpvCkwnyPhdRxb%2FwrT9lj%2F1Vz4xD8w2Om4h%2FSizpsRnl6U%2B5qwFbKtB5RGA61dPTTGe26MWWbWndvpHSVlVRmO2h7KUYR8PeAYzcvZVpYIwGX7DcEIbEwXKpbCp"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262065",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262065",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262149",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262149",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262150",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262150",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262160",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262160",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262161",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262161",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbc33b90e744-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9aa83483-6121-4777-bda5-7a53b15bb70a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249885",
      "X-Trace",
      "2B96B1D28E369EFF5C60FB2D48F55E381296C727CC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pYoqeHHtpRq2u3rPQWzlnLMuU%2F7B9416HfgE0GSNHREHTtR1opmTKOeH%2FFNifHMJSTUOmDtB8StulH2rLfZD0TrXVgLTgaW31WtJ4jlI%2BWGOHUSqp46OmP6YJ%2BSHLylU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262064",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262064",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262067",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262067",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262146",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262146",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262153",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262153",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262158",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262158",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbc429ddefc4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4dcdbf01-3f22-4ebd-a295-cf3ce7c6fcee",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249884",
      "X-Trace",
      "2B60E6FF631C5C82ABE9202361C817972D08A42DB7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4mI3kGq%2FTul403ce9dXuDYsCfu3QRe6WASsWv%2FX9gHxVHwy6bR14JpL9DzQDevBXkRU%2Bj5oRWakq2vc%2BAS3VvBrE5VMGWYrSKGtr6r67TcCyNF9COmN4j9TknOUghKb1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262060",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262060",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262151",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262151",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262152",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262152",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262154",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262154",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262155",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262155",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbc5ab2c8c7e-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "71e22cc2-698e-4607-84fc-9231365f6f5e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249883",
      "X-Trace",
      "2BC3527E56B3586215C8CC87C08E427221B138F57E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KeC%2By%2Bu2HwxTOS3XdRFJmZ2SQ2sxf839XygQ%2F%2F9sXhL3t0dba0nPjM3TDRTYgrk7pbFbpBMIPGzWbGeOgWkwABWEeTBEyWShKdc1pqCK%2BV9vWcPwR68j8tevSMFy5jen"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262063",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262063",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262070",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262070",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262072",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262072",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262147",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262147",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262159",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262159",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbc6cb5fe859-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a16e78f8-eda2-49e9-a8c0-167327a42099",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249882",
      "X-Trace",
      "2BBD6CA06D5B83B4B607904DB77422AD9945464A61000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7Da6fFZioUkXRugu6GLlKIIv%2BFEQB%2B8OEj8%2F2e2gaTQe54VVqSLbqzWtXu2M%2FoKlB649zGmtPGRgkud0vkisk7eym1hDxhLnQoFLwd1MXP0Ga9MvbVtkmOhoIy88zSwc"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "38fffcda-0e13-4e43-9e79-590af1b46f38",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbc7cff08c93-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "38fffcda-0e13-4e43-9e79-590af1b46f38",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249881",
      "X-Trace",
      "2BE1BF659D0D0F19AF75DA25142D0510CA407E018E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=J%2FmX7s02On189f1Tfya%2FNYfRh8n7WnDDIPvFmDJyNPC%2Bybz3CWK%2Btsq4sDCVu7kIA55dLCloumUqakBemKNsOmtaR3grEeQdSW9KLQiBjEnwArhIv5etTn2Z9vjXOdUS"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262144",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262144",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262145",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262145",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262162",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262162",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262165",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262165",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262166",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262166",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbcf4d558c54-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "44390707-a44e-4713-a581-27c613e31431",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249880",
      "X-Trace",
      "2B446EFBE56D31B4DCA95129BB0F3F0D4094791942000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lwRqphMBPp8B71M%2FC8fuKkeJmV5rJRJHGY0Nv7SQ1tXaG99F9lpFdkRjPbfvDwKMVXGPxf1%2BoIizOQPm2fT0pXpcP460EdklhYAtye5aKQOxFJWxbJebbosThXg2bzuC"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262156",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262156",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262172",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262172",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262173",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262173",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262174",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262174",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262176",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262176",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbd02c421885-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "95f12e0c-d8d6-4fe2-8bf1-a9976d7dd399",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249879",
      "X-Trace",
      "2B50088F7AED7DD89EE60DD0A0DBD0CBC5F03453C2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S3Yl%2FpIfUMb3xg8DT7NXbi1wGDewTxmMjzmc2MEmIXifgDkqjMkQFAextuWqvr07xJGkOMmTjTNC0EOL5C00LO34PR4nLrL4XNw%2BOKIiSP3ieGfF176o9oV%2FYBPHxpvl"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262171",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262171",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262175",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262175",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262177",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262177",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262178",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262178",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262179",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262179",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbd119a8183d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "41a12adb-0925-409f-999f-499cbbf1ee90",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249878",
      "X-Trace",
      "2B522D5A245F9B3B4BE8B6FD7F7B0A685A6DAC7B47000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=o7ydKgRkSow12URLvX6kOA2hVV2ClE1le62Sve6uPTVzHz11jy%2FR%2FJdfCylpckyR%2FQ1R%2FI9MMy3dp31YjGXS8kzg8OeOhe%2BLXwHF3OyB6xi6sgdUhzy%2FfZl3vWCP%2F22M"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262061",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262061",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262069",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262069",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262073",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262073",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262167",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262167",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262170",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262170",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbd21e238c47-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "39d6d0a6-c895-48c5-a681-3e9988a751c2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249877",
      "X-Trace",
      "2B3822DBACD307788228A75F9418FC9373F1A0D0EF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LXQ1KjI86iDUJgprCo%2B3Lb9rvcWkG5dEvaZtvsnwgY1x8VOjxY1Z05otiEJHF1gfCepMzX0My58yxmxSxQRo7IkCK%2ByYmO9EN60XMAeTtfPDPI%2F6D%2FKiOrSIiB%2FrpO93"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860262062",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262062",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262068",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262068",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262071",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262071",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262168",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262168",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
        {
          id: "860262169",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-17T20:22:49.071Z",
            hs_lastmodifieddate: "2022-02-17T20:22:49.071Z",
            hs_object_id: "860262169",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:22:49.071Z",
          updatedAt: "2022-02-17T20:22:49.071Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbd30a36558a-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "52bcfe57-1b68-4c1d-afa1-ad83b4a170b9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249876",
      "X-Trace",
      "2BE465A70D22474DC5837ACA490CC4344479AD99CB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XwK%2BbPxn6D5v%2BxGL%2F5kTPTAoz%2F6mIyFNqqsuTq4yNl%2BhjY5ydaQHaH39khLxc08gTTBTyoaxPg9kT5Dkt1AwG5meOl2ktLVyYXUsFygAcYEbShReoeAaAfinIQ1c4i43"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860262066" },
      { id: "860262148" },
      { id: "860262157" },
      { id: "860262163" },
      { id: "860262164" },
      { id: "860262065" },
      { id: "860262149" },
      { id: "860262150" },
      { id: "860262160" },
      { id: "860262161" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:23:28 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbd4499d8cb4-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "21e99aac-3e11-4b75-9b32-59eff73aad5d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249875",
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
    "2B8EBF906EA5FF29B61931F8885F85BEA8BEEAB22D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Cc6dkCdToRQ3GJYkKMa4MHbGhERl%2BDohlbfrgraoEtiw7DTYFPb116iza6HrJEpemd18Avv08p1RVPjx4xqTtgwn%2B%2FlhvkBk8dLs3e4VCSm2Q3FdEA9D0iwoS5KfR1UJ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860262064" },
      { id: "860262067" },
      { id: "860262146" },
      { id: "860262153" },
      { id: "860262158" },
      { id: "860262060" },
      { id: "860262151" },
      { id: "860262152" },
      { id: "860262154" },
      { id: "860262155" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:23:29 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbd58f931a48-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a6ab15a4-f6f3-4aa6-8465-522316ddcb84",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249874",
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
    "2B791D95D6FD6AA601917A0496A5EEBE832A94B90C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=emAfoL2hUmrrQcMlDVkrpYdaMrdYbWIRqZ4qzq6i3Bxv3E0Iz5ZNqwr9qhT%2FuCJWYwix9bxRVcSW1Okg7QIFn16cFWCcrd3oWucdki04yJ4ut8pYiXwqq4B9e%2FaxMpHT"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860262063" },
      { id: "860262070" },
      { id: "860262072" },
      { id: "860262147" },
      { id: "860262159" },
      { id: "860262144" },
      { id: "860262145" },
      { id: "860262162" },
      { id: "860262165" },
      { id: "860262166" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:23:29 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbd6cf9d1811-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "983e3ba0-2f5f-4124-b7e4-afc008b4f2d5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249873",
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
    "2B8ED039460815B4D6325D82167D277B923BB7E7CD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B3FK4P5Y6q77xiNu%2BAq%2FDvfGp9P4%2BVcuJsse0T8fLM0htQkMRnXUFgN0jnYn%2ByjjDdScPiybD0wtQx3MlcUzK5HnFRaAL7grLDFh03U%2BpXzXoWqLXb7XBuHDVDBvQ%2BCS"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860262156" },
      { id: "860262172" },
      { id: "860262173" },
      { id: "860262174" },
      { id: "860262176" },
      { id: "860262171" },
      { id: "860262175" },
      { id: "860262177" },
      { id: "860262178" },
      { id: "860262179" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:23:29 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbd86f238c11-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c63bfc99-d654-4e47-9f37-09c0dd00312a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249872",
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
    "2B6C936EB0451BC5DBB389591A673D84D63914834B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=VxFiRxEDY6%2BVh%2FF%2BeD%2BnhcvR4PzNY4w98JVjbWmSwdz5EICVYxllHX4159sc3CA%2Bvb95WfbUk78U%2FCZVw1IAnzTfd2SADCG3P002ovPpSENx4p%2Bu0Bs%2FlZwAvODv4dRe"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860262061" },
      { id: "860262069" },
      { id: "860262073" },
      { id: "860262167" },
      { id: "860262170" },
      { id: "860262062" },
      { id: "860262068" },
      { id: "860262071" },
      { id: "860262168" },
      { id: "860262169" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:23:29 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbd99fb81829-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9da641f0-ccbe-4c26-b7fc-0dfdc021fb44",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249871",
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
    "2B1C7A1FECC932A85245463B93E2E34E2B0C4FE185000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4dTsXjBH1PZiFZsDUS%2Bhc5kXta0sWZf%2FeZxLQkmDw7t7gU9%2F6TSZmwYZk82zM1A5NOWxLDaOm3QhpveQpzUwRU6DFmoJOvu9p%2FLtiMuj9QZri%2BsXac0FT6zIW2Yw0d%2FT"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
          id: "860247707",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:19:27.424Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.251Z",
            hs_object_id: "860247707",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:19:27.424Z",
          updatedAt: "2022-02-17T20:22:11.251Z",
          archived: false,
        },
        {
          id: "860274522",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:21:37.684Z",
            hs_lastmodifieddate: "2022-02-17T20:22:10.109Z",
            hs_object_id: "860274522",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:21:37.684Z",
          updatedAt: "2022-02-17T20:22:10.109Z",
          archived: false,
        },
        {
          id: "859992456",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-17T20:22:11.425Z",
            hs_lastmodifieddate: "2022-02-17T20:22:11.425Z",
            hs_object_id: "859992456",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-17T20:22:11.425Z",
          updatedAt: "2022-02-17T20:22:11.425Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbdacea28cd6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "892f10f1-b783-45cf-9dc5-e6dcf1d5da12",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249870",
      "X-Trace",
      "2BF5FEDA1B6AD12A1FCFC1E47F8E46B370B3EAE726000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pnkKpjP64fZMIO3e%2BezYZ7tmz0o%2Fwe1FGinYJPzMNiTxWGccE6uLkPMS7AC9Nx3iMy%2BlZ27VcEw02XTL2zmhnaoiS1sc0FNazgu7JdU2O0OBtrwRNEy3hjyev85Gkm9f"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [{ id: "860247707" }, { id: "860274522" }, { id: "859992456" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:23:30 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbdc09ea8c53-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "166f6dec-3970-4de1-a62d-42e35ecdce7c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249869",
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
    "2BDB324A5830CD2878997A7EA7B7701A19464E28DB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E8XXw6qgmgP2xBmJt8qtilYP3R2JXH17MxD39vaVbC2yTOg5S4vNg%2BsG%2FKMfGbd3Eq90xWgv05Mw7BLiwotaJOlzNsqgYhgFHZcM5ncD3m243NzY0UTtgRFtDsaC4Svr"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbdd1b8e1784-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ba3b64fd-e07e-49af-b48e-cd8e29c75eaf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "249868",
    "X-Trace",
    "2BEA33BD2EC12C44FA5B490B5862133F0B2FBCBCDD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2F2haUHO1XfTymDih6nVBIrHIHS%2F3x3pkRNGr%2BE9ci6UQirvcajaCIhIYXgvFysvvbSHMOjmG3NJ%2F07TOiYO6DjSHEBzQV2z5ZRMrK%2FUShEzJt0MAO7lTOrltcqbBVoW7"}],"group":"cf-nel","max_age":604800}',
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
      "1f8b08000000000000033488dd0a82300046df65d70da695acee3ea7c9702225667913fd88a5b0457fb3a2778fa8cec5e1709ee462da4a9331117141dde466552753200c72003493007c8e3a5cd2c1692832211a65a23875ddb891b955b3c83fb33b6ba77ded4139acc8f572372aa7ad970040187e0cab78801ffbfa5f482004569653a4e8be2bc0aae311fcc082c9fcb1f1c4226528a2da374ade78d950bbb896136712c31dee93b9445183f448d51d0fa7f5e56074566d8dde9dc9d8e18cbdde000000ffff0300b132a01ee0000000",
    ],
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:30 GMT",
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
      "sessionID=c6cd89c78dd092d6f46f2b16c83d6e8cba917666;path=/;expires=Thu, 17 Feb 2022 21:23:30 GMT;",
      "Via",
      "1.1 vegur",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=siXOd8gujaqXRxkML67s5yx946eIbtNecMUsuaqdQi18eKIMjed%2BnebI4ixu2ohN9K3SM6avW0HkYzz1tZdJmVW6hcNPz7OZIhlrbxX4zkrEZwOCB%2BeIwwLjOqn7EPNh5rAP6JZWvUlFvAKUgQ%3D%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6df1bbdf1ce778ed-EWR",
      "Content-Encoding",
      "gzip",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbe06e8c3306-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7f881154-63de-4894-9488-a524332fdc98",
    "X-Trace",
    "2B1A9DECE04960BFCE724B06EDE8AC3594F763960B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pwGw3KCwU4IxIqMALsBY%2FoyBwdyI7qCuc8lan9stdg7JCZ6gYUpRFuM1GfHcEh1%2BGns%2BHPlRIyclxWv%2FnKhRb%2FDwrqqmYhoFQqITOSxcliTnxJ%2F0lQL7h9KFvIFd%2FTBB"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbe14a473314-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f7418d6e-7196-466a-8b93-6ca89bbf368f",
    "X-Trace",
    "2BEA9B6590A5AE27788F2B93DDAAA5FD5CC59123DA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9t2f4ffRdZ56l3lekpa7J7pQboIahExj4rWKL6pOEsizPhe5C59jHgGfYI4xMRKB6rFCG1Fox2sgNQ6wJ3U%2FtpNIfVbTdxQZwa%2BjssMHf%2FAEntMBng3x8pTvDohIvflf"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbe23a921912-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "67e6eaca-bf9d-4061-9911-39609d237bbe",
    "X-Trace",
    "2BEE9A17758DC2349A9B8D7CCA547A5155E33790C9000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fmTNFy%2BHyXEGEUvgm%2FQ2NWQ2KLYHzdQTK4nhGzmi8JfV%2BG7b2NrMNB%2FdfM8yZWOTnQVfoprC9fNQV4TO6UDuWL4SG4VwNLA1%2B3APNDnSUCp4GwPATGmSYeCDH5FOJ%2Ffz"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbe318e419a1-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1d918e2e-192d-4299-a6a8-1bfbfb5b510d",
    "X-Trace",
    "2BB5952F878ABA8FA7FF3450EF878D3F2506C2B01D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cHuiQfnebFpE8G%2FJdtBN7cezJGeXxYhaCLDgx1CLkAgQ31rhYBAZh%2BljjxSooMHoSEn0AjZBDaXEY5QtzXaZKu87gEqsadkcP0JHMr8b01sxCDrCMEBRApFldjlTCWI0"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbe3cd438c57-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3fc25684-b3d4-4d6b-a9dd-1a7004b5d36c",
    "X-Trace",
    "2B59E62AA9E0C03CA9BD382B7AD7BFC3AF92960AE1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Bv9w92sQVFxbz1DSYudAJiIzBJJCpQnCkZUZp7fTfvg1ULDhVnj6TfgUUhOxZ1PdaOglUWVYeBH5MMwO132S35t8WMKTF88vusrKcxr%2B4zz2pVuwqFxePniNXA5VTi74"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbe4b9241a0b-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "98249c2a-5cfb-43c2-bad9-4472c82a37b6",
    "X-Trace",
    "2B8913C6230FE584D0A2388A70A31047D3020243CD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dRwcittYXPCVjzh3PJ97ln1h3IYZTQPuXH972yFtuT3v%2Bf6SYu246X5I2Xw%2Bmiuwx8GYW8Y2oxF5l2mt9%2FJIb%2Feo5XiEAe8Dgl8IIDNwO8v2RDK7Cj1%2BQu8oGilewHgN"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbe5bcd719db-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "140a39f4-59e1-4c7e-82ae-9377241e1e23",
    "X-Trace",
    "2B12916FA1627614A8146F178DF3AFEFEA6D67407D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KYU2HkSTGVrOq1gGLp4YssHVRyJ3GalSXyNKRPl6WMaHG3Nuk8oT95buMVxIsi4n0mGBCIt6MFcnCfk90qAF8%2BesRj4HMTaHNe1FdlldvE3HDBA7plw4YXJVz6j4cXjw"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:23:31.632Z",
            hs_object_id: "860320431",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:23:31.632Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:23:31.632Z",
      completedAt: "2022-02-17T20:23:31.697Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbe679c18cec-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5704fecf-ca68-4800-a61f-25d739c2ab9c",
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
      "2B34A7DEF73D466EDE834E064999D3F39C60F09F22000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L1y5iCtUgvNeYFLnZXY3TLgoDil0feYcXo0TTWw4W9ztfT4gP3wAJyaLx4bRsYJ13GrMsM%2FheHV9nWiwbGCBuJ5X7%2B8erCTUvU2%2Bi4u6UeUewrliQeEr8DU%2FmIm85sSj"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "4f0c23e9-dd5a-4f10-811a-d55d1affc565",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:23:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bbe79ffe17b9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4f0c23e9-dd5a-4f10-811a-d55d1affc565",
      "X-Trace",
      "2BC2C343FFB9A5EAEE0E7AA73A6021C922DC60609B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3IDr4m3kWyGbpKoAup8kUYWBC7oyn1kPKrQ%2Fyc73f9Qy10k6rGHpD8mspROS2xVwSTFTN7Jp4PKWiCN1J4y%2FOshVyunDS%2FHFqu3qsZW9%2F0Ip0KYYCV7HNlKroygOQ%2FwF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:23:33 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bbf19ce4192c-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "83d0d83f-a4be-4186-835c-5663efb36a90",
    "X-Trace",
    "2B943FA63327629668C3402DBE1C93F726CAFF0CEF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9Y1UpYKl6T7y8ncTkeLbIuB1eCMPAjwg30XFhyqE57e2pTxfMxfw1Fk0GrgT%2BeIl0JRyhyoxPtI9srCGSMLUGdpDFqPFzbcUzeGsR2QhjaFdRiiZtSbXX4Iv3R%2B1yiT8"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:23:31.632Z",
            hs_object_id: "860320431",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:23:31.632Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bcae0caa19c3-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5b21e61c-8104-4311-909f-04b7de493434",
      "X-Trace",
      "2B0ACDDC2B34BC30223F9C21DEEC32D5AA81A139FD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TNQoJ2zHqlPtfxkZS0TzIcbq7Gttj8WWJVKVdf6s0dGZbsSqzYhuSroYRqKpn5rSnesN4JPWiqOpHwvOZQ9XYQsqBTj%2BQ%2BELnrEn8E8IKnkQwNZyz8V2MbsLDkQivB4y"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:23:31.632Z",
            hs_object_id: "860320431",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:23:31.632Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bcaf0ed41819-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e732a801-138e-4041-b39c-6e6cfc5efb28",
      "X-Trace",
      "2B338369F2E8E32E2CEFEBE87956A7A98D2ECBB9E9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FQp%2Fs6fSVDWGuMAt2tFxlHCNcV8PHV451YBzmu14JOBK3c6XB1OoXctc%2BqNQrGnpAZ9xdq2aafdSR10Sb8zdlxuZkgVjduN1lzxUYNqjfd6v2Fs2m%2FGL6Zf97msz3JnI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:23:31.632Z",
            hs_object_id: "860320431",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:23:31.632Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bcafeeea8c4b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "42749516-a4ea-4b93-a19d-5f9c64d8a4a0",
      "X-Trace",
      "2BA160EF0D708591A4ECA6A15D12F6DE7CC1BF0A61000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jjCvRy87XuWaNznCvh9%2FLpEfAOYqwsmrUsrCZBK%2BGTZYXyzSvqqldsdvTquJe0SNDdz2REBk%2FmYvsG8Nl4FUZ8j4NZQ1hOQIFso7VBwQamvDPc%2BaJUrwZrTxIOPuRDGv"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:23:31.632Z",
            hs_object_id: "860320431",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:23:31.632Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bcb0f8638c29-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b4f66ef2-f032-45c2-a148-856f9b8e2eed",
      "X-Trace",
      "2B95F45997EC857BC8032927967009B208C5CEA246000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YBIja4%2BDyXrJAzK%2FtGcVODCyF%2FspYri8G%2BjYslKLHONnB4H7jkcJRG%2BosBiz%2FZZqgJ4fVLgafCaPECr0Gjd4Qx9n9nFAL9d%2BpM8jf9tOnJP%2FSKDOieAGFjVGQ0WxcIIx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:24:04 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bcb1ddc9182d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "06a77cfb-b660-458e-8659-d42d52d5ddb0",
    "X-Trace",
    "2B8A3756BFB57A013920C3A84A40BD83D98346F21F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bAlvH4OCsz8uBxCBpdkkoJvj4qNnzie8GavS164Sw%2ByZGkKLnDyaxS1C5gTpv8knXmD6jub%2F11jX7DiGK14X3%2Ftu1HXegB%2B0GojhcU4IQfkfwcZ3e4bqLIx0k2LakV%2F2"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:23:31.632Z",
            hs_object_id: "860320431",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:23:31.632Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bcb28c36e6f8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c852ddee-1235-4683-a9bf-e15d7cacfac6",
      "X-Trace",
      "2B470FC15102634C3EC577947F1E01EEC28C73D1DA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lJm2hp45FWbhZ8Oz8BHglBrgk4EuMcL60lCXHvxEEZLMoYGCF3%2FfgwiGTnZucQ2PAArwadfqA8zTSoi%2BfhKn%2Fgyc7UinuMgByiLWfGLzMO%2F3smBkDBgxUKNlsSYSblWF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860320431",
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "John",
          last_name: "Doe",
          number_field: "3039",
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
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.457Z",
            hs_object_id: "860320431",
            last_name: "Doe",
            number_field: "3039",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:04.457Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:24:04.453Z",
      completedAt: "2022-02-17T20:24:04.517Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bcb3794a1921-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3e5f7459-d522-4806-b82f-a54f51f292f8",
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
      "2B49DA91A718137A1E3BFDC26221E2BEFD46B975F5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dXWdt8TqXoalI6KxVfPZSGrUpbmCe5X5gv1kR%2B%2B17FZpbePgWz63SOUuRTqpXqW25f9ZNkcQzY0t69Amjpe2RxGzRYTqimvmc47mCbqoGdFn8L2QFIK9xhL4cydIMudT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "860292505",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.686Z",
            hs_object_id: "860292505",
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:04.686Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:24:04.681Z",
      completedAt: "2022-02-17T20:24:04.770Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bcb4deba1795-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "54fc32c5-417f-4099-88df-fe7839c9e5e5",
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
      "2BD589864059BCC5878888D43173610BEBA3A4F3DA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mYfk7nCl1F2kuYd5yuZEpbWYTXJXO471f9xQoX89HBux9o9Rut7hM2Np3QcF9MybD%2BMtIlmbRiYKhdmMPzJTHwAFLOx5EsfCYZ6SG%2BYKNa9uctcbT48KVxYyxDY5cg5g"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.457Z",
            hs_object_id: "860320431",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:04.457Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bcb64a5719fb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "708473ab-eb65-4197-8469-170c5e6457f3",
      "X-Trace",
      "2BE7D3315CAFFDCEEA55B49CF4B9CF1D796150AE5A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hyU%2FR78IepwhJGhn8cIMgzf9JgrtE1Tt%2BHDUv1QCDSbJpJ3eDSu6iJB%2FJRhPp4WlIM%2F3BU%2FzSHKnBplT5COcqB5RbRBo7wEHqvC8zbRzqFWKhNZ8pBj26xwCjsrjzBlE"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.457Z",
            hs_object_id: "860320431",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:04.457Z",
          archived: false,
        },
        {
          id: "860292505",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.686Z",
            hs_object_id: "860292505",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:04.686Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd72fea88c8d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1e211d76-96ca-4208-ab19-1d55318eacfb",
      "X-Trace",
      "2B98876E5A648AB72FDB9ECD5EE06D80D638F46956000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dn%2B%2BaavPEU77vqU48q00WsXk8XmSAiI7xp7Ae%2FDxhM78uiAniyP2YXFsSGteKbjn9jZ6LgjRU4LwbICdQiwcAZd%2F1rBYR%2FXDZ3IyEdLU65SBH91XtEXGH%2FLmxS7LFS%2BK"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.457Z",
            hs_object_id: "860320431",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:04.457Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd74493a1986-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "be5b50b1-1b80-4c56-9251-28d0b7e93908",
      "X-Trace",
      "2B76C4D49D941CE6BD1D4CC19417D907DB1ED9BF4C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ga6SZBJnwLKAud0AGf3euCE443E5wG46Q%2FR9RP8kzp93ogV8eOMhheameM5300uvnYZt%2B70duBWx0KDBDbAS%2FMop6BF7VDkT8%2FhGEKyIUg9tyC2%2BOKvagCNNqz9f%2Fzbi"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860292505",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.686Z",
            hs_object_id: "860292505",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:04.686Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd751bd68c24-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "58684918-69bc-49ca-8eb7-a6a9b1944423",
      "X-Trace",
      "2B59C3CDC7416920384DFD42FFD41A49180FBA5C2C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FoZn6hiW2%2Fnq7OL%2FrfXifKQUsshFZiDaJP56%2BRUBFZswpuJkmTrYiiuvvqvpTUjRB2AJh92soCjh%2BUjqqstBQ%2FkkppGOPvYZYo%2FL2K0r5S%2BBTbaTgcnyFv2FL%2FMt8mGU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.457Z",
            hs_object_id: "860320431",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:04.457Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd760ed2182d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f7eed3cf-aeff-4572-ba81-635c8766188b",
      "X-Trace",
      "2B83BDC50444AD3821FC02E81C8ADC4D0D770E7E4C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AgkU9NAIaS6%2FPLvztsaILS3Z6NN5yGP6yBHXlhPc%2FzyQfnLDjcRk3LXn%2BulR85wmSLGj9a%2BJgzmkN%2FAEl5k0PXF2VvsUnTZoFp041MXNMuivoVehOsazJTsVMU%2FciGrm"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860320431",
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "John",
          last_name: "",
          number_field: "",
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
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:35.744Z",
            hs_object_id: "860320431",
            last_name: "",
            number_field: "",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:35.744Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:24:35.727Z",
      completedAt: "2022-02-17T20:24:35.794Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd76fe44e6e8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bfff626d-d6f8-46e7-80d6-5261715b7bf8",
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
      "2B9918F4064E9606CB1992654C153D9C27EED2989E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=106hFwGmyuLkpqUKzH3j28oTNGYMy4xpAbDmaWfbLCVwW2H8U0s%2BfHeaeJuPl35dKbytl73Ud4Dkj06yXF9Q2EroKJp2%2FiOMqhYcDs3C1t%2BLhtjn2nv4%2BMJyfv8OVxet"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "8ba12e99-eb7a-4a63-8a22-93cdba5d3e4b",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd78293b1768-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8ba12e99-eb7a-4a63-8a22-93cdba5d3e4b",
      "X-Trace",
      "2B2F64FBCA781C8FFC724022975E4D14CBA2630CB1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RzMAEy69o3ZTeasBeSXTjLmvcO0Cn7alCW3wtGHGJIswcfLIwiC47RG1JfPy9ZD4oNmMOrBgrilmS9LNQFrzTRN0K8F1%2Fgr4Zgh2C1JafmGusIW1T22pKduSIRiMKr8U"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:35.744Z",
            hs_object_id: "860320431",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:35.744Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd7f5c3f32ee-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0834287e-4020-48ca-862f-047e79263e1c",
      "X-Trace",
      "2B1CBEAB1B1A1D8118BF06B73B9AA535A26D865989000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=80wN4wYxalyRhxL60ShDRl7pYIbDak19bwCNwitixyeZEY1yd12%2Ft7jaDe0Fb0sfrpruaV3U8D%2BT1SzudD8XN0qoBK7Uodjke9wo9MUj3m7Krf3wbp9wdnwdrQEaiuWx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:35.744Z",
            hs_object_id: "860320431",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:35.744Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd80288118c8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "38d102ea-89f0-437a-9aaa-81dfa887b200",
      "X-Trace",
      "2B53E2B7F3A9BF7A4C55D4F9B58A60EB7A02A6B848000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5moLYJb52mmXDxBOir2hO0b639ZhNgCEw0A3Zd0G56cfa1Dl5e9LL4zyJhbdD1cQEiMocrzDIv0Q097CQ%2BzqvwYX4zpUhnnWaQoiD10o2PGzxlhQsiHVbUyRBTKInnyi"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:35.744Z",
            hs_object_id: "860320431",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:35.744Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd818ef132d0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e1f45b2e-c6ed-4229-9eb8-88ecf8a5fab8",
      "X-Trace",
      "2B94A151DEE5BBB096DF5EEA903686BA9934B09890000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j%2FznXR0d7O42CFuYvMbpH8OObS7UzYTLBWz1WJBipWDUK8a0uJ3NOJ0Qx9lct0k8B9WIg3KYYft8SXQ2zwE2kQIiLeXvhfVkI5sorGDjXQULuidKgobd35P4wAwyBv8%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860292505",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:04.686Z",
            hs_object_id: "860292505",
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:04.686Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd825fbbefc8-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "99fa6d14-dd55-436a-891d-a20dc44e8448",
      "X-Trace",
      "2BA89EC64AFC6D6FAE3097E0A56F11EB103F99F178000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xdcgfTpPjzsF6yyiMUzSryQcgl%2FOzv%2FobKvHJ9S74awCwl%2Bw%2BG6OYmtnek1%2FS%2FVoZ8CGwyqev8d81zfyuUnzXFUxocPAqF4ClIkC%2FY%2B4Fyr2dDb%2BZzVQPMNzZQu7x5oM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860292505",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
        },
      },
      {
        id: "860320431",
        properties: {
          grouparoo_object_property: "notgrouparoo@demo.com",
          first_name: "John",
          last_name: "Test",
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
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860320431",
            last_name: "Test",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
        {
          id: "860292505",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860292505",
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:24:37.701Z",
      completedAt: "2022-02-17T20:24:37.750Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd8348b80cbd-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2b11f798-ed00-4cd9-94c6-1e69b7922b0c",
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
      "2B01CB5C70E0B48BC0A29551354361467A5FAAD513000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4bebu0BWBUH4diGJCHZXMIY%2BxN07gDEyi3GJ1kggByPSweQ38zHwutq2tkT2orfO%2FMq05San4Del04buLqvlDCTiIS%2FRtA1OJvCxxhMGYr97bx4A4BlA9L8TJ5j97i0M"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "38142739-f25a-4bba-ab79-abaa2395f9d3",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd846a638c6b-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "38142739-f25a-4bba-ab79-abaa2395f9d3",
      "X-Trace",
      "2B8C6D97D6A50216897326885F1E0675655538A1A0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7e8aoC6E0IPPfHTsICBv5P57xWn3FHvhDNI0NkZn1K%2FFfDuHTuTvcfZFZB35tymNKu8FghqkTPUn%2BxD5RBNZiTXfJDJdULeyV1O9hvkx5ET2Yz5Yg5oss8udsdV%2B5Efs"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd8df84c8c4d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d9d82626-c8d8-433a-837b-089f6280a014",
      "X-Trace",
      "2B45AF3FB0223961151801CBDADCE4F154B2AA79F6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0zvRopNgm0NhR72AJK9I51To30DGS19LoSOKwhX3npwGYf%2BB9Amdfhktr6uMKjgbQ3wqhkypqfpY1S%2Fe1QX0r12ZtEQZYDP%2FJn3LEnG%2F7izbG8e7%2BvXpR9k2TW0Ws42k"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:24:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bd8fdb291829-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8124ac46-139a-4db6-807f-ab71a924f359",
    "X-Trace",
    "2B33978B444202A7A0479C5ECE7E5461C068B6F040000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fEdWZg4zU40zbil6mLy%2FTEmsoemjWMEHSOKS9lgpXb%2FyJ6gdPf%2FhBY23Xkft%2BkgDU%2FEcK4TL25dj%2FZi9EhmHu8K0e5M46y6LaOkmGv%2FTSpz%2BcPN77WGE2jQODilO2wze"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860292505",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860292505",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:24:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bd909d018ccc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0c289c71-3855-452c-a5a3-842041d6d2a5",
      "X-Trace",
      "2B0D6786DB376A8D53DB8495F36C53C5A9EF5F81ED000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cwiAXwv3IkI4qXwdQqioeXDdI2Xhm0y90bxuA6to1jd45%2FBxbrFtkTjC816SHdqYBtVwtCPhlJUHi%2BhPZRNg3HGc5XzfwLWJgh7%2B3GLizS%2BbobmNT%2F5qM6P6Jqsssq0l"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1be4d59018cb9-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2a59fa04-57c5-4d68-b479-2cb6012699c2",
    "X-Trace",
    "2BB21583629AF040B6BD99A423DB769A7229D8FF68000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=35O9kb4Gv1HaVhA9XJr0P%2F4%2Bo2tMfiA6rIdlk6bY8Tvj8W5HdBXYNwhpb%2BIPCtQHPSDXQlr29q9AgBqwJRs%2BsHgJjENAkameCooHULYqyE2bzNJYe%2BHrqVx0d2nIBbOj"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be4e3bac1a3c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e546c909-75f1-43ac-bd65-cd1b7628ec10",
      "X-Trace",
      "2BD8DFBC336804D89C09C8FC55AE536860DEE65F50000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HXea%2FtPalDH%2FuLLdkDfPVhJyd%2FqmO5H2qEab9S1zhZfCZU3hQYl4s1wi482X4u2FIRF%2B6EfiWUk8xwhrMPQU2ITqu81Mx7obIZvIU3s2OaN%2FAzm269wHxJ6RK1EnS66a"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860292505",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860292505",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be4f4f213306-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "227d516c-64ad-40d0-bd55-56c4f138b2f1",
      "X-Trace",
      "2BB18FB1ACABCFF397956E00333C6420612EA2DA28000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bxWf74GU6NxMZGy%2BFTXDe57vtyfeOHGp%2FB7rGJVu1g6hELOyj0lQhpfARS6bLuYaMFEN2hf5O4abfySxc49zJsnidbY%2BeExvGbM0kaIbmGjEL%2FC9dmBplvQASx%2BL1Xec"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
        {
          id: "860292505",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860292505",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be506adb32fc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "61a82f95-0f1d-4a46-bda5-e8c5b886e743",
      "X-Trace",
      "2B78735AC62F80FD0D6CBB18D476B13FC4C3A81DA6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HQMVEot4vP35GD0bZrxG1c%2FeZenQrB4aN9ndd80Bxx0PcXuRvZDNkAx32vhn7kdRmXW5UofczXnYTLh28Rp68U3yBL%2FAars5PrY5wIpSnON6DlyIuf8Q5keDCXoavjGC"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "bdb42404-f1cf-4242-9219-c0d51f37439c",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be51992e1927-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bdb42404-f1cf-4242-9219-c0d51f37439c",
      "X-Trace",
      "2BE86E655594819D6BE1408A6ADF01A45EC81F9B53000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p1ogSMb0TwdvRK4HaVCoyV6ShsWgxRaTVpFcYG6UvPs5260Kd1r6J3SeYqVvJMrw%2FawyUlgxusiidPfeV8PrJ%2BhRbJ5jIqYteLdrxhA4AvK3T1b6Wqv4MRbgqVNB9n1c"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860320431",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be5a6d6c1927-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ec9a2b19-27d8-454d-8b2c-c34b4f06c4aa",
      "X-Trace",
      "2B218C0A7E9927DF8790F8936965F697DCE59A258D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CV00o7r3FCcExudc7%2B38ASKmxAkYWsG%2FdzEOaaMFJTIJuxP%2FEX6R0dakWK27SV4CEIvt0Beru83oEqmYqaaH0XtgWINCoMhBoQp0TMNbLJN40z%2FDRZZKtrvFcU1rhKX8"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be5b4bdf558f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "75695b99-11d6-4532-98d9-603eb8b378e5",
      "X-Trace",
      "2B4E4D2B2038038D6E2B97281E3EC64154C76A90E4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cBxqEaItDOb7AzMotpfTmnHNig16dHEE5k232W2JQ4gcnwqlfT5Qmi9Hy3vhKvWrW9lgvWeI8dOuafIa6V7kxYUxEhQA99fkpT0gC3XzlITu5hbC3LpBAEmI683esxlR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860320431",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be5c0a478c1e-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "053c26e4-f850-4faf-b823-4dc24a6d62ab",
      "X-Trace",
      "2BA807A8E117F88D592BA93F2A5630839E46CFD69E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bsK%2BhXXm4s7KCwEivQm1EAyWf9wg4o5TaILJljNmrCW9H2Lgq8eJXsLs01aVWxId9%2BWpQ2vvtcxXXVFmvTDNCf9Q%2Fa4y8kLTDVDtuJyaywPy8tusKLqY0jd0%2FB3Ycoo1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860292505",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:24:04.686Z",
            hs_lastmodifieddate: "2022-02-17T20:24:37.710Z",
            hs_object_id: "860292505",
          },
          createdAt: "2022-02-17T20:24:04.686Z",
          updatedAt: "2022-02-17T20:24:37.710Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be5ceb3c8c59-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7a340b2d-fb9b-494e-ad17-da8a0af0a118",
      "X-Trace",
      "2B69B20B908D99EDE078D41850220EDEFAA6F71DE0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p4LxrxKxAyVL%2FUiWNGX2Bik1jf1Ig6kFltRCRBJr3perDY%2FgutihQxDoviP52iuO3rHvARj1uyXiAGfE2GSD0CWUXT1hNm%2BU7jc%2FI9es4C5vdZ0zcryyhbGkU8%2B98j7w"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [{ id: "860292505" }],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:25:12 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1be5def7e8c2d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a4cef14b-08b3-4f3d-b500-fc0115379d28",
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
    "2BAE04D60D8364E46AF3BC4CD94A0321035DEF15F1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WEM%2BLDL8gOZoJ3MjWohymKAOTJZ%2FyckK5deNgcLKSHK8SeEZpQkWeeohExtqvw5nAEBVj3weBd%2FcX2hlw5fVZ21tOVZKrA6gRAYuRx4V%2Fj69Q3kjC8FZ4zMqZQSti0HN"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860320431",
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "John",
          last_name: "Test",
          text_field: "back",
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
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:25:12.823Z",
            hs_object_id: "860320431",
            last_name: "Test",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:25:12.823Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:25:12.819Z",
      completedAt: "2022-02-17T20:25:12.863Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:12 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be5edce98c42-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c3772513-44f8-442c-bd39-a7c71ea80b72",
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
      "2BC63495D3151E50886D8EC03E98B672883C76EF13000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6C1GueUawMI88SUZNNlVkjDgI7rGbsNs0Yg7lwcQvOuopCMsBvdYSp%2FUnGIItVKyfzOL9nKAOQ7M6TSCDrCpzTd%2FfPraJ8P73vC9QY1XZCa4f%2FoZNN1UxsKe6D7j51zM"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "d39cb8c0-d711-42f3-a75f-6cc2f4bb192c",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:13 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be5fdf91195d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d39cb8c0-d711-42f3-a75f-6cc2f4bb192c",
      "X-Trace",
      "2B3C8D17C5834B409328B76A5A7F10102F3AEA8D4C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oVZhjty1VCeBOLWI3%2BnfCBaZBf8ytZU2N505k8ZwDE0Wuu1ICuGiHBhBsQ7f5a6W9BHEqzYt%2FLbeoIBWheHkR%2B9f3Qw4Bw%2BXbDtzPDUQ6suwIFdZA4h8vCyawKcFaNNU"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:25:12.823Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:25:12.823Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1be68ff3e8c9c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "838d2e4e-2aa9-43be-b56a-e18b0b2f3bd2",
      "X-Trace",
      "2BB78065C31636B49ECAB7D0688B82CDD75226AAF0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pTgi7fSuLHDShjspzQDacrCD3eaocpLVdb6jwmYNgETwXWJAU40bL%2FEZnnxs2qRz2AJp5LXLwi8KHYtyQ94vkY2wkXHmMJVlMV9ljgUrh%2BxbheUT1WvIOy6kD8oIryXx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1be69b903e6d4-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "68f8c638-b53a-413e-9df4-bdbad9a1d00a",
    "X-Trace",
    "2BEA0E48C8753E6D8C72B4C530BD7078B20617AE25000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TYlthNaL9AJI6hX5IxT%2FNOeY2h2rfpXRq14cYtUz3SOxDy1N%2FFTsjZZeq1siB4FM3LsgJyrUBtYOnDKhWwzbtRJsce2HTl%2FxfVNN166%2BUTS%2Fc2pQs%2FENyNbmL0Q7PlAZ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:14 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1be6aaa708cec-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "93006974-84ee-4eac-a7fe-fe45cb81be02",
    "X-Trace",
    "2B3D0A2B45D017C48BFCFADC7FF7A3DA9693D3680E000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=822xsQgTQdRk6Dpg1E3C%2FBihr5g3T2enVi56D0Z%2FxyXRptlwp557EFdFn38D1N8Zed0OMGg9lkkNbwzr7tuowu%2F1UNcetXPzNkjyEVqEEJcfmHkThHGk9YIUBb%2BD3Uoa"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bf2738c119fb-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3322be4a-3f5c-4fa0-b92f-a62de4572a6c",
    "X-Trace",
    "2BECE2ABB6B600E0E0308781A036DBBAE260EB87F7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Gf%2FIJjmv6AD01a66Ui8FkpVBRjKZAxn%2B51opAsHVgClPVvWvaNPLhKv4Dr7QcfEyDH%2BiszQXxzmr%2BqicvMqM7yQyspG%2FgdI8XNo6Y8IJvhu18ShWMFjnmIQM6T4NtUqX"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:25:12.823Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:25:12.823Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bf2818ff1a17-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "333daf5a-0868-4ce9-90cb-aa83e370389a",
      "X-Trace",
      "2BD6BD6FB7183608E9D7E20784EB8B9848656A61BC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=03E7dcB44UA9S5A92Ub69dvz76ve7As7zzB030eyMFTduy7l88DiiPWAq%2Bq%2BuMP9rEmTEy2UIJe1VR4tT1wB7GZyfVXu8KmmFGmvg3H69r7WdQ7P%2BQ6tUh93KUVFRWeG"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:45 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bf297c8ae6b4-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "818e6134-88c7-4bd1-82ef-867b84e670b8",
    "X-Trace",
    "2BED694B277ECD270704721172BABFC0E66006465D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=m%2BQU1iOVt7zw5ql0i6vzpbR2A%2BMDYHm2qOneBLQomMDZzYFcz%2F5jNC8Lel6g%2BQEeV%2FeJ1lZBmJlXwWF8mvs2NkXroMWrckCw3VSZoyugA0Omb6B9RAkZ6adVBGCmpShn"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:45 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bf2a69a415cb-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f02da866-209f-4f84-9780-db808dd38970",
    "X-Trace",
    "2BE895BADDAA3F9D367599B9C9BFD6B846C9689680000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mKTq4Dhbh1jENaC%2FpAIVJrzMUMuYKUqpE%2FU2B8%2BC%2B56NAnezmNyqzYL1w2HSWfvyEtEVbGFjG%2FSr%2FBZSlEWGiIoi65fUX%2FKi1TWNlazW2spUakgm5wBu2Ods5qiCwkVJ"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:25:12.823Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:25:12.823Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bf2b68331869-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c02321fe-1ffe-43a8-b9b4-b9b082a307b8",
      "X-Trace",
      "2B6B3C28559B26A802DE0C8F4AD771385521A2D9F8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=06RP%2FJK1u5%2Fucmvvt9bjaOL5njdqyRD8XJEKc4s1JNJFflO9VUqBAgbqkRmxx08NOXvNCo38tBZF4RJGwj1UYKlJbD7uVgK7rS02%2BB7IxJpnlSN7cAslADQoIV4KrRnF"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "de1c147f-3303-4849-a834-31fbffa837ed",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bf2c88fd8c95-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "de1c147f-3303-4849-a834-31fbffa837ed",
      "X-Trace",
      "2B63F184C9555FF39A646908271EC96E29F0E76B3C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rOEo5bTj80YLn04HD7OVojclAWkdor6Y%2FLpK0v1HQDy46Y8FG2kOrArmnsXK7oAQSt%2F9ldwk9VlIxAkdOdcw%2FR8EnXgIXjSLsXM%2BKjLFUE3tdJ1uPIcfffnJMP5CFzX6"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bf353b6a8c8d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2bd6bab0-341b-454c-892f-24cf962ccede",
    "X-Trace",
    "2BB71B1CD97FE37EE233443E9DC044F82E556FC1E1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dQsBOHKrPLtmAdk524KyEfy1bfsIXE8HUsrZOQm9TfuGCABN1Qy6pv9HbLX4%2Bs3U8U6kiaxW2JLq%2BNXZVdGbGS5MrwsCY%2Fyy6vxPxqUtEA6uKBA%2BFd%2FaK970L4dCic7e"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bf3658f98cd4-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "267d0b71-7aa7-498d-96fb-59389f165e72",
    "X-Trace",
    "2BE5ED7D977C673049D960DA1A37B95031C4978163000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RDT7wr%2B9hufKspOTGzFIh09mKAqAfsxeFuu0NnWHzVV2vGRz1adQnEBiMvRCpCfkACMgBmh1sgErAqRr08G%2FjQov57MOB6dRoFhKr6nd2xxCBKWHjBhDV3iWNkLNuCRP"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:25:47.455Z",
            hs_object_id: "860354935",
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:25:47.455Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:25:47.439Z",
      completedAt: "2022-02-17T20:25:47.513Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:25:47 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bf3728fb187d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "57a787f9-490e-4a9a-8772-0bfa3dd10a32",
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
      "2BA93289073848A39BB771EC3F39A0FDBBC3DC64A6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AFaxOW4xPfMulZHd3dBK7TV73eb0PSaZ3TLCtjMWka9d2w%2FspHTKay13f0e3SEro0ezCzbC3kCJlnsj9%2FIKKaVyUBhHSvi2vM0%2BYk3T2RhOwBbUXbStbwwvba5qxfpHB"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:25:47 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1bf386ed78c12-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "827ad12f-5a58-454c-b032-ee2dd00899f3",
    "X-Trace",
    "2B796DB12664CF2AE92C8925E1BDBE01936C41BF3C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IZPQB6LAAVo5l4x%2FFxsI9bB5OknH3nIeLaV7h4lpA9Buo31dZ7EVu%2FUrTqKuKAT8WvM2nnQOAzuGbXY9Y46ApjH7iUpTmsA0cJRDN5730Z6F2M1zSmZqcqzqj49Sjpuc"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:25:47.455Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:25:47.455Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bff4fa8c1912-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "91f81689-9c51-4dc2-97f1-578624e7626a",
      "X-Trace",
      "2B4BFDD4DC0B3F1C05B9BC96595426969B5A25D6FA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GdurmM3dt%2BK5An9R66GvTApKi2Dp%2B7OJ4fJxHBD7SmzLslRzZn2PLROXRQmNX%2Fbhy2elLNLUzX%2BNLXkAlGGwzmefknswrrKGshd0T%2BoCiElAfNPYj1dXLvx2%2B2M7LDg3"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:25:47.455Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:25:47.455Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bff5bbc919c7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "55cc70f1-cbb2-46b2-a541-f54dbf05eb46",
      "X-Trace",
      "2B342782F833C0A24E41F990D24AB9E6F50E8D27BC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YW%2BQkBCiGKb%2B%2BMcr4WRfb%2FsyOQDJ7LqaKS6b1qxQBDUpwbX7Mhy8PrYElLmuQrzz11Cb9X%2Fyl6VPynkcWztfXVfT44MTx2VXhv2MzxZqwuzJph48j470Dz2IdDcMKFFt"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:25:47.455Z",
            hs_object_id: "860354935",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:25:47.455Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bff689b818cc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1f5a49ac-5c27-4dab-80b9-e2aa52554e5b",
      "X-Trace",
      "2B5D09A2C3206DB8351838740EB9ECCF7C4C454747000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gA%2FZhU6daHWh6b%2BIeZ38PeS8nXQYDlP8TMPxUwH3u4MjTGIY6nN0%2B6DtktDmYwJx62W2K70kMnbBAfBav55gy5mBu%2BpZut3EpKw3D6sftId2nNuJ5bpRpNGmzZaZXj%2Fx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860354935",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Maria",
          text_field: "",
          number_field: "",
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
          id: "860354935",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:26:18.214Z",
            hs_object_id: "860354935",
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:26:18.214Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:26:18.209Z",
      completedAt: "2022-02-17T20:26:18.264Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bff76a4a8c5d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c8f9f35c-ed44-4923-a2e2-71c2a02a835d",
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
      "2BAE452C89DB879CB2F2F7665FE130A30D988CBC43000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kT3zfC1KhcfZwrm0TGBTmj95tVEYPNtwHZlAc6%2FJMorYKDJv%2FWBPn0%2B1c821uavVZA5cYacJRWmAckurH3zJXzJPEI%2Fa8P5M6cLZyUG5jmYUv840rNtQq%2BnXGxRzdRDS"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:26:18.214Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:26:18.214Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bff88d9a18c0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "812c7386-b425-4705-82b8-c38aabe7b1a7",
      "X-Trace",
      "2B5CDE49E5C58EF0A8CD74544CB35D06EDC7571D6F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Bpsy7CClYEVQtR%2BVN8GPUvb6Ipct112XF4ePntLKjyaG2pRblsJ4gK85mIBNTfbmdx6dbk6kt3KduCQ%2BBcYnnHEFPN3FmjyMuuXoJGDjSV6psznK9RAA9V1sQbIud6IH"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:26:18.214Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:26:18.214Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bff94b868c8a-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a99dead8-c718-4c34-810a-a56633643308",
      "X-Trace",
      "2B77ACC8A77B5133DBC0FFB92FEBC72AF364DE9023000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=giWFoyQCxE3AZsgxRrAMRK3VT3alLpkDJHeuGL5%2FDqgggdgKMsh3dXkhpvn%2FJGQznhO3h4n2HCnmdmkphgN8dCL%2B4CDcBVkBmGonjxHlfc027vTvYz1BiTI3IssTC7cV"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:26:18.214Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:26:18.214Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bffa3d7b19eb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b75ec4ac-fb7d-4db3-9785-be93aa98a137",
      "X-Trace",
      "2B855EB08919CB856E2092BB738B9FF646CA6FFBE3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zw9LLKZF5D4shz34nM4l1zMDzk0qe6P8eZrIbj92pKPwbySDsdyDbaO2beXNeIJP7ubpjt6JJ6Bkyui840SabYz8DVjChQZRg3x4SlGfip9%2FZylij44oTSWGKbcrJCWR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "ea329279-ee5d-49bd-b094-7e506964663d",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1bffbaab61879-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ea329279-ee5d-49bd-b094-7e506964663d",
      "X-Trace",
      "2B8FB20D45FDD18F6889ECC2C789D024D84D9530D0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c0NnMlIVpYfgs2dAyk5vb8y6d62Wk%2BHJsJDwQOPynyNR11%2FrJvc0qfZLHnejyzesIaRexL%2Fm5XGvpNB6Jik%2Bof4hLX%2BA7GfWFrp63GpRjPNqMCNR3YIPPyg%2BvXOexv%2B1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:20 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0038ec48cb9-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c5cf1bcd-13d0-4548-9515-1c5404df52dd",
    "X-Trace",
    "2B29F4C676897BAC698F15AF9C20463D304DE2819B000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=o7Fr%2BKADrlpVdvqHC9xIKPVoiOX1uLYzZoSIr2I1qCRp%2BGooaolM9qgDWN%2FHYx8c9UyztGJQPAwlQPALHaU2mvip0VZa%2BLruK46ylhogSdpQBCJ3cx7JFNHiR2Kqzhq%2B"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:25:12.823Z",
            hs_object_id: "860320431",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:25:12.823Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0043e8ae6ec-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fa780ad8-0a81-4719-8f69-8f1f005d711f",
      "X-Trace",
      "2B5DFEB31DFE76A6EFE2B3AA66A579806C391666AD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NzWHCCfjhnjsZFaCgyuzIPoEF8%2BrI25Hl5u%2BHL%2FIbr8xCIZ2SfCCgpCrNZNmWAPMInYi5mkMnioIN2%2Fo13QWmZaLPehGm5emBuDNpb%2BWx9En8to4tdpP6jg5DEigIsci"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/update", {
    inputs: [
      {
        id: "860320431",
        properties: {
          grouparoo_object_property: "grouparoo@demo.com",
          first_name: "Sam",
          last_name: "Test",
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
          id: "860320431",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.434Z",
            hs_object_id: "860320431",
            last_name: "Test",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:26:20.434Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:26:20.428Z",
      completedAt: "2022-02-17T20:26:20.475Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0054fbf8c84-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7b097982-55b1-44b2-a3c0-adae29645153",
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
      "2B0E2CF7C486DA722EFB797D91F5D513EF6B3E4409000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LRsMzhAcQDNF4F2Faglx0kRtMxqPxuyu2CRA5KY5wxQoWolyVe%2FMMdDI9Ak215s48zmhoj8p9nEQJYGKfRMsO1QkAYeXiCKtxq48FrjyoW5JK7KZ6eewzZOw8%2FjhEViT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "859992886",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-17T20:26:20.577Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.577Z",
            hs_object_id: "859992886",
            text_field: "some text",
          },
          createdAt: "2022-02-17T20:26:20.577Z",
          updatedAt: "2022-02-17T20:26:20.577Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:26:20.577Z",
      completedAt: "2022-02-17T20:26:20.652Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c00658ad8cb4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2458d0eb-1a31-4b59-abbb-c33f3a651fa3",
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
      "2BDF7CA1860C5FA57BFF99E83715004CE83377890C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JMdYvizz%2BtBUctu69UPmgNiAouKwDoICFWA25bFGNFQQ0%2B7DI3DHsNurMikbpf9dko%2B2PbYpE%2FKiEhodWTiUNKooTOkOuF6KCDz3hXgaz%2B%2FKwo%2BoblAQAdm4IfxFY7qh"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.434Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:26:20.434Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0077c6d176c-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7d821f3a-deb0-4eb5-963f-6775d8de9aac",
      "X-Trace",
      "2B396E5A4CADBAF94BC78DF94B2F296C12C7D1A89D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h97pq%2BI3t918E3EVSgj76foQ1Icv066BUg%2FT1QC7zOM5%2Bdbb6ysmDBsuGn4j%2F96DysWJUxG1R3PwJQXonffprWf%2F9sbuZjYBbrKtM1sJZVsQax6hgFrDYxkKpTPjt5P0"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:26:18.214Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:26:18.214Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0083e768ca2-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "eaa2bf1e-2449-49d6-99cc-27880f5f5065",
      "X-Trace",
      "2B2979D3E49B22BE46C9C06F61DEDAA6A5F287F82B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0k6zX%2FrPhinW6wlYJAiQaRWTOPEi1WawwmZC6y%2BAaQSUSuM8jRmqdH1qSFeA8TkoJ%2FEx%2FgYNdDabNpyMaBlh%2FKH12SbJeV4uaUJ%2BfuO6v7NG%2F2DFuKwoF%2BvWA%2BTVAv3c"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "d8ddb6a7-f6d5-4567-a951-5cc845ff09c7",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c008f8701977-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d8ddb6a7-f6d5-4567-a951-5cc845ff09c7",
      "X-Trace",
      "2B6045663C75E479772334BB1F861AD7620849B692000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lPrbWQKpgGOXksD0Gx8ZKVbC2KmS9J%2BoxO%2BC6Jvj0axXVzKClywfhGgQ7KiVbTRmMIZfIUMiDr%2BcW6IQKGg8Na3lNl5jdHC3Qx7KLGBqkSZxKhODRQceeegAEa%2BlIP2%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:22 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0126f2415c3-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "cf9c7c73-6659-414f-a6b0-86ecb1d8eebd",
    "X-Trace",
    "2BD92FB1DD3C62A6AEAF69DA5374FF6FA496C35513000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=r7zvL%2FlqId1htqQpYW%2FqzYDR%2B0TykOWrMBeXbQtC4SXFzMCSi2RJucs%2B33sHjhzmrc347NHutwUB1QhdVvn5bF3a%2FjXhAglc20bSBco4d1S0%2BV2BrVlDxnJljzdsqcj7"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.434Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:26:20.434Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0cebd6a8ca7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f3ebc1b1-271b-4d6b-beb8-24b0c93bd0b9",
      "X-Trace",
      "2B634417643532473828B99560EA30FE4F609D08DD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dzxyUkFjEFYhuHMLDbFWxh2SNbGXHLcar%2FeXbXKtpJtRnSBiKcXUp5AtXp%2F6WyZ2ejaqg0cWjmHbqzakx%2FWy094jge8Dchf85Min06o1TxFC3AQU%2BhYZYbYiVa70KoXu"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:26:18.214Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:26:18.214Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0cf9ac80cdd-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "801189e0-3fb1-4b1c-a73e-05d471507b90",
      "X-Trace",
      "2B69935E5A8D82DBEBCECC76863D7B11F8ACF971AC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Pqy1wZDPn5AIMeDNARfkrd3IVGZOiYqe6vi2ipjbucY0HLkpMcNqgfC8Vpn49ySd8H6NRlJvb1yof9cyqkC22luBAlKRgELQWk7NGwBDlEj%2BP9o63POeZJMl63r8ihvV"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "859992886",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-17T20:26:20.577Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.577Z",
            hs_object_id: "859992886",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-17T20:26:20.577Z",
          updatedAt: "2022-02-17T20:26:20.577Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0d0685518b4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6ff94e65-7f75-4602-9860-23cc5b6de7e1",
      "X-Trace",
      "2B0F12293A722DFBC12533D9580318A67CF94258B0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cYoqNhJy85IqTp131U0T4D1wpOfrC9x%2BNRTbcCwuifFv39XcZuqnVSbiHHk%2Bjva8tPIKjLk%2BKI7WVlTJOv3cReCTmIfwVjZLQ5CKxe2p0Qm41IwBQeGc8r1CgkCD4Yw1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.434Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:26:20.434Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0d148e3e6dc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4551521d-905b-4b36-b258-94cb055ff6ae",
      "X-Trace",
      "2B1B34B103F161681300FEE96AEF3C08E269CCE795000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6WtJTZPhK83Dj8UL%2F9jfScHZ4e6kGRFpx4SvIj%2FdEIwr8vbUQIBDlHelQPxEDPv1cM1sEREPm9JdIavZdX5ISVTgCmYnH%2Fv2%2BHhz%2FX2MLfaxfj1exSEoMzNj1zhk98Fd"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860354935",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:26:18.214Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:26:18.214Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0d21ee50c99-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bb7c6f05-f028-49d6-98e7-27a95b3bc8fc",
      "X-Trace",
      "2B81EF2FBD286BCAF0F4EA8C392D3DD081C6656AC3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BPpZVu93bhQ7wpmKwo7OuhiXhl1lqMHSuqRz5lWY3bfJlg5A9em%2FxHU0SyokZwPCpo9u0xR5EfCyJuwfVllnKJWLHzV3IAXMQajkjK7%2Bfn4BXlAHvams%2BM10qZek2%2FzG"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "859992886",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-17T20:26:20.577Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.577Z",
            hs_object_id: "859992886",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-17T20:26:20.577Z",
          updatedAt: "2022-02-17T20:26:20.577Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0d3096b8c33-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a7225e19-2b2c-4dee-a905-ad4ce3a025ec",
      "X-Trace",
      "2B6ABC2FA88E9F36317B29FE76FE5C18674B1E00FF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aP6OdYpNlq%2B%2FKrk5r5Jrdk4O62W2UMCwYloS4yhbPyuegYhPSxztI8%2Fs1dog%2BlfP7Vj8Mf4PwiwpKVOH53OalRFlO82lDlUyDaiw8LcK5uOM8pKXXUB57nTYH13m4szL"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0d3fe878c6b-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "dff68271-0d82-4987-8a0e-5bf0ceaa74d9",
    "X-Trace",
    "2B4AD88E19C5D44B732E91DD1B6CE5A6C321B1C51C000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q7k8xrvp7o8HWcmFBYPKHWoK4g6jZSJQqSh%2Fx5rOioVTs5xcQU0MWp%2B1d86uT%2BsOWtMiKJ6zmitfGrf0Vz6Lx%2F%2FE7S%2FBNR%2BXDVsPAtQh6wr%2BcilznOfF7%2BH7pGDXDGje"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "8dd9ae88-8900-4eec-8527-a5c701819aec",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0d51e8619c7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8dd9ae88-8900-4eec-8527-a5c701819aec",
      "X-Trace",
      "2B1FB8E67B44A1214B83D0A33013B913C501A68E57000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YzwXPjnacnM80VgFngAB2IKUb31EduZVdUFExtTBZE8rHvdofuIkEi65LdSizLVEFPF4dKu2M6kfr78yQrhZ%2FEvpFd9omyJ6FQYqL0OaRrwbCEcW7mm%2FDmvka40B81JQ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    properties: ["grouparoo_object_property"],
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:54 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0dc3e4a8c33-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5892e40f-e342-4fea-a019-896b6112e526",
    "X-Trace",
    "2B09620F61C48F855FC1CDA4DB235141293DABAE8A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a0RG7o5i3epVQz%2B0wuaXJn1j4izVutRGQql1iI00aVKxFymw3s6glvY8LL0MZBl2sv%2BCSdpnBW4b7C6N%2BOuDkjHS0WPWHhQDFliyXz3NxOWPw923qT9YK8xlqubosxiu"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0dd3c22199d-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0ad3a910-6f41-4737-90c0-4df618776cb1",
    "X-Trace",
    "2B3B71F5C6B020B3DE7B41E9B55EC5DF7F728A23FE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P%2F5%2FRNVjQqLBAY3QKf5M9C0qnx4XVofxmpjbs03tHd7KAG1GZRRVaYFwRCOUJTq16bCwQdNPCTsph4KWrNgFGEEX1g7Zt8xY08kCZgTW9lPTlmo98eZ%2Br9kLcTUkT%2FTt"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0de1d4918f2-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8d57bdb3-e8b5-4a63-ac62-46ab14a3b3f3",
    "X-Trace",
    "2B4ABC02AB4F413BFDA6A1F85669FA714542692B91000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yMNKilfXOskMZsiJrz0GvbmplSPsLBkU8XuA%2BTUZcYktWEVcW5iixM%2BSZJ2r2EDQFlLC8Ij7EZ9joH34EBfyiw8nk5%2BLl86IyYQHY%2BI8PvucwLrBfev1%2F0muNJUWlI1B"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0df0e328cb7-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "dba5138d-6c54-4ba0-a0e4-43bcb8152224",
    "X-Trace",
    "2B49013A88842CDAE5CF66C1F86FEEBA695BB92343000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ObAApYRU%2FyAJR5p%2FS7dmp39iH35zv7cWvJAJDVswqOpwyLod5JmBp3r5W7J3V3jnfTOrAefGejNcv1MiweWpPuX6JuSDBY2Sb5t5rB81OFDtCVnVuVa87TH5kcBsSBI3"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0e05b0e15bb-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "753089c8-2e0e-4240-a67c-9c3785a39247",
    "X-Trace",
    "2B0497E155CA217E8E69209704D49E5CFAD3287FC6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DfHrqNAken8eyrKBwOinE0Hf3nEEvHzrSfTGSaR08ZltUv2dhKleCkU%2F0AiKhMgLFPGg2kHUF2844YPDtU2wVAMdUqK8NBcIvDq%2BilVl1hJse%2FoeoXlo8GH5E%2FPD9DXn"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0e15c4be714-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "136ead5e-68ca-4069-8a6a-2714be6863b0",
    "X-Trace",
    "2BAEE8B06AAF7FB965A245138BE257ADFD22D37CC8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sM0vRvMy%2B2Y2%2Fs0ZkYsXgx%2BGqHJhDpm3ynvVJhOoWwn%2FI7WpJCZAO61l5Uk%2Fnyuw8D%2FQ7G8YKtOHFhKSfYdSPK6UF7X%2BCCUcuPZCGwpaN4znK9PJh0ej69m3fRt2QLHT"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "a18d82c8-bcdd-4956-8412-f8a2fe2d0703",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:55 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0e26e670c99-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a18d82c8-bcdd-4956-8412-f8a2fe2d0703",
      "X-Trace",
      "2B3BCFF5B5B44A6D3445ED8733E5975F8B7E38ADEF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Gihmv1MeiQWc1oUyTacVKfcGxFEAxqZPe%2BoBhTRtpqElvlEO4UfadPFpGVNHM%2FO9276Eo1iQwQKO9v1TJP0FX%2Fhu6xYaEEMeDVhlJpZpCdTKEGW%2FumbvtdCCysDGrYlY"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    properties: ["grouparoo_object_property"],
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0ebfb471869-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8704f72b-fbfd-4ef8-963d-499e338031e3",
    "X-Trace",
    "2B41202A3EF42E8E4481EB0C7D5FEB2FE15A186B1A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bNRfXBSOaao7BjimQPVGyZTWHsMZqyU5Bvzdx1JWWwhl3LMFLLN%2FcfaC2gFPzC2I%2F6kaK7LGhnCWD%2BzGGA%2FjrajIBqgpJXCKAUj%2FnQ8HYov%2BcVjBsngGYn%2BxeAgDK4XR"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0eccd75e6cc-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c2202af6-1edb-4f86-9a59-69ea5c193206",
    "X-Trace",
    "2BE9F90EE724EC1A5349514DEF07A8A69552133313000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MepSsVdYtubuKWIQyXisMlG7rJT3XF7XRv8nIt5bAUlNONK3Rq3LC7jvXFUIWeJGmUSOaGxMTE9J%2BW6j8v2aUbHi5RhRAqqdL%2F0e12oV5VCeb16UGFUf2K45CP9EXaoV"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0ede8068cc0-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b8845ac3-1717-4c22-87a4-79cdf73c3901",
    "X-Trace",
    "2B8C1364C3EB877A66F3403CCBA1BA564FC0E13876000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QY1f49F7sOOG92%2BqI3KBx27SrihaWTPpcsdzJoOJSeoIKmtaHQDleepWe3mvjkcbgkXoYG2M31Egyf%2B4NJ7OIiJJBWhof9AkM%2BMpQwgp5lOCbGPBcPqMRW7fxGl230dW"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
  .once()
  .reply(
    201,
    {
      status: "COMPLETE",
      results: [
        {
          id: "860292726",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292726",
            last_name: "Last Name 12",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292728",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292728",
            last_name: "Last Name 9",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292707",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292707",
            last_name: "Last Name 44",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292723",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292723",
            last_name: "Last Name 21",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292722",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292722",
            last_name: "Last Name 49",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292733",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292733",
            last_name: "Last Name 35",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292749",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292749",
            last_name: "Last Name 30",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292738",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292738",
            last_name: "Last Name 22",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292741",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292741",
            last_name: "Last Name 40",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292734",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292734",
            last_name: "Last Name 41",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292745",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292745",
            last_name: "Last Name 29",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292754",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292754",
            last_name: "Last Name 37",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292750",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292750",
            last_name: "Last Name 33",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292727",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292727",
            last_name: "Last Name 11",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292724",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292724",
            last_name: "Last Name 24",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292725",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292725",
            last_name: "Last Name 6",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292748",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292748",
            last_name: "Last Name 47",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292744",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292744",
            last_name: "Last Name 28",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292746",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292746",
            last_name: "Last Name 46",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292709",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292709",
            last_name: "Last Name 1",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292740",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292740",
            last_name: "Last Name 5",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292721",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292721",
            last_name: "Last Name 15",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292715",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292715",
            last_name: "Last Name 25",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292743",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292743",
            last_name: "Last Name 42",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292735",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292735",
            last_name: "Last Name 4",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292752",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292752",
            last_name: "Last Name 31",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292737",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292737",
            last_name: "Last Name 23",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292732",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292732",
            last_name: "Last Name 18",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292739",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292739",
            last_name: "Last Name 10",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292729",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292729",
            last_name: "Last Name 14",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292718",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292718",
            last_name: "Last Name 2",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292736",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292736",
            last_name: "Last Name 17",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292731",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292731",
            last_name: "Last Name 16",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292720",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292720",
            last_name: "Last Name 43",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292708",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292708",
            last_name: "Last Name 26",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292712",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292712",
            last_name: "Last Name 13",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292710",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292710",
            last_name: "Last Name 32",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292742",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292742",
            last_name: "Last Name 3",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292711",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292711",
            last_name: "Last Name 7",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292756",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292756",
            last_name: "Last Name 39",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292730",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292730",
            last_name: "Last Name 19",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292716",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292716",
            last_name: "Last Name 45",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292717",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292717",
            last_name: "Last Name 0",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292747",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292747",
            last_name: "Last Name 48",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292753",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292753",
            last_name: "Last Name 34",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292755",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292755",
            last_name: "Last Name 38",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292713",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292713",
            last_name: "Last Name 8",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292719",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292719",
            last_name: "Last Name 27",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292714",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292714",
            last_name: "Last Name 20",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292751",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292751",
            last_name: "Last Name 36",
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-17T20:26:57.818Z",
      completedAt: "2022-02-17T20:26:57.954Z",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0eed9cd8c5f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5d93735d-2bbd-42eb-a6a7-56441879e7a1",
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
      "2B16B25A74D14609379CDCFFF17F1F84C6039436CC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=B55LWeyV5t4RKu2kDIfGY9BhIpoIG1fuTz5VGRUQYhqJh65zcSYw8swAP%2B%2BvPOKAEcZA65e7MDrsWrcO0%2BKErI%2Baryuh1zoT9sOH1aPNc9On%2B1CvFKQWVnWVRnhlzn4A"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0f0ae628c24-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fb85a82a-0e03-4ca8-af49-c83902e70ca9",
    "X-Trace",
    "2BBD9A5F58285301F6B15681C02F27683127B8DB13000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zWOxlKQrMZ9E5WaxyfiPoHIHSTqu%2FWwAU2La%2B%2BUjKeXnuWiqQ9pUk4uhdKIVFPG%2FM5we0jSamrwsDkOGh1p%2FxHV6UX3GXB3Lnvi0NpLzMJ6n8ZjIqAFphsbeiWGjtktd"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0f1ac408cba-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "889dd284-f9c3-4a69-aa41-b34a23923b5b",
    "X-Trace",
    "2BA14621F67C1A1A3864C196A9CB25ECACC79E4D63000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ish6dZOx90HJvOUf4ULfpk47J%2FdqO61u6zTpODl71tVohmLa%2FOuQjKvC7FM5Uq4dgCcsTs%2FT39l3MytdKb231TgHIuMs7qH3DexSquvrVC9Zx7zeI0fdWiIjac3q4IX4"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0f29d8d1865-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8e30f291-a24f-4a06-bebf-1f2df7176a4c",
    "X-Trace",
    "2BD61210AACDC3C2368A23F2146721D6B01ED350F2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qns44s6vzTgF2d2vIPqeCvj%2FwBs%2F%2Fs3zZK4IvHKtMCJsOvnaSTr%2BCz2KrWkRcZglgKXO1JoybBfsHwFE1lYGHoPknQNWhaEDZC6lPy%2B6XumAABj%2BQX4hjHY5CesbGBAF"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:26:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0f359a7176c-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d481891d-f163-42ee-8d8f-f59f885ed29f",
    "X-Trace",
    "2B3F0943B1E6E469A4B33C6E834FBE401449D3D5DE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zt15XpwVSF2oGXouwW5XaaqY5CRbp3LTHa6zWHZ8M9cXsLWZwGVPngLsNNNXvsaQhRBVIs6yTbOw2Qm3D3%2BQ5BgwqLTiBsW6EZrcmhIZx23ECcYlXZOyDtMx6vBSgZjE"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "41fb3703-079f-4db2-ac39-47348b639e1e",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0f46870e730-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "41fb3703-079f-4db2-ac39-47348b639e1e",
      "X-Trace",
      "2BB0BEC74690CEDC0DC76FB5795C92709CA567F24F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3zoJ21yHje4Kh3OKphs%2BTsbptndadMrdRssljpEXBSUQGdQYEPfJ5%2FlqSn%2F9R16S4HWRcjLUpMNwJkLiYX3X0NshfVGJjVajrSCznVd9%2Bu0LUnhU36grRdI1jVVSNxWT"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860292738",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292738",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:26:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0fc1bde1982-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "35465535-cbba-41eb-a843-22fba3919922",
      "X-Trace",
      "2B6388EB4FF305EDE113DCF75AEBAEE18A59494076000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mriPdpehwGciW5O4DXVeg2wR9POoDXQWEbSuq5HN8JrPHJy6vBI4xIBseLMnczoFDfa0iHZ60S2e9LK6kW2KmiSEVJGgtg9LbI%2FmAKZOfzWgJyIAHyw%2BPIg7h8lbaPe2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:27:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c0fd2f5332fa-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d36b7907-b0ae-4c17-a97b-e368622e3ff2",
    "X-Trace",
    "2B75F9AFBE855525046F71BAA75587CDCE0A7A0CE8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZAeXazhQLbtigntPhVTKoYl5iORPkw2QQJknoEPMVG6GPkVWRBNw0CDKgpatO5MvIcplowv8DkckQUeePpZoDyNvo%2BnkJD6wHaMVcGpdtgKk7tPDrrYSZ4l6ixZn1i%2F1"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "860292753",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292753",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0fe0913e744-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "37914ff6-3e57-4ff1-8aa2-835803e65770",
      "X-Trace",
      "2B2D801EF85C91E7A8F69837032F73CEC66781F09F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=o04Bzbvqs3a6nAIuLDDLh1edd3BLFpeMWoeeZgcShXFSEBThyzecdoplsnpSIklHJJkJud1IDC1xVZxiKdwn46vCEfg4xZf9AzZQzFw7vlAXYNXttTO0izOWtnSbZTpY"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 2,
      results: [
        {
          id: "860292751",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292751",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292754",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292754",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c0ff184e8cd6-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1cf4d2ff-d346-48f8-a997-56085aea349e",
      "X-Trace",
      "2BDDB717D1F036AD2DFEA68C5E5E59F68B33092A33000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L2FHa0tSdZiJYwAvUsxJxMrNBg8n4htjwWHRHNWddgddBGiKgafEUglca6IA9nTvSA7OvQ2TeFjwCUy3EikSqHYAyj3HzecirGWC%2BgNJHGjdfELoJdtKEceYEzBet0BB"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:27:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c1000bd30cf1-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d7f2023d-0413-4956-90c6-7ccefe3b4365",
    "X-Trace",
    "2B06A37CD589C5A474CA9FAA0F7A1401BA029AE8F0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=26kXMZuLULY3T4R%2FGsq3C36scggtObj9soCJZGIzPY0BBlCfClDyF01I3YgniH%2BrpSyMO2yQ0kjRg4Jo%2Bzwlm1bCU0tHLzobWkLsIe8kyYThZWdV1UyKq%2FO0lnJccqJ7"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    properties: [
      "first_name",
      "last_name",
      "text_field",
      "number_field",
      "date_field",
      "grouparoo_object_property",
    ],
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "ac913393-a25a-404c-80b7-61b252ee38c0",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c100ee5119f7-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ac913393-a25a-404c-80b7-61b252ee38c0",
      "X-Trace",
      "2BD5946BE9BB94DBEDC3CA7786CB2894D5281D93A1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tzRFTmVtgaSOL1AmBw7zF8RlgxjfcPXdwmVJRwuPuqL87Dv%2BEPxlMpiKtinHiWhglNZzYdrKZfY3vPYhxCyHRVdiHGjPKchqagxq7Alry3AExgH3b57UqnFANlSTLJmR"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292716",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292716",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292722",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292722",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292746",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292746",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292747",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292747",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292748",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292748",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c10978ca17f5-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e704eb1e-623c-482e-b8f4-13dcffe2f387",
      "X-Trace",
      "2BEDE63C3C3DC0E05ED024460DAF0FF1DDD21EE6D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ynXYz9Zddp3sMltSNuMF76FE%2Bm40Yv0Xvn6NF96Dv%2FMoktCK1gQDZuHq1iU2bNgpdUh%2B5fv61qXkxZRFws9MBD1O0e4sWgf5tzQ54YT81fac0Z1hfQTAICxbFBJjjV9q"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292709",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292709",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292717",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292717",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292718",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292718",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292735",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292735",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292742",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292742",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1c60c3c3300-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ace16093-0e50-4126-829e-60f336869058",
      "X-Trace",
      "2B4E1DA222C20B18EBEC737EBF0463E45E62A69EFF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WNwA6s2SzerSXa5v05pPCgOXJYEOULx5tZCst8cOCxhYQjswEq7G2dQ7gWN2konPNbjy8xoKPy2q0pNipa9KgpQHxzFDTETLiFv%2BDs7dI0iBaIseCG6m3%2BkyLay0mUpy"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292711",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292711",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292713",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292713",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292725",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292725",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292728",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292728",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292740",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292740",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1c71db632fc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "86d44376-636b-4947-ab8c-1ab9043890d9",
      "X-Trace",
      "2BE81312C501C42DC6568723999505F313FFBBCAE2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nasytDsmU%2FxPBxoQBtMGT4zIIhwI6ED2Ucf9wVyXDEY%2BwqOtqSvkrZ6iu%2FfUTZZVXptoSRKGcFtbaDguqULnftfxV%2B06KWtkX167LmurlhqmsJDWXDFfY2CGvgRvf0MW"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292712",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292712",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292726",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292726",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292727",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292727",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292729",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292729",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292739",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292739",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1c7fe708c06-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "384fbede-010b-4b86-a725-b2e316d385b8",
      "X-Trace",
      "2B968398D662BB0DDCC03DB9D7DB095B1E9DF25DC7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=6FGO45txcfam2lyLAbDW2IlPOIkqiRFLjmJUrUhspmpk5fooEVc8IdBKVQzlpFZcfjEMRNVbHLIq80CDwX2R0kSpHYAzp84xToEMckzEcfXSxI8x69h930CKF5EIzfg4"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292721",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292721",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292730",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292730",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292731",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292731",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292732",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292732",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292736",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292736",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1c8db88e704-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ecbff946-06f8-4638-ad31-96983c9f5ca4",
      "X-Trace",
      "2B6832FA8C2BEE0F0686CFADBE968A34C0CF69A3F0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hjBYORX0qK%2BhQqo%2Bb8fHh5A4iO2UtLj%2Bk%2BKiLnLL3xHL133CngFRPAJlnfecaJcd3igKTpKr7UQHiKQw2OIAG6uuc%2F%2Bmxa1iDXzektMNlYfvNCa%2BwNmrqTMNc21zeMoV"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "207dcea5-c621-4d81-ab68-3058baae2df4",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1c9eeee8ce0-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "207dcea5-c621-4d81-ab68-3058baae2df4",
      "X-Trace",
      "2BE1438DA3B40C295BBBC3EFAF0E5C6357F4DE2F8B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F0rPmov5htVU9Ct93y%2BfVB4mKQ7YVSOlDWrYdvocCIotvNWytltIX1fS10%2FsmFk9K3QkyzjFfyGvDNdn9SQBD5e4wHjYJRmQ%2FU7YzCvOVN5U29Nsg0Qm1PmyTaClz2L2"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292714",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292714",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292723",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292723",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292724",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292724",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292737",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292737",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292738",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292738",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1d0e9c1f029-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5048d6b5-ba74-4f4e-a532-724fc1c1a448",
      "X-Trace",
      "2BF53D48D1BE59DE6145AF93DBD6F676C9B9FE6B52000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rkc9gL3yEkFehVi5eK%2FqIeJSltPVRzx%2B4jnOAJPi9ejl8vPG1qYGNYxHYuGkTqZkDLRumQj%2F%2F4A4tzGQoPISu3DxjrQHMU1LY2%2FtJ7dX767YwLHRHg244oyxEP4%2B4YNn"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292708",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292708",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292715",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292715",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292719",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292719",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292744",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292744",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292745",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292745",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1d1dbad17f1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fd907b80-3594-486e-8f5e-456e3e7cd9b5",
      "X-Trace",
      "2B64A78D48CF42A868111C908BD8909FE22F8BC227000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LS8003NdoCUPRAU4HTdNJ5GjuFYMIGKCCSGv0uaSDnmHBagDJYYVAXi7TDFn5BPqkSq4oEdW3afvrZlTMriv5vBUge2fOnoLRXQ4zC5qNHcuMCYLrpyZ5QZPAe3gPDWI"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292710",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292710",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292749",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292749",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292750",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292750",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292752",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292752",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292753",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292753",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1d2fddd19fb-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d80625ac-3944-4657-9733-c66c37575ccc",
      "X-Trace",
      "2B3876E44EF254CAA973777CE58C330DB112874386000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tlz5b8%2FTdoroCIRx6cTLpSVnPHf8r1XXvuteRGIDNiMA%2Bg3oGAKG6bEbEqHx0GO1OJFPiHlNOCrJK0KbP%2FWcL2NalzSd%2FCci8DMCzzDiaUKlsYaDUOzngyIw7yWGvgdN"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292733",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292733",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292751",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292751",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292754",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292754",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292755",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292755",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292756",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292756",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1d3f9748c83-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "42a9b9dc-d8ec-464e-8900-1cdb4bf32f5d",
      "X-Trace",
      "2B940AC510FF500146666EFC02093C86E7FD72C159000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0M8KLTW0%2BgOQ%2BZdf%2BDMvlo%2FAjAPIU11TYc6Bjdp5YJSWD5XR30E3xmriZx8Do%2B1SP5NmDccx8SMFZe78FE4HXCqlNLFjckgVUsRxKfNocX5ooCe%2Bw0gGjZuriMX2t3Sx"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292707",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292707",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292720",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292720",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292734",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292734",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292741",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292741",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292743",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292743",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1d4ec258c06-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "dc643782-2267-400d-b559-b3cdecd6818d",
      "X-Trace",
      "2B3E05EF28A47E674E1985FA039BED654A0E86476D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wz7iJ6VuN8w3G9A0BEljQ42mvM7qBDkQyYF27ZYuIF13zPISwhJADWVotCEr%2BMOQJpy6DSk3MsGW3b4ZtNcGD%2B9x4W6HZDsSPPl%2BsFsfiEiSEnl4bK6NSwehbQ7QbKgQ"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "16728cbc-6802-435d-ad32-9189c06614bd",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1d63b8a32f4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "16728cbc-6802-435d-ad32-9189c06614bd",
      "X-Trace",
      "2B14878840933CF1F017395BE06581FB548100BB30000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P7iE8y2RLL0wBLGBkAEH15Cb%2FnVUX2NvKpPLxBLsirlMb36knRovFUJAqiHL6x3VwgLT2ENRlsweS6ECPAUqXKxoI7KCSEC7yLc4GJO7YUeOcgbla7%2FYjoDqosmyt2UA"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292716",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292716",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292722",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292722",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292746",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292746",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292747",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292747",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292748",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292748",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1dd1f5ce720-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0c7da3d5-bca0-40b5-824e-e35642062e4b",
      "X-Trace",
      "2B34BB33879BCBBE97F096DA7D42EF35FDB90810E7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=C4Ws8Nsfspdf54n5RIwugE5JTzJS2irvb%2FgwnEMtQ5j1EBgDegRDCo9LjdiAhx%2BQGIXgVvZaqyK6rmigW7B7hvhl3dPRjSCwolDvlkVicUImpk0hqu0wPQMgL229%2Bvg1"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292709",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292709",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292717",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292717",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292718",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292718",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292735",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292735",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292742",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292742",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1de3e8e8c2f-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f56a0535-b55e-49a0-9f57-d5a6b6f849ba",
      "X-Trace",
      "2BC832A917752E226D2D4DA64A54423B4E0FE49CE8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FnkVsIebz51q3xnLnYFl%2FLepOLkr8YumaY4g8ZMGgMJPkjM%2FehSBEGwmJ8io2NIao66kUJJNR843bXyBtApe9gxwH3Q3sAkSG5frbJliO6mCxBxi2As9d%2BaiCm9NZhZl"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292711",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292711",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292713",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292713",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292725",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292725",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292728",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292728",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292740",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292740",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1df1af38c71-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "62340133-ae47-4922-887e-b41eb348a6e7",
      "X-Trace",
      "2B2EFA3803E2D4DAB9F7C9B06182EDE106F807EC9F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Xq%2BNNRNB%2FvyYuy8t2ecLoWyEsz32hXyWG9l%2FZ7wm67GIJaZf5laEDCS5aZLsMKSb5jp41Id2ZjcXUXXH2d99VG4z6K33ryQWEzmmZJ%2FW4bYoZh9E2kk7j3GELNGsHL%2B%2B"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292712",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292712",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292726",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292726",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292727",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292727",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292729",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292729",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292739",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292739",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1dfef1118c4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2429b6e9-bd3b-4e85-af3e-70b1ce284ec1",
      "X-Trace",
      "2B1709FCFAED037BB6E264201055553BCEE2A2A3A9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YeDsl3MQx5oDc4aZi3frbMiAASavO%2FWxJyo59li8MiBQeGSKQD8ppyqgEiYraQMrS5ByHsAi4Zb7zmM60u6ld2%2B2nwjTK6loMOWRDxrKosHGr1GdfNpBOnUmptvtrKdE"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292721",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292721",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292730",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292730",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292731",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292731",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292732",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292732",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292736",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292736",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1e0cf670cb1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ac4287c3-a86b-4545-aef5-87347d7216ed",
      "X-Trace",
      "2B6A7BD7EC718B2C3F5EA21DDF236679406F528F51000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=V8m2eYG1llxp0AtwbjFpXEMHCjPbzkI5afJRuPoUcTJxoS%2BiEcNDEsSJ%2Bpdjsed2CVI88VfA6ZW3hdV%2F%2F0rNjQbv8cOirqwXZbp1RIDihEC4xlvJ3T4Rqbk7WIgrJT8K"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "7523a5e7-897a-4e25-9e3c-e3afd61921d5",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1e1aaa41811-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7523a5e7-897a-4e25-9e3c-e3afd61921d5",
      "X-Trace",
      "2B74C8EE2F79FA1B964B3303DA5DB209FD37433626000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YjrFYpHk0W5BPVpCzR35GdOfVvbcshoDwM15DTiUX03PKcRtZfV%2FfaFhWdUJTaWRxfbnnxxxu6uH8zpIbi4tUwbZHr%2FW6S8O5ZK2HMm7ydSBBQCYC%2FvmlI1e0ey7uX%2Bb"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292714",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292714",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292723",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292723",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292724",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292724",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292737",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292737",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292738",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292738",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1ea8d96efed-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a43e8b3e-53d8-469c-b27a-dd8418f2641d",
      "X-Trace",
      "2BD89A2743DDBA995433AF0868652E913268A1F54E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hRIOHiNZzOBcfnYSOfJ6SjSv9JMlohGKH6gFOiat%2FClZK%2BnINZ%2Bm0TlvsYwpIjE1%2F7WE5zP5Y2M0JkLRD%2BpAiKbBHIlBo2dHSQlRBefZr2%2F1B2n6rKty7mngN5T7J7m%2F"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292708",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292708",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292715",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292715",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292719",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292719",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292744",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292744",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292745",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292745",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1ebaf331a40-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "468d69a6-4d4d-4a15-8ffd-cce22be8474b",
      "X-Trace",
      "2BC4EBBB264DBF64FA531879826862565EFDE1DB53000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=y26L210It5r1v61cZ3RlN4M5QWYzqvHL0nGDvKsQvSNLemRPC9KFYSXEBiSyqObgIGvm6O7yqYGa0i7N69j%2FCWIqRePIDSRPVRJurQZVoBVLvrGhZvWo0J60h4%2FBVxuS"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292710",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292710",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292749",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292749",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292750",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292750",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292752",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292752",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292753",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292753",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1ec8a9eefe4-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3472f0f0-728c-480f-9b22-95b277287c08",
      "X-Trace",
      "2BE9DB76CBEA89927EC488E2DDB90A9334684DD28E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T19GrhA%2FZqm2WElTp5R9%2BeH6Ybsj8i7SgVSOANhs0ie1BbPudSSDxbWN%2Bzk4usir7HWgDf4wlRNGaNtm4SYCyiW%2BYWxFScs%2BGiGkqOt4lmGh19PGXnojnF%2Fdv2adD0wi"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292733",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292733",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292751",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292751",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292754",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292754",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292755",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292755",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292756",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292756",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1ed78f3188d-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ab41b346-5ab6-44e9-90a1-994d4e4730cf",
      "X-Trace",
      "2B807695FF5015960A259885393A2222572D2DF250000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x1rnCoyzUBzMcZEdea7kf%2BJIAMqxgHcHCE4bL%2BcUuq%2BEx%2FAkwHxlO9TAgohdm1fIWl9HEetlFB7sU8%2FazqazMq0aTrllm4KqeeHnLgGFwCC3VUOfovSeXjbp3ST23v56"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "2df991d0-b4ac-4a82-ad2e-0a8619f073b1",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1ee487c17e9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2df991d0-b4ac-4a82-ad2e-0a8619f073b1",
      "X-Trace",
      "2B3F0D02B121828484FC0DA610EEA071123B16A808000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lbaPuedk9FsT%2FoSv1CY2BiGRm%2F0cOBbJKS3piXoOfgCI%2F%2BXbd3XFLJHU17IYv7gkAL8qaVEuq7KfPEOOkq5EAlTa3uwMa63IgU64%2B%2Bg6hppWtK3p%2F%2BEbon2VGKO99ICY"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292707",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292707",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292720",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292720",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292734",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292734",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292741",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292741",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292743",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292743",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1f65a67eff9-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "775216a7-98d8-4019-81d1-2d871ed40f2e",
      "X-Trace",
      "2B67C39A5724B761899F449B0B1EB045BA723573DD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1NNHW%2BSkKSFG%2FbTY8DqUdVFzQImR85Dlq1rFP6LKFj%2BBqd%2FquEIFwK%2BSCC6HaFQrDQH8m5CQsBTqBIlpq13vaNFWLH5CLQNipc0M5QCytnghARlI4cyg2WkjwXPQM73P"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 5,
      results: [
        {
          id: "860292716",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292716",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292722",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292722",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292746",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292746",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292747",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292747",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
        {
          id: "860292748",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-17T20:26:57.818Z",
            hs_lastmodifieddate: "2022-02-17T20:26:57.818Z",
            hs_object_id: "860292748",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-17T20:26:57.818Z",
          updatedAt: "2022-02-17T20:26:57.818Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1f75e958cb1-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "01f3813a-4a7d-4fb6-af35-9ecb28b2666a",
      "X-Trace",
      "2B5173C37C77CDD97B2BD8EE9F7D07C879B26861F1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mG2Rq8LWStB9wKdntSHHH35jEdePSdOwll%2BEmFzdjJIqgRiNSjmfIuzHyJ150XTt77lI9gyLZVBN%2BxOTtqCEYLx9IwQBrbQFkgljSkwUUyjaIgTzoy9hkk0xrnXiUddl"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860292709" },
      { id: "860292717" },
      { id: "860292718" },
      { id: "860292735" },
      { id: "860292742" },
      { id: "860292711" },
      { id: "860292713" },
      { id: "860292725" },
      { id: "860292728" },
      { id: "860292740" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:27:40 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c1f82a3c1977-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "52b4c3a6-cdba-4150-abe7-6e9c617ea37b",
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
    "2BC7D79E7AC816E4B2839F9C3A7305503C4710E380000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HRM4Qg9leIGdBO6eZLFG2zDvQ5JF9NnOU3J2zgo3kA5lS%2Fh9PqoQpmbSZoviomU%2FB0keA4TElimzAIvZQ9iadqV80CchiwL5L1Mjx1LWGbPc%2FH496yjjGOC1f%2FlnaKO0"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860292712" },
      { id: "860292726" },
      { id: "860292727" },
      { id: "860292729" },
      { id: "860292739" },
      { id: "860292721" },
      { id: "860292730" },
      { id: "860292731" },
      { id: "860292732" },
      { id: "860292736" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:27:40 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c1f95b208ccc-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e3703b4a-fa5c-4b22-83c8-26d795c659e2",
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
    "2BDF01E6AF74B0A1219545233BD12EE2C9312468E4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=L1H9WR0M3do%2BivbLUjMkSNizI%2FNR7ZWcHtchaiLU6iwONQj6BjOrJLq0nfnqaxfZ5izU6ieyUALXL3YRCCS15Ds564%2ByN%2FnSDzjTsN26vE4y3fSSTUH%2FvyQJb6CH5wnL"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860292714" },
      { id: "860292723" },
      { id: "860292724" },
      { id: "860292737" },
      { id: "860292738" },
      { id: "860292708" },
      { id: "860292715" },
      { id: "860292719" },
      { id: "860292744" },
      { id: "860292745" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:27:40 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c1fa6e6a1819-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3e658659-9c26-4493-94a0-3e46b22d8fcf",
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
    "2B19CA9785991495387F77CB02028EFB883CBAA0E2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wGGkhhlTQcCYb0D8bFky8EQQ1ioJ5KaQqMjg4URJL10MP7%2BAPJtvlzHUcrwE4bh0SUUahXWvwmYx5nEgCHMPQnOrfA3vpT5vSY6sGZVMQEUZvjv7hH4%2FryUhRWd8vS7n"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860292710" },
      { id: "860292749" },
      { id: "860292750" },
      { id: "860292752" },
      { id: "860292753" },
      { id: "860292733" },
      { id: "860292751" },
      { id: "860292754" },
      { id: "860292755" },
      { id: "860292756" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:27:40 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c1fb88341a44-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4386d4f1-9ff7-44cd-afe8-9cab5426a164",
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
    "2BC5279F3A9C06BDD73421979A3AFE43D7FC5910C0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZWdVA%2FRc1kJPlEvdEAPyEsLkzn8RHpLSzi3wExhiKCo%2B7ii9SpsLJww%2BrZtcp5K0lM%2BW3YorOJq%2FZvv7GHpUdDapc9V35MS24pAlApwqEnCTcChyRIrEu9lsvdE1AEro"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [
      { id: "860292707" },
      { id: "860292720" },
      { id: "860292734" },
      { id: "860292741" },
      { id: "860292743" },
      { id: "860292716" },
      { id: "860292722" },
      { id: "860292746" },
      { id: "860292747" },
      { id: "860292748" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:27:41 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c1fd69868c0f-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9ae9ae24-48d9-4392-864c-b47726832572",
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
    "2BBF7C1CEC28B98BC2E1E9AB6CC9E06A9EFE56B5AD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=17wwmA1GDFphtnPikFaadIAMWliBR0IOFZ6TdBjuT367ECHfYem8aCrfC9Hb14fIf1zL%2FI6qFRvo8xVpBRpMt0%2FETmXuJHRqg1ftYeOXjWYtPBYTkmYhDmzu7okSWYhB"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(
    200,
    {
      total: 3,
      results: [
        {
          id: "860320431",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-17T20:23:31.632Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.434Z",
            hs_object_id: "860320431",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-17T20:23:31.632Z",
          updatedAt: "2022-02-17T20:26:20.434Z",
          archived: false,
        },
        {
          id: "860354935",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-17T20:25:47.455Z",
            hs_lastmodifieddate: "2022-02-17T20:26:18.214Z",
            hs_object_id: "860354935",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-17T20:25:47.455Z",
          updatedAt: "2022-02-17T20:26:18.214Z",
          archived: false,
        },
        {
          id: "859992886",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-17T20:26:20.577Z",
            hs_lastmodifieddate: "2022-02-17T20:26:20.577Z",
            hs_object_id: "859992886",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-17T20:26:20.577Z",
          updatedAt: "2022-02-17T20:26:20.577Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 17 Feb 2022 20:27:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6df1c1fe9dac8cdc-EWR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "81ebc7d1-08ba-4b35-915a-8b23a0944345",
      "X-Trace",
      "2B1CBE2D421F4E16F3AF15A8E9E182172CED015FBA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EgAoXRixagwE4WmHHXMalUE9lJzmJlKaIB9qy25rmxrMY1oEvPc6dBq1OpcQVgzy77plOghuBsX4aB1S4RHkMUMUWUIGqKHa18hCoSUkyZuhH%2Bm9eJso95DUeooTZSEq"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .post("/crm/v3/objects/2-3604285/batch/archive", {
    inputs: [{ id: "860320431" }, { id: "860354935" }, { id: "859992886" }],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 17 Feb 2022 20:27:41 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c1ff8833e748-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "be8a75a3-684e-4a83-b818-6cf17e1732fb",
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
    "2B1D5AF2D2022F3C1986BD7733D008BED53043768A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bLK%2FfVnQNEjJkTLdPjKc%2BCUvUnY0u4PqkCiBinTLFpcgxcTcDDJOrTQWaj3VNEem0C7a0LIDVwuKTZD%2FHwkw5GJJkQ7QhCHHaPpYH1PdEcWJeTc%2FGYW8aUkaxMSFBmv8"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
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
    limit: 100,
  })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Thu, 17 Feb 2022 20:27:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6df1c200abe1e760-EWR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8725ba9c-76b5-4789-a18a-698c5ecd0f06",
    "X-Trace",
    "2B2955ECF7E9D4E44488C21EA879CE2ABB21B3B0DB000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=c6%2FdbH1%2BRTzTCHtKc6hwfNE9irroLpmjCgW7y5EZWr4pGxUep8KywkSxA46ZutNBOAaknNruTphzjVQGLOMvXiFzF5TJOHHfTSclrh94hIoE%2FUubBzVJ1WRQxiL7MGMS"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
