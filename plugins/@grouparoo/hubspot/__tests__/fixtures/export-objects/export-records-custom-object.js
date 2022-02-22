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
    "Tue, 22 Feb 2022 18:21:27 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bf6cbc82749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e09b9cbd-670d-49bf-8f4b-a8fc6e7699dd",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248569",
    "X-Trace",
    "2B2CC518BB7E7782C4C7E0A5E9CECE33BCF6077A7D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Fftgl98PJFiveK2a1LjnyHkIsAKRqFnAzDqotukIiU6b7aN4wdn2o6Zt7oZSlxxXlo9E9R6WOeGCRRc5b4APJVibsl05Q7i1JqezlXueVIHCsJmP5JGRzzHv14Vt03%2Fp"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:21:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bf90f522745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "74e91bb3-3a3e-4370-80fc-e67d9742555c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248568",
    "X-Trace",
    "2B90E2930A26E0AA2C08E050D73E5EA4154073FDB5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=x21JG%2BgyQKs%2BXpWc%2Fxb10t75js0WFGMxKLkuJ1XL2Y5kVYiLmUTN0%2Fi5sOG4yGzy3bmhiwPKfw3MlGaegrXKD8UF%2BWjRzSznaIkw4pmGZRc%2FbiWHY0UKh2n69kSSmh%2B5"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:21:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bfaa916cf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "695872d8-4b99-49a4-8021-cd9cd0758c87",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248567",
    "X-Trace",
    "2B12003A322CB65E40E2F741157CAF3D8DD5DA7997000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2F3xu4F9o1sUjx3oThiSPeTzy8wOn6Mr1K9VagpvxQkfv9jHI3YqKhHtSAtmPbgArPHBljohCeCzEheVzQLso3q6lm6Kmv4rhkUFPf8e1gRcbEaaZDcR1SrzFpiJs5d2P"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:21:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bfc6b4e275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "66f9f824-b5f8-4104-b9c0-7b583c2a09d4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248566",
    "X-Trace",
    "2B253A7D799EBD5FEB472D9935DA48622CF3F26238000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rIeTxVTGaedXSjKN9bmdDxSvSzQPJydYoi%2BNnXq7mLO%2Fr4OpQ%2BC%2F84qEJPcqeIOdaOb4A0XPpkXZPGBdUeI5jkBhTauLVl2XvQovrqcto5d5GySH4LIL76z%2FBzq%2Bnm1u"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:21:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3bfe2ff5e08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "805c7a2f-a790-4c01-8eaf-bc17aceadf04",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248563",
    "X-Trace",
    "2BBC023BE82A4ADB2C895E56C41D6B77299AA841A6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u%2Fjys2lfZIkuXgQ6Lms8MuCeRn9heuHk7wu0vayPAj9yikdv7R34ZfCz0PxvzKmS9udEod3bBBxXSa2BJ77ps30Rd91U%2FZgYXm3Vy3GlPIvpqQwni49XeU7AukM25U1i"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:21:29 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3c019ad92743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0d2b5ace-d140-4dae-a765-5fbfbb7ab3cb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248561",
    "X-Trace",
    "2B3A61B7BF00ED9C5F7F541DFF31566340C2836FBE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B3hTtAdqRe9M7B3wXBd5DzfG%2BUGkXv4wXxRb803xwiNsZ6gR2xauydcHD1sik3kSkrQGR%2FJIzm7K04xpQJZGpDvk405%2FqFW1wqN30yL0iXrjPGioT2VvXiaj1BhqQO%2Bg"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:21:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3c03097bcf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "546ebf7f-b3e2-4cdf-8e40-37ee4c3c7400",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248558",
    "X-Trace",
    "2B2E663A3561D9B10FA5E9FDF8FC6BA6C55D914652000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RBJ9DwfdYiQhFZiPj7XcVP%2FeZxDBs57x0O1jfHNCUutJSXjBHMIlaeGC9AMZcW1Z846HnVLk9KPQUP8DcxQB14cP6O9P04DxFAaHcSii8QiR29wRRA%2B4QF43w7RG905d"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:21:30.276Z",
            hs_object_id: "886431351",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:21:30.276Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:21:30.264Z",
      completedAt: "2022-02-22T18:21:30.356Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:21:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3c0799ae2749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "eca81902-edfc-4feb-93ab-2cde8c8bebee",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248555",
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
      "2B4F019371D1E00D18C4F32DAE42C613C7DB0502E5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WaqYQpquxD%2BzfckcZnq0BUWOPeUVTaisrUiSXqbYy8PYvZRUJh%2Biydva4AdBM8GjxLermYDZhbg3MVgcctrNJW3Kn0V6zAEj6TOCULLnr%2FLz%2Ft8EOeId1NM63ejBvcg1"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:21:30 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3c09f9bd275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "60a8540d-97e5-412c-889b-ae4170eeac65",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248553",
    "X-Trace",
    "2BF49BD225138AA388B43C22B3A14D7B6C707383A6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pX8CyDTlKYJwvhBnvmKgx92KIWUqCY9GfmP3rqPT4P9L%2BQZ3dTgQKJuqF89W2rhq%2BGCZwl4gQH6lmH6roYR3uArzq2vJ5YO3udyHvEjjkM5s4fun9JMkWMIgP0LwmJtK"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:21:30.276Z",
            hs_object_id: "886431351",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:21:30.276Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3cc72ae62746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3f2fb9e2-9cbc-4e6c-a075-402ce351c730",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248474",
      "X-Trace",
      "2B604376E3DB40CD6B67B534E4F46A8FAAF71984D4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q2u0ZbQm3cOIKuK8O8UtGYXX3iJH3jctJYGv8wZt8pA8uV87XEO2F5s33%2BrtSQiX5rSlc%2FnKzoQalHt1WHVNrpxwU8s1OM%2FOxzQTHUUTD8JTXq1r8yu6POIctZXpDj%2B%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:21:30.276Z",
            hs_object_id: "886431351",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:21:30.276Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3cc8da942743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "995797d8-af98-4313-ba80-3afb775b5a3b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248473",
      "X-Trace",
      "2B01959F1837F6C5D3FD430D67BF4FEA89F29D0FAD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DJaz%2BHoMSPe34L7FNxOyEsIv2dNFF9vnK8dQgLedGtuvQVLNElA3uHy%2ByLQXogtr9H3JangPcDr5JBgUzi7f8LAFYkRErDFKfs%2BSEHwdf5ZXdqxiaxWnyTanLA%2Fjk%2FTE"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:21:30.276Z",
            hs_object_id: "886431351",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:21:30.276Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:01 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3cca4bbae084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1ae9f15e-8503-47da-89e0-ad5ae676f4f9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248470",
      "X-Trace",
      "2B4A18303506D6D019CAAD703DC1C9C41DF93F4154000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2t93wrBpSNIa8i6Xmtmr00fsXQbdchzrVxn9wx4gwhPYdqPcRNG9TlD3vCQpEEeeMVZ7KslFqg3fxLSSXmCVse1S2FWwP%2FGkksbqo7MC8saroUq1pwFKR5n2klspJjj7"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:21:30.276Z",
            hs_object_id: "886431351",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:21:30.276Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:02 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3ccc7901e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c3a01fab-f873-437f-88d7-abf502192d83",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248467",
      "X-Trace",
      "2B48F17EB09A0F6DC64245942E03F818A10DA54C10000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jgsKWL5wMtGJaf4ww9hHCM9wncBE8siPSgNtovraZ4J%2FxCbs0qM2wpgmaNlPTkkhUwCLBoE%2Fl%2FwEfUcuzjGNLSu8oR8IXXEW1%2BuN6GEi33mVHEQ8bencwhOgsveELOOQ"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:22:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3cd149332755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "eb920d35-244a-44a1-948f-a937bd83d44e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248466",
    "X-Trace",
    "2B11174CE78722AA253A4F48071B0EEA7BA250F1C0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dGAuGMpJxMd52AVsUf49zdb5dktURCQMPyc0qwlWreiN1WIt8nsEiDLmvWXpPx02YFSpv28Xk%2B3cwaLTt0YmitC%2F1%2BhaWnrpUDpENKLn%2F8RzLqyQL0z1s3mUz3X7I9Np"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:21:30.276Z",
            hs_object_id: "886431351",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:21:30.276Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3cd31974cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5aa462d8-ade3-45d3-ab96-d55e1cf591c6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248464",
      "X-Trace",
      "2BC9BB87A3CB7B3D5C0992005DE952A03FBA59BCA9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Bftwk3Q%2FXS%2Bn9vj%2Fg1iQl603Es343faMZcx6AhZ9qU6Aeog4cIAszhw8xoPKffPt%2FGVZQv9fl%2BnE7TjYgyvDvqUOzqT4dfSQMEI7MOPnwRF5Y4c145O1CF%2BxZ75ouzux"}],"group":"cf-nel","max_age":604800}',
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
        id: "886431351",
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.163Z",
            hs_object_id: "886431351",
            last_name: "Doe",
            number_field: "3039",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:03.163Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:22:03.158Z",
      completedAt: "2022-02-22T18:22:03.230Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3cd53c61275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c7ae5923-4eaa-47e4-85e5-2c9dec1b5db1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248462",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "70",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "7",
      "X-Trace",
      "2BEA459BF5002591AE6A5C53DF39C79A8AC4367D24000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5Rz387cqG3BejE4xuxncotxE4zI5AhWqRUvuxKDbagbubrX0xai30VLEXeUHLjneQooS70ZkRFxcyroQJ5apvGjymQzx7ayAlSFLeLdYc0KjwVKB54uK07pQ1K%2F5PNmZ"}],"group":"cf-nel","max_age":604800}',
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
          id: "885942801",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.442Z",
            hs_object_id: "885942801",
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:03.442Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:22:03.436Z",
      completedAt: "2022-02-22T18:22:03.516Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3cd6ff84275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c81467c2-de58-48a6-bb3a-f97d38c65317",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248461",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "69",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "6",
      "X-Trace",
      "2B41373FDF48C933C125C76DC7027C49A5C9D804DD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GYGp%2BsjvC9KIBrlhUNREgEJnk8mua2tyYmD0Yz5CBL%2FuDQgT8SqUJDW7poemsHeZQ52B5QXIHl6vmD%2FBHjKotMdl6OmqzyntHFYvcRZsBpxKExwg5Vor%2F7ms3%2FoSb%2FJ7"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.163Z",
            hs_object_id: "886431351",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:03.163Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3cd8bb3ccf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "86407a6e-9476-4a33-b24e-0ed3ea19cb9f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248460",
      "X-Trace",
      "2B7A6369C9E8F69E2716F60D4BC0EA24DCA7286338000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hgJxvMG1%2BxcjiuvmvLpx%2F8qRzTnFA5zPVSWf8X%2F%2FsvHEteluMyVwhdAldSsd88G8uztf5zsoeEbF%2FM74Nu6ho58HD0hFpQc94lozEOVvXgcJvc2qnzwCYiC7MGtihx2n"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.163Z",
            hs_object_id: "886431351",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:03.163Z",
          archived: false,
        },
        {
          id: "885942801",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.442Z",
            hs_object_id: "885942801",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:03.442Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3d960e7fe08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "de8719d1-9fe6-48b5-8055-82ec9cd8c416",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248373",
      "X-Trace",
      "2B79C8C63F6383D0809AFA12B0BD42E709970C6BE6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IjJxYRv07u%2FPdBB5AEZhGJkGZt%2FSqF6QwSlnNKqoX%2B%2FNfLqrMV5zQa0bhOwU2aLS2K1%2BtX9Ca1BKak9RxXcfFtj94B9JqYLAw1nJ7Gwi0MrS%2BdT05logz4d12oR4CFDD"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.163Z",
            hs_object_id: "886431351",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:03.163Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3d997b1be074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4ecd3da6-df9d-4603-87b2-6b3fd57799d0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248372",
      "X-Trace",
      "2B60EDE255913E2C6115B2C252449D17AEAE98B3F8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9kzU89zlaEwyWo7UYxK5mFY169QadsUOK%2B4SU0%2FxNUQs8UuW8EUXRsdJQhVhq5oj4G4mMDwgN%2F%2BVIrjS9VKXz5totbxf0iyytsAaayzC5oHuRsPp14HkBXC9eYXg4zB5"}],"group":"cf-nel","max_age":604800}',
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
          id: "885942801",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.442Z",
            hs_object_id: "885942801",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:03.442Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3d9b3e5ae07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3657801c-ff40-49e0-b0c5-183f6d2a42cd",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248371",
      "X-Trace",
      "2B2E4040B73BA037974EB63908EFCEA532E9E7711B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dJFJGG5WLGxtd4tQ%2FRGpDb7vKLXglzRBLTsW1KD1akCaxB0f0WkcDwDWBza0zsEX78Mg25yazj6SdpeRTD6yoMKZaJTm7M0FrwiGJMEuDROxV45earf4BXB6HsljMquq"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.163Z",
            hs_object_id: "886431351",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:03.163Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3d9ceb08cf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f1871fb5-e326-47ac-9544-f727639dad3a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248370",
      "X-Trace",
      "2B0793AB6C0CBC24ECDAC6B6E49E8F267A09AF9ADD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bVP%2BzYHPrnmqDc86RlqyiiUoC5ixoM6ujjHyTlb24CMiFtd%2B1Tm1N6EmZvox8VfAUgLZ60NWxbfHtge6tOTww5xV1mM%2BpfFqdXxpnk99hSBnvel9q8YQ6L%2FW%2F3jMdor1"}],"group":"cf-nel","max_age":604800}',
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
        id: "886431351",
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:35.429Z",
            hs_object_id: "886431351",
            last_name: "",
            number_field: "",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:35.429Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:22:35.425Z",
      completedAt: "2022-02-22T18:22:35.495Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3d9e8ef92737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a0e8de27-3fc2-448d-929c-d03a578e33bf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248369",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "83",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "8",
      "X-Trace",
      "2BC472129C6492016CCBBB75D771942728841D9BBE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=I8O7kSP8Tw1lopg1ghsYPUYzObo5a%2FCCqJbENZWiFXCrDlJaUAcxWmRheN6mfj%2BxfMgfy0ISAf1Z9LhRNl0QmSUNRabnrIjCLMJet3HZC0wl%2BGXl15gCnruPm01bcwzc"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:35.429Z",
            hs_object_id: "886431351",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:35.429Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3da0abb62743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e2715f1d-808a-419d-8a63-510abcda8cdf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248368",
      "X-Trace",
      "2BA350894E6E4DE4EE9DF5A846C2F51463F8711EBF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SGsHX17%2BDuM14sJiwLfudP07tgTfezjMZ1T6RjRrhoS679O0n9lJV25d1wf%2FkAZL5E1ezhOBUVtAYhpvGgvtxmwT0J2EUjWGAwT64XHJHOhdHCS0L61pPsQLE0JpBxcN"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:35.429Z",
            hs_object_id: "886431351",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:35.429Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3da3ef722755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "30a817be-7949-4fc0-a7df-a059121eb6b0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248367",
      "X-Trace",
      "2B918BABD2626E2C76E33025BB745E79DBAD1CFFA5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=5m9EwCjjWZ2AHxKQ%2F7G6Z0QI99I6oiau2IotS2L%2FSrKZZcoomPy787OMbAWH8KZUedgZ8hWHkK2bLuuJQThhDQI%2BWfzOniTZXrU3U22EkRA1zectjykG8%2FxK%2BHPdwUq5"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:35.429Z",
            hs_object_id: "886431351",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:35.429Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3da5af27274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "02d67b34-561d-414d-9ebf-08ba47272a15",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248366",
      "X-Trace",
      "2B4CA8B993E1B4F4BC86C548B0A310DCB0421AB1B2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cBlD%2Bzv1akU0lyRvFNfUKlwftqJxp%2Fvf%2FJp6CTlAuqDAshPbTX3PFIIZO0oi97%2FPZSubomLEVAznkM2jEltMH4EJJJ9Y3oMutV54CgMwpyN0V6LJB3K2%2BuFTsNm4gKi%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "885942801",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:03.442Z",
            hs_object_id: "885942801",
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:03.442Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3da7187ecf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8095e46e-173e-4c70-a4cf-daf809931425",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248365",
      "X-Trace",
      "2BC1BFE7D77C5D6A1BF352A90803A094A6B74C8406000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Pe6P6KujxoqZlLswfSQ9XKzCT55LNYrJBwQsPd%2FUMYUPXLESOBCQS1c%2B1r5SBmfhunjBDJi5uhzRQVYRrDCf%2BJMH2eGLzpletTEY7PRrKpUSdBlEJ%2B4WV86UD1x%2BxQpy"}],"group":"cf-nel","max_age":604800}',
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
        id: "885942801",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
        },
      },
      {
        id: "886431351",
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
          id: "885942801",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "885942801",
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
        {
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "886431351",
            last_name: "Test",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:22:37.050Z",
      completedAt: "2022-02-22T18:22:37.094Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3da90b80cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e8e96c9f-6181-4e79-bfa1-e485b19b3f99",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248364",
      "X-HubSpot-RateLimit-Interval-Milliseconds",
      "10000",
      "X-HubSpot-RateLimit-Max",
      "100",
      "X-HubSpot-RateLimit-Remaining",
      "87",
      "X-HubSpot-RateLimit-Secondly",
      "10",
      "X-HubSpot-RateLimit-Secondly-Remaining",
      "8",
      "X-Trace",
      "2BC8EB8A2C7D67C6BC33833EA8A7AFAF703DA02419000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AJ47VNd5obz26HQIepoGsrB%2FOzZhIymT2OajOsHx4%2Fh1NWLITpghNX83pe4y4lmKDD6Z2XpZaovO4qWyZjTDcx6xH6Ni2aVQT5uF5H1ubjCP6r3pIsOwh5ctrqp6J1p8"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3daa9895e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "551df06f-c13c-4615-90aa-12caac0e6a2a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248363",
      "X-Trace",
      "2BBD30C3979FB0BC1673E3B871FCDBACD5677B82E8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EpjqpUEle6PdCxOoObWlWHqw9lEpWMw0V2TGsqEB%2BVHke7a9tEKkFbfj%2BrkPuSFeXsDGNCWiz%2BPasnc6pdKUVlRBUU9sFHQfWiStAO6HDroWXkuqQKFNvYum%2BlLHvWUZ"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:22:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3dac3c712749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d7262179-5d2c-4c83-b3d5-e9cb253f6cbe",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248362",
    "X-Trace",
    "2B70331BEF805DDAE07350CE87A52E7976C3E64411000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ln%2FmMtiDFvyrThdDOfyR3XukXLsCTs%2BBnUSkIEqpZjAaExzTdRz%2BmDFtnvc8Y3OiZ5%2BEZ%2FsvTaJBaGIcU9ZO%2Ff6szSa%2F4FX2rc%2Fhfc7%2FqBdSEbPMZM3Bdk%2BbWhE6%2FVI9"}],"group":"cf-nel","max_age":604800}',
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
          id: "885942801",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "885942801",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:22:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3dadbb4a2746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b7835c46-a085-4b00-882b-3ad9e1d69321",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248361",
      "X-Trace",
      "2BF3B456D359D04905922099D80FD01CD30DC19D5B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YZsMM7jeWX%2BJGwyGCS9XoCPJ7GiSawDPyO3ZSO9KQKTKOO5pqSmZN1YzBrD%2Bbh8gW7p1jM6kiE7yCSsg9jPVRYEl3xfkcjHdH%2Bp35dIP4K7%2FgkXGaNrjPxxYYdBrb%2BIo"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:08 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3e6af98a2737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9a12947b-9389-4d49-b85a-29597f20f8a7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248360",
    "X-Trace",
    "2B7C5B69C9705EA6A1FCA38114F094D41BC066FCAC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LfyYFkxo5wyejk2WRHJ0DZi95KBxr4yax8%2BkjmRzmTpXt1V7jiIir9RAoWLfSP%2B9FzYXLvLUsIF%2BOY2Tn5n1LtZgWMkFn62eiZeZ9%2FnLAKVkBBEZ9loSBEdpubvyxPWD"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e6ca84acf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8227d3ca-174b-485d-bc18-cfec7a37f613",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248359",
      "X-Trace",
      "2BFA2AA17C1494A48B24915C6704DF9E31D4440097000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Cj2aSFBgvjuY9UAoxai9ALYApKjZg4w9RMiTAE4t4Dy2vgIs736CT6AV4MmQensllzVJGkJ9uZh7CazRnoQbHVFpQKTnlMNsN%2FNJjk%2Fw3DoJg%2BCv8IOmY6BfKDXxYcoV"}],"group":"cf-nel","max_age":604800}',
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
          id: "885942801",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "885942801",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:08 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e6e8d47cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a83d1beb-1eec-4f15-a85b-9805b9e5d2cc",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248358",
      "X-Trace",
      "2BC2F31792819FC66BBB414316AD636683B03297A7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mgmLBQZRzaE4tpqmaK9ytOM7Xg4Z31f9pQxjVW8Y43mmPAFc8Qypeko7ftLZoh5kxVckPuBXKKG3pC1F5pRFXXyz%2FS1cYP7Y%2FOMIhXy4dOcRkEZwUqEsxRoK9ZceKdGN"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
        {
          id: "885942801",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "885942801",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e7039bc2755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d484be0d-1d03-47c8-8b30-f8d4c879ead9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248357",
      "X-Trace",
      "2B454B14893B786A99EECB0017BBAB50BA1154CA78000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uRhNPnsrgngRFrRP4TdjIRUCJdzy7NUqtSl2imtmVmDJhvhs%2BHHLo7H0XiB7yGD5CUAKH0e9JRgfb52DQun9avoEYYeRyOyDJojM09NJX08CBGTTHTjnUgmlx7xYlVZX"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "886431351",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e71edb42749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c1a01f5e-7b91-4101-8f15-3683fb12a972",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248356",
      "X-Trace",
      "2BB1C263475C0FE924FEE4EA5DE6979186C931BD77000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yJYixI9Zcp1eIpT6vtaYdG%2FjaktZtY%2FD4uAclxvjW8GlDxSqacKfMFfxFUeZRE7IazQsWJyQg5sBhiksQLiLpVnKQFKxsnd1jv3ycndRMnbBSk3ArNnXr0JuHXBpuso5"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e73a8ae274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bb373247-18a0-4fd3-a9d8-74f37c768e1e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248355",
      "X-Trace",
      "2B70E27556DE28C8DAB85617F8D5CB2262C0FA0885000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4hElce49gBpIKQv2tkZjPnkQMSzrqoZ6WRS0A9Q6ViUS827tYwZBwucAGudldVfJF791NDip3NMpY9ppCvf5sjLO5FDfDN1Vei4ArL9RVONuSX6sQYeP%2FQbnV20iXuJO"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "886431351",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e754c6a2755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9a77b146-1136-405f-8a9a-9ff4fcd5ec5a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248354",
      "X-Trace",
      "2B006CC9C52541AE8A278C7242206E53339067F145000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4sev4%2BsPynv28MeCzSKuc8mJPJlCYGjs2Kxw8nN5lZEcHtKeBtuAr6EZkv4yNcv1iYZhbo5csUKYitcI%2BeWahUMgqyULt6VR%2BBkp9A6BW5RKtbffijU%2F4Y%2Bj1KpI3Bvu"}],"group":"cf-nel","max_age":604800}',
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
          id: "885942801",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:22:03.442Z",
            hs_lastmodifieddate: "2022-02-22T18:22:37.055Z",
            hs_object_id: "885942801",
          },
          createdAt: "2022-02-22T18:22:03.442Z",
          updatedAt: "2022-02-22T18:22:37.055Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e76c88b2749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3c775eb7-04f6-4478-8ac2-0761969e0224",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248353",
      "X-Trace",
      "2BBC4C5736DC436CBFA21EED693C86429C6B362B3A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=C495wW4xbNYo3KEZ52tsC7NKectLyjn4s8HDTPN3y5z3DFhWCqPBN1LtZ4tMARpGFDOKilwtmN2CktVWTM3UuVw5lXE%2B1RP4siXQCAU2WYobb%2Bat%2FNBv2WqLGEsd3KP%2B"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "885942801" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:23:10 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3e78bc41e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9d490f73-0d37-450f-b361-44146d2ff88b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248352",
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
    "2BF0A3FCF993A7B723CE24FA7C119267ECCC2F5FAE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KrnsTqncXJpu8Jil1A1Zvvy1FE9Kn3il8%2FV4Hz1TM5kGyvH%2BHiC4GbAfBVzGWA%2Bw8MQLL53yWOHvvp4w9bJ5oOq2mwdHweuccoWQ%2FCCKf%2F%2FEUqdylKcuKw7pmJ%2FDIQKW"}],"group":"cf-nel","max_age":604800}',
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
        id: "886431351",
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:23:10.603Z",
            hs_object_id: "886431351",
            last_name: "Test",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:23:10.603Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:23:10.597Z",
      completedAt: "2022-02-22T18:23:10.649Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e7a9be82746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "89f0ceef-83ed-41ee-8b74-eb9233241d32",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248351",
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
      "2B9CA3C1EEC36E7D27959F37F605A695FC1B1FC66F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ExtLLckMzOMJnqerACkJsqz9T0Yyvywgen%2Fd3SjdiqDkY1ATMbqsvG43FANusj35CYCKorxikmToKWQNtHOUOdLP58n2Y8eWpbZTbbP4sxO%2BmqEuijqZcOsxvv4mDb9I"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:23:10.603Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:23:10.603Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3e7c5cc2cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "57969c02-30ff-4ede-a09c-e43639e086df",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248350",
      "X-Trace",
      "2B864D09B34057ABD24952D545FF5FCFF21249CA00000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R8l0NzOCTmeKGNfCMZMHazDBuTHmu641yDn1TRqcHVcFf3AsY5xA5NKXo2wDq0yaGvSqMP7sKJfS7nbc0BB%2BLGeSN7SKOyff9Fx7zl0q1qZongEDzwgswtKUMBbA9BzZ"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3e7dcdf22737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ad3cee9a-7780-4fe0-925c-dfd8015db6a5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248349",
    "X-Trace",
    "2B09BA6FCA68809FE89E567D47FD5E0BB462583C87000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KAoGJRyhYtkx6Ktg78Nbow4e%2B75Aib6O3BhmOjjDwGFcGKCfZTO8QpgaSH4QiFlTuKEY%2FCySAqrPkeUsoIMM5XoOIVPZ0Ek8W3DlGuV1wfmWEdoqdJzbv3YintBogAIh"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3e7f6b3a2755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9610caeb-60f9-4d6f-963c-b0aca57cad81",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248348",
    "X-Trace",
    "2B8F7C0CC792D21A96ADEB17DFC8E9530EB8ECA892000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vDzE2iULUmEi4rhlxxMT%2BznSP952jxG6EfHWkxySzTinthNHNqd1Qf%2FF3dlw0OkbAlhSMLEYcOj4KxVeumCwLxfaeNjHvqMdjWQdjFpsoHTyQvwhZc1TvNyM0LH3G0Sj"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3f3caf83cf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "dbc428f8-1b6e-419f-85ac-b6a6be08f286",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248347",
    "X-Trace",
    "2B4E6C2DCA3313CFF7B9224C9D1C5C19DC80CA26D6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B9z%2BJ1CBpeJR0u22bG20fqh6cMShStf9M5W3ilWws0neyUJCflL2cJFwSr%2B1dPHn7j%2BBmgGCFSwnjP5s4AFOFNyxafvsXlyu0D%2FdcDTR3SWupnlf6KmlIivy%2FrQa5Wcm"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:23:10.603Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:23:10.603Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3f3e7f972743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5bf803b5-431b-4ea8-ad73-8c4b62176c97",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248346",
      "X-Trace",
      "2BB22B70BFC8E84F6EAC59E40DB94A2FE8505D7E4D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lCoXZ8jqL3exuh4RrMzeEjIsT%2BF%2BdNnptYO5bF0XkzjsFGSrTS3wiFjgjVUvAcvbR3BYCCmh06K0NWVUDw8YuwLc58rcx2AF40duyMI7Rss3gXkgAzqp9m8JyzADC0yM"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:42 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3f415cf7275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4a06b8a0-955d-4fba-bc40-e50f37c36c71",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248345",
    "X-Trace",
    "2BB8D180B332969238EAEB60A03CD671C4A97B5EA7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hUdtvnbplTbu0zY5iP6w2lN%2BI7s2UESiFIIAEAPvu%2FCcJTKR1IKFqENHInWKnSbprWNjrv4j7jTIVmTgCo5bx8AE52%2B4SPJwBk5UeoDK8A5JVhCN3RLMaAMMHoqfLFm8"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:42 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3f432faa2746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a27e7aa3-1b09-47c6-ba17-22cd6d23ce3c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248344",
    "X-Trace",
    "2BF8C2313BBC774FA3EEDD524C3A23073D2D1E44E7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WLnw%2BYzDoTrE3%2FZW1u3UtFIy0Of2yS40ds9ms01dj9puk%2BWOQGlLYZ6bhdYu1ldnwybByPBCNWOXmDdG6Sc%2FNu6yoxfaldTtYqzpes5Jbck%2F9rN7JdxMm1UIl4XHRxOG"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:23:10.603Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:23:10.603Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3f44ef42273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d58103d8-5fee-4227-a4e3-a5ad26fdfdae",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248343",
      "X-Trace",
      "2BC51D93052E290D72185520AD4C97FCACC726CA83000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0bmK7pDT3aqQFrASrRHQYylR%2F5teWe4I2ejdSaYNjFZ3PcxrEUMOmGTfAtpZobjk0iJlE0aPiwsxU6Wt9GnPe0trumhnGlmFqIPewXf7g%2B3JgRUp4pbqphBvsrsb1NBz"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:43 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3f46bececf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b2c87a0c-2959-4f77-b1cd-d37d930ca20e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248342",
    "X-Trace",
    "2BD207BB350E113CBF25305B29FE94438AB0DDA548000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LgfyYIiLQXc%2FyQ11%2F67QB5%2FqItAGEY4bc%2BDJ6kPuGV3rHnVBhvREH%2BkHmJ3FEcX54Pjbo78GfzTbPvKBakLmFJioXZrQAKLnDdgTqeiVEHzusWsiE9ZZ0Uc9X9ikIm0R"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:43 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3f486b57e084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4315c18f-50f8-427c-a70c-9fe962d1968c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248341",
    "X-Trace",
    "2BECEEA6D1652201789BE5EC3494AF87B3A6BDBFA3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eUlPqV56BZXD8Cnx48%2FhKN3eHM4hFSuDMN04MK7qFtIxMxS5AAfCVEvxw2L%2F2ELUiebsl%2B1m%2B2qmKXP9t5rRtpt%2FbOChEZJJ2o6kCXi7e0n9KR%2By%2FVZa8QFYJbp3bZ0F"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:23:43.794Z",
            hs_object_id: "886404433",
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:23:43.794Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:23:43.776Z",
      completedAt: "2022-02-22T18:23:43.893Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:23:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a3f49ffe3275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "caece260-9ac4-44a0-8217-0675657f05e2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248340",
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
      "2B65CE38C168804A813D243030CCF55A8C307AF0D5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bmvdzUIBjx2KMKnipzZd3htlIVJo7JMYTMnO5E%2FqqXlNq%2BOtYLnqoy5CFKOaP5YXYdmgoRLACti06cuNEt2wKweefkGm0TlYo%2BfyV8jR3sYhm5Wl7OYU2xuECK0%2BnKpG"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:23:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a3f4c388ae08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "99b3cef4-6dfc-4e51-922f-a05cdc369b64",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248339",
    "X-Trace",
    "2B2E46F6FACDE7029C70E5D60716BE4BB2B093968D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ys68%2B2156gyvUilRYysrtQoHGfFyOk0CyqBUwD%2FtCWZi0f0fLpqJUjZuzAcbQBqR7CIwJqZi%2B5AiYJGC582UATT34TWgb2D5u%2Fcnnh%2FOXKcOqTYC9y%2FGNQZdOy0pAk7l"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:23:43.794Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:23:43.794Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:14 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a400b0b2d2755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f502f45c-3ea7-4633-94a3-845a3876cc56",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248320",
      "X-Trace",
      "2B4AEEC5B76AD6621AEBAC6FCCC8B1A21E2D33BE6F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A2f9uUYQr40J1voMGUoziB18glbTkus3VBEsFfaSU%2BN0Rhy3waaOpVLdkdyrsNh%2BOPCpdJ%2Fa3Khz5349RhzrnpVykfIhUFV1FXLR8QpM%2BUIJOySS%2FYJSG%2FAqfFDaZDjt"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:23:43.794Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:23:43.794Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a400c9fe1274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9b2b3c6e-a639-478a-ae4b-4b007ebbe386",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248319",
      "X-Trace",
      "2BD16F21C78B321C016D6EC59754706CB4241F05AF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T%2BHMQwO8xSL3cg4qSNosFLniRCJ6MbD%2FJUsnB7h1%2FiyobzNR7jEamLDwO5kV8gVN3s1yYXzLE1Tq9bTg4qMZUdMgz8IpDjpK%2Bi6gvSjgdz%2BfkgcfcsBgR%2Fr8qmliiQjP"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:23:43.794Z",
            hs_object_id: "886404433",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:23:43.794Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a400eaa0f2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "307b2223-6d40-4574-955a-31bdbffa520c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248317",
      "X-Trace",
      "2B2FF24534E115F82C4DEA29886D0350F8C15B5022000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bokntsNg%2BMdeSDt0r7%2Bb6Pvx4kG2%2BO%2BFIFnFraqpZPq%2Fgb2d7fKhj2u8ID1ZqAESDryy7XXFjVmPrEOP5SROOJoz6poPpI2EEtHO30bVmZu1Fb7VIMtuhNM8qU%2FxCsCj"}],"group":"cf-nel","max_age":604800}',
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
        id: "886404433",
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
          id: "886404433",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:24:15.516Z",
            hs_object_id: "886404433",
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:24:15.516Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:24:15.511Z",
      completedAt: "2022-02-22T18:24:15.555Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40106bb0e08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "09cc13a9-be57-4c0e-92c7-222b5ec1270b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248315",
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
      "2B55581E0A9C36BAFA01FAA0730F8DCF0F4BF37872000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X%2FFCctKY1kKn%2BTS4YkxjE9Fo2uhyp4kWhVM1H7CfJlJeKkK4%2B0Us4QIjEBoC5Jyt0X7YuHdtgy7p8jfzlHmTvr3QVDBie8QhavCR61JUKwD9QQWFnLUcAdZzevqIk%2F92"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:24:15.516Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:24:15.516Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40120fa7275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "99fe95e7-ac2e-4cb0-925f-db0960a40800",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248314",
      "X-Trace",
      "2B5B3BFA2CFAFA40B280D97FF839AB96782BB52E1E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MYZbmR7Wpq7Dir23vGVDczpf6qZxjcBNGuPcbFgBCpjk4Yrh9geUZq%2FOyG%2F4mRU5adgYkZllCHEjKeiGoUbS9Ua2f%2FWp7MbPIHD7P8hHTqgHgZ3%2FKV3HUUXDd2dSTvrR"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:24:15.516Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:24:15.516Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40137a7f275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ed5a9f0e-b619-4535-84e5-602eed0829e5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248313",
      "X-Trace",
      "2BC07AAE3C37F33379F89DEE0BFD40469BB4F8F34B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PBRyiadcKeYTUK1Rq2D9OUKStn2g%2BuApVHO6rp6fDVxZGZCmvDTQZb6WDkHF%2B5uMSzBpFawk57u92zWAwUkYNb9YZDyjkLPJ0lveCBPynV8L2NpIqGxrCrVlY5kLNttU"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:24:15.516Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:24:15.516Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40162b0f2755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f177066e-582b-4ca3-bc6a-b3f8b439e63a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248312",
      "X-Trace",
      "2B85262B1BD2985DF2A24B937D6DA200492E61646D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PP%2FRa9x3I1aX1eYbTc%2BXPlszCs%2F03VxV9ujlzuFZeOuZALOWloiS%2BPjqqcsh7%2F1EglGvBKGRxLz4fPYFgUo3BW6LSww4Q5AQ4F4Tv8nO5o0mh4Yz5zx8xGuGWH3sFc9s"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:16 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4017b9ef2743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "190e1373-fc0c-4a17-964a-61d09def36ff",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248311",
    "X-Trace",
    "2BA8A00866BC12452D122693D23F08DCE6AB1784BC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oGo2Ze2RvGIM7oDppBMmWVdy6qk4c9hnKh4CDyNRH4hp47OvwJQb%2Buhg5AksC8CE4WWO2pfOmCFOs3Ds4lcYjv1jTdh9urkhb2z4z9NbBU7jHaEuA7M9D8WtVkS22Qrb"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:23:10.603Z",
            hs_object_id: "886431351",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:23:10.603Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a4019ad1a2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "52b62673-9273-43f8-8e0d-4c29a510e11e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248310",
      "X-Trace",
      "2B4F643E6A6DB14613850430027FA7FC61DB1C9B25000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1ieyTw2oPum680DPPgljhBYFtZtND9Uc%2FTpK1viuOc4xQ%2FZ4ocDf8nT2k%2B1VYOJofgdew6qdYnX2Yb%2BZdObIOWLEYkFZElfyFoaPHOgx67hH1SWyQwhMoaORbu3jEc46"}],"group":"cf-nel","max_age":604800}',
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
        id: "886431351",
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
          id: "886431351",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.356Z",
            hs_object_id: "886431351",
            last_name: "Test",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:24:17.356Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:24:17.277Z",
      completedAt: "2022-02-22T18:24:17.396Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a401b494f274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1c6e44f8-27aa-4dc0-9671-ece8245d8d75",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248309",
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
      "2BF54E126B1FD41951DA12B499F82D0D8F34BCA89D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qUSXhEPHIpE81TFSMFbiRAozJCPX%2BoZsFaqxH%2BmRF7aNlbcO9wEg0i%2Beh8FhqSYQ9ytIE9T344x0LSwuedHGGOH4o8BPdhQ7jrB%2FL59WCtM9b7SIwYFV4BYyNgO41nK2"}],"group":"cf-nel","max_age":604800}',
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
          id: "886450022",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-22T18:24:17.609Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.609Z",
            hs_object_id: "886450022",
            text_field: "some text",
          },
          createdAt: "2022-02-22T18:24:17.609Z",
          updatedAt: "2022-02-22T18:24:17.609Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:24:17.604Z",
      completedAt: "2022-02-22T18:24:17.680Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a401d7a24275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8c4ece23-773c-4fb2-8878-e9390062ff0d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248308",
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
      "2B39C9A24937A70529E1DAC0D284EC6EEFFBE7BBAA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OxYIG5H2qYRM82dugK142QVfjOX542oS9lIGzhFp1RJGZijG1iRoOm4XUFsl%2BmBQdtXgO1etv%2F%2F%2BVOC0CmxEV9lBrvbhRtvWaoShXlQqmakYym1ZkTG1mswv4Lc5hmVV"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.356Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:24:17.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a401f4f48275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "59cedb05-b2d0-4aec-abcf-8348a994b1f9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248307",
      "X-Trace",
      "2B3E072A5A5BA61CB23AAE11900965F8271389B96F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3%2FXgBRBCCyuFTb8V6KX3M6ZDAS%2FYhFWPEhrAwtZZRe4YjqV411%2F%2FEMaCVZbhqZwLhWmh946AqkX7W8YVikG%2F6CtaueC%2FAUgEDbuJiC%2BXi48c4Utq3%2BY4NWNHrO1ba36P"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:24:15.516Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:24:15.516Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a4020ca97275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "add779eb-8e82-4300-92f2-e77d4a56401b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248306",
      "X-Trace",
      "2BEEB54101D3EC97E9DC896024C05F2396A6176C68000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dlPkZaaXWbpLXTJN%2FSo%2F%2B1MHvFlVyADLuwHO%2FhoqKjM05VQIjAcRs%2BxfzeK3FMeF2e4N1MoiFTncYA8RvUOpIqIHBtBbZUzlBnguEqym8vq2fSyPLJrDXwsJhKNQJc7Q"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:18 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40224cc2e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c411d520-c4f5-4344-96ab-6402f2037e8b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248305",
    "X-Trace",
    "2B0F4941721C7082F5DD1F0638B289B19C890CA360000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=73eM2e39iPJYsFT47GAbLsNQJ4n56DKnOjBsvMMvSxJSHV3lgW5%2BWT9basXoWeE3wfhZqhLdbgYhJq4U7tre5EQy8MCsoHhXF9BZA%2Fu3dHALr0bcmPWruOldKW00onyb"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.356Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:24:17.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40df8c63cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "42175587-56af-45d8-8323-d340ac5bca0f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248302",
      "X-Trace",
      "2B6DF24BD7481856172A878381193AE009C1A17FFC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2Sh3qFGpLRX4EypydCDB7%2FHQBBNxjPQ%2FpP8Jq4rK1IK9me0nBUaUPXbN9T%2FMJnwyDHNYcbUYnqfxO%2BTjoFtXIdqsA9cDu1Yr50ETvGvE4zh4c%2B3OTNj1h9dsoohlUPs0"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:24:15.516Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:24:15.516Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40e16afdcf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "772dea0c-a912-4e21-b08b-af0bf664be3a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248301",
      "X-Trace",
      "2BCB178AD55B714B1B561DE881F33A1929A22B6644000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zplFThTh7O66HdtttyVm5Ra9Sv2w%2F8gF7yp52cKb2IM0EfuExXy9AVNgj%2FAGDaJHZ6apmXJ2eB7%2ForgnIl%2BXyd2029m4yh0JZk7xa049PtfngvP8Josw85H4S%2BZPBQlB"}],"group":"cf-nel","max_age":604800}',
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
          id: "886450022",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-22T18:24:17.609Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.609Z",
            hs_object_id: "886450022",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-22T18:24:17.609Z",
          updatedAt: "2022-02-22T18:24:17.609Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40e2e8d9275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bc73f9b8-fe6b-4056-aa88-8896b054428b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248300",
      "X-Trace",
      "2BF9510C44285AFFE74B3AA447DE275AE9C1F582E8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=O%2F7PXE0p6joFf%2B9V4A2%2BGSoLQ2NVETc%2F1mcB%2BYKbTRzpejj8Bnj0pV56HQzLvK22iST73Ym%2BZi4Og6RTDA5e%2BvLA1tT3rZLlkk7lWhfBHa0lk1Q56evST6kE1g%2FF%2BTxx"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.356Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:24:17.356Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40e47d6b2745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6f2bcf31-25c1-4a7b-8931-8580cc94d62c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248299",
      "X-Trace",
      "2BCE4658EED32F34DB09D9F52D8F9A74855F7523FB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bks1BjWEDpaifZKK8INLGfvnkq0cozjHY7tsuH2sZ3qmrZN1e0xax%2BYZ1Vt4FJabMbrtAObily5czuMpEUK%2BV%2BTw3jV%2BmRmS%2BePUPWNhkqSUnQCU2ivbcYr9riTsjU%2Fq"}],"group":"cf-nel","max_age":604800}',
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
          id: "886404433",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:24:15.516Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:24:15.516Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40e5f8facf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "123e90a6-585b-4203-a200-e48224c29eb0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248298",
      "X-Trace",
      "2BAB0C20CB99C162621AEA17C619F2E2A4814A23C2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FbbcFW25vU2jOzYilf%2Fs%2FJmvLXzlPVtxn6SDc6gKcx5T%2BqdZCQVIlTOhr5kTjmo7mwcUIJI9PbCVfeJDsRPqPAQdMHsF2nzPExQTDM8c8F1to4Qq14oqqYwfNwH0F1dw"}],"group":"cf-nel","max_age":604800}',
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
          id: "886450022",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-22T18:24:17.609Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.609Z",
            hs_object_id: "886450022",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-22T18:24:17.609Z",
          updatedAt: "2022-02-22T18:24:17.609Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:50 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40e79e8ecf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fcf104ae-0c38-489e-a981-82e22d5e3472",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248297",
      "X-Trace",
      "2BDA955AB3C17F49DBD51CF83190260148EAA9C695000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S%2FwvGDkpU3QAGUNQuqyrISVCfaKj1SyI1Hj%2FhlKTBTwxoatQMsrvX4aw%2BxiI2qRFHEIDySC%2F%2FUjRuhVzS5%2BL8mJHAJxn53okgy1tXanHT3VhZwb9uhWboBcKHQcAsObv"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40e91bbacf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f0a64f57-f00e-48d9-b474-36a0c1d6f7d4",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248296",
    "X-Trace",
    "2BFCFB4EBCFC97018D548CF233723A194510226BFA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0F4SS5MJt6En2NYc5HtrcoNFFHqwEQfONmxbmBXIehEvCdtkUAIg%2FKyP8O%2B42PvzxDF4xjYRRherZ7YiD5jARKoO8W02HrmFYtyJWw0yl9%2F7jO5Lx8jOkdCQWRHg2agm"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40eb1fef2743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "79e19685-8f0d-40a2-9c78-0985ed70d47f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248295",
    "X-Trace",
    "2BC90E2FE07CA2014111EFF7BC0ABDBCF269EF75B5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SO%2FDUgqHsNpu9%2BzAe1%2BFeEKMiNAFMgw83rNA%2ButrTVyeSfK4aVqWpAM%2FEf67bxc3EdLlOu5FNf%2FrSeuIqVx%2BcqtnN403dawtAcv573YGtcGRcp7rL1sAEP7tOGqxsARM"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:24:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40ece88e2746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "27aeb6d3-b44d-479d-bb44-90e5ca035742",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248294",
    "X-Trace",
    "2BBECD3573804799D60C66DC40D63A5CC801716454000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7adaCKkmlw%2FVVz7KsILDxaXXDbN%2Fe1sC7vz8erYE%2BOwRcd67gzR3qItKDF4vDWPYhYE9IlGQSvp%2BZsngPRWcb7%2Fj0Joc811wkF8thpgR6jDgQp6CsraUzJTTDTduZt7i"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40ee8b0ecf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8a1c6880-f119-4fc6-b9eb-69e9e84fc2f5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248293",
    "X-Trace",
    "2BF51B67681CD25B2EF18E3DD21C49A042515A2EAD000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CAM3NcDWD6gxA9rC%2F5myWb0nqUPj0sf66HWOji27DqDlIbI4qzqxxKJxF0fK92J9dc8c4jyN5jvwkQ1IIn0DruyYjY2XuVE6lCrOu1G4rq5Pt%2FilRZXaQmeqMZuY6xOY"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40f01816274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8dd3be9a-d2b1-4c06-8afd-870fa2498a67",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248292",
    "X-Trace",
    "2B29718F781EC902CB2E5A64B7D6C1091DF417FDAC000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Q1lGL7bJXJIhQHILrV8QPe0xaxx%2B4Mun0ygFdCS25BVnLwzc2c0%2Fu%2F5RaeQ%2F25SnuuEgKOsmsdsCxOhAbHJLL0nkMfNvdbkX4NP0XV%2FoirEZcEpwDa%2BFUINIHJnBjj0n"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40f1ac94273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6bc7c4d6-11c0-4570-bdef-22c0ec9852a6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248291",
    "X-Trace",
    "2BD200A2EAF9792D9809D15144F341857F5869D435000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Nu2Sn7dIqoi9Rb0t1jGR0s1099dxjFa59WsLKY%2FHbcU85THGH2iHDndicH4g5tJZJRw8WNeqNzsjbmCyeRnDVMIWlJ%2BeVXlS7hGx%2Bdg0IKcszP0t97ObGgqIi8uwIdWU"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:24:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40f479ce274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "de5991d2-9bba-4a99-916f-e6f058ea7733",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248290",
    "X-Trace",
    "2BB7AB9C9DF4080AA1FCB692A29B4A311A58DB2271000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9IUvpc0Q%2BMs3zkYmbjqONK7%2B66YWwh1q7rURsVVxbLt4TTV6org%2BIeHx6UVIKsLqDKMWVJM3HejOaEUJALTiIyPz9M6gXp%2BuxlUuPJZVEh26O0EZfz2ToIuq6izsDvIz"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40f668cce08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5bb664b0-aaa2-422e-a14c-b5edbe20aa3a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248289",
    "X-Trace",
    "2B3D41AE7E73BFC684E4D30379FA99E754A1696E99000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pep3vDXs2evWy2NACMuOGeZKeNKQnt1zMitvZzGvbykN5MCNU0wW7oghJq1ga8qQ1Orv%2F9o2i8UsWO%2BS%2Fwovo9Qm%2FcE8YpP9EPCOTx7%2FXcdOtxyUv%2BlI0NT8FRmNOLgt"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:52 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40f83d5e2737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3a90c395-2287-4c13-b5b4-cbe8cc8d99c6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248288",
    "X-Trace",
    "2B9E9E3389953854E0F8328C902D199B59B11B30F7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HbcFkY9Rofy2Hrg28xdwXiTw6VvspdEn1PkONsuMIeVt%2BFHVE2j5TIELuiNbUsO5ZAeYPXiuuGt0LBjS%2Bkz%2Fhl%2F4lPPRNEPduFyn8AoaCP8JBCKKovgGXmHztLh%2FF4kQ"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:53 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a40f9fe5dcf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d89e1bd0-2ecf-487b-b456-f17e6f445b56",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248287",
    "X-Trace",
    "2BFEAF911F80642CD0D4B6BF55CD5F2C00CC139A11000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZDA89oVeZjX5He0VXmP16UfEfx0v3fhO%2F%2BpUYXFNSeYh0rTg%2BO%2BEjWKlmNq3S7UfhYbXk3KheIdM5f5OdfUwf1%2BZlKGfiSWef0rNs3t5%2FnXplMC1mGe%2BauYaE1AcBSW0"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950063",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950063",
            last_name: "Last Name 18",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950057",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950057",
            last_name: "Last Name 15",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950092",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950092",
            last_name: "Last Name 14",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950095",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950095",
            last_name: "Last Name 32",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950065",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950065",
            last_name: "Last Name 28",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950081",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950081",
            last_name: "Last Name 12",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950078",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950078",
            last_name: "Last Name 43",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950071",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950071",
            last_name: "Last Name 6",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950091",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950091",
            last_name: "Last Name 38",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950069",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950069",
            last_name: "Last Name 47",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950060",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950060",
            last_name: "Last Name 35",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950089",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950089",
            last_name: "Last Name 9",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950099",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950099",
            last_name: "Last Name 16",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950098",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950098",
            last_name: "Last Name 10",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950101",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950101",
            last_name: "Last Name 23",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950076",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950076",
            last_name: "Last Name 42",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950088",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950088",
            last_name: "Last Name 5",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950090",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950090",
            last_name: "Last Name 13",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950059",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950059",
            last_name: "Last Name 48",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950085",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950085",
            last_name: "Last Name 2",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950067",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950067",
            last_name: "Last Name 45",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950084",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950084",
            last_name: "Last Name 39",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950082",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950082",
            last_name: "Last Name 30",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950064",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950064",
            last_name: "Last Name 29",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950055",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950055",
            last_name: "Last Name 21",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950096",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950096",
            last_name: "Last Name 4",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950093",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950093",
            last_name: "Last Name 31",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950066",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950066",
            last_name: "Last Name 37",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950074",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950074",
            last_name: "Last Name 46",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950058",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950058",
            last_name: "Last Name 11",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950104",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950104",
            last_name: "Last Name 25",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950079",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950079",
            last_name: "Last Name 41",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950073",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950073",
            last_name: "Last Name 44",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950061",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950061",
            last_name: "Last Name 40",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950056",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950056",
            last_name: "Last Name 36",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950097",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950097",
            last_name: "Last Name 17",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950100",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950100",
            last_name: "Last Name 19",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950072",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950072",
            last_name: "Last Name 3",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950086",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950086",
            last_name: "Last Name 8",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950103",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950103",
            last_name: "Last Name 26",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950094",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950094",
            last_name: "Last Name 34",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950070",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950070",
            last_name: "Last Name 7",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950077",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950077",
            last_name: "Last Name 33",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950068",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950068",
            last_name: "Last Name 0",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950083",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950083",
            last_name: "Last Name 24",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950075",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950075",
            last_name: "Last Name 49",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950102",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950102",
            last_name: "Last Name 27",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950087",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950087",
            last_name: "Last Name 1",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950062",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950062",
            last_name: "Last Name 22",
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950080",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950080",
            last_name: "Last Name 20",
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:24:53.476Z",
      completedAt: "2022-02-22T18:24:53.763Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:53 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a40fd9e5d273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0725fc9e-8a37-495e-ba5d-f4fe072c4423",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248286",
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
      "2BBE9387A2D24C47FEB1697892C6B2F77836D38EE9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2F1pRSxltklXlzVT7TNKlWbCOr2nFSIw0zzImQdizw3nH901m%2F5Q5lb1ZFumjZySZvA9ZytXcR1sr90pi103ubeEKxK7w9gVRZC4YAYzImuy7DsCrQdYEzgFOwM87CYd8"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:54 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4100dadecf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "91d0f3b7-ae6e-4325-96a5-52ed19d21230",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248285",
    "X-Trace",
    "2BF2E99AC3282BE8CD11688E4DA376F7165B8CC3BA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8pxG7indy4mdCUtOBaiW%2Fvm52HkF8k15dm%2B987TSiyzMFm%2FYPlZnergQ05ZRwHQ81uxJWbJRLlZgEazZGZMtWXeKUDS0b%2BNjyPL9HvmLF8Vi21nVMFQc0EKkwQduUPeA"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:54 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a410258ba273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "5c79a593-fc3c-4275-b31d-a263cb6ef1cc",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248284",
    "X-Trace",
    "2B6F044FA50344E72454EBCDF9554C4D35D4588386000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bUIRNcfDfjtlDHCRghsRMcktRzaslQsX7iRVMouUonG6ClNQ1f6vMbvSFt3YjieJrCLH29oqf0UOmlVUf9svXx%2Fo915lLIwu%2FMVEgpx%2B%2B%2FIw0kT5kPuoUNmcTRwlW0S8"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:54 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a41041913cf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "23a7ecbb-ac2a-4010-b787-eaa25d429ed8",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248283",
    "X-Trace",
    "2BA91724E2B0E9E1450D3EE23873AB2A76B28D1DED000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hHuvNVu7uUJ2cieK%2Fz2elBBKjq%2F7ijDfo%2FHBF2LA2v%2BjsWnQOsibYAqwbD5qTe8FGUVMduWeu4qkWAhDy%2BTrWu7YWXNFh8vlA%2FCueKPC5pZCcxh3FoauqhYPjR9WcBOX"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:54 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4105d8422743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "228de274-9202-4515-b9f0-65e750ab1cdf",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248282",
    "X-Trace",
    "2BB0F204D841E1AE8D11565E86FB269843795755F8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ewEUSv2yPZAOrOlDlH5owofpu%2FvKY6FYbTomXYQmwxlL9LXjSZvXRrYd%2FBKYFcJE0GQhWWHQdN7NwmGsDeLWzPjp2kKxUbrjDE%2Ba%2B5g2Gnntl4qKrdWnQZp3OAhzy18M"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a41078850cf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "eb881710-ae25-4a30-bc9a-11514f37c20b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248281",
    "X-Trace",
    "2BBA739ACEEEB78A280907A5BD36802BA9048D757D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F7dhpi%2FbJgPCPzI%2BzzoguPUFHhVT4A%2BI7ygrbYHw3UW5WLvo7ITNc%2FGbSXqlwLcyl8aQusl2UiRsdPL2vwL6E%2F3cMuZYDR4J%2BeFILV%2FkWeGGsBKUxV%2FFvJgZTqmxIxBg"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:55 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a410b3eebe074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f68d948c-27cf-4302-9177-2e8d5b123def",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248280",
    "X-Trace",
    "2BAFCC959E4E3281D5CEA0155728E8388993EAFEE4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ErEwYrGtRjXFeu4CHaPx7%2FX%2BYlSdgm4C4IISu0HpQWyB0qnMzfOhqTjDrvsQbgLVGUJNptpsQGpEjYbYc%2FJrvuP2LQm3Grp6sMMiYazFhzFc3BYYdeLfdZwUJ10c%2Bed3"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:24:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a410cf93f275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d7b38733-ec80-4955-ba82-19533bd9d0cb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248279",
    "X-Trace",
    "2BB358401B7273C362C612FF2A4863DC934167AC11000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=nqE0YnhUBxiKVHEzQEPAFEU7f0FMZ4C3mWv6xGwazHVjUMr9UingSHCbLpcZfgMmh32zINJdIsCFJ3NSTcM8hOU1Z5dseTk25ornUwfsmNYrTyXnshfT78ciXcAJQYbY"}],"group":"cf-nel","max_age":604800}',
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
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "885950056",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950056",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:24:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a410eae24cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4db80996-2aaa-4eeb-8adb-b6e55fe0d3be",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248278",
      "X-Trace",
      "2BD231D71E6F7C2FE6F004104AE4C1E07FCAD80087000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=K8pfrej%2B%2FWwBs2%2B13RVhYyDGVJmAFoELmC%2BIMxzFpREOScN31le2fiedo8dD5KuilBU2xSzkt%2FYuevYV6seqhgfI5y9gWQ7Vy8CUWpBDP2%2Fltf14RuS3EPcJd8AnkIJn"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:24:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a41103890cf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "022b2984-b063-45b7-8a34-dc415fd8692a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248277",
    "X-Trace",
    "2B303CAD08395360CCDC34685B4158D5F7507C8C42000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ExO2k9r%2BkYFgGUiBkRC09viyKf5F3x1yv2BHU41rkyfuGrC7OoYhD%2Bf80B0XQ9uQv6cSJWyCRBxw95O5dyUP4XB1Ncg4qFJ2VY%2BU1NEJevEPnPC0a4%2FgyUZgYn3tvatC"}],"group":"cf-nel","max_age":604800}',
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
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:24:56 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a41127e94cf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a0823e14-286d-4a60-a23b-cc1dcb80de24",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248276",
    "X-Trace",
    "2B2CA6431C29ED97D4FAC96E3B442C2562EC4A812F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uDm5%2BL%2Fne89GMULTlGiQ9eUNoE%2BqJ%2B%2B%2FwBJyKqjZq%2Buz6CRx%2B935KzVC8HiQMVPGDNwEX3RUfjiAyT3jBuFUE475WhYnb47saXkOhwEckjiKEkc6bHz1ZaMXiCtsvqzP"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950096",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950096",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950068",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950068",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950072",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950072",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950085",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950085",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950087",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950087",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41d03d2c2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4dcd3786-345f-40cf-870e-d7e07a1b874e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248273",
      "X-Trace",
      "2B17EA7F1E70813FABDBAF40072ABCC82BEB70AE53000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lw3EWOcrJnMI2jceFCGqfNwA5y2rfcvL8xgrE45%2BUIBm%2FmasMSrxDJQWIk8O6euX3eCNecWOZTKIK%2BciMEMxS%2FJiaoCllVQdABIWJZlJHMsXjPCh2eCpiTJA4%2Bkc1Arm"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950088",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950088",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950070",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950070",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950071",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950071",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950086",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950086",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950089",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950089",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41d24caecf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bd6b8977-7528-4a1d-b597-62fcb92c3198",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248272",
      "X-Trace",
      "2B632AB1367DF4B172D50D9924BBE16B866D310983000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FCEK%2Fcqq5bZ31nuhrS%2BW%2Fw9Q4vrWpUUfFMr880t2BP3FCWQkR2c2emX3%2BjvzGl9OBjIzQ2vH136eE2h8R5mJEbp0pzKg8HmHy5dsWYnoVFXrTMHTsTVamXAJQjqogTYY"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950081",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950081",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950098",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950098",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950058",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950058",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950090",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950090",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950092",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950092",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41d4380de084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "64159dc0-e333-4dfc-8f41-41b5a6ac2392",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248271",
      "X-Trace",
      "2B0D240914C606761F950C3D260556ED1C48B66661000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=kdnEiGhU2g%2FjST3ub%2Bbp8VT9qhxs21moYjlsEpSEKD2oGEPTppxsECl6FmISA287SVC%2FgnyML3AOJ4OvxmZR8MLsGm0L%2FUlcLecOrhXFV4kmyk4MCeLPKi0pxnAQOXeP"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950057",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950057",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950097",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950097",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950099",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950099",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950100",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950100",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950063",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950063",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41d609232755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "028cd2e1-7e86-483a-99cb-2c069edc1423",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248270",
      "X-Trace",
      "2B75E6400EF19EA91A91F43748471A436E64998067000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NysP%2B6LKrDTI08YMXvbDNAWddQc490uzgmeKYonP7kIGse4aNTlEVTeXHtbouN1qhkXgGRyAWDEAAiUGNnf%2B79qsc3zrSclzRspmSiHqWRefiwqTa3VNw5nIyf1LQL8c"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950055",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950055",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950062",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950062",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950083",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950083",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950080",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950080",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950101",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950101",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:28 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41d97fa12743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "407dd5b0-5699-41fe-ab3e-2e272c1f3148",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248269",
      "X-Trace",
      "2B6D31689C80E38CB57B523F0732965C1E60A63700000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jbpmQ7zbXY3k5W%2FPa%2BmXLbQtS1NhudsQtmA5CjqI0s5jkpR1iEREXsAmQJVDK20XheaC8XAozzPSwt6n1H%2FQjH3L79pdI%2FzO9Kc%2BsZJC9u67pN2ZwKfopqX83WRq7rHl"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950064",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950064",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950065",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950065",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950102",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950102",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950103",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950103",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950104",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950104",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41dbec6dcf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "45c5df05-6a70-4442-9f36-566e216fc2f1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248268",
      "X-Trace",
      "2B0BCA9B36C8DB132CD0B794FB21B5B3EBC85CC8DC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=emZLiSkfdQw%2FwkVrsu0Vh5ZazqDOW5lx4ziIcbAu6hqeZelETuLImuZcPSlDNoXDJgQRSS0CmDToV%2BMQ2X6nh1K8JmtMRG%2F8jf10qw7fMhPsHcyJaBAT6Wr7R1HMEmSQ"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950077",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950077",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950082",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950082",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950093",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950093",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950094",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950094",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950095",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950095",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41dd8ee2cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e220b4dc-b8b9-4cce-8adf-2882a5960599",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248267",
      "X-Trace",
      "2B3609FB3B1065A95026EB737E9E7838241273499C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iqXk8KngM5O7hYwbfJFhjmjkypUnTjNoCNOosHKwNySR02JqufV7ExvXnzWJtoQw3vyg9XP2q7RQ9jCJv7%2FE6Wy10ktIERXUZMsBVunQdzYuSP6Dq8EDopda7bqt9QqC"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950056",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950056",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950060",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950060",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950066",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950066",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950084",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950084",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950091",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950091",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:29 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41df6c9b273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0520485e-ac81-41b0-a513-224c680813f3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248266",
      "X-Trace",
      "2B8C79338FC97C08D63C7D0F34CA8C7EE22099E1FD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xgf%2FKMl3%2F0LFMm8%2FUa1niAWHF8SrLJBxTyL%2BNvpx%2BU3izvRscXtdbCLhVL7ShxAzii3N3YcN0gN58RnLId0b%2F6kUCqCh63TIft9sU%2BTjDyfKShJSgVmAVg2Xq%2FlO5E%2BR"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950061",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950061",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950073",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950073",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950076",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950076",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950078",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950078",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950079",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950079",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41e1bcf82745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d7e216a4-497a-4063-bd6d-5d1427e63a14",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248265",
      "X-Trace",
      "2BD297BA5296366775B15F777EE93995BCFD69E88A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PO%2FIXRgSMh9HU3UVz56Ummg18xSab09SvVp41jijKpxhWi9wjqVc%2FH5GIkgZKGr68Q3T6te5b1HaPBxxNWuzJGTCJ1JjSqr%2BQncXLb52etsfowSPNmcea1tDZHAs50ej"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950067",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950067",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950059",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950059",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950069",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950069",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950074",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950074",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950075",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950075",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41e3aae6275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9dcc9023-78b8-48a9-949b-c7a6016bbd7b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248264",
      "X-Trace",
      "2BC56EE8C335E5E5C0119FFAB703D30A0BA3B41195000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LPe7HiujLQ1INBx%2B48UkWjjUJ7zpKVdv%2BkNyMb9Ej2uhkxMHu0yRM5iiZKrnq4RLmsHoID8jjr30xIX0sd4BBu0jejZpvYUBQxdvH7FW0zysE5Tx%2BEdGY%2FbVxyAufajr"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950096",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950096",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950068",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950068",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950072",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950072",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950085",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950085",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950087",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950087",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:30 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41e649c1cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c70beba0-d0d9-48df-8b8e-7090a948a12f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248263",
      "X-Trace",
      "2B559CA573F2A5616A784735F31DA6E2CAC430DF4D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=A1rB4Ten%2BC45bNkDcKuRSypQoMDSOwTVtZIqwpOdz%2F332%2B9KKPznv3BKoEiG00gDvQxvEMESvUBk8oW33JzryE6FmjYv4%2FRYm%2FqUBCSa5wMblHckPG4sAbBLRQq8hhKw"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950088",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950088",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950070",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950070",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950071",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950071",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950086",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950086",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950089",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950089",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41e7ff3a275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9c50b70a-afc1-406b-b1c7-545bc66990c7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248262",
      "X-Trace",
      "2B15B4F66DE63B6DEFCCD37DC39A29C95A365E8C53000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PDWyCzoMifHI3bOo8lhYyEZ%2BvIX7au0zvCUZuEwwz%2BOiJUSvXGGSfGvuGUh2YIgje7dfosTr8EjfvjCdG3vc5VpGHDW2%2BhMtOJaM%2BozLuJDtWMx%2BJJqTRCp8aoZ%2B9%2BJa"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950081",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950081",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950098",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950098",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950058",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950058",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950090",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950090",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950092",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950092",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41e9be862745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b38c49e5-546c-4688-9a90-8185f6296546",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248261",
      "X-Trace",
      "2BA0B02F4B4754459755912FE8241BC0CBD7A6F550000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j4uwagv60iigTys46Pi%2B85ZjNuplLELwjxy7FbdDWOccMT8Y4LYnc2oVhC27JgmLp%2FSt44Xu4BZ4XXa%2B5gGibNolWQ%2B6rFw496kn%2BcVIeEy9LB89RZ75ecvDMGdeqoCI"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950057",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950057",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950097",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950097",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950099",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950099",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950100",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950100",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950063",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950063",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41eb8d80cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3107a6ca-47cc-4706-950e-bad1659e09bf",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248260",
      "X-Trace",
      "2BD2EA62CDF4B3CE81113929DED62AA044DCE96111000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GJnVcJ6tzgPOVlqJbW7W%2BZnvBOH9xCq%2FQ9vyOfXFepdbKzObSgWz%2FNvu0h%2Bd9Wluv9yUwS0BLnJ9E1i%2FLIsRs9OELQ8GEm3hEDmLRZCFmOCFey3vFuy7N650%2Bsuuvj69"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950055",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950055",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950062",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950062",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950083",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950083",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950080",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950080",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950101",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950101",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41ed4c772743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "83e2785d-8845-416c-a0ce-7504285d114b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248259",
      "X-Trace",
      "2B27EB5301212988D7748848B4FEFC9D5FB2DB0D7D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2yCb5cXZ%2FxK03qVRFuZt1qA7ly%2BRdx2o5wvYNoRqUt4D4wQN6zN9YPz6ItWQcpwwR45jZor3btnh%2FfwuUMRxZeUyGuylBCETPQh00kScX8RGNZfFMmmkTjkpALR75r4T"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950064",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950064",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950065",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950065",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950102",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950102",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950103",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950103",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950104",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950104",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41ef0dd9274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5ccc99b1-17fb-420b-b5e5-d199d442570b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248258",
      "X-Trace",
      "2B733413640AFD6A07915293708AF201A472832436000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HT6kti381OZL6trkYcF13yCV4VaS5%2F0h6k178Xf28LjNkZNkhVPSeKpUpzEaXg2tRDxeT8KRiuIx%2FXH9qOhjR7AZ3oENY5eOuCJHyemayvO%2FA2n40aDABy2FxJBmS6Tm"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950077",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950077",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950082",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950082",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950093",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950093",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950094",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950094",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950095",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950095",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41f09fad2755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "776da7af-4238-4d19-a987-87cdc0bfa440",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248257",
      "X-Trace",
      "2B6E0454ADF3E707C8FD4A7AC3F2171B4C333EB74B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=d2VeG1imNxqwGSYuRMIr1qD31q%2FYShXRz9L73C7hhcqC%2BtCMyP6AuZdQxJt21DeGbUfWnTo4sVDG52JMFxGvi7y2ubRLUfQh89VTIN7X10kbMo5oYK%2BsUFyBLgLVjpVJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950056",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950056",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950060",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950060",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950066",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950066",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950084",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950084",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950091",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950091",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41f24cfa2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "507e21a7-0e6d-4479-a329-bc88df11ad3a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248256",
      "X-Trace",
      "2B296F35854B2003FDBB135F58532C58FD1D17CC89000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=AaK%2BXzY5QOghmBptKWdHx4pC7Jsb5xEkgQO%2BqNGfOZUX1ufLH9VFZx79lXKdoUsv3K%2BpHLaoZMx2X1UdXEburMalArJyOl5TkJwr%2Fw1tItZKmRy4p1vdzOBSdhOmxNia"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950061",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950061",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950073",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950073",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950076",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950076",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950078",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950078",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950079",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950079",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41f3ec9a2743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bddc88ae-c8e2-4282-9f75-6d5e6d9eea7d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248255",
      "X-Trace",
      "2BADE394C4945391CB1F1C65DFACD3DFBE3B68B490000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fbfnpFvKeZ5F0KIsB35SIDJOIPufhRVulE4q3a2QMdTUYBBKEDp6kVjK3rz13cG%2F1UwGNAE5FsxlQ0cwL%2BBCxQwqIykh3FOcmibjmJquEvz8M7lDdwcVp5rnp9P9gsuk"}],"group":"cf-nel","max_age":604800}',
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
          id: "885950067",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-22T18:24:53.476Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.476Z",
            hs_object_id: "885950067",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.476Z",
          updatedAt: "2022-02-22T18:24:53.476Z",
          archived: false,
        },
        {
          id: "885950059",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950059",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950069",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950069",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950074",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950074",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
        {
          id: "885950075",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-22T18:24:53.477Z",
            hs_lastmodifieddate: "2022-02-22T18:24:53.477Z",
            hs_object_id: "885950075",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:24:53.477Z",
          updatedAt: "2022-02-22T18:24:53.477Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a41f5deb12749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "87a8aa4d-7a1d-4273-9fd2-990031eed836",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248254",
      "X-Trace",
      "2B333F34FD8CE66E7694B8C8DEFA153940BF5E41B7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p0WleUiJEUkD4cRQQu0i1YgWLbieKeYtgmlpKo9W8ivl%2BHZHOTo%2BGSnGiK51erlLkGgzSwXR1iQE1yYL%2BTGpZKgnRvObDFO8wPWNhnKaqNwWAz5tHLU5mZ44vSD4cX39"}],"group":"cf-nel","max_age":604800}',
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
      { id: "885950096" },
      { id: "885950068" },
      { id: "885950072" },
      { id: "885950085" },
      { id: "885950087" },
      { id: "885950088" },
      { id: "885950070" },
      { id: "885950071" },
      { id: "885950086" },
      { id: "885950089" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:25:34 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a41f7997fcf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6f99b84e-30d3-4446-8587-3fea30626a56",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248253",
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
    "2B6D60616287732967E9C67682E2B62C523E170DCF000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fwNPws8HH77jeTB9L9XE9Hclw%2FN1GfsTl06uO94l%2FtZGfH3BCacIwkhjUkK%2B%2BNkOOXpDbDkwN0Pr7YGynACAUBzWl0RcEHwuc%2Bnk4DYfK9ht7SH13hP3eLZSzszqhcue"}],"group":"cf-nel","max_age":604800}',
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
      { id: "885950081" },
      { id: "885950098" },
      { id: "885950058" },
      { id: "885950090" },
      { id: "885950092" },
      { id: "885950057" },
      { id: "885950097" },
      { id: "885950099" },
      { id: "885950100" },
      { id: "885950063" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:25:34 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a41fcfbae273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6257b7d0-f381-4b66-9b94-d2ca37bd184c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248252",
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
    "2BE9FA8D80A990D14AA6CF30C0FD5E56757B9191B4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j4%2FyYm2Bxl0uV4oNc1QOvGuK%2BmPg2H%2BHzOeREinL3D2gtzQRyN0VHCRrruyqII0F3FtWfnSzHaFPnKGAXR2OhSCW8sHgZlmEjxAz7lDdHZLSy5Z25y0FSLlMzLnrxLvL"}],"group":"cf-nel","max_age":604800}',
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
      { id: "885950055" },
      { id: "885950062" },
      { id: "885950083" },
      { id: "885950080" },
      { id: "885950101" },
      { id: "885950064" },
      { id: "885950065" },
      { id: "885950102" },
      { id: "885950103" },
      { id: "885950104" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:25:34 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a41ff0c00275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1d07a8c9-068f-4e82-b099-92e90f253bc7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248251",
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
    "2B53A3F790872F36DAD787EDCFB883C0C18742DEF0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zeNXwqm84liJp%2Fhml51SjyECV7s8cgWdBXrWe4nMiweqxo7F6gKHhvX4bOYkUCxeSCh5NheDYUlIs7PEtrZ0pEsPLFDqfVPsPvXk0IVcUVoumuLiIEV5OCfCMcs6ZykH"}],"group":"cf-nel","max_age":604800}',
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
      { id: "885950077" },
      { id: "885950082" },
      { id: "885950093" },
      { id: "885950094" },
      { id: "885950095" },
      { id: "885950056" },
      { id: "885950060" },
      { id: "885950066" },
      { id: "885950084" },
      { id: "885950091" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:25:35 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4200aee2e074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1cf4c93d-6481-43e0-a17e-b3c5b04cd858",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248250",
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
    "2B3079F60BA32323DC191B01CAB6EBD3CDFE101518000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=F0DLE0LtMn%2B%2BAKx1RfeK9a9aknQJine%2BE8easwY2vUzJ%2FE6M1ax7%2B7EEsZ4s%2F51wop09hxf0sH%2BdLQMiOhfpn2a8EnkNcuVp9LpXQQJ6VOPkwgic%2F3BN%2BW3X6p5rPUNX"}],"group":"cf-nel","max_age":604800}',
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
      { id: "885950061" },
      { id: "885950073" },
      { id: "885950076" },
      { id: "885950078" },
      { id: "885950079" },
      { id: "885950067" },
      { id: "885950059" },
      { id: "885950069" },
      { id: "885950074" },
      { id: "885950075" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:25:35 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4202a9afe074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8fd2e8a3-3c31-46cd-ac90-c71f61007fb9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248249",
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
    "2B5F7DBB2279D9CBC606D4AC288C5C9FA75496F75D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=S%2BztwpZRfK9KNojw8Cqj%2FnCvwH0mnjnIC8Wurv1wEV25boVuHBUyitlUR7PesEcn3D5wG9UW%2Fpk1xOWC96FCXAxfZROoLQQ141XCAQhgU984v%2BP%2BRZDcY8Zk2VOCYvbw"}],"group":"cf-nel","max_age":604800}',
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
          id: "886431351",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:21:30.276Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.356Z",
            hs_object_id: "886431351",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:21:30.276Z",
          updatedAt: "2022-02-22T18:24:17.356Z",
          archived: false,
        },
        {
          id: "886404433",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:23:43.794Z",
            hs_lastmodifieddate: "2022-02-22T18:24:15.516Z",
            hs_object_id: "886404433",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:23:43.794Z",
          updatedAt: "2022-02-22T18:24:15.516Z",
          archived: false,
        },
        {
          id: "886450022",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-22T18:24:17.609Z",
            hs_lastmodifieddate: "2022-02-22T18:24:17.609Z",
            hs_object_id: "886450022",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-22T18:24:17.609Z",
          updatedAt: "2022-02-22T18:24:17.609Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a420488e7cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e22c1404-1dec-4a64-b8c4-9e7c9a32007e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "248248",
      "X-Trace",
      "2BC5D379B54EC0864B69C4BDA96872297532588623000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BFwUyFTMeKJYzil%2FNLo98tvCFVFbKRtzGsj8Kx5uy9ffhcIqT2NYL%2FF94ZAj%2FBTzOC3rqmNEek378xZ4uadBqJza0sSvlW1jt3et7H%2FfIDcmsmdGAWthGDf8WaUz3NHc"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "886431351" }, { id: "886404433" }, { id: "886450022" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:25:35 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a420618532749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "58f0a679-d78f-413a-a2c2-57509e4485d5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248247",
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
    "2B6C730109A11FC97D25B9212E319910C77A55FA52000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dyFOz5qPrDeuH%2B%2FKtTsvma8KXmlRMDhxZNmy0Ida17thdZcvWTU7c%2Banwao7MO8ViQeHsCia8oseY8nQfaxbqqowf%2BkOWgvAjqwaYif%2F3INnfL%2Fl%2B62PUHqkE2bdl%2F9u"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:25:36 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4207ddf2e08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "036ed9a9-ab34-401b-8d74-be06d6507420",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "248246",
    "X-Trace",
    "2B89C5AA3B02181E88AC2DE7873B1EC2924A7A9BDA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=siHiUou5Q74Hu4%2FVGc0Vt6a14zoaT7L%2Fgd9UsUm0HnrIaeNUkZVw0zY2Bx5i1ZO8kTifyhCYcFahs5id5jgTHwjtduCr%2BQ%2BDWkhP2eDeVALKtTQvhowEGqmPpZ9%2Fpuwk"}],"group":"cf-nel","max_age":604800}',
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
      "1f8b0800000000000003000000ffff",
      "3488dd4e83300046dfa5d723615596b2bb8fd2b0a6201a06326f16dc083fdb28d9c85a34bebb31eab93839399f64d2a77a206bc29fb6cbd17b9f632b5340843900279300028646ec9cc7abc733cefb5847ea5951d5cb7ca23bbf7ca3775e0dbafdb02a9d4c7910d48f4e6c950080103f868959883fdae6bf908073ec0d7390c2feae107bcb2204a1812bf3397fe1a63081e35f6e65717fd86efa7354751867ab40bd3629245e1b9005a9edd85daba9d343561ff470bc91f592b9eed737000000ffff0300f26ea6d3e0000000",
    ],
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:36 GMT",
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
      "sessionID=fc2cad920ee661dfc687cf049d6b73c37f93154b;path=/;expires=Tue, 22 Feb 2022 19:25:36 GMT;",
      "Via",
      "1.1 vegur",
      "CF-Cache-Status",
      "DYNAMIC",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=lu3Rp5uz4tw5KrorLjA8ff50kA%2B12cVVll3n1Lv1kTo1O%2BUmdOlgXXWRE4vVh%2F9kjeSTvOaYxDuoX4qbcSsYhdHJjCt%2BHHU3DSOLgjTBRlrYzFSRgA19%2BA%2F1CiGmJ6HP1d75gpA%3D"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "CF-RAY",
      "6e1a420a4df9f718-GRU",
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
    "Tue, 22 Feb 2022 18:25:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a420d2f0b2746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "710f6d8c-ff42-4ae1-a616-ea7587460f9f",
    "X-Trace",
    "2BD8F853AD7A879F3AD761D09EE9524F513B4FD7EA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cASG0DqSSGIJP5g1YP8tuLCOm8T4mojh%2FqVjncxYoLEaWc6UOM5R0YH0FbKllbR%2BiM9jQgSOHp8KaWOPIPBoa89XoB0oLu6%2FBpraJOiF5Ti%2BISSDrTF%2FO9x%2BXsBbQEA%2F"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:25:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a420f4b83e084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "af8ccf6e-d9d0-4838-930c-ccd0562ca3d8",
    "X-Trace",
    "2B494454371953BB4F870FE42CB38678A5C04670E0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PlnJEBpsu00QEFVdWtFk9%2B1nsdjDwGGgH6AhwWcfdyS1q%2BvwFtKqPgstmfQ%2BYWgSQrK1%2BG7%2BVU94%2F2fSAgPJF9qHo%2F2mFR9zYv4UEQoh%2F%2BBqGbOJ%2FfD%2F%2FkDsgsmG%2BrHB"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:25:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4210a8982743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1e047534-6cc9-42e1-8c92-71b118cd4ea3",
    "X-Trace",
    "2B8A65C6ADD04C739BDC789AD9F7EBC385EB706442000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jNB9M2ThTPVW11H2sLcWhrkXBgszXruvS3k1RyjvAdsLDZDdVfgKuoN8fG7thIMZ%2BztICrnL49SgPO%2FqWZJm0MykK8wTmz5beYiJ56YzHkhRn4ca4Fll%2Bu4SYN5eVWws"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:25:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a42121bc5273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "eece527b-d3e4-4316-ac49-9dab14207541",
    "X-Trace",
    "2B5DF73B9EF32FD5892F6381CCF8FBA76118F503B5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u91C3R%2BWBKe%2FprxzxqcRYK0EF%2FrpP82FHrRbWjX422FL9gUMQZDONradASwjbTUnqdhlxFAQ8IjlCyZcubTSw9ZlWzMH2fK5S8VOgdqUGm5fqbc0kJ9zDcE7Vp3aimcB"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:25:37 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a42137e27273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f3572b53-0d42-4e90-bc90-dacd4ca038cf",
    "X-Trace",
    "2B17BB27A8A04D5F1A6298FF5A59D660365C53D815000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sCuFSeXMNC30dQ%2FgNBUNa%2BEp%2FaEf2cg9iVnBDZgeXQyDfJciHaXMiBEdVuFTAc%2BMGXv0xRxIhStJSveJcNP28mLcTQGHJjGDwWlt3%2B2YxtVU32HKHKH5TAc1syh48Uo1"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:25:38 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4214dcbc2745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0e424526-d786-4d7e-af5f-c97f0beeec11",
    "X-Trace",
    "2BD3BC62E43EBFE6EBEADABB58D831422D3D4432B6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eYNy7CqF6zLE1esjI9K2Sc9AFj2REaVhoGROSCTtO%2FfGrKYXPjGfE5RTSvhhMTvShQMRBngREYBV8tAWFBVo%2BzmMvwyysYiq5u98WU20VCBES%2BnLtdVkiKMJXBLRceau"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:25:38 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a42163948e084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "e28ab904-6f5b-4861-bd84-a3410981487e",
    "X-Trace",
    "2BC2F297E0A119288AD2FC2B54C9A89E293F08802A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WcHmhRCEwqOtnsVUMN8Z8p7VWo7S0oqnHyjxpNo0xt2%2Fo0UJ2NWVxbFJ5lBerA6T4KNP%2BJ4i8eesBMHakSOfRSvSSKarX7xmIG6kQtZy74EHRgVlbQmaBsI1RoqiOlj%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:25:38.562Z",
            hs_object_id: "886373524",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:25:38.562Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:25:38.562Z",
      completedAt: "2022-02-22T18:25:38.648Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:25:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42177f722746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a5bfd608-0a0c-4750-b71b-af3b6cc6165b",
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
      "2BA890A4AE428B453D2B98848530288171DB90E1A8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Aq1qu7OHdexHzAj8fHqa7WxM1TRTiPHtBZGpa7vmB9maGdz%2Fyo%2FBKbdf04wAiLcwYIP12yXlPAuPcbVlyBW7UQOooIqjy3n8B1CM1tyNtyJs%2FcJkBHhRrAspnLbcUjUB"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:25:38 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a42196bed2746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "693b3b75-79c2-487a-92b8-27ce6c3e2011",
    "X-Trace",
    "2B82C30D1EABD4F19B405E4AC8D33CCC55AACFB07D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OUTIAN%2BbAWnNMHDVYYSB4CiyKqk8SuU%2BBv3MKYjNWcIfpDRITAJN6ErLFZ4MLvN2%2FhQEGooT9y2SKGoxUQoM9qS3PQjzJMQAX1oEawon9v2oE1iN2gp7QZgv2bEocIaD"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:25:38.562Z",
            hs_object_id: "886373524",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:25:38.562Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42d6cfd5e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "db30e483-aed0-4033-9dc5-fc31d6830123",
      "X-Trace",
      "2B7E3E33DBAB431F034B139972B2AB4F8AD8626138000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gx4OURkwFPWzGEMO5WzbBWXTGt%2BIgoiiyzNPBx13vRgudqsbnsq%2B6hfGAK7wdpySANOGt4bmUtgwoGoAlV01e7w%2FWgO3SexEUADVie55JftKnuhbj6hYBc4e5UyobaUW"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:25:38.562Z",
            hs_object_id: "886373524",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:25:38.562Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42d8296ecf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "059e45c1-b441-43f8-bc4c-a9659aa24451",
      "X-Trace",
      "2B0693215CA5C1A84642F59269650670F102B82B35000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Kj2l6SVvTRqlwrJ6srrC81Q0m3v%2F73QZyr%2F96RXPXpYixi%2Bxv%2FaFgEAv8%2FGA4gNCTjKFUPIPdvDUXlgBjOjdaKuKNoSH7rn0BlNneGvNcnj%2BtxF4GbrCvOGIcrdbE7gV"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:25:38.562Z",
            hs_object_id: "886373524",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:25:38.562Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42d99ef3e084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "983ae2f8-4906-471e-b2d9-e5b6fac363b1",
      "X-Trace",
      "2B148B3B5036D393E1751DEB9A3B6E4A43F9DEDDC8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gRGW0q%2Bb76C2JoRVVEuYFpzcjM4uWheWedl2UtO0KG76NiUj8WI4XYPEQXTEKJ1TlwpTCxghr%2FiC4q9MfdEMESueWnPIR0bqznxvN%2BKXhPoAJcNNDIuplUy8w5lnyYAL"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:25:38.562Z",
            hs_object_id: "886373524",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:25:38.562Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:09 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42db2d6e273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c0835838-0306-4392-a316-290a57615dfd",
      "X-Trace",
      "2B53963E24484BF686B22A8582A7A32EBE99A93353000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xImXxq9pdF592YseEttKLY%2BBlQTyF28vqPjoQdTOFNQn%2B1Zgos3eu%2FUECwxk%2BVxUvJVwg2oEKja70GTO%2FHZDnAhS%2FiZgWODwt3sxva633hd8cxmzEKwTv5Gm%2Fl7yUBuW"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:26:10 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a42dcdf6f275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "993cd36f-2370-4eff-b29a-a65f6fa15f80",
    "X-Trace",
    "2BE4A570BC7E9FFCD66E01937F7C6CACFACB64A630000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IyiaWdrzWv%2BwpW99wJbvbIC%2BvoVSIiPv3tWnIRljnS9XlI0iGLTY4urihAlTtYQA8LiRbLRzq4qqH0EaT5CTZz9RZlws7gmZcVaLS1g%2F29awmd8NWcrJSwMaBM3hMVwq"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:25:38.562Z",
            hs_object_id: "886373524",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:25:38.562Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42de7f2be074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "eb4660fa-32f2-4bdd-80ea-f40c98601c70",
      "X-Trace",
      "2B7724B10EF67F2D3A9283FE35E864D2138426A1BB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Zh4l%2FPG7zM47weOCEPFxoIWsq9qE0Gf9cVayXi92q46ybWhkPkGyByqOEUQbHQiZ9%2FjrO6d9%2FVqL0wd%2FmDqhWxp2I2D44Q8GuDyR2%2BLbElD6C6zBN7ndKwd6OtEu60Pa"}],"group":"cf-nel","max_age":604800}',
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
        id: "886373524",
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:10.738Z",
            hs_object_id: "886373524",
            last_name: "Doe",
            number_field: "3039",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:10.738Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:26:10.733Z",
      completedAt: "2022-02-22T18:26:10.778Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:10 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42dfdacccf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "154e8a36-6f4b-4291-ad54-bfc31b3e4925",
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
      "2B6E0F7DF8357D95EC45A65847E4C12184BE8AFEC4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=93gy9TiWQuRjLPlFvKQPXyHyCXBhzaUHij0fzx0bM%2FSbmaF9qEWJ8lP2mOOmTJn0x7YzGOCKXhAyXfmQwDEc00iyRXpdIa4b0pu%2BvaEWYaA%2FNnJ46erpmOKhsSzCPHxC"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424241",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:11.288Z",
            hs_object_id: "886424241",
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:11.288Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:26:11.269Z",
      completedAt: "2022-02-22T18:26:11.354Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42e22ee7cf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d1d21e9f-8c2c-49b0-9151-8a3a9e2b7e7e",
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
      "2BA40D88336B711772BEC7872385925A98E4C38A9B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=f32athMbaVExzRX%2FESaVyuvbfxlalaszSnFTCh8h55GOl6j3LKkaFphZdXnc6rjRAqTjlRvTq7ekYaSsvOydrsjxtAl5AeUKSaEA6E9FuSsxxS2tzwLhBQBxa%2Bksi4yp"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:10.738Z",
            hs_object_id: "886373524",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:10.738Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:11 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a42e5dddacf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "44c2ed49-b6b0-49dd-ae0f-8ab28664d60e",
      "X-Trace",
      "2B7B68CCEAFC5263A54D74C8AFE5B6AA992B09FE0F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0xBPBEb%2FaXY2Zm%2FCs6%2BTF16GrZg2jm%2BI3jvz5dNlTZP9j41iGYdDph1oSfn95pgSX29Z695S%2FSIU%2FhjBhIVfE%2BSMw4G1QM2gljntpMlyUIcdDPiZg0ymI%2BMc2c9GZY0o"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:10.738Z",
            hs_object_id: "886373524",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:10.738Z",
          archived: false,
        },
        {
          id: "886424241",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:11.288Z",
            hs_object_id: "886424241",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:11.288Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:41 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43a2dd4a2737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "24bad7a8-b51c-4850-bd9b-515af8e6b0ef",
      "X-Trace",
      "2B55C4A4447C5C2B6DE0546AEC439CD6F37B747780000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SjLjMJyO0d6BapAAP71terVIUHtV5C1SU6SMAnpiYjMRwFi%2Fh4NXhYbcdFOk%2Bqd0m8yfoJSERK2Su14n3cnqEisRrkc%2FMnvOg0ufWJ1zbF3Z1H9XfM5QKHhQQ9EMydmk"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:10.738Z",
            hs_object_id: "886373524",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:10.738Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43a479c92745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1eedd85d-b08a-46a7-a750-b719c9e9470e",
      "X-Trace",
      "2BE4C0EF20B6C8F3129124C49388881B224007A552000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BSOWGHrnQkl3cfTYNu2cCmTfJa4WImX2TDaWoe0lTbItnFfUbg3eTiI9%2BDXOTfl0l0BkZ6qUQH8F5fRrPbljw3Xzrr2zbsyAUEPEEugDv94QTGfatVzbir46td17q1Cm"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424241",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:11.288Z",
            hs_object_id: "886424241",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:11.288Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43a65e4b2746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0e79fd10-1e65-47af-8b4e-6264739bba13",
      "X-Trace",
      "2BAF5C7FD954E2DD295C5FF37E7B7B5EC519D25EAD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7nTVopXfkw3i1j%2FYs1uJu3bGgIUqt%2B1CnJs4OFtXTrzt154Zl5d0Zi%2BCIyThouxp%2F571ENDcIg8LKGno1PzRvTKqMSvjd7C4JT3m5eqRuTFzLAMpKm8q0%2BOkd3N55IVx"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:10.738Z",
            hs_object_id: "886373524",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:10.738Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43a7c944275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "94895e38-e695-4f6c-ba44-4bfe3b3092db",
      "X-Trace",
      "2BA7A519A660884F843DB0A865F08D5F4ADECCE1A4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GiKrm0msf2%2Fj7LEm0BE2CZybZw7b42alWAgG%2BQw7ZcOY3K75BCIkYnqrR%2BXGqMmXzmm4wNiD%2BApYzo5rBv9Ksg%2F7p0AJEpIfSnDbBDtantXRUpPmj6WlMkXJjYeD7bex"}],"group":"cf-nel","max_age":604800}',
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
        id: "886373524",
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:42.857Z",
            hs_object_id: "886373524",
            last_name: "",
            number_field: "",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:42.857Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:26:42.849Z",
      completedAt: "2022-02-22T18:26:42.904Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:42 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43a94932275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "96941b35-8b93-4152-874b-f2e59ad2b128",
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
      "2B49CE82723A542F8A0497D54D3003E135EAD12648000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=svbLJt2p6YJ%2Br%2F8m%2F63WtN8bH7zPfXEWJD0ZC8ZIIE%2FfRkpNwu91wRWHqlQArmAsLGJqWBtd0pgUgVuf52%2BB2cwvHwjSmaqAnErXK%2F2Bg5yDdUYHpSd7gA6NhlKvHfNc"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:42.857Z",
            hs_object_id: "886373524",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:42.857Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43ab08602746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "723cfef2-b5c5-4a13-b317-9d7eb2dfc888",
      "X-Trace",
      "2B95164D2068B2E9E0B5A05E0A146A4A5C47A3169A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YTBvYMMLmgKOHK4nZpjLjz9LPAq2eX7tr9v7xZalzrDiVpbXLCwvkkwOypiKEGrdhdU0bqEyasv2pKPayevk%2BSjCcIEsl9pCc%2Fl2brdZesBqV1gMgiSn1jNCmEfa1mMw"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:42.857Z",
            hs_object_id: "886373524",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:42.857Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43acaee22737-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1faa68d1-df51-4019-8a87-d38640971812",
      "X-Trace",
      "2BEDB46C05D5AE64A338BB30772E9EA9A2359453C9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IsKCDHlD74iBlClgSI73zOHNc%2BZ0MO1LY9d4B87OgX72z3LpJF6WcfdDLgq8wmiSWqE1k%2FEUNepgEbliHRW2pCzMVsRZYfehlW3ceItJZkQctCerbmhloZqBiOf4I87k"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:42.857Z",
            hs_object_id: "886373524",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:42.857Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43aecab42745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e04880e6-601d-4e82-a396-3550e8c874f7",
      "X-Trace",
      "2B125F1759A66247EC7DCED411D30904C3782641A9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uBxdNjoHrPSRSwmmW5o0S7G04o8n05DsxIlLNhHUa7OOi%2B7fwy4W2B2U2Kc5%2FWZ95Vc4LoYAjsgAW8TAvSEaBQNoyjFoZkoBtEgnSZ7qF5vtXTAzq7DJ%2B7aCsaXRwjvE"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424241",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:11.288Z",
            hs_object_id: "886424241",
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:11.288Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43b03f3dcf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9bf9e366-afe5-46a7-a3b7-3eff758d6501",
      "X-Trace",
      "2BC5D9FE49AAD30834D4FBD44A4128567CB2682136000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=hr9oReHcLQ275GX4EMDpE6UaOJJRQPbJUhg8JwZAPDslM2itM9pq%2Fg6w6VViKQAM513VnBnOwEpa6XoNmqDikCfQ62bypMSfoeYOEoumwvLUwb%2F1zDl%2BZJb%2FsqvPjjDf"}],"group":"cf-nel","max_age":604800}',
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
        id: "886373524",
        properties: {
          grouparoo_object_property: "notgrouparoo@demo.com",
          first_name: "John",
          last_name: "Test",
        },
      },
      {
        id: "886424241",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
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
          id: "886424241",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886424241",
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
        {
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886373524",
            last_name: "Test",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:26:44.340Z",
      completedAt: "2022-02-22T18:26:44.389Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43b289e82746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "481e9704-2429-40c8-b436-0c84f79d4f0a",
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
      "2B80273BBA8AB385BC2A8B37BF793AB5787901D605000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cy%2Fc84eKMyQsoALlZ3FhLgYMEqluEvv0gFwCpjJNpd8%2Bq8pbJKHrDKsT0yn8dbNXoll5oZMwL1EsdjBNiOG2QTahVlBityNpcF%2Bn%2FPOLB9pSjZ%2FLjAe0Vbkwu%2FmxE0yS"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:44 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43b44ad1e084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5e8eb565-da91-47d8-85b4-4b442218c3a4",
      "X-Trace",
      "2B89361371953435E2887C2879825A81BCC146CACC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=C1msCpY4%2Fd8KC2MuxyR0qeSrWPmqV1HyoSEY1trJIc1vIzj6%2FqsmqvpvNj3j14iTSHO3jf%2Bhika%2BuMohi1yZplsANSNE5ltEM2QerJ4QGbM9Qf8FYasqJWztoPPzd30S"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:26:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a43b5dfa82743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c0124333-c8cc-49dc-a94a-72724d310cc9",
    "X-Trace",
    "2B566905711551FB559C37F55CEF433F8BF62F9D01000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=CGQd4EW1nkkwcuHk6sZvWP3Gl%2BGeflg2V8i4vXwOLgt6%2B34Mvy%2Fsyt7uuPrG0BzDyHt4jjghEyKt4Dc7bDa829fp6JWy%2FyCQywM1y42Yl30E%2BfWulQZTpV6srgwCRJ6F"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424241",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886424241",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:26:45 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a43b73ff2cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "122881eb-2dc8-472a-bf45-6e4c362ebdf9",
      "X-Trace",
      "2B4EF26A033084F8B16B944591543AC2F87BF3C24C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=da3cajvXV%2B595zm0KSdS4Vs80mB1MtDQZ2wvdZLpObWNarch2dp%2BpXlzD%2FEAfcvIxG4OKt%2Fz8Q9SB5spGfmIWvuAi4nFDAYFkj5wjslBA8zGRNDxxg3WDu0XJIK%2FnTiJ"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:15 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a44746c102749-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2daee8eb-f7ce-44d5-bb55-f81c275b8e6f",
    "X-Trace",
    "2B352472CC8E0B9E36BB25E95918A2F24FBB0918ED000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=gH7dA1sPYPHPsB8mWUs1WktkAyVSjoLIBEbbTN55QxawHeK8cVZn7IANdUYm3BD%2BeAermiX7kUm6gjWYqHi3Oo%2F7ysLYde39mdu7X0v85mVckwQjdvZ6dPhOOsSyhAdy"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a4475e9fc275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d6bc9827-2ae1-4133-95cb-7b5d0444fd14",
      "X-Trace",
      "2BC35278711B73279BFDBB2AD01BAFFCF384B20B97000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T7EKUMAUFa1u0cwiGmahuyf4RrpsRIO8lEOjnRYd1gfiRl5uF%2BbBeHIME2wsuDdkaB%2BtXZBP6e6uvmznd6R9COcEKp5TzqbC53su4UykG%2FnsUA8nc%2BlRxkLjnYWQ717C"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424241",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886424241",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a447779a9274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b7a08db7-a4ff-4c4a-96c3-480108ffa187",
      "X-Trace",
      "2B01F1B5F3CA25C00B3C91F63FC1131F350C736193000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tSHDUdPT3waeSYPrPDr4fwQdTmkJrrqmTZneF2HRNdnQkkB4APas2IXv0wUVcmRlwUXZZRR9l1fUdRO5fFLTYuNk17iwGCp1Ddxgj0%2FZDeY7PWJEmBEHlHlv7VG7FuAj"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
        {
          id: "886424241",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886424241",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a44792d39cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ce96536b-db6c-4065-8391-f53e62f510f8",
      "X-Trace",
      "2B9345EEDDDCB0355DB161487A0CAB2FFD9CCD0A44000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X%2FcCzZVzxoePcnkMg9neeihCEj%2FrScJANqqxCv8LkpLEYaeYUvOR351Md%2F5rozuMI0dx5IS5vIPZeNGwrnNQqgo0C9Jez2n0%2FhqxIiUTczunw1FL9KftGbkbYWLqoVry"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886373524",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a447afd5c2746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "de5ab81e-5476-4961-9f48-ca82efefa4c9",
      "X-Trace",
      "2B826E91225B561E0725275AF80F4B9DA104C7EF5A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=qy1IUB%2B3K9aWmkB0IdD8MRP18aACZ2mKBUcBKqriE5Bj6T%2B%2BIYHNeI46kiLCpjXFxQbhvJifNXIgoWKkQX0bF%2BmC08Lp0IFamrxP%2FM0pX0b0%2BtBL072BOh%2FuOKnN%2FTD3"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:16 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a447c7b95e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "49a30411-41d2-4f84-a1ca-30a56bfe3ff6",
      "X-Trace",
      "2BC2B18E778FFEC6AD0F5D3AB5F541E0794411383E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=12Kuy3cDF5L3VXXeR%2FPYn4vi%2B2blaKsFIyhRSxi%2BJkZ%2FcVrsypuCg%2FFd1Zg82hlTXuTtgq%2B6kIt%2BlITIQJFdS9FmsEmvNzw5%2F0fJOf7KFwaNQqGER8asRUWM%2FYhBqGMJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886373524",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a447e7989cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bea3d608-1735-4c0d-a001-de67260c2841",
      "X-Trace",
      "2BCB52D4D37A84C0D71A16A47799268DE2CBF74817000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fNkHtBrJmtLvNLKXz2Cv0DYs6ZrtSylENiJIElJ0JkO8Qpzhebd1uwkMd1q5SYJJGMJ2I0mpiRAJMkQY5F2lM%2Fzts8zkgvJ955RlfGwHLJdFdM2Utdy98CtGtqSlyjNj"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424241",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:26:11.288Z",
            hs_lastmodifieddate: "2022-02-22T18:26:44.345Z",
            hs_object_id: "886424241",
          },
          createdAt: "2022-02-22T18:26:11.288Z",
          updatedAt: "2022-02-22T18:26:44.345Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a447ff893275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "57952e23-0403-4973-bc5a-53455d54ab71",
      "X-Trace",
      "2B924D882E927A6FE033420EDE6FEEABD150761233000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2GBcSMRhAeJ0pDk%2Fz1d9ivUoqFT2Elnv2oSsZCW2NGd%2Bb%2BoPHUtXmRwqry%2B98C%2FrmXotG0361SzNALmMiaoAYzjzJ2%2FY%2B2UI8Uk8vYIKYHJD1cDqpNlBmjXKBA7cKjot"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "886424241" }],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:27:17 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a44814911273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8f319399-c109-4c75-b490-19a6ee0a9626",
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
    "2BF2ADA71C22BCF9D804C9BCFD7E3F7E513A30DD4F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BTR1IuxpOXVy%2B%2BgPxpSEhZh4Wl4xrhfoHatMZFLVcT3nNT1bAOQpUQZNydFF4sBpntS7JNcHF6P544sFCzyUa1cQCuqDjBita00UfMPkyk448VzKI6JemZs0wxCy2mBo"}],"group":"cf-nel","max_age":604800}',
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
        id: "886373524",
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:27:17.683Z",
            hs_object_id: "886373524",
            last_name: "Test",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:27:17.683Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:27:17.677Z",
      completedAt: "2022-02-22T18:27:17.726Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:17 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a4482ee3ee084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0492d647-3710-4a77-9fc5-f0be3f65ffa3",
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
      "2BB31C8748242048668539BE44EF41DE8866B18D29000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MJVBU4T4tAPIfBws5RKwcxSKxDrTfIfx7m%2FaCmFTVfMi9y%2FqY3vgJeD3s9jn3CzlgfSEM%2BcagDbE%2FEDO5IIyVz%2BpYeKTYNzbTjXEG9BYsBmsRY%2FRNrBsiswRWAlCbFXc"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:27:17.683Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:27:17.683Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:18 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a44849d69275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "277c3669-cb55-4869-89ed-d37a3724e9f8",
      "X-Trace",
      "2B07E046CD330898AE2FF4E084C1CCA45FCA3FFAD0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZRSxz6rkUTNE9O7GogtEv2e9U2oQIofuSr%2BBqeQX5C9yHqLw8v86XKnvEB9wNckBxu78U%2Bd9IQOpXCiIrGcGFzLEGvnLfaHc%2B5jF2WDqcvOpeb5ypJnBkcqffVq%2FnYxO"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:18 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a44862c58e084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d8b46538-30f3-48e0-bac9-897ba1f957fb",
    "X-Trace",
    "2BBF710182F653E22DD028C0FC7B2195E9B3B51BBE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s%2BWD9gY9%2F%2BCl1objOIvH8OuGlU5GGESUW3H3o%2BtLeCnQqCyQpu3UkIi4YzpZAPmiS8s7Ga2Tj5wOB4vvcJiG%2BxIKieQou2npdKAnVLMjHX9Lu2kZPVkDGlL5%2F%2B1MAI%2FT"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:18 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a44879b3ce08e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d8ac6822-2a81-4d9d-bd62-4782159bb253",
    "X-Trace",
    "2BF26263F6311294D3EF594968ED54E1CF6155BB7A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HgEjB5RyyUe2xdQHfRwi9zUHK51qKhiA%2FWxCK6wsYk1W2fa4DOx%2Bmz1jko2573ca0XHPamWBlKnX8NKghD7WYdeBXJ1oc9q2oHswygnpwzG%2BLaihpR5BfGjLOX3sYvUK"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:48 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a45449de9cf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "10446302-4b71-4618-87cb-be1b939d20e3",
    "X-Trace",
    "2B0DA16A7DA67859E78A64222C11B1DF8C48B1A320000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1rA7jF7NrfciHwCis5LWTnBVf1Wv89moxD%2BRPsWcMKDy%2FrX8SbUWYzHsrmeU%2Foy0Vzencp7ak%2B%2FaMVn%2BjFWN%2FJ3cLQXgL4jqKtgkJiZ6%2BRuiOGWVjf3BgBKYw1E1dG6p"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:27:17.683Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:27:17.683Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a4546ddec275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ac63e92c-c324-47b0-a007-efb816839f7b",
      "X-Trace",
      "2B5249DB8344CD2925506CD641D13CA4FC74DBB11B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wzUjj4tDx9WvvbuVBFUFjlLdZb3zjI1l2W1UAvs2i8O5%2BZr8UGy9Og2j7iKkgrk8zK%2BvVrPIULEEKKsa9%2Btb%2BztJ%2FmvFprMPZJL0t3Vm3ioP4OouXBSpBVoe7I%2BcMQcY"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a45487e352737-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fb3a1f2e-5bf6-4ec0-bdfa-cedf3dec506b",
    "X-Trace",
    "2B0DBB3937402BD811AC88C7C6A39155338C3EFB85000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IXsTZudp8ZVK5iZPFqzQeLYOdDawMBDx3DOJuHtJP3eWcVxWoSkYoW4WuOxb4SgG6WD%2BODyZJyfZbC3V%2F2ko%2B%2FJC8dWWidZgn2o5FdLSE%2BElblH3eh6j3xaAR25X5%2Fwm"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:49 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a454a3cd42743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ee7c535b-6a63-452b-99a8-91152353145e",
    "X-Trace",
    "2B032CE8AA18F20F8193B8086EA9520885749FE839000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Y9yS0xoLlRJV9%2FwRznHPDyuPjt%2FtNJqDeYXUAvk88r8YSd4AbcXnSYkPKgmxADHg%2B4RoEBR3HU8G39e234g20kIaMVhPNVUQQzvNuZ96CHSoAx1WITg%2BqJ7KPgVYmnu8"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:27:17.683Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:27:17.683Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a454bad8de084-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3241b9b4-efbe-4a97-bd0e-d8393e3153b7",
      "X-Trace",
      "2B3FE8BE8FDD6473F9E0E8BB5DBA715E3FD237B458000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xDh1RTqh8yw6zpySZK2%2FHcyI%2BGBvDdUDAuy9QMIGaJ%2Fb3Xjp%2Bkpts4GwysztejwpUfJav8JJV6%2FqPV%2FsKunF65kXzOA%2B6a%2FMn5XCbnr6PriJ7zuBJ1fOaROsjqysiGxc"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a454d2b832746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8706cc35-8a91-4687-b612-0304ae719315",
    "X-Trace",
    "2BEF4B3CE89E7CDC1B24E1336A074E460C8AE06028000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=o%2B4EAWgJrrHXDea5U1n3giqO8Ekcc%2FOBO9K55%2BiP5%2BIqbvqXrfLhjj5j68%2BVCJhg2p33AkHFFJjFPtUIs2zNGsDlKmsX4jtSWVQc%2Btl21Ah%2Bqlmh3bteEb5PtaRI4BwC"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:50 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a454e98d1cf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "205c8eb2-9e3e-4647-8c42-f4f493eb7230",
    "X-Trace",
    "2B0333E07ED1B2077D3E407F9ABD5542FFB3F440F0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EQmxERSnrTQpsg%2B%2FN7%2BwjnOUXYE3DF%2FU6IARpQryrLplAhjNo5masDn%2FnW8aqul7OTREgz49%2BYBaoyN3DOZwqG%2F4YjuMkTj6yPTT3rsjFu4sHyizilec8qOpBy8rxN3k"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:27:51.056Z",
            hs_object_id: "885943135",
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:27:51.056Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:27:51.050Z",
      completedAt: "2022-02-22T18:27:51.136Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:27:51 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a455378472746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2fc4ee77-adff-4252-8c15-66e636dcfd15",
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
      "2B6FA73D202BC5665C9E13AA61B6114D4305F31436000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PCMQy4rzBaFN1ROK6N1PiQze7CXSy3iVotzhMDT8%2BFlGzDgaUFEMdSqVrj%2F%2FKRc%2F2eJWaY%2FNClosP1Ooh63koRAb%2FQ%2FIVU8gX7kfDARJxeBPTiYtVqUXNK6Gq33Skv9I"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:27:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a45556baa273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f18db103-64bb-4c36-a92f-bbc387845a4b",
    "X-Trace",
    "2B46DC3D0D05B9583058B5EBDF2A219732CC47B36A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ztey0bon7hrKwV3DXknorLVEHKDM9OHyB67ali2lelqxTC7kdz5yV7UuW0i9nVhqcdjT9Y2EVrEfM9PZS7ms%2B%2F%2FkwuoGihy7ndpSLyVMZp1h0mf69fx%2Fbr8EBXOH15zY"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:27:51.056Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:27:51.056Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a4615ae9e273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "52037992-2653-4cd5-85cc-6805f9e08a59",
      "X-Trace",
      "2B2C5554C94ABAD73BD38AE72515AE2769F7F32605000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=M2tt5AsrhAnVX9Mi2V9%2BBMCGbz%2BDGPzZJajTfQbNFeDtGY2DOGPdapRb56gZG2OQNsZA8MMtmUVH%2BbFi6Otwsywbv1sIo%2Ff8%2F0p96YAXJkd4bpkpF%2FZprbobrp6I8Db8"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:27:51.056Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:27:51.056Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46171c01275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e040f7d2-1142-4d4d-bd6a-0558e9828c9d",
      "X-Trace",
      "2B997E8E3ECBD689BE4B44652E0D3868129C3F6EFC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wDkNgY9RbaLo9zQSzJtPbsOXVdFPUTIVUz1QxqxxQjYA1%2FHxeM%2BeAaV5ubg8Nn%2BzS52WJ32nGDYhXf760bji7UG6XtgR8Vu9QMCeimaGgPQXmhT%2BCH9Tr9R%2FRvjk20ao"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:27:51.056Z",
            hs_object_id: "885943135",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:27:51.056Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46189ff72746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "59e23cd8-1012-46f2-8f8f-de3e6dd0e974",
      "X-Trace",
      "2B7E0D31FE0B1BA1ADAC214C18100835F9C75D8E98000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=RtbXHkHPeTfjfD4SdkgRk7x1TQ3O9DJcVDgCttozz49HdLrM%2B2O3s5pdvBBkMGh8RMCDMN%2BxLTGHVOHr46Op13ShXMrxDWnWrRm2sr5o9W3NBMDxEIr2Q%2B2Qtq%2BuIHmq"}],"group":"cf-nel","max_age":604800}',
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
        id: "885943135",
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
          id: "885943135",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:28:22.831Z",
            hs_object_id: "885943135",
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:28:22.831Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:28:22.827Z",
      completedAt: "2022-02-22T18:28:22.875Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a461a2fe4273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "8fdef926-38bf-47e4-b6ea-802c15a63fb1",
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
      "2BC275E4F0B24DDFB441AD10905C8D8AA795464A8B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=183ulOVfc3QcygWMIjvIpwrn40jJY%2FlOSg0q3%2F4xpJufUY%2FgRea9rXmngXgPsuP%2FMNJkvg8e8qVeVU%2Ba0pBWXQaO8odurnjXCZ%2BHUcch0KdcnxWEZ7K61SgxQdoSJa72"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:28:22.831Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:28:22.831Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a461bbb76cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2aa6ede6-73e0-44c4-97d6-1d516b155723",
      "X-Trace",
      "2B721D1EEE28AAC68D5ACA73D2AE80CD5679F7CFF8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8Xmhzf569nVujGX2w%2B3dpocTO8ROCOOVaXnZzxoU5B4InpjJvUIjrD0eIomXIsP5EXa3g8nIVws%2BqcRXLwxbn3JJL9AG1YuFjxp8l9gABGzyhhTVDVqhFVclFkKDyPcS"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:28:22.831Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:28:22.831Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a461d5c352755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4a5a712c-6147-4621-ba7e-d736aa3e6f49",
      "X-Trace",
      "2BE945BC3250355BFEF14C2FE9EE41BE412145F052000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T389Kpyy8UvP0l%2FeZEhZA%2BpGc1LFJlmHYxHQVtZpS6sirVTQMTRO24Jq97MYumVgelCQhYCCsmX0Ut19Xipkiw1wXrZPVGDzwjX686h8dYReBz7yj4U8upAAanv%2FnGVD"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:28:22.831Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:28:22.831Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a461edca6275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f5c43e69-3f5f-4e8d-9bd0-565342eb6af8",
      "X-Trace",
      "2B19E8F84DA7EC1252530C9E2509B91F0D463ED4A0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2eKZyqDA0cnumFvgd62anWFNg7FMGJ8oK1yv7tdKTXQ3HGwJCZ6YtnK3hCMzXm5g60clc2qoIGnQCI38SNmnz9GLQd%2B78QQIVuAo1NfUSastiMGxhtty2Sj7CUO5J%2BIz"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:28:23 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a46207963cf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "70fed0ae-4bcd-4ec7-8bca-6182e5447738",
    "X-Trace",
    "2BC66D80C41B2F7FC6BA4008B46232A873095BCFDE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=15gkLqTBjRfyOo4LEf%2BkxUnHJvvVoRaWl615M5u8bVNqV%2B9mACTTGnMY7ddP7nCgTBpzj8k6RgWEuXORQU5c7jJ8P7tv6njgbv%2BbL1R8hCxt6o4uGKcwbCdyPgTE%2FBDj"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:27:17.683Z",
            hs_object_id: "886373524",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:27:17.683Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a4621ec1f2749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a19dbf44-7801-4437-870e-1f82cd1560a4",
      "X-Trace",
      "2B84169BC2947B20647FA5A285FB559D47C363961C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bD%2BRRu6CRFuxnRv9z1vRntjNJEKNKIbo7DAOai6aw72EUfP6jAEXXVbi7BJacYB4YjOAnMT4is6KaPzNiYsyW%2BpQk7%2FT6cjC%2FfTHv0B%2BgSCnSmQuSGuJQnxbA7g9NceL"}],"group":"cf-nel","max_age":604800}',
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
        id: "886373524",
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
          id: "886373524",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.398Z",
            hs_object_id: "886373524",
            last_name: "Test",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:28:24.398Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:28:24.393Z",
      completedAt: "2022-02-22T18:28:24.539Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a4623b848e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "aa160118-a00e-4ac8-bb2b-2baff910a8cb",
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
      "2B82AFEBA11CCE84916B4C4DE43C67134A88D51E28000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZoWkuN3dQt89iVmzR2tLFbmRAGITCWR14AMcZWhsiOTAEgDQCh%2FGEaha%2FB1EL%2BRhOMwAasCgJnS%2FNNiIlBEvsRKInIIaqf5%2BPq5RALL1iyZxDduMfA3REG5drHr%2FJvVM"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424594",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-22T18:28:24.756Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.756Z",
            hs_object_id: "886424594",
            text_field: "some text",
          },
          createdAt: "2022-02-22T18:28:24.756Z",
          updatedAt: "2022-02-22T18:28:24.756Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:28:24.756Z",
      completedAt: "2022-02-22T18:28:24.847Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46264cba275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c2c86346-11ca-4a86-9169-e7641fcb9142",
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
      "2B7E649CD8012039380E0FB21AAD19734334FC2663000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3pYX1KimXB8Lb8cO8UcpWMvt5TAxB21at1mxbIvqwEhBSYKPl16hgzRzsqncT%2FTTMYT%2BZVZwtc8Fkx9MdNUiSeBRCVwUT1zb0nmbXBt6IcKyUOdYijN3nirGlSAGAZEg"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.398Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:28:24.398Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46281fda2745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "78b49cf7-afc3-43f3-a7f7-c9c31c194c57",
      "X-Trace",
      "2BB5855BFC8D6CA59A41132784977FB77BB668EEDA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wYGgyqyQ04UBdD8TGjUQGUg1GuYUsE3ACJ7xZbFjWZAaPF6WvDkmEqnTDEUsILyXvNKWwdwJrAPW6dBfYg56HAjaQgMENx%2F7BkjXx23dt6i%2BFcHkT89A%2BL8bquNSF3MO"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:28:22.831Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:28:22.831Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46298c58275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ec20d7dd-5611-4a3f-85bb-a3014011859b",
      "X-Trace",
      "2BE68DD7BFF942E526194FD5E72AA9360AD3267E66000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FfGTMsGQq08wTfBJLpbMGQs%2FaSgpRlqMjUab4ncv3cucfsL%2B%2FirGdMWcxod18vPcqKdW3eUUfHAdYzJGfgWhwCbgcpnB1pm7q6E8K95RfY39S6OuZuYwBsVsRYiycdZD"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:28:25 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a462b0ba0e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3eb9998c-2440-4647-a092-980bfc114966",
    "X-Trace",
    "2BDE60654FA336C650EA49249101FD14358BC8D328000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=HxS%2FXbHkf8FD2CqreWDU6%2FYS%2F52cQLDPnBzkfmySzCGvIvAGt3pZfwdAA%2FFPFLJa0%2F6UY85fAjVogLDgHEFiDh4fhWpqUbUDXxmzJ1f%2Flo8LLX7U0O7BUlj5cEEvOQ3s"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.398Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:28:24.398Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46e8490ecf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5c78a494-1cdf-4045-ab54-081ded08efbb",
      "X-Trace",
      "2B6EA3643726A1565B7CFCDC675746177F1BE7ECD4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=k9ytjlZfjXCX%2Bze%2BTMG6ijHwZaZUzklNehneR2t1j%2BCdxLlORtx3bUKOhkntvpMXFYqsv%2F1cor8LcGb%2BXziM7UXCMC95nh5SdntMJHr63WC6VuCMCq4IaTn7COzxr%2BrO"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:28:22.831Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:28:22.831Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46ebeb172745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "928c36fd-27fc-435e-9dec-98bd101b0e16",
      "X-Trace",
      "2B7EFA321389DB517167B49098011388A4213EED9E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xF5peiabxlSBK6pTFYd7KX0T41ROCUC0UcQKGAdeujOkJoLH1rc9ApGXvZfgAcsNDqOuziPmglttRg7tPqZfmoOjq1QAO7Bes1JgM6M1AZW0jkxv8oxEH%2Fd%2BkZJiouwV"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424594",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-22T18:28:24.756Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.756Z",
            hs_object_id: "886424594",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-22T18:28:24.756Z",
          updatedAt: "2022-02-22T18:28:24.756Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:56 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46ed8d31274f-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4ba503b4-73e5-4fe9-bf61-319b33550852",
      "X-Trace",
      "2B0BB8D589343344AC44DBDCAA8CC8805B08CF67DE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9AuwC3zONlG8LGUESoderRe0qfmyY2TabqMfjcU4sYLJOSOKjY3n05W1kQ1eZOnOpxcrqmGkZuzSeHIF1L8Wxq09yHKmOvnsSoMdPgc68IbYtEPSybgQk%2Fi7NMOxCHwH"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.398Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:28:24.398Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46eefdebe08e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5469b226-0719-4f85-bee7-247e4413be45",
      "X-Trace",
      "2BC397CC93EB9B167BB89C57609C0DB3475C9903D8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8v5eKy1UC7UhRJi63YWnwv02H3CJT9ROYPYzPrIAo%2FWQjWOiO19jBP7l%2FZGQGpteIQJic7mI%2F%2BFCRocCJ7uSb0k4H8OT5eWsS%2By8TE9hjmflIDTbw5kgFI0nVWQq8gFo"}],"group":"cf-nel","max_age":604800}',
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
          id: "885943135",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:28:22.831Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:28:22.831Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46f14887cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "db91d7a5-21df-41e6-8a56-97160d09dbd4",
      "X-Trace",
      "2BDF1058F37C988B1BEA370D72F007A380FC37F817000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Tlj%2BByaOopd20RoO1a47Uy2stWeMg%2FCpj8RCEjPacLIsHfEQkqyXhBQvDDMxeDw6fRrVznhLkZer2X5ZZFJ%2F3%2FXxE0KrxtF%2Fcwmsd0o8%2BJgbBkw1i2tYqm7bUtG1FwZK"}],"group":"cf-nel","max_age":604800}',
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
          id: "886424594",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-22T18:28:24.756Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.756Z",
            hs_object_id: "886424594",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-22T18:28:24.756Z",
          updatedAt: "2022-02-22T18:28:24.756Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:28:57 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a46f2c9b4cf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d57f0da1-a69b-44cb-baaa-b0c8a58bb68b",
      "X-Trace",
      "2B3D52DCA74269D2B4D3EF334CD078ECF3F0F49D93000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=P3VXPHgtOkirZPtUz6fhQgQycPRKA6k3FYo4Wvup66TepS2hNrLj1Y5XF1Z7D3cUUEKU6bc8g4KA4KJbcV0aom96kHHK5n7s6t6io41rkpbkvwDTSHFVsLI3Ya1U5eLI"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:28:57 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a46f44e6d2746-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "032ea67f-a510-4b36-b814-9cb630856ad1",
    "X-Trace",
    "2B8999924587140926E8EAFBA16FD9D3E4F053167F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0Zw0TKboJ0kCh491u6RzaZmI1bVYCnJVcHM8Q%2BZm%2Fi%2F5MaB4wQEkKpe2OZagNOWscMHziVCBeia%2BlXtjbP2NEzz8eAiix%2BPHs64IfyJjXRKBRasz%2Bjj3XD%2Bvq2DtT6B0"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:28:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a46f5bae2cf9e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "31f7fbd0-eda7-4aa6-a584-b25397210a00",
    "X-Trace",
    "2BB9FB9A0D056C90BAC758D21BC870B6E82B64E787000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JVoxKFkCqlubuuKfZxp3vowEwIjquVay%2Bg%2BxNlTD%2FDMKTa11puSqscnxU0eaMmcDlZloDSIZEEkvbsbqAeVT7vW%2B00p0NHsoTvDuofeN16aKe2eSwsMycyuRFkETzatF"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:28:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a46f789cae07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b8b337ce-22cc-4283-949c-5c5e75e650fc",
    "X-Trace",
    "2B6B542B4D3DB30B53E76A9E72E99802CF9843E948000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=z3y%2BjZUF7sxPsq2c5MuFMP7gQLTuoLF2xrKkxJEJkUV5uB1Af%2FD3Q%2FK6oZW1sb86aT2uxHS7nwPG3GBIAyk%2FiMDHhIxPVFQgoQJmZdL07eRUw4cGN2LLm59zm31Qkqh7"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:28:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a46f9b862cf9a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a1225830-e79e-4ddf-a392-98fdc4e7da54",
    "X-Trace",
    "2B2785F9D01096B6A918BB7ED65A2392B089161ED8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vxEqwblKSjEeRthQxRrpDG3PO5fEgYt8bNQjzYuaY0NFVN3fylbuzk8WLvrs7YluX3c4BfIF%2BsJ1NB4Xqkqmugsa1Ds%2BtzGg2ofdFlHqoNIH4nSZzNTIxaQf9Qai4qaj"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:28:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a46fb486b2745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fc45d71a-cb51-401c-a2f1-0eb67c684cc8",
    "X-Trace",
    "2B06CEC9EA027DBFF7E56B5F57C0AC23F12D5BC71F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=253Jxxr4qf16JVxLO6XyLqPS13enDDIUx%2B50i07vsEnrwAliQeG3TGzMb5aIqTFcoMA7oO2AJPNnMbtfkOivVBo2QTdNBVvEmsUxYpxAbZQ6druhnZII6WydAa%2Bm6TVx"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:28:59 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a46fd0f3e275b-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "83815c6b-f47c-44c2-855d-e01a476c86f0",
    "X-Trace",
    "2BE63434AF28BF93ABF7E732ABDC401931DFAC5806000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ouu%2FoO2pOduhOiv77%2Bux9MCY%2B78vBUMFfsSK67G8MCeLkO2Kr1zdwI846wdTnUpXCJhS3hGwRolsKa7Y4RvI5RnKRtAChHnCqdCOWUEGNWa1FEJrskVIwlRU3YQShA5y"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:28:59 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a46febed5cf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "f35ce441-badc-49e8-a694-bf2214239205",
    "X-Trace",
    "2B0409328BC3EA909F190DC9A512DC95BF3740C545000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SUjk%2BTvUIkhlFl9Mw2JJSkPAsTpSaMRi1sWIDf5matqIvwACDkLClzURPGFOZXf1Or%2Fjn1%2BuP3KvKbeiWCo34UTSFTaA422zeyUcFLpS9BF5sicg%2BcKwNNVXskAaDNjy"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:28:59 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a47007d282745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "68f7dc87-1460-41e1-a77d-a96901760223",
    "X-Trace",
    "2B0805FCFEA7249707A958A897D659EFB0B5AE52A5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XqyKZr5RT4lGx%2Fx7p7KepNGEcJpLV%2FTYWZxKIlDSCRsxRK81wKAoZfTmuGyu3PRJ46FAG%2FZvbVY%2FOXx33pvqbbAFZqcUNIBO17lRq%2FHD4cfKsJ7eqhZ1DlJO4pAvHR8z"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:29:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a47027a7f274f-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "bc7c3086-4d01-4aaa-ae85-84bbc79214bf",
    "X-Trace",
    "2B057236EE2CFE4B1D4486365EBEE0E7BBFAC8AB2F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QXxZDY9TdNlZmPveVCZgJQRhrKmxzuXeFSjaVSVg9GfgTrz5aul21sDWetB%2BsiGQ%2FOoT4tzAX%2BOCGy7mXvP0STB9clAFmDX%2FmoUyGxKqbK8d4FDhvbA5vqdW4IaL0fbT"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:29:00 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a47040f6f2755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "9f81a77b-d28e-4a8a-ba38-a73ea51dae46",
    "X-Trace",
    "2B4006D62AFC9838A0DE48EA0AF2461ACA870F1F28000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XTLsziW%2FtZ0eiEYBChdVBD%2FHRnwvO3swFfc0VSrq%2FmfqfNSCdSOBHcaybR9x3zjEObi3idzrbUOZkpwcWqIsvfvvdxPbpyieHJyUGGYL4tH%2BHxHXh74boJqQF8AThnng"}],"group":"cf-nel","max_age":604800}',
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
          id: "886446009",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446009",
            last_name: "Last Name 4",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445971",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445971",
            last_name: "Last Name 34",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446004",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446004",
            last_name: "Last Name 6",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445989",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445989",
            last_name: "Last Name 39",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445994",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445994",
            last_name: "Last Name 42",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445974",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445974",
            last_name: "Last Name 36",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445986",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445986",
            last_name: "Last Name 25",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886350948",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350948",
            last_name: "Last Name 47",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446081",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446081",
            last_name: "Last Name 49",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445970",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445970",
            last_name: "Last Name 17",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886350951",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350951",
            last_name: "Last Name 16",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445987",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445987",
            last_name: "Last Name 31",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445997",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445997",
            last_name: "Last Name 12",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446008",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446008",
            last_name: "Last Name 5",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445978",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445978",
            last_name: "Last Name 21",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886350952",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350952",
            last_name: "Last Name 10",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445975",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445975",
            last_name: "Last Name 30",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445988",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445988",
            last_name: "Last Name 32",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445981",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445981",
            last_name: "Last Name 13",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445992",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445992",
            last_name: "Last Name 18",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445984",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445984",
            last_name: "Last Name 7",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445995",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445995",
            last_name: "Last Name 9",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886350953",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350953",
            last_name: "Last Name 40",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445996",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445996",
            last_name: "Last Name 11",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445977",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445977",
            last_name: "Last Name 24",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446003",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446003",
            last_name: "Last Name 41",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886350950",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350950",
            last_name: "Last Name 35",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445969",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445969",
            last_name: "Last Name 22",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445985",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445985",
            last_name: "Last Name 26",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445982",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445982",
            last_name: "Last Name 38",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446082",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446082",
            last_name: "Last Name 0",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446000",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446000",
            last_name: "Last Name 48",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446007",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446007",
            last_name: "Last Name 45",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445983",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445983",
            last_name: "Last Name 44",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445972",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445972",
            last_name: "Last Name 33",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886350949",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350949",
            last_name: "Last Name 29",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446005",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446005",
            last_name: "Last Name 8",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446080",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446080",
            last_name: "Last Name 1",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445991",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445991",
            last_name: "Last Name 37",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445990",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445990",
            last_name: "Last Name 19",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445998",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445998",
            last_name: "Last Name 15",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445976",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445976",
            last_name: "Last Name 20",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446002",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446002",
            last_name: "Last Name 46",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446006",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446006",
            last_name: "Last Name 43",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445979",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445979",
            last_name: "Last Name 23",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446001",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446001",
            last_name: "Last Name 3",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445980",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445980",
            last_name: "Last Name 28",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445993",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445993",
            last_name: "Last Name 2",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445999",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445999",
            last_name: "Last Name 14",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445973",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445973",
            last_name: "Last Name 27",
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
      startedAt: "2022-02-22T18:29:00.543Z",
      completedAt: "2022-02-22T18:29:00.836Z",
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47059cfe2743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "92b17bff-7709-4474-8553-14a74391e41d",
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
      "2B6C62697D694F1505C18EA722FC917D1E8F6A71A5000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sBv0yawxaENQOGNdXZ%2Bz0IUcDkXWtEFiomkeccvhDIKOo2XKAXJ3uXJX0iIi1W4EBeqA4bYU1UlKWBzJ5iQjchsGV%2Bja2uFnpaT3hRHov5tKjnN%2FK%2BCHukfUnoSXOmCh"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:29:01 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a47091a9a2755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "36b477ca-cf25-4031-bf38-c13aad3e95ff",
    "X-Trace",
    "2B0A4B141C4ECC6BA0D2DB3208AF87D567195C2A5A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=XHoNTSgMwudVQ2h3DiVHSxukqGYzIqteEBNE2hDPPKD%2BF600is%2FLTviihJlT0CwRlgAWdu46sZhOXS9c4qkQ%2BLEikqmJNBTMloDnEEjSmhZc%2BqpDJmayLn1An%2BEIaN1t"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:29:01 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a470ac9e3cf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2d7af101-7156-443b-a529-a0191c11884a",
    "X-Trace",
    "2B5B20FA8F3220A9A6EBC0D86F449578EEDA05D832000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uWZ9W9Oln6NTR4rBdPGqFCm8BagEb8Ni07Fr%2FiBR%2BvPbMITXZQtoBkIyjKxJW7YwBjXplUlSzK60sNwvHME7TmSdc88XIs13cGATrW93XmcOh5DiFx%2BliHRGmYAOKVpz"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:29:01 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a470c8cd2275d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "21a05544-22d4-482f-93f9-f1cae6163865",
    "X-Trace",
    "2B67F8BCB01EFDA18F1B6D8FF7949D2DBEAFA96C11000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mbEFKM9FiqvwM0qg7GoAwOQZRaSI8z8JhfCs5CgSbg2LCqvFtoIElzbJyqfQUME%2B3X6EsXyEO841CI6HyYPOEyHKgMrmKiVcCQx5YQDGvXyM6ZG5%2Bpnw6zUiT57iG9E1"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:29:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a470e0c22cf8e-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "68f4df42-f700-48a8-8649-5b377328d392",
    "X-Trace",
    "2B533BC899DCD599AB53C265162E7DF3306C1903B6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dO0ku%2B2xrpRV74mOxVe9cAuzu%2BPprSEn51WVbnFsKaWBM0nBbvPiJF5traPnJVNBn1TBf6MouF9XS2BROoGYnMxyjrpEcKcF46haSlCZFq1e5xq7IA%2FXqBvL0TbtPKSK"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:29:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a470fdcc42743-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a4a1e1d4-b49c-42a9-a3d4-c394f146425d",
    "X-Trace",
    "2BAD264C02B7D07ECEE3F91AD68CBF69BC6DAF7341000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ruodJiAisvlBjx%2FHz4iT6xu%2BYGVhfX8rq6eu6wIYm98SiuuhWv8L7b7doNWeG2g71HLDJ2aFnld9b7MraDHIMKB9Er2p%2Bi686YipadOKc7%2B4SnZ0apaotuI6BdvhvS1u"}],"group":"cf-nel","max_age":604800}',
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
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:29:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4711ef21e07c-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "12a8e749-f657-4912-84c4-48f777fe7e61",
    "X-Trace",
    "2B9C97CD74226658269DF23C2FD26A7DCAC0677B06000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=QiC5CGvGEtOv%2B5%2BltB8frFWxwFGrDbz3d6vDKC4UYVomWQ9ajdCFKUUhbLl8PWAUQDioLjuVaHxea6YGS5R%2FxIeQ3AVwP7ZIO5M%2Be9r5DYd2pSPA80PUmNNNJe1N51uI"}],"group":"cf-nel","max_age":604800}',
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
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Tue, 22 Feb 2022 18:29:02 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a471359812745-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "033c5323-9ba9-4cb1-957b-9f806070ff67",
    "X-Trace",
    "2B9194559D470A7FE4D9BFF7A918C23919EDC27960000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ARzjJIqu0tAPpkoZRVHnWtkpRKyB8iWAeUTDrOr%2F88pAI0uzJy2YEBe7czy7ZNx%2FZ8dlaWZRdXKXcaawHiSXxQOSDoNOzsOw%2BaV3RmmIYcz3JJ6TqoyYpnR9RhQ7UDvx"}],"group":"cf-nel","max_age":604800}',
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
  .once()
  .reply(
    200,
    {
      total: 1,
      results: [
        {
          id: "886445982",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445982",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a471508882743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d233d57c-3543-4459-b58e-be4fde678796",
      "X-Trace",
      "2B05C1A29EDFC1AC67A89FB0C100B13D0D4835EF39000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wVahjIzjRHducI7JY%2Bw%2F603cHMFK42H6eEKsdTFzGTGrlS9gqB83nRmT0ZAM5eGq9NYgZOlbiqwJQH%2FL4SvJCbR%2FlPiDSWwIEzNXgDQEaS4yu7xTR9KuWO1wdOp2gCiv"}],"group":"cf-nel","max_age":604800}',
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
      total: 2,
      results: [
        {
          id: "886445983",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445983",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446006",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446006",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47189908cf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4b40172e-2166-4fdb-9fb7-55a71079ffe1",
      "X-Trace",
      "2B260A588972847BE2C55038F75282F336EAF89AF9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZhdkmsKXK2HsOiX6AD7TuXvsneu8lvV%2F6MicjMzavYKh78zyaatFRYCWi3kpB523kblwQA6U9xXqXWNTDs%2FLyjb7scAik%2BpIfGQE%2FhWeqLnH4um4NRvJp5Mwp%2BSKCACT"}],"group":"cf-nel","max_age":604800}',
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
      total: 4,
      results: [
        {
          id: "886350948",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350948",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446002",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446002",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446007",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446007",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446081",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446081",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a471a7d6b2743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0347ca16-f51a-4d2b-b52f-f54afef4e91a",
      "X-Trace",
      "2BF4E69934A4CDD644089279B70FBB721CDD6DE173000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ufp%2BRvJgTy8rIlaapU1QxIRkOIAxVMNJFhC6SRU2749TOpvcR5QvICAzpgr6jy7UAT4XYVI3K2%2FMmn1lziGk5jM19HylhCiL6V5hob%2BG4GnOgIfhPWwOK840Tw7Vy%2Fp8"}],"group":"cf-nel","max_age":604800}',
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
          id: "886445993",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445993",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446001",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446001",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446009",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446009",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446080",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446080",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446082",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446082",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47d7df61cf9a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "670da36f-c7b6-473a-a38c-54a3674b9e80",
      "X-Trace",
      "2B132558D0B4F7F01A50EF8EE378E6B7CAD3802ED8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TWzh8rYfosH6k2ZYIsq7hWjVUgExar3kVGHzBCrPImVXushcQT6NcoddKrmjbgVDwtu8rk%2Bja5CK0%2BRqKm3RncdAqy4mGyuS%2FlSD75BvkYnNJls06gdV47MI%2FKSs9AkV"}],"group":"cf-nel","max_age":604800}',
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
          id: "886445984",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445984",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445995",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445995",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446004",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446004",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446005",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446005",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446008",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446008",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47d99cc0e074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "83c9d83b-e7fa-4d52-93ea-8998e786c3f8",
      "X-Trace",
      "2B911333C35AE27700002BC905D9715D52BAC82859000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=85A%2FzUQC4Nn95MH%2BS%2Fe96oVU7cxwmi%2FbZ2GDjFsS%2Foj8tnNq33lO6y7O9gYak8ri0quRyq%2B77O5M7rgDRY0EUVaTY9mMnJJA2RfYwjBtmnlmL%2FpwiGf73Gv4DcLII2fm"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350952",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350952",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445981",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445981",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445996",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445996",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445997",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445997",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445999",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445999",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:34 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47db6ea1273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f7c256c7-5a10-45a3-aa2a-ce4e58ceb634",
      "X-Trace",
      "2BDEA7CDE08F197A17A844F078B80CFD5386F3AA28000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Iq6kezAaDuxwieT6j0XS67YzFtUO9ghEEELn8%2FzJFPvw4mNsAQBfxPfFRW%2BioAyVrgoj7K2mrpBuGrLDTGy6Xr8jpvz2WdmJnIsH4W41IjpG3D0VV8esKNVRLftTlZMn"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350951",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350951",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445970",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445970",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445990",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445990",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445992",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445992",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445998",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445998",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47dd3ee9e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "54040d86-ea55-4aac-9d86-12bce0821f67",
      "X-Trace",
      "2BC6846611837A8C53300E95DDA6308C7B8B5E8669000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uMrMqeujpuVeEH5g4AQGuRx1JC7jckQr0FndSjMWxmyIM6CbYlnSTbYlfdqYi7SNSIuEz2%2F9X8LFU4%2BIL6W2%2BGiqXBTjKCpU5YTMlA65zpVamH6ousj68mtSVzoM%2F1nJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "886445969",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445969",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445976",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445976",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445977",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445977",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445978",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445978",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445979",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445979",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47debc702746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "98c8a95d-e0ad-411d-9d20-798f795c3600",
      "X-Trace",
      "2BB6CE3F1121AC3FC4B95795F5561660CAEE6C7424000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3i1zSBBGVQ1yr387taRU%2BEbJT4guCM8qwLizQb4eBmICc0WKm3sQKE57em8Rc3qw4wT86jUxAdQgwQAxc8ZzVR1EUn3nzXIeZsGqvo0BX1A53nyYah0Ti1uzd7ZD6j6o"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350949",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350949",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445973",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445973",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445980",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445980",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445985",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445985",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445986",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445986",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:35 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47e09c5ae07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "928d5202-d6ea-46de-9c07-7481b83631b7",
      "X-Trace",
      "2B8211D0C9F83632672CD5A527BCBD87461F2802B6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IjN8ZlPwphaYJ0EEWK15ljyvqEzOvv3pO3yZUeap64zJo5MLsPdNznj9gKnkngH58aGAqrqXdVM2vXO0Tvfbcg5XXFLx10xBJFAt45Xu1yUO4KgpFS4HtG2I0XDPWPC6"}],"group":"cf-nel","max_age":604800}',
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
          id: "886445971",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445971",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445972",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445972",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445975",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445975",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445987",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445987",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445988",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445988",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47e23f2dcf8a-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "bf027c8c-3933-4f4e-a42d-260775b247dc",
      "X-Trace",
      "2BAA238A0575482D2CD2607280CD6148182DCDBFC3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8YqPgk6G%2BRzEc%2BB7lUAHdRYfc1IzOAUZ%2BA%2B%2FnqnFi3KxBElmk20c3QsP%2B%2B8IM%2B3p%2BxdRKfjeBhKrVJFdX8oBMSwJJdbtDA63t1N4AhNlA3mJYY6FR13bTZFiOc7%2FMnZx"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350950",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350950",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445974",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445974",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445982",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445982",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445989",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445989",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445991",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445991",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47e5987be074-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "402a1f9b-2d27-495f-99dc-e3155cba96ab",
      "X-Trace",
      "2B851A5F96950279FDF8988937EF9FB1FB466ABF66000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=1DiKK44h2AgcOSyV9xUeOftAuwut0jnDrsa7PiLSQ3vY9%2Fexr0lXpFW%2BdpE47VYOetB6CWt%2BaBh0fTiKqulrz5Y2gWlbjjq8BFW2Iyr%2FqqfT88tCYaDUmrgVc5JQKAdt"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350953",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350953",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445983",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445983",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445994",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445994",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446003",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446003",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446006",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446006",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47e74887e07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "249bc0ab-27cd-4608-b716-9a9f3508a828",
      "X-Trace",
      "2B7518AD89058D3B1890FC0B19BC50D790B3B772DF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MQcGquxaW22FhmK%2Fb9A21qXfai%2FG%2FovKjTLyCdqi06L6UVWuSI8Vw47bOxBNJrOXl0UWDluMBxtcdX2WJYGfrXodpTXZHeinvgjoTIc9aXnNt9vyEwZf8Ig03ebRKc%2Fd"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350948",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350948",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446000",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446000",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446002",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446002",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446007",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446007",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446081",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446081",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:36 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47e8cbb02749-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0c0992be-ef82-473d-899c-2947d9dd4274",
      "X-Trace",
      "2BCF5B1F4B5DE4D850EE768F929523EF4A79866FC4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KJj820h5B1%2FOscNo9Yf6op8R1PEeRroyOlq0%2F4YqH0cTUU2CSfBlVMvgqWTIbB1nC2Z2wQbzOZOflmZP5ErBWYPOsRRt3I5JePO29a07SRDt%2FVDb01Dcdz4zhDQ%2B%2F%2FFe"}],"group":"cf-nel","max_age":604800}',
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
          id: "886445993",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445993",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446001",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446001",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446009",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446009",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446080",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446080",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446082",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446082",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47ea9bb1cf9e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d2ea2a2e-1f62-49ff-bdcb-f8ee7f6973a5",
      "X-Trace",
      "2B985AC84D5AD80DD574ACC82CFF1D6D0549C483B9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=E4Y7SAzATJQCLT5H3uaIb0GVUzetVB0drbh314oDUCRr4SducHLXLv6a%2Brhi9Ej2hnl2JRxU%2BRpKC41AuxyPd%2BO%2F5QjoH8%2F2Etc%2FuFEIF%2FAtUW3VQ169K116vp%2BakDEr"}],"group":"cf-nel","max_age":604800}',
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
          id: "886445984",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445984",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445995",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445995",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446004",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446004",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446005",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446005",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446008",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446008",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47ec6fa92755-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2ea81ac1-2036-4e41-9275-b5a31c205545",
      "X-Trace",
      "2BDAD22DC65A581746723B510488FF7FDBC16919A8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=dv89LoVaSZE%2FoMmLebhBi6KflfnVeQueBDHT9AcEb2ALJUSacJ3FBYZQvk9sQEmkCzmdjChQvblY3nyiX%2BKgFVXwofNf%2FcQhcl3AWuSbrdRbjpGhnGZzX9iqWKYiXn3R"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350952",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350952",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445981",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445981",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445996",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445996",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445997",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445997",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445999",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445999",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47ee5e7e275b-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5fbfe727-4bed-4598-8491-19e4f44ab4ce",
      "X-Trace",
      "2B8E5FB153882CC1DE24F5BF00DC420BA99F27B1DF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YKYqznGyUKtDQj9VOdJEJaI3VjPT694hp%2B%2FJgUW0LDB2GoFxfVe%2FjM4NStiZrPNtUUyQfox%2FYc4wYav4rhWlBx9kRMU4U0WfLEFDu4Wcqz7Or1uC5%2BlAPUmQ5ETQ%2B6DZ"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350951",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350951",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445970",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445970",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445990",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445990",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445992",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445992",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445998",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445998",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47f38b8c2745-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6b04fd31-4cad-4fbd-926f-5c0b8ad7e8a9",
      "X-Trace",
      "2B0BBCC13CC4D6718258A008C5C45BDF39F7BF8494000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MTdK09yUJJ6oR7%2BJnf41giknlMOtI2GPjAos9nvwCYIG9sxtN8wRod24FJKKk90Qlsx0RBolWVI7xqkDQQMep1bBcd5ifcvINDQic%2BA7wDBF1Yjn54LImFiWYqBaYH6b"}],"group":"cf-nel","max_age":604800}',
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
          id: "886445969",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445969",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445976",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445976",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445977",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445977",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445978",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445978",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445979",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445979",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47f508062743-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "61c0668e-bb9d-42f1-871c-7846d16eb630",
      "X-Trace",
      "2B4F29AA945FB8E2D111EB55459569A50185477F45000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vc1JlnJWhTTHJg3bXtpEIum1er%2Bxjg7mYz5EwcqD8cDvyIyXa%2B0vNjOSQOSfwgJhj7OKMTi2xs84XE9jRcJrN8ie8hehfa5G62MAfd%2BsvGGAau3Dky8qIMs7Ce0hRsX6"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350949",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350949",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445973",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445973",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445980",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445980",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445985",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445985",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445986",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445986",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47f69b2c2746-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7bbd7a30-920c-4fa5-be76-bd71794573bb",
      "X-Trace",
      "2B777527D8F3A0976D0B1E038247B7A0090668D75B000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WrMHIPlQ2j%2B9pz5bRpCI%2Bp2rZlRdnm1tn%2B5AtXnfweAQcfFtqXX7u2JQU%2F9rGCppbudU%2BcRXOliKCrmeSRcInOXm37MrGl%2Fw6WeCFfSZ1BbNptSF%2BQyMg50nmYGgAiOJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "886445971",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445971",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445972",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445972",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445975",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445975",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445987",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445987",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445988",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445988",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47f88f1ee07c-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "183c64e1-20ff-4c90-951d-955e974c217f",
      "X-Trace",
      "2BCC7603319A0B753924BEA5CE79CB4E79D4166CEC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=j1U31CVvBXlaebi50ItK7xMveMYydWYlrhs2VRLThrEHQMLdAg2XuA9Nsrg7UxIh2YsgvXRIs6juDDTrC%2B67f9NjziLHwaISGFh9z1DGn0JnXwVk6ZCyVgi5T1l6AesL"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350950",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350950",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445974",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445974",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445982",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445982",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445989",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445989",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445991",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445991",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:39 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47fa4ab3275d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a1440f33-a315-4b51-b8cf-c0cea8696f6b",
      "X-Trace",
      "2B16376FB0A007BEAA38E99A41E7E91735E62786A0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JD71R6VoCDVCyukDA2ljRerwPT5YwpbYJto%2FCkWfk1TxK6sWdpqNf9t42iQFVp%2F0UkHJ%2Fg%2F3jZG%2B1MdTDDxzEEzCmvBUj5P2Fkthf2YbXbosOFyDp4%2BMA2xqzOlUuA5B"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350953",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350953",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445983",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445983",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886445994",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886445994",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446003",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446003",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446006",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446006",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47fc6a7dcf8e-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "54d74c3b-ea90-4cf9-babd-26d1b972a17b",
      "X-Trace",
      "2B0D259D9F1E28B47CB6B8853CF24A7D9A8264116E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=f7w3L6ECEPrVUBO5jZbqcG5w4oxAzJ8UZMGudN%2BXd%2BPk1tB5gDVGuNQaxiARsU%2Fg09gKDSznUg9ngEaO0jkpgDgHWNLEEqgMPWNViCjtp4a9XUUP1uZ7Yba8NddITHIe"}],"group":"cf-nel","max_age":604800}',
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
          id: "886350948",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886350948",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446000",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446000",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446002",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446002",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446007",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446007",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
        {
          id: "886446081",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2022-02-22T18:29:00.544Z",
            hs_lastmodifieddate: "2022-02-22T18:29:00.544Z",
            hs_object_id: "886446081",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2022-02-22T18:29:00.544Z",
          updatedAt: "2022-02-22T18:29:00.544Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a47ffd8ab273d-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f670affd-b10b-44a4-b77e-73be2b4dfbbb",
      "X-Trace",
      "2B640EAD484702AABB214156E9CD67480BCD5C0AB2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cVx%2By%2Bv1uKDyW%2FgGiQ0U0UNNXjWXswDnuT0kJirJXId0j5QN1OEfZDTRB33%2BMwDtJVAg%2Flmhm7G0rmgOWWliujp7gyH9fED%2FEP7PIPqEcKEhWsb6sQtAiGEmiEBv3z46"}],"group":"cf-nel","max_age":604800}',
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
      { id: "886445993" },
      { id: "886446001" },
      { id: "886446009" },
      { id: "886446080" },
      { id: "886446082" },
      { id: "886445984" },
      { id: "886445995" },
      { id: "886446004" },
      { id: "886446005" },
      { id: "886446008" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:29:40 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a48019bcfcf96-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b9cdf6f4-d40c-4382-9168-ea5e302c7c17",
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
    "2BB1E056C015C934DC43F978EEE95B46BF5AEB3F84000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9d%2F1%2FBPnxh%2FLeiO95GLmWo7ApZ911zb3K%2B717jGwWXsqGHo8fl88W%2FWi%2Bv1%2BM4cIrK2%2FWV89dWglJTgxca5lN%2BwSESF6xOztoOOcYKK2kh8Ydr8m3UTNclS3uifZwuRF"}],"group":"cf-nel","max_age":604800}',
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
      { id: "886350952" },
      { id: "886445981" },
      { id: "886445996" },
      { id: "886445997" },
      { id: "886445999" },
      { id: "886350951" },
      { id: "886445970" },
      { id: "886445990" },
      { id: "886445992" },
      { id: "886445998" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:29:41 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a48036a26e084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "fa221ccd-802b-476c-9686-c56e9a47bead",
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
    "2B41485F569E9DDC604A969211201D3FCE91B6E01A000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OZ01ko8sbW23fSZPkMzyM1DRTK3Ik7AaE0nVpTR1cXUwdtUPAbl5a5JbUkmFh49E7R9aD1oNyWMKff%2F0agUH0P9t%2F7qIkoWtjZDRXhoO63tT4vpYTb7zKGKbzPJqIcVW"}],"group":"cf-nel","max_age":604800}',
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
      { id: "886445969" },
      { id: "886445976" },
      { id: "886445977" },
      { id: "886445978" },
      { id: "886445979" },
      { id: "886350949" },
      { id: "886445973" },
      { id: "886445980" },
      { id: "886445985" },
      { id: "886445986" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:29:42 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a48058f9c2755-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c6f0a2e1-bd37-4bbb-bef1-8687b4f9d633",
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
    "2B032DD3DBB84BF71419D4288B887450ECDAFA6302000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FZqv2t%2BoH553sbMFdA6Ot7WKclv%2BQ3Nlii0NgPgI9HRla1eZ4opzeIu8v4VOQRn%2FAeY0QgIwvegKXxnzg2NmclQ%2BdXGfhRAoZFN5OE9pCpr6Sk1lxixy6%2FiOzNv7eMJF"}],"group":"cf-nel","max_age":604800}',
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
      { id: "886445971" },
      { id: "886445972" },
      { id: "886445975" },
      { id: "886445987" },
      { id: "886445988" },
      { id: "886350950" },
      { id: "886445974" },
      { id: "886445982" },
      { id: "886445989" },
      { id: "886445991" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:29:42 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a480a6edee084-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "581a03ba-d7e4-4c65-8c0c-b6968f666dc3",
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
    "2BD10ABE75BD8DDF3578849F9458DAAE51D3A1BA0D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cyXVfr24BW%2FAXOg%2Fh%2BmN5KC6r2Aidedpgv70TlRYe3JWAbtRhrhEDuWTgiNFmxS%2FPuB%2BSJEtRtHIRKxGw3KIRDnKdqtsDGwtgCLR8a1qR6rg1YTv7LZyZt%2Bogf6pKTn8"}],"group":"cf-nel","max_age":604800}',
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
      { id: "886350953" },
      { id: "886445983" },
      { id: "886445994" },
      { id: "886446003" },
      { id: "886446006" },
      { id: "886350948" },
      { id: "886446000" },
      { id: "886446002" },
      { id: "886446007" },
      { id: "886446081" },
    ],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:29:42 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a480bf97ecf8a-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "927c02b2-988a-452a-987f-4a6a9d582751",
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
    "2B0CEEEFCD8969CC31DBDC754A9B8B220143E66FE3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MD5vDJ893myLlUSfr4Ox1CC3vRGi1Z3zWsYPWo5BfgW0EKNEXCiVZcxlLTkJpjgySPmgWweMKEHLSejc08kwYYbG9SOuji66G51VODF64p6y4MHl1FNZxidkcJzOn92d"}],"group":"cf-nel","max_age":604800}',
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
          id: "886373524",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2022-02-22T18:25:38.562Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.398Z",
            hs_object_id: "886373524",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2022-02-22T18:25:38.562Z",
          updatedAt: "2022-02-22T18:28:24.398Z",
          archived: false,
        },
        {
          id: "885943135",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2022-02-22T18:27:51.056Z",
            hs_lastmodifieddate: "2022-02-22T18:28:22.831Z",
            hs_object_id: "885943135",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2022-02-22T18:27:51.056Z",
          updatedAt: "2022-02-22T18:28:22.831Z",
          archived: false,
        },
        {
          id: "886424594",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2022-02-22T18:28:24.756Z",
            hs_lastmodifieddate: "2022-02-22T18:28:24.756Z",
            hs_object_id: "886424594",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2022-02-22T18:28:24.756Z",
          updatedAt: "2022-02-22T18:28:24.756Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Tue, 22 Feb 2022 18:29:43 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6e1a480e19e4cf96-FOR",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cf873654-95d8-4b59-bac8-7ebee157f0c2",
      "X-Trace",
      "2B3AE653C57D2B75F7B9D4C6710B251CEC5214ADDD000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WFRKJQkuWh34KV%2Fku%2Fqh1tD9YzRpebHiYcJDQy0oDmLCS7yW3XMqgZExH6p16nw8SEY2O7IJQBwUI19IK3ZYYoGen%2FS0oltMOBTNRESCtlF4cDD9rM8DPCwPNw0KCXVo"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "886373524" }, { id: "885943135" }, { id: "886424594" }],
  })
  .once()
  .reply(204, "", [
    "Date",
    "Tue, 22 Feb 2022 18:29:43 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a481038d5e074-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "eb1d82c5-bd57-4590-9b0a-9cfe797cbeb2",
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
    "2B3952AB7AA01B4E8564685E12DF9AF4EC7FFDE439000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=p6S2Sbd%2F3%2BdfyE4HsvbapxVvyXX2ZgwvlHv9LffAako97bH90K3Dx5Z1aLUbsdGb%2FbVegTlSiVwlctJkCRVJhjsv4Mu17EPG97OBGu5lYQY5UzO3uHo9Dm2d8lH2olKC"}],"group":"cf-nel","max_age":604800}',
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
    "Tue, 22 Feb 2022 18:29:43 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6e1a4812c943273d-FOR",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "93745f70-a6ff-416f-bc76-bd9505966cbd",
    "X-Trace",
    "2B9F78C017806301F1AB8EB29CA990BD0C84D5C5F0000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GyITBOraasV3JSq2QniHUtcEQoz5y%2BxLLHmdcADDA8DISy0CQDr93hPsLcSzMcb2gbFFEYIVeXQxftwD%2Fp7AmI20fatKzwakQfxh790%2Fxbsl6FYgb86TqJjuZG1QHl0a"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
  ]);
