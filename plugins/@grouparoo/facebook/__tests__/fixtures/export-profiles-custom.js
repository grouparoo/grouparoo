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
        { id: "23846439449000582", name: "(test) Group 2" },
        { id: "23846439448970582", name: "(test) Group 3" },
        { id: "23846439448870582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmxoVlJsRnBBUTl4ZA3hMUXBrcDAyQ25fWk9jY2R6bmV3TFFRdW9CQkxXUjlla1FkRnE2STJKa1l4eUpGWlJzUFk0c2ZA6LXdnT3hnSk5YRUtvYkhIVThB",
          after:
            "QVFIUlBMXzRvQkdRbmRxZA0FJSXp2bzFhelNYMEhxa2hWWVdsUkhRVFN2REJHNzlCN1FvUkZAMaEQ4VDFKVG4zeDlIUnBlNVRoNmZAMWjd1OFlIMjVUSkFHYTN3",
        },
      },
    },
    [
      "ETag",
      '"543a70bba21c07923f8a8d8139a50fb0ef9c9ccd"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A2jaEN1B56NR4KAEYaqf1Q6",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DyBTqOwLME9",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "4dgdckv58NvbxoFxtIVxdGOcaoeLR9+ELn0Z+0c0bUsTXiQ7nbvxn0as+/8BxiyxNkh84rUuZM5Z34ULP0YCpA==",
      "Date",
      "Thu, 17 Dec 2020 19:13:40 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846439448870582", {})
  .query({
    id: "23846439448870582",
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
    "AH4hWfL71rz25OtAoZOTTkJ",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "HX1V6LHS/xR",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "NmRWKkcQhPudWVjP13PByUfMstA07U9Bn6kNp54AbockaAQmlMpWJP4+8oCFVCsD/Ee/889sYK25yO7hHUj1tw==",
    "Date",
    "Thu, 17 Dec 2020 19:13:42 GMT",
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
        { id: "23846439449000582", name: "(test) Group 2" },
        { id: "23846439448970582", name: "(test) Group 3" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmxoVlJsRnBBUTl4ZA3hMUXBrcDAyQ25fWk9jY2R6bmV3TFFRdW9CQkxXUjlla1FkRnE2STJKa1l4eUpGWlJzUFk0c2ZA6LXdnT3hnSk5YRUtvYkhIVThB",
          after:
            "QVFIUlR6bDliOGtCdFVtZAlVBMGQ0cEFNZA1pSeElRVjFuR0hjU0JjenBmN0o2cHNGTEZAGMVdZATXl2QS1YallldlBTNWYxanBvNTI3SkIycWJrTXdyTnNfZAzlR",
        },
      },
    },
    [
      "ETag",
      '"30844903feb73f8c8b45d62f06248351c617e940"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Aklvmq7ftAHQID-B_F2Mrm4",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "C6QGmmYJw5q",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "pcdLgRjZbdoDrWLrcrAcSP1bKnad211QQmhoNmV5QKJ8EUQa/3uDSZSB6uh0yFkJO8UnLo6hxzP8piPzmIqBKA==",
      "Date",
      "Thu, 17 Dec 2020 19:13:42 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846439449000582", {})
  .query({
    id: "23846439449000582",
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
    "At1SlBWbQL69btWedkiidnE",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "B6F/301D0rd",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "Mc1nbXE/nTBEtSroNIqtHq0hh56bZ0lmHmL7BIP2sNNSVFKwQr6sekTVW/zRmSA1ERSWjIhTgRV00I9Blmh6pA==",
    "Date",
    "Thu, 17 Dec 2020 19:13:44 GMT",
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
      data: [{ id: "23846439448970582", name: "(test) Group 3" }],
      paging: {
        cursors: {
          before:
            "QVFIUlR6bDliOGtCdFVtZAlVBMGQ0cEFNZA1pSeElRVjFuR0hjU0JjenBmN0o2cHNGTEZAGMVdZATXl2QS1YallldlBTNWYxanBvNTI3SkIycWJrTXdyTnNfZAzlR",
          after:
            "QVFIUlR6bDliOGtCdFVtZAlVBMGQ0cEFNZA1pSeElRVjFuR0hjU0JjenBmN0o2cHNGTEZAGMVdZATXl2QS1YallldlBTNWYxanBvNTI3SkIycWJrTXdyTnNfZAzlR",
        },
      },
    },
    [
      "ETag",
      '"7c5fa99e3959d5e4e702f76df2d4f600b5192a4f"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A05ki3lqtqMsOu412dawx26",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FBtj+XpgH+E",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "PaGkYvtcqPDMh+JYlo4/flWzEdzCIp4+nInUVmits+tKA9zCquxZhbQyBc1jPX82MjVqdDrmlCxbsXoFRTG7Ag==",
      "Date",
      "Thu, 17 Dec 2020 19:13:44 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846439448970582", {})
  .query({
    id: "23846439448970582",
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
    "Ao85jkjGnWWlvRPJPHTmEh-",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "AvSBiAUj52+",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "nlUF4GDodSh56G+zcfu4U1zlsn5Rf+0g4xWN2S80cSfN3dAU1iyg0w8wxOCccB7Xb3IqlVUuhiuLBaY9pcKmeg==",
    "Date",
    "Thu, 17 Dec 2020 19:13:45 GMT",
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
    "AolgA0gsrcTLIjXmYA-oKcI",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "DErzVclvN4N",
    "x-fb-rev",
    "1003118934",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "aaCoXnGfedzs7nFEU47uOVF+qMhEn3XjFG85SGpuXtHzbijPJmn01OwH7PsaYEKvT/cgpeL0b0vi3pGHlwIXEQ==",
    "Date",
    "Thu, 17 Dec 2020 19:13:45 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
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
    "AA839ABO2Ky2uGUnC1qbzyA",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GY3HrH5cJ2j",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "YTqkmnEZChTR00L57OYgiEmlZclG6bGP9+51Z6dK9lgQOeO/V3YkF3AMXjUKW95re4tMJTxc5GbbFkexzJsP2w==",
    "Date",
    "Thu, 17 Dec 2020 19:13:46 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
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
    "AEmfsaA8JJhRwbieyAqSRJW",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "E5/csvGYEWw",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "o4QIWe6n/Gq107QJnRej2ds4YKQRpzvqUVbd23h1+DXBY8Rl58fkO11NerW/d1tK+XEBE+aJGiiW+yhbX9Eibw==",
    "Date",
    "Thu, 17 Dec 2020 19:13:46 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
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
    "A2mKTDZ1if9ZLgo1skSKO-Y",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GQilXYeLxWN",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "OS3dM+xgglsmcK8Ctmz8u9B1leQdgrDXPUTCKJlZbgrmE8oOgafII9WjSosFPsvrMIiTbw5VkRKglQ/m5dRYWg==",
    "Date",
    "Thu, 17 Dec 2020 19:13:46 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
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
  .reply(200, { id: "23846439463760582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "A-sclrT7J62MayfaGLQ9uN-",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "FZJzdo5YMrj",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Vary",
    "Accept-Encoding",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "4C2oheZmbYPmH7il5DsUe+jZ7hQTinwKFKQ8fXotCj06JSG8+BotTkM+eyqu0JFXikb96u+jdeUMAE9hKkSR9g==",
    "Date",
    "Thu, 17 Dec 2020 19:13:46 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846439463760582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23846439463760582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846439463760582",
      session_id: "4042233637407993507",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":10}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AWNWdQq_4uoGojpTT_liDLF",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HiDvcWQF3pn",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "husLpgNg+4ULnM1+B94wJes02dSyErYx0x9pR7h1X9ssnmbBuoH9uBEarXJFa66jdT5q5Ow+rfo4MOQhnuzyzA==",
      "Date",
      "Thu, 17 Dec 2020 19:13:47 GMT",
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
      data: [{ id: "23846439463760582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
          after:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
        },
      },
    },
    [
      "ETag",
      '"529c34843d7a7cb89eb25388d5ba7ec9edf2d019"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AtpN572RTACp-yilXvWopvc",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "D7hnXzLU1lB",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "l3eeUzu11HbxZVfJrgYMG77fQH1KgDvxxVmguZyVXHkAv0W18IkYONThxflAqoqW34Gvu2sZdmKquvcNwkY+Vg==",
      "Date",
      "Thu, 17 Dec 2020 19:13:47 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846439463760582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846439463760582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"0002056fa3c05b0c491fa0c822f345a26d33104f"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AK20_7Et8IGAaLg6nRLfZ3D",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FNild+QY/zW",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "XNkrFRyx9dCt70OMf6R2zkVowB0kQy0bYhPyx1UChjnvrC/ePsqFKUMSnYy7dwpI3TgOaoDHCg6+2elBqkQuRw==",
      "Date",
      "Thu, 17 Dec 2020 19:13:47 GMT",
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
        { id: "23846439463760582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
          after:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
        },
      },
    },
    [
      "ETag",
      '"95926c8d75078bb3813bb8e4f9d6bdcd1ccac3c4"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AkYvangoZ1rDBwelM0YcjQW",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GuwvP3J+YxR",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "xFBuISRI6YtYpZmvzdDoy8dzwF9LEF1cdFOGiFkHONV4uyecvQY8j0w0f5sVfLDyQkZ0jwsvxbFbyoWEHV85Sw==",
      "Date",
      "Thu, 17 Dec 2020 19:13:47 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846439463760582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846439463760582",
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
        fbtrace_id: "Az732jExHaoZeTVY1sDg8pE",
      },
    },
    [
      "x-fb-rlafr",
      "0",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Az732jExHaoZeTVY1sDg8pE",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AUwlbiGLqUw",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "3++IoAb016WtX5om65mPzv8vdH/vbOdaO1R8nniWjIPuuD8OU7+isRCpKz9469Jcv/vQpHZrxR4gkuCo33NBsg==",
      "Date",
      "Thu, 17 Dec 2020 19:13:47 GMT",
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
        { id: "23846439463760582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
          after:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
        },
      },
    },
    [
      "ETag",
      '"95926c8d75078bb3813bb8e4f9d6bdcd1ccac3c4"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AiZzF5QpUki_EJUdfoft8-9",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BVjRDSpK3Y5",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "X+RAUV+QM4EOfCq2Dy7nQNe+/9fTV61cE0lwKxrzCpoKuww9B+bpOdigCEvQt4/W6TEXZbxz9GELi4Q1UwmGUA==",
      "Date",
      "Thu, 17 Dec 2020 19:13:48 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846439463760582/users", {
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
    id: "23846439463760582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846439463760582",
      session_id: "4564521828325725230",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":19.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A75qqSZmqZE8gtaOqOOLLw4",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FeXpt1yVQTP",
      "x-fb-rev",
      "1003118628",
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
      "cX+/dCUb1Tx6eU/tv2A3nyPqVT355MZvRpxqqiym573aQ35XTj+JfYUY0I0UpwUFAJ4d7RArUfZ8awjGXrf+rQ==",
      "Date",
      "Thu, 17 Dec 2020 19:13:48 GMT",
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
      data: [{ id: "23846439463760582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
          after:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
        },
      },
    },
    [
      "ETag",
      '"529c34843d7a7cb89eb25388d5ba7ec9edf2d019"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AwGHWmzRteo_U1xVb06MApA",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "F1pwsbnD2N0",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "L4MGq7fLiLphNGwowi91ibibLP5BPc+07fZOcGiDy2VmkKgn44pMkIMKc2l6Z5QZ8TeKQpGG2w62YflRFs/APQ==",
      "Date",
      "Thu, 17 Dec 2020 19:13:48 GMT",
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
        { id: "23846439463760582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
          after:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
        },
      },
    },
    [
      "ETag",
      '"95926c8d75078bb3813bb8e4f9d6bdcd1ccac3c4"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AFvwj53Cw1bqoLePCLOTnqJ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "A8TDEkZ9QqN",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "nqU+hBQ2FB0rPokoASgmVXm23bMCQdMEEPxgpwFFnsq+D1Q6DSFSCKrP3UkhbrQx40qnoTeHVvS9bf2Nzv1+6w==",
      "Date",
      "Thu, 17 Dec 2020 19:13:48 GMT",
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
  .reply(200, { id: "23846439463850582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AGth_Lf3eHXwFP9xzQ8hrck",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "HNxnDgB7AB5",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Vary",
    "Accept-Encoding",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "v4I0tdnQ7vtZUS0N/LXjcEgshHT/gQZwqLjAVriMllfN8wRAGSTUEFMxnOH655HdH92t0IfUwirLMPzOEhPq6Q==",
    "Date",
    "Thu, 17 Dec 2020 19:13:49 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
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
        { id: "23846439463850582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846439463760582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUk9ubTF3RGdwVEFuaGFqc001YTJWYzJ0aDNRaG9sYzhiQS1pZAFNyd0wzYTItTkhtb2hvYnlWNGZAUdHEwcEFrZATJEZAE5sdmtpbUd5T25LN0ROWC16OXF3",
          after:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
        },
      },
    },
    [
      "ETag",
      '"f05cb82216a4fa2708c17d06d0b413d0ec505f4d"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ACWjYgu4u_od7USEjPQvIDS",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Bg56ZqhtY0d",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "X2JLSTRC4rWXcp8F0rPRGGzo8Ye/dqJ2PMT8Qop4HvVjxbuLBrHFZ6T7RUgiz4Shlh4JcToJvMXoKjJM6FyleQ==",
      "Date",
      "Thu, 17 Dec 2020 19:13:49 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846439463760582/users", {
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
    id: "23846439463760582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846439463760582",
      session_id: "4564521828325725230",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":30.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AB-CXZbifTjQDcZMAeAkaQj",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Ayo5Fp86pWq",
      "x-fb-rev",
      "1003118628",
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
      "PFeFBKObErX/eu6Wo+kpOoJLDaHNHyRZL4F/XsFN7mgRG3yq01MxchLoVw+v2Z4MqMHRDeQ1bI7L098amrZyhw==",
      "Date",
      "Thu, 17 Dec 2020 19:13:50 GMT",
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
        { id: "23846439463850582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846439463760582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUk9ubTF3RGdwVEFuaGFqc001YTJWYzJ0aDNRaG9sYzhiQS1pZAFNyd0wzYTItTkhtb2hvYnlWNGZAUdHEwcEFrZATJEZAE5sdmtpbUd5T25LN0ROWC16OXF3",
          after:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
        },
      },
    },
    [
      "ETag",
      '"f05cb82216a4fa2708c17d06d0b413d0ec505f4d"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AsOAvgCpacC9Hw8xFcBYS_w",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Hxf+FzY4Ks4",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "Cf0+ssYx5yxuyZ2xMwZbbgnApS+KzTBGNXzveno0rrxKaC1tJHQeGkFkjzSdKepqeqnUWDvhNgsBInDHMYl2LQ==",
      "Date",
      "Thu, 17 Dec 2020 19:13:50 GMT",
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
  .reply(200, { id: "23846439463910582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AGPRaOkI8R0Dw81Y-G-YT5U",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "CjtM/BEVxmI",
    "x-fb-rev",
    "1003118628",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Vary",
    "Accept-Encoding",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "H2R760qbXfIb7TXPAKOn8BUQj2cpvvsKdCNnEoHNnRR6di+O3Ltdwhboi70FRFk73cQFnuBZjPyyQf7Ti6v9ng==",
    "Date",
    "Thu, 17 Dec 2020 19:13:50 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
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
        { id: "23846439463910582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846439463850582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846439463760582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUk5HZADE2bGRzQ3dILVFYTHVnczJGazVxcWlxbGN2VW1rWWxLbHVZAcVdWSjVWUVlaRFVocklrRHhvUldKaENQd2MzVjJHTENSdjlSbDBBamF2MDRTNmhB",
          after:
            "QVFIUnFzTDROSDJZAbDBEMEs3UEFscW5PaVVTRXA2MnExcGtreXdnUGhXbG1SanQ1dS12ZAUJDNE9xZAkNrYl9ETkFFb2NhY0JPRHV0TFFOU05WRFQ4OU5YRFZAR",
        },
      },
    },
    [
      "ETag",
      '"3dd54e1797e85c46757abb4d4d245722c6be83e4"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Auf3IJjmpZqWfPcZXlW87jK",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FO4KLdZgvMQ",
      "x-fb-rev",
      "1003118628",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":10,"total_cputime":1,"total_time":3,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "zLQIUvB6IW4myMgni+GuvGKyVwYarJy8sdKwbOajG2R1LX3b2Y7C3v4u9r10dZbvv25ih3jMtGL7FL7EOlbyPw==",
      "Date",
      "Thu, 17 Dec 2020 19:13:50 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846439463760582/users", {
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
    id: "23846439463760582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846439463760582",
      session_id: "4446585645685663677",
      num_received: 2,
      num_invalid_entries: 1,
      invalid_entry_samples: {
        '["e190e9b20a82820ff09d873ae4dfe092b21bd625c259d54ab8773ff022eb08e0","","e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","",""]':
          "empty external ID",
      },
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":37}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AqY2MRtClrJ5_rf-eFobgqx",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FnBXlKXU7UA",
      "x-fb-rev",
      "1003118628",
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
      "SWk2K1216g0BT5yXFkjkSz00J1KAXKUC4ty+zIoZpqqX8E1SEjCA4H1CUX0GfQZoeT1UR/pxXWMZOwKOuQbbMQ==",
      "Date",
      "Thu, 17 Dec 2020 19:13:51 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
