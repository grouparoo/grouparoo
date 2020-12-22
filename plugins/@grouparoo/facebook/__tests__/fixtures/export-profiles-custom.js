const nock = require("nock");

nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846440603390582", name: "(test) Group 3" },
        { id: "23846440602950582", name: "(test) Group 2" },
        { id: "23846440602800582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"2f4ac5687f3c5774a631c0bc83e9f23a72dcabec"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AgtCh1J0uw8O2ChAGtrPkSp",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "F6KjLeBfoS6",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "aRaTpGrK5hsfL1PrYV/z721uvwyT/VnsKdj7/B/Lw8i+amy6hnkIbBBgbR+QjJ+89ZCv4Gc3Ip8Ko9K1Sa0m6g==",
      "Date",
      "Fri, 18 Dec 2020 01:10:59 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440602800582", {})
  .query({
    id: "23846440602800582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AZdXWvtQPbi62xKkmb4UBCn",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "BsWW11DoB7E",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "mF5srMMT5gwArl95J5F1joQ2kK/pyM7QfH3k3HZTChWFVoBZHZjXmOlNeT5/HXV/1jJuqMqZlM/bS4CyatKBEw==",
    "Date",
    "Fri, 18 Dec 2020 01:11:00 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846440603390582", name: "(test) Group 3" },
        { id: "23846440602950582", name: "(test) Group 2" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"2a687b9b13a1715529feeec4ef8cbe6c21eaa807"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ACO2YCYK_ZFZrXaxE8l4FZ9",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Alu6cwQ0vLC",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "5uTs8QqSMDbm559mr7Fjed+Q5He6+3QsRgEqUbTbtKNCNPF+ttU+wmBIdZZwQBmwmMffR+Xgr0NmiWhzVNa9IA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:00 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440602950582", {})
  .query({
    id: "23846440602950582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AVCsVI8ptKV5lcSM2SVire7",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GhBHFlewRiZ",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "NCd9H0jrUHizr4MnoFo0yAn+6FzLiiiAMfSYQNb4ug/Ib3mFJtQYuBtunx2a3tujM2N5CQQnl4LgeYwIemmlIg==",
    "Date",
    "Fri, 18 Dec 2020 01:11:01 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846440603390582", name: "(test) Group 3" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"6d0120b53b27b9d2dcfa7fe978d17cdee4336ec6"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Ab44oCM0JNhYcmF19e192zZ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "C76zCzAykwe",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "SB6y5Z7171WyB0LdTwiaOWvBvO9UwOtZwqpcZZ5O762nkpcLa3W+6zRt+6xg0KvfrbxJ7K7Z75TuHrDR0WGvGQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:01 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440603390582", {})
  .query({
    id: "23846440603390582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "Aon1tBxmnG7yVnkJRqjZEbG",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "Dyaa8sJ0RSf",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "GfwMDFswhA5aljkXo15ggLsTnfT1nCswuwwRPYh0sk9EdslXiXjBavAlc1NoYTNEkgczHz1xyo210GoTBPIy4Q==",
    "Date",
    "Fri, 18 Dec 2020 01:11:02 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUk14dGY5Vkk3Qk1rZAGxzOGdMaWFTS08xdjdIY1lCZAW1KVnM3VElJYVJ2aEJHSGUtaXNKRWdnWERYbWIwWURwc2tOMGozeFVvbjdsMl9mTF93M0wxZAlVR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"a9283466ad1e49df7c9e273743c2272a35a7efd3"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AD5ACztLg5Ka5UV_S5P5tjo",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Ct6EeaOzbOX",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "5Dry5q/nOSSfVdiXGEsrtSeE6YnxY0Ju0jAXDkOG0O4DJuUPPmj+JbhhBoOs+idpldE5MnOIlRkO7IJPZauZhA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:02 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUk14dGY5Vkk3Qk1rZAGxzOGdMaWFTS08xdjdIY1lCZAW1KVnM3VElJYVJ2aEJHSGUtaXNKRWdnWERYbWIwWURwc2tOMGozeFVvbjdsMl9mTF93M0wxZAlVR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"a9283466ad1e49df7c9e273743c2272a35a7efd3"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AxCOUjuOhA2VKUSjaYoAgO3",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DrZOFBIkp80",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "VlcWGLGBjKjLwPbvCxCO/JJhIW+NoL1YbeJA8ZNYWDdyqqOWIT3Ku6kKdyMaUgbgF6asqT9P4QFj6VMnEPwkbg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:02 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUk14dGY5Vkk3Qk1rZAGxzOGdMaWFTS08xdjdIY1lCZAW1KVnM3VElJYVJ2aEJHSGUtaXNKRWdnWERYbWIwWURwc2tOMGozeFVvbjdsMl9mTF93M0wxZAlVR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"a9283466ad1e49df7c9e273743c2272a35a7efd3"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AxOZfJ8j186dw5JqeSLBW5l",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EF9i7iVnn6N",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "YI6VLMBZ51Rpv4EkBfj11gE5EVpCrgBkwUGQxBNfjD1hT8gjSp3B7BYZOBV2/fijuFt1wL2yrmbo0Ai+BNjfqg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:03 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUk14dGY5Vkk3Qk1rZAGxzOGdMaWFTS08xdjdIY1lCZAW1KVnM3VElJYVJ2aEJHSGUtaXNKRWdnWERYbWIwWURwc2tOMGozeFVvbjdsMl9mTF93M0wxZAlVR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"57aa82613137c3e2e94a44fb9858211b66817f67"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AMza-DnrXnb2SXrDsHY25zZ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "G9XeLcR495F",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "C228bKmYdbrosjtwORev6P82C5+Ju98bl4C00w+XO0nF9WnA0RrtW9agK1uTCJXyQx2P59xoLuEHlHaNLZNZlg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:03 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/act_542676646349772/customaudiences", {
    name: "(test) Group 1",
    subtype: "CUSTOM",
    description: "Created from Grouparoo",
    customer_file_source: "USER_PROVIDED_ONLY",
    id: "act_542676646349772",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { id: "23846442071840582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "Ab1tQ2gktpK0AKceTUCW3_q",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "EgXT4AFMvkf",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Vary",
    "Accept-Encoding",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "OerAlLBaNw9q0oPPNWZkCwuzO9Yl+7ASpNCXyYNDwMO81Le0kBj8qBTIVotpqI9/HQ9zxnJyfgetf/K/tYap/Q==",
    "Date",
    "Fri, 18 Dec 2020 01:11:03 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4042233637407993509",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":12.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A_buE9zPOuad3jfP0tBsIkj",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "E5I/1k+Bqg4",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "8ErmsTpI9rW3uKOPn6VA99y1NwIOuOEY74SasguTdvuCyqVhCOZdSjvZCh6NpR/Bc4POu4j4Z0DwaM45ydnquw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:04 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442071840582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUll2LTlaY0NZAN0luckVyZAEppTDdsazYxZAnpRQVZAqUFlnbkU0M1Q4VFdVY29zVFk2U1I0VlFtVENGdXFRcjdWV1dUZAHZATZAjFlM2R1QzdQQWIzS2d3ZAEZAn",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"13e5ab7168251149fff4857d6eb8f9c3011e8585"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Adv8hWJf66vuhEVc97L8h2O",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CsSuVLCY4wn",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "vzU6wQT0FqDetYC9skBikz1Iwesp1FQe7yWaytiCXX0BqwLkuHlVvwik5ZKF9zZxc9YALQ537HEL/Q8/34QLlQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:04 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846442071840582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846442071840582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"050c19152221ce66d0e04f979b11daba3f5a4f57"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ACJUONlu2GbDSvWZki0A6Fi",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EnKZbhPYYdv",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "S4irGS8tBeng9YdFXQb8R/EojUUvlvQ2YgAB2Ux0TO6FgyKoyqgIX4ivdckK6e6pgGzBH5mPWq7ZFqfKphJOLw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:04 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442071840582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUll2LTlaY0NZAN0luckVyZAEppTDdsazYxZAnpRQVZAqUFlnbkU0M1Q4VFdVY29zVFk2U1I0VlFtVENGdXFRcjdWV1dUZAHZATZAjFlM2R1QzdQQWIzS2d3ZAEZAn",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"13e5ab7168251149fff4857d6eb8f9c3011e8585"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ANEAd6wNxHSwl0CktDTJjbF",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DcjfmKLQIKE",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "Z1XEmnc9IMGDhtTtgVrkUsKXMlji2mgTelfYt6g6id+KUWa8UpPeSEbCZN4WICzdaEy7Ez/SCqEQZhOnMoYknQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:04 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUll2LTlaY0NZAN0luckVyZAEppTDdsazYxZAnpRQVZAqUFlnbkU0M1Q4VFdVY29zVFk2U1I0VlFtVENGdXFRcjdWV1dUZAHZATZAjFlM2R1QzdQQWIzS2d3ZAEZAn",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"2e1d197d8de504799d42cd3d483993b426c5d5d5"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AX5-kd1_rqqchPEtds8CDmV",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EY9qRyO+vfB",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "ZEJFz3/i/dzG3dIOioMket/U64xwDgV6b/UaTMUm0IWwUKMuo5uJC33OYTYiM373J6dRIWdpwMzhRw78wIkjwA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:04 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
          "467b1b85a0ee941df09ab955dcb561d51bcae760fbec8d0ec154c05528c9cb51",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":20.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AjzZdna9SQSRIPG7-Cl26ND",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DBhhlp0MCiU",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "gOAHhqN1n7E103HvdnJoSxqeJm7ioBLc23L/LCjC5kmUzlExnrX9L4yUhD3QTJYPFNcX7jGslTkPJ59p+XQkLw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:05 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUll2LTlaY0NZAN0luckVyZAEppTDdsazYxZAnpRQVZAqUFlnbkU0M1Q4VFdVY29zVFk2U1I0VlFtVENGdXFRcjdWV1dUZAHZATZAjFlM2R1QzdQQWIzS2d3ZAEZAn",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"2e1d197d8de504799d42cd3d483993b426c5d5d5"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A6KT7kAotJbF4JbBBtnD4yO",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ELwVlnjwx3D",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "hCigZ+YeRgiLipNggLhG6ESV6cKlOBGkbwQi90CCfCyBHMt4l4GQ9uH1IViXlQ6669p/3KhGwOEAQLCEXbaytg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:05 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/act_542676646349772/customaudiences", {
    name: "(test) Group 2",
    subtype: "CUSTOM",
    description: "Created from Grouparoo",
    customer_file_source: "USER_PROVIDED_ONLY",
    id: "act_542676646349772",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { id: "23846442072220582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "Awj4Wy2URrUW1ekxdxn8E5b",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "HBGh0MA+QUW",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Vary",
    "Accept-Encoding",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "O7fX5Lx1J6OkDb0DRuyOpDW3bYXR+ZoTVLqSLuVaLBdSq5mzsTpKDwyy/a4bu6h9yVn3q7UZ7HPu3EVrpC3RiQ==",
    "Date",
    "Fri, 18 Dec 2020 01:11:05 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442072220582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
          "467b1b85a0ee941df09ab955dcb561d51bcae760fbec8d0ec154c05528c9cb51",
        ],
        [
          "e9e666e3ad98fc467a60cd86e41d21cac316e4e878ea3e247537e7777d34a556",
          "6177321eac992341d1ad0823a07e76bfc4ee6909db120e377ea303fdc216756c",
          "9706987d633e05a0d2931c21108b37e8c790570048ac47c48900314bb325d606",
        ],
      ],
    },
    id: "23846442072220582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442072220582",
      session_id: "4564521828325725224",
      num_received: 2,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":26.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AxyYaX_yIIs_XRLLG7Iaoav",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AJ1V0ing0pa",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "gbhnamd7df3vTDgo6XXdDMekvfLmSURsC9NOicqeUFf+lLstaJth6ifGjdwGgM32hJePGxAcLENyBdMONR61UA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:06 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2" },
        { id: "23846442071840582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"baf0abc43111eba0cf9db07b67526310d89ef8b2"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AWwWkhKQamIrFcSZFn6ZYcM",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AuWGzCwOXrW",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "t6jJVD5AelczuWbcyzC4mXIv1pnXj2Pe75YZUXKouev9cXFdaCYlZBI3A3vUbeZx9DFa5vx9HCWtBf2Lthh5Kw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:06 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846442071840582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846442071840582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"050c19152221ce66d0e04f979b11daba3f5a4f57"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Ae1EhoANwKY4VoRlIdyMN5C",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EPaiJZm33aG",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "0yYxzsobXbd9R2A74Whn0D+8BaXXB8zu0gn6HQgVsGmydqMbf/J8abAT92+S48gDQ2qcEQOsyUBo1z6yhD/u1w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:06 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846442072220582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846442072220582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"e9267aad2fde77ec7ae0f75e3b7617faa86f6856"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Aq_k7_zLgBLY9Lr3fO5ZQ3O",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Dcamj0SUBl9",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "V8xX3Y/x57AXeRQSFvW5vRXicj5ivqIbm/H4s/gviD5OyVEIqpW2hCt3C4Hjo2M06cQl7Nyllbi78O8ma9HEtg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:07 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"70285dd0c022b1452471bde7d25c472d11b29d14"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AMEAdu1ghjPlwMbj2n7o4J7",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BIJgFZgj+gt",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "IgH96CbRNdQ5JYxI4Od7QaQsMUQTFP9kAqXIq0jdYF9rbZdiODMkLo8QOSgOd/qbZqPm1d/MhGRvGiBPdMzp0w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:07 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846442071840582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846442071840582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    400,
    {
      error: {
        message: "Permissions error",
        type: "OAuthException",
        code: 200,
        error_subcode: 1870047,
        is_transient: false,
        error_user_title: "Audience Size too Low",
        error_user_msg:
          "You cannot remove users from this audience because it will result in a low audience size.",
        fbtrace_id: "AelAR0wssG9FSn5yp0XTRPa",
      },
    },
    [
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AelAR0wssG9FSn5yp0XTRPa",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FW5HKvVTs3d",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "1QB3t5HGue3o4SZdzklHh0utuSP+WHq+n82tBgP0a3S4cUTHxN/INg+BczodUSSOrbTWMbqY2ttUSIRPIZ9fZg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:07 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"70285dd0c022b1452471bde7d25c472d11b29d14"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AkiCO_o0Ptw6TBDZ5Q8safy",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FxTRl/gYT53",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "eEdYPXrz+1I1dRD83O4Nm3v/YavSL3PFND7p4GOrg/3+jKwo9Ob7PEKvpXhi7sbMIdNwyO9ShOGXs+FcLbyt7w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:07 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846442072220582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846442072220582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    400,
    {
      error: {
        message: "Permissions error",
        type: "OAuthException",
        code: 200,
        error_subcode: 1870047,
        is_transient: false,
        error_user_title: "Audience Size too Low",
        error_user_msg:
          "You cannot remove users from this audience because it will result in a low audience size.",
        fbtrace_id: "AyaQtnmrC6ZPgMjo8QmcaC2",
      },
    },
    [
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AyaQtnmrC6ZPgMjo8QmcaC2",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "En8LoTRfSZs",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "wMhUsE2lbO7NAa8Ujfd/+k34heejBtwKWEChlFi66IfL7bIVVSx4/2TKDNEQTwTVvwKalFIABBZT0UaxWcAh4g==",
      "Date",
      "Fri, 18 Dec 2020 01:11:08 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"70285dd0c022b1452471bde7d25c472d11b29d14"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AnVM9ONu_S97UiE73Il4DRe",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AQ812ZPD/Zk",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "Z43Uquma1gLLF4rSItMSIY4ilL7Im4xjIPcOmh73+q9aIpbD00QW6yVe2Q/+ePjv1oQN0uMdM9g/FM9x8eOw2w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:08 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "e9e666e3ad98fc467a60cd86e41d21cac316e4e878ea3e247537e7777d34a556",
          "6177321eac992341d1ad0823a07e76bfc4ee6909db120e377ea303fdc216756c",
          "2689367b205c16ce32ed4200942b8b8b1e262dfc70d9bc9fbc77c49699a4f1df",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":36}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AnrdzhQNcZDHvAueyL7fe2A",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Ede6IJBL9T7",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "moHkKz7BCj7+sGh9kCePy75jX1KsoHcxMsNCGotWQmy6xNlLHc34cr832bY3Ly3uXJHMb1CNc94Qs6/Z4bZVYg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:08 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"70285dd0c022b1452471bde7d25c472d11b29d14"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AjIzUWjX3X1o7JTBAfh65Nt",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DvEhVY0MKQw",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "s+HX7PesMGibI3PVS1Xux2jwALhaNxi/oqn9tMXny7Ttnk2lswWWL7C8JMy2BEs0KOiiUBMc2atJZFO+LSPk2w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:08 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442072220582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "e9e666e3ad98fc467a60cd86e41d21cac316e4e878ea3e247537e7777d34a556",
          "6177321eac992341d1ad0823a07e76bfc4ee6909db120e377ea303fdc216756c",
          "2689367b205c16ce32ed4200942b8b8b1e262dfc70d9bc9fbc77c49699a4f1df",
        ],
      ],
    },
    id: "23846442072220582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442072220582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":36}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AJTEtYVRRcvbs4pWwzqsWdV",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GNL1T2Z3BlX",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "UfnB+Xhs+IhYT7JJfF8aEzkVmwGee0z9h5H3KJ43DVu++29fmDpNfMjG6LyCyHU0AnKS6SJpufDkE2bgnxUOMQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:08 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846442071840582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846442071840582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"050c19152221ce66d0e04f979b11daba3f5a4f57"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AVTkfTSMY0Y67dAbCvpX-Ib",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Hl3B5ciOQzG",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "w82lBaoW0kSh8XmEhH0E/IFn7H5gjYuxWB/nhCmK3rVR2ZISzm/2RYBEsmHgHhXgOaF3aSHJhpcn771tXHB0Bw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:09 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846442072220582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846442072220582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"e9267aad2fde77ec7ae0f75e3b7617faa86f6856"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ACNwSQmlM8a_ks9jGfIAkBj",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "C4irVkkdUTF",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "cGGj8pH6tAdtQ4lbMzk9XuKMHS3VdQmlXX7U3DeoEP8ddcKQor7ES53ineHuAHgbzuS4P1KyeSt/d2dVOFtvTQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:09 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"70285dd0c022b1452471bde7d25c472d11b29d14"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AOhJ1d5quo--lWnCBJdijEZ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "D3fgSyULtEd",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "PjdCySHGmn01dBcI8gYSFNdsDNvCZNe204nDFGkb9GD4sm9/j6hDJfGdkrK5VnrT/qX1aB+UTxiGPx07iRy68Q==",
      "Date",
      "Fri, 18 Dec 2020 01:11:09 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846442072220582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846442072220582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    400,
    {
      error: {
        message: "Permissions error",
        type: "OAuthException",
        code: 200,
        error_subcode: 1870047,
        is_transient: false,
        error_user_title: "Audience Size too Low",
        error_user_msg:
          "You cannot remove users from this audience because it will result in a low audience size.",
        fbtrace_id: "ACv6ubo-qWRFk6RlSl8aHvz",
      },
    },
    [
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ACv6ubo-qWRFk6RlSl8aHvz",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CCkCxyNQ9JD",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "svSvNkQjJuRVNSizNhnLNHgljxm5jfKxx1JVLNdtmTbhzpsEsCL3HoYd5CIgdR95kLINtiR9b2bUbSk/sSJuOg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:09 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"70285dd0c022b1452471bde7d25c472d11b29d14"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AHnyFmyNHSFz6MfK_2VN07h",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Hp2ZbqXMXvo",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "lAKfnnesOdrneBgnzcpz90lsX9V6nsRkzDAao2p0fqRLcumC7y90BjYFugJodniZjFG/pCHD8nL81LB7GuorYQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:09 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
          "467b1b85a0ee941df09ab955dcb561d51bcae760fbec8d0ec154c05528c9cb51",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":47}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AvKTBHkjdZo_RyTS6i5Mlsw",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AMU7xMLUU4J",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "gHb0Tg9KzOA+ThVB3ReTcn2bt8+Jb7FE9tckQPkhbm8wA6xfrXMhA/c1KDuTJ+mbOeAMLTCiC8RvTqXu5W3sWQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:10 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2" },
        { id: "23846442071840582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"baf0abc43111eba0cf9db07b67526310d89ef8b2"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AXFlsYovyFkPh-PFSZVmAIl",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CEN+FCIdvx8",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "9Z3LHBEp9R0M79OJYqERaIMC7alJOct/QW0M6niIOZf9yj/agXdVNepkMSqIDfRchGAd7Rrvgq7yj2qtuXsJMQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:10 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUl9hUnhTdC1NNDhVMURmWE1CREdTckdNN0RKSDdCRzhlNjJuaDAxVjZAGQ3RTS3k0eHpxWVdJOWxlNk41Y2E2b0VlSzRQc09BN05CSnpuZAmp6X09wNGJ3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"70285dd0c022b1452471bde7d25c472d11b29d14"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AUJ3nlsGR6N9u5KbmNAHhA5",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CFcsBJxzKqy",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "zbe180NaXeGvF9traGv5hBhekYX1jmv5SKIPwer+KSrFpgaN+s7kBuuVGP1CZYieAjoARavvY6u3Bu/kgBfR7Q==",
      "Date",
      "Fri, 18 Dec 2020 01:11:10 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/act_542676646349772/customaudiences", {
    name: "(test) Group 3",
    subtype: "CUSTOM",
    description: "Created from Grouparoo",
    customer_file_source: "USER_PROVIDED_ONLY",
    id: "act_542676646349772",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { id: "23846442072650582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AwiOW9cDHKeoS11RXavZlVH",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "CFENWC0LLOQ",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Vary",
    "Accept-Encoding",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "vTrn7Rlgz1oR1F20FfH90j1lgL7phcYawfo+UFClWiVmrSEc0gURJ1Ggj0te9WaMkSQUOvoA90ARmh0CBqVGkw==",
    "Date",
    "Fri, 18 Dec 2020 01:11:10 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442072650582/users", {
    payload: {
      schema: ["EMAIL"],
      data: [
        ["85eef16a5892cd0684b9a9bf3b2fc6b317e19e86e6bcd15fb31a360c1e2fffee"],
        ["8ffb66c5a22da0eacd780451896372892ce8dfe77266228fa241e2bdcfd4eeae"],
        ["556a90530f3f6575e45b42232f84909473427b33e8210fea37a26f7f2858b0a8"],
        ["69187398b9f6f07afaca3a462a12bc82f4daffadd59e944dd00299a85eca3300"],
        ["cfad487ac518a0d31892aeb86783a221610d1e5cbfab3433a026a64027a577f6"],
        ["6861afd0f464bd295ec9399707fe58f7fad300adbae19af4649d2034061011a0"],
        ["60da03c667f35cd66e3c9927a207ddf20ef119f7afff321542a4e88724f8e7f5"],
        ["d3da4b12bd0c195d6759e5866072a37d3d0b2c861fbd57c82b124464ec83ffe5"],
        ["1af140d350423cd55016306e79935c3505539aa0dcbd15e25acffde521583def"],
        ["ffc40b655f7473c661ec6cf6a72f31a2850d5260d0f48cccdf1bc35e356daa94"],
        ["f4694d11f0ba030f502b24941ae35083bcbec77fb392003e0c5ff71f9bc7e57b"],
        ["d2abb80248023bad47c0350c31f0d2c361501be393503724e7c552fb8c1fa872"],
        ["714d67bc088bda359c9cf5123d340fa13f51e692d87837b682f2694ebb6b0a9b"],
        ["c361ef80200b1bd7f7774a3cb2ac50db8b3560d31247cb362c405df14a3f4091"],
        ["e5271b165b30b6785ddffed0f5a3e96b5cc6ce93775844c79ead48e7093500a5"],
        ["379012732b9ba651cf012a8cb2b5c109b35e46b80cdf12fb184a49051d2cd1cb"],
        ["6f86cf634de69f7c58951f538f39f02427a22b3ded79f079d97e504ea3ce439f"],
        ["9bc1b186b242fa7ee49398249922517b410dd2d3ac4bdaa7b9b173589c36f79c"],
        ["d7650971bfa874d5b935fb417ab6ca8e8ede8c663bc53735403b8fc6d4ff77f5"],
        ["fd5869d998b926ce67a3f637a3eda6301dd7b3c12c2192bae973754d90a949a0"],
        ["6f5c2a13d6f07c7724173525ae65b6f0baf3df490ce8dd5903c9a3c6e4b1959d"],
        ["94a16107602b65bf921f5a26e9cd9eeb25a217f17f5ff784da69d7ed45330931"],
        ["a84bc68e2d5b369d19744908a617f452c47c8440e96a90ba595b2e953e2254b6"],
        ["189498b49c7f93c90646b0b7844fc658e047db81c0d01c79ee634f864fec68ae"],
        ["1ff5d15506052f42bfab22cba222397f3bab9064edb06f6608c01042f889ebe0"],
        ["e471f213b4ad7476d290940d3d1e9d1a15ce2c030e97ce5a88b39fd45208d957"],
        ["3e75fe231c471fcf22e3c5f3aa07995494113149e75e35a6c69e29f248eff558"],
        ["0e408df0a65ef38c31c6d93e69c8efb56b464393ec3ec844254cabff647faa8d"],
        ["419deb35c65f458ef3e6be4f5e0dcb87fd08b66024d627fbe3bb8b03aa580e87"],
        ["6145f596eb3d3c229fe51f262be7a899652fec51c1fe72883f7a87f4f68d6122"],
        ["b4f2737bd49b24a5da39337345b8a44a6aebfbff1679aa2aa311353fcb4e4dac"],
        ["7700d376d01bd67c87c58899e68405e47900e10a2de2a7ac080e5cf2175e06e8"],
        ["4a8f88f7c950e022ac2feccbcb53553041e04df3788796d66de67f099225f266"],
        ["39dd37a1ae24d88745e38b55fd96c156d38539b2e76c4b518135a05dfe77f1cc"],
        ["6d3be7080e3f3ef18db68df0308e670c58f1b9680ffad2dfd0db26b78c160f6a"],
        ["2f5b0c7293a33b64694e742947f201b81499b1d5ab055834d0e01c01031c5190"],
        ["baa35ad4514b934f2d98660181a044d13682487bbaaee894d7745d89e5cfdb21"],
        ["8987dbe1cf504351fc4ff3e3ef5033899712ba9606cf59f06afa0b98cf30e213"],
        ["3bb8523e5061706fbc6f5c3aea2ed8947ec3b6b1d587cf2676c9a774a07e9383"],
        ["06f8e1a3f96733bdbb2cc1edbd80207dc1cf3497cfacfe3d3204209357acbe3a"],
        ["c58c170b5f14fbed1e0826b7f118e56896871d04671c011eb3c643e3c3a295d7"],
        ["04cffbed9430025f6af1f080f07d29b865dffa2d954869c8ca12f4e906b91f50"],
        ["99452c435a44393c1467ac55b587af5bf002e2edccf50007c07dea7f72192872"],
        ["fa531213b9db3622144dfef5807c51b5e2403e2f4b2070f1c623b885d00bd904"],
        ["20bb715671cc02f70aceb02d4ef8c290f1e89efcc402c52c886a7b04cd3bdaae"],
        ["d81b85c34779cffe4db8b6bb6f7848104546f63f79da89e77875603eb238276c"],
        ["ab8dc985171e1b9df94b202e5ebcf7722f54847e8cb5127f9f3069feebbf8657"],
        ["b3e67dc171065f564168a361cade420c4d290163fe9388f3994e4ed953eb22fc"],
        ["3eebcd6fbb427d34f6277834c28eccc620b45073929f8dfe495038dfa4649431"],
        ["4b568eedce3d36421430cc4420ad4641bbd7c78fca1e8b09b1b75f977327779b"],
        ["0c2fde732eb716a57cf102c0ac87a1c2bc61aa18cefdb3099098a1bd2baf40d3"],
        ["396e79bf6c2dcb8ca270db54013558352f611b2db9cd34a5ac4f05e30a9e7ecc"],
        ["6e79008c39ead4fe5e038bbb21aca09e71aa545cd062cdf751e7e4c0eb9d658a"],
        ["945cc387f8daee49e9b5e6f25e0b8db082afa9b629df0b687f2e583dbd416910"],
        ["5475bbfc4ec6c78b94d9e5c14d4c6f7227dcd640c710e8deaeb7a7b56f140971"],
        ["8686dd0b30f6b4b6e9d0898f67ab9b1e390db497ec44c7c4f233522150925a58"],
        ["b852e6e506799dca34758a42488a5ecbd99526e1457e909b6980cba9ef3fa970"],
        ["b396e0c20034637f1adf9812b091ba0fe0fd7972b617269624374d39bcb0600e"],
        ["fdbaef2d9aca589c9673e4ca053d3cf0ce7f4424c1b1b3254ff0711e6de43104"],
        ["4518d4d74922ad11fbbe457f224930fd596e7f964916ff690448fedaf5a62d02"],
        ["42811ba2dfaa195937eb40831326c889762dbfdc6a602187f06d8d74b22e7b37"],
        ["4de019a3f1d365d39ab7431380bdd686c75ec7b57dc24074b6c644eb023ce82b"],
        ["2b37a4d2daa876ffa823460c3e09ec5c40dffa6ef54df31116499e897202bf4f"],
        ["ca0a98a1611940c2d4618b2f769337ef19aee9c39efdca34b6011f7916bbcd90"],
        ["cce83d9a97153a25b0dc38ebc9f7b62e3a89bf41a6c44e1898bd912826dd0504"],
        ["c0689b01610baad60ca216aad37286e9fd830c35aed279b93b6e3e8e3ff4efa7"],
        ["f5c378df6de8ae910d692192fc64f4b3ce03ec1b00b0e1be1601231d994099ed"],
        ["66f8c830f13544fd0f895e18030329d5bc320d22d0225e620b73bc7d622a4b38"],
        ["bbc9880463782eb7b428c3364ddab29ddba51da3d40009aeeece271af3a3e5ea"],
        ["3eded87fb0cbc0cf04255a587dd34011662cc9675209f44e29326a3b4f043601"],
        ["76e2458039761b78ae0c88003f6770c47e699e43bbe33cf737acb8b709ec5fdc"],
        ["2521b069be9b32090c7a1318d978e5a07e12ea2f3c4a8cf2d70356dfa627d841"],
        ["72fa1236ec1db8d3755f50c4b4538e6dbaff735d50cef7ca2e2a0e4e1ec9c6b4"],
        ["5711731ddeac99fa0b9a3ebc8702bbdc8c0993e9d1af33e996e4302140b3ac55"],
        ["b6d7cdd7cd40a13343c650b40a92066f9c48d55366b51f9e87488aad977e3054"],
        ["c2794ba16b5dfcbce3b1bc6795cb0ac22af34305602a439377c79e4bc5b05acd"],
        ["1e2ab0c40104b70ac25824798d96b1ea1adaa464c64ad52228c00ffd05c0b881"],
        ["8d4998348d4f99c2ee9f42957261299c82223ed69eb45f8698f224944adb5fb4"],
        ["4f2c1d023c42ab668f5b2a172ece2655c5a3312812c4b8c9ebfb8b2362cb462e"],
        ["ab3b734290c43a821a74b9a134030ebcb1f7413e733c2344704c3d91bbcfbfbc"],
        ["3e786852531b697006d091a74a6444bbe5dbdf4100b745d309000e24275f408f"],
        ["c65a8992cb7448326d51807c79706ff344be85816beef15de9fc7e43a57c1d68"],
        ["ba31ff12e8d4a5e9bb84761caad2045a1c3c2a06962cbb5f235829b28e08d296"],
        ["f14914892a8a36172ba92b09a4e26a77b07613f5dba60fdb0ed589e263e80965"],
        ["c507103c3a821204b6dc06bcc2f5b98236e127c6eff6c478275aac6f8c2db7ac"],
        ["11611423172b0821da846874dc826a2277d277d6dd0bc1a31345e7214082ba72"],
        ["ae1b6cf5cdf8bbf45044bd5e5dcf482807d22063103212d573b59aa11c955f8f"],
        ["2ee8ce0c456d5dad4b81c45c14556cd1e5b5a547e1e8468b12536a51709918c4"],
        ["6f8474007764c619c4a65de3bfc894c88f9348b0b5aeb8061862dd0dd7b77f25"],
        ["ee90ee9cb1da1bbaddb71f5703f310182c3738a2f55d5aabb6746fc0875f51b2"],
        ["1630317397f18556787e02f42c1c6b8cf080e6109c6ee08f9e9fa7a9dd40a92d"],
        ["9efa9d69c27144da364b45b1b86c8d8402c8c68005b2a5c8c374cd9b14b6c3eb"],
        ["ba8bbb71a7ca2853ec7e1c7f526056613aea095a569f75ea093c55af9dd6fcc8"],
        ["d67536a42dc24edb76cfce745983e3f533ec5567f9b39c14f8ed1d2a1a236350"],
        ["b37001da7a2ebf2a8896cc6db32f4522f0ac0aa881d15897831da0b3ebe52465"],
        ["2992bc79bd2aec2f139912dfeb35cd3f0c3b0279fb307eca0bf5a573ff1cd94f"],
        ["24871f13a204f3f4fd851cdfc1472b40f3e0c3697f68070e646198eed282b6cc"],
        ["8b97c0dc076c9fb90f4ec9c934ce12e60b746611388d2242d8f140e4d6e7105d"],
        ["bb81dfa3e417b68f5cd39d0eff83dff793093727dc8dd3a4bbb64387c85157e5"],
        ["87458096a1b4516fa5b9916eeabc1535b07c936b84c1d5798aade87b7721730d"],
        ["8e1d4ca59ce9230fa43adc1e4ab4f419f6d03c51cf70e7b0df27f6f6bbd9b4fb"],
        ["aabcebc3a67e5694f01be77c9e18dad2c12d8c1e3aecd5ebf85b456916f463c0"],
        ["d5a8f9c73d32439f1847f8b563eccaf40a72607bd26568d9334301f1f4ae7322"],
        ["9412d141d481b467896425195b7d51f89bc235707c8dc1b88316c153f82a51a7"],
        ["a4ff2ce971c5bfc61804df92f68cbb1d38af9813a289c77910b3a0492006b4b3"],
        ["0befdd2b7f6fd89fbb012404b7db811acaf63ff44bdfc3f9bd5cc8215dbd24c3"],
        ["b57b7100981b090cb3dae1121b7f923c21fa6d84e57e96ae671d2bdb372763a0"],
        ["5ac64be1391b31cbcd8035d1f080d96a73a3bfe50fa204c57928e973f0c44089"],
        ["7288f98b8cdfbe16be3628730f0c2af84d00cea83a10e0eececc5e5110fe2036"],
        ["1d491abed1533f5755f8797e4069aa15029699485f13a698a6bbbf996ce291e8"],
        ["d2584daf4e143ae268e0d669ee962dc5108da84def7be54415decd529f72df9b"],
        ["c5019b553ae018fc4cf99138d99be0731ebeb074c986fab9570427aeaa56fcea"],
        ["a32bac753868a811a3d64cdc544bdca666c228ece1c5b0d435b27c6a94bcba68"],
        ["3e70fcd7304d5438485d48d27fcabbda4a4fd99e2d5fb9a13e8a2db73fcc64b2"],
        ["832e6939b7b4cd8370b10d8d5ace4315c776af905aeece1f39ff717aa71a0d60"],
        ["7fd13947fe77e449e9c004da639444db6612c2fed4ac94639260f118f03697f5"],
        ["8df2ecf8f09ffe1b822c78c0b82d5191dc0c13bb8f0b66f1e60cbfbdfd00f45d"],
        ["f1b769bd9417dac0c9023485ac7b7dc23716192f1d1f0bb2fd08f361cb41a314"],
        ["f0c2b760b2a8630f6407c9b40cc84c7040370669e1f6a4b18ed017824ec7e377"],
        ["e4a2e7dbd21a4ce22f1acc317d1edc82659036a8d69aeb3ba9cc56585612cff1"],
        ["fc1ae6ef5fa089caef86801bb67f1e70bcdabf7c1b14732002c764bc448adc66"],
        ["1b811c2f0a7bc6b8226619b1f9ba593d81b4f0fba94bcfc181335d3eb8c17cc1"],
        ["a7cbdd4e6ef7cbc869138e9e02402dbe12444c46e18a026b196d0f046a854760"],
        ["9b7651f0f4fc86e1a1af5021e738386e1dab9d7a2691298c38cb7d6240ddbad3"],
        ["06051dccb82368b4a252366922ffe5f3af2cab83a4932824e180aca0a166471f"],
        ["afc7e2ed7398280592fcf0949f9cf36b802ec70f57e7fd7df9a3440a7bb27fcf"],
        ["de625b1487ddcec46c04d189c4e6d53032372efa2dd70bdc370049e2f5258387"],
        ["cf56e1232a78bf5e084fb90d3e71272b52fb79d2410ddaf3383ba920584ef394"],
        ["18822143a8b8cca883e6cb5d9532dfa83807b5d443038f0c044de75508459b29"],
        ["a5e75f73ba8044173e8422d621fb1baf4ebf759dc3581316861883e82450f187"],
        ["89453cb83e014b3b8b0a4e2d2be5439094a4a306d610ef6fdb748280ceef3ab2"],
        ["796b065e41f3025ad28bc3d7e0dd825e4b486502106ca844bf412f298b8192c8"],
        ["c6a3c33fb72491d4d78cf9400374f78e1f503da1ed4c920903136b8b5945f4d5"],
        ["bfc3d18f674a22a9e58d0e2978361e516518406a9d7d2bc3f66d483b2c1ecf7b"],
        ["f7a32615c350cc4ec0033a9677ef19fe2ef9636876c0ccf93d49b153ab28ca2e"],
        ["c0efbe33c4b7f365e91b38641fc9aa09793e4c823c6567aa580fb34621c8220a"],
        ["f4abcb19f05dc009d6d1149f5ce4e92e4ea3bde3c0cb7804f0ac94bc5d4efe01"],
        ["8bda11e85d7d5f90ad0cec7b4dcc94c8f05317d66ed5ef4653a6a9dd484bd9db"],
        ["e05bcafb5f18b5d860f3aff0f59701b858d780c05f47a30b371bc5eb2aaad4f2"],
        ["c4601e4d3aa84775900f7f63525c91293546a75422c2e2d6e03fab3434fee0c8"],
        ["bc462c15a218dab542e2c359fb0c6f73e833c754432e1adcc7a657b107165463"],
        ["88aaa5576422597137e7b2c61e1ec6b7e63c60e4cee523a17b8670d79e51ff58"],
        ["f9aaec4b6f880db541d0e671603dfc5c0b6a202dee415c68914771b774eae748"],
        ["0cd300fa5c38c0c95af1b97af365d53c84cea7dfb60e6c2b90379ec310edbd49"],
        ["61a148650807106b559c7f48217321ba913b78a633ac6a44a888a89ead8d4d41"],
        ["a7cc1dba539312be3c7dbafb77f6eca0e8be9ba14ce0e5cf88ce1a3c18125a62"],
        ["b32d1fa1128635c284b50241bac48e819501f9b8c8e4480afda02ad7bec11280"],
        ["3b4e55758dfbdff0f796e03786ceec95f11b2921fa9d1423675121aeafaaf8bf"],
        ["aed985c578382e1e11475669f2ae4b971668f88626798ddf304bd8d14989450c"],
        ["571632e278d1d4eeb0c4210551ac3fcf3e395dd6d5e674283e64e8aca61e246a"],
        ["2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7"],
      ],
    },
    id: "23846442072650582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442072650582",
      session_id: "3244703208940661121",
      num_received: 151,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":63}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AFNKZBDVj_tGsTWU2t7papi",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FnG1u6xXB7n",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "GLbUkbLJK7Nmlf044WMsmLHE/2t5x8QOy9RpLO0GTH4nwDkZtJdECDCL8TzRQeGpOlhpIlwtlSoc9qf/IkqK2Q==",
      "Date",
      "Fri, 18 Dec 2020 01:11:12 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "140",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3" },
        { id: "23846442072220582", name: "(test) Group 2" },
        { id: "23846442071840582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"152360b76678f9ad189a0d2fc8debac847b449a2"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AGflRHrDZM50MdZ9EUJxExB",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EOlr4sTfAEo",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "Z6kiVM3c/iB5nvNmz+1snaz53i/dH3MQv5nHmMzPTT8+kMy5j/AwwbJuFmxNWkkBjP3J5NebptwNG/KnvetBuA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:12 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846442072650582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846442072650582",
      name: "(test) Group 3",
      subtype: "CUSTOM",
      approximate_count: 1000,
    },
    [
      "ETag",
      '"73981e256eb8b77afdc40d5dabae879783c97cb2"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AcIEh4ECaoNAoDwlkIkAs_7",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "D/K16U3Q2KI",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "se2FXTti/fBZQE1ZfZVfkeocEQBPSR6Fhoj2HqKv8tjCCRsJF7495Boy8PPwuvAVBdXsxlAIyOHWXrSR778+9w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:12 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "94",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AIx0D5sk2jNZyBln73HwAvM",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HBPL3TuibXl",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "/tMnX9OWV53GRD10+6q814s6Z2TmksPvSxM7WwIU5NKe0UOh6KFRC//d3jBBh5Jq0AG1sdnXk/Ly0rY84jVZpQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:12 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846442071840582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846442071840582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    400,
    {
      error: {
        message: "Permissions error",
        type: "OAuthException",
        code: 200,
        error_subcode: 1870047,
        is_transient: false,
        error_user_title: "Audience Size too Low",
        error_user_msg:
          "You cannot remove users from this audience because it will result in a low audience size.",
        fbtrace_id: "AkEq_BicL8PC2jIGqM03JwF",
      },
    },
    [
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AkEq_BicL8PC2jIGqM03JwF",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HAPl78JxHru",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "Hu+dsmaUF498gjR0DI22CGxlS6riCRwqkgVkbUKTxM1a/5vwrBj2d5V2zoVtpx50wB8QgLPXnuq/Vl1cSPYZmw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:13 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ADTgJ9D2IFQIUGngOYblWvn",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Hc9ob6LhG71",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "k/2HRsT5ULBmGGCbg25p61YAbU+QmSub2Gq5WGpa3aCZ+yM7ikuuHoMvBWCEkaKbpc3lJHVdXXTyb/69yof6gg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:13 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "dbbba937da4f58e9c60f872a2d0c921ca0906ae402eb0eeaab41adc6c70d6cba",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
          "467b1b85a0ee941df09ab955dcb561d51bcae760fbec8d0ec154c05528c9cb51",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":62.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AmXJpnUWESaQVfJ43DPtQkf",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GhwerkULGAt",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "heFkbdJW5j1oIRzKyyWzL3CzG/ovmcfD+aZ25GieiOXhiXLGTX8aLh8xlIxrmaWvRHL3N/wnCW3wOZYXyM8ZwA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:13 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A4IRWbEBzWRPa2s5LET0eOk",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Gb99pqVXy3d",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "GF/ThoqauHiYyXacphklsHKIQNTrYgGjm7EmZMKmAcVc043iaQdyriQjICThdaC5OtaJkAKEv+BJBLLPXaZL0Q==",
      "Date",
      "Fri, 18 Dec 2020 01:11:13 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AQ1BoEgyb4GStESNDCviOKn",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DKnCElk2M4w",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "exfR0espUXFF8tvYcoAduj0vy0etvirtD9vJJ5XljjJV5fRC0DlMISr6YXQXPCsLXJsmu7cRbREZlO7QEwbNrw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:13 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
          "467b1b85a0ee941df09ab955dcb561d51bcae760fbec8d0ec154c05528c9cb51",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":67.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AOGX6rU_STRKAdHQGJsh8C4",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EU3Pv0zzKQ7",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "q8Nb6tPNGza12m79n9JuOi8tt868rTzcM9A6ZTXLVwsjJwT85ITeX2+sd1ggRBYLQjHo6LOtdGCKDA2IJofdvg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:14 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AcOK3YYs-0rpeOT6X2dp8ms",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Ayzc2w+pXfO",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "PWhNgW7kUhDIWjA7M+KdqJKsmvsJXnGd81iVH4vkVf4dRqQXnteTyYxIH3qAkMm3YaIwEFSilVQQyIg/JO0X6w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:14 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A7miDrPoNCa7RQq6dn6QUyF",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Huq8gqiDvyI",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "qkX6frTOm/oPdokFFVyvCK5dm5maqqMXrUgK73lekK2h89E2tKSmRG4aQX0lmOoABNpb16sQwOQZQD/WWWf5OQ==",
      "Date",
      "Fri, 18 Dec 2020 01:11:14 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "EXTERN_ID", "FN", "LN", "ZIP"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "67",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
          "",
          "386bbb8f2cdb1e6f234254ca3752d18ceea27e9b0a7a1ae66ac5ef2cabe74e05",
        ],
        [
          "e190e9b20a82820ff09d873ae4dfe092b21bd625c259d54ab8773ff022eb08e0",
          "",
          "e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605",
          "",
          "",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4446585645685663675",
      num_received: 2,
      num_invalid_entries: 1,
      invalid_entry_samples: {
        '["e190e9b20a82820ff09d873ae4dfe092b21bd625c259d54ab8773ff022eb08e0","","e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","",""]':
          "empty external ID",
      },
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":67.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AJd4JmgWonolG4He5zvwHKa",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AF0Gi7XZdrw",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "deRfS8CN6rn+iFQYEmiYeM7Wtdy/qZkgNj01DgcmeDRtwQqWYkihnHOkSZFFoEAqF31a4eP06KhcPaIZWGFcyg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:14 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A5Iwk6PBDXAWYotoWMEMKOS",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EyPBD+pt2cp",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "xdAjjBc9XUem4IEEmY6NmRgpknYrInjCFCyJ40tjgN7B6D62e+d53cZOE7rk+ScS/nxBBxYiYrdA4t2eVew/Rw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:15 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "e9e666e3ad98fc467a60cd86e41d21cac316e4e878ea3e247537e7777d34a556",
          "6177321eac992341d1ad0823a07e76bfc4ee6909db120e377ea303fdc216756c",
          "2689367b205c16ce32ed4200942b8b8b1e262dfc70d9bc9fbc77c49699a4f1df",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":73.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AlLyug1aG_h-EaIyVFgTf2V",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "D9a1Hwk2bAF",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "28y6hMNXwq0684lJSDVMi5SVFeiV9eUHB7O5zSu7IO62ukPXYrWg0ag9JwaCsKGeMQ2eMoDnQxnioSBIj+TAhA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:15 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ASCCSgbwojHmI6Nfi8aRY8l",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BkIKCJ9ykNZ",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "FDXqGzA3U7y0uv2t5D1XJOjjGfKEdUJrMGgwvJmSZaZTVD3Jd9XSfB4102+BpGdlt50F0jLcPXl7Nd9hvizwqw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:15 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442072220582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "e9e666e3ad98fc467a60cd86e41d21cac316e4e878ea3e247537e7777d34a556",
          "6177321eac992341d1ad0823a07e76bfc4ee6909db120e377ea303fdc216756c",
          "2689367b205c16ce32ed4200942b8b8b1e262dfc70d9bc9fbc77c49699a4f1df",
        ],
      ],
    },
    id: "23846442072220582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442072220582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":73.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ALiKuIC05Fc0LqqLWNuTOVA",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "F0WZgOeLmAb",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "I4m0eHpUU27jqYTgDt84K+1AX24NjthQ8szGBAm7yT5O7gXwphRB8BAMTSDJ/lRDZb04ODtawY3K6q52HsOb6g==",
      "Date",
      "Fri, 18 Dec 2020 01:11:15 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AuRiDd5nTr_8ZUvGgX0ANEW",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Gl9Tcz15BAW",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "QI2ROuGgcbn7Q+exCPBbIWnKTzLD1LfZVxgkzzwtC9yfMTOPa1ajNUtqtNN7U1JcsR6BJG3NtghDlnTu48Xf9w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:15 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "dbbba937da4f58e9c60f872a2d0c921ca0906ae402eb0eeaab41adc6c70d6cba",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
          "467b1b85a0ee941df09ab955dcb561d51bcae760fbec8d0ec154c05528c9cb51",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":78.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AQlDnSdDMN4B_thNc28G7I5",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Fs/5YqNcHja",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "2lHz4Fg8WZsV0fKIQoaEIXx4/xcYmkr2fpqIFGg3X+PzlMeldrxh/9zZwAjAcMu5599veNoN8VE+JkNppTXXVg==",
      "Date",
      "Fri, 18 Dec 2020 01:11:16 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846442072220582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846442071840582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23846439958980582", name: "High Value", subtype: "CUSTOM" },
        {
          id: "23846439958910582",
          name: "Spanish Speakers",
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"da400ca02b8cc130da8706bdb7ff53b2b90e70fc"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AHTHvfHLRblYP2raTOO0bWc",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Exee7iAKc2u",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "ToDDPICyNc1YDyitPgcYapoUDqrzJBuWnTMowAYE0BugmXiLtPzq6aDINhaCW8WxsVr2wEuEUyBRsvkXgvZ83w==",
      "Date",
      "Fri, 18 Dec 2020 01:11:16 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846442071840582/users", {
    payload: {
      schema: ["EMAIL", "FN", "LN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
          "467b1b85a0ee941df09ab955dcb561d51bcae760fbec8d0ec154c05528c9cb51",
        ],
      ],
    },
    id: "23846442071840582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846442071840582",
      session_id: "4564521828325725224",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":78.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AF99waqc-O4kqLyPXD-2tG3",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FFo9oZh5X35",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "qh278yg80ZPkWo1bK5KTT0caG+2RRPVoxUz7Moe64c4cnVqYaKELkNwGMDLZf2w9FX8c5JccNNSaMsd/pv2wpA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:16 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3" },
        { id: "23846442072220582", name: "(test) Group 2" },
        { id: "23846442071840582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"152360b76678f9ad189a0d2fc8debac847b449a2"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AV2RsnWGpvLOzIzM-timCt1",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "C7iTn+DyrZ7",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":4,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "Q2bunibEjDVxiu8P5FsIGCCWnvj/yqeIN5f9WfHmrrsz01NMhjsIc00fR1dYPtJQKi0dhgweQpWm/gGcaC7bBw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:16 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846442071840582", {})
  .query({
    id: "23846442071840582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "Aqyuyfyuw2x16J5XV28X2pq",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "CGah1AqKc5H",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":4,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "JsSx2eE8zkr819gOl3DYQ9UTzBt/iTkX0+sKM7oyHFccd6XwPhef0SKc52VYdOEWcGSaeVzcqo0Yy+aPCLgVFQ==",
    "Date",
    "Fri, 18 Dec 2020 01:11:17 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3" },
        { id: "23846442072220582", name: "(test) Group 2" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"2d00d2336d2a54b06b92387bd85781699c455259"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Aw5EgnNmJhIK8skfenV59dt",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Fd+wy4Qa9j2",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":4,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "7b9sBCMYJOz9aS0tNZmVeBbp/39GfDtdJCG+CARHKTl4cemenX3ncZTBhrB9IX2xhp2jh+wkCkbZ7wTmTyjFTw==",
      "Date",
      "Fri, 18 Dec 2020 01:11:17 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846442072220582", {})
  .query({
    id: "23846442072220582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AROj7BzafD764a3xAoMkrkg",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "AM1I7xQJnHR",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":4,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "3KnVhd7QLEpw57WGghtayefFid14vkRNcKxWMkmYosFMSWdCGSshHOCIZAbbUIeDxNm/WJysZan/0yZtzmCqOw==",
    "Date",
    "Fri, 18 Dec 2020 01:11:18 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23846442072650582", name: "(test) Group 3" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmlCd1cwZAmJhRkxOUTFZAWmFwYllTUmoxZAzFlQ0I3Q254Vy1fdmtpVnhvUHAxbkhIeVM4aWpaNURSazVhT3l2elRVM2NVYTBFTzUxdGZAtNGpuYkhQZAHl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"bcf0baeb795e849655ea645ed77a28398e7f5424"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AHm-XljpdZvEmIztaQWdT_f",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HW+FYK09a6+",
      "x-fb-rev",
      "1003122107",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":4,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "i74u8AMbfGV3/UYn9CThNRdsvsvC1vVX3ewwNDaIiNlHJkaQigt8uOEY1wwo49I27QAxUG4IgtfQeDILEZmPrA==",
      "Date",
      "Fri, 18 Dec 2020 01:11:19 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846442072650582", {})
  .query({
    id: "23846442072650582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AtoqsOloZno8gCtUbtfUVSg",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "BDZkHmYnuwx",
    "x-fb-rev",
    "1003122107",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":4,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "5ftFzGl7U76FdLTmUX8EQUjnCOKOUb2F47mN9mAyrBsSbUajm81rMTAsR03z2SRjEJ2ZkqqdOJfdyNUK29JsaQ==",
    "Date",
    "Fri, 18 Dec 2020 01:11:20 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
