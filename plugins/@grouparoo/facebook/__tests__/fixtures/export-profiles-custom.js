const nock = require("nock");

nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
    "v10.0",
    "x-fb-request-id",
    "Aawakp8TmujiUXQn9fdbHmG",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "FCORnkPvg9Z",
    "x-fb-rev",
    "1003526078",
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
    "7A1hOSPzSvsZ575YFKcAOfjoQKhQISjlCdS/ETsvOVfGDN+x0ReAPxpO6n91xdvlXxtWnyX6r64o+sHICx0WvQ==",
    "Date",
    "Fri, 26 Mar 2021 23:41:40 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
    "v10.0",
    "x-fb-request-id",
    "A0hFkWnohTLqNnRO5ULLIh9",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "A0hjGwvx2ra",
    "x-fb-rev",
    "1003526078",
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
    "5CvnwdXfNZQcCgHN/bUNOq6tvW30KWmnx2Df/Lz0BeuOPP2a/3Yf1JnXxwsI01toa6EdRv4B63fn2PT0glnbKQ==",
    "Date",
    "Fri, 26 Mar 2021 23:41:40 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
    "v10.0",
    "x-fb-request-id",
    "AT_NKzoiT2CPMh8MMhWrGBE",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "FECelwbUfU9",
    "x-fb-rev",
    "1003526078",
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
    "0Bb1sQ+VN1hQywez6Dk2E/d3drZgxh6LHBpJeNG2HsayQwYbZ5bwzApraVCXjItcgw97dy5dLn4+Yi6fTKy0Ig==",
    "Date",
    "Fri, 26 Mar 2021 23:41:41 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
    "v10.0",
    "x-fb-request-id",
    "ACvFsh8hYI1vfgvmh_MhvON",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "EY0ik752Ln/",
    "x-fb-rev",
    "1003526078",
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
    "0ACYTUzitKI5cx0xrmTEmf7Fy9V3m2l0umYj5xkMUV1tZgik95dfczyJQ2260qlgLDpplTLLu6XrgIRfOhLahw==",
    "Date",
    "Fri, 26 Mar 2021 23:41:41 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
    "v10.0",
    "x-fb-request-id",
    "ANCMQrz1eaJ9ik6RnmLkX70",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "DaYQE4c6kG8",
    "x-fb-rev",
    "1003526078",
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
    "cM8xxKaoNd73J1uL/e1FyGydogvbOGKCaJCfqdjZwCIyjFrLgl9dPQgT7QOoClz9/xk142JqKzMKckhlmDAiWw==",
    "Date",
    "Fri, 26 Mar 2021 23:41:41 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
    "v10.0",
    "x-fb-request-id",
    "AyDjPiqggZ-TgpybZ8l7yqp",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "HPfbAEouoDr",
    "x-fb-rev",
    "1003526078",
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
    "jUGv+JOmnh4e+qtTDfonPx9FToNmnoprcnz2BghKdMvKCRZ+t4XBL4kYor8ttTJCmIyXdutg3JPOeIcqPh9RwA==",
    "Date",
    "Fri, 26 Mar 2021 23:41:42 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
    "v10.0",
    "x-fb-request-id",
    "Ackq8TUGn4eOYwt8vM5WvnC",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "FLU0yWCf355",
    "x-fb-rev",
    "1003526078",
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
    "XZFx1rAWXTyXVBseJOVZUB9R7vl1ck0aNehnE6Xv4Tb3y0SGXkuzbfYWcbUMKMKCuDIkHuQzNFawpNUHXLKWCg==",
    "Date",
    "Fri, 26 Mar 2021 23:41:42 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23847289886190582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v10.0",
    "x-fb-request-id",
    "AeTHJBpTwYIoIlLlGj7gZyZ",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "DJcZH0gveda",
    "x-fb-rev",
    "1003526078",
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
    "KHEbx/QVGLm7szp55N9rsstUP3rm3UivyYkYpLPSdHGV1fsTA004tvlLJjkNw8C9wzGtzuViXXo8Up+k9ZUSrA==",
    "Date",
    "Fri, 26 Mar 2021 23:41:42 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5019038498436145922",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":9.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "ARf2utBUzyLkm1wu32S3fft",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BLFLejNr+TF",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "kTGtDkseMrLgKxbQf7JzPGD1KS4JfRkJJcf8asIgMzJFLn+ehPlvKxdG6v+S6G4su/5A7JbEOAUiVXdzQ4GG4w==",
      "Date",
      "Fri, 26 Mar 2021 23:41:43 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23847289886190582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"12f9bcc3fd01d051f57930afb1d305c13d7c3a3d"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A7DzQpdLdqFOjAnSfOz0COO",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FsIWZ9dOnHX",
      "x-fb-rev",
      "1003526078",
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
      "lpRWNbwO94iLhvud9NRiVxLuUrJ753e/KAlafPblCiMBqN1yUxplPrwgGAXhMYzerqmoj8fdUoGBi+g4j3Ijmw==",
      "Date",
      "Fri, 26 Mar 2021 23:41:43 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847289886190582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847289886190582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"77665db7868b66575756c25ea247aa963e946848"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AoReoRu1cAcFoB7uSfWGrdH",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EBu18KJxF4d",
      "x-fb-rev",
      "1003526078",
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
      "3dLDf6gxQrHyRqn2eZcO2CX9BF5DpsJG3R1NLC5yuCF79W8leVwqhP2wIgkKEZZ+mWt7t7PCQzitlcQrqDfu8w==",
      "Date",
      "Fri, 26 Mar 2021 23:41:43 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23847289886190582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"12f9bcc3fd01d051f57930afb1d305c13d7c3a3d"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AhsSeBJqUEatn3zdRDWnHBR",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "B0kKhVh9fNu",
      "x-fb-rev",
      "1003526078",
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
      "HzBYyK3TZ5xJARVn9qkCvLCXSoWFe+QqG3OZUqIg1Mj6muormC61dxxvNGJ/iNbaPnq8+AgqLayxWUEkZcXmCQ==",
      "Date",
      "Fri, 26 Mar 2021 23:41:43 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"84fee4583e983a528f1fee71cf3d9c939683778c"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Aj4XIVS699exeBgNHSDwCuZ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EAHzC1z0WhI",
      "x-fb-rev",
      "1003526078",
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
      "vi1Xseli/gRh9Jxrhvs6OO3OAzb/iLEMkm1orIkxYaBSDFs3h8C/g3matnvgN75hXswR1z/3SP9qy8UV80+B4w==",
      "Date",
      "Fri, 26 Mar 2021 23:41:43 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":16}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Ax87i4018RFfSp50bYE7LLi",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BpH5dHD2JYV",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "hrbG7eLAuHxAjgP+hy5YBaZRcExixQqb/DYTWRwbloIrVlVQAFXW70CrmkjbdGsGf3I+bmeC1Kb4wHhqp5vZew==",
      "Date",
      "Fri, 26 Mar 2021 23:41:44 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"84fee4583e983a528f1fee71cf3d9c939683778c"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AxwfhkB_jZc07sNbgsjJRL4",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FOB8bJ9dcLk",
      "x-fb-rev",
      "1003526078",
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
      "15T64sV73htphYK+dLtUOlJwVwm8tuMSGWTVSLByzfikCPK9CxwKjsR+w8uUfj3nZcTQKRnBWumBocDLYGE4Tg==",
      "Date",
      "Fri, 26 Mar 2021 23:41:44 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23847289886350582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v10.0",
    "x-fb-request-id",
    "Aj6qWusq2IxHf97xszPbGil",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "D/CTEmcVqd0",
    "x-fb-rev",
    "1003526078",
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
    "UXCSCpkZcgib+fptmi6f1+Fe8toNkcwkbl/Z+Ek/m3lnWu/9isztmCh5My9FauzixptacZ0pZMXJ3Ped3hAn/g==",
    "Date",
    "Fri, 26 Mar 2021 23:41:45 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886350582/users", {
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
    id: "23847289886350582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886350582",
      session_id: "5223088611522432543",
      num_received: 2,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":22.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A1jA1SZGRDX2o--sJw8eogB",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GaOaGv9usYQ",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "X0k3sPaatxuygvw29WWF/x77gUmsCwRYNp29RbbKshxsxxjUcuS5vc4HTHVREIbb9eHpJttST+4WAXxfsCntaw==",
      "Date",
      "Fri, 26 Mar 2021 23:41:45 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2" },
        { id: "23847289886190582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"8368eb8e23a99bb72bb5ac7021e70316296f5741"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AQbhISckH9c0rv0lPNUlzMY",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GWbeWTw69n1",
      "x-fb-rev",
      "1003526078",
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
      "fy5zLcHQHKvngSH+DULdRM4KMp5oe1u3IAWKgrly2MbFxwqBMvKHWIka6Hs9SW6XSk8y766V7/1faFBGKJjiLg==",
      "Date",
      "Fri, 26 Mar 2021 23:41:45 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847289886190582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847289886190582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"77665db7868b66575756c25ea247aa963e946848"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AEoq7klX7ReK_ajmjKkfCEv",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HAViF5SWzsr",
      "x-fb-rev",
      "1003526078",
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
      "Od5nVt7k/uLQeoqM2zvmPaNEuzkwicZ6FUaeLKWq0N9L8PGe3ARrAcF/iYF/P/r7wbi4hEO3LISFMScz7d9Usw==",
      "Date",
      "Fri, 26 Mar 2021 23:41:46 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847289886350582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847289886350582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"2d21110c8e8d6ea0c601629f4622f2fd3bbf5864"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AVtUiTIGRGpP3dRgFZ84588",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CgQJgq8tmn4",
      "x-fb-rev",
      "1003526078",
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
      "toe/0mx9WoAvSAgRsJxsE6SrsIx1ss6QT9VzoS97x8Tk05CDFaq/2wbf7SFCkipFYq+A5iVflVkyXIMyGvV+BA==",
      "Date",
      "Fri, 26 Mar 2021 23:41:46 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"c871bf811b669d61ab3119ab24916b8b28536980"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Akew9g4NuASu2WXp6aPkCsB",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DnlzjEqgl6u",
      "x-fb-rev",
      "1003526078",
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
      "F6oKW2I0gx4NGWOlllBSJ9SWgz8wZ3MJKPaHODX59xzyr66N8xE36yZmvcsiVMR+qLnUjb8XvDmE13Khwt7S3A==",
      "Date",
      "Fri, 26 Mar 2021 23:41:46 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847289886190582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23847289886190582",
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
        fbtrace_id: "A-_nwWcoy4y75VEP7XyIxZY",
      },
    },
    [
      "x-fb-rlafr",
      "0",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A-_nwWcoy4y75VEP7XyIxZY",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BaenTqk6654",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "uL899Ppb++aicBd+Y3e4usfaYSkMYwzcXyha52NxiZoBdzorkbyZaXi4ze9sqb1yOc6OPUZ+hirhBVnSC/TEbw==",
      "Date",
      "Fri, 26 Mar 2021 23:41:46 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"c871bf811b669d61ab3119ab24916b8b28536980"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "APoUPlseJ0kE7hIP36i587T",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GGI0RsCL1PW",
      "x-fb-rev",
      "1003526078",
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
      "G8KnCJh+fXzz5tACEcH+HndJwxWAedImf3jNITE6nQHe13NYqSAGF6fAdfiDAa1Fm+vuubMhVb+vPtRe5skaPQ==",
      "Date",
      "Fri, 26 Mar 2021 23:41:47 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847289886350582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23847289886350582",
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
        fbtrace_id: "AbvQD8UhfOHtz62_lTVTH1Y",
      },
    },
    [
      "x-fb-rlafr",
      "0",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AbvQD8UhfOHtz62_lTVTH1Y",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AWaWtNqOpQM",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "q7IFnwucFoB0qJiStJJNzmkGJOYOj2X5+M2u6mh3y32TKBgx2EstYQ7m5QYme38TPDw9L2Ce4/kJCBugHPX5Ew==",
      "Date",
      "Fri, 26 Mar 2021 23:41:47 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"c871bf811b669d61ab3119ab24916b8b28536980"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A7alEfwYGsAKMnKBQQKTJZ_",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "H6bdPyDzE7B",
      "x-fb-rev",
      "1003526078",
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
      "ng7kq3jkeOb4aVJZ/NhEDhY5k50NEX24sIlMiiJLKwqKfE+DPwJCW2LwM0QVXrqa+4kNiyJYx+hevsrmuxXarg==",
      "Date",
      "Fri, 26 Mar 2021 23:41:47 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":36.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AXWvezVf54DpPfGbBoVfwIt",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Eq5IEdb1Pgz",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "a1BUEu2a7F70xFePRVO77d7touLKEXWo6QChMscdZ01+GxdWuu7P53Pj04i0nFByCUvcyWCYsGNPyEp1lZHMnA==",
      "Date",
      "Fri, 26 Mar 2021 23:41:48 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"c871bf811b669d61ab3119ab24916b8b28536980"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A-Ldx4SFoSFBdKnTFmcu_6v",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EiXZ6v+VkS2",
      "x-fb-rev",
      "1003526078",
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
      "9EkxQH0D7tR2IIUdxRcpbr94vC2j0H0u9XkgQVHybyBuT/D0tszTaYhw05qz4FiIpqxxVE+ChIp8dY3HL6WmWQ==",
      "Date",
      "Fri, 26 Mar 2021 23:41:48 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886350582/users", {
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
    id: "23847289886350582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886350582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":36.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Aj1Qj1Q1jMWMDpZGqfwh9yb",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FBfNFnSkcKy",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "aeiBFYWNtjiSmUJ4a576AKlOIamWLo7cQzHx5uGI2PK/uF1lUo8FpThIVbqFLOPYSyt1ZGie/AGPzI+H0LCv7Q==",
      "Date",
      "Fri, 26 Mar 2021 23:41:48 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847289886190582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847289886190582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"77665db7868b66575756c25ea247aa963e946848"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AXwDSkSvy-Whs_G-er4MSVO",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AR1CoDNF03h",
      "x-fb-rev",
      "1003526078",
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
      "fxgvLbtI67XqQUM6h/pv5O+JsI9TH88AGrrIbjQDAbQgQp5fu5Op7/DJrbcABcSjmdhNJWU66VSd5T+AX1oC2Q==",
      "Date",
      "Fri, 26 Mar 2021 23:41:48 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847289886350582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847289886350582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"2d21110c8e8d6ea0c601629f4622f2fd3bbf5864"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AwnjnV8bbWdX7cjyh-YyTcz",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "G8rZxmNBElP",
      "x-fb-rev",
      "1003526078",
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
      "F46LmkY5dxPx1H9aoLkuYizJhM0jYNpyFIe9gH7UcKutUbexIhKj0m2xMTRQUP8DLSMK68QzmbWj5iHnkoaftQ==",
      "Date",
      "Fri, 26 Mar 2021 23:41:49 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"c871bf811b669d61ab3119ab24916b8b28536980"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Azaz9sX-sMoUwLCBGFp_Ea0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CgqYfLrxmY1",
      "x-fb-rev",
      "1003526078",
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
      "I/T0u5DUFw8SOPrnmP6HOgqd2lSCzrLUfCXv+Xsk9+mxaaGtMVs3l4Y5vm+Fv8M547K00V9EDretrwv5EzrM6A==",
      "Date",
      "Fri, 26 Mar 2021 23:41:49 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847289886350582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23847289886350582",
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
        fbtrace_id: "AxPaomA5LIP7aTdwqzJaHrN",
      },
    },
    [
      "x-fb-rlafr",
      "0",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AxPaomA5LIP7aTdwqzJaHrN",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AyOC8lOA90h",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "lf+guPYRZceqmwh52pCR6Cr+ykQBC035i0q7NuamUFQKqwF8jl27O/gCvoCv+Nv+kKU3TDUYtRKQeaCNBo/UqQ==",
      "Date",
      "Fri, 26 Mar 2021 23:41:49 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"c871bf811b669d61ab3119ab24916b8b28536980"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "ABcKvB_iPIUGlQ1Ni6jsNAh",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DKYIBHdradb",
      "x-fb-rev",
      "1003526078",
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
      "FX0Ja2gFywaDf+Fg97puJUZjfGwaV7oyVUs9e6t9ji6j7n+24sHdTTRT30mz/wc2B6z2OIlJfFiTtpg6hjg90g==",
      "Date",
      "Fri, 26 Mar 2021 23:41:49 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":44}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AS4QeHnGkn6S95PDNEkhSIL",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GrzxprQ3uEh",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "4kIycXMJV8Aw/Q7xFYzBZQ55SD7/Z7Gj1zM85d5NVg5YigYplzjZPV3XDHzZk6/kiqyTcDGfiWIQ4eM+wqt/Ow==",
      "Date",
      "Fri, 26 Mar 2021 23:41:50 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2" },
        { id: "23847289886190582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"8368eb8e23a99bb72bb5ac7021e70316296f5741"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A2aAtajaQlliHmRlDv4pjw6",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Hif7SUEoPEy",
      "x-fb-rev",
      "1003526078",
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
      "fjmfWLZyunyfP+WuYOLoHECgUF7ihiJo22e4kND1SkXzTw1MzJke+sy52rFS1bEoGgMO/ysr1/tsOqZcKBia0A==",
      "Date",
      "Fri, 26 Mar 2021 23:41:50 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"c871bf811b669d61ab3119ab24916b8b28536980"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Az1D7QMIsoY3dFYzDdO5uHB",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Ci/Ftbzg/76",
      "x-fb-rev",
      "1003526078",
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
      "UABhMx/B6lhvbAOHB7biwRuIkP7GRiP1ntXccoxiwNTjI8rnJIuKmxJ0PJxojHfOcOwyaz+dUl9mWLN3lSbGGQ==",
      "Date",
      "Fri, 26 Mar 2021 23:41:51 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23847289886480582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v10.0",
    "x-fb-request-id",
    "ATnxUCDem_SEh0AouMG7tSh",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "Fesl2mTXc3k",
    "x-fb-rev",
    "1003526078",
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
    "KjeDIgm7T5C/TOI0qc4liH/ejCsvOYgMwXM+zLzygT0AXluMryuRM0wpUS5h2OovOz61JdBrR/xIzTvVMFvtKg==",
    "Date",
    "Fri, 26 Mar 2021 23:41:51 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886480582/users", {
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
    id: "23847289886480582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886480582",
      session_id: "7522028841431019826",
      num_received: 151,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":51.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Ad0KWPTSzRuV6DjWl1bSR3I",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AGatOuCJKsG",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "cYiqX3+/C27ngKcO/v+SJZu3SaM1dEE/vOgLLjGFrtPNRCfsCQuwAo3NzdNOorOA/EMWV8YZoRrcrFK8ox81/A==",
      "Date",
      "Fri, 26 Mar 2021 23:41:52 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "140",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3" },
        { id: "23847289886350582", name: "(test) Group 2" },
        { id: "23847289886190582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"3ca534b6e7f812d1df759ffb5f30b12687f9f9e9"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AGfvjAzPS-Ex84x9Uxi3vHy",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GOsh+6wgTj3",
      "x-fb-rev",
      "1003526078",
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
      "1n8mSNpjc2Z/pDHLGhJu5RBrAhBwlezxE4RnT5QM/4Yb7c9qyhE3Up2KAwJeTLxiX3NlalmNnVOZGl5UHhJ/eQ==",
      "Date",
      "Fri, 26 Mar 2021 23:41:52 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847289886480582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847289886480582",
      name: "(test) Group 3",
      subtype: "CUSTOM",
      approximate_count: 1000,
    },
    [
      "ETag",
      '"08f70d5760ae12844c8b81d09109dc1d5fdac28b"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AXGM1iUyLlLm6ZHpzbCWFB-",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FRMmqOH4zv1",
      "x-fb-rev",
      "1003526078",
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
      "eqJS5m6awuOxX/9LdzkM94bSnTxuFJYPotMLvi1kD+LmShqP8yFRWVLDOyR7Z7vbl7xu41iZAAopwQrHSR+zzw==",
      "Date",
      "Fri, 26 Mar 2021 23:41:52 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "94",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AwvZJdVYVfpfo1FX9V6RWXq",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HirDxHKMdao",
      "x-fb-rev",
      "1003526078",
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
      "mYcq20PHb8ih2CAxfgZj3+Saxc6mhVP1HPFdWJoP79TVYpXZOq4tIGccv9u92gdAHFv+JoTnB5K4Xgm4d+YfWA==",
      "Date",
      "Fri, 26 Mar 2021 23:41:53 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847289886190582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23847289886190582",
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
        fbtrace_id: "AtDcQA8gzmwdfWb7mtmG0k1",
      },
    },
    [
      "x-fb-rlafr",
      "0",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AtDcQA8gzmwdfWb7mtmG0k1",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ExlRt+EhppM",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "BSrQUtpp5bY1EtjYw+FmjVXs9mu/EgUYhdHinx8JylIAmPFVC+zeimjZIhQ+c7VMgTD+CXwqQSgu6VSLUNtAaA==",
      "Date",
      "Fri, 26 Mar 2021 23:41:53 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AZ2o2jbtaxD1LI0MK6Be1LC",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ABF9xKlxkx6",
      "x-fb-rev",
      "1003526078",
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
      "OUUp6E+vedP8nzj2jXZXBWZU5qla+A1EoK/9hnim2K076Uxqi3Y/K7Uct48uvnsji7v4s9kB7HjO+AopJk+WaA==",
      "Date",
      "Fri, 26 Mar 2021 23:41:53 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":58}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AtwUjCWpsru1DQ6uRbVvo_S",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CamNFgS1sfn",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "KwkvPDiuEcqgHtdvM3M4qUQvEbb3ugRKTmiDE6n5SDIWHRCdX3YiXyv1S+cDIBJJ1+ihgvWBLyszBbYaGqwGNA==",
      "Date",
      "Fri, 26 Mar 2021 23:41:53 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AQTNZAUvdU0LrPOZlqvk5zT",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FbA+7bRheHa",
      "x-fb-rev",
      "1003526078",
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
      "SpZWj32kJAMYdF2x+JjPEo/6AOF2Xi/EThtshQSqQEj1VJfQu3DAT6okAnynMj1CIwwxfTLfpeBYajKljgQXvw==",
      "Date",
      "Fri, 26 Mar 2021 23:41:54 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "APj_c38R3jKI7JmHQTFtWIP",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GXIl+hzVYpk",
      "x-fb-rev",
      "1003526078",
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
      "u1rVFL29stZ64h2BusIbXbjo/SfDsx3J0RhQrucDXEWUyvR9YbHLMHglcogpPWhGyHT6qYkWXZPxU/NnyfABnw==",
      "Date",
      "Fri, 26 Mar 2021 23:41:54 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":61}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AIQfDGxsCXcR7BgMEdc19c9",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "H4j9pV66tfa",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "BrLAwF74IVfv6ilCJBuqZdMaOS+gMezrTt8Bjmpj+sXZM1lZKc0SGGJ3FrJ2HHOcrV3It/MZJxTQp93Byjwq7w==",
      "Date",
      "Fri, 26 Mar 2021 23:41:54 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Aj8jFwr6tdFB75fhiye2sFl",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Gb3JFAYfZQr",
      "x-fb-rev",
      "1003526078",
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
      "9Kaae6STqlnbeuwmNf4C10B/uDUz+J+SYWg+TkOvIKBHLjtcHa612Mb4rz8PN6KWQB+rID8lka/bvh3rqFdgkg==",
      "Date",
      "Fri, 26 Mar 2021 23:41:55 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AFNmmjvvcZzCIgmYiA0rXNN",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FV3WjsOM6zv",
      "x-fb-rev",
      "1003526078",
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
      "4Nm888JYHDmbRozQ/ZQu2u3J7MqW6BOTNz9XVx/AEx8vztwgNlhAZ1+Wa/ZcrsWe6EwW4av+YZco2npv4O5/Yg==",
      "Date",
      "Fri, 26 Mar 2021 23:41:55 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "4816444677286392350",
      num_received: 2,
      num_invalid_entries: 1,
      invalid_entry_samples: {
        '["e190e9b20a82820ff09d873ae4dfe092b21bd625c259d54ab8773ff022eb08e0","","e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","",""]':
          "empty external ID",
      },
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":71.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AZSplh045PXDlrHKVOfcddU",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FXD2+KSiW6n",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "hZDr/+OCVOtMVbADKmsfgriJrbP3aS/hq+wCb5AaYLyTCFZImhHbQDpcaCt2zuhrR1inH8DToAolFAQFrQZGBg==",
      "Date",
      "Fri, 26 Mar 2021 23:41:58 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AD6UCRRJjQ9P3RXNWi3A6qm",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Dc/8XbLFTNo",
      "x-fb-rev",
      "1003526078",
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
      "07BHqHPQLJetxFrDDXZ/wFodfCCdnPqYtw1pMkwEELo78tT6DCH8jeWe5m9faAHFIr4OTUYAYHL95XM85HKh6g==",
      "Date",
      "Fri, 26 Mar 2021 23:42:00 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":72}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AGt3caH80Ynib4ni6eRCDEX",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "E3id5FZgbED",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "FBxp8nboXPPKjlnjUf6nvyFjiwtEnCTD3lHBLfQrS0R3Z9cGtxCof7o0X4Ex8z5iTf7Ujia1b8dUlNsb1Az3Jg==",
      "Date",
      "Fri, 26 Mar 2021 23:42:01 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "ApnutLRQ874e2XA1WqsGqUw",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Fr2ubckQVnk",
      "x-fb-rev",
      "1003526078",
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
      "xheOfBjcuEdyuaCMepcCygKALq6XHAlX3eRLYJ3CH29POjeBkLe86uKvX4WsSqUtIpDWhTm88K6ah3NzCEgedA==",
      "Date",
      "Fri, 26 Mar 2021 23:42:01 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886350582/users", {
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
    id: "23847289886350582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886350582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":73}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "ASnzkLpOHVu9bznH0_LNvnT",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ERcE/6Env+8",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "jdQVyniJr5bzcu4/MvoIWVVYMgP67qL8U6V2CX26g5t8LwnpGpdO2nUW4WFMgACCR+226hSNSJ52HeGzSA5MOw==",
      "Date",
      "Fri, 26 Mar 2021 23:42:03 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AfMTcFsxTLjUW9_Lfm1__Rd",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EIOy/ZtAoro",
      "x-fb-rev",
      "1003526078",
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
      "KNjkQmeYtYgJWKoG1JvntfTdVT57r9OLJObJCgQn85UohXRnyLyQnOSJ5TVQRG+CY4Yahn+Ryw8R7nE329dOjQ==",
      "Date",
      "Fri, 26 Mar 2021 23:42:06 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":73}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AXjLhNkoNbVss8mwfC_0taP",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FV+VoXW/bYj",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "eJyYEAp2rJnYY9c+83S1psP9DYMpIDNcZXF8PjmHUHNNwT2gPSgY33e3+z8f1DckjwG0mREtCQ29YL16dFQl/w==",
      "Date",
      "Fri, 26 Mar 2021 23:42:08 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847289886350582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847289886190582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"4f3988de0cacf920dbf8c0d78e2d31f81fe2f388"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Agl8vGFawtTRdSsmkrIap8P",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ANVefWBL4sD",
      "x-fb-rev",
      "1003526078",
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
      "/N1STihpGosrNIGV2TiD/0F8fv5F8jd4A7eyWiLj+f/LmuEFohAkoD/SdmN1byd6lvyU0Nf7eFRyTmDULCWt3A==",
      "Date",
      "Fri, 26 Mar 2021 23:42:09 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847289886190582/users", {
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
    id: "23847289886190582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847289886190582",
      session_id: "5223088611522432543",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":74}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A3Q8mP4TG3k0H0lHj1B58_A",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EhznG3IGKyL",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-app-usage",
      '{"call_count":10,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "kXaUfzeSPF6kKBmLZpnqb4JoGp/jV6NCff8H0iTPkZOsOsaa9/XXbAr5zPntoLkIU9Le+N4Z2BHJglljcKhiHA==",
      "Date",
      "Fri, 26 Mar 2021 23:42:10 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3" },
        { id: "23847289886350582", name: "(test) Group 2" },
        { id: "23847289886190582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUjMtbU5GTlZAZAa2NXTFVKZAEV6YUh0UEt5SjZAKUFlGUFJQZAVY0M0VKX09Wdm1MTkVTei0tbGRiMnA1RkpPTDd0bFpkNHZA4TlBYTnhYY0FWZAFJvdVpqbFhn",
        },
      },
    },
    [
      "ETag",
      '"3ca534b6e7f812d1df759ffb5f30b12687f9f9e9"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A-f6MeN2uUNlAR5dGYROZsS",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Dr+UrD3dbr3",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "5RS920Se15An7YolgAZ2DwwJ55eHxlyh0TWcVnTTut1KLjngAWL3vm4/88ztul9f6Z2n7pHxFCccasj50K9rjg==",
      "Date",
      "Fri, 26 Mar 2021 23:42:11 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847289886190582", {})
  .query({
    id: "23847289886190582",
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
    "v10.0",
    "x-fb-request-id",
    "ApA6NgAZJkGpa_C6hbCr4AL",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GlYNbXEKmHa",
    "x-fb-rev",
    "1003526078",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "kD4/FwOw0qgdIhKU1+Y93ctvmMv7EphsiydUfb63yfqWWoNJHsFxCfIyoYf17/gngyCcU3m+tHKuZsIQxgnffA==",
    "Date",
    "Fri, 26 Mar 2021 23:42:14 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
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
        { id: "23847289886480582", name: "(test) Group 3" },
        { id: "23847289886350582", name: "(test) Group 2" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUnVWYXZAadHc0VGhlWWZAtWHhrRjE1ZAE5MNGpfMm44MnJsRUhwYzhfajJJSG5kRkdIbDFnaWVpRVhaSXl3TmtpU0ZAXZAmY5R0ppUVlBY3RMeHR3UlU1OWRR",
        },
      },
    },
    [
      "ETag",
      '"51eee2c7138fc6036474cfea0007368aa1556068"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Ai5KrMj1SI1BfSPfqhlWuOD",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BRpwiDSxIlY",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "mKXPnygwVQOOLgdpdIGZkDCf7OgcGD1Ho4/IwU/vp9RgzWHNnMk1EcHJ6kcVfygOxUxxgeTlehXGhCGACitZSg==",
      "Date",
      "Fri, 26 Mar 2021 23:42:14 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847289886350582", {})
  .query({
    id: "23847289886350582",
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
    "v10.0",
    "x-fb-request-id",
    "AF_4PTf3XdlPrbyYOSkISPs",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "Dp6+vKXG1or",
    "x-fb-rev",
    "1003526078",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "DOLRWSsqSPW0u7JAWF4O9nsF/Zssv2bYlYROtgEwHYqF2hYb5abv2OAkjY324A3FL2Ar+8R21+uUnhU6kc1gug==",
    "Date",
    "Fri, 26 Mar 2021 23:42:16 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23847289886480582", name: "(test) Group 3" }],
      paging: {
        cursors: {
          before:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
          after:
            "QVFIUm41aDIxb0otNkdNZAFk3OWk4c3VlcjVTTTgyX2ozeHY4bWZAVV1Y4WGdLTE5VdGlCVlk4UURSUEpiVmQ3Y1NwOTRadXZArdlFCNzNuUHZAIdlFnRFpqZA2Jn",
        },
      },
    },
    [
      "ETag",
      '"016de7c0e86fcd36fc51121588a46d3d8e0a0fa4"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AFJcIoeBmXSPi_iY51dvk7z",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "F/SN4Uz/a01",
      "x-fb-rev",
      "1003526078",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-fb-rlafr",
      "0",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "PFtfqFad2jMDLQwJSH6dVQzl6Q0d1xY7asjCXjePmWFVX6hWHUCXsGgGEfF4ozglyM5U+5GeJRh/Rib19E2WFw==",
      "Date",
      "Fri, 26 Mar 2021 23:42:16 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847289886480582", {})
  .query({
    id: "23847289886480582",
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
    "v10.0",
    "x-fb-request-id",
    "AfZTyJUpzlhox8jGwTF_iyk",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "B6xMbiolaLO",
    "x-fb-rev",
    "1003526078",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-fb-rlafr",
    "0",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "RVksKoXZEqkN8ukxK5xIm4DLJ9UxsfR1P0XXSH1Llj124lyM0ublS9jg2KVo9IF012Wuuoxp5DFrbyyUjXOBDw==",
    "Date",
    "Fri, 26 Mar 2021 23:42:17 GMT",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
