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
    "Thu, 04 Nov 2021 06:17:11 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7c1fb1070c7-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3b818db9-2bd6-42ac-b677-6d9d5d2bb553",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247314",
    "X-Trace",
    "2BF08BA35C8412D51A25477D81D82B6BA89ACEFC8D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=18uTGoL9nNlO%2B9nF2iqJ5jZp4Iytj0Xoyqp6tAZsrH0kKiXZ6eitt55c%2FDmMMtGiQ3c%2Bm%2Fkmd%2Fd8pqkh%2BCDtLEEcgp2TfW6d4A601BWW7NSiBqw1ra87q1TY7S7rFlWP"}],"group":"cf-nel","max_age":604800}',
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
    "6a8bb7c46e1b70c7-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c737b7a4-bb1c-446c-84f2-d976c9435088",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247310",
    "X-Trace",
    "2BBEF35976BDCB50AC063CCDD7527A9F2B5004A73D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OHAgad6gpK5ytUxByzIsfYO%2BU5cWAqsk74RffGo26AxvPMpNBFoRp2z2trsPeIHr2n7iMiuu7NvOsPsggLMRUEo6zIJlPhTVKxBKfIb4pHrIb07ih7JNKu5FhS7kIxCW"}],"group":"cf-nel","max_age":604800}',
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
    "6a8bb7c5f92b6434-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "15484ddc-826d-4672-97d2-3e9984dbc8c9",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247309",
    "X-Trace",
    "2B5DD47846AC52ADAA5C788DAAD9510FA3F0EA4FDE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oVuf1JwTgQSnNWUqSfvDJhLoYNAUOqmf28Q2eqpJ9v43cRNsIiASDvaID3ZlUQYBLs3S3O6CGRBwee%2BnkoChKe3%2FQEczuoYR6GUkOAl%2BNtDOs6rnN%2BDARkAtC0h%2FpPU7"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "fd362e26-ca0a-4803-90ad-d4edacd3dab0",
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
      "6a8bb7c79bcf642c-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fd362e26-ca0a-4803-90ad-d4edacd3dab0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247307",
      "X-Trace",
      "2B0D4227D20E72DC50F4C601E88AEE5DC7E3B6CA34000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZWr%2FaJ7c7QTQw2weqz3VrLDuQQSTcx%2Bcsvi63Xy%2FmK986aONHEICY1MXeBz4MnMXsYzvInqIitYv%2FRTVv6dGt%2Fsc8%2Fgudt6tPgncEqBkc2exJ03pRILIc6ss5eyC%2FSzc"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:12 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb7cf5d317114-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7fdab477-bb24-4b19-8500-a916848e2d65",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247304",
    "X-Trace",
    "2B659F61DE6E84578BA44B59B12A21808E8B21C8A7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZpJpsPlfFawKUPdNASPq9esdzw1Wo3d1%2BwAh40qWsQKj%2FcDfz6s4ibLFrHRSG%2BcSWounXJoiUOzdKbwtaPJKlV%2B6hXQ2LfIYxTzOBaSGnLVLFibfEzfNY2nrFWMmyVrN"}],"group":"cf-nel","max_age":604800}',
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
    "6a8bb7d0bd8f70c7-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "24478863-1051-4e83-b6c2-c91b7027eb25",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247303",
    "X-Trace",
    "2B7BA7C4F295BBF2BF4B8FF21F2B53617EDB3FEFE5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rxNCgqdyeH4EAB8kMyzwLRUMGKyfC8CtuNIoOP00QcNUcEcFnN79wEcoWxInhtvAvmik0dTWjiDxzXJLS%2BU2fJs6hvWEMMAumGSh4oA93xhSdzI8MMuo%2FaAjPMGS9vWA"}],"group":"cf-nel","max_age":604800}',
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
    "6a8bb7d22aff3b27-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "01509a27-321d-4fc5-a648-b0d60184cbf5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247302",
    "X-Trace",
    "2B143358FBE7A6D1C857FF329AC53866C43F2804D4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=T7AnZckwBG5Z0zpCBrTLaMlYFUnqzD3%2FDpzFWfvOp3YBwLIL%2F%2FYyzn9ydVA8RPMtDqxfnNhiOj0uLK3PjYA9R6HwB5aB%2Bb9Pr6V6h1dxMuZsQEKzCl3YCep05S57%2BPyU"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "15b0168d-5e8b-4945-ba81-ea387bedeed8",
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
      "6a8bb7d389057088-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "15b0168d-5e8b-4945-ba81-ea387bedeed8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247299",
      "X-Trace",
      "2BBB8314270B4D23A35DD985A9B3B9F2453095BA61000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Gmd2ZbWoiysXAcfJ8PZGbuR%2BXGMrUS3Uu54UKDcHsYheY4bMaf%2BIBrnstTOaj7uEyqZ211fUFYLGsX4KTQ2mtMKESiBB09CQRGjk8PeBLinXGhwTuz8RsnebuaFMEe5M"}],"group":"cf-nel","max_age":604800}',
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
    "6a8bb7dc2ece2133-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "150ab676-7768-4e44-a007-483385b7aa12",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247295",
    "X-Trace",
    "2B70623AC91E83750F8EDED9D009FB1B055F88C68D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2Fsmf8jGYDsPu0ZwpUMZn0bFVAd5BCMIpRwbvT9BaLQoZOWTNXpT%2FfA8zcbGlnHyaL0OiCNi63ZHmr39HSS%2FQDHpwkyCFd1xOFqFBBRp7E59CX6zO7cXn%2Flh4B%2FvucJzw"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:15.246Z",
            hs_object_id: "482758566",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:15.246Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:17:15.235Z",
      completedAt: "2021-11-04T06:17:15.342Z",
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
      "6a8bb7dd8e22642e-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cc910945-9785-45a7-aa17-a3cb02e43e89",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247292",
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
      "2BA85DD1BDE616C91A44B4A36F63A28ECB2F3B55DC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WW%2BLq2X7UvH4DTJyHGOGGpazDD0TDwMIv3lDHFpaskG37%2FZJTqk90%2BjvTpfVYBXEZDOl55uKRfjS%2Bib9kfXMMQGL2ndYzcZ1025pbJ7rvL52LG2Z4S9uSltUUFADFuCD"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "3a9c91f1-1a3c-4c4b-9b3d-4d294fa65eb9",
      category: "RATE_LIMITS",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:15 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "148",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb7dfbda82544-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3a9c91f1-1a3c-4c4b-9b3d-4d294fa65eb9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247288",
      "X-Trace",
      "2BAD173B7954CAFB38E9B6C62D3431CE99DF53645F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KmzgKqU0oWt01WVdVmEiAUcTwgA%2BESzw97%2FSE6F38dv8vC222528BQpmaztJL7rh%2By5mDiEzoUeoB57j4%2B4od2dlZ1689dMRhEl%2FnunE2Tx5FSRjDFpl43QMmjFL2jnU"}],"group":"cf-nel","max_age":604800}',
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
    "6a8bb7e7dadc7082-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "82642c85-4e4c-4094-abce-781de15a6987",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247285",
    "X-Trace",
    "2B56027E972857AB73CC630D779CA0D4B493CE483F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tFstHeXU2tCK0ZkzoOTNjG84IaxQPDT%2FeUi2dcTfD%2FV7RIcAiUCLExO%2BdWnt8gUFhpcxIyHo8A1XTlLc%2BT9T9OCPAeluQkNFg5nQjOBsMiAaUt7fYW6Rl%2BLb653B%2Faol"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:15.246Z",
            hs_object_id: "482758566",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:15.246Z",
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
      "6a8bb8a4be546464-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "933f252d-9223-434b-abeb-6b967dfdd4d8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247276",
      "X-Trace",
      "2B0C241B1AF3F4F2249445C65EFA9494D92206DA7E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PljQ%2BxmznJcURaLzgF9lvwS6eSG3yKURNoUgPbZbkrTMGYbtm4%2F0FgDuycelhFedXUpGWsSHXq69JGZpWR94Qtqi0kqZ%2Br%2BqfSFeslGTL4eiKNvxCh%2BROMMO%2BG12wtlQ"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:15.246Z",
            hs_object_id: "482758566",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:15.246Z",
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
      "6a8bb8a638512554-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6db3465c-a6c4-4cbc-bd2d-bf04bed506f5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247274",
      "X-Trace",
      "2B0A3AE66A31F429392E0948810CBD9AC5D0349C67000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ogeLi2U5unXiT%2FigB7ioaEMftjiDCswsViA%2Fu7S3FuZfItGAoUKZS%2Br6qQcxEy7ISs8p%2F1ojAfSwpIlL%2FKp%2FApQG9h7faX2aQREEb8sLVrKFqaI9AcviGnXgfp6THPQL"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "d1d157b7-21ae-4dfd-82ca-abf5d78ae848",
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
      "6a8bb8a79bf23aec-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d1d157b7-21ae-4dfd-82ca-abf5d78ae848",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247272",
      "X-Trace",
      "2B04F828C76580AAC3F0B5FF00865A2D071233985A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OCY86Q0jj0QFeaawwDhSMqz8Y%2FVOsrh3ix5J3VKyGmY5%2FUC%2BnRxLdQrmgFxP5BP7aPxPW7sSiRsNVdTXb6avPEFFgp4pDfUK%2BOcQKGJU%2FFlgCsVvygwcHTRHkrRFETw6"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:15.246Z",
            hs_object_id: "482758566",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:15.246Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8b21b7170e8-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "582e03fc-09e2-48d8-94ca-059c0937a315",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247267",
      "X-Trace",
      "2B6AF977916222412C36A11D37C073A340524C80B4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rNYuIMpg%2B7a7Rx%2BKbWRT0Iv0TGkjGYb%2FlbZ7jkR%2FBVbC2sbDTFLCIpC7qMkS1JfOtZklkRJvtIhaG%2BVFD3mae2pYKOR4MY25YvNbMcMrgZqqm5JZkmHxxjBz%2BrNLeDyu"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "e08ca0ef-5ad8-483e-b27c-76d6b0f10064",
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
      "6a8bb8b389527101-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e08ca0ef-5ad8-483e-b27c-76d6b0f10064",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247264",
      "X-Trace",
      "2BA093E81EEE06762CAE075D4E8364048B5121232E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Tj9eYM9MuY%2BfG08Mam%2BQdD8D6HEYR7kDNQzv%2BNL8laLuKNJk1fo2LlHYnCCI0BeNq906RkRd8FHv1iSkbd6aZnjJEzg7D1eFHHqAdOxdHd9Mj0DyadkSu%2FPO9yraNGDY"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:15.246Z",
            hs_object_id: "482758566",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:15.246Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:50 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8bc7e7e70bb-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a813b8a2-7c43-45a1-9c1f-74c5f33d6247",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247262",
      "X-Trace",
      "2B5BEF249DC6A43C64E85F6C1C1CC9E7401232467F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7odzhSYg4rf4uV%2F930wMjK6ltCnhRNDRmZEYJXuNdLi0rtvpPbPeCbtHDJgr4hFDImcGdv%2BiVESeoYZnOFI1dLuAjP0CAN3xSYs%2FbsWbOpll77Pc6iEFAHwR3ZhlsEyY"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:17:51 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb8be0e40212d-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "26ed963c-02f7-41e4-a00a-b88fda0c639a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247259",
    "X-Trace",
    "2B2117E1386DDAC254F774896EF99CABA6BDBCF6E6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Wn7CLqgrSAFmv9HTR8PYkQmpeiYB4A2qudAV%2BD%2Bbmjl7Lal721dBctN0Mm6KtA3n%2FgTm2OQ5juvYx8EmM6tyAuwImhaaecmCxQx6XhW7adsF%2FTFGwk%2FFicCFjoWK93BU"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:15.246Z",
            hs_object_id: "482758566",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:15.246Z",
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
      "6a8bb8bf9f5b70ca-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "569feae8-25fb-4658-b03f-dba9408e2299",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247256",
      "X-Trace",
      "2B9E4700E2506BD53F635872C2818F98D5C841C730000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ZDXDQsa2hWWI9qddLCSSrEpKkh9CWWf27udvj0c78o%2B9ZSR0qoGWIE10VSNh8t9FiT0gJXm7qBD0T6zEE4O9l%2FOapV0QehT0H3w6b3kpKlZXegBwcyQ0GNkNrUgtranQ"}],"group":"cf-nel","max_age":604800}',
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
        id: "482758566",
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.592Z",
            hs_object_id: "482758566",
            last_name: "Doe",
            number_field: "3039",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:51.592Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:17:51.583Z",
      completedAt: "2021-11-04T06:17:51.634Z",
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
      "6a8bb8c0f9413af1-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "faa3e157-aa63-4e3d-adf4-ca4ac0126401",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247254",
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
      "2BB7B5CE175955AFEF0C5B4184E4A1F4F43B36DE2F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fqoerweJ%2BZMXPbURU9lOF5I%2BQatTN%2FMKJRaeXAOlPVJL8Yl%2BXKBK1UG4hgb%2BX72DD6plZBlyJsM5liWYQgVtTBPnhun3q7EJTnXs2Ag8KkeyJ6yzKxOcWNqeH4i2GhJF"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758684",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.825Z",
            hs_object_id: "482758684",
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:17:51.825Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:17:51.825Z",
      completedAt: "2021-11-04T06:17:51.878Z",
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
      "6a8bb8c27a4c3aec-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "78374b60-610e-435a-8972-57295e4e09da",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247251",
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
      "2B5406666AD4CE70FF1F8D45782438462BE048B1C6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z%2FP74XOpJE9FYNM%2BU90edggX%2BBfGZ%2BMo3YtZDxC1IiQGQQixveqzzc3eQEk6baKTegSeaMafKQ1hvwgelruc%2B%2BHLmdpu0O7UcLl3KM%2BJt%2BuSjsPorUI6ClJcSqU%2FiwR7"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.592Z",
            hs_object_id: "482758566",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:51.592Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:17:52 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb8c3fa3d708d-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cf81f4a2-89d4-435e-b898-1d4397f4361d",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247250",
      "X-Trace",
      "2BB468698C1AFF75CCC59FC0CA2A6C88FDF15DA57D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4bbDnAlXGs7H0KEQ%2BlyXMYQheQyl%2BMhx2KiQXH3S810zAT2LWLFKO0tG1a57BOs0zhVj%2BWHY%2B0HUL0E0nWmmU%2BZCUr3YmjQSdvrj7g8e4hgdq7qKLze6vQsIGLAYRMjS"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.592Z",
            hs_object_id: "482758566",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:51.592Z",
          archived: false,
        },
        {
          id: "482758684",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.825Z",
            hs_object_id: "482758684",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:17:51.825Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb981ebe0ed0f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f29e08f9-d1c8-4000-af19-21912a0d1166",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247244",
      "X-Trace",
      "2BCDF635E8D134D6EB1F42D6C22539AF0E8628E3A2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uYe9ZXbKGhcjEqw%2FfY90Mjer0OVxX1rZoD5LByuG7wFzmQvl%2FU9ECfPPhBcq7mJ6tcSwbgoCu0FH71G2s952lhMwaCJfTVYUxwotYnNVJFkkhM9ugq0XsAEpgPR4ICcD"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.592Z",
            hs_object_id: "482758566",
            last_name: "Doe",
            number_field: "3039",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:51.592Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb983bcc90252-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d8ff8d21-b3a2-437c-a35d-f461047bb3e9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247243",
      "X-Trace",
      "2B210A06EBEF1E9E2D71F346A3929B3B9DBC62C839000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rQwqb1803oNiIfP%2Br5q4E5CEPlRMXSfHvRYl4Rq1xBGQfcYN5w%2BO886sSK7ffAHNZk0K1QTqJHyyMn9q9XeuPjIF7m4tnkbEZ2xpCyY0HEZ8YCvpejpFOPjrA%2BAETW2d"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758684",
          properties: {
            first_name: "Pete",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.825Z",
            hs_object_id: "482758684",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:17:51.825Z",
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
      "6a8bb98538d67085-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "818b1e82-65c1-486a-8a08-3b723cfa018c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247242",
      "X-Trace",
      "2BE9A9F12D99C80E8EFD939EF4DD01DBD6BE54D32F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4UCLrml9ZDA%2BRy0BdJEw8W0ZJJIj7ZNWemCajl%2FRnwOx5NZvf2LKVPFCbHbSAtuWZhWa2Ldo075swci7v0GSje%2FbOgG7V5TjNULMuQSzZroXGQ%2FDMBccMV9UFaBWlXwf"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.592Z",
            hs_object_id: "482758566",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:17:51.592Z",
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
      "6a8bb987eba070dd-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "07037999-e105-4c8f-bc0d-1ea15fce97e1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247241",
      "X-Trace",
      "2BF8391975578D1DA49F27DF6A783003EAF11945A9000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IUeNyf3SR4KBaDc%2B9M9%2BeGOrvQDILkm0u%2BbPasZtXr%2FsjJAM5uhCBHTySx9gUsLJMAF3SzieWMlsv2a25ESYs5EbyIxn4MTLdFEPeniSAGhM90MrZcOvpo9TvtsVqH9J"}],"group":"cf-nel","max_age":604800}',
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
        id: "482758566",
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:23.675Z",
            hs_object_id: "482758566",
            last_name: "",
            number_field: "",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:23.675Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:18:23.670Z",
      completedAt: "2021-11-04T06:18:23.714Z",
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
      "6a8bb9897906025e-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2c4ef3f8-8e1f-4799-9fcc-98719a8a5a5e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247239",
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
      "2B82EFD23D81746381D5C51F8B00FE77553F3CDC9D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R01EhcrvTVayONcgXLVK%2F75y3hp3iBPBgUi2xvxBpvPtVnq9C7ANetbQHLEHKGl0UtAxxw09oC6eWCYIH%2B3nV603aZ7%2BD2HbIc%2Fg3N8zu4l2HKJYKuFw0BHBTOoMi1qX"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:23.675Z",
            hs_object_id: "482758566",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:23.675Z",
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
      "6a8bb98afec1645f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "78b49b1e-b14b-4d6e-a9b2-570f2b154857",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247236",
      "X-Trace",
      "2BB5CD99B7750F63F9F536D3D6233F1802489E0D02000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=O1OhCM6iVcAgHDnqdMvkUoT6mwEOmibG0f2wLt%2B7iaD263HFhhtY4ljCO8bq6XeLCKRvgqTjFSa7R2YLlTH77%2BP0qz%2BWayN%2BmsK%2Be%2BJyfxE6cMumnr7%2FBRVgwdhTQ7EP"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "d1ff9871-43a2-43f9-aded-e30ba53fa67a",
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
      "6a8bb98dbde93b1c-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d1ff9871-43a2-43f9-aded-e30ba53fa67a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247233",
      "X-Trace",
      "2B98377AF7D26921AB9912D5248F56AFF2C2D0056C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=R4vnjFVafJiTLxby%2Fw2EQom7X7hndd2wI4hwPfkb1ymLbxyy4%2BUCU0Wr5ASl0l5P0Ka7LBwEopYSFtOrVUgGIH3W6Wfw%2Fg6yZCxH9Q%2BqbA8zQW4kw1efkfqya2XyRGPp"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:23.675Z",
            hs_object_id: "482758566",
            last_name: "",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:23.675Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9959ef7025a-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "5ef3c364-c7d4-407b-b980-bf5ba476d419",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247230",
      "X-Trace",
      "2B04B36F6A6BB4813B03E1119DEB3A39FEF47C8702000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=JJ4kOQyoGl%2BC7sYmqVYMT3TeBuF%2BOqKU%2FOgaayHV0EQZ3ngEcmWTpUA2rmZHabMRhia%2FqiAiiVmTA5UEWdYuZI19qeAMNZA%2BWP2eid8ozojCSyBf5H03shdRn6cC74YJ"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:23.675Z",
            hs_object_id: "482758566",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:23.675Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:25 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb996fa036422-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "e359ac87-bfdc-4700-8512-f09206023afe",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247229",
      "X-Trace",
      "2B46428E81F1DC22087613CF1E88467C5424861122000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=88X5kEEgDEssj%2Bpe9jPtYjItgiRfs91vknryTlNxpkgPWre3ycu7TOv2x%2Bgkl9zTXRkN1z5pSNHGwFc2QfvuF4RiaeeEptPGWyd6Vb2nyw5uveJH%2B8VG0H0nJ9jCLw%2FT"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758684",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:17:51.825Z",
            hs_object_id: "482758684",
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:17:51.825Z",
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
      "6a8bb9985a060fc7-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fd5651fb-beb1-4e82-8571-10ec052d6237",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247228",
      "X-Trace",
      "2B582535663C2C78D399E5AD507577CEA37BB1B399000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GDfSAS8qkNq5gWL8HYWRxJujGT1anCx%2FM2h2cG1ix5wgaiqSYJEVYjBdFZAIPNpzgPXFE7CxNwFN6Vwq09dTDgnot%2FdJ4PaN8OcgqrvdcqT8CRs6LVMWAel9RfRLuniK"}],"group":"cf-nel","max_age":604800}',
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
        id: "482758566",
        properties: {
          grouparoo_object_property: "notgrouparoo@demo.com",
          first_name: "John",
          last_name: "Test",
        },
      },
      {
        id: "482758684",
        properties: {
          grouparoo_object_property: "grouparoo2@demo.com",
          first_name: "Evan",
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758566",
            last_name: "Test",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
        {
          id: "482758684",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758684",
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:18:26.288Z",
      completedAt: "2021-11-04T06:18:26.362Z",
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
      "6a8bb999d9e01fb9-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "98481a60-e135-4c61-b283-58e0b7c08dd7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247225",
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
      "2B47F79AA36B6F2D867A33A3E7E74F3C27FE930D02000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tlL9lBVydh4Xc0KYsXN7NMAoksyfIpUNODOINLM5AAT8eNitXb4jfCOHmjyoAm%2BYY27g8I1Eqg5Qh1uF1vWTd16J8arf5IAPHPHqu8BjEFUvi4xR%2FQ0y6132BApKKPUJ"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "beee21e0-08b5-475e-8c4f-4c8c58dd5746",
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
      "6a8bb99b7e54ed13-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "beee21e0-08b5-475e-8c4f-4c8c58dd5746",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247222",
      "X-Trace",
      "2B7D5C28317F359109E7CAAFAADAEDE312343CEE63000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KY8gdcEz%2BtDIJsihW0ulk86jd%2F47IvAveTVn%2FbCMlWaFA3xgJyuJPjnFA682WshZQkvtutaK1Jhg60d0RZ4hQymCj540Wc9YXpeZ%2BDqCRF4s1IGkXFWmNhKTYmpNYGao"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:27 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bb9a339767088-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3a3678c4-fe05-44b1-9cd1-2177f0add8de",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247218",
      "X-Trace",
      "2B99FCAE8EA2CA03902066D0419C1C53EFEE956867000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=PRn6hEcO0F%2FhUUH66k9lEhIE%2FTTM1DhJkX7mVOa685PCN5dSen%2BRtsjwUAWsQmAJ%2BX%2B4YoNVPZ8d%2BkwVlTDd2iV%2B8tcW0piAZV%2B9AU0iCuh0UIMp81X5DY8784t3DAZI"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:18:28 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bb9a47aae1c79-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3b6cfb2d-15f3-4ecb-b0cc-92ec62e2a892",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247217",
    "X-Trace",
    "2B5D8814DF6CC785F8D42A3A5D9E68F4B0788ED506000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Aw6xl7T9JiyDNPHAx4kbIlZCsvK8QUpZs4CD1%2FFT%2BeoObdSlrBgZ5GH2Nyio0tHPOb08WATX9Zr5gGmmNcJCJKJE2IqD%2BwfY4dePa5n1T%2F%2FT40OMsjnewxGoSqmLAU9e"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758684",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758684",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
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
      "6a8bb9a5c996ed83-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "98e7f299-b6aa-42ce-b08c-91d74ddeadd9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247216",
      "X-Trace",
      "2BA4A8D0CC86FB418CEFDE3BF458C71E1CDD220AD6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s%2Bf3DPuu5XRmjsTQBQdu2ggEul2FVdBSCknotSTRrnwVi6FrGveJtxPngUc2oVAo5unSMjotAjZPxAnusbqFmVnM6ilSNdJCw17RcunEwKIdzcu1a594EQzUQGItL6Td"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:18:58 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bba62de5a253c-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1c5e23e5-874b-4692-9004-0c0793caa777",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247184",
    "X-Trace",
    "2BEB637C652DD12398D00F3F073D455A91E77BB4B4000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=2sYZvIguysh1fsyxitkZR22NDRvzJiqnQPks2oXSM4%2FaotCcBBlZ2xLxIYNSz8%2FIq0GpeMp%2FlYUiBH6nOru40dBPFabSUTLyJUHNLMAP0ZZQtH90DWTDbSfCRHDA98ZG"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:58 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba644ca13b1b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9ef4627b-7094-4c4e-8e91-397851b19704",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247183",
      "X-Trace",
      "2B77CB3E0EB7C5BE1B0C01ABA987423DAF7EADF45C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rbV4Pv49SAqRCG4EVuMvRD2tK6OLR4X1C3yAQRuz%2FM7h1et1jmCNk3tV8f2FI3wy9Jl0TuBv1dpYUN%2BlQ%2FDxdYXzjxlO5URY%2Bh5GcZuxCnf%2BaADUN6lK3mNApZFtdClR"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758684",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758684",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba65da7f3ae5-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f85be0c6-b7d7-4afa-aba6-daf631b350a1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247182",
      "X-Trace",
      "2BB6680B1A295DB565031EBBE9F6D9F62594108307000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=sEQFZmmkfDQxCvKpZIb%2Frm8QXnr%2FuvDbjD9bnD%2FAsa3I%2FUzUv%2Bhqiwu%2FCeCfby7kgXKuPEsHOJvVOUs%2FT3sXZm1x6Jy3Gzpv1BBHYXc7wk5D%2FN%2FA5NMfvp1QCJKd%2Bkwj"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
        {
          id: "482758684",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758684",
            last_name: null,
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba673a793b40-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "851b43c3-fd5a-4186-b2c7-7b957d316ee5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247181",
      "X-Trace",
      "2B31F22AC3443C631CCEE125B144CE794B9B715E6D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eROXUsNYuMsprKg6yiHtSshAYcB5TP%2BjFFH7zk3nEQxI%2FuYWmlj1BcK0Rtg4exseTDHc8DyJXFGycBQZ4uJ%2FiNzN8gqXUdF86M3ayV45%2FvbGUJWmFR9VJcmRcqUBeKPB"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758566",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba690f9d70cf-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f5212d74-2aa0-4e8b-b2fe-c5e75ec185f1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247180",
      "X-Trace",
      "2B6EF06B5738470BC8338B9E6125E68AF5056311C6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=MvpHMAR5gIkqvZptPSk%2FxhFzBmsa0KpDAGXR2mvvKURoMLhQwnp6Rh9bGPMof5ZqMjKtT6VhmHh9Rcs%2FgL9O9lqMY2CeS7j5B9fxUDItwdEEOWZ8RgGc%2FQBgkvJ%2BPuDP"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: null,
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba6a6d9b6447-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b8e89e46-4b04-4428-b64d-e5c6f98ae942",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247179",
      "X-Trace",
      "2B4C56B393B436A83F32BD19D4C19153284CED32BA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a4rvIaxPwGrbNTdoEvIEdtQkZwPki5xRcjArzqzctdNDoGiFXtiEHxpPmEv3Xz2gI6zj6auXEmrhXwhn82%2FYQWPGb5AiAixJQS5QcF%2FTi9znfGDYgIAQBQaBNV3LXrNU"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            grouparoo_object_property: "notgrouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758566",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:18:59 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba6be9a7ed3b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "56cb0a5e-efb1-46e9-a885-7a8d62a86f9e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247178",
      "X-Trace",
      "2B74FDDBAE669565C14CC16645553043174E5809F7000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pTlHgPG32zz5e91nnwv6Hu4BZQVII7gg10nLCsS6MopTnOdpO7Xi8uMZxkan14omJ2mNdwQT6nfSUUnx3aOw5OpFaC%2F82DCgNk6bekBuVTW%2F4GZQJ2KNh51Iqe7HxELR"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758684",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:17:51.825Z",
            hs_lastmodifieddate: "2021-11-04T06:18:26.292Z",
            hs_object_id: "482758684",
          },
          createdAt: "2021-11-04T06:17:51.825Z",
          updatedAt: "2021-11-04T06:18:26.292Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba6d6b8e70af-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d694758e-b225-4f9a-8b17-58febdcdf4aa",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247177",
      "X-Trace",
      "2BE89823F0EDF7B1EA7F00208DDC09F7EE140474D6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=fF5Moe5FPCnwQ1QiG654TxhsQRG9aKGOdadG%2FW1m2GQ%2F9y%2BnKIRcwmgWjiI9lzenOACP4wMoTRNfgHPLcZ3Ohvw48euLxKHzPXW7bmCTddn6qT0VbVuQ76xVfvpTw7QY"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "482758684" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:19:00 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bba6ecd761c85-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "672cc9b1-927f-4a45-aa10-f907c2202c1c",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247176",
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
    "2B0C2623BBB0B4F5EFBFAA500CA5C6B8AA3DB808F1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Jx9tUpRFEN%2FBVQctJeAIKTIQ521NKXb1REG7PnkDZx%2F1vlYfWuxxWoEi%2FREG3o4w5cFLvCWQbhcj8HXkC%2FjRjyEtL7%2FAozkSebffNzrjCVbhU6RITMvOyW2I8qOhQY7H"}],"group":"cf-nel","max_age":604800}',
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
        id: "482758566",
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:19:00.596Z",
            hs_object_id: "482758566",
            last_name: "Test",
            text_field: "back",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:19:00.596Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:19:00.591Z",
      completedAt: "2021-11-04T06:19:00.625Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba703e592560-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "abc868ea-f729-44c8-a281-9ea3dae6b9d6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247175",
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
      "2BCBDDA9CFB67EA00EF9CB767F5D1608F0FB2313BB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LOdtRydmivXVrGn6TolCJFaLl3Z4EkwWBf1zV%2B5iT5%2BO0fywrwymtObl%2BPy%2B3csjZaETBiH0li%2BJEEhWfKAUZATzcugKeSH%2FW77GWX6fcOhWNyrGd5CqIwKX7m3qkOYq"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:19:00.596Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:19:00.596Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:00 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bba71ae8e2574-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "6b1541d2-f7ef-41ca-9e3e-65fdc4462fb4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247174",
      "X-Trace",
      "2BDA3A74FC7A3240C35AD2D2AF14FF478A152FF2B2000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7rZpI3%2FTuTSC%2BlZiT5xx5Efaivqqp1J%2BEg%2Bni5icEpYqvUHlxyKlHUagqlJTUxTolnuf88pfDHwYpV1bhYKhwdQZV3eYzEoG5hWTFpf1GPxCSN8WgKcPyV3SVbw8KTfb"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:01 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bba7308eaed8b-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a5b0f9f0-6e96-43cc-9e67-56ef54d7bece",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247173",
    "X-Trace",
    "2BE7D5DA36517F0CC6F4D3188FBFA4FFACD0FB2C37000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TbvOTp9vY88ETbMiE4QR%2FHJG8BSeDvndhviekISn6XpoXJlaTbNUOcFhcI2O4aliQ%2BPfwzz4rQwyOY0mqF7epYgVMRoMKXRK3lOIR6Hx0ZLvyD4wpkgrKNo6qru9egju"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 1, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:01 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bba746e0c70ec-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "6ae17f0d-0bd7-4e93-a87b-01d2176d3e4a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247172",
    "X-Trace",
    "2B9AC23D047F2AB8206CAE5DF80F67D4605949C208000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=yY36XN4dlal6idy6SdwcmNpiTAH%2FMC1Q0HAFmkxm2xh2hOzBjyxDAGKoi7Ir5oYF0Hu3hOagFnBU3%2B7EtFf0ItyCtF20dzIVy%2F4g81j9ynVlb4hHLJiHZ9HaMExW4HZy"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:31 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb31494d70e9-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4fd72103-8755-44e3-916e-59d122c9895a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247149",
    "X-Trace",
    "2B5AC13A7738B4B0631E584E571FDACABF7913C4D3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=KL%2B0mNh%2BjHLgF9f09b9cUgBb1h2mLWTFXUSSedWIQqiXSsS6YJ8NJs%2BPFhZnuvjYA3Vqe5Kb5SAC9ITYfhnvDueTIbN%2FxFl1s%2Fx3AYXXQpx8JJydz7WifGOoVJgQDw%2B7"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:19:00.596Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:19:00.596Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:31 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbb32cf3970bb-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3db1b5ab-d1c2-4d0b-a52d-4a31ecb52c2f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247148",
      "X-Trace",
      "2B05599BE74575ECE20FAC59E0F50787E7811D9B7D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Gm6oHg9%2FUOIMHFuPCufC0VBvPTrOE8D%2FnoQmgHjg%2BeiNWPxO2g2mSjIAaIMCEdbAaRGo%2FD1hphf5NkdJObUjscj599FPOtbwTPjw1IuKbtrpj1Bmj6qza6uxxq1fmBJG"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb342cf1706a-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "febd41b3-58da-4975-9801-11ee4dd3c170",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247147",
    "X-Trace",
    "2BD6E9B95806457C610AEF91AF0BEAD96862438CE7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=3pfJKn7TQcZjlkHBzPIuQhG7CWusSbrpKndCcFUv4awyYh6JxQuHBEF0zsZJ%2FVPUpT2gp24Nr2ZKYSAVDZkmGhmCaaEDvgpkEEfp2vc00XTc50egBWcJ02swxsV54t%2Bu"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb359ce870e2-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0ecde922-0080-4c45-ab9f-caf3e49b87b3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247146",
    "X-Trace",
    "2B6E962A3C05B643389CBEAAA0EAFE5C0ED4A21117000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=7diHwgnVI6iEDhpLf6jn7dhCXdQ9AMwuzpbtW0p7oBz0Z8vCIOopLmCjP1YtG%2FYaeV90rsFPP%2FdWAmUan4KV%2FUXlAvDdoQRAjeuZcPAECatGwyPnFt4YCxUTyTpzH4GF"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "John",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:19:00.596Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:19:00.596Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:32 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbb370c11707c-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1f60fe8b-cddd-4c77-9dcc-143a1b61ae9e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247145",
      "X-Trace",
      "2BCD614C47944E8EF77E77AC585857F52E3131E2D3000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FfkuLQF%2FpHD3f8wcQ1nA%2BH5mjMrrLZxRS2%2FEqqSi6VyKzK0hC14KYy3flhmgfOicYXY6R8CgJ6dhT4noKGormeMuVXHR%2FmiWFIKjEKeRV5M1YedL%2F%2FQNkXF1oHy4m8KU"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb387fc8211b-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7f02c1d0-9de5-4de0-9b35-eaf5b38dc779",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247144",
    "X-Trace",
    "2B8E5BDFDC9A746872D0CCD13FE4A99ECAA30D01F1000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WEj4UZxxwLiWBs8NQtU5iAxJhOl6DOe355c2VAslvuu2k0Prxcno583pSjutSDpk9r%2FYeILmaBc%2Bfo24CDJvcN4jZtoE0znrFwrJXnwXSyOVKqc7nbiG22cE6YATC4od"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:32 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb39cd1924ee-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8d1623f0-b0b7-4b38-abe4-10a55d18a0a6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247143",
    "X-Trace",
    "2B6DCFF1DC1AA881B6A4D546B57E463EA4563F1E01000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OFzwiDcWRlUANuQEXXP%2BYUoV%2BfKPB465ET8U1TjoPNlJ15skW9JSrSQpBnuHUEXIcNlDwkh9%2B%2F%2F2AeZCcwLR7wrwPVsXqTRD8WcwFGLBbZkMjzDf7kGI%2F0%2BIX1lwTGFK"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:19:33.043Z",
            hs_object_id: "482638862",
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:19:33.043Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:19:33.043Z",
      completedAt: "2021-11-04T06:19:33.111Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:19:33 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbb3b1ae57099-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c876d9a4-b95c-4c1d-8bac-95d8208f3816",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247142",
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
      "2B9F9520501E9E1447ECF82CB8053E32FBB31443EC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YWNiYXmcnto8uIzgcnsL0lj2W%2FQ%2BmR4Zxe1eUOSLg8x6SLinlXH%2BtlqBQ2EH4PKWMHXCpv%2BrFXatv9MG6U5HQB3uCnsyTphDLLPjUFo%2B3LTvyZ6jKl5FZf%2FhO6NHL2Rq"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:19:33 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbb3cca166452-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "4be30d1f-6c0a-4af5-a34e-6018d593634a",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247141",
    "X-Trace",
    "2BE550876622D14E92B3FEAC35B6FA4BEC26BDEE83000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=IT%2BMUXb2XvhI%2Bp2eHuYFo2bnAgawFbwrfs7Pw8uR7TnB17ZqEQUOvEP0nVs1g78QvkZMU%2BjLVzwOv3ZFo8KSwjbohoYvd6C3MHO7Hlr%2Bv4YSMJ3e5sVWZy6nGoHdhyQ0"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:19:33.043Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:19:33.043Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbbf99d277112-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0f9dd852-0172-432d-9300-aaa56ded93f7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247117",
      "X-Trace",
      "2B9B4AB15F8DA4D3CC54C90D650EAA53121DA6E44E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=FGF1VMp06eW5IDkac3rz0wTG3u0oJCyM8siZZRYq%2Fj%2B67W4XwMUdQf2H40uWdfA53czJiGtXtS1Bv0OlXX%2F5Zd8iZ6PN5UD1Ymryp5BDxYF%2F4HXGXKBkiRfyYskf8Xnd"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Evan",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:19:33.043Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "5",
            text_field: "text is also here",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:19:33.043Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:03 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbbfb1d5d70a0-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1d4564ac-9dcc-4242-adb3-018b5ebef9c5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247116",
      "X-Trace",
      "2BB249E56CC7489C432668F6D4563D77C5676E7E4C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=s6aJnPPnE9yXQLbB0v2qprqjSHo64uZbQftk3O6wdSYKPvXH0b3BkoksGDDSCAbR5KghjhngOXXMc0oC3eqVPDM4OsTBjMFc6gesvyYwaNus%2BFPcrInQUbRRJ2TZGrKX"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:19:33.043Z",
            hs_object_id: "482638862",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:19:33.043Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbbfc8e4e3b40-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "82c1117b-89ae-4112-ae71-a3fc138a056c",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247115",
      "X-Trace",
      "2B55EB6E66FF061B306635BD80B4585691D6B965E0000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0d2lD%2FrtTzwOMTLEACkcWaqpj8EcLq03j5ktJ4Jheo4%2FZljx08HiaCVPfwLXjaDXBr7sbrJpYLhJ6riRCdmKA94fv6P670GqbKG2sGj1rmZ5majUrY9ZaKwHM%2BInxC4U"}],"group":"cf-nel","max_age":604800}',
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
        id: "482638862",
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
          id: "482638862",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:20:04.260Z",
            hs_object_id: "482638862",
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:20:04.260Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:20:04.256Z",
      completedAt: "2021-11-04T06:20:04.295Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbbfe1d902518-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3e6c98f5-f342-4f66-b629-9f77b9038625",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247114",
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
      "2B284FE443546A7FE1480FEEED71692ADFA69E05F4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=q3dyykh36tTZSjTsTp1n35g8R7JoCS1ZWPeeIK4hRkeJzMlVCMDYDKoJgTdHArfXQjyDADiWZPIpDbHORsa0VPWeyUYOKek2KI4gL9tPZw1PGcplwI5ZWwJlB8F2ch%2F8"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:20:04.260Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:20:04.260Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbbff9bd57093-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a27177c8-b1e0-42fe-8ac0-6ce40558fc07",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247113",
      "X-Trace",
      "2B6F99E84D00606A77D270F0E50CD5599AB9188995000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uhnZUTYPoqKfZ0g26M5dHxHAgRzQUgeFrzjCWFm9DFMZf0s28thDG%2FJHf5fVa6bU44JdfTrWw%2BySYFO6elhRngH%2FrXfjvCR1vNtAyAsvP%2F6MjPTGTIWfSJXZ6MnplS0M"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:20:04.260Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:20:04.260Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:04 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc01085570bd-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f5324c52-bb56-436c-a354-395856843fb1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247112",
      "X-Trace",
      "2B8B45DB2C078A708F6160D2FC1808E59DE82177E8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NJV2LbEX9YkS3P1IPeoqXUjpPkrdgjTcu6enoheQXw5A%2Fkn%2FY10I%2BSM%2FLbe7MHRaG8j1%2BNst6JIgMiTjpOuzN2XZxtavbF3%2BmRe2iyN6hh%2B9O9lDyTpHoJQILNloB7Uc"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:20:04.260Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:20:04.260Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc02986c0231-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ec0e1710-b161-4db6-8d7b-e7813ca71ca3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247111",
      "X-Trace",
      "2B7E6E3B3B4CD53B5ACDDEA2FC737E341832E74A56000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B5Cbiz%2FVmfVvJCEVlqMdui2jg%2FxgzETMnMTLzl6mf1D%2BA2iyIfp9a0e70MkGvW%2FrpFSfLH1RwOzQBFtUH4JVhmSgxfQ2sXflvBPXv6D3JV8hv9p1Ub9RboXRqq4dcmG0"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:05 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbc052d180fc3-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "a934317c-b1fa-486d-8444-445b57a39ab1",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247110",
    "X-Trace",
    "2B1876693A132A0C11B84EAEF1C0D7E0DAA75DCB19000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OMXAKtDsiUwc%2Btlcmjjkscw%2BozVpRtIR3cBMXRfc7Mmgu10UtTmqS%2BCOfuooryaIhz3qpQ6fJgwq%2FuHGW80vSUdmiOz2uoEmTD8nAqxmN3orhyY6r5o%2FXJNdFyZr9kBa"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:19:00.596Z",
            hs_object_id: "482758566",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:19:00.596Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:05 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc085bd5024e-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "0fb0a229-b924-4c02-8ce6-248e4967fb90",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247109",
      "X-Trace",
      "2B2F2A9515B0DE5D156788249E866122655F5977AF000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xy2frADomUvo5mRdRuqHQYpLZHquQicyT%2BKqzA85DpsBehakwkfbmx55aIAoBtkVf2xOJ7WZqHTyi3WGp3igxJcu%2FC%2BepPepHfp7kVYODUI0CYFiYV4nTPR7ZSCyNJct"}],"group":"cf-nel","max_age":604800}',
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
        id: "482758566",
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
          id: "482758566",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.093Z",
            hs_object_id: "482758566",
            last_name: "Test",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:20:06.093Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:20:06.089Z",
      completedAt: "2021-11-04T06:20:06.120Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc09aff17073-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "1daf4161-6192-4995-ba73-0df4c04f87d6",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247108",
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
      "2BC43FCCEF7D4F6573420A2719C91FE217D70D9A51000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g%2Bgv1Vv13HN1uOaeQ3Ntj0fw475kJuY2p8Xs55AINkKFYrLwYDRuS2QkxcnwrB2aBF3CVkKqiXFV3PZYVYGpcoT2LsmtuqGaw2axsudkr2s8uw82swzZkZQeBxhd456o"}],"group":"cf-nel","max_age":604800}',
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
          id: "482646785",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-11-04T06:20:06.310Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.310Z",
            hs_object_id: "482646785",
            text_field: "some text",
          },
          createdAt: "2021-11-04T06:20:06.310Z",
          updatedAt: "2021-11-04T06:20:06.310Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:20:06.310Z",
      completedAt: "2021-11-04T06:20:06.383Z",
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc0aff16251e-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "32dfb0da-4f52-4709-b678-975a08091193",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247107",
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
      "2BA2B6937062D0C4D9787E992140D7C580CD0A8B3E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2FOvE4jpuLnRhaZf1mOmFSqFRBTPeHgy3HI0yAiE7v7Wmakh%2F7aLxNauvfxNGRF1WcOjH%2F3E2%2FlNEtGEXHCXrdVmM8JxrWLmolJ7ifqXLpih58GFRZQvAB0IMcjzZu3Rt"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.093Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:20:06.093Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc0cbe67643e-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "04ca5459-a6f3-458f-81bd-1ad43457191a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247106",
      "X-Trace",
      "2BF0E0DE0A7CEF3E62DBF6FCE170027FCF01C92F6A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0LtovQmjvYTCj5zD2RAx3vtIvq8sI3ndyu0uF6dFpM7d2yD8QtAOEKpIk17t%2FP1nNINi0DS2DTQpretmoGnE3%2BbS5rmYK0fknGQ6FFQvdAVZL%2BJXBI5fNY3b0jbyanmA"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:20:04.260Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:20:04.260Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:06 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbc0e2bb32506-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ce4f28fe-fd40-4716-aa27-0d29d1fe7dc1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247105",
      "X-Trace",
      "2B40858048F0584F7AA7A2A29A39E3AC52B115A12F000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=29WQYFns91o3KOUSn4GBdrt3IM7%2FJua8HABe6%2FdyCVQDew6rRTdu9gj3DVrVA2KlkEdiNv6k7OJwWUDjF%2BfK9TYCcx2U1LwwRoIb6YmJaJiP0f7DMJ28jtvIPaAPBitL"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:07 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbc0f7a2a6428-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "d30af6a3-e1e9-4207-8af8-41196eb77cdb",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247104",
    "X-Trace",
    "2B025D7819E9EC64599A9E76F3C9EF4A78E6541D4F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iyCF7gYV6DRHH00BOjoXYS0g6nK%2Fb09rBlt9QORtssevU%2BpIZbPseVexxIN3o39sDenOO445ALjgwAqZG1P2jdnnYe6hpto%2BUMXAXj2yWajLxLr4hN1k9jxF3EA18tNg"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.093Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:20:06.093Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbccc5a537101-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "901c1620-ebdc-48b0-9e6d-aacc164e9fb0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247057",
      "X-Trace",
      "2B001431D9B93E6CEEE3DF102E24F0864039A7F6D6000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=ES16bB7W9i89V4Nu5INq%2BlevV4okresIn9mfC4hvK1jL9qehVeKnPffAB%2FH2UMDqlhROzXbdvAFH5MhWzrIw3wydyPchpJ8DKrWbgvR%2B%2BXwOv1fkU0TomD1H%2BFL%2Fv5ue"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:20:04.260Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:20:04.260Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:37 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbccddd71645f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7cf9b9e3-d6d2-4c83-a0a4-6ce97e3802b2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247056",
      "X-Trace",
      "2BAFD67BF326E394994953572D4AE00660BE2FF892000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=as%2BWidRs%2BNjddsbg6j0Lahz%2FVgq1EFbZf%2FKXFsmHyAPtMRk3w2iihAuWjJSXiqWxOZYBr1%2BghnhZjZOV2MteQvrZ51H70k9iJCkvKwpACY6tPP3%2FXEbLQO5SN5QxtlyP"}],"group":"cf-nel","max_age":604800}',
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
          id: "482646785",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-11-04T06:20:06.310Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.310Z",
            hs_object_id: "482646785",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-11-04T06:20:06.310Z",
          updatedAt: "2021-11-04T06:20:06.310Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcd0e82d7106-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "19d2c8a9-393f-4d8d-b6ba-e042a8f27c73",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247055",
      "X-Trace",
      "2B8B302DB0CB8C729F26B1216229E395DDCB842C84000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4w4GsH9J2rcgVzVqqQUqiAkl8Ya1faGpeIa8Yl%2FpQZH7rmCZTxNodxRbWgq4BuS5IrBZyjJUruqEmlAvt9ehTup%2B71tFzg%2Fl1laOTUmgD9%2Bp%2BJZG58H7W2IXj%2ByIcwmW"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.093Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:20:06.093Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcd25fb83b1c-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "3b05fbd1-7dae-43ba-80fa-838e932ab445",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247054",
      "X-Trace",
      "2B0CF7B8239AC6952FA62FDBF09CAF187908750900000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iy3RRIgZ6ERdZXr%2BzJELulu3Zi%2FcUTjtBy60G%2FwB8SjD19K%2BOO3F8%2FGeN0o29kJwwCplUnsTs%2FceYUZT40vmk1%2BTgALev9zJCH2ToA5RwtHLtjFBTH%2B4L8MlMg7qgU9T"}],"group":"cf-nel","max_age":604800}',
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
          id: "482638862",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:20:04.260Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:20:04.260Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcd3b9df645c-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "70f7b277-a905-4834-a16c-ea1e019e5adb",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247053",
      "X-Trace",
      "2B80DFE73BD3493A6F5BC07B4EAF69F9FFE91E368D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bgY3rHnsFnAZFGCmflOm8Xm0zZF0U654uAjmattnmIJD8e9vNGqUdD%2B60y8c1pFxHSRsgBiW%2F3l4cdS57p5blIbcssTOuR3jynklw86TlOlB49vQSNXGlO3QWRxZit%2FP"}],"group":"cf-nel","max_age":604800}',
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
          id: "482646785",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-11-04T06:20:06.310Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.310Z",
            hs_object_id: "482646785",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-11-04T06:20:06.310Z",
          updatedAt: "2021-11-04T06:20:06.310Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:38 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbcd52bfd0276-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cd168104-2aac-4aaf-96a5-98bf8c3b2461",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247052",
      "X-Trace",
      "2B41098B35522E580C92C91C24C3FEA77C07065125000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=oXmkvdGIjnjzyK3a9sUuNVVz7pLEOYd4c2WGRuywYC%2BwLUwoSKwJyDM5%2Fbto1GV8XMSqonhZtxHOAyaPaLYRFEQXBHUVVFwB0mYa7wNV0YGK2xkRQOOyF9QCs%2F1ZUjVl"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbcd69ee23b1b-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "cb8eb8a3-4c2b-4c1b-90f8-cbeb73f39648",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247051",
    "X-Trace",
    "2B9E5B4AAD30CF202B46851DAE5F17FA592E243676000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YjJQWQ8ZLN%2FQ2Ki0RTH9p0PnNxSNET4Lj6X9pW3q%2F8C7NybKT1zc9cDUAnbh7%2BOFYYu0bnlyDETRu%2FZCA8zdY05H%2BQkwdBxoSeGGFPvZUsSf5fPOrNlXk82SdI8YvzHR"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbcd9aa647082-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "76f50e6f-fb8f-4d7d-b1b6-a91357e15c41",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247050",
    "X-Trace",
    "2BE59A5511FB70E76D4C69C8C8F2DFB40AE95204AA000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=4nmUnKi5IwGpVr8kvdVncgZBZvEMECGr%2BwgX8aycjZiJMDAXLv9PfOjXUJqVwvrSHgFuqxBoP1OMq%2FoGv%2FsVWGK3fegIZEzWTU5r4TloOdu8byDfRbJfw15gWS8nHRl1"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbcdb0be870c3-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "471700c9-5e86-4019-ba02-037ff6ef69b5",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247049",
    "X-Trace",
    "2B349855CC7684B0794555335AB2EE02FC05FBBB63000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=SCo8pe2CVZ9%2BHSEpY5b%2B6EPSdwJn%2Fg9dVGx6vxCsr6IDddVQqEn96UkqILM4opkLmDExsuUa1LnqG1kHO3zFD0aOys%2Fh3V5l0dtBXg%2FyGrlPYOuzUaShNm%2BvnaUZkv0z"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:39 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbcdc8acd70cd-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b7611873-184e-4925-9fa3-39ec00d8b46e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247048",
    "X-Trace",
    "2B2A461CE006DE4673B46940F9B46C0104CA07A5B6000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=EeOaMCfajZRB2N5izd9vKJ%2Fe1l4kTefo3UTKt9VC0TZmJvGZdolyvaM0tlTZGWL%2FVPEgqLJ3kjxQp%2Br22xye9qi236MqNVukx%2BZBPAzgk3EbcflpIUy3KPqApPr%2Br83R"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:40 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbcddfe176450-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0feb3123-8b9d-4417-93a5-9a31a435212b",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247047",
    "X-Trace",
    "2B56DA9CF60A73812A3165C29731F132AB72C8F2E7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=TWciiuvcMo65UYZZbOA21bGmh%2BewI3TngUZtxgrgPudjXjMyMJX6d1T0Xcb2yyHipYbUE2zOm2QU63rGReB2XHxd8nt54%2Bo8UllxX0pro%2Bd0vtPpsIIesXpQGYQqdjUD"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbce15a6870dc-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "2f17249d-8e3a-4b83-b393-f7757234ee40",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247046",
    "X-Trace",
    "2B012B40D99591429662DF9AFC04E22D9055C875B8000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BjVQJvQLxX0Vyari0sXMaMABnPrmYBkP6UrYNOUoN6l6jb4nCcB7OuGq6x%2Fh3FPF98WMAvo6oSE0iLDuNIidH0WxV8sC27tItZ4hBqSBhXR9ZfM6CCm4v%2Bp1tvFFpwqH"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbce58e202530-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "36489bd1-2171-46ce-a6bb-56d89e82dfb6",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247045",
    "X-Trace",
    "2B3B207A23425E41B80F31E350449E8F1874DE71F2000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2B3HdoY8MlW3%2Bm0EYUqXeE9W9zd%2FVcsf5zYsDbiYfuPOj41F9CzukCDhhGTNC1hqjCZCYMHbR7wc8KNwjwXr5NkJoZjT7zolV3ekd5PrsCaQpW0I02R65m4Xz7fuIAvSf"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbce7182c24df-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "3f10a42c-028e-40d8-81b0-fce7e5c1560d",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247044",
    "X-Trace",
    "2B82BD6E03577813F50D59250AC5C8564CD1C52E74000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=aTADdbC%2FFQfYItPz61eTcp4Sh18Z%2BKpvosK9zqjXkBUXeLFbwdOzt5wld8u0cq%2BI%2FxbfFjDfDE%2BA31pqxHZQIkY%2B1kDkniWFeEkvxo26cZga%2BcSAn%2BTn%2Bexki1nv5msK"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:41 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbce88eb27106-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "7f7d8749-6335-4f69-9a19-e217794ad332",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247043",
    "X-Trace",
    "2B2B2F6967647CA816574FC53949AB8D83D7C9774F000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u%2F1UIZ4KMWQ%2BKhB%2FGUKq1KnUN6jWQU04YUOUJMqpqdSRpCnKZ4cLMXYl5swbIyc5Yk8FxZ4MUacqzStcUZXOO4X9vy2iIPtM%2Fx%2Fjgp00bGwX931PE85Dv%2BcgTtMKoLC2"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:42 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbcea58521fc5-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "43936c46-2244-472a-bcb3-966412cb5f84",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247041",
    "X-Trace",
    "2B1FD35CBADF1F320952BFAEDFBC05E034BECFD2D3000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=9FG2zofvHHuqR4BkFrm8H9KxWqTkv6LWjFYOOeF3TMdTWDv3u3WSYQoY%2FP2td0%2BPnBd6WUNQqHPgiIeLik0cGIS6mpZha4cRyCVFdlaRk81Tbm9hpDeLPOQA7SC%2Fq5cN"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695807",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695807",
            last_name: "Last Name 30",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695832",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695832",
            last_name: "Last Name 6",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695828",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695828",
            last_name: "Last Name 10",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695809",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695809",
            last_name: "Last Name 26",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695817",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695817",
            last_name: "Last Name 24",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695830",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695830",
            last_name: "Last Name 49",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695795",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695795",
            last_name: "Last Name 8",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695815",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695815",
            last_name: "Last Name 18",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695821",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695821",
            last_name: "Last Name 37",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695813",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695813",
            last_name: "Last Name 36",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695831",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695831",
            last_name: "Last Name 46",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695800",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695800",
            last_name: "Last Name 15",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695827",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695827",
            last_name: "Last Name 16",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695837",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695837",
            last_name: "Last Name 2",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695836",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695836",
            last_name: "Last Name 7",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695794",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695794",
            last_name: "Last Name 45",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695834",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695834",
            last_name: "Last Name 9",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695799",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695799",
            last_name: "Last Name 14",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695811",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695811",
            last_name: "Last Name 5",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695823",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695823",
            last_name: "Last Name 19",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695814",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695814",
            last_name: "Last Name 42",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695798",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695798",
            last_name: "Last Name 27",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695804",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695804",
            last_name: "Last Name 28",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695796",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695796",
            last_name: "Last Name 32",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695808",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695808",
            last_name: "Last Name 22",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695839",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695839",
            last_name: "Last Name 3",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695833",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695833",
            last_name: "Last Name 44",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695818",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695818",
            last_name: "Last Name 17",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695829",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695829",
            last_name: "Last Name 4",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695816",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695816",
            last_name: "Last Name 41",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695840",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695840",
            last_name: "Last Name 0",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695841",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695841",
            last_name: "Last Name 1",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695838",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695838",
            last_name: "Last Name 48",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695806",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695806",
            last_name: "Last Name 21",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695819",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695819",
            last_name: "Last Name 23",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695825",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695825",
            last_name: "Last Name 13",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695802",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695802",
            last_name: "Last Name 25",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695801",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695801",
            last_name: "Last Name 38",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695810",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695810",
            last_name: "Last Name 29",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695824",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695824",
            last_name: "Last Name 43",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695803",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695803",
            last_name: "Last Name 34",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695826",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695826",
            last_name: "Last Name 12",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695805",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695805",
            last_name: "Last Name 31",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695792",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695792",
            last_name: "Last Name 20",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695797",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695797",
            last_name: "Last Name 33",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695812",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695812",
            last_name: "Last Name 11",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695793",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695793",
            last_name: "Last Name 39",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695820",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695820",
            last_name: "Last Name 35",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695822",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695822",
            last_name: "Last Name 40",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695835",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695835",
            last_name: "Last Name 47",
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
      startedAt: "2021-11-04T06:20:42.300Z",
      completedAt: "2021-11-04T06:20:42.429Z",
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
      "6a8bbcebdc19ed73-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b8f16693-18f2-4e99-ac9d-450e6481ef2f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247039",
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
      "2B2EF97FF0269C6F8A513EE75D2EE12D40EE12942A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=zRe9NOpzG58agwZ6bpczST%2BVJeomrI542W1jRLMrk%2B5bgC3ylsPnKtuYxArujFRU6hp2kq8yrIDJ0%2FJwJMfYyonth6VHGGBwedOg%2Fwe2Ro0OrJbfoymfCJWZsc0YeEiQ"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "a46388de-4230-41c1-b1d5-3c496aa682b9",
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
      "6a8bbcee19326440-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a46388de-4230-41c1-b1d5-3c496aa682b9",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247036",
      "X-Trace",
      "2BB17C584D387EE9D8C6A8AB498935B91125019AD8000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iie9k4puMJDndvZI8l4gzp1IZ7YaTRxxYLu8jAcq04c5ja1m6kyeTl4E2EYnrpm0ZA%2BrsYdjNyxvgGAtzhN5akaYk7v1CDgxlsx3HiptkqSuIDpcz0T74gbpfxcqa9jE"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbcf759c57076-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0f318dbf-c350-482f-b0fb-908106f5346f",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247033",
    "X-Trace",
    "2BAA88A75BCDAD9B055C75DFEF9C6820DDE722DB74000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ko9HshG14uRErw3IJ9wYZLmYnCSc0CnyYslV%2Fu7Cs%2B%2FLDYqljP5c65rIkZhPXspKWLdAGXju%2BR9gpZGNFn%2FhRVV2coSt8MuwhRsZ4lH9O48phax9UPsA99tFD5s3l%2Bx4"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 0, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:20:44 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbcf8dae870ca-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "0541b5da-e7f9-4d06-a164-4dbab6480210",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "247031",
    "X-Trace",
    "2B34577F501BC31C82BBF5936C60D842DAF63A041D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UTGpx7kdqjvdoLOMe5zuC43jQ%2F%2Fnh5OR2V7VlgsmiNyrtTjge2NYjluhTIMj5LznkpaFUwUt8MMCNjjtwEKBZvgvKykeqacgVYaDWDlC7BvvsT95XTzeFH4t7mD3e8Y0"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "f226835d-e400-4254-befc-b43512f3df0a",
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
      "6a8bbcfb1ac10fcb-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f226835d-e400-4254-befc-b43512f3df0a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247029",
      "X-Trace",
      "2B8754870EB1FF72DD11618D06AB51E8A4EF5C3951000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ae2VMiIGp%2BIGUN8WvcpvdsTItWvKJaI%2FWXXgG7dTZGXSxEF88h90ty6%2FbQbWWZT7l65uli5nlGBHq7q%2BIGLK6AQ%2BeSVUUO3gH0LVsz0j0kHASDQRWdRG%2F8ndkgyRtLt%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695799",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695799",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695812",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695812",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695825",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695825",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695826",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695826",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695828",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695828",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd03f94370c7-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "df5caf7f-bdbc-4a01-8413-c344a7b16823",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247028",
      "X-Trace",
      "2BDC75C5AD5B2D9DF7BFCBFCBFC313FCE5246D9E1E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=cXPYi7QCOgMEIHLU7MCd3xltKqO3gfq0XuiiNQXw8ljUzcgozHRb8ji4y3vh6lSvlu5YfGzyJbok%2BlTWLBmOkCZ%2FNdLuo5dFH2j9uSn7SQjpYyhxJIv3JEqNs5pOrbEL"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695800",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695800",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695815",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695815",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695823",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695823",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695827",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695827",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:46 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd057852711b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b6cc49f4-f235-4ed2-8b12-348ca51196f8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247025",
      "X-Trace",
      "2BAF6E22563EF304A8C0D8787CDC21C9865C4ACFFE000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=a7%2Bj8QmUvYTO3P7xf4I5b3uUG%2FBJOBy3IW05CXtz6bEP%2F%2B32hKfIUTWNLYzhqrIgstzybE%2FRsP0YX6TBjSf30icdjIr6lxQGGIUU9IdZhZIwHCkYQgdorju2DGOdB5Jk"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    429,
    {
      status: "error",
      message: "You have reached your secondly limit.",
      correlationId: "a05566ae-4380-4f0d-ab91-82209ee9a015",
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
      "6a8bbd070a5f2509-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "a05566ae-4380-4f0d-ab91-82209ee9a015",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247023",
      "X-Trace",
      "2BADF88E18B6EA6708C1152B54F9758B1FAAFAF760000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=g679uL3VLOVAoEEm3nfsMLZpK0drKAk8lNwsS4fGd%2F3ZPUMXbygsBoQF755PF5KdhcNDcEkwQyLK%2Fa0kKN%2B4weFd4nTtTzSG4giLku64%2F7MSo1rcfWszyzXWUrruqQ7S"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695792",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695792",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695806",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695806",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695808",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695808",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695817",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695817",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695819",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695819",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd12eb6070ec-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "442e92d6-ccc2-4fbb-ba81-93548852ed17",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247020",
      "X-Trace",
      "2BD07F3FE9DE67703A9C3B401FE02CDF921A8E23E4000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=YTh8RY3BYzb9HTXcJawPf5Q5%2FBm69wOH3eU2XHtzGLUxzkPGkXaBMn05THJIJUnFbheVf0fxB%2ByJivH9taQmJoS2aA9DNJ8r9ybNs1Oyq3%2BkoFEeO50MfgnZcWxvaIEg"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695798",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695798",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695802",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695802",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695804",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695804",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695809",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695809",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695810",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695810",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:48 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd14794d70fa-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "610009f8-e16d-4dd2-a2ee-8d7af13de33a",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247018",
      "X-Trace",
      "2BF3FD16D394C2847672AED2D9B3500D3E5D7D0930000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=rLwWBL1%2Fmj4Bs0igmzuQJ3n1ZBhCmbEQPcJUfPxv7Jt%2Bmwbwx0Y86sDTnwOVjBsieKcV4i9G%2B1NvlTaayXcuzvd%2FI8bYI28opWiSbM2Trq9%2FcwosFdCGX1OzMPqkHU6r"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695796",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695796",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695797",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695797",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695803",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695803",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695805",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695805",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695807",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695807",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd15fab570f4-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "9e5d4e08-557a-47f7-898d-bac981cf3f83",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247016",
      "X-Trace",
      "2BA4F40BDA04012351DBC523C85A778CF15F878A5E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=WlZqLhFhy5pQEw4i0mIQXcxgwjmDcQLT%2FUVmHVuKwLq3Fk6dLwZuAj5aY94XdjpQi1z2kpxgzqP8TD%2Fe90dhwnoP%2Fk4o7oKWdqtWfmO%2BhDDJKl9gV8Iwav7FsdWNR1UY"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695793",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695793",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695801",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695801",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695813",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695813",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695820",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695820",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695821",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695821",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd185e7f023f-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "25b4a9f3-7bd2-44d9-8bc1-9ec69c168700",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247015",
      "X-Trace",
      "2B162EDD531554B1A63F7D512B9FBB9B01B4152C0E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=wCnFrDrY57ntLm6iRMSg57cv0aeBIwh4c%2BDk5Zsv34JbPyqBfwpVsGihyp%2FOPtzZzZULn3qCi14xgLPi8DpofX%2FT%2F2sdcpCiRuJtPRRUsguEsLOnB0Fb8PdvYQg7aYkw"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695814",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695814",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695816",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695816",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695822",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695822",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695824",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695824",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695833",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695833",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd19ef1d1c79-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "fb084a28-5e2c-4294-a080-3433fbdab865",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247014",
      "X-Trace",
      "2BC76C0462C9C1068C57E5CC27D535F239B07E0294000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=0BzTVlc8twshmK6C%2BhSQ2oiMUc2hOX%2FDSscHxlyLYDDpaAtcTDHtyZHNiAotJLSFEjDPTOz9OXL4pAYsN874UZO%2F86KrJuYqIbW9IZchZqLU9Uh%2BxUqqrzewmyNyYoxe"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695794",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695794",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695830",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695830",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695831",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695831",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695835",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695835",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695838",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695838",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:20:49 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbd1b69526435-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "50544db5-8d0d-4375-a7a4-b27302d2d959",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "247013",
      "X-Trace",
      "2B113BA2F91C1B25158F20398073DE4C5415A13E54000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=OhLli5IYR2oqln7O9FsXrx0KUJptp8JafJ0pibWw8YJ4u5gPWlnra9SdvZ%2BG0eQHvIiwli76n5j0NL0g4ZUSZk0jI%2F5Sxw3oaWzNRqS4lQeVTCNdT0zg%2BPpBp3VB8lgG"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695829",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695829",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695837",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695837",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695839",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695839",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695840",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695840",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695841",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695841",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdd858c36438-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "54cfad01-e3e8-4857-a6ef-0b52ca3203ab",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246968",
      "X-Trace",
      "2BF5E3ACA21A5295B9F7AE6345C842C89D9B7EEE92000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=paOlqj%2BZNJCVXWpZjkpqw7U6aCyKQMKewBzah8NiAZFN8dmFr6IXvBLptW%2BsCTkpWolPyEVFCGSjsuDkRnqysKymhA61RphHzokZAQ5p7cVA1IRQmA6PZtRpAP8idLjg"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695795",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695795",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695811",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695811",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695832",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695832",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695834",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695834",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695836",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695836",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdd9edb66462-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "efedf36b-8920-4800-a72c-ba2f3d277c42",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246967",
      "X-Trace",
      "2BE1CC1F54F51FC5D078BAE2087BD1EA5D319252CB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=%2BHkzy61q18SLpgp3ODsrYPEAOmtoFEY05hOsORaVoCVh2kHQk9SFtH69JVg6W6oeYt18rCsa6VagX8trYcjSilEb9s5bjyqeswLglvuKEZd3MlG6z4J3a16ryWRHGD0%2F"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695799",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695799",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695812",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695812",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695825",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695825",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695826",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695826",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695828",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695828",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:20 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbddb8dee3ae5-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "7f672752-6b44-4a82-a2c1-ab4102867da4",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246966",
      "X-Trace",
      "2BA90EFECE2FE1A528CB30B7FFCA5F84E6D40C8F19000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=b9T6VTXP9NP8%2FH85dy78t1P%2FIcc6h610khXLVyTxwUpB9M3mgvRMtAUKI6wHF9JSaTc9Uz3HuXmo7uJmZNn%2FnxQGYBQtRP1oyDnRIg5KeSbv3TbFbm7xg4ii%2BijpKoPW"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695800",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695800",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695815",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695815",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695818",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695818",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695823",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695823",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695827",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695827",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbddd2a6eed63-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "4ce6f418-9e39-4761-a1d5-0f82cab68de1",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246965",
      "X-Trace",
      "2B8021B2E93D11C44245FC3AFDBA65D58E5BF08450000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=pbKvQgleazEGEoVSVoXWIW8FHCWdVNcZ0wC%2FOyM5LTAREtfG%2B4xN%2BSwtu1YUQGK%2FC1Xm9ntj0%2F9SEzzUn8aQL0sh5coDN9ZaXQiGk%2F6lhcHA4LsLinrPiKNBq%2BuBDRve"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695792",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695792",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695806",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695806",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695808",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695808",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695817",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695817",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695819",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695819",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbddecc3e6438-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "70bedf64-fd20-423f-a4d6-6eb4a6fe860b",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246964",
      "X-Trace",
      "2BB7ADD6313672BCC3F20D7E93D93B926566247E42000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tIFlH3q38ayZRTndklAtCNTPKIwKkNx%2FLLgOgmV6ottGBl1GXezdorApm0%2FU7a1PDT0gL89W5f%2FSQJnhA2n6H2KdFBpfSrISOFQMILbGtCS02wCADg9hSsDW11SCre8G"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695798",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695798",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695802",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695802",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695804",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695804",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695809",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695809",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695810",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695810",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbde058326423-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "be366e34-f8da-47c7-98c1-09b4cf11b55e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246963",
      "X-Trace",
      "2BE6FD858BAF4CE7EC763E8AAC2D92821534C21C6D000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=vKLjfDInTVSfsGia7rqmFQqJerMZuLLXKmbi6bYvViIEzvBpmgALODrHfJ2AdxgHNp8j%2BNoONv3w8j4J2IuHcPgDFpNyAuUp04Hvv%2BnltzYQ3aFoT%2Bb31kgbJePNbnGK"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695796",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695796",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695797",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695797",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695803",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695803",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695805",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695805",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695807",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695807",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbde1c987214b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "504ddb2b-5f4d-475f-916c-af0b2738e1e7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246962",
      "X-Trace",
      "2BC4CEF41659CE3750B7FCC0DEA5BB32789BBC3B78000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=GazdhCoFPu7JTm%2F566S9RyQKGb2yf4vx9vgIIEVI5gQWzjZ5uqaEVYc1ii%2BdkRsbiGOieEufYK53FqIRFdUE3aCC75eHKZS9bnfrNioKCQqbSOHIkckeEzTo5Of1%2Biez"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695793",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695793",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695801",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695801",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695813",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695813",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695820",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695820",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695821",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695821",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:21 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbde34f6e70f4-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "194cb895-f76a-4c4a-9820-6d6886d891c7",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246961",
      "X-Trace",
      "2BCC9CAB711CB44BA3A3FD5171DD3A8408AFF1C3F1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=iWXm0Lbhyz32Gb2PC2UqlZeHcjGfm9WGpHN6Nnk9CzptdGjsfX2r5vDSs8Xav7U8lZeaWdUvi42FYyKG1vrWac4C5VwRbTouQfL621HjoBOSl%2BxJln%2FLT4UCtCxLruaZ"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695814",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695814",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695816",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695816",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695822",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695822",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695824",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695824",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695833",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695833",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbde4b8cb6450-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "61deb696-241b-40e2-9dc9-b45f662cddd5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246960",
      "X-Trace",
      "2B0A1B2607385326813047D4A3D7872A9B65FAA3C1000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=loA8xBTtx%2BL8PwMYH9v36GIQfN8IJmPD%2Ft%2FFIhzqRln4wjWRVk6Yu2qlqUS%2B0FQNtmVaiEHB%2Bcum8W90PSx0UBthgR7eLt%2Bz3PT6KgxWzaFW%2B4TDc2n9iF%2FJeW315Qmu"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695794",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695794",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695830",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695830",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695831",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695831",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695835",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695835",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695838",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695838",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbde63cef3ae0-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "cac256c5-0635-4eb2-8ade-7cb682323ba3",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246959",
      "X-Trace",
      "2B746CA7556E47CCDFDEB8E8DD69A6C16D1DD05607000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UR35FUVdhjqXWpiagZCubQMyoN9hjpOxrDOVz0tDAmZsvlwxsDTqNmwNypR0i822W9KlgEUTaDF3BR9By2RzJyMmWM3wh2cc332vYuDVtOwFpdA%2B7PqlCHa40oaLE78t"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695829",
          properties: {
            first_name: "Fist Name 4",
            grouparoo_object_property: "user4@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695829",
            last_name: "Last Name 4",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695837",
          properties: {
            first_name: "Fist Name 2",
            grouparoo_object_property: "user2@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695837",
            last_name: "Last Name 2",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695839",
          properties: {
            first_name: "Fist Name 3",
            grouparoo_object_property: "user3@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695839",
            last_name: "Last Name 3",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695840",
          properties: {
            first_name: "Fist Name 0",
            grouparoo_object_property: "user0@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695840",
            last_name: "Last Name 0",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695841",
          properties: {
            first_name: "Fist Name 1",
            grouparoo_object_property: "user1@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695841",
            last_name: "Last Name 1",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbde7e8e870ec-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "25cf30c1-ecfa-4963-800b-66433b8c11b0",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246958",
      "X-Trace",
      "2BA5C96B183FFA0BC3FC009D099C5CCBA2A2377EFC000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Ta6dQR%2B698Ls4qVETItnT3BMUqcOAEB%2FrJp9JavqazeC6yvaGeHxAXdBvf2CuRHHh50YgLCT%2FTiCd1hqNYXCVn%2F52J8%2FNnjzOBSjvIGUO3EWs4%2Fm7G8G%2BrrvoVOffVFl"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695795",
          properties: {
            first_name: "Fist Name 8",
            grouparoo_object_property: "user8@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695795",
            last_name: "Last Name 8",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695811",
          properties: {
            first_name: "Fist Name 5",
            grouparoo_object_property: "user5@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695811",
            last_name: "Last Name 5",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695832",
          properties: {
            first_name: "Fist Name 6",
            grouparoo_object_property: "user6@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695832",
            last_name: "Last Name 6",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695834",
          properties: {
            first_name: "Fist Name 9",
            grouparoo_object_property: "user9@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695834",
            last_name: "Last Name 9",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695836",
          properties: {
            first_name: "Fist Name 7",
            grouparoo_object_property: "user7@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695836",
            last_name: "Last Name 7",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:22 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbde95c6d2536-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "25c5abb1-3720-480a-8fcc-3b268da53429",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246957",
      "X-Trace",
      "2B89BFF626003FBA6CA0B4FE423412610586B44351000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uoqELuDSeTMmIaBWsNBVZmPbpfWDtF08jyHU8ZfLiKlkGQUr9JmPQzDocSRnpKPt6TmRb4rF9zUGoXYUYnGFpFcxxtwvrUmte9neYyoDVme8O23IQJ4cuAmstMTsM%2Fhz"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695799",
          properties: {
            first_name: "Fist Name 14",
            grouparoo_object_property: "user14@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695799",
            last_name: "Last Name 14",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695812",
          properties: {
            first_name: "Fist Name 11",
            grouparoo_object_property: "user11@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695812",
            last_name: "Last Name 11",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695825",
          properties: {
            first_name: "Fist Name 13",
            grouparoo_object_property: "user13@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695825",
            last_name: "Last Name 13",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695826",
          properties: {
            first_name: "Fist Name 12",
            grouparoo_object_property: "user12@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695826",
            last_name: "Last Name 12",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695828",
          properties: {
            first_name: "Fist Name 10",
            grouparoo_object_property: "user10@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695828",
            last_name: "Last Name 10",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdeafc311fbf-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b095b6ab-beb2-4a9e-b451-809329557562",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246956",
      "X-Trace",
      "2B0AF723DA8DB31064ACA0CDEB1FB1331479A8E100000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=96PPiG5pFyipwkYxmUW16QoqBVSJMk74gf673pUTB34PGuo%2FeqMrXvA613IVRekus8IyAStAX8jr7LJvvqgOII7%2BFs1oIQlvDZgnrsB4UORVFqZfLboaoRShuBDq76O8"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695800",
          properties: {
            first_name: "Fist Name 15",
            grouparoo_object_property: "user15@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695800",
            last_name: "Last Name 15",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695815",
          properties: {
            first_name: "Fist Name 18",
            grouparoo_object_property: "user18@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695815",
            last_name: "Last Name 18",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695818",
          properties: {
            first_name: "Fist Name 17",
            grouparoo_object_property: "user17@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695818",
            last_name: "Last Name 17",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695823",
          properties: {
            first_name: "Fist Name 19",
            grouparoo_object_property: "user19@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695823",
            last_name: "Last Name 19",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695827",
          properties: {
            first_name: "Fist Name 16",
            grouparoo_object_property: "user16@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695827",
            last_name: "Last Name 16",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdec68d7025a-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "c96815f0-3df7-468d-9d42-c7a6f746206e",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246955",
      "X-Trace",
      "2B0A868545FDFCC73DFDD0AB850769464AC872E2CA000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BZmShLGoY3mfFS6Eg3GGte4N1K4MTBRJHVntgygbMmLlQxu7kwz0rVZU9rEOiRgHFgu3segFVGESXLBDnrtU4Zfg2oMCaVzbZfkRZvVdn42aTHDtUiTxsZN8s8rdtC9a"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695792",
          properties: {
            first_name: "Fist Name 20",
            grouparoo_object_property: "user20@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695792",
            last_name: "Last Name 20",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695806",
          properties: {
            first_name: "Fist Name 21",
            grouparoo_object_property: "user21@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695806",
            last_name: "Last Name 21",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695808",
          properties: {
            first_name: "Fist Name 22",
            grouparoo_object_property: "user22@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695808",
            last_name: "Last Name 22",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695817",
          properties: {
            first_name: "Fist Name 24",
            grouparoo_object_property: "user24@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695817",
            last_name: "Last Name 24",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695819",
          properties: {
            first_name: "Fist Name 23",
            grouparoo_object_property: "user23@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695819",
            last_name: "Last Name 23",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:23 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdee1f0e709a-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "897298d0-472b-4f49-bd3d-8a7d7a9dd1be",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246954",
      "X-Trace",
      "2B3A9B24C91CE9D7C4C65B3C64E61425AA9F886FCB000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=h6Dn9WPjroEldq0SBlgohhfbL3jGt7H37puDp2d60s2bHof%2BCh9W%2B27J8VQzsI%2F8Yt9zMnrHT7ezJlC3M4ELSBoaUxOCpPQ0w%2BxpASdqhDavkc0nGvYlHrjSl%2By4%2BuR%2B"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695798",
          properties: {
            first_name: "Fist Name 27",
            grouparoo_object_property: "user27@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695798",
            last_name: "Last Name 27",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695802",
          properties: {
            first_name: "Fist Name 25",
            grouparoo_object_property: "user25@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695802",
            last_name: "Last Name 25",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695804",
          properties: {
            first_name: "Fist Name 28",
            grouparoo_object_property: "user28@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695804",
            last_name: "Last Name 28",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695809",
          properties: {
            first_name: "Fist Name 26",
            grouparoo_object_property: "user26@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695809",
            last_name: "Last Name 26",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695810",
          properties: {
            first_name: "Fist Name 29",
            grouparoo_object_property: "user29@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695810",
            last_name: "Last Name 29",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdf14d4d70fe-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "d0b50f66-a0e2-4550-af8f-8ed1f7a87560",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246953",
      "X-Trace",
      "2B39523E84781C6343D24092B887FBD74CB14BA899000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=NpfwN4XFG6dZ%2FjOzg0jC3iOyi73NPsPhEg7WGJ9aBE7hSagELcqAnlkTeRgS3AQLwrByeWXbBev0JeQFgmorB76Fja4WrIvF5w4A9dblU5WGsCZNra9cDgEeKyzhguZs"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695796",
          properties: {
            first_name: "Fist Name 32",
            grouparoo_object_property: "user32@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695796",
            last_name: "Last Name 32",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695797",
          properties: {
            first_name: "Fist Name 33",
            grouparoo_object_property: "user33@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695797",
            last_name: "Last Name 33",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695803",
          properties: {
            first_name: "Fist Name 34",
            grouparoo_object_property: "user34@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695803",
            last_name: "Last Name 34",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695805",
          properties: {
            first_name: "Fist Name 31",
            grouparoo_object_property: "user31@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695805",
            last_name: "Last Name 31",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695807",
          properties: {
            first_name: "Fist Name 30",
            grouparoo_object_property: "user30@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695807",
            last_name: "Last Name 30",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdf2bed9707b-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "739948b9-bb82-43d7-9d6e-493d229c3274",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246952",
      "X-Trace",
      "2B9F1EAF429BB517943D2260BAF05C01D07A09CA25000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=o21MWj4PxDPFFE3fCMai1v1hESC7ZJzYOmxL3EQd0%2FXwrn3R3gEGfelVgYT6hvej8GNojGXmQktUCK1oDCAKHR9%2BJ%2FY%2BrqwcVV80OoLYbKX68TA1g4amEr3CvRfUcLOs"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695793",
          properties: {
            first_name: "Fist Name 39",
            grouparoo_object_property: "user39@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695793",
            last_name: "Last Name 39",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695801",
          properties: {
            first_name: "Fist Name 38",
            grouparoo_object_property: "user38@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695801",
            last_name: "Last Name 38",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695813",
          properties: {
            first_name: "Fist Name 36",
            grouparoo_object_property: "user36@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695813",
            last_name: "Last Name 36",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695820",
          properties: {
            first_name: "Fist Name 35",
            grouparoo_object_property: "user35@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695820",
            last_name: "Last Name 35",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695821",
          properties: {
            first_name: "Fist Name 37",
            grouparoo_object_property: "user37@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695821",
            last_name: "Last Name 37",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdf44a7a70c7-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "ce98016c-7ddf-4ccf-8083-9fb8261f0cf2",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246951",
      "X-Trace",
      "2B02307E7F1251D639B30FC35BB84B3F6887303F22000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=UXEp8F9JtnOICSO88ds1yujmDCcW5HtsyiqX9N8vt%2B9tw6IMcb3L6EQz8aMdNJ%2Ft86x1nJ21IBmo7rYSJL%2FfBQZT4T%2FYftEVM%2Fl3AqczZDknl7dICLl%2F8EJWImtxbKmO"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695814",
          properties: {
            first_name: "Fist Name 42",
            grouparoo_object_property: "user42@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695814",
            last_name: "Last Name 42",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695816",
          properties: {
            first_name: "Fist Name 41",
            grouparoo_object_property: "user41@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695816",
            last_name: "Last Name 41",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695822",
          properties: {
            first_name: "Fist Name 40",
            grouparoo_object_property: "user40@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695822",
            last_name: "Last Name 40",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695824",
          properties: {
            first_name: "Fist Name 43",
            grouparoo_object_property: "user43@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695824",
            last_name: "Last Name 43",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695833",
          properties: {
            first_name: "Fist Name 44",
            grouparoo_object_property: "user44@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695833",
            last_name: "Last Name 44",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:24 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbdf5cece70f5-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "f0e8ffdf-fc9b-4e8c-a837-c043ed5b37b8",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246950",
      "X-Trace",
      "2B9BF72A67E03156E7997C8815BA95F3CB95CBFE92000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BXTbPqPurI4knu%2B4nBQPkSOABOZAg%2FwbqqeL0Y7jW10FvHBKy5%2BvMEUc2SMUofah47Rm80izLg4PJL%2BMYK6ue5p%2F1L1%2FXVvjzWOK7KnKR4%2FebEh9QRDgbY7b8YliI%2Bdr"}],"group":"cf-nel","max_age":604800}',
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
          id: "482695794",
          properties: {
            first_name: "Fist Name 45",
            grouparoo_object_property: "user45@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695794",
            last_name: "Last Name 45",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695830",
          properties: {
            first_name: "Fist Name 49",
            grouparoo_object_property: "user49@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695830",
            last_name: "Last Name 49",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695831",
          properties: {
            first_name: "Fist Name 46",
            grouparoo_object_property: "user46@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695831",
            last_name: "Last Name 46",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695835",
          properties: {
            first_name: "Fist Name 47",
            grouparoo_object_property: "user47@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695835",
            last_name: "Last Name 47",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
          archived: false,
        },
        {
          id: "482695838",
          properties: {
            first_name: "Fist Name 48",
            grouparoo_object_property: "user48@demo.com",
            hs_createdate: "2021-11-04T06:20:42.300Z",
            hs_lastmodifieddate: "2021-11-04T06:20:42.300Z",
            hs_object_id: "482695838",
            last_name: "Last Name 48",
            number_field: null,
            text_field: null,
          },
          createdAt: "2021-11-04T06:20:42.300Z",
          updatedAt: "2021-11-04T06:20:42.300Z",
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
      "6a8bbdf73d4e251e-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "b89391eb-a655-4150-af4c-0d9435f12a75",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246949",
      "X-Trace",
      "2BA0759C0F488D9B30CAAC7550B8BBE55FE84B9830000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=BC6uT7iFcH84kpINBGjnMQtxTrew6CPwy%2FgeIcXyYjGaL1uoRK7QhWP3KnKvvhftU6lkCTeGW59Bt0n9GxnwbHqew9PHJlRrLw0Tmoq5xAVxM29Lao%2FzIfqAlQ0xSwHv"}],"group":"cf-nel","max_age":604800}',
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
      { id: "482695829" },
      { id: "482695837" },
      { id: "482695839" },
      { id: "482695840" },
      { id: "482695841" },
      { id: "482695795" },
      { id: "482695811" },
      { id: "482695832" },
      { id: "482695834" },
      { id: "482695836" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:25 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbdf8ba173aeb-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "8a099104-ce78-4699-9732-981787fed207",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246947",
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
    "2BDC3596160BD19FB1D48AEDC0CF1B34EB99E930CE000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=eblALSm2BIdiDQBxU1wNjM1D33Ny%2BYCY70ptW08F%2B02iryCcQXf1hTvfi8y0s7XhZypPXN5PRXTPnPAT4r8tr4x2BchwB6Ag8hsaOi9y%2BWJZ3MRqI0LjtOapPsXJlSJg"}],"group":"cf-nel","max_age":604800}',
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
      { id: "482695799" },
      { id: "482695812" },
      { id: "482695825" },
      { id: "482695826" },
      { id: "482695828" },
      { id: "482695800" },
      { id: "482695815" },
      { id: "482695818" },
      { id: "482695823" },
      { id: "482695827" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:25 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbdfa3b9a6432-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "ee06f6d0-2580-46e7-a9f8-05c28f8d8df7",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246945",
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
    "2BB21A8C492F26613BE4601765D6DCF8DDBF2E22B5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=tC3E20dEjg1Rdtf7%2Fnave%2BGMru2yInXyWLFGD83N3zrmy4dXCm%2BENhm7g0a1qEwL3jj7N3W4fxXqypwLrFLUvMvlGiJvZc%2ByDY6C0Ydo6ZSiWxjKlzNVCNSHUG8Nu78o"}],"group":"cf-nel","max_age":604800}',
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
      { id: "482695792" },
      { id: "482695806" },
      { id: "482695808" },
      { id: "482695817" },
      { id: "482695819" },
      { id: "482695798" },
      { id: "482695802" },
      { id: "482695804" },
      { id: "482695809" },
      { id: "482695810" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:25 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbdfc09266426-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "89fc3a82-a1c5-4ca9-8e22-257647c0a88e",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246943",
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
    "2B4DE6D390C5D6C6B3D8831140B9B4DDB3A69C0E9D000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=8XibGTrvAIDple6CTklWrrBX7fkG6NQxdyyC8W8JZTHgOxuOnDMX6NchDrj%2BmW2POFmtZ3oOmNniLuQTrPovO7jbwkHC7jXjd6OCk0P3rDzogDVzweI0KKm%2FIXQyKKAR"}],"group":"cf-nel","max_age":604800}',
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
      { id: "482695796" },
      { id: "482695797" },
      { id: "482695803" },
      { id: "482695805" },
      { id: "482695807" },
      { id: "482695793" },
      { id: "482695801" },
      { id: "482695813" },
      { id: "482695820" },
      { id: "482695821" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:26 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbdfd6dd324f7-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "b2d6ede2-5138-4ff4-a444-e48191d6cdb3",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246941",
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
    "2B69FA2DBFA3027873516A5A10888B7AF852629808000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=Z%2FyFMvYcDFF%2Br1eGVHgYyxMfU%2B8D01LiqCMY6Yv%2By0FKttNFLcvoiKO%2BtLKF8d628hgMvfEiQM%2FIEHyy4zM5o31xfdCQfrPQwWCJjo0s0KBUqj34I0AohY6%2FtGLRa%2F8p"}],"group":"cf-nel","max_age":604800}',
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
      { id: "482695814" },
      { id: "482695816" },
      { id: "482695822" },
      { id: "482695824" },
      { id: "482695833" },
      { id: "482695794" },
      { id: "482695830" },
      { id: "482695831" },
      { id: "482695835" },
      { id: "482695838" },
    ],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:26 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbdfeeff97088-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "eb058943-40a4-442b-9837-63acb258cc24",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246940",
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
    "2BCF006BA70045B1C6D6349DB00C7C12DB0FFA5122000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=etiwZ%2BiJgQgJlHQvOUburDPEsyKf5ilqkUARIbfweIuTKgZGH89Qz9v1yITXUMhXjheGoo2XoPRLplpyTV6n07VcUFw3k2Gqc2pm%2B5ku0mKHHgmd2rBG2y2OIVv1Uq%2Fn"}],"group":"cf-nel","max_age":604800}',
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
          id: "482758566",
          properties: {
            first_name: "Sam",
            grouparoo_object_property: "grouparoo@demo.com",
            hs_createdate: "2021-11-04T06:17:15.246Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.093Z",
            hs_object_id: "482758566",
            last_name: "Test",
            number_field: "",
            text_field: "back",
          },
          createdAt: "2021-11-04T06:17:15.246Z",
          updatedAt: "2021-11-04T06:20:06.093Z",
          archived: false,
        },
        {
          id: "482638862",
          properties: {
            first_name: "Maria",
            grouparoo_object_property: "grouparoo2@demo.com",
            hs_createdate: "2021-11-04T06:19:33.043Z",
            hs_lastmodifieddate: "2021-11-04T06:20:04.260Z",
            hs_object_id: "482638862",
            last_name: null,
            number_field: "",
            text_field: "",
          },
          createdAt: "2021-11-04T06:19:33.043Z",
          updatedAt: "2021-11-04T06:20:04.260Z",
          archived: false,
        },
        {
          id: "482646785",
          properties: {
            first_name: "Liz",
            grouparoo_object_property: "grouparoo3@demo.com",
            hs_createdate: "2021-11-04T06:20:06.310Z",
            hs_lastmodifieddate: "2021-11-04T06:20:06.310Z",
            hs_object_id: "482646785",
            last_name: null,
            number_field: null,
            text_field: "some text",
          },
          createdAt: "2021-11-04T06:20:06.310Z",
          updatedAt: "2021-11-04T06:20:06.310Z",
          archived: false,
        },
      ],
    },
    [
      "Date",
      "Thu, 04 Nov 2021 06:21:26 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "CF-Ray",
      "6a8bbe00a9167085-SJC",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "CF-Cache-Status",
      "DYNAMIC",
      "Access-Control-Allow-Credentials",
      "false",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "X-HubSpot-Correlation-Id",
      "2ca12bfc-dd4d-46ff-81b0-3a98cb821ab5",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "246939",
      "X-Trace",
      "2B48A2A7552372EB2054D35407FFC0AEB80280574C000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=LiRyv1quxyknjoE0VIU5OaHnJCjViZ2XvNmhYXGS2Xs1BX3IGRK8qAdQ9WgnoYgk6lSnw86z7PRxmslAi6KWdGt327X7lm5QD8U1s5BHYNaXsD5FqK2ByKiNAvFjwxmU"}],"group":"cf-nel","max_age":604800}',
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
    inputs: [{ id: "482758566" }, { id: "482638862" }, { id: "482646785" }],
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(204, "", [
    "Date",
    "Thu, 04 Nov 2021 06:21:26 GMT",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe021c893af1-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "c0e26298-b9ff-41d1-8ff7-77159ef1b856",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246938",
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
    "2BDE8032102C2DA7ED82BDA57B5940B8AA048F08D5000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=X0%2FLzTIhwETO2WrURS6%2BpZwA6MM30lmgRAEfsUhvHxMhvL4PTcbcQ%2FUMhF7tlHHnof95TT3MuZZAc396%2B2OebEoawPIUcrCx%2FFgS9A%2FkEOBz9vimAslXWRAVN7sSQk5w"}],"group":"cf-nel","max_age":604800}',
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
    limit: 100,
  })
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(200, { total: 3, results: [] }, [
    "Date",
    "Thu, 04 Nov 2021 06:21:27 GMT",
    "Content-Type",
    "application/json;charset=utf-8",
    "Content-Length",
    "24",
    "Connection",
    "close",
    "CF-Ray",
    "6a8bbe03fdbaed8b-SJC",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "CF-Cache-Status",
    "DYNAMIC",
    "Access-Control-Allow-Credentials",
    "false",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "X-HubSpot-Correlation-Id",
    "1ce73bfd-fcf3-409a-a653-3e5c2d99c566",
    "X-HubSpot-RateLimit-Daily",
    "250000",
    "X-HubSpot-RateLimit-Daily-Remaining",
    "246937",
    "X-Trace",
    "2B11B471E892B5A55458D2DC91D992288900F7ECD7000000000000000000",
    "Report-To",
    '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=G%2BWa5xv1Iw1C74IRCsO0OsM3PvZDLIj13WxbtIz0dv88bll9T%2FBfGxfrz1crpO5fAclYQJuJKh6N0BwiCQ0TXLUpeI4DegJRBC1JRpx2nyGof%2Bp%2F7uRzYcyqh9w9Y7lj"}],"group":"cf-nel","max_age":604800}',
    "NEL",
    '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    "Server",
    "cloudflare",
    "alt-svc",
    'h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400',
  ]);
