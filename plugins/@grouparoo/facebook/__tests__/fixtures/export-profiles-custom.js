const nock = require("nock");

nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname%2Cdata_source%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        {
          id: "23846422585900582",
          name: "(test) High Value",
          data_source: {
            type: "FILE_IMPORTED",
            sub_type: "MULTI_HASHES",
            creation_params: "[]",
          },
          subtype: "CUSTOM",
        },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUllBa2dXWE1nYThqMURhSEFPd1pkNEpRNnRINXZABVHlPRDlmQkhUelVpazdhWFU4TjNiNVF6WmV5eGk0NnFTcGtpZATRiRUZA1QzRPQWpFVnpDUkp1clF3",
          after:
            "QVFIUllBa2dXWE1nYThqMURhSEFPd1pkNEpRNnRINXZABVHlPRDlmQkhUelVpazdhWFU4TjNiNVF6WmV5eGk0NnFTcGtpZATRiRUZA1QzRPQWpFVnpDUkp1clF3",
        },
      },
    },
    [
      "ETag",
      '"383d0d3e73d5203156515e3146e1b1277f26df86"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ACe4wmn9nD_OduVJd8iTVvk",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "B9kxs2OpxRs",
      "x-fb-rev",
      "1003103693",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "JEzUIGWGuV6NVv/S6zhkrZ6itxDZG4K1q2nwOfeYCsQ+P31o2c+kTNZPHxqeAOIqdVDDQV5HikIvK9pwFQSlZg==",
      "Date",
      "Wed, 16 Dec 2020 03:26:43 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846422585900582", {})
  .query({
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
    "A0Mx96YgBdZyb-SBWYRSc5I",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GDwstSJ0zlY",
    "x-fb-rev",
    "1003103693",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "McikcLskTycuXveo+ENztZsqD+CD9kt6T5WzJCP5AVw8UJbT+w8HQBBdNSFdNroi41/y083nJNDA+WiSm/FmfQ==",
    "Date",
    "Wed, 16 Dec 2020 03:26:44 GMT",
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
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { data: [] }, [
    "ETag",
    '"1050253aec7b29caff644806927dabfa81406eee"',
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AAoBA7CREafKquQKzgxG9li",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "DO5DPPzRPVq",
    "x-fb-rev",
    "1003103693",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "Jv8qu02djB3nkYsSgKNuBNCaS5LABuCB8FrxT88L+GH8H7oAri7OyghKJ7yIHicgt5yrI7ROIkxT6Zh1e4QUow==",
    "Date",
    "Wed, 16 Dec 2020 03:26:45 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/act_542676646349772/customaudiences", {
    name: "(test) High Value",
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
  .reply(200, { id: "23846422587550582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "A37AytxUN4Y1mInZTAeBhNS",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "HfQYTCqIdha",
    "x-fb-rev",
    "1003103693",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Vary",
    "Accept-Encoding",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "RlNl1v3mPYvl3aC3JFA99Jaij0dx4a3WaWtaVkl3ByfB0qqZcjQC7AIXqDGckpSiOZsgluDtFFTJs2ah5S6o3A==",
    "Date",
    "Wed, 16 Dec 2020 03:26:46 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846422587550582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23846422587550582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846422587550582",
      session_id: "4041250674012562064",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":7}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Ajc7uuAyrwwb7o8j91UulKs",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BHkXTFoxu47",
      "x-fb-rev",
      "1003103693",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "DvE6ziqWuRA1ipzWu5eBaBRN+cVUpxvGQo5s7eifC6mcZt1qYAUA53Tc7FxtbE4n2Py4pPSUnuifc4QtxpRVng==",
      "Date",
      "Wed, 16 Dec 2020 03:26:46 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
