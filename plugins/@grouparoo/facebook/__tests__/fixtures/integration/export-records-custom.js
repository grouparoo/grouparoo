const nock = require("nock");

nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { data: [] }, [
    "ETag",
    '"1050253aec7b29caff644806927dabfa81406eee"',
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AqkmbF8mVPVI3vZ8HP2ZOif",
    "x-fb-trace-id",
    "FBM3HxACPkE",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "586aKSyjsrq2bS2QT/25qwuPUSehBj207Ya17d6AzBdTS04q+pabiFCzOm9otIyiJHcBZWxy1dyqXLbQkVod2w==",
    "Date",
    "Wed, 01 Dec 2021 00:18:36 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { data: [] }, [
    "ETag",
    '"1050253aec7b29caff644806927dabfa81406eee"',
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "A3SMKoCXClHEXCaWKaYPmLp",
    "x-fb-trace-id",
    "GX5zNVNbVMK",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "agh40BAiDbh34caZ0OS0FXuPv52d95MXaXOEHuxU86S9EOb+Lk4OSOGIiCsThjgUeIVoNTIhAC4y/j07jYValA==",
    "Date",
    "Wed, 01 Dec 2021 00:18:36 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { data: [] }, [
    "ETag",
    '"1050253aec7b29caff644806927dabfa81406eee"',
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AY5_G5kgZVBLkHxLODRZUko",
    "x-fb-trace-id",
    "F/4nOrvovF6",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "rEMelNsbWiHybXdKyEcTc9BRiCIxz3MXcNDlmlrrQguKBG0o+hHstMOnZdr0OPTDPemV02sISwG7SDnELoVrYA==",
    "Date",
    "Wed, 01 Dec 2021 00:18:37 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { data: [] }, [
    "ETag",
    '"1050253aec7b29caff644806927dabfa81406eee"',
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AUYWPVV1TZm4sMdkqSwJV3v",
    "x-fb-trace-id",
    "Di2lYoZchLm",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "pzq/K7viqH8sX9eK5ooWCujZCwZxVBCT+x+lI67KJDnvB19+fj3mcdzVHQ8GBZweK5IRg1L//qgy6LLc8l4qfA==",
    "Date",
    "Wed, 01 Dec 2021 00:18:37 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { data: [] }, [
    "ETag",
    '"1050253aec7b29caff644806927dabfa81406eee"',
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AtepJ_FOefDm9MUN8ZeUvfB",
    "x-fb-trace-id",
    "DbHmlv/HiDz",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "VGc6qWxBnh2tcxsBf2ifSZV/565gRtqAY86nT5llALJhOTeHh4zXF3AHWuatJZ/LAUx6+9VhL4Eg/4Zz3Yfo8A==",
    "Date",
    "Wed, 01 Dec 2021 00:18:37 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { data: [] }, [
    "ETag",
    '"1050253aec7b29caff644806927dabfa81406eee"',
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AGQhCF4iRzsry_14X1A5-sj",
    "x-fb-trace-id",
    "AjJBTTMLyW0",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "+uZk3/dHI1MwZRYHhKJlU+Ilc1wvHyGVbFk2V6xa47IkImVTtUhEm9SaPCA/kTpr/BWJ8n/mYEm4G6lpT7hpJg==",
    "Date",
    "Wed, 01 Dec 2021 00:18:37 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { data: [] }, [
    "ETag",
    '"1050253aec7b29caff644806927dabfa81406eee"',
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AgeCmL329zK5JmWoxpgAfV1",
    "x-fb-trace-id",
    "BFG5gsYqkSU",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "uZzm5PHx3AOtf8KBC9RRJLgZg3IZ0XfC159BhuEOFLdpj9GOM4Tq/jg2w4Rz9q60nZVHQRHpGywSZVFiUyGuHg==",
    "Date",
    "Wed, 01 Dec 2021 00:18:38 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23849182047670582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "A4MO1F9CSafanm80qUYYxBu",
    "x-fb-trace-id",
    "FTFDG6aSo2n",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "zKSkzQ9V607cN6oX4McBnJM3kJzf8MzXp2zptPXBRZpZU3hmwL8l8YCLL/eVG18Zyh7ykXZ3vvPoNd+PnzMYSg==",
    "Date",
    "Wed, 01 Dec 2021 00:18:38 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "4229955495815004260",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AdT3WQKUeG8dy7zD6w8hsf0",
      "x-fb-trace-id",
      "Fi9wF96MB3h",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "+1eKFWCjvAIlfW4PZenunW4BMcA8zaL14vjHQvq2iTFTrxgh/PAMOmhhofe4BiiRbRbAlTfgIHhY8X7omI7yFg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:38 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23849182047670582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"f3d10222ddacff26ea5ed6dba4dd85f5416ed278"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ATDdJY56oq3uCxau9-Agnu8",
      "x-fb-trace-id",
      "HMs8W9Rit9j",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "bKddqIdcwfrIb/9IZ68/TA85bZMkfdHT3Q+EKyK6BTJ6ShBfP0VmZ7QFN9F3govw5OfEV9ode6YwnbO9wBhP/g==",
      "Date",
      "Wed, 01 Dec 2021 00:18:39 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23849182047670582", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
    [
      "ETag",
      '"02d0c69d0fe3cdf027d26659398e5c936ffd6219"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AWyWtCCsBGYgNwXjG4QVepg",
      "x-fb-trace-id",
      "CldqhbGqJ43",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "bmziy1yfE3psaBSAPaOSol9Jkx/gekc38rtev9NR3Jc5Hf2s53XPLTa5amxFoCvkB5gEAA69M0wpcWXRAgLz7A==",
      "Date",
      "Wed, 01 Dec 2021 00:18:39 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "69",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23849182047670582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"f3d10222ddacff26ea5ed6dba4dd85f5416ed278"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Auxjrm8XPsmyRDKBayISPm5",
      "x-fb-trace-id",
      "CAs1t6fstIa",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "sZM3Jwyg7i1xtJxuCPK7GD2Q7ShAuanV4Fsy6JgRt7Il1647qLqxTQAKQr7+Zw5oW6u8Y6EfQjnign56jy6z7A==",
      "Date",
      "Wed, 01 Dec 2021 00:18:39 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"94a24cd041b0a3b16866589a3e1a5b0be348722f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AS8E9J_f3stGaNhpLS6QJ15",
      "x-fb-trace-id",
      "HvcXTIKMFZA",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "zxvexuQjgtG462HamfBS+f7e06lc/UB/RhH1+REfkmS6Q0yHtkuZTW3mOHn5SUqQtBSQxfSCw4p7+ISNj5qBVw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:40 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A5XHQgncDCSQjg4XwHx0t1b",
      "x-fb-trace-id",
      "FNEyqn8hP3a",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "JePR3G2VNl7loFSfK7lnBgpOqp52bWGzXcaNK934UKsYJPOXPvrbqlEq85qR+l8egIP+eQkbX2APtPhUooEE6w==",
      "Date",
      "Wed, 01 Dec 2021 00:18:41 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"94a24cd041b0a3b16866589a3e1a5b0be348722f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AZys99MNANw2VhFnLfd7hvY",
      "x-fb-trace-id",
      "G2kN8K6M0nz",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "LSg9HmTkPEzcSDZCg9Fkh4DOVWPW43SkemAJYDF70tsP/rckZliN73zJjubvBvHrHd3vbGR1eMJiHrLORsvUaQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:41 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23849182049640582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AU6ARbegneM3KU-qPWRR917",
    "x-fb-trace-id",
    "BqC35Rfef8z",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "Udfz8ldNFKfmn/kKJSnZiSQ+VCSjHor9eIE+v241DVb8JQ49sQXsKYFOtU0N/WdtM99t2+Klgm3abaysABcoEA==",
    "Date",
    "Wed, 01 Dec 2021 00:18:42 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182049640582/users", {
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
    id: "23849182049640582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182049640582",
      session_id: "5838262032086682185",
      num_received: 2,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AOQftcT28isErpOX9MvP8XK",
      "x-fb-trace-id",
      "EZ25SxvMHI7",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "D+MLZRDb2tZmWYq57cN1leEqhrBDGuald96B8GCQ+M0Zlw9qL3yUUby5A2jcVFWwWT+QYF5Ie4232MqwRac4hg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:42 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23849182049640582", name: "(test) Group 2" },
        { id: "23849182047670582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"f0b80526ff09acd947e93e578984a8e88830a241"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A_BSmUiZF65yA8D68ndqgpn",
      "x-fb-trace-id",
      "EOKKSG2teeQ",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "pDEO5ghYP0TZ0oEDCVUTAYO9VBpKijt64aUUac8eie1fffwSW+NqxAWIjHdezpBT3rplGN7gvPY0yUUsRqUoxQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:42 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23849182047670582", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
    [
      "ETag",
      '"02d0c69d0fe3cdf027d26659398e5c936ffd6219"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AVKnKMJTnk8CBIEs6MCDkij",
      "x-fb-trace-id",
      "HMXH9qszFps",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "tjDSMAwiLZkQkqlt6N22wyZumyZfAeLkbWs8vVoO/HamLDsvRwd/LyeG7AHEYWV2s064z+GBCi/gwAI7tXsqHQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:42 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "69",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23849182049640582", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
    [
      "ETag",
      '"cd69ea867fc8386619e82474d0a93e43869c70b7"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A16obX6mejjpj2KZw6gruNw",
      "x-fb-trace-id",
      "GWEvAv5N5Ra",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "Y7y10vHAB7C5GPLvZMOjLnH0vMzTMxey0pKaX6WzzwL4+RLLRb0ddMmxV5qW/QTyqv1iz4RfQZMKUHEwTLDoyg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:42 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "69",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"392c6dc23aad667f08fd7ca35fd6a51a032f94f6"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AEOTGvbkQxSMO-Yj2736DYg",
      "x-fb-trace-id",
      "En7C5Jj7nBF",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "bcqSDksa3BtkGC3Wj3TTk7YdQ/t8LKaZx3KO3IRqj2VsaRJrnqLGO1rSHVhxOG8CJOztbBFS9OL7a8NX12NgjA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:43 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23849182047670582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23849182047670582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "3761857556148912661",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AC-UI4ROVECJqgulT_ucFHu",
      "x-fb-trace-id",
      "DV64dnPu1/1",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "MBEWbrM9/kERofNH1DNF5ydjIV6CqUqHVQglAsjobQ1pqIu3hk4PQ5SmPpYY1z0u2fmareYZEBctNzKIW+FMeA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:43 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"392c6dc23aad667f08fd7ca35fd6a51a032f94f6"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AQmM7P31AdsriACZhIjQ2iI",
      "x-fb-trace-id",
      "DWXZ+KXjsBv",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "Y72fCu/4lFWDwqwMqkF41rMs/OOSEyjWc/pMS7kM68+InVRdsXGcJfG6J+Biv9MIzkGb/nYL5mWv3MFDUu/FSA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:43 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23849182049640582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23849182049640582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182049640582",
      session_id: "3761857556148912661",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AnHkM4Nb84F-xMqAmoZg6Fq",
      "x-fb-trace-id",
      "AzoGzc2PUbS",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "PxjmtX8qpTMLpoH3rQJZPpzg/luXwEKLT9wjjCU1/S0K/vkggMfK4dyKE7lZ1S5wtxPO29TC+C/EhG+KGDNUUA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:43 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"392c6dc23aad667f08fd7ca35fd6a51a032f94f6"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AXKSnSmX0hUPcWaAY4gW9XG",
      "x-fb-trace-id",
      "E8PsL2iF6ed",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "i5xUGIddFeuridv/WD8mgCAQcQAOdzhFRqVZRBKhAM+iBCdE7SfWV+rPxt61XPPmAp2WuxrSX0GzQagnrlcfIg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:43 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AzXo8nJOL5Vwyn33onrOkgs",
      "x-fb-trace-id",
      "EhyvuB89/Zl",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "1CwEOqt7gHuS/BbKUwWFDE066iFPzYKmx1XOsltNGiVltvth//BotisaIsP9cvpQY6upMIhdvrLPE7oqSdiIWw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:44 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"392c6dc23aad667f08fd7ca35fd6a51a032f94f6"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A7KfiREXcVStS57UPdNY3im",
      "x-fb-trace-id",
      "B/FXEZOdnSy",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "tMRw48npmOaVh8lvei1bOI808NkmpxbgZH95njodECPEE8LBfMzBvXSWTAY6OZAridOO4umyJijx4MtZ2sh/lA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:44 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182049640582/users", {
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
    id: "23849182049640582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182049640582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AqasQIo6UVDPcCTmfUuvxtc",
      "x-fb-trace-id",
      "CGYdyl7LL02",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "DIPdxyaMMkEjSPt/4w3agzRLjDaT+nFwITRO0JSrqFmk+JtzEDCbC0XV2iP0+9bjx2YO99RUVXO6tCvcgvKKdw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:44 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23849182047670582", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
    [
      "ETag",
      '"02d0c69d0fe3cdf027d26659398e5c936ffd6219"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AahxnnT95PLseuBSDhN0KVf",
      "x-fb-trace-id",
      "BfT9In6iPgU",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "YnIIjurO0gNr6EvzK6iOV+n0E8fE3mUmfFLxyjK5qWNj307WqigXheU7/RUsLOut8SAf7UfobqySxX+L7GI2tw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:44 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "69",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23849182049640582", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
    [
      "ETag",
      '"cd69ea867fc8386619e82474d0a93e43869c70b7"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AMhoNxZ7A77-MpR4Yi51RvC",
      "x-fb-trace-id",
      "G6OO17IdOZA",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "aqIhIyfp7fygOgVtsYYOGWY7c0RDuY7YzMryRSgC16ibc+EYGr1rfQ0rXqUFUE+LW6tMwGfp5nIaU07SVMggfA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:45 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "69",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"392c6dc23aad667f08fd7ca35fd6a51a032f94f6"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AX2R2GpF6FC8a_fyIYrPau3",
      "x-fb-trace-id",
      "G5Q8IH3fv53",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "ubLom0n8duHhB7yOmjLE8jNi5Xg4CO+PQ+vbpeyeDvkpH6FxxlNStDYDZzKTcHyHHNa29vXf2kSwhw9rvDZvlQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:45 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23849182049640582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23849182049640582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182049640582",
      session_id: "3761857556148912661",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AOsXUxWCBL1dadrbo9fAKyi",
      "x-fb-trace-id",
      "Grl6rl3f72c",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "4UvsIATC5sl+zxVk+vzzVkXK7RzuBV+7/MtanvQqF8rtz+xw6cBU+Q+NzuJWQqxT9VcVHJ09jvIf2/Ohp+SiUQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:45 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"392c6dc23aad667f08fd7ca35fd6a51a032f94f6"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ACv4nvQmaDuimLEAs46IWmZ",
      "x-fb-trace-id",
      "EhqBvMzgk/+",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "bFwkwObYnlsCF5VC/D071qdEHCMTCcpEWPZutZZxZ7mPrOdpnyH9IPuRmr6VmfAM68CAOOy57BiMzPXozhQZvQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:45 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A7bReL89NbjcJwOmN-_HUAn",
      "x-fb-trace-id",
      "F1jaPEMqzXG",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "7cs172YXduKOsuNCdjlbQuDgVH9BeE2pQoth4DsiWVja57RSec0WTY+SHNqy4XLdb2zy0T/co6vqPMFOIBME5w==",
      "Date",
      "Wed, 01 Dec 2021 00:18:46 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23849182049640582", name: "(test) Group 2" },
        { id: "23849182047670582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"f0b80526ff09acd947e93e578984a8e88830a241"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A1O5GtFI_u1LsPdSb7qEnKX",
      "x-fb-trace-id",
      "F5egGDIZnk+",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "hr1CA84+VFHAKH9TWpyQMUr+/iSUftsSpA8fmYqPGEO9I3OgiDkTV03cGFekRle8vupzJY0cUJrvhmXvvmwZyQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:46 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"392c6dc23aad667f08fd7ca35fd6a51a032f94f6"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AzFr2w14dmrKq1chrSpdV9L",
      "x-fb-trace-id",
      "G3zL5DEA6VH",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "fJgBkww5beYx/wUmE48E3ou1mnu+T3QET/LToTf2AQOQEQWpDkNxavzk7aISvV7cLzX5+zaHl9rrtm2YcBZZEA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:46 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23849182052880582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AJdurQWUfj7m1PoD2P0li9y",
    "x-fb-trace-id",
    "Hob15Lf+r8B",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "CRCAHCLo90Qtpqt5XPJH2YSV3p1kP9j+wcgo+VGzPmajH4XWu02h9c5jn+5KB0H59n7G8tUqVLEtKwU5OY+0Ag==",
    "Date",
    "Wed, 01 Dec 2021 00:18:46 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182052880582/users", {
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
    id: "23849182052880582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182052880582",
      session_id: "6607804945435081584",
      num_received: 151,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A6FYK2HTBVFwRYsbbP18URc",
      "x-fb-trace-id",
      "DfQC5llBRZp",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "8WwGXknCMz0UQ0wG4jNoBDsCzAAkuwWyCfBObP6R120QDrsgf5dYLz1mzVNHt/E9yBf//y4qIY5H/ORdr7CqeQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:47 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "140",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23849182052880582", name: "(test) Group 3" },
        { id: "23849182049640582", name: "(test) Group 2" },
        { id: "23849182047670582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e2ba9991944071e0dc5b07835728fc633912d09d"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Ag5sIUbCAaaOsdnCV6yST7N",
      "x-fb-trace-id",
      "HGqGexwfLGT",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "s9aoOIAgj83Y/VadGxNx07xAknnkwR9gdoBneoMmoLWvsa0w4E5VsPymjvyYCYsN1IFe2rPcIe/eC9SuYL+JpA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:47 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23849182052880582", {})
  .query({
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
    [
      "ETag",
      '"1478d41449caf805980799e82e7c067e179898ef"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AYajn7hT8-fKTY4Ywa6-zY4",
      "x-fb-trace-id",
      "CbRBzv2Ikp6",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "X5njUh3Cpjax5PeyJBWxu02E0hgnkGJBlm5OpyEKBeHrGRsff1EiDElzcUS4cO514M8L+LK5jOq6H+mYWmPTwQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:47 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "69",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AC18yDLYTRxLNnptgckhtNU",
      "x-fb-trace-id",
      "FPHw3YkyEa/",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "pwxRRMT/NCGoM5FoX8LIotFT5f0mqYG6EjwiZlzLErut5BqOk7j1avBBkxk5lWdFus+dpWMXV0bRXE8NBk2IOQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:47 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23849182047670582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23849182047670582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "3761857556148912661",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AR6TuW2TOcK0iiu4lRHEfGw",
      "x-fb-trace-id",
      "BkEMhM5JsZ2",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "oHD5cb4xlcnwXHExuXmmXL3DMHF7SbsF+yTwtu2V9JG1w84TgPLocLJYeCw9xfFlQmT6z00qanXZaKKPbyCtHA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:47 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":32,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AUJ1PrnP-l7s6ONiJelZbri",
      "x-fb-trace-id",
      "CRBtVFn5Fh6",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "UO02/MLBU5Hkio4+viKyGSYGscmognXoL1/UMg/D/KOwtFqKosONPDgEaaLM+DErBzZCENhMroyJCQGl/BWsUA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:48 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Af5oLiK-V8M1BwBveMyRjY3",
      "x-fb-trace-id",
      "D0irK6zOm/G",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "WulcF4wNPNL3SaiSh2LF5+tfM3C281g9wZH3Ub0XZ/sJ5pQOAeksQXS+3EgDpF5PE2YFPx2wyIxxUVUIYWRFtg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:48 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AuXXURGHL6DkSqBkQD_0BS7",
      "x-fb-trace-id",
      "CHx+ONfGgnW",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "3bKdzBRTNICTANDV8mlvVJ24GrQjbqERkvIsIEzSRPLBW/wPyd2+ct4OlBwoTZ8zaYt2kFLh/AdDE7ODYGpn1g==",
      "Date",
      "Wed, 01 Dec 2021 00:18:48 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ArNdJJ-ir3-wTDcX_YxGMip",
      "x-fb-trace-id",
      "AKJNhYqr2Ck",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "Iw4COhLuHhM+2b8nfGTpY/lY0OQF7Lt//uOfsOOhXmc0+RqBeAL4sETmd0Cd9pl467sO/DVWSQ6Ozl1KlhMUNg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:48 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A_DJLF00-MfNRdu0hazo35S",
      "x-fb-trace-id",
      "CT6Iwl/dstj",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "EH1ls41t3vxkXPmA+b+l2qGM/dINNZfvFXduA2bkWLJP8MWZ7ND/Uit10cOgDjw4xY8ySHl5va3S9IuAZoPUhA==",
      "Date",
      "Wed, 01 Dec 2021 00:18:49 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AmKuLSD5VVAfut5nHfJdhag",
      "x-fb-trace-id",
      "HS0MXljFDJ3",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "R6S1GaHu+N+mVWv/xvODbkIYXuFmqKEdaA+NpoeFk+cqZvevunCbRIXze4TN2+ThjUHejzkptQqCYAZaPY/X4A==",
      "Date",
      "Wed, 01 Dec 2021 00:18:49 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ALYWgLv5tK_2bJCuDlP0h2B",
      "x-fb-trace-id",
      "HDw8/PrEyV6",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "cdBXwA/wH8NvTAAXsMI0zEWyCM+YlbwS4b3y567D8uzrq7jZBeFByAvuiHvXLv7dTwA6oFP9Twt27bXiSvFVQw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:49 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "4258863787278652924",
      num_received: 2,
      num_invalid_entries: 1,
      invalid_entry_samples: {
        '["e190e9b20a82820ff09d873ae4dfe092b21bd625c259d54ab8773ff022eb08e0","","e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","",""]':
          "empty external ID",
      },
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AkcTcLwNyEaswOugMjDBA68",
      "x-fb-trace-id",
      "B0JPVQFm5Y2",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "dsvkU1wWzApTMFsRrEpLVOCHWPQzu0bjsNFIfj92/HuUnOKrsFxLF4d6M7o0yoO0KXFeAr/Ofy6mc9cchnl3qg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:49 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Agt8MbGnshyE4GCTFXINKcB",
      "x-fb-trace-id",
      "Ec0Zn9eKGoF",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "U3y6uhJ5tRuG9cEKP3seVewskAfmC2Gsg0J/KxTg1CNFjRGSuNcwjlDphM0ypD10iRIeSEvQ1hWg088tTNIeAQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:49 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AVrpdqKq5Fp0JD6lgAfKxiN",
      "x-fb-trace-id",
      "D/KPRpB/2uv",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "79eIQG+kp/rwOkQHuBUCJjlngaIXLDKo8EQ+9xZ0bYCYflIVW6I0Om74Nu2dpV1z2ksin1bpMxD4fjSZFGrFcg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:50 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A5CuDoCNj2j7yOVaBEpNBeH",
      "x-fb-trace-id",
      "Cu70Rk1jebm",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "wRM5dLFy6YmGtgD7hdMI55+Nx7yHVS4KEIJdSZ0NQn+HmHHXt331bVYrQaA46NnYeoZmFjEZ/piseIQ611tyYw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:50 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182049640582/users", {
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
    id: "23849182049640582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182049640582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AdjVZL18M-7sAG5p0v_9_wQ",
      "x-fb-trace-id",
      "EPy13GlllDQ",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "s6htjB5C82Wxhgzc3A6F2t5N/OadhRDa7zOvaxbejBzMkHZJiZBS8pqQAD5u/W4iLcWEnNuEhrecRH7UqGJEZw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:50 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AO1b1qZoo-7l_CaEoVeECVI",
      "x-fb-trace-id",
      "EMM+xwyEkDU",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "Gz3xheCyMcNcRpsa8V2zARo7jzgz3z/gAhKCvLSp/aHGxOyxIx5qn1it272INUL3S4+mPHh8nAi9cvuJ/jQ3EQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:50 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AvxjBsfMNmWtuuRCKdJsgoa",
      "x-fb-trace-id",
      "ESZPugHLjgq",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "32CF3r2uod1mABueaqZss/1ZiJIZnltR08oyyH49NqmJcsMRAM4SFrWdStOLB0hbMIh2lA+RQ7KjtsFH0xF3Hw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:51 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    limit: "500",
    fields: "id%2Cname%2Csubtype",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [
        { id: "23849182052880582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23849182049640582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23849182047670582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e40853e149b8c06fba5f76e894f68f9421fcc1b3"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AlQKbrCFx3IsOxiMdzBOmHB",
      "x-fb-trace-id",
      "HSjtTJet30k",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "oOUD58NTwXLS9CrLtMyZmOCOVyISiAu+huR5F10Tj3kJwMecF7bFcwcK+N/tj6xa7ReuxyYNRSFIsVH10MfpKw==",
      "Date",
      "Wed, 01 Dec 2021 00:18:51 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23849182047670582/users", {
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
    id: "23849182047670582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23849182047670582",
      session_id: "5838262032086682185",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":5,"total_cputime":0,"total_time":1}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A6g1d3NFMrcc6LFGbbygoio",
      "x-fb-trace-id",
      "BGhJzxaLFDV",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "J/LEkCmwSB3sWjQvoWbuk3i4o1Hu1g7TrgPvzMBY+qrQa9ideh5QWMPmE+9AMBJSk3T+hTbZiUzIkvx9XXfB0Q==",
      "Date",
      "Wed, 01 Dec 2021 00:18:51 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23849182052880582", name: "(test) Group 3" },
        { id: "23849182049640582", name: "(test) Group 2" },
        { id: "23849182047670582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUmYxMTBwMVhkR3JwZAnE1VGhCVEJXMUQtUTJaX0RxR2hYRGlJU2RZALXNOcF94TzkxMTZArc1RiNkpIVFU1T3NPT2FIeUtnOWNLWTgtR3R5ZAXBuMmhHRWFR",
        },
      },
    },
    [
      "ETag",
      '"e2ba9991944071e0dc5b07835728fc633912d09d"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AJGVNmvUB6_1X3A4p2divME",
      "x-fb-trace-id",
      "Aj/i4kyaVQF",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "4a5tLyKC0QgqV3A1Vaoe8yKH+N87+uSksTAqPbcoQkhIDYJd7gQ4D6tHoIlPV4fUw3DDxypubY21XTAmOH2pKg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:51 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23849182047670582", {})
  .query({
    id: "23849182047670582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "As4LjGVGsB3uDgtOZLf94np",
    "x-fb-trace-id",
    "CdcyyQdRiHJ",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "izDWGE0FtovLlU5mPa1E2Yemlf9fP4CHgcgLfVdp4/malJGjUZcnoobzXPYmzbev39eTVH0ITUzxN4NjY41f8Q==",
    "Date",
    "Wed, 01 Dec 2021 00:18:52 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23849182052880582", name: "(test) Group 3" },
        { id: "23849182049640582", name: "(test) Group 2" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUkF6bl93XzZAxdURmWk1OSjRyNHk4ZAlA5RTlEbGtIa0JLXzlnOTR3N2k4RjFSUGExd1c5RkVQcWF4RjFPZADZAEOFlVcUlWLWhjNlpTR1hvMjRMSFBDOUxn",
        },
      },
    },
    [
      "ETag",
      '"cb198b635a251a69bf2beccad3daba7e58925d76"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AKobKysJWc5ALYHzpFmPNtx",
      "x-fb-trace-id",
      "CBBjQh1cNGq",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "Gg/WfuyiFFEqnfuC6GO77nCRzspKeVtHi07Iw7mHvKx6hqcctI5WXyBlnjO9CAiDs/m+1+j/NKDglGkKvDJjLg==",
      "Date",
      "Wed, 01 Dec 2021 00:18:52 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23849182049640582", {})
  .query({
    id: "23849182049640582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "A0NxyX37BiCgRlNNAjQD31R",
    "x-fb-trace-id",
    "FKN6TYt8JhC",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "zStyoNwybJQPh9kEiFIppc0LoRTVUPDoY0PEHFX+bSmqE6Z+oWACs8DDvUHE/DqzMdsbtJjHYEdQu1fkHdEUGQ==",
    "Date",
    "Wed, 01 Dec 2021 00:18:53 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23849182052880582", name: "(test) Group 3" }],
      paging: {
        cursors: {
          before:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
          after:
            "QVFIUlVwVGtIc3c3LS01dDd3ZA3JlS01mU3RYVEtqSmpfN2FPVDg5RU9XX3ZArNkJOUTVYMnQ4LUZAXMUIwWVRIbTJMbjZA2YllrMFhqZA3FpMDZAjWU5RekYtWWdn",
        },
      },
    },
    [
      "ETag",
      '"59c8405f109c95b45e7df38cd065c4319fc59f04"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v12.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AMI7sCWb2hkrXWcu4CFiM_q",
      "x-fb-trace-id",
      "FVCnzyt2cC+",
      "x-fb-rev",
      "1004781196",
      "X-FB-Debug",
      "eImeQUl3OJ5kzBfyl/ZR+++N1ao56Wo3mNWSc3KZ14sIjBIDkmHzxmblIUXTCy8R2VUbA1O99vBtFsuGbOctCQ==",
      "Date",
      "Wed, 01 Dec 2021 00:18:54 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23849182052880582", {})
  .query({
    id: "23849182052880582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(200, { success: true }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":33,"total_cputime":3,"total_time":7,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v12.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AWsycKWEp9Ntu5y3Lbe_GJP",
    "x-fb-trace-id",
    "C7inKPDroXT",
    "x-fb-rev",
    "1004781196",
    "X-FB-Debug",
    "Ti9Kr/aTjDJoNiCJ04edc0cHrTWYA7dRbBWlM+usu7ti6+9eWW7TEbGci5LGsmYIgK4w5Y5RJzE6PnWsE3wpsA==",
    "Date",
    "Wed, 01 Dec 2021 00:18:55 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
